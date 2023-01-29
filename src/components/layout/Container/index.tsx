import { classNames } from '@utils/index';
import { FunctionComponent } from 'react';
import { IContainerProps } from './types';
/**
 * Alinha o conteúdo do container ao centro, com uma largura máxima que depende
 * da largura do dispositivo, e adiciona um padding lateral de 2rem (32px)
 */
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
