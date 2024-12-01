import * as React from "react";
import type { SVGProps } from "react";
export const PageLimitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M24 0H0v24h24z" />
      <path fill="currentColor" d="M18 16.59 13.42 12 18 7.41 16.59 6l-6 6 6 6zM8 6H6v12h2z" />
    </g>
  </svg>
);
export default PageLimitIcon;
