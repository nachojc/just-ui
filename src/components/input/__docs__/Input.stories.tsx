import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "..";
import React from "react";

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
  argTypes: {
    asBlock: { control: "boolean", defaultValue: false },
    disabled: { control: "boolean", defaultValue: false },
    size: { control: "select", options: ["small", "large"], defaultValue: "medium" },
    label: { control: "text" },
    error: { control: "text" },
    left: { control: "text" },
    right: { control: "text" },
  },
};

export default meta;

export const Default: Story = {
  args: {
    label: "Input",
    disabled: false,
    size: "large",
    onClick: () => console.log("Input"),
  },
  render: (args) => <Input {...args} />,
};
