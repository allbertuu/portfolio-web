import { classNames } from '@utils/index';
import { FunctionComponent } from 'react';
import { IContainerProps } from './types';

const Container: FunctionComponent<IContainerProps> = ({
    children,
    ...props
}) => {
    return (
        <div
            {...props}
            className={classNames(
                props.className || '',
                'container mx-auto px-6',
            )}
            data-testid="container"
        >
            {children}
        </div>
    );
};

export default Container;
