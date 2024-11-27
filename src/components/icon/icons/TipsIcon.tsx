import { FC, SVGAttributes } from "react";

export const SvgTipsIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm-2-1h8v-2H5v2zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2c4.14 0 7.5 3.36 7.5 7.5zm-2 0C14.5 6.47 12.03 4 9 4a5.51 5.51 0 00-5.5 5.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5zm6.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6l-.63 1.37zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94L19 6z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default SvgTipsIcon;
