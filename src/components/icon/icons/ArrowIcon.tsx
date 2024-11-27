import { FC, SVGAttributes } from "react";

export const SvgArrowIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 10l5 5 5-5z" />
    </svg>
  );
};

export default SvgArrowIcon;
