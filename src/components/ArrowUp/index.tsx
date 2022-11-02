import { useEffect, useState } from 'react';
import { ArrowUp as ArrowUpIcon } from 'phosphor-react';
import { scrollWindowToTop } from '../../assets/scripts/main';

export const ArrowUp = () => {
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
            className={
                arrowUpVisibility
                    ? 'fixed right-2 bottom-3 md:right-6 md:bottom-6 bg-slate rounded-full p-1 text-red transition-all duration-500 opacity-100 shadow-lg'
                    : 'opacity-0'
            }
            onClick={scrollWindowToTop}
        >
            <ArrowUpIcon className="text-2xl md:text-3xl" />
        </button>
    );
};
