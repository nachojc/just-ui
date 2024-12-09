import type { MouseEventHandler } from "react";

export type TextAreaProps = {
  asBlock?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  error?: string;
  size?: "small" | "large";
  onClick?: MouseEventHandler<HTMLDivElement>;
  onFocus?: MouseEventHandler<HTMLInputElement>;
};
