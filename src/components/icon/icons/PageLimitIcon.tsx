import { FC, SVGAttributes } from "react";

export const SvgPageLimitIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M24 0H0v24h24z" />
        <path d="M18 16.59L13.42 12 18 7.41 16.59 6l-6 6 6 6zM8 6H6v12h2z" fill="currentColor" />
      </g>
    </svg>
  );
};

export default SvgPageLimitIcon;
