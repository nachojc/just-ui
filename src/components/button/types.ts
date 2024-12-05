import type { MouseEventHandler, ReactNode } from "react";
import { IconName } from "../icon/types";

export type ButtonProps = {
  text?: string;
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconLeft?: IconName | ReactNode;
  iconRight?: IconName | ReactNode;
  children?: ReactNode;
};
