import { styled } from "styled-components";
import { RadioGroupProps } from "./types";
import { PropsWithChildren } from "react";

type StyleProps = PropsWithChildren<Omit<RadioGroupProps, "name" | "values">>;

export const StyledRadioGroupContainer = styled.div<StyleProps>`
  $${(props) => props?.theme.components.radiogroup.container};
  $${(props) => props.size === "small" && props?.theme.components.radiogroup.container.small};
`;
export const StyledRadioGroupLabel = styled.div<StyleProps>`
  ${(props) => props?.theme.components.radiogroup.label};
  ${(props) => props.size === "small" && props?.theme.components.radiogroup.label?.small};
`;

export const StyledRadioGroupError = styled.div<StyleProps>`
  ${(props) => props?.theme.components.radiogroup.error}
  ${(props) => props.disabled && props?.theme.components.radiogroup.error.disabled}
`;
