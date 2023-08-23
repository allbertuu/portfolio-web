import {
  ArrowDown as ArrowDownIcon,
  GithubLogo as GithubLogoIcon,
  Briefcase as BriefcaseIcon,
  Heart as HeartIcon,
  UserList as UserListIcon,
} from "phosphor-react";
import creatorImg from "@assets/imgs/me.svg";
import { initScrollReveal } from "@scripts/scrollReveal";
import { useEffect } from "react";
import { ProjectCard, MySocials } from "@components/index";
import { Container, Header } from "@components/layout";
import { ArrowUp, Link, SectionTitle, Separator } from "@components/ui";
import undrawMoonlightImg from "@assets/icons/undraw_moonlight.svg";
import aboutMe from "@data/aboutMe.json";
import profession from "@data/profession.json";

function App() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  const { age, education } = aboutMe;

  return (
    <>
      <Header />

      <main className="overflow-hidden">
        {/* Introduction Section */}
        <section className="shadow-xl border-b border-b-slate-50/10">
          <Container className="h-screen lg:h-[95vh]">
            <div className="grid grid-cols-1 content-center lg:grid-cols-2 h-full gap-8 items-center justify-items-center">
              {/* Container Presentation */}
              <div className="order-2 relative px-4 lg:order-1 text-center lg:text-left">
                <h3 className="originLeftReveal intervalReveal text-muted/80 text-xl lg:text-2xl">
                  Olá! Eu me chamo,
                </h3>

                <h1 className="originLeftReveal intervalReveal text-[2.5rem] lg:text-6xl font-bold mb-1">
                  Alberto Santos.
                </h1>

                <h2 className="originLeftReveal intervalReveal text-2xl lg:text-3xl italic text-muted leading-7">
                  Desenvolvedor
                  <br className="block sm:hidden" /> <strong>Frontend</strong> e{" "}
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
                  className="delaySmallReveal md:originRightReveal h-[10rem] lg:h-[25rem] drop-shadow-xl shadow-red-500/30 border-2 border-red-600/40 rounded-[33%_67%_37%_63%_/_66%_37%_63%_34%]"
                />
              </div>
            </div>

            <a href="#about-me">
              <ArrowDownIcon
                size="1.8rem"
                role={"button"}
                className="mx-auto -mt-10 animate-bounce text-white/70 cursor-pointer"
              />
            </a>
          </Container>
        </section>
        {/* About Me Section */}
        <section
          id="about-me"
          className="relative py-16 after:block after:absolute after:bottom-0 after:h-[2px] after:shadow-sm after:w-full after:rotate-1 after:bg-red-500"
        >
          <Container className="max-w-[64rem]">
            <img
              src={undrawMoonlightImg}
              className="w-full sm:w-3/4 mx-auto pb-6 delaySmallReveal"
              alt="Ilustração de uma pessoa sentada em frente a uma fogueira em um lugar com árvores e a luz da lua ao fundo"
            />

            <SectionTitle
              text="Sobre mim"
              className="mb-4 originLeftReveal intervalReveal"
            />

            <div role={"group"} className="mt-2 delayMediumReveal">
              <article role={"listitem"} className="intervalReveal">
                <div className="flex gap-2 items-center text-red-800 mb-2">
                  <BriefcaseIcon className="text-2xl" weight="fill" />
                  <h4 className="font-semibold leading-none">Profissão</h4>
                </div>

                <p>
                  Bom, eu possuo + {profession.years}{" "}
                  {profession.years > 1 ? "anos" : "ano"} de experiência como{" "}
                  <abbr title="Desenvolvedor Frontend: mestre das interfaces">
                    {profession.name}
                  </abbr>
                  , desenvolvendo interfaces como: {profession.works}. Possuo
                  experiência em entregas de software para empresas do{" "}
                  {profession.industry_sector}.
                  <br />
                  Tenho muita afinidade com{" "}
                  <Link href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
                    JavaScript
                  </Link>{" "}
                  e <Link href="https://pt-br.reactjs.org/">ReactJS</Link>.
                </p>
              </article>

              <Separator />

              <article role={"listitem"} className="intervalReveal">
                <div className="flex gap-2 items-center text-red-800 mb-2">
                  <HeartIcon className="text-2xl" weight="fill" />
                  <h4 className="font-semibold leading-none">Interesses</h4>
                </div>

                <p>
                  Me interesso principalmente por web design, construção de
                  interfaces centradas no usuário (UI/UX Design), e{" "}
                  <abbr title="Leia 'Código limpo', de Robert C. Martin">
                    clean code
                  </abbr>
                  . Também possuo extrema facilidade em aprender novas
                  tecnologias. Me considero um desenvolvedor flexível e
                  competente.
                </p>
              </article>

              <Separator />

              <article role={"listitem"} className="intervalReveal">
                <div className="flex gap-2 items-center text-red-800 mb-2">
                  <UserListIcon className="text-3xl" weight="fill" />
                  <h4 className="font-semibold leading-none">Quem sou eu</h4>
                </div>

                <p>
                  Nascido em Pernambuco, já morei em muitos lugares pelo Brasil.
                  Meu espirito inquieto, curioso e inovador, me fizeram desde
                  muito novo - 16 anos - escolher, por amor, a área de
                  programação. Hoje crio soluções para a web e para dispositivos
                  móveis, sempre com um olhar diferenciado no design e na
                  usabilidade.
                  <br /> Atualmente tenho {age} anos, e estou cursando{" "}
                  {education.course} na {education.institution} desde{" "}
                  {education.year}.
                </p>
              </article>
            </div>
          </Container>
        </section>
        {/* My Projects Section */}
        <section id="projects" className="py-10 mt-8">
          <Container>
            <SectionTitle
              text="Projetos"
              className="mx-auto originLeftReveal"
            />

            <div className="flex flex-wrap justify-center gap-12 mt-12 mb-6 originBottomReveal">
              {profession.projects.map((project) => (
                <ProjectCard
                  key={project.name}
                  name={project.name}
                  segment={project.segment}
                  githubLink={project.links.github}
                  liveUrl={project.links.site}
                  about={project.about}
                />
              ))}
            </div>

            <p className="text-center text-lg flex gap-1 items-center justify-center">
              <Link href="https://github.com/allbertuu?tab=repositories">
                Clique aqui para ver mais projetos
              </Link>

              <GithubLogoIcon size="1.125rem" />
            </p>
          </Container>
        </section>
      </main>

      {/* <Footer /> */}

      <ArrowUp />
    </>
  );
}

export default App;
