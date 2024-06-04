import GitHubIcon from '@/assets/icons/GitHub';
import profession from '@/data/profession.json';
import { ExternalLink } from '../ExternalLink';
import { ProjectCard } from '../ProjectCard';

export const SideProjectsSection = () => {
  return (
    <section id="projects" className="py-16 mt-6">
      <div className="container mx-auto px-4">
        <h2 className="section__title mx-auto originLeftReveal">
          Meus projetos
        </h2>

        <div
          role="group"
          className="flex flex-wrap justify-center gap-12 mt-8 mb-6 originBottomReveal"
        >
          {profession.projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              stack={project.stack}
              githubLink={project.links.github}
              liveUrl={project.links.site}
              about={project.about}
              role="listitem"
            />
          ))}
        </div>

        <p className="text-center text-lg flex gap-1 items-center justify-center originBottomReveal">
          <ExternalLink href="https://github.com/allbertuu?tab=repositories&q=&type=&language=&sort=stargazers">
            Clique aqui e confira (muito) mais
          </ExternalLink>

          <GitHubIcon fill="rgb(226 232 240 / 0.95)" />
        </p>
      </div>
    </section>
  );
};
