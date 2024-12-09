import { colorPalette, colors } from "../colors";
import { font } from "../fonts";
import { size } from "../size";

export const input = {
  default: {
    cursor: "pointer",
  },
  container: {
    border: `${size["xxs"]} solid`,
    "border-radius": size["sm"],
    display: "inline-flex",
    background: colorPalette.white,
    overflow: "hidden",
    width: "100%",
  },
  small: {
    display: "flex",
    "align-items": "center",
    padding: `${size["md"]} ${size["xl"]}`,
    height: size["xxxl"],
  },
  left: {
    padding: `${size["xl"]}`,
    "border-right": `${size["xxs"]} solid`,
    "font-size": `${size["xxl"]}`,
    "line-height": `${size["xxl"]}`,
  },
  right: {
    "border-left": `${size["xxs"]} solid`,
    "font-size": `${size["xxl"]}`,
    "line-height": `${size["xxl"]}`,
    padding: `${size["xl"]}`,
  },
  main: {
    padding: `${size["xl"]}`,
    "line-height": size["xxl"],
    "font-size": size["xl-"],
    "font-family": font.sans,
    "letter-spacing": ".075rem",
    flex: 1,
    background: "transparent",
    border: 0,
    disabled: {
      color: colorPalette.error,
    },
  },
  error: {
    "border-color": colorPalette.error,
    color: colorPalette.error,
  },
  disabled: {
    "border-color": colors["gray-700"],
    "background-color": colors["gray-400"],
    color: colors["gray-700"],
  },
  hover: {},
  active: {},
};
