import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
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
    const btn = create(wrapWithTheme(<Button variant="primary" size="small"/>));

    expect(btn.toJSON()).toMatchSnapshot();
  });
  it("render tertiary large", async () => {
    const btn = create(wrapWithTheme(<Button variant="tertiary" size="large"/>));

    expect(btn.toJSON()).toMatchSnapshot();
  });
  it("render disabled", async () => {
    const btn = create(wrapWithTheme(<Button disabled/>));

    expect(btn.toJSON()).toMatchSnapshot();
  });
});
