import { colorPalette, colors } from "../colors";
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
      color: colors["text-red-500"],
    },

    hover: {
      color: colors["text-red-600"],
    },
    active: {
      color: colors["text-red-700"],
    },
    disabled: {
      color: colors["text-red-300"],
    },
  },
  primary: {
    default: {
      background: colors["btn-red-500"],
      color: colorPalette.white,
      "border-color": colors["btn-red-500"],
    },
    disabled: {
      background: colors["btn-red-100"],
    },
    hover: {
      background: colors["btn-red-300"],
    },
    active: {
      background: colors["btn-red-600"],
    },
  },
  secondary: {
    default: {},
  },
};
