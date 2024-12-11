import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "..";
import React, { HTMLAttributes } from "react";

type Story = StoryObj<typeof Radio | HTMLAttributes<HTMLInputElement>>;

const meta: Meta<typeof Radio> = {
  title: "Form/Radio",
  component: Radio,
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
    label: "Radio",
    disabled: false,
    size: "large",
    onChange: () => console.log("Change"),
  },
  render: (args) => <Radio {...args} />,
};
export const Error: Story = {
  args: {
    label: "Radio",
    disabled: false,
    size: "large",
    error: "Error",
    onChange: () => console.log("Change"),
  },
  render: (args) => <Radio {...args} />,
};
