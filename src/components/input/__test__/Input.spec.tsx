import { fireEvent, render } from "@testing-library/react";
import { Input } from "..";
import { Icon } from "./../..";
import React from "react";
import { wrapWithTheme } from "../../../utils/ThemeWrapper";

describe("Input", () => {
  it("default render", async () => {
    const { asFragment } = render(wrapWithTheme(<Input />));

    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with Label", async () => {
    const { asFragment } = render(wrapWithTheme(<Input label="Input" />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with error", async () => {
    const { asFragment } = render(wrapWithTheme(<Input label="Input" error="no text" />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with left text", async () => {
    const { asFragment } = render(wrapWithTheme(<Input label="Input" left="£" />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with right text", async () => {
    const { asFragment } = render(wrapWithTheme(<Input label="Input" right=".00" />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with left icon", async () => {
    const { asFragment } = render(wrapWithTheme(<Input label="Input" left={<Icon name="AddIcon" />} />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with right icon", async () => {
    const { asFragment } = render(wrapWithTheme(<Input label="Input" right={<Icon name="TipsIcon" />} />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with display asBlock", async () => {
    const { asFragment } = render(wrapWithTheme(<Input asBlock={true} />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with disabled", async () => {
    const { asFragment } = render(wrapWithTheme(<Input disabled={true} left="£" right=".00" />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("small", async () => {
    const { asFragment } = render(wrapWithTheme(<Input size="small" left="£" right=".00" />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("focus", async () => {
    const handleOnFocus = jest.fn();
    const { getByTestId } = render(wrapWithTheme(<Input asBlock={true} onFocus={handleOnFocus} />));

    const label = getByTestId("input-label");
    fireEvent.click(label);
    expect(handleOnFocus).toHaveBeenCalled();
  });
});
