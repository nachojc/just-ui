import React, { type FC } from "react";
import { IconButton } from "..";
import type { IconButtonProps } from "../types";
import { Icon } from "../..";

const Example: FC<IconButtonProps> = ({ onClick = () => {}, variant = "primary" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <IconButton icon={<Icon name="ArrowIcon" />} onClick={onClick} variant={variant}>
        Button
      </IconButton>
    </div>
  );
};

export default Example;
