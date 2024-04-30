import GitHubIcon from '@/assets/icons/GitHub';
import { classNames, isWebsiteURLValid } from '@/utils';
import { Broadcast as BroadcastIcon } from '@phosphor-icons/react';
import { ExternalLink } from '../ExternalLink';

interface IProjectCardProps extends React.HTMLAttributes<HTMLElement> {
  name?: string;
  myRole?: string;
  about?: string;
  githubLink?: string;
  liveUrl?: string;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({
  name = 'Projeto sem nome',
  myRole = 'Sem cargo',
  about = 'Me consulte para mais informações.',
  githubLink = '',
  liveUrl = '',
  ...props
}) => {
  return (
    <article
      {...props}
      className={classNames(props.className || '', 'project-card')}
    >
      <h4 className="text-accent -mb-2">{name}</h4>

      <span className="mt-1 text-secondary/70 text-[85%] italic">{myRole}</span>

      <p className="my-2 leading-snug flex-1 text-[90%]">{about}</p>

      <div className="flex justify-between">
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
