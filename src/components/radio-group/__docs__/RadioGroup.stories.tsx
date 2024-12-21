import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "..";
import React, { HTMLAttributes } from "react";

type Story = StoryObj<typeof RadioGroup | HTMLAttributes<HTMLInputElement>>;

const meta: Meta<typeof RadioGroup> = {
  title: "Form/RadioGroup",
  component: RadioGroup,
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
    values: [
      { label: "One", value: 1 },
      { label: "Two", value: 2 },
    ],
    name: "demo",
    label: "RadioGroup",
    disabled: false,
    size: "large",
    onChange: (val) => console.log(`Change to ${val.currentTarget.value}`, val.currentTarget),
  },
  render: (args) => <RadioGroup {...args} />,
};
export const Error: Story = {
  args: {
    values: [
      { label: "One", value: 1 },
      { label: "Two", value: 2 },
    ],
    name: "demo",
    label: "RadioGroup",
    disabled: false,
    size: "large",
    error: "Error",
    onChange: (val) => console.log(`Change to ${val}`, val),
  },
  render: (args) => <RadioGroup {...args} />,
};
