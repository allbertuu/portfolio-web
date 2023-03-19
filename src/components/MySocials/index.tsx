import { socials } from '@scripts/aboutMe';
import { classNames } from '@utils/index';
import {
    GithubLogo as GithubLogoIcon,
    InstagramLogo as InstagramLogoIcon,
    LinkedinLogo as LinkedinLogoIcon,
} from 'phosphor-react';
import { FunctionComponent } from 'react';
import { IMySocialsProps } from './types';

const MySocials: FunctionComponent<IMySocialsProps> = ({ ...props }) => {
    const baseButtonStyles = classNames(
        'font-bold',
        'px-2 py-1 rounded-md',
        'flex items-center gap-1',
        'hover:opacity-80 transition-all',
        'shadow-2xl shadow-black/30',
    );

    return (
        <div
            {...props}
            className={classNames(
                props.className || '',
                'flex flex-col items-center sm:flex-row gap-4',
            )}
        >
            <a
                href={socials.linkedin}
                title="LinkedIn"
                className={classNames(
                    baseButtonStyles,
                    'border border-sky-600',
                    'bg-sky-600 text-white',
                    'intervalReveal mySocialsReveal',
                )}
            >
                <LinkedinLogoIcon weight="bold" className="text-lg" />
                Linkedin
            </a>

            <a
                href={socials.github}
                title="GitHub"
                className={classNames(
                    baseButtonStyles,
                    'border border-white/90',
                    'bg-white/90 text-[#0c0b0b]',
                    'intervalReveal mySocialsReveal',
                )}
            >
                <GithubLogoIcon className="text-lg" />
                GitHub
            </a>

            <a
                href={socials.instagram.url}
                title="Instagram"
                className={classNames(
                    baseButtonStyles,
                    'border border-[#f43f5e]',
                    'bg-[#f43f5e]',
                    'intervalReveal mySocialsReveal',
                )}
            >
                <InstagramLogoIcon className="text-lg" />
                Instagram
            </a>
        </div>
    );
};

export default MySocials;
