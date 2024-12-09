import styled from "styled-components";
import type { InputProps } from "./types";
import { hasText } from "../../utils/validation";

export const StyledInput = styled.div<InputProps>`
  ${(props) => props?.theme.components.input.default}
`;

export const StyledInputMain = styled.input<InputProps>`
  ${(props) => props?.theme.components.input.main}
  ${(props) => props.disabled && props?.theme.components.input.disabled}
  ${(props) => props.size === "small" && props?.theme.components.input.small}
  &:hover {
    ${(props) => !props.disabled && props?.theme.components?.input.hover}
  }
  &:active {
    ${(props) => !props.disabled && props?.theme.components.input?.active}
  }
`;

export const StyledInputContainer = styled.div<InputProps>`
  ${(props) => props?.theme.components.input.container}
  ${(props) => hasText(props.error) && props?.theme.components.input.error}
  ${(props) => props.disabled && props?.theme.components.input.disabled}
`;
export const StyledInputLeft = styled.div<InputProps>`
  ${(props) => props?.theme.components.input.left}
  ${(props) => props.size === "small" && props?.theme.components.input.small}
  ${(props) => hasText(props.error) && props?.theme.components.input.error}
  ${(props) => props.disabled && props?.theme.components.input.disabled}
`;
export const StyledInputRight = styled.div<InputProps>`
  ${(props) => props?.theme.components.input.right}
  ${(props) => props.size === "small" && props?.theme.components.input.small}
  ${(props) => hasText(props.error) && props?.theme.components.input.error}
  ${(props) => props.disabled && props?.theme.components.input.disabled}
`;
export const StyledInputError = styled.div<InputProps>`
  ${(props) => props?.theme.components.input.small}
  ${(props) => hasText(props.error) && props?.theme.components.input.error}
  ${(props) => props.disabled && props?.theme.components.input.disabled}
`;
export const StyledInputLabel = styled.div<InputProps>`
  ${(props) => props?.theme.components.input.small}
  ${(props) => props.disabled && props?.theme.components.input.disabled}
`;
