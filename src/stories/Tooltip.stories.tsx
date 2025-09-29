import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../components/Tooltip";
import { Button } from "../components/Button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "Este é um tooltip padrão",
    position: "top",
  },
  render: (args) => (
    <div className="p-8 flex justify-center">
      <Tooltip {...args}>
        <Button>Passe o mouse aqui</Button>
      </Tooltip>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="p-16 grid grid-cols-2 gap-8 place-items-center">
      <Tooltip content="Tooltip no topo" position="top">
        <Button>Top</Button>
      </Tooltip>
      
      <Tooltip content="Tooltip na direita" position="right">
        <Button>Right</Button>
      </Tooltip>
      
      <Tooltip content="Tooltip embaixo" position="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      
      <Tooltip content="Tooltip na esquerda" position="left">
        <Button>Left</Button>
      </Tooltip>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="p-8 flex justify-center">
      <Tooltip content="Informação adicional sobre este texto">
        <span className="underline cursor-help">
          Texto com tooltip
        </span>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <div className="p-8 flex justify-center">
      <Tooltip content="Este é um tooltip com conteúdo mais longo para demonstrar como ele se comporta">
        <Button>Tooltip com conteúdo longo</Button>
      </Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="p-8 flex justify-center">
      <Tooltip content="Este tooltip está desabilitado" disabled>
        <Button>Tooltip desabilitado</Button>
      </Tooltip>
    </div>
  ),
};

export const CustomStyle: Story = {
  render: () => (
    <div className="p-8 flex justify-center">
      <Tooltip 
        content="Tooltip customizado" 
        className="bg-red-500 text-white"
      >
        <Button variant="outline">Tooltip customizado</Button>
      </Tooltip>
    </div>
  ),
};