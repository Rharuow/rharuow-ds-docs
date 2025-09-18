import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Botão padrão",
    variant: "default",
  },
};

export const Outline: Story = {
  args: {
    children: "Botão outline",
    variant: "outline",
  },
};
