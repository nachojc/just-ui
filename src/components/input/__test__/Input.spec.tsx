import { render } from "@testing-library/react";
import { Input } from "..";
import React from "react";
import { wrapWithTheme } from "../../../utils/ThemeWrapper";

describe("Button", () => {
  it("render", async () => {
    const btn = render(wrapWithTheme(<Input />));
    expect(btn).toBeTruthy();
  });
});
