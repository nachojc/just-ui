import { render } from "@testing-library/react";
import { Card } from "..";
import React from "react";
import { wrapWithTheme } from "../../../utils/ThemeWrapper";

describe("Card", () => {
  it("render", async () => {
    const { asFragment } = render(wrapWithTheme(<Card />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("render with another Theme", async () => {
    const { asFragment } = render(wrapWithTheme(<Card />, { themeName: "publicTheme" }));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
});
