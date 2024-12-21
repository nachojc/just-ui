import { colorPalette } from "../colors";
import { size } from "../size";

export const radiogroup = {
  container: {},
  label: {
    display: "flex",
    "align-items": "center",
    padding: `${size["md"]} ${size["xl"]}`,
    height: size["3xl"],
    small: {
      height: size["2xl"],
    },
  },
  error: {
    display: "flex",
    "align-items": "center",
    padding: `0 ${size["xl"]} ${size["md"]}`,
    height: size["2xl"],
    "border-color": colorPalette.error,
    color: colorPalette.error,
    disabled: {
      color: colorPalette.disabledForm,
    },
  },
};
