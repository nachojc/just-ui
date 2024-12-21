import { colorPalette, colors } from "../colors";
import { size } from "../size";

export const checkbox = {
  default: {
    cursor: "pointer",
    display: "inline-flex",
    position: "relative",
    "padding-left": size["3xl"],
    "align-items": "center",
    "&:hover input:not([disabled])~span": {
      "border-color": colorPalette.hoverForm,
    },
    "&:active input:not([disabled])~span": {
      "border-color": colorPalette.activeForm,
    },
    "input:checked~span::after": {
      display: "block",
    },
  },
  check: {
    position: "absolute",
    left: 0,
    height: size["2xl"],
    width: size["2xl"],
    "border-radius": size["sm"],
    "background-color": "transparent",
    border: `${size["2xs"]} solid ${colors["just-black"]}`,
    tick: {
      position: "absolute",
      left: "7px",
      top: "3px",
      width: "6px",
      height: "12px",
      border: `solid ${colors["just-black"]}`,
      "border-width": "0 2px 2px 0",
      transform: "rotate(45deg)",
      small: {
        top: size["2xs"],
        left: size["sm"],
        width: size["sm"],
        height: size["md"],
      },
      disabled: {
        "border-color": colors["gray-700"],
      },
      error: {
        "border-color": colors["gray-700"],
      },
    },
    small: {
      width: size["xl"],
      height: size["xl"],
    },
  },
  small: {
    display: "flex",
    "align-items": "center",
    padding: `${size["md"]} ${size["xl"]}`,
    height: size["3xl"],
  },
  error: {
    "border-color": colorPalette.error,
    color: colorPalette.error,
  },
  disabled: {
    color: colors["gray-700"],
  },
};
