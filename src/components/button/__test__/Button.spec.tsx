
import React from "react";
import { render } from "@testing-library/react";
import { Button } from "../";

describe("Button", () => {
  it("render", async () => {
    const btn = render(<Button />);
    expect(btn).toBeTruthy();
  });
});
