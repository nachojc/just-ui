import { render } from "@testing-library/react";
import { Button } from "../";
import React from "react";
import {wrapWithTheme} from "../../../utils/ThemeWrapper"

describe("Button", () => {
  it("render", async () => {
    const btn = render(wrapWithTheme(<Button />));
    expect(btn).toBeTruthy();
  });
});
