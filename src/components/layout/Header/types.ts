import { HTMLAttributes } from 'react';

export interface ISection {
  id: string;
  name: string;
  icon: JSX.Element;
}

export type IHeaderProps = HTMLAttributes<HTMLElement>;
