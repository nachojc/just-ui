import { styled } from "styled-components";
import { RadioProps } from "./types";
import { hasText } from "../../utils/validation";

export const StyledRadioContainer = styled.div<RadioProps>``;

export const StyledRadioLabel = styled.label<RadioProps>`
  ${(props) => props?.theme.components.radio.label};
  ${(props) => props.size === "small" && props?.theme.components.radio.label.small};
  ${(props) => props.disabled && props?.theme.components.radio.disabled};
`;

export const StyledRadioMain = styled.input<RadioProps>`
  visibility: hidden;
  display: "inline-flex";
  position: absolute;
  width: 0;
  height: 0;
`;

export const StyledRadioCheck = styled.span<RadioProps>`
  ${(props) => props?.theme.components.radio.check};
  ${(props) => props.size === "small" && props?.theme.components.radio.check.small};
  ${(props) => hasText(props.error) && props?.theme.components.radio.error};
  ${(props) => props.disabled && props?.theme.components.radio.disabled};
  &::after {
    display: none;
    content: "";
    ${(props) => props?.theme.components.radio.check.tick};
    ${(props) => props.disabled && props?.theme.components.radio.check.tick.disabled};
    ${(props) => props.size === "small" && props?.theme.components.radio.check.tick.small};
    ${(props) => hasText(props.error) && props?.theme.components.radio.check.tick.error};
  }
`;

export const StyledRadioError = styled.div<RadioProps>`
  ${(props) => props?.theme.components.radio.small}
  ${(props) => hasText(props.error) && props?.theme.components.radio.error}
  ${(props) => props.disabled && props?.theme.components.radio.disabled}
`;
