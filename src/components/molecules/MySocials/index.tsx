import { socials } from '@scripts/aboutMe';
import { classNames } from '@utils/index';
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import { FunctionComponent } from 'react';
import { IMySocialsProps } from './types';

/**
 * Um container com botões que levam à minhas redes
 */
const MySocials: FunctionComponent<IMySocialsProps> = ({ ...props }) => {
    const baseStyles = classNames(
        'font-bold',
        'px-2 py-1 rounded-md',
        'flex items-center gap-1',
        'hover:opacity-80 transition-all',
        'shadow-2xl shadow-black/30',
    );

    return (
        <div
            {...props}
            className={classNames(props.className || '', 'flex flex-col items-center sm:flex-row gap-4')}
        >
            <a
                href={socials.linkedin}
                className="inline-block intervalReveal mySocialsReveal"
            >
                <button
                    className={classNames(
                        baseStyles,
                        'border border-sky-600',
                        'bg-sky-600 text-white',
                    )}
                >
                    <LinkedinLogo weight="bold" className="text-lg" />
                    Linkedin
                </button>
            </a>

            <a
                href={socials.github}
                className="inline-block intervalReveal mySocialsReveal"
            >
                <button
                    className={classNames(
                        baseStyles,
                        'border border-white/90',
                        'bg-white/90 text-[#0c0b0b]',
                    )}
                >
                    <GithubLogo className="text-lg" />
                    GitHub
                </button>
            </a>

            <a
                href={socials.instagram.url}
                className="inline-block intervalReveal mySocialsReveal"
            >
                <button
                    className={classNames(
                        baseStyles,
                        'border border-[#f43f5e]',
                        'bg-white/90 bg-[#f43f5e]',
                    )}
                >
                    <InstagramLogo className="text-lg" />
                    Instagram
                </button>
            </a>
        </div>
    );
};

export default MySocials;
