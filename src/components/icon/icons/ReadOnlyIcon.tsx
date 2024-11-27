import { FC, SVGAttributes } from "react";

export const SvgReadOnlyIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M3.25 3.25l17 17-1.26 1.25-6.369-6.372L6.75 21H3v-3.75l5.872-5.873L2 4.5l1.25-1.25zm10.81 2.94l3.75 3.75-2.685 2.685-3.75-3.75L14.06 6.19zm6.65-.56l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41z"
          fill="#B5B8BA"
        />
      </g>
    </svg>
  );
};

export default SvgReadOnlyIcon;
