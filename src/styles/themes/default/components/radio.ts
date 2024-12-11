import { colorPalette, colors } from "../colors";
import { size } from "../size";

export const radio = {
  default: {
    cursor: "pointer",
    display: "inline-flex",
    position: "relative",
    "padding-left": size["3xl"],
    "align-items": "center",
    "&:hover input:not([disabled])~span": {
      "border-color": colors["orange-500"],
    },
    "&:hover input:not([disabled])~span::after": {
      background: colors["orange-500"],
    },
    "&:active input:not([disabled])~span": {
      "border-color": colors["orange-500"],
    },
    "&:active input:not([disabled])~span::after": {
      background: colors["orange-500"],
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
    "border-radius": "50%",
    background: "transparent",
    border: `${size["2xs"]} solid ${colors["just-black"]}`,
    tick: {
      position: "absolute",
      left: "4px",
      top: "4px",
      width: "15px",
      height: "15px",
      background: colors["just-black"],
      "border-radius": "50%",
      small: {
        top: "3px",
        left: "3px",
        width: "9px",
        height: "9px",
      },
      disabled: {
        background: colors["gray-700"],
      },
      error: {
        background: colors["orange-500"],
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
