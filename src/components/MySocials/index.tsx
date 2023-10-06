import aboutMe from '@data/aboutMe.json';
import { classNames } from '@utils/index';
import { InstagramLogo, LinkedinLogo } from 'phosphor-react';
import GitHubLogo from '@assets/icons/GitHub';
import { FC } from 'react';
import { IMySocialsProps } from './types';

const MySocials: FC<IMySocialsProps> = ({ ...props }) => {
  const { socials } = aboutMe;

  return (
    <div
      {...props}
      className={classNames(
        props.className || '',
        'flex flex-col items-center justify-center lg:justify-start sm:flex-row gap-4'
      )}
    >
      <a
        href={socials.linkedin.url}
        title="LinkedIn"
        target="_blank"
        rel="noreferrer"
        className="social-link bg-sky-600 text-white mySocialsReveal intervalReveal"
      >
        <LinkedinLogo weight="bold" />
        LinkedIn
      </a>

      <a
        href={socials.instagram.url}
        title="Instagram"
        target="_blank"
        rel="noreferrer"
        className="social-link bg-[#f43f5e] mySocialsReveal intervalReveal"
      >
        <InstagramLogo weight="bold" />
        Instagram
      </a>

      <a
        href={socials.github.url}
        title="GitHub"
        target="_blank"
        rel="noreferrer"
        className="social-link bg-white/90 text-[#0c0b0b] mySocialsReveal intervalReveal"
      >
        <GitHubLogo fill="#000" />
        GitHub
      </a>
    </div>
  );
};

export default MySocials;
