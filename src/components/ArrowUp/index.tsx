import {
    ButtonHTMLAttributes,
    FunctionComponent,
    useEffect,
    useState,
} from 'react';
import { ArrowUp as ArrowUpIcon } from 'phosphor-react';
import { scrollWindowToTop } from '../../assets/scripts/main';

interface ArrowUpProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ArrowUp: FunctionComponent<ArrowUpProps> = ({ ...props }) => {
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
                    : 'invisible'
            }
        >
            <ArrowUpIcon className="text-2xl md:text-3xl" />
        </button>
    );
};
