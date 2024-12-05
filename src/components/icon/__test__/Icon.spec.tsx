import { render } from "@testing-library/react";
import { Icon, IconName } from "../";
import React from "react";
import { wrapWithTheme } from "../../../utils/ThemeWrapper";
import * as iconComponents from "../icons";

const iconsName = Object.keys(iconComponents);

describe("Render Icon", () => {
  it.each(iconsName)("renders correctly icon %s ", (item) => {
    const btn = render(wrapWithTheme(<Icon name={item as IconName} />));
    expect(btn).toBeTruthy();
  });
});
