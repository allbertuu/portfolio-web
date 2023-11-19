import { classNames, scrollWindowToTop } from '@/utils';
import { ArrowUp as ArrowUpIcon } from 'phosphor-react';
import { useEffect, useState } from 'react';

type TToTopProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ToTop: React.FC<TToTopProps> = ({ ...props }) => {
  const [elementVisibility, setElementVisibility] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 200
        ? setElementVisibility(true)
        : setElementVisibility(false);
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
      className={classNames(
        elementVisibility
          ? 'visible fixed right-4 bottom-4 opacity-100 md:right-6 md:bottom-6 bg-white rounded-full p-2 text-primary shadow-lg'
          : 'invisible opacity-0',
        'transition-all duration-300 hover:bg-accent hover:text-white'
      )}
    >
      <ArrowUpIcon weight="bold" className="text-2xl" />
    </button>
  );
};
