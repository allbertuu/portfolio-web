import { socials } from '@scripts/aboutMe';
import { classNames } from '@utils/index';
import { InstagramLogo, LinkedinLogo } from 'phosphor-react';
import GitHubLogo from '@assets/icons/GitHub';
import { FC } from 'react';
import { IMySocialsProps } from './types';
import { SocialButton } from '@components/index';

const MySocials: FC<IMySocialsProps> = ({ ...props }) => {
    return (
        <div
            {...props}
            className={classNames(
                props.className || '',
                'flex flex-col items-center sm:flex-row gap-4',
            )}
        >
            <SocialButton
                name="LinkedIn"
                className="bg-sky-600 text-white"
                icon={<LinkedinLogo weight="bold" />}
                href={socials.linkedin.url}
            />
            <SocialButton
                name="Instagram"
                className="bg-[#f43f5e]"
                icon={<InstagramLogo weight="bold" />}
                href={socials.instagram.url}
            />
            <SocialButton
                name="GitHub"
                className="bg-white/90 text-[#0c0b0b]"
                icon={<GitHubLogo fill="#000" />}
                href={socials.github.url}
            />
        </div>
    );
};

export default MySocials;
