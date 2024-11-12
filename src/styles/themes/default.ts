import type { DefaultTheme } from "styled-components";
import { colorPalette, colorPrimitive } from "./default/colors";

export const defaultTheme: DefaultTheme = {
  font: "",
  borderRadius: "4px",
  background: '#fff',
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
};
