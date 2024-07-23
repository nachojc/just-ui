import { FC, MouseEventHandler } from "react";
import styled from "styled-components";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  background-color: ${(props) => (props.primary ? "#FF5655" : "#f4c4c4")};
  padding: ${(props) => (props.size === "small" ? "4px 8px" : props.size === "medium" ? "8px 16px" : "12px 24px")};
  &:hover {
    background-color: ${(props) => (!props.primary ? "#FF5655" : "#f4c4c4")};
    color: ${(props) => (!props.primary ? "#fff" : "#000")};
  }
`;

const Button: FC<ButtonProps> = ({ size, primary, disabled, text, onClick, ...restProps }) => {
  return (
    <StyledButton type="button" onClick={onClick} primary={primary} disabled={disabled} size={size} {...restProps}>
      {text}
    </StyledButton>
  );
};

export default Button;
