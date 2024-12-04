import { render } from "@testing-library/react";
import { Button } from "../";
import React from "react";
import { wrapWithTheme } from "../../../utils/ThemeWrapper";

describe("Button", () => {
  it("render", async () => {
    const btn = render(wrapWithTheme(<Button />));
    expect(btn).toBeTruthy();
  });
  it("render with another Theme", async () => {
    const btn = render(wrapWithTheme(<Button />, { themeName: "publicTheme" }));
    expect(btn).toBeTruthy();
  });
  it("render primary small", async () => {
    const { asFragment } = render(wrapWithTheme(<Button variant="primary" size="small" />));
    const btn = asFragment();

    expect(btn).toMatchSnapshot();
  });
  it("render tertiary large", async () => {
    const { asFragment } = render(wrapWithTheme(<Button variant="tertiary" size="large" />));
    const btn = asFragment();

    expect(btn).toMatchSnapshot();
  });
  it("render disabled", async () => {
    const { asFragment } = render(wrapWithTheme(<Button disabled />));
    const btn = asFragment();

    expect(btn).toMatchSnapshot();
  });
});
