import { FunctionComponent, HTMLAttributes } from "react";
import imgLogo from "@assets/imgs/logo.svg";
import Container from "@components/layout/Container";

const Footer: FunctionComponent<HTMLAttributes<HTMLElement>> = ({
  ...props
}) => {
  const currentYear = new Date().getFullYear();
  const siteDomain = window.location.hostname;

  return (
    <footer
      {...props}
      data-testid="footer"
      className="border-t border-t-black/70 shadow-lg p-5 text-muted"
    >
      <Container className="flex flex-col items-center justify-around sm:flex-row">
        <div className="flex justify-center flex-wrap mb-2 sm:mb-0 sm:justify-normal sm:gap-1 originLeftReveal">
          <a href="#" data-testid="site-url" className="hover:text-red-500">
            {siteDomain}
          </a>

          <div className="flex items-center">
            <i className="text-2xl -mb-1 mr-1">&copy;</i>

            <span data-testid="author-rights" className="text-base sm:text-lg">
              {currentYear} - Todos os direitos reservados.
            </span>
          </div>
        </div>

        <div className="flex gap-[0.3125rem] originRightReveal">
          <span>
            <strong>Powered</strong> by
          </span>

          <img src={imgLogo} alt="Main Logo" className="h-7" />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
