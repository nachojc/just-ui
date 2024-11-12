import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/__docs__/*.stories.tsx", "../src/**/__docs__/*.mdx"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    // "storybook-addon-theme-playground",
    // "./addons/theme/register"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: [ './assets'],
};
export default config;
