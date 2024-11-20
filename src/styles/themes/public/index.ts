import type { DefaultTheme } from "styled-components";
import { defaultTheme as theme } from "../default";
import { merge, cloneDeep } from "lodash";
import { colorPrimitive } from "./colors";

export const publicTheme: DefaultTheme = merge(cloneDeep(theme), {
  background: "#ddd",
  palette: {
    common: {
      black: "#000000",
    },
  },
  colors: colorPrimitive,
});
