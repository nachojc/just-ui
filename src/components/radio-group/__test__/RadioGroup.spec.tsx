import React from "react";
import { render } from "@testing-library/react";
import { RadioGroup } from "..";
import { wrapWithTheme } from "../../../utils/ThemeWrapper";

const mockValues = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
];

describe("RadioGroup", () => {
  it("default render", async () => {
    const { asFragment } = render(wrapWithTheme(<RadioGroup name="demo" values={mockValues} />));

    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });

  it("with error", async () => {
    const { asFragment } = render(
      wrapWithTheme(<RadioGroup name="demo" values={mockValues} label="Input" error="no text" />),
    );
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with display asBlock", async () => {
    const { asFragment } = render(wrapWithTheme(<RadioGroup name="demo" values={mockValues} asBlock={true} />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with disabled", async () => {
    const { asFragment } = render(wrapWithTheme(<RadioGroup name="demo" values={mockValues} disabled />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("small", async () => {
    const { asFragment } = render(wrapWithTheme(<RadioGroup name="demo" values={mockValues} size="small" />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
});
