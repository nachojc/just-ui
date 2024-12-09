import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "..";
import React from "react";

type Story = StoryObj<typeof TextArea>;

const meta: Meta<typeof TextArea> = {
  title: "Form/TextArea",
  component: TextArea,
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
    label: "Input",
    disabled: false,
    size: "large",
    onClick: () => console.log("Input"),
  },
  render: (args) => <TextArea {...args} />,
};
