import { FunctionComponent, HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
    return <button {...props}>{children}</button>;
};

export default Button;
