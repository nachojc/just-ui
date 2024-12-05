import * as React from "react";
import type { SVGProps } from "react";
export const SortIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#373433" d="M10 3 6 6.99h3V14h2V6.99h3z" />
      <path fill="#373433" fillOpacity={0.32} d="M17 10h-2v7.01h-3L16 21l4-3.99h-3z" />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SortIcon;
