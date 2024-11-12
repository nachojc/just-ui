import type { DefaultTheme } from "styled-components";
import { defaultTheme as theme } from "./default";
import { merge, cloneDeep } from "lodash";

export const secondaryTheme: DefaultTheme = merge(cloneDeep(theme), {
  background: "#ddd",
  palette: {
    common: {
      black: "#000000",
    },
  },
});
