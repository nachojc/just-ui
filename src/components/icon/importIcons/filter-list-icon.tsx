import * as React from "react";
import type { SVGProps } from "react";
export const FilterListIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <path id="prefix__a" d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="prefix__b" fill="#fff">
        <use xlinkHref="#prefix__a" />
      </mask>
      <g fill="#000" mask="url(#prefix__b)">
        <path d="M-13-13h50v50h-50z" />
      </g>
    </g>
  </svg>
);
export default FilterListIcon;
