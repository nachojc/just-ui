import { fireEvent, render } from "@testing-library/react";
import { TextArea } from "..";
import React from "react";
import { wrapWithTheme } from "../../../utils/ThemeWrapper";

describe("TextArea", () => {
  it("default render", async () => {
    const { asFragment } = render(wrapWithTheme(<TextArea />));

    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with Label", async () => {
    const { asFragment } = render(wrapWithTheme(<TextArea label="TextArea" />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with error", async () => {
    const { asFragment } = render(wrapWithTheme(<TextArea label="TextArea" error="no text" />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with display asBlock", async () => {
    const { asFragment } = render(wrapWithTheme(<TextArea asBlock={true} />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("with disabled", async () => {
    const { asFragment } = render(wrapWithTheme(<TextArea disabled={true} />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("small", async () => {
    const { asFragment } = render(wrapWithTheme(<TextArea size="small" />));
    const btn = asFragment();
    expect(btn).toMatchSnapshot();
  });
  it("focus", async () => {
    const handleOnFocus = jest.fn();
    const { getByTestId } = render(wrapWithTheme(<TextArea asBlock={true} onFocus={handleOnFocus} />));

    const label = getByTestId("TextArea-label");
    fireEvent.click(label);
    expect(handleOnFocus).toHaveBeenCalled();
  });
});
