import { colorPalette, colorPrimitive } from "./colors";

export const colorButton = {
  tertiary: {
    common: {
      background: colorPalette.white,
      border: `1px solid ${colorPalette.white}`,
    },
    default: {
      color: colorPrimitive["text-red-500"],
    },
    hover: {
      color: colorPrimitive["text-red-600"],
    },
    active: {
      color: colorPrimitive["text-red-700"],
    },
    disabled: {
      color: colorPrimitive["text-red-300"],
    },
  },
};
