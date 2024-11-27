import { FC, SVGAttributes } from "react";

export const SvgCircleTickNoPaddingIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" {...props}>
      <defs>
        <circle id="circle-tick-no-padding-icon_svg__a" cx={12} cy={12} r={12} />
        <path
          id="circle-tick-no-padding-icon_svg__b"
          d="M7.5 13.475L4.025 10l-1.183 1.175L7.5 15.833l10-10-1.175-1.175z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" xlinkHref="#circle-tick-no-padding-icon_svg__a" fillRule="nonzero" />
        <g transform="translate(2 2)">
          <path d="M0 0h20v20H0z" />
          <mask id="circle-tick-no-padding-icon_svg__c" fill="#fff">
            <use xlinkHref="#circle-tick-no-padding-icon_svg__b" />
          </mask>
          <use fill="#D8D8D8" xlinkHref="#circle-tick-no-padding-icon_svg__b" />
          <path fill="#FFF" d="M0 0h20v20H0z" mask="url(#circle-tick-no-padding-icon_svg__c)" />
        </g>
      </g>
    </svg>
  );
};

export default SvgCircleTickNoPaddingIcon;
