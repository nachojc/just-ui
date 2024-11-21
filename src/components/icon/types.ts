import { SVGAttributes } from "react";
import { iconFile } from "./icons";


export type IconName = keyof typeof iconFile;
export type IconProps = SVGAttributes<SVGElement> & { name: IconName };

