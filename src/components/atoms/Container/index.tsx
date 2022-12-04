import { classNames } from '@utils/index';
import { FunctionComponent, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLHeadingElement> {}

const Container: FunctionComponent<ContainerProps> = ({
    children,
    ...props
}) => {
    return (
        <h3
            {...props}
            className={classNames(
                props.className || '',
                'container mx-auto px-8',
            )}
        >
            {children}
        </h3>
    );
};

export default Container;
