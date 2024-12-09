import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
  {
    ignores: ["storybook-static/*", "dist/*", " node_modules/*", "coverage", "temp"],
  },
];
