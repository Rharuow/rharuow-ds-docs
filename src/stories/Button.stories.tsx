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

export const Secondary: Story = {
  args: {
    children: "Botão secundário",
    variant: "secondary",
  },
};

export const Icon: Story = {
  args: {
    variant: "icon",
    "aria-label": "Adicionar",
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
  },
};
