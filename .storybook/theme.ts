import { ThemePlaygroundProps } from "storybook-addon-theme-playground";

import { defaultTheme, anotherTheme } from "../src/styles/themes";
import { ThemeProvider } from "styled-components";

interface ThemePlaygroundParams extends ThemePlaygroundProps<typeof defaultTheme> {
  theme: typeof defaultTheme;
  provider: unknown;
}

export const themePlayground: ThemePlaygroundParams = {
  theme: [
    { name: "Default Theme", theme: defaultTheme },
    { name: "Another Theme", theme: anotherTheme },
  ],
  provider: ThemeProvider,
  controls: {
    "headline.fontWeight": {
      type: "range",
      max: 900,
      min: 1,
      description: "Define the font weight of the variable font",
    },
    "copy.fontWeight": {
      type: "range",
      max: 900,
      min: 1,
      description: "Define the font weight of the variable font",
    },
  },
};
