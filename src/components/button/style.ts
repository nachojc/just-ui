// @ts-nocheck

import styled from "styled-components";
import type { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
  ${(props) => props.theme.components.button.default}
  ${(props) => props.theme.components.button[props.variant]?.default}
  ${(props) => props.disabled && props.theme.components.button[props.variant]?.disabled}
  ${(props) => {
    switch (props.size) {
      case "small":
        return { padding: "4px 8px" };
      case "large":
        return { width: "100%" };
    }
  }}
  &:hover {
    ${(props) => !props.disabled && props.theme.components.button[props.variant]?.hover}
  }
  &:active {
    ${(props) => !props.disabled && props.theme.components.button[props.variant]?.active}
  }
`;
