import type { Preview } from "@storybook/react";
import { decorators, globalTypes, initialGlobals } from "./addons/ThemePreview";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  initialGlobals,
  globalTypes,
  decorators,
};

export default preview;
