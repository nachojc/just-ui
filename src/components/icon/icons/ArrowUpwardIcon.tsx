import { FC, SVGAttributes } from "react";

export const SvgArrowUpwardIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor" {...props}>
      <path d="M440 896V409L216 633l-56-57 320-320 320 320-56 57-224-224v487h-80z" />
    </svg>
  );
};

export default SvgArrowUpwardIcon;
