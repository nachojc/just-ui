import { ReactNode } from "react";
import { ButtonProps } from "../button/types";
import { IconName } from "../icon/types";

export type IconButtonProps = Omit<ButtonProps, "text"> & {
  position?: "top" | "bottom";
  icon?: IconName | ReactNode;
};
