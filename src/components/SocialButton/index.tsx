import { classNames } from "@utils/index";
import { ISocialButton } from "./types";

const SocialButton = ({ icon, href, name, className }: ISocialButton) => {
  const baseButtonStyles = classNames(
    "text-lg",
    "px-2 py-1 rounded-md",
    "flex items-center gap-1",
    "hover:opacity-80 transition-all",
    "shadow-2xl shadow-black/30",
  );

  return (
    <a
      href={href}
      title={name}
      target="_blank"
      rel="noreferrer"
      className={classNames(
        baseButtonStyles,
        "intervalReveal mySocialsReveal",
        className || "",
      )}
    >
      {icon}
      {name}
    </a>
  );
};

export default SocialButton;
