import { classNames } from '@utils/index';
import { FC } from 'react';
import { SeparatorProps } from './types';
/**
 * Separador de conteúdo horizontal
 */
const Separator: FC<SeparatorProps> = ({ ...props }) => {
  return <hr {...props} className={classNames('my-4 border-red-500/90')} />;
};

export default Separator;
