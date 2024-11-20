import { forwardRef } from "react";
import type { ButtonProps } from "./types";
import { StyledButton } from "./style";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { text, children, variant = "secondary", ...restProps },
  ref,
) {
  return (
    <StyledButton ref={ref} variant={variant} {...restProps}>
      {text || children}
    </StyledButton>
  );
});

export default Button;
