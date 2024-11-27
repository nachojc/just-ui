import { FC, SVGAttributes } from "react";

export const SvgCircleIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} fill="none" />
    </svg>
  );
};

export default SvgCircleIcon;
