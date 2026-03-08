import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../components/Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Switch is a toggle control that lets users turn an option on or off. It supports label positioning, three size variants, and disabled state. Accessible via `role=\"switch\"` and `aria-checked`.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    labelPosition: {
      control: "select",
      options: ["left", "right"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: false,
    label: "Ativar notificações",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "Ativado",
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
  },
};

export const LabelLeft: Story = {
  args: {
    checked: true,
    label: "Modo escuro",
    labelPosition: "left",
  },
};

export const Small: Story = {
  args: {
    checked: false,
    label: "Pequeno",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    checked: true,
    label: "Grande",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    label: "Desativado",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    label: "Desativado e ligado",
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex flex-col gap-4">
        <Switch
          checked={checked}
          onChange={setChecked}
          label={checked ? "Ligado" : "Desligado"}
        />
        <p className="text-sm text-gray-500">
          Estado atual: <strong>{checked ? "ON" : "OFF"}</strong>
        </p>
      </div>
    );
  },
};
