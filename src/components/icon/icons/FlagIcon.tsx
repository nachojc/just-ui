import { FC, SVGAttributes } from "react";

export const SvgFlagIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.9 5.5l-.4-2h-9v17h2v-7h5.6l.4 2h7v-10h-5.6z" />
    </svg>
  );
};

export default SvgFlagIcon;
