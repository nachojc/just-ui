import { FC, SVGAttributes } from "react";
import { IconProps, iconFile } from "./types";

export const Icon: FC<IconProps> = function Icon({ name, ...props }) {
  let SvgIcon = iconFile[name];
  let defaultSvgProps: SVGAttributes<SVGElement> = {};

  if (Array.isArray(SvgIcon)) {
    [SvgIcon, defaultSvgProps] = SvgIcon;
  }
  defaultSvgProps = { ...defaultSvgProps, width: 24, height: 24, ...props };

  if (typeof SvgIcon === "function") {
    return <SvgIcon {...defaultSvgProps} />;
  }
};

export default Icon;
