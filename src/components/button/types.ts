import type { MouseEventHandler } from "react";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
