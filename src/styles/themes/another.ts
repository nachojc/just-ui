import theme from "./default";

export const anotherTheme = {
  ...theme,
  palette: {
    ...theme.palette,
    common: {
      ...theme.palette.common,
      black: "#000000",
    },
  },
};
