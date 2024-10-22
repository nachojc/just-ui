import { render } from "@testing-library/react";
import { Button } from "../";
import React from "react";

describe("Button", () => {
  it("render", async () => {
    const btn = render(<Button />);
    expect(btn).toBeTruthy();
  });
});
