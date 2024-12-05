import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "..";
import React from "react";
import { Icon } from "../..";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Buttons/Button",
  component: Button,
  argTypes: {
    disabled: { control: "boolean", defaultValue: false },
    variant: { control: "select", options: ["primary", "secondary", "tertiary"], defaultValue: "secondary" },
    size: { control: "select", options: ["small", "medium", "large"], defaultValue: "medium" },
  },
};

export default meta;

export const Primary: Story = {
  args: {
    text: "Button",
    variant: "primary",
    disabled: false,
    size: "large",
    onClick: () => console.log("Button"),
  },
  render: (args) => <Button {...args}>Primary</Button>,
};

export const Secondary: Story = {
  args: {
    disabled: false,
    variant: "secondary",
    size: "medium",
    onClick: () => console.log("Button"),
  },
  render: (args) => <Button {...args}>Secondary</Button>,
};
export const Tertiary: Story = {
  args: {
    disabled: false,
    variant: "tertiary",
    size: "small",
    onClick: () => console.log("Button"),
  },
  render: (args) => <Button {...args}>Tertiary</Button>,
};

export const WithIconLeft: Story = {
  args: {
    disabled: false,
    variant: "tertiary",
    size: "small",
    iconLeft: <Icon name="AddIcon" />,
    onClick: () => console.log("Button"),
  },
  render: (args) => <Button {...args}>Tertiary</Button>,
};
export const WithIconRight: Story = {
  args: {
    disabled: false,
    variant: "tertiary",
    size: "small",
    iconRight: <Icon name="AddIcon" />,
    onClick: () => console.log("Button"),
  },
  render: (args) => <Button {...args}>Tertiary</Button>,
};
