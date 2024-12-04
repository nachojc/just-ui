import { ReactNode } from "react";
import { ButtonProps } from "../button/types";
import { IconName } from "../icon/types";

export type IconButtonProps = ButtonProps & {
  position?: "top" | "bottom";
  icon?: IconName | ReactNode;
  children?: ReactNode;
};
