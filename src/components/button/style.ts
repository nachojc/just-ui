// @ts-nocheck

import styled from "styled-components";
import type { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
  .left {
    margin-right: ${(props) => props?.theme.size["md"]};
  }
  .right {
    margin-left: ${(props) => props?.theme.size["2xl"]};
  }
  ${(props) => props?.theme.components.button.default}
  ${(props) => props?.theme.components.button[props.variant]?.default}
  ${(props) => props.disabled && props?.theme.components.button[props.variant]?.disabled}
  ${(props) => {
    switch (props.size) {
      case "small":
        return { padding: `${props?.theme.size["md"]} ${props?.theme.size["xl"]}` };
      case "large":
        return { width: "100%" };
    }
  }}
  &:hover {
    ${(props) => !props.disabled && props?.theme.components.button[props.variant]?.hover}
  }
  &:active {
    ${(props) => !props.disabled && props?.theme.components.button[props.variant]?.active}
  }
`;
