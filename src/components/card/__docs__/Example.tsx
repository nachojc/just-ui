import React, { type FC } from "react";
import { Card, CardTitle } from "..";
import type { CardProps, CardTitleProps } from "../types";

const Example: FC<CardProps & CardTitleProps> = ({ title = "Title", onClose = () => {} }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Card>
        <CardTitle onClose={onClose}>{title}</CardTitle>
      </Card>
    </div>
  );
};

export default Example;
