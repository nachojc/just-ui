import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "..";
import React, { HTMLAttributes } from "react";

type Story = StoryObj<typeof Checkbox | HTMLAttributes<HTMLInputElement>>;

const meta: Meta<typeof Checkbox> = {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {
    asBlock: { control: "boolean", defaultValue: false },
    disabled: { control: "boolean", defaultValue: false },
    size: { control: "select", options: ["small", "large"], defaultValue: "medium" },
    label: { control: "text" },
    error: { control: "text" },
  },
};

export default meta;

export const Default: Story = {
  args: {
    label: "Checkbox",
    disabled: false,
    size: "large",
    onChange: () => console.log("Change"),
  },
  render: (args) => <Checkbox {...args} />,
};
export const Error: Story = {
  args: {
    label: "Checkbox",
    disabled: false,
    size: "large",
    error: "Error",
    onChange: () => console.log("Change"),
  },
  render: (args) => <Checkbox {...args} />,
};
