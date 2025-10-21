import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AsideSheet } from "../components/AsideSheet";
import { Button } from "../components/Button";

const meta: Meta<typeof AsideSheet> = {
  title: "Components/AsideSheet",
  component: AsideSheet,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AsideSheet>;

export const Right: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Abrir Aside (direita)</Button>
        <AsideSheet open={open} onClose={() => setOpen(false)} side="right" size="md">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Aside (direita)</h3>
            <p className="text-sm text-gray-600 mb-4">Conteúdo do painel lateral.</p>
            <Button onClick={() => setOpen(false)}>Fechar</Button>
          </div>
        </AsideSheet>
      </div>
    );
  },
};

export const Left: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Abrir Aside (esquerda)</Button>
        <AsideSheet open={open} onClose={() => setOpen(false)} side="left" size="sm">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Aside (esquerda)</h3>
            <p className="text-sm text-gray-600 mb-4">Conteúdo do painel lateral vindo da esquerda.</p>
            <Button onClick={() => setOpen(false)}>Fechar</Button>
          </div>
        </AsideSheet>
      </div>
    );
  },
};
