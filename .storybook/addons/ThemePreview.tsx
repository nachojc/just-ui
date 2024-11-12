import { ThemeProvider } from "styled-components";

import { defaultTheme, secondaryTheme } from "../../src/styles/themes";
import { GlobalStyles } from "./GlobalStyles";
import React from "react";

const ThemeValues = { Default: "def", Secondary: "sec" };

const ThemeOptions = Object.keys(ThemeValues).map((item, i) => ({
  value: ThemeValues[item],
  icon: "circle",
  title: item,
}));

export const themeDecorator = (Story, { parameters, globals }) => {
  const themeVal = parameters.theme || globals.theme;
  const storyTheme = themeVal === ThemeValues.Default ? defaultTheme : secondaryTheme;

  return (
    <ThemeProvider theme={storyTheme}>
      <div className="page-layout" style={{ padding: 16 }}>
        <GlobalStyles />
        <Story />
      </div>
    </ThemeProvider>
  );
};

export const theme = {
  title: "Theme",
  description: "Global theme for components",
  defaultValue: ThemeValues.Default,
  dynamicTitle: false,
  toolbar: {
    icon: "circle",
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

export const decorators = [themeDecorator];

export const initialGlobals = {
  theme: ThemeValues.Default,
  locale: 'en',
}
