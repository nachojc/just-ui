import { FC, SVGAttributes } from "react";

export const SvgChevronDownIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
    </svg>
  );
};

export default SvgChevronDownIcon;