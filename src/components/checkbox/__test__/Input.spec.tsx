import React from "react";
import { render } from "@testing-library/react";
import { Checkbox } from "..";
import { wrapWithTheme } from "../../../utils/ThemeWrapper";

describe("Checkbox", () => {
  it("default render", async () => {
    const { asFragment } = render(wrapWithTheme(<Checkbox />));

    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });

  it("with error", async () => {
    const { asFragment } = render(wrapWithTheme(<Checkbox label="Input" error="no text" />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with display asBlock", async () => {
    const { asFragment } = render(wrapWithTheme(<Checkbox asBlock={true} />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with disabled", async () => {
    const { asFragment } = render(wrapWithTheme(<Checkbox disabled={true} />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("small", async () => {
    const { asFragment } = render(wrapWithTheme(<Checkbox size="small" />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
});
