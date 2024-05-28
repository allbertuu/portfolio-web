import GitHubIcon from '@/assets/icons/GitHub';
import { classNames, isWebsiteURLValid } from '@/utils';
import { Broadcast as BroadcastIcon } from '@phosphor-icons/react';
import { ExternalLink } from '../ExternalLink';

export interface IProjectCardProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  stack: string[];
  about: string;
  githubLink?: string;
  liveUrl?: string;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({
  name,
  stack,
  about,
  githubLink = '',
  liveUrl = '',
  ...props
}) => {
  return (
    <article
      {...props}
      className={classNames(props.className || '', 'project-card')}
    >
      <h4 className="text-accent truncate mb-1">{name}</h4>

      <p className="mb-2 leading-snug flex-1 text-[90%] break-words">{about}</p>

      <span className="text-secondary/70 text-sm">
        <strong>Stack:</strong> {stack.length > 0 ? stack.join(' - ') : 'N/A'}
      </span>

      <div className="mt-2 flex justify-between">
        {isWebsiteURLValid(githubLink) && (
          <ExternalLink
            href={githubLink}
            className="flex gap-1 items-center w-fit hover:opacity-70 transition-all font-normal"
          >
            <GitHubIcon fill="#fe355c" /> GitHub
          </ExternalLink>
        )}

        {isWebsiteURLValid(liveUrl) && (
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
