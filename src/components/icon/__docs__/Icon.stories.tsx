import type { Meta, StoryObj } from "@storybook/react";
import Icon from "../icon";
import React from "react";
import { iconFile } from "../icons";

type Story = StoryObj<typeof Icon>;
const iconOptions = Object.keys(iconFile)

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
    name: 'archive',
    onClick: () => console.log("Icon"),
  },
  render: (args) => <Icon {...args}/>,
};

