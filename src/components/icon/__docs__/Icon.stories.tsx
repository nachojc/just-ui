import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "..";
import React from "react";
import { IconName, IconNameKey } from "../types";

type Story = StoryObj<typeof Icon>;

const meta: Meta<typeof Icon> = {
  title: "Icon",
  component: Icon,
  argTypes: {
    name: { control: "select", options: IconNameKey, defaultValue: "medium" },
  },
};

export default meta;

export const Default: Story = {
  args: {
    name: "JustIcon",
    onClick: () => console.log("Icon"),
  },
  render: (args) => <Icon {...args} />,
};

export const AllIcons: Story = {
  args: {},
  render: () => (
    <div style={{ display: "grid", gap: "16px 8px", gridTemplateColumns: "auto auto auto auto" }}>
      {IconNameKey.map((item) => (
        <div
          key={item}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 8,
            alignItems: "center",
            border: "1px solid",
            borderRadius: 4,
          }}
        >
          <Icon name={item} {...{ height: 64, width: 64 }} />
          <span style={{ fontSize: 8, marginTop: 4 }}>{item}</span>
        </div>
      ))}
    </div>
  ),
};
