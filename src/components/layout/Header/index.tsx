import { FC } from "react";
import logoImg from "@assets/imgs/logo.svg";
import {
  EnvelopeSimple as EnvelopeSimpleIcon,
  Folders as FoldersIcon,
  IdentificationCard as IdentificationCardIcon,
} from "phosphor-react";
import { IHeaderProps } from "./types";
import { sendEmail } from "@utils/index";

const Header: FC<IHeaderProps> = ({ ...props }) => {
  const email = {
    subject: "Olá, Alberto! Acabo de ver seu portfólio, vamos conversar?",
    body: "Seu email...",
    recipient: "albertovinicius3@gmail.com",
  };

  return (
    <header {...props} className="main-header">
      <img
        src={logoImg}
        alt="Logotipo vermelha"
        className="h-9 originLeftReveal"
      />

      <nav role="navigation" className="hidden lg:block">
        <ul className="flex gap-4">
          <a
            href="#about-me"
            title="Sobre mim"
            className="header__section-link originRightReveal"
          >
            <IdentificationCardIcon
              weight="fill"
              className="text-xl text-red-500 inline-block mr-2 -mt-1"
            />
            Sobre mim
          </a>

          <a
            href="#projects"
            title="Projetos"
            className="header__section-link originRightReveal"
          >
            <FoldersIcon
              weight="fill"
              className="text-xl text-red-500 inline-block mr-2 -mt-1"
            />
            Projetos
          </a>

          <button
            title="Contacte-me"
            className="originRightReveal"
            onClick={() => sendEmail(email)}
          >
            <EnvelopeSimpleIcon
              weight="fill"
              className="text-xl text-white inline-block mr-2 -mt-1"
            />
            Me mande um e-mail
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
