import { FunctionComponent } from 'react';
import { classNames, scrollToSectionId } from '@utils/index';
import logoImg from '@assets/imgs/logo.svg';
import {
    EnvelopeSimple as EnvelopeSimpleIcon,
    Folders as FoldersIcon,
    IdentificationCard as IdentificationCardIcon,
    Lightning as LightningIcon,
} from 'phosphor-react';
import { IHeaderProps, ISection } from './types';

const Header: FunctionComponent<IHeaderProps> = ({ ...props }) => {
    const sectionList: ISection[] = [
        {
            id: 's-about-me',
            name: 'Sobre mim',
            icon: (
                <IdentificationCardIcon
                    weight="fill"
                    className="text-xl text-red-500 inline-block mr-2 -mt-1"
                />
            ),
        },
        {
            id: 's-projects',
            name: 'Projetos',
            icon: (
                <FoldersIcon
                    weight="fill"
                    className="text-xl text-red-500 inline-block mr-2 -mt-1"
                />
            ),
        },
        {
            id: 's-skills',
            name: 'Habilidades',
            icon: (
                <LightningIcon
                    weight="fill"
                    className="text-xl text-red-500 inline-block mr-2 -mt-1"
                />
            ),
        },
        {
            id: 's-contact-me',
            name: 'Me mande um e-mail',
            icon: (
                <EnvelopeSimpleIcon
                    weight="fill"
                    className="text-xl text-red-500 inline-block mr-2 -mt-1"
                />
            ),
        },
    ];

    return (
        <header
            {...props}
            className="flex items-center justify-around md:fixed md:top-0
            px-8 py-4 w-full z-10 text-lg border-b-[2px] border-b-red-500
            bg-slate-700/80 shadow-2xl"
        >
            <a
                title="Marca do meu Portfólio"
                href="#"
                className="flex items-center gap-2 originLeftReveal"
            >
                <img src={logoImg} alt="Logo vermelha" className="h-9" />
                <span>Portfólio</span>
            </a>

            <nav className="hidden lg:block">
                <ul className="flex gap-4">
                    {sectionList.map((section) => (
                        <li
                            key={section.id}
                            onClick={() => scrollToSectionId(section.id)}
                            role="link"
                            title={section.name}
                            className={classNames(
                                'relative text-center cursor-pointer overflow-hidden rounded py-[2px] px-2',
                                'transition-shadow duration-500 z-0',
                                'before:w-0 before:h-[400%] before:absolute before:left-1/2 before:right-1/2 before:transform before:-translate-y-1/2 before:-translate-x-1/2 before:rotate-[20deg] before:transition-all before:duration-1000 before:block',
                                'before:-z-10 before:bg-red-600',
                                'hover:before:w-[130%] hover:shadow-xl hover:shadow-red-500/30',
                                '[&>svg]:hover:text-white [&>svg]:transition-all [&>svg]:duration-300',
                                'originRightReveal',
                            )}
                        >
                            {section.icon}
                            {section.name}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
