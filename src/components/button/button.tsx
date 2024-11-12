import { forwardRef } from "react";
import type { ButtonProps } from "./types";
import { StyledButton } from "./style";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ text, ...restProps }, ref) {
  return (
    <StyledButton ref={ref} type="button" {...restProps}>
      {text}
    </StyledButton>
  );
});

export default Button;
