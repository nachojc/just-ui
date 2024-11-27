import { FC, SVGAttributes } from "react";

export const SvgScheduleIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor" {...props}>
      <path d="M612 764l56-56-148-148V376h-80v216l172 172zM480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976zm0-400zm0 320q133 0 226.5-93.5T800 576q0-133-93.5-226.5T480 256q-133 0-226.5 93.5T160 576q0 133 93.5 226.5T480 896z" />
    </svg>
  );
};

export default SvgScheduleIcon;
