import { AnchorHTMLAttributes } from "react";

export interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  secondary?: boolean;
}
