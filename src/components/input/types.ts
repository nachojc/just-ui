import type { MouseEventHandler, ReactElement } from "react";
import { IconProps } from "../icon/types";

export type InputProps = {
  asBlock?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  error?: string;
  size?: "small" | "large";
  onClick?: MouseEventHandler<HTMLInputElement>;
  left?: string | ReactElement<IconProps>;
  right?: string | ReactElement<IconProps>;
};
