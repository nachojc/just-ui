import * as React from "react";
import type { SVGProps } from "react";
export const CircleTickNoPaddingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={24} height={24} {...props}>
    <defs>
      <circle id="prefix__a" cx={12} cy={12} r={12} />
      <path id="prefix__b" d="M7.5 13.475 4.025 10l-1.183 1.175L7.5 15.833l10-10-1.175-1.175z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use xlinkHref="#prefix__a" fill="currentColor" fillRule="nonzero" />
      <g transform="translate(2 2)">
        <path d="M0 0h20v20H0z" />
        <mask id="prefix__c" fill="#fff">
          <use xlinkHref="#prefix__b" />
        </mask>
        <use xlinkHref="#prefix__b" fill="#D8D8D8" />
        <path fill="#FFF" d="M0 0h20v20H0z" mask="url(#prefix__c)" />
      </g>
    </g>
  </svg>
);
export default CircleTickNoPaddingIcon;
