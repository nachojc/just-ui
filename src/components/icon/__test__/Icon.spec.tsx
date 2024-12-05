import { render } from "@testing-library/react";
import { Icon, IconName } from "../";
import React from "react";
import { wrapWithTheme } from "../../../utils/ThemeWrapper";
import { IconNameKey } from "../types";

describe("Render Icon", () => {
  it.each(IconNameKey)("renders correctly icon %s ", (item) => {
    const btn = render(wrapWithTheme(<Icon name={item as IconName} />));
    expect(btn).toBeTruthy();
  });
});
