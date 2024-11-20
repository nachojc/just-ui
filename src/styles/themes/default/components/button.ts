import { colorPalette, colorPrimitive, buttonColors } from "../colors";
import { font } from "../fonts";

export const button = {
  default: {
    padding: "8px 16px",
    border: "1px solid",
    "border-radius": "10px",
    "line-height": "24px",
    "font-size": "15px",
    "font-family": font.sans,
    cursor: "pointer",
    "font-weight": "bold",
    display: "inline-block",
  },
  tertiary: {
    default: {
      background: colorPalette.white,
      border: `1px solid ${colorPalette.white}`,
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
  primary: {
    default: {
      background: buttonColors["btn-red-500"],
      color: colorPalette.white,
      "border-color": buttonColors["btn-red-500"],
    },
    disabled: {
      background: buttonColors["btn-red-100"],
    },
    hover: {
      background: buttonColors["btn-red-300"],
    },
    active: {
      background: buttonColors["btn-red-600"],
    },
  },
  secondary: {
    default: {},
  },
};
