import GitHubLogo from '@/assets/icons/GitHub';
import aboutMe from '@/data/aboutMe.json';
import { classNames } from '@/utils/index';
import { FileText, LinkedinLogo } from '@phosphor-icons/react';
import { ExternalLink } from '../ExternalLink';

type TMySocialsProps = React.HTMLAttributes<HTMLDivElement>;

export const MySocials: React.FC<TMySocialsProps> = ({ ...props }) => {
  const { links } = aboutMe;

  return (
    <div
      {...props}
      className={classNames(
        props.className || '',
        'flex flex-col items-center justify-center lg:justify-start sm:flex-row gap-4'
      )}
    >
      <ExternalLink
        href={links.linkedin.url}
        title="LinkedIn"
        className="btn flex items-center gap-1 rounded-md text-lg font-normal shadow-2xl shadow-black/30 hover:opacity-50 no-underline bg-blue hover:bg-blue-light text-white mySocialsReveal load-hidden intervalReveal"
      >
        <LinkedinLogo weight="bold" />
        LinkedIn
      </ExternalLink>

      <ExternalLink
        href={links.github.url}
        title="GitHub"
        className="btn flex items-center gap-1 rounded-md text-lg font-normal shadow-2xl shadow-black/30 hover:opacity-50 no-underline bg-white/90 hover:bg-white/70 text-[#0c0b0b] mySocialsReveal load-hidden intervalReveal"
      >
        <GitHubLogo fill="#000" />
        GitHub
      </ExternalLink>

      <ExternalLink
        href={links.cv.url}
        title="Currículo"
        className="btn flex items-center gap-1 rounded-md text-lg font-normal shadow-2xl shadow-black/30 hover:opacity-50 no-underline bg-accent hover:bg-accent/80 text-white mySocialsReveal load-hidden intervalReveal"
      >
        <FileText weight="bold" />
        Currículo
      </ExternalLink>
    </div>
  );
};
