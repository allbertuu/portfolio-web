import { classNames } from "@utils/index";
import { FunctionComponent } from "react";
import { ISeparatorProps } from "./types";
/**
 * Separador de conteúdo horizontal
 */
const Separator: FunctionComponent<ISeparatorProps> = ({ ...props }) => {
  return <hr {...props} className={classNames("my-4 border-red-500/90")} />;
};

export default Separator;
