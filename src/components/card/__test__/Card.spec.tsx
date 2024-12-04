import { render } from "@testing-library/react";
import { Card } from "..";
import React from "react";
import { wrapWithTheme } from "../../../utils/ThemeWrapper";

describe("Card", () => {
  it("render", async () => {
    const btn = render(wrapWithTheme(<Card />));
    expect(btn).toBeTruthy();
  });
  it("render with another Theme", async () => {
    const btn = render(wrapWithTheme(<Card />, { themeName: "publicTheme" }));
    expect(btn).toBeTruthy();
  });
});
