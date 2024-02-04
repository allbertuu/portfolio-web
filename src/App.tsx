import GitHubIcon from '@/assets/icons/GitHub';
import undrawMoonlightImg from '@/assets/icons/undraw_moonlight.svg';
import creatorImg from '@/assets/imgs/me.svg';
import { initScrollReveal } from '@/assets/scripts/scrollReveal';
import aboutMe from '@/data/aboutMe.json';
import profession from '@/data/profession.json';
import {
  ArrowDown as ArrowDownIcon,
  Briefcase as BriefcaseIcon,
  Heart as HeartIcon,
  UserList as UserListIcon,
} from 'phosphor-react';
import { useEffect } from 'react';
import { ExternalLink } from './components/ExternalLink';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MySocials } from './components/MySocials';
import { ProjectCard } from './components/ProjectCard';
import { ToTop } from './components/ToTop';

function App() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  const { education } = aboutMe;

  const myCurrentAge = new Date().getFullYear() - 2003;
  const techLinks = {
    react: 'https://react.dev/',
    javascript: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
  };

  return (
    <>
      <Header />

      <main>
        {/* Introduction Section */}
        <section className="shadow-xl border-b border-b-accent">
          <div className="container mx-auto px-4 min-h-screen h-[calc(100vh_-_1rem)]">
            <div className="grid grid-cols-1 content-center lg:grid-cols-2 h-full gap-8 md:gap-2 items-center justify-items-center">
              {/* Container Presentation */}
              <div className="order-2 relative px-4 lg:order-1 text-center lg:text-left">
                <h3 className="originLeftReveal load-hidden intervalReveal text-muted/80 text-xl lg:text-2xl">
                  Olá! Eu me chamo,
                </h3>

                <h1 className="originLeftReveal load-hidden intervalReveal text-[2.5rem] lg:text-6xl font-bold mb-1">
                  Alberto Santos.
                </h1>

                <h2 className="originLeftReveal load-hidden intervalReveal text-2xl lg:text-3xl italic text-secondary/80 leading-7">
                  Desenvolvedor
                  <br className="block sm:hidden" /> <strong>Frontend</strong> e{' '}
                  <strong>UX Designer</strong>
                </h2>
                {/* Container My Socials */}
                <MySocials className="mt-8 sm:mt-4" />
              </div>
              {/* Container The Creator */}
              <div className="px-4 order-1 mt-4 lg:mt-0 lg:order-2">
                <img
                  src={creatorImg}
                  alt="Criador do website"
                  className="delaySmallReveal md:originRightReveal load-hidden h-[10rem] lg:h-[25rem] drop-shadow-xl border-2 border-accent/40 rounded-[33%_67%_37%_63%_/_66%_37%_63%_34%]"
                />
              </div>
            </div>

            <a
              href="#about-me"
              className="delayMediumReveal intervalReveal load-hidden"
            >
              <ArrowDownIcon
                size="1.8rem"
                role={'button'}
                className="mx-auto -mt-10 animate-bounce text-white/70 cursor-pointer"
              />
            </a>
          </div>
        </section>
        {/* About Me Section */}
        <section
          id="about-me"
          className="bg-secondary overflow-hidden relative pb-16 pt-24 after:block after:absolute after:bottom-0 after:h-[2px] after:shadow-sm after:w-full after:bg-accent"
        >
          <div className="container mx-auto px-4 max-w-[64rem]">
            <img
              src={undrawMoonlightImg}
              className="w-full sm:w-3/4 mx-auto pb-6 delaySmallReveal"
              alt="Ilustração de uma pessoa sentada em frente a uma fogueira em um lugar com árvores e a luz da lua ao fundo"
            />

            <h2 className="section__title text-primary mb-4 originLeftReveal intervalReveal">
              Sobre mim
            </h2>

            <div
              role={'group'}
              className="mt-2 delayMediumReveal text-black/90"
            >
              <article role="listitem" className="intervalReveal">
                <div className="flex gap-2 items-center text-accent mb-2">
                  <UserListIcon className="text-3xl" weight="fill" />
                  <h4 className="leading-none">Quem sou eu</h4>
                </div>

                <p>
                  Nascido em Pernambuco, já morei em muitos lugares pelo Brasil.
                  Meu espirito inquieto, curioso e inovador, me fizeram desde
                  muito novo - 16 anos - escolher, por amor, a área de
                  programação.
                </p>

                <p>
                  Hoje crio soluções para a web e para dispositivos móveis,
                  sempre com um olhar diferenciado no design e na usabilidade.
                </p>

                <p>
                  Atualmente tenho {myCurrentAge} anos, e estou cursando{' '}
                  {education.course} na {education.institution} desde{' '}
                  {education.year}.
                </p>
              </article>

              <div className="separator my-4 intervalReveal" />

              <article role="listitem" className="intervalReveal">
                <div className="flex gap-2 items-center text-accent mb-2">
                  <HeartIcon className="text-2xl" weight="fill" />
                  <h4 className="leading-none">Interesses</h4>
                </div>

                <p>
                  Me interesso principalmente por web design, construção de
                  interfaces centradas no usuário (UI/UX Design), e{' '}
                  <abbr title="Leia 'Código limpo', de Robert C. Martin">
                    clean code
                  </abbr>
                </p>

                <p>
                  Sou apaixonado em criar soluções, resolver problemas reais,
                  pouco importa a tecnologia usada para isso. Eu gosto e quero
                  impactar a vida de pessoas.
                </p>
              </article>

              <div className="separator my-4 intervalReveal" />

              <article role="listitem" className="intervalReveal">
                <div className="flex gap-2 items-center text-accent mb-2">
                  <BriefcaseIcon className="text-2xl" weight="fill" />
                  <h4 className="leading-none">Profissão</h4>
                </div>

                <p>
                  Bom, eu possuo + {profession.years}{' '}
                  {profession.years > 1 ? 'anos' : 'ano'} de experiência como{' '}
                  <abbr title="Sou capaz de criar interfaces de sistemas que sejam agradavéis, úteis e facéis de usar.">
                    <em>{profession.role}</em>
                  </abbr>
                  , desenvolvendo interfaces como: {profession.works}. Possuo
                  experiência entregando software para startups e empresas de
                  pequeno porte.
                </p>

                <p>
                  Quero poder trabalhar remoto, viajando pelo mundo e vivendo
                  novas experiências junto a minha esposa, atualmente namorada (
                  <em>for a while</em>...). <br />A tecnologia me possibilita
                  esse sonho.
                </p>

                <p>
                  Minha stack de ferramentas principais são{' '}
                  <ExternalLink href={techLinks.javascript}>
                    <em>JavaScript</em>
                  </ExternalLink>{' '}
                  e{' '}
                  <ExternalLink href={techLinks.react}>
                    <em>ReactJS</em>
                  </ExternalLink>
                  .
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* Side-projects Section */}
        <section id="projects" className="py-16 mt-6">
          <div className="container mx-auto px-4">
            <h2 className="section__title mx-auto originLeftReveal">
              Projetos paralelos
            </h2>

            <p className="text-base sm:text-lg mx-auto text-center originBottomReveal intervalReveal delaySmallReveal">
              Em breve estarão aqui 2 dos meus <strong>maiores projetos</strong>
              , dentre os + 70 já feitos.
            </p>

            <div
              role="group"
              className="flex flex-wrap justify-center gap-12 mt-8 mb-6 originBottomReveal"
            >
              {profession.projects.map((project) => (
                <ProjectCard
                  key={project.name}
                  name={project.name}
                  segment={project.segment}
                  githubLink={project.links.github}
                  liveUrl={project.links.site}
                  about={project.about}
                  role="listitem"
                />
              ))}
            </div>

            <p className="text-center text-lg flex gap-1 items-center justify-center originBottomReveal">
              <ExternalLink href="https://github.com/allbertuu?tab=repositories">
                Clique aqui e confira (muito) mais
              </ExternalLink>

              <GitHubIcon fill="rgb(226 232 240 / 0.95)" />
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <ToTop />
    </>
  );
}

export default App;
