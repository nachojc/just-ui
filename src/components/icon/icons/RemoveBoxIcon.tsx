import { FC, SVGAttributes } from "react";

export const SvgRemoveBoxIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm-3.41 4L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z" />
    </svg>
  );
};

export default SvgRemoveBoxIcon;
