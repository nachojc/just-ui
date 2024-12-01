import * as React from "react";
import type { SVGProps } from "react";
export const ReadOnlyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        fill="#B5B8BA"
        d="m3.25 3.25 17 17-1.26 1.25-6.369-6.372L6.75 21H3v-3.75l5.872-5.873L2 4.5zm10.81 2.94 3.75 3.75-2.685 2.685-3.75-3.75zm6.65-.56-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41"
      />
    </g>
  </svg>
);
export default ReadOnlyIcon;
