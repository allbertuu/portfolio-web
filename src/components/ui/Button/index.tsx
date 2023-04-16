import { FunctionComponent } from 'react';
import { IButtonProps } from './types';

const Button: FunctionComponent<IButtonProps> = ({ children, ...props }) => {
    return (
        <button {...props} role={'button'}>
            {children}
        </button>
    );
};

export default Button;
