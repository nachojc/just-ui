import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "..";
import React from "react";
import { iconFile } from "../types";
import * as iconComponents from "../icons";

type Story = StoryObj<typeof Icon>;
const iconOptions = Object.keys(iconFile);

const meta: Meta<typeof Icon> = {
  title: "Icon",
  component: Icon,
  argTypes: {
    name: { control: "select", options: iconOptions, defaultValue: "medium" },
  },
};

export default meta;

export const Default: Story = {
  args: {
    name: "AccountIcon",
    onClick: () => console.log("Icon"),
  },
  render: (args) => <Icon {...args} />,
};

export const AllIcons: Story = {
  args: {},
  render: () => (
    <div style={{ display: "grid", gap: "16px 8px", gridTemplateColumns: "auto auto auto auto" }}>
      {Object.keys(iconComponents).map((item) => (
        <div
          key={item}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid",
            borderRadius: 4,
          }}
        >
          <Icon name={item} style={{ height: 64, width: 64 }} />
          <span style={{ fontSize: 8, marginTop: 4 }}>{item}</span>
        </div>
      ))}
    </div>
  ),
};
