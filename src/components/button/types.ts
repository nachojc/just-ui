import type { MouseEventHandler, ReactElement, ReactNode } from "react";
import { IconName, IconProps } from "../icon/types";

export type ButtonProps = {
  text?: string;
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconLeft?: IconName | ReactElement<IconProps>;
  iconRight?: IconName | ReactElement<IconProps>;
  children?: ReactNode;
};
