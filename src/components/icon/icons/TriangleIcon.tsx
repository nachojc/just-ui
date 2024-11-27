import { FC, SVGAttributes } from "react";

export const SvgTriangleIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#373433" d="M7 10l5 5 5-5z" />
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  );
};

export default SvgTriangleIcon;
