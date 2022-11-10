import { FunctionComponent, HTMLAttributes } from 'react';
import imgLogo from '@imgs/logo.svg';
import { sociais } from '@scripts/aboutMe';

export const Footer: FunctionComponent<HTMLAttributes<HTMLElement>> = ({
    ...props
}) => {
    return (
        <footer
            {...props}
            className="hidden border-t border-t-red-500 shadow-lg p-5"
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-around">
                    <div className="flex gap-1">
                        <p>Idealizado e desenvolvido por</p>

                        <a
                            href={sociais.linkedin}
                            className="hover:text-red-500"
                        >
                            Alberto Santos
                        </a>
                    </div>

                    <div className="flex items-center gap-2">
                        <p>Powered by</p>

                        <img src={imgLogo} alt="Logo branca" className="h-7" />
                    </div>
                </div>
            </div>
        </footer>
    );
};
