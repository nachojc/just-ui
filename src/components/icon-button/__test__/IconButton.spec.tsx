import { render } from "@testing-library/react";
import { IconButton } from "..";
import React from "react";
import { wrapWithTheme } from "../../../utils/ThemeWrapper";

describe("Button", () => {
  it("render", async () => {
    const btn = render(wrapWithTheme(<IconButton />));
    expect(btn).toBeTruthy();
  });
  it("render with another Theme", async () => {
    const btn = render(wrapWithTheme(<IconButton />, { themeName: "publicTheme" }));
    expect(btn).toBeTruthy();
  });
  it("render primary small", async () => {
    const { asFragment } = render(wrapWithTheme(<IconButton variant="primary" size="small" />));
    const btn = asFragment();

    expect(btn).toMatchSnapshot();
  });
  it("render tertiary large", async () => {
    const { asFragment } = render(wrapWithTheme(<IconButton variant="tertiary" size="large" />));
    const btn = asFragment();

    expect(btn).toMatchSnapshot();
  });
  it("render disabled", async () => {
    const { asFragment } = render(wrapWithTheme(<IconButton disabled />));
    const btn = asFragment();

    expect(btn).toMatchSnapshot();
  });
});
