import { FC, SVGAttributes } from "react";

export const SvgZoomInIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <path
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6-9C11.99 5 14 7.01 14 9.5S11.99 14 9.5 14 5 11.99 5 9.5 7.01 5 9.5 5zm.5 2H9v2H7v1h2v2h1v-2h2V9h-2V7z"
          id="zoom-in-icon_svg__a"
        />
        <path id="zoom-in-icon_svg__c" d="M0 0h50v50H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="zoom-in-icon_svg__b" fill="#fff">
          <use xlinkHref="#zoom-in-icon_svg__a" />
        </mask>
        <g mask="url(#zoom-in-icon_svg__b)">
          <use fill="currentColor" xlinkHref="#zoom-in-icon_svg__c" transform="translate(-13 -13)" />
        </g>
      </g>
    </svg>
  );
};

export default SvgZoomInIcon;
