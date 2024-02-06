import GitHubIcon from '@/assets/icons/GitHub';
import profession from '@/data/profession.json';
import { ExternalLink } from '../ExternalLink';
import { ProjectCard } from '../ProjectCard';

export const SideProjectsSection = () => {
  return (
    <section id="projects" className="py-16 mt-6">
      <div className="container mx-auto px-4">
        <h2 className="section__title mx-auto originLeftReveal">
          Projetos paralelos
        </h2>

        {/* <p className="text-base sm:text-lg mx-auto text-center originBottomReveal intervalReveal delaySmallReveal">
          Em breve estarão aqui 2 dos meus <strong>maiores projetos</strong>,
          dentre os + 70 já feitos.
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
  );
};
