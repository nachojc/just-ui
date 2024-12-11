import { styled } from "styled-components";
import { CheckboxProps } from "./types";
import { hasText } from "../../utils/validation";

export const StyledCheckboxLabel = styled.label<CheckboxProps>`
  ${(props) => props?.theme.components.checkbox.default};

  ${(props) => props.disabled && props?.theme.components.checkbox.disabled};
`;

export const StyledCheckboxMain = styled.input<CheckboxProps>`
  visibility: hidden;
  display: "inline-flex";
  position: absolute;
  width: 0;
  height: 0;
`;

export const StyledCheckboxCheck = styled.span<CheckboxProps>`
  &::after {
    display: none;
    content: "";
    ${(props) => props?.theme.components.checkbox.check.tick};
    ${(props) => props.disabled && props?.theme.components.checkbox.check.disabled};
    ${(props) => props.size === "small" && props?.theme.components.checkbox.check.small}
    ${(props) => hasText(props.error) && props?.theme.components.checkbox.error};
  }
  ${(props) => props?.theme.components.checkbox.check};
  ${(props) => props.size === "small" && props?.theme.components.checkbox.small}
  ${(props) => hasText(props.error) && props?.theme.components.checkbox.error};
  ${(props) => props.disabled && props?.theme.components.checkbox.check.disabled}
`;

export const StyledCheckboxError = styled.div<CheckboxProps>`
  ${(props) => props?.theme.components.checkbox.small}
  ${(props) => hasText(props.error) && props?.theme.components.checkbox.error}
  ${(props) => props.disabled && props?.theme.components.checkbox.disabled}
`;
