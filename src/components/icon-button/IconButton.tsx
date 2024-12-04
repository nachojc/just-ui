import { forwardRef } from "react";
import type { IconButtonProps } from "./types";
import { StyledIconButton } from "./style";
import Icon from "../icon/Icon";
import { IconName } from "../icon/types";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function Button(
  { text, icon, position = "top", children, variant = "secondary", ...restProps },
  ref,
) {
  return (
    <StyledIconButton ref={ref} variant={variant} {...restProps}>
      {position === "top" && (
        <span className="top">
          {typeof icon === "string" ? <Icon width={48} height={48} name={icon as IconName} /> : icon}
        </span>
      )}
      {text || children}
      {position === "bottom" && (
        <span className="bottom">
          {typeof icon === "string" ? <Icon width={48} height={48} name={icon as IconName} /> : icon}
        </span>
      )}
    </StyledIconButton>
  );
});

export default IconButton;
