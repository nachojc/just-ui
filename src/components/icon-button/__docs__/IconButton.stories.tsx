import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "..";
import React from "react";
import { Icon } from "../..";

type Story = StoryObj<typeof IconButton>;

const meta: Meta<typeof IconButton> = {
  title: "Buttons/IconButton",
  component: IconButton,
  argTypes: {
    disabled: { control: "boolean", defaultValue: false },
    variant: { control: "select", options: ["primary", "secondary", "tertiary"], defaultValue: "secondary" },
    size: { control: "select", options: ["small", "medium", "large"], defaultValue: "medium" },
    position: { control: "select", options: ["top", "bottom"], defaultValue: "medium" },
  },
};

export default meta;

export const Top: Story = {
  args: {
    disabled: false,
    icon: <Icon name="ArrowIcon" />,
    onClick: () => console.log("IconButton"),
  },
  render: (args) => <IconButton {...args}>Close</IconButton>,
};

export const Bottom: Story = {
  args: {
    disabled: false,
    position: "bottom",
    icon: <Icon name="AddIcon" />,
    onClick: () => console.log("IconButton"),
    variant: "primary",
  },
  render: (args) => <IconButton {...args}>Add</IconButton>,
};
