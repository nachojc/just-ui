import { size } from "../size";

export const card = {
  default: {
    "border-radius": size["md"],
    padding: size["2xl"],
    display: "flex",
    "flex-direction": "column",
    "justify-content": "space-between",
  },
  border: {
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "box-shadow": "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  title: {
    display: "flex",
    "justify-content": "space-between",
    "align-items": "center",
    "padding-bottom": size["md"],
    "margin-bottom": size["xl"],
    "border-bottom": `${size["2xs"]} solid`,
  },
  footer: {
    "padding-top": size["md"],
    "margin-top": size["xl"],
  },
};
