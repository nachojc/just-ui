import { FC, SVGAttributes } from "react";

export const SvgEditOffIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" {...props}>
      <path d="M622-453l-56-56 82-82-57-57-82 82-56-56 195-195q12-12 26.5-17.5T705-840q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L622-453zM200-200h57l195-195-28-29-29-28-195 195v57zM792-56L509-338 290-120H120v-169l219-219L56-792l57-57 736 736-57 57zm-32-648l-56-56 56 56zm-169 56l57 57-57-57zM424-424l-29-28 57 57-28-29z" />
    </svg>
  );
};

export default SvgEditOffIcon;
