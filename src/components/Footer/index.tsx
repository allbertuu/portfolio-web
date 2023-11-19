import imgLogo from '@/assets/imgs/logo.svg';
import { Tooltip } from '../Tooltip';

type TFooterProps = React.HTMLAttributes<HTMLElement>;

export const Footer: React.FC<TFooterProps> = ({ ...props }) => {
  const currentYear = new Date().getFullYear();
  const domain = 'albertosantos.dev';

  return (
    <footer
      {...props}
      data-testid="footer"
      className="select-none flex w-full flex-col items-center justify-around border-t-2 border-t-accent bg-secondary p-5 px-4 text-primary sm:flex-row"
    >
      <div className="originLeftReveal mb-2 flex flex-wrap justify-center sm:mb-0 sm:justify-normal sm:gap-1">
        <Tooltip content="Você está aqui!">
          <span className="font-semibold text-accent font-serif">{domain}</span>
        </Tooltip>

        <div className="flex items-center" data-testid="author-rights">
          <span className="mr-1 text-xl">&copy;</span>
          <span className="text-base sm:text-lg">
            {currentYear} - Todos os direitos reservados.
          </span>
        </div>
      </div>

      <div className="font-serif originRightReveal mb-5 flex gap-[0.3125rem] sm:mb-0">
        <span>
          <strong>Powered</strong> by
        </span>

        <img
          src={imgLogo}
          alt="Logotipo vermelha"
          className="h-7"
          data-testid="logo-image"
        />
      </div>
    </footer>
  );
};
