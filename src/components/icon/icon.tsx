import { FC, SVGAttributes } from "react";
import { IconProps, iconsDefinition } from "./types";
import { StyledIcon } from "./style";

export const Icon: FC<IconProps> = function Icon({ name, ...props }) {
  let SvgIcon = iconsDefinition[name];
  let defaultSvgProps: SVGAttributes<SVGElement> = {};

  if (Array.isArray(SvgIcon)) {
    [SvgIcon, defaultSvgProps] = SvgIcon;
  }
  defaultSvgProps = { ...defaultSvgProps, width: 24, height: 24, ...props };

  if (typeof SvgIcon === "function") {
    return (
      <StyledIcon className="icon">
        <SvgIcon {...defaultSvgProps} />
      </StyledIcon>
    );
  }
};

export default Icon;
