import React from "react";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, { parameters }) => {
      const { pageLayout } = parameters;

      return (
        <div className="page-layout" style={{ padding: 16 }}>
          <div style={{ width: "100%",padding: 8,textAlign: "right" }}>
            <button>Hola</button>
          </div>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
