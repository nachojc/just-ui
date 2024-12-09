import type { ReactElement, ReactNode } from "react";

export type CardProps = {
  // border?: "true" | "false";
  border?: boolean | "true" | "false";
  children?: ReactNode;
};

export type CardTitleProps = {
  title?: string;
  options?: ReactElement;
  onClose?: () => void;
  children?: ReactNode;
};

export type CardFooterProps = {
  align?: "left" | "center" | "right";
  children?: ReactNode;
};
