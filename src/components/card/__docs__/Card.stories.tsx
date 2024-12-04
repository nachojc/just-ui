import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardFooter, CardTitle } from "..";
import React from "react";
import { Button, Icon } from "../..";
import { CardFooterProps, CardProps } from "../types";

type Story = StoryObj<typeof Card>;
type StoryFull = StoryObj<typeof Card | typeof CardFooter | typeof CardTitle>;

const meta: Meta<typeof Card> = {
  title: "Layout/Card",
  component: Card,
  argTypes: {
    border: { control: "boolean", options: ["true", "false"] },
  },
};

export default meta;

export const Default: Story = {
  args: {},
  render: (args) => <Card {...args}>Primary</Card>,
};
export const Border: Story = {
  args: {
    border: "true",
  },
  render: (args) => <Card {...args}>Primary</Card>,
};

export const Title: Story = {
  args: {},
  render: ({ border, ...args }) => (
    <Card border={border}>
      <CardTitle {...args}>Secondary</CardTitle>Content
    </Card>
  ),
};
export const TitleWithOptions: Story = {
  args: {},
  render: ({ border, ...args }) => (
    <Card border={border}>
      <CardTitle options={<Icon name="AddIcon" />} {...args}>
        Secondary
      </CardTitle>
      Content
    </Card>
  ),
};

export const Footer: Story = {
  args: {
    border: true,
  },
  render: ({ border, ...args }) => (
    <Card border={border}>
      Content
      <CardFooter {...args}>Footer</CardFooter>
    </Card>
  ),
};
export const FullExample: StoryFull = {
  args: {
    border: true,
    align: "center",
  },
  argTypes: {
    align: { control: "select", options: ["left", "center", "right"] },
  },

  render: ({ border, align, ...args }: CardProps & CardFooterProps) => (
    <Card border={border}>
      <CardTitle>Title</CardTitle>
      Content <br />
      More...
      <CardFooter align={align} {...args}>
        <Button>Close</Button>
      </CardFooter>
    </Card>
  ),
};
