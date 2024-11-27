import { FC, SVGAttributes } from "react";

export const SvgSortDefaultIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fillOpacity={0.32} fill="#373433" d="M10 3L6 6.99h3V14h2V6.99h3zM17 10h-2v7.01h-3L16 21l4-3.99h-3z" />
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  );
};

export default SvgSortDefaultIcon;
