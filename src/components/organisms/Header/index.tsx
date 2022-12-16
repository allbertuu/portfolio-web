import { FunctionComponent } from 'react';
import { scrollToSectionId } from '@utils/index';
import imgLogo from '@imgs/logo.svg';
import {
    EnvelopeSimple,
    Folders,
    IdentificationCard,
    Lightning,
} from 'phosphor-react';
import { IHeaderProps, ISection } from './types';

const Header: FunctionComponent<IHeaderProps> = ({ ...props }) => {
    const sectionList: ISection[] = [
        {
            id: 's-about-me',
            name: 'Sobre mim',
            icon: <IdentificationCard size={28} />,
        },
        {
            id: 's-projects',
            name: 'Projetos',
            icon: <Folders size={28} />,
        },
        {
            id: 's-skills',
            name: 'Habilidades',
            icon: <Lightning size={28} />,
        },
        {
            id: 's-contact-me',
            name: 'Me mande um e-mail',
            icon: <EnvelopeSimple size={28} />,
        },
    ];

    return (
        <header
            {...props}
            className="flex items-center justify-around md:fixed md:top-0
            px-8 py-4 w-full z-10 text-lg border-b-[2px] border-b-red-500
            bg-slate-700 shadow-2xl"
        >
            <div className="flex items-center gap-2 pointer-events-none">
                <img src={imgLogo} alt="Logo vermelha" className="h-9" />
                <span className="hidden md:block">Portfólio</span>
            </div>

            <nav className="hidden md:block">
                <ul className="flex gap-4">
                    {sectionList.map((section) => (
                        <li
                            key={section.id}
                            onClick={() => scrollToSectionId(section.id)}
                            role="link"
                            className="relative text-center cursor-pointer overflow-hidden
                            rounded py-[2px] px-2 transition-all duration-500 z-0
                            before:w-0 before:h-[400%] before:absolute before:left-1/2
                            before:right-1/2 before:transform before:-translate-y-1/2
                            before:-translate-x-1/2 before:rotate-[20deg]
                            before:transition-all before:duration-1000 before:block
                            before:-z-10 before:bg-red-500 hover:before:w-[130%] hover:shadow-xl hover:shadow-red-500/60"
                        >
                            {section.name}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
