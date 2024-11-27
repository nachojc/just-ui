import { FC, SVGAttributes } from "react";
import { IconProps, iconFile } from "./types";

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  let SvgIcon = iconFile[name];
  let defaultSvgProps: SVGAttributes<SVGElement> = {};

  if (Array.isArray(SvgIcon)) {
    [SvgIcon, defaultSvgProps] = SvgIcon;
  }
  if (typeof SvgIcon === "function") {
    return <SvgIcon {...{ ...defaultSvgProps, ...props }} />;
  }

  throw new Error(`Icon '${name}' was not found.`);
};

export default Icon;
