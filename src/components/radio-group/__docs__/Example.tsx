import React, { type FC } from "react";
import Checkbox from "../RadioGroup";
import type { CheckboxProps } from "../types";

const Example: FC<CheckboxProps> = ({ disabled = false, error }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Checkbox label="Input" error={error} disabled={disabled} />
    </div>
  );
};

export default Example;
