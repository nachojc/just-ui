import React from "react";
import { render } from "@testing-library/react";
import { Radio } from "..";
import { wrapWithTheme } from "../../../utils/ThemeWrapper";

describe("Radio", () => {
  it("default render", async () => {
    const { asFragment } = render(wrapWithTheme(<Radio />));

    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });

  it("with error", async () => {
    const { asFragment } = render(wrapWithTheme(<Radio label="Input" error="no text" />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with display asBlock", async () => {
    const { asFragment } = render(wrapWithTheme(<Radio asBlock={true} />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with disabled", async () => {
    const { asFragment } = render(wrapWithTheme(<Radio disabled={true} />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("small", async () => {
    const { asFragment } = render(wrapWithTheme(<Radio size="small" />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
});
