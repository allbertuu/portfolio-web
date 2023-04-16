import { classNames } from '@utils/index';
import GitHubIcon from '@assets/icons/GitHub';
import { FunctionComponent } from 'react';
import { IProjectCardProps } from './types';

const ProjectCard: FunctionComponent<IProjectCardProps> = ({
    name,
    segment,
    about,
    githubLink,
}) => {
    return (
        <article
            className={classNames(
                'relative rounded max-w-xs border-2 border-slate-50/10 p-4 bg-slate-700',
                'transition-all duration-300 ease-out',
                'hover:border-red-500 hover:shadow-xl hover:shadow-red-500/30 hover:transform hover:-translate-y-3',
            )}
        >
            <h4 className="text-red-500 -mb-2 font-semibold">{name}</h4>
            <span className="text-muted text-[85%] italic">{segment}</span>
            <p className="mt-1 leading-snug">{about}</p>
            {/* estilo carrossel de techs da rocketseat */}
            <div className="flex justify-between mt-4">
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-1 items-center w-fit [&]:hover:text-red-600 transition-all font-semibold"
                >
                    <GitHubIcon fill="#fe355c" /> GitHub
                </a>
                {/* <div>techs</div> */}
            </div>
        </article>
    );
};

export default ProjectCard;
