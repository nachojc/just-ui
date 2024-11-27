import { FC, SVGAttributes } from "react";

export const SvgCopyIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M2 4H0v16c0 1.1.9 2 2 2h16v-2H2V4zm18-4H6C4.9 0 4 .9 4 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 16H6V2h14v14z" />
    </svg>
  );
};

export default SvgCopyIcon;
