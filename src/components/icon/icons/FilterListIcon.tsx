import { FC, SVGAttributes } from "react";

export const SvgFilterListIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" id="filter-list-icon_svg__a" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="filter-list-icon_svg__b" fill="#fff">
          <use xlinkHref="#filter-list-icon_svg__a" />
        </mask>
        <g mask="url(#filter-list-icon_svg__b)" fill="#000">
          <path d="M-13-13h50v50h-50z" />
        </g>
      </g>
    </svg>
  );
};

export default SvgFilterListIcon;
