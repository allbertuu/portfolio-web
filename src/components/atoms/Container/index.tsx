import { classNames } from '@utils/index';
import { FunctionComponent } from 'react';
import { ContainerProps } from './types';

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
            data-testid="container"
        >
            {children}
        </div>
    );
};

export default Container;
