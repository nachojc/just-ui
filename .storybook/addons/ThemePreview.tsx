import { ThemeProvider } from "styled-components";

import { defaultTheme, secondaryTheme } from "../../src/styles/themes";
import { GlobalStyles } from "./GlobalStyles";
import React from "react";
import type { DecoratorFunction } from "storybook/internal/types";
import type { ReactRenderer } from "@storybook/react";

const ThemeValues = { Default: "def", Secondary: "sec" };

const ThemeOptions = Object.entries(ThemeValues).map(([title, value]) => ({
  value,
  title,
}));

const themeDecorator = (Story, { parameters: { theme, pageLayout }, globals }) => {
  const themeVal = theme || globals.theme;
  const storyTheme = themeVal === ThemeValues.Default ? defaultTheme : secondaryTheme;

  return (
    <ThemeProvider theme={storyTheme}>
      <div className={`${pageLayout}-layout`} style={{ padding: 16 }}>
        <GlobalStyles />
        <Story />
      </div>
    </ThemeProvider>
  );
};

const theme = {
  title: "Theme",
  description: "Global theme for components",
  dynamicTitle: true,
  toolbar: {
    icon: "paintbrush",
    items: ThemeOptions,
    showName: true,
  },
};

// const locale = {
//   description: "Internationalization locale",
//   toolbar: {
//     icon: "globe",
//     items: [
//       { value: "en", right: "🇺🇸", title: "English" },
//       { value: "fr", right: "🇫🇷", title: "Français" },
//       { value: "es", right: "🇪🇸", title: "Español" },
//       { value: "zh", right: "🇨🇳", title: "中文" },
//       { value: "kr", right: "🇰🇷", title: "한국어" },
//     ],
//   },
// };

export const globalTypes = {
  theme,
  // locale
};

export const decorators = [themeDecorator] as unknown as
  | DecoratorFunction<
      ReactRenderer,
      {
        [x: string]: unknown;
      }
    >
  | DecoratorFunction<
      ReactRenderer,
      {
        [x: string]: unknown;
      }
    >[]
  | undefined;

export const initialGlobals = {
  theme: ThemeValues.Default,
  locale: "en",
};
