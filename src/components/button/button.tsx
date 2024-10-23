import { forwardRef } from "react";
import type { ButtonProps } from "./types";
import { StyledButton } from "./style";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { size, primary, disabled, text, onClick, ...restProps },
  ref,
) {
  return (
    <StyledButton
      ref={ref}
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...restProps}
    >
      {text}
    </StyledButton>
  );
});

export default Button;
