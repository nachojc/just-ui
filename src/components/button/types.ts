import type { MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  text?: string;
  variant: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
};
