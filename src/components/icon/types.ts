import { FC, SVGAttributes } from "react";
import * as iconComponents from "./icons";

export type IconName = keyof typeof iconComponents;
export type IconProps = SVGAttributes<SVGElement> & { name: IconName };

export const iconFile = {
  ...iconComponents,
  AccountIcon: [iconComponents.AccountIcon, {}],
} satisfies Record<string, FC<SVGAttributes<SVGElement>> | [FC<SVGAttributes<SVGElement>>, SVGAttributes<SVGElement>]>;
