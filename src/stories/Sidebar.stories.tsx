import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "../components/Sidebar";
import { Button } from "../components/Button";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Left: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <div className="relative min-h-[400px] bg-gray-50 p-4">
        <Button onClick={() => setOpen((v) => !v)} className="mb-4">
          {open ? "Fechar Sidebar" : "Abrir Sidebar"}
        </Button>
        <Sidebar open={open} side="left" size="md">
          <div className="p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Sidebar (esquerda)</h3>
            <nav className="flex flex-col gap-2 text-sm text-gray-700">
              <a href="#" className="hover:text-blue-600">Dashboard</a>
              <a href="#" className="hover:text-blue-600">Usuários</a>
              <a href="#" className="hover:text-blue-600">Configurações</a>
            </nav>
          </div>
        </Sidebar>
      </div>
    );
  },
};

export const Right: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <div className="relative min-h-[400px] bg-gray-50 p-4">
        <Button onClick={() => setOpen((v) => !v)} className="mb-4">
          {open ? "Fechar Sidebar" : "Abrir Sidebar"}
        </Button>
        <Sidebar open={open} side="right" size="sm">
          <div className="p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Sidebar (direita)</h3>
            <p className="text-sm text-gray-600">Painel lateral persistente para telas md+.</p>
          </div>
        </Sidebar>
      </div>
    );
  },
};

export const CustomWidth: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <div className="relative min-h-[400px] bg-gray-50 p-4">
        <Button onClick={() => setOpen((v) => !v)} className="mb-4">
          {open ? "Fechar Sidebar" : "Abrir Sidebar"}
        </Button>
        <Sidebar open={open} side="left" size="320px">
          <div className="p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Largura customizada (320px)</h3>
            <p className="text-sm text-gray-600">Use qualquer valor CSS como largura.</p>
          </div>
        </Sidebar>
      </div>
    );
  },
};
