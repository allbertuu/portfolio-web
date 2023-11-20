import imgLogo from '@/assets/imgs/logo.svg';
import { SendMeAnEmail } from '@/components/SendMeAnEmail';
import { Folders, IdentificationCard } from 'phosphor-react';

type THeaderProps = React.HTMLAttributes<HTMLElement>;

export const Header: React.FC<THeaderProps> = ({ ...props }) => {
  return (
    <header
      {...props}
      className="z-10 fixed top-0 flex w-full items-center justify-around border-b border-b-accent bg-primary px-8 py-4 text-lg"
      data-testid="header"
    >
      <img
        src={imgLogo}
        alt="Logotipo vermelha"
        width={28}
        height={28}
        className="originLeftReveal"
        data-testid="logo-image"
      />

      <nav className="hidden lg:block font-serif">
        <ul className="flex gap-4" data-testid="page-sections-links">
          <a
            href="#about-me"
            title="Sobre mim"
            className="header-link animated-underline originRightReveal rounded px-2 py-[2px] text-center hover:shadow-xl hover:shadow-accent/30"
          >
            <IdentificationCard
              weight="fill"
              className="-mt-1 mr-2 inline-block text-xl text-accent transition-all duration-300"
            />
            Sobre mim
          </a>

          <a
            href="#projects"
            title="Projetos"
            className="header-link animated-underline originRightReveal rounded px-2 py-[2px] text-center hover:shadow-xl hover:shadow-accent/30"
          >
            <Folders
              weight="fill"
              className="-mt-1 mr-2 inline-block text-xl text-accent transition-all duration-300"
            />
            Projetos
          </a>

          <SendMeAnEmail />
        </ul>
      </nav>
    </header>
  );
};
