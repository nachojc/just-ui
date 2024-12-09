import React, { type FC } from "react";
import Input from "../Input";
import type { InputProps } from "../types";

const Example: FC<InputProps> = ({ disabled = false, onClick = () => {}, error }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Input label="Input" error={error} disabled={disabled} onClick={onClick} />
    </div>
  );
};

export default Example;
