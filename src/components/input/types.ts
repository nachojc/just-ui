import type { HTMLInputTypeAttribute, MouseEventHandler, ReactElement } from "react";
import { IconProps } from "../icon/types";

type InputType = Exclude<HTMLInputTypeAttribute, "radio" | "checkbox">;

export type InputProps = {
  id?: string;
  asBlock?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  error?: string;
  size?: "small" | "large";
  type?: InputType;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onFocus?: MouseEventHandler<HTMLInputElement>;
  left?: string | ReactElement<IconProps>;
  right?: string | ReactElement<IconProps>;
};
