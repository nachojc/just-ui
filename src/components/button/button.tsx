import { forwardRef } from "react";
import type { ButtonProps } from "./types";
import { StyledButton } from "./style";
import { Icon } from "..";
import { IconName } from "../icon/types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { text, children, iconLeft, iconRight, variant = "secondary", ...restProps },
  ref,
) {
  return (
    <StyledButton ref={ref} variant={variant} {...restProps}>
      {iconLeft && (
        <div className="left">
          {typeof iconLeft === "string" ? <Icon width={48} height={48} name={iconLeft as IconName} /> : iconLeft}
        </div>
      )}
      {text || children}
      {iconRight && (
        <div className="right">
          {typeof iconRight === "string" ? <Icon width={48} height={48} name={iconRight as IconName} /> : iconRight}
        </div>
      )}
    </StyledButton>
  );
});

export default Button;
