import { FunctionComponent } from 'react';
import { ButtonProps } from './types';

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
    return (
        <button {...props} role={'button'}>
            {children}
        </button>
    );
};

export default Button;
