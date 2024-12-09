import { cloneElement, forwardRef, isValidElement } from "react";
import type { ButtonProps } from "./types";
import { StyledButton } from "./style";
import { Icon } from "..";
import { IconName } from "../icon/types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { text, children, iconLeft, iconRight, variant = "secondary", ...restProps },
  ref,
) {
  const leftElem = isValidElement(iconLeft) ? cloneElement(iconLeft, { className: "left" }) : iconLeft;
  const rightElem = isValidElement(iconRight) ? cloneElement(iconRight, { className: "right" }) : iconRight;

  return (
    <StyledButton ref={ref} variant={variant} {...restProps}>
      {leftElem &&
        (typeof leftElem === "string" ? (
          <Icon className="left" width={48} height={48} name={iconLeft as IconName} />
        ) : (
          leftElem
        ))}
      {text || children}
      {rightElem &&
        (typeof rightElem === "string" ? (
          <Icon className="right" width={48} height={48} name={iconRight as IconName} />
        ) : (
          rightElem
        ))}
    </StyledButton>
  );
});

export default Button;
