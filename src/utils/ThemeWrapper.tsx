import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/themes";

type ThemeName = keyof typeof theme;

type options = {
  themeName: ThemeName;
};
export const wrapWithTheme = (children: ReactNode, options?: options) => {
  const opt: options = { ...{ themeName: "defaultTheme" }, ...options };
  return <ThemeProvider theme={theme[opt.themeName]}>{children}</ThemeProvider>;
};
