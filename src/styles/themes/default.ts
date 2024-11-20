import type { DefaultTheme } from "styled-components";
import { colorPalette, colorPrimitive } from "./default/colors";
import { font } from "./default/fonts";
import { components } from "./default/components";

export const defaultTheme: DefaultTheme = {
  borderRadius: "4px",
  background: "#fff",
  color: {
    primary: colorPalette.white,
    secondary: colorPalette.secondary,
    tertiary: colorPalette.white,
  },
  palette: {
    colors: colorPrimitive,
    common: {
      black: "#222831",
      white: "#ffffff",
    },
    primary: {
      main: "#726a95",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#709fb0",
      contrastText: "#ffffff",
    },
  },
  components,
  font
};
