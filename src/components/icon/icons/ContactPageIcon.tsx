import { FC, SVGAttributes } from "react";

export const SvgContactPageIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13.17 4L18 8.83V20H6V4h7.17zM14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-2 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 00-5.56 0A2.01 2.01 0 008 17.43V18h8v-.57z" />
    </svg>
  );
};

export default SvgContactPageIcon;