import type { FC } from "react";
import type { ButtonProps } from "./types";
import { StyledButton } from "./style";

const Button: FC<ButtonProps> = ({ size, primary, disabled, text, onClick, ...restProps }) => {
  return (
    <StyledButton type="button" onClick={onClick} primary={primary} disabled={disabled} size={size} {...restProps}>
      {text}
    </StyledButton>
  );
};

export default Button;
