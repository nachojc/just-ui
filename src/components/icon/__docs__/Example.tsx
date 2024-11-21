import React, { type FC } from "react";
import Icon from "../icon";
import type { IconProps } from "../types";

const Example: FC<IconProps> = ({ name = "account" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Icon name={name} />
    </div>
  );
};

export default Example;
