import { FunctionComponent, useEffect, useState } from "react";
import { ArrowUp as ArrowUpIcon } from "phosphor-react";
import { classNames, scrollWindowToTop } from "@utils/index";
import { ArrowUpProps } from "./types";

const ArrowUp: FunctionComponent<ArrowUpProps> = ({ ...props }) => {
  const [arrowUpVisibility, setArrowUpVisibility] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 200
        ? setArrowUpVisibility(true)
        : setArrowUpVisibility(false);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <button
      {...props}
      onClick={scrollWindowToTop}
      className={classNames(
        arrowUpVisibility
          ? "visible fixed right-4 bottom-4 md:right-6 md:bottom-6 bg-white rounded-full p-2 text-slate-600 shadow-lg"
          : "invisible",
        "transition-all duration-300 hover:bg-red-500 hover:text-white",
      )}
    >
      <ArrowUpIcon weight="bold" className="text-2xl" />
    </button>
  );
};

export default ArrowUp;
