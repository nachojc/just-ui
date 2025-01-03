import { forwardRef } from "react";
import type { IconButtonProps } from "./types";
import { StyledIconButton } from "./style";
import { Icon } from "../icon";
import { IconName } from "../icon/types";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function Button(
  { icon, position = "top", children, variant = "secondary", ...restProps },
  ref,
) {
  return (
    <StyledIconButton ref={ref} variant={variant} {...restProps}>
      {position === "top" && (
        <span className="icon">
          {typeof icon === "string" ? <Icon width={48} height={48} name={icon as IconName} /> : icon}
        </span>
      )}
      {children}
      {position === "bottom" && (
        <span className="icon">
          {typeof icon === "string" ? <Icon width={48} height={48} name={icon as IconName} /> : icon}
        </span>
      )}
    </StyledIconButton>
  );
});

export default IconButton;
