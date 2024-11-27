import { FC, SVGAttributes } from "react";

export const SvgCircleCrossNoPaddingIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle fill="currentColor" cx={12} cy={12} r={12} />
      <path
        fill="#FFF"
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      />
    </svg>
  );
};

export default SvgCircleCrossNoPaddingIcon;
