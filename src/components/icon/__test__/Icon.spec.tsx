import { render } from "@testing-library/react";
import { Icon } from "../";
import React from "react";
import { wrapWithTheme } from "../../../utils/ThemeWrapper";
import { iconFile } from "../types";

const iconsName = Object.keys(iconFile);

describe("Render Icon", () => {
  it.each(iconsName)("renders correctly icon %s ", (item) => {
    const btn = render(wrapWithTheme(<Icon name={item} />));
    expect(btn).toBeTruthy();
  });
});
