import type { DefaultTheme } from "styled-components";
import { defaultTheme as theme } from "./default";

export const secondaryTheme: DefaultTheme = {
  ...theme,
  background: '#ddd',
  palette: {
    ...theme.palette,
    common: {
      ...theme.palette.common,
      black: "#000000",
    },
  },
};
