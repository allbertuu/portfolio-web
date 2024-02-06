import GitHubIcon from '@/assets/icons/GitHub';
import undrawMoonlightImg from '@/assets/icons/undraw_moonlight.svg';
import creatorImg from '@/assets/imgs/me.svg';
import { initScrollReveal } from '@/assets/scripts/scrollReveal';
import aboutMe from '@/data/aboutMe.json';
import profession from '@/data/profession.json';
import {
  ArrowDown as ArrowDownIcon,
  Briefcase as BriefcaseIcon,
  ClockCountdown,
  GlobeHemisphereWest,
  Heart as HeartIcon,
  Toolbox,
  UserList as UserListIcon,
  Wrench,
} from '@phosphor-icons/react';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import { ptBR } from 'date-fns/locale';
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

  const currentYear = new Date().getFullYear();
  const myCurrentAge = currentYear - 2003;
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
                  Software Developer
                  <br className="block sm:hidden" /> <strong>(FE-heavy)</strong>
                </h2>
                {/* Container My Socials */}
                <MySocials className="mt-8" />
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
                  Quero poder trabalhar remoto, viajando pelo mundo{' '}
                  <GlobeHemisphereWest
                    className="text-accent inline-block"
                    weight="fill"
                  />{' '}
                  e vivendo novas experiências junto a minha esposa, atualmente
                  namorada (<em>for a while</em>...). <br />A tecnologia{' '}
                  <strong>me possibilita</strong> esse sonho.
                </p>

                <p>
                  <HeartIcon
                    className="text-accent inline-block"
                    weight="fill"
                  />{' '}
                  Me interesso principalmente por <em>web design</em>,
                  construção de interfaces centradas no usuário (
                  <em>UI/UX Design</em>), e{' '}
                  <em>
                    <abbr title="Leia 'Código limpo', de Robert C. Martin">
                      clean code
                    </abbr>
                  </em>
                  . Gosto e tenho aptidão em criar soluções, resolver problemas
                  reais decompondo-os{' '}
                  <Wrench className="text-accent inline-block" weight="fill" />{' '}
                  em partes menores e mais simples, pouco importa a tecnologia
                  usada para isso.
                </p>

                <p>
                  Atualmente tenho {myCurrentAge} anos, e estou cursando{' '}
                  <strong>{education.course}</strong> na {education.institution}{' '}
                  {formatDistanceToNow(education.startDate, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                  .
                </p>
              </article>

              <div className="separator my-4 intervalReveal" />

              <article role="listitem" className="intervalReveal">
                <div className="flex gap-2 items-center text-accent mb-2">
                  <BriefcaseIcon className="text-2xl" weight="fill" />
                  <h4 className="leading-none">Profissão</h4>
                </div>

                <p>
                  Com{' '}
                  <strong>
                    {formatDistanceToNow(profession.startDate, {
                      locale: ptBR,
                    })}
                  </strong>{' '}
                  de experiência em <strong>desenvolvimento de software</strong>
                  , comecei minha carreira como{' '}
                  <abbr title="Sou capaz de criar interfaces de sistemas que sejam agradavéis, úteis e facéis de usar.">
                    <em>Frontend Developer</em>
                  </abbr>
                  , desenvolvendo interfaces como portais de vagas, sistemas de
                  contabilidade, landing pages e criação de software
                  personalizado. Já atuei tanto para startups, quanto empresas
                  de pequeno porte.
                </p>

                <p>
                  <ClockCountdown
                    className="text-accent inline-block"
                    weight="fill"
                  />{' '}
                  Hoje em dia desenvolvo soluções para a web, como aplicações de
                  ponta a ponta <em>backend</em> + <em>frontend</em>, estáveis e
                  perfomáticas. Sempre com um olhar apurado para o design e
                  usabilidade.
                </p>

                <p>
                  Minha stack de ferramentas{' '}
                  <Toolbox className="text-accent inline-block" weight="fill" />{' '}
                  principais são{' '}
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

            {/* <p className="text-base sm:text-lg mx-auto text-center originBottomReveal intervalReveal delaySmallReveal">
              Em breve estarão aqui 2 dos meus <strong>maiores projetos</strong>
              , dentre os + 70 já feitos.
            </p> */}

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
