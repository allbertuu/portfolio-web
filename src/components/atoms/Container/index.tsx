import { classNames } from '@utils/index';
import { FunctionComponent, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container: FunctionComponent<ContainerProps> = ({
    children,
    ...props
}) => {
    return (
        <div
            {...props}
            className={classNames(
                props.className || '',
                'container mx-auto px-8',
            )}
        >
            {children}
        </div>
    );
};

export default Container;
