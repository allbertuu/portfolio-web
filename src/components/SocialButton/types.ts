import { AnchorHTMLAttributes } from "react";

export interface ISocialButton extends AnchorHTMLAttributes<HTMLAnchorElement> {
    icon: JSX.Element;
    href: string;
    name: string;
}
