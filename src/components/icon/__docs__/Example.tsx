import React, { type FC } from "react";
import Icon from "../icon";
import type { IconProps } from "../types";

const Example: FC<IconProps> = ({ name = "AccountIcon" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "64px",
        height: "64px",
      }}
    >
      <Icon name={name} />
    </div>
  );
};

export default Example;
