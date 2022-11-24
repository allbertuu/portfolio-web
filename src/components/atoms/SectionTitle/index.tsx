import { classNames } from '@utils/index';
import { FunctionComponent, HTMLAttributes } from 'react';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const SectionTitle: FunctionComponent<SectionTitleProps> = ({
    children,
    ...props
}) => {
    return (
        <h3
            {...props}
            className={classNames(
                props.className ? props.className : '',
                'text-2xl lg:text-4xl',
            )}
        >
            {children}
        </h3>
    );
};

export default SectionTitle;
