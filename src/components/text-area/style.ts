import styled from "styled-components";
import type { TextAreaProps } from "./types";
import { hasText } from "../../utils/validation";

export const StyledTextArea = styled.div<TextAreaProps>`
  ${(props) => props?.theme.components.input.default}
`;

export const StyledTextAreaMain = styled.textarea<TextAreaProps>`
  ${(props) => props?.theme.components.input.main}
  ${(props) => props.disabled && props?.theme.components.input.disabled}
  ${(props) => props.size === "small" && props?.theme.components.input.small}
  &:hover {
    ${(props) => !props.disabled && props?.theme.components?.input.hover}
  }
  &:active {
    ${(props) => !props.disabled && props?.theme.components.TextArea?.active}
  }
`;

export const StyledTextAreaContainer = styled.div<TextAreaProps>`
  ${(props) => props?.theme.components.input.container}
  ${(props) => hasText(props.error) && props?.theme.components.input.error}
  ${(props) => props.disabled && props?.theme.components.input.disabled}
`;
export const StyledTextAreaError = styled.div<TextAreaProps>`
  ${(props) => props?.theme.components.input.small}
  ${(props) => hasText(props.error) && props?.theme.components.input.error}
  ${(props) => props.disabled && props?.theme.components.input.disabled}
`;
export const StyledTextAreaLabel = styled.div<TextAreaProps>`
  ${(props) => props?.theme.components.input.small}
  ${(props) => props.disabled && props?.theme.components.input.disabled}
`;
