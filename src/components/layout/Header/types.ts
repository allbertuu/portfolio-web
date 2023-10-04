import { HTMLAttributes } from "react";

export interface ISection {
  id: string;
  name: string;
  icon: JSX.Element;
}

export interface IHeaderProps extends HTMLAttributes<HTMLElement> {}
