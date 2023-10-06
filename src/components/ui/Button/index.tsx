import { FC } from 'react';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} role={'button'}>
      {children}
    </button>
  );
};

export default Button;
