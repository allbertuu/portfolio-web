import { classNames } from '@utils/index';
import GitHubIcon from '@assets/icons/GitHub';
import { FunctionComponent } from 'react';
import { IProjectCardProps } from './types';
import { Broadcast as BroadcastIcon } from 'phosphor-react';

const ProjectCard: FunctionComponent<IProjectCardProps> = ({
    name,
    segment,
    about,
    githubLink,
    liveUrl,
}) => {
    return (
        <article
            className={classNames(
                'flex flex-col relative rounded max-w-xs border-2 border-slate-50/10 p-4 bg-slate-700',
                'transition-all duration-300 ease-out',
                'hover:border-red-500 hover:shadow-xl hover:shadow-red-500/30 hover:transform hover:-translate-y-3',
            )}
        >
            <h4 className="text-red-500 -mb-2 font-semibold">{name}</h4>
            <span className="text-muted text-[85%] italic">{segment}</span>
            <p className="mt-1 leading-snug flex-1">{about}</p>
            <div className="flex justify-between">
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-1 items-center w-fit [&]:hover:text-red-600 transition-all font-semibold"
                >
                    <GitHubIcon fill="#fe355c" /> GitHub
                </a>
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex gap-1 items-center w-fit [&]:hover:text-red-600 transition-all font-semibold"
                    >
                        <BroadcastIcon color="#fe355c" /> Live
                    </a>
                )}
            </div>
        </article>
    );
};

export default ProjectCard;
