import { FC, SVGAttributes } from "react";
import * as iconComponents from "./icons";
// import * as iconComponents from "../../../scripts/finalIcon";

export type IconName = keyof typeof iconFile;
export type IconProps = SVGAttributes<SVGElement> & { name: IconName };

export const iconFile = {
  ...iconComponents,
  AccountIcon: [iconComponents.AccountIcon, {}],
  // } satisfies Record<string, FC<SVGAttributes<SVGElement>> | [FC<SVGAttributes<SVGElement>>, SVGAttributes<SVGElement>]>;;
} as unknown as Record<
  string,
  FC<SVGAttributes<SVGElement>> | [FC<SVGAttributes<SVGElement>>, SVGAttributes<SVGElement>]
>;
