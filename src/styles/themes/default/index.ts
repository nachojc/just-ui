import type { DefaultTheme } from "styled-components";
import { colorPalette, colors } from "./colors";
import { font } from "./fonts";
import { components } from "./components";

export const defaultTheme: DefaultTheme = {
  borderRadius: "4px",
  background: "#fff",
  color: {
    primary: colorPalette.white,
    secondary: colorPalette.secondary,
    tertiary: colorPalette.white,
  },
  palette: {
    colors,
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
  font,
};
