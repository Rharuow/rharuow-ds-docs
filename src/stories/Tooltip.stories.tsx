import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../components/Tooltip";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

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

export const InsideCard: Story = {
  render: () => (
    <div className="p-8 flex justify-center">
      <div className="w-80">
        <div className="bg-gray-100 p-4 rounded-lg" style={{ overflow: 'hidden' }}>
          <h3 className="text-lg font-semibold mb-4">Container com overflow: hidden</h3>
          <div className="space-y-4">
            <Tooltip content="Tooltip que funciona mesmo com overflow hidden" position="top">
              <Button className="w-full">Tooltip no topo</Button>
            </Tooltip>
            
            <Tooltip content="Tooltip posicionado à direita" position="right">
              <Button className="w-full">Tooltip à direita</Button>
            </Tooltip>
            
            <Tooltip content="Tooltip posicionado embaixo" position="bottom">
              <Button className="w-full">Tooltip embaixo</Button>
            </Tooltip>
            
            <Tooltip content="Tooltip posicionado à esquerda" position="left">
              <Button className="w-full">Tooltip à esquerda</Button>
            </Tooltip>
          </div>
          
          <div className="mt-4 p-3 bg-yellow-100 rounded text-sm">
            <p>⚠️ Este container tem <code>overflow: hidden</code> aplicado, mas os tooltips ainda funcionam corretamente usando Portal!</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const InsideCardComponent: Story = {
  render: () => (
    <div className="p-8 flex justify-center">
      <div className="w-96">
        <Card variant="elevated">
          <Card.Header>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Dashboard Analytics</h3>
              <Tooltip content="Informações sobre este dashboard" position="left">
                <button className="text-gray-500 hover:text-gray-700">ℹ️</button>
              </Tooltip>
            </div>
          </Card.Header>
          
          <Card.Body>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <Tooltip content="Total de vendas do mês atual" position="top">
                  <div className="bg-blue-50 p-3 rounded-lg cursor-help">
                    <div className="text-2xl font-bold text-blue-600">R$ 45.2k</div>
                    <div className="text-sm text-gray-600">Vendas</div>
                  </div>
                </Tooltip>
              </div>
              
              <div className="text-center">
                <Tooltip content="Número de novos clientes este mês" position="top">
                  <div className="bg-green-50 p-3 rounded-lg cursor-help">
                    <div className="text-2xl font-bold text-green-600">127</div>
                    <div className="text-sm text-gray-600">Clientes</div>
                  </div>
                </Tooltip>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Este Card tem <code>overflow: hidden</code> aplicado, mas todos os tooltips funcionam perfeitamente.
            </p>
            
            <div className="flex space-x-2">
              <Tooltip content="Ver relatório detalhado" position="bottom">
                <Button variant="outline" className="flex-1">Relatório</Button>
              </Tooltip>
              
              <Tooltip content="Exportar dados para Excel" position="bottom">
                <Button className="flex-1">Exportar</Button>
              </Tooltip>
            </div>
          </Card.Body>
          
          <Card.Footer>
            <div className="flex justify-between items-center">
              <Tooltip content="Última atualização dos dados" position="top">
                <span className="text-xs text-gray-500 cursor-help">
                  Atualizado: 30/09/2025
                </span>
              </Tooltip>
              
              <Tooltip content="Configurar alertas automáticos" position="top">
                <button className="text-blue-600 text-sm hover:underline">
                  Configurar Alertas
                </button>
              </Tooltip>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Exemplo realista de tooltips funcionando dentro de um Card com overflow: hidden. Todos os tooltips são renderizados usando Portal, garantindo que apareçam corretamente independente do container pai.",
      },
    },
  },
};