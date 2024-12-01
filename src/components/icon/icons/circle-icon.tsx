import * as React from "react";
import type { SVGProps } from "react";
export const CircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <circle cx={12} cy={12} r={10} fill="none" stroke="currentColor" strokeWidth={4} />
  </svg>
);
export default CircleIcon;
