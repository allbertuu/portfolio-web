import GitHubIcon from '@assets/icons/GitHub';
import { FC } from 'react';
import { IProjectCardProps } from './types';
import { Broadcast as BroadcastIcon } from 'phosphor-react';

const ProjectCard: FC<IProjectCardProps> = ({
  name,
  segment,
  about,
  githubLink,
  liveUrl,
}) => {
  return (
    <article className="project-card">
      <h4 className="text-red-500 -mb-2 font-semibold">{name}</h4>

      <span className="text-muted text-[85%] italic">{segment}</span>

      <p className="my-1 leading-snug flex-1 text-[90%] text-justify">
        {about}
      </p>

      <div className="flex justify-between">
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="flex gap-1 items-center w-fit hover:opacity-70 transition-all font-normal"
        >
          <GitHubIcon fill="#fe355c" /> GitHub
        </a>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex gap-1 items-center w-fit hover:opacity-70 transition-all font-normal"
          >
            <BroadcastIcon color="#fe355c" /> Live
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
