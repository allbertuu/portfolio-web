import {
    ButtonHTMLAttributes,
    FunctionComponent,
    useEffect,
    useState,
} from 'react';
import { ArrowUp as ArrowUpIcon } from 'phosphor-react';
import { scrollWindowToTop } from '@utils/index';

export const ArrowUp: FunctionComponent<
    ButtonHTMLAttributes<HTMLButtonElement>
> = ({ ...props }) => {
    const [arrowUpVisibility, setArrowUpVisibility] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            window.scrollY > 200
                ? setArrowUpVisibility(true)
                : setArrowUpVisibility(false);
        };

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, []);

    return (
        <button
            {...props}
            onClick={scrollWindowToTop}
            className={
                arrowUpVisibility
                    ? 'fixed right-2 bottom-3 md:right-6 md:bottom-6 bg-white rounded-full p-2 text-slate-600 transition-all duration-500 visible shadow-lg'
                    : 'hidden'
            }
        >
            <ArrowUpIcon className="text-3xl" />
        </button>
    );
};