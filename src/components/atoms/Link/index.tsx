import { classNames } from '@utils/index';
import { FunctionComponent, HTMLAttributes } from 'react';

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
    secondary?: boolean;
}

const Link: FunctionComponent<LinkProps> = ({
    secondary,
    children,
    ...props
}) => {
    return (
        <a
            {...props}
            href="#"
            className={classNames(
                props.className ? props.className : '',
                secondary ? 'after:bg-slate-600' : 'after:bg-red-500',
                'relative after:transition-all after:duration-700 after:ease-out after:absolute after:left-0 after:block after:w-1/4 hover:after:w-full after:h-[2px]',
            )}
        >
            {children}
        </a>
    );
};

export default Link;
