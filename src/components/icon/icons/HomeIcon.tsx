import { FC, SVGAttributes } from "react";

export const SvgHomeIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
};

export default SvgHomeIcon;
