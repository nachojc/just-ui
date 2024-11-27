import { FC, SVGAttributes } from "react";

export const SvgAttentionNoPaddingIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle fill="#FF9C54" cx={12} cy={12} r={12} />
      <path d="M11 17h2v2h-2v-2zm0-12h2v10h-2V5z" fill="#FFF" />
    </svg>
  );
};

export default SvgAttentionNoPaddingIcon;
