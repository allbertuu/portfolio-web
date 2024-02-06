import GitHubIcon from '@/assets/icons/GitHub';
import { Broadcast as BroadcastIcon } from '@phosphor-icons/react';
import { ExternalLink } from '../ExternalLink';
import { classNames } from '@/utils';

interface IProjectCardProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  segment: string;
  about: string;
  githubLink: string;
  liveUrl?: string;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({
  name,
  segment,
  about,
  githubLink,
  liveUrl,
  ...props
}) => {
  return (
    <article
      {...props}
      className={classNames(props.className || '', 'project-card')}
    >
      <h4 className="text-accent -mb-2">{name}</h4>

      <span className="text-secondary/70 text-[85%] italic">{segment}</span>

      <p className="my-1 leading-snug flex-1 text-[90%]">{about}</p>

      <div className="flex justify-between">
        <ExternalLink
          href={githubLink}
          className="flex gap-1 items-center w-fit hover:opacity-70 transition-all font-normal"
        >
          <GitHubIcon fill="#fe355c" /> GitHub
        </ExternalLink>

        {liveUrl && (
          <ExternalLink
            href={liveUrl}
            className="flex gap-1 items-center w-fit hover:opacity-70 transition-all font-normal"
          >
            <BroadcastIcon color="#fe355c" /> Live
          </ExternalLink>
        )}
      </div>
    </article>
  );
};
