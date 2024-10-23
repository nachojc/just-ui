import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { defaultTheme, secondaryTheme } from "../src/styles/themes";
import { GlobalStyles } from "./GlobalStyles";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themePlayground: {
      theme: [
        { name: "Default Theme", theme: defaultTheme },
        { name: "Secondary Theme", theme: secondaryTheme },
      ],
      provider: ({ children, theme, name }) => {
        console.log("Current theme is: ", name);
        return (
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        );
      },
    },
  },
  decorators: [
    (
      Story,
      // { parameters }
    ) => {
      // const { pageLayout } = parameters

      return (
        <div className="page-layout" style={{ padding: 16 }}>
          <div style={{ width: "100%", padding: 8, textAlign: "right" }}>
            <button>Hola</button>
          </div>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
