import { classNames } from '@utils/index';
import { FC } from 'react';
import { LinkProps } from './types';

const Link: FC<LinkProps> = ({ secondary, children, ...props }) => {
  return (
    <a
      {...props}
      className={classNames(
        props.className || '',
        secondary ? 'after:bg-slate-600' : 'after:bg-red-500',
        'relative cursor-pointer hover:opacity-80 [&~svg]:hover:opacity-80 after:transition-all after:duration-700 after:ease-out after:absolute after:left-0 after:block after:w-1/4 hover:after:w-full after:h-[2px]'
      )}
    >
      {children}
    </a>
  );
};

export default Link;
