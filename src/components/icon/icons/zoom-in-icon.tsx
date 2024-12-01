import * as React from "react";
import type { SVGProps } from "react";
export const ZoomInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={24} height={24} {...props}>
    <defs>
      <path
        id="prefix__a"
        d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6-9C11.99 5 14 7.01 14 9.5S11.99 14 9.5 14 5 11.99 5 9.5 7.01 5 9.5 5m.5 2H9v2H7v1h2v2h1v-2h2V9h-2z"
      />
      <path id="prefix__c" d="M0 0h50v50H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="prefix__b" fill="#fff">
        <use xlinkHref="#prefix__a" />
      </mask>
      <g mask="url(#prefix__b)">
        <use xlinkHref="#prefix__c" fill="currentColor" transform="translate(-13 -13)" />
      </g>
    </g>
  </svg>
);
export default ZoomInIcon;
