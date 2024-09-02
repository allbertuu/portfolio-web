import GitHubLogo from '@/assets/icons/GitHub';
import aboutMe from '@/data/aboutMe.json';
import { classNames } from '@/utils/index';
import { FileText, LinkedinLogo } from '@phosphor-icons/react';
import { ExternalLink } from '../ExternalLink';

export const MySocials = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { links } = aboutMe;

  return (
    <div {...props} className={classNames(props.className || '')}>
      <h4 className="text-lg lg:text-xl originLeftReveal load-hidden intervalReveal mb-2">
        E essas são{' '}
        <span className="text-accent/80 font-semibold">minhas redes</span> e{' '}
        <span className="text-accent/80 font-semibold">currículo</span>:
      </h4>

      <div className="flex flex-col items-center justify-center lg:justify-start sm:flex-row gap-4">
        <ExternalLink
          href={links.linkedin.url}
          title="LinkedIn"
          className="btn gap-1 lg:w-full text-lg no-underline bg-white hover:bg-white/70 text-blue mySocialsReveal load-hidden intervalReveal"
        >
          <LinkedinLogo weight="fill" className="text-blue" />
          LinkedIn
        </ExternalLink>

        <ExternalLink
          href={links.github.url}
          title="GitHub"
          className="btn lg:w-full gap-1 text-lg no-underline bg-white/90 hover:bg-white/70 text-black mySocialsReveal load-hidden intervalReveal"
        >
          <GitHubLogo fill="#000" />
          GitHub
        </ExternalLink>

        <ExternalLink
          href={links.cv.url}
          title="Currículo"
          className="btn lg:w-full gap-1 text-lg no-underline bg-white hover:bg-white/70 text-accent mySocialsReveal load-hidden intervalReveal"
        >
          <FileText weight="fill" className="text-accent" />
          Currículo
        </ExternalLink>
      </div>
    </div>
  );
};
