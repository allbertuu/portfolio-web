import { FunctionComponent, HTMLAttributes } from "react";
import imgLogo from "@assets/imgs/logo.svg";
import Container from "@components/layout/Container";

const Footer: FunctionComponent<HTMLAttributes<HTMLElement>> = ({
  ...props
}) => {
  return (
    <footer {...props} className="border-t border-t-red-500 shadow-lg p-5">
      <Container>
        <div className="flex justify-around">
          <p className="flex items-center">
            <a href="#" className="hover:text-red-500">
              albertodeveloper.com
            </a>
            <i className="text-2xl -mb-1 mr-1">&copy;</i>
            <p>2022 - Todos os direitos reservados.</p>
          </p>

          <div className="flex items-center gap-2">
            <p>Powered by</p>

            <img src={imgLogo} alt="Logo branca" className="h-7" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
