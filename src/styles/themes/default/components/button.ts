import { colorPalette, colors } from "../colors";
import { font } from "../fonts";
import { size } from "../size";

export const button = {
  default: {
    padding: `${size["xl"]}`,
    border: `${size["2xs"]} solid`,
    "border-radius": size["sm"],
    "line-height": size["2xl"],
    "font-size": size["xl-"],
    "font-family": font.sans,
    "letter-spacing": ".075rem",
    cursor: "pointer",
    "font-weight": "bold",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
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
      "box-shadow": "inset 0 -3px 0 0 rgba(55, 52, 51, 0.32)",
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
