import { FC, SVGAttributes } from "react";
import * as iconComponents from "./icons";
import * as iconsImport from "./importIcons";

export const iconFileDefinition = { ...iconComponents, ...iconsImport };

export type IconName = keyof typeof iconFileDefinition;
export const IconNameKey = Object.keys(iconFileDefinition) as IconName[];
export type IconProps = SVGAttributes<SVGElement> & { name: IconName };

export const iconsDefinition = {
  ...iconFileDefinition,
  AccountIcon: [iconFileDefinition.AccountIcon, {}],
  JustIcon: [iconFileDefinition.JustIcon, { width: 74, height: 34 }],
} satisfies Record<
  IconName,
  FC<SVGAttributes<SVGElement>> | [FC<SVGAttributes<SVGElement>>, SVGAttributes<SVGElement>]
>;
