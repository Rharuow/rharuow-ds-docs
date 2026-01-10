import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ToasterProvider, useToast, useToaster, ToastPosition } from "../components/Toaster";
import { Button } from "../components/Button";

// Wrapper component for stories
const ToasterDemo: React.FC<{ position?: ToastPosition }> = ({ position }) => {
  const toast = useToast();

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Demonstração de Toasts</h2>
      <p className="text-gray-600 mb-6">
        Clique nos botões abaixo para ver diferentes tipos de notificações
      </p>

      <div className="flex flex-wrap gap-3">
        <Button onClick={() => toast.success("Operação realizada com sucesso!")}>
          Success Toast
        </Button>

        <Button
          onClick={() => toast.error("Erro ao processar a requisição")}
          variant="secondary"
        >
          Error Toast
        </Button>

        <Button
          onClick={() => toast.warning("Atenção: Verifique os dados informados")}
          variant="outline"
        >
          Warning Toast
        </Button>

        <Button onClick={() => toast.info("Você tem 3 novas mensagens")}>
          Info Toast
        </Button>

        <Button
          onClick={() =>
            toast.toast("Esta é uma notificação padrão", { variant: "default" })
          }
          variant="outline"
        >
          Default Toast
        </Button>
      </div>

      <div className="mt-8 pt-8 border-t">
        <h3 className="text-lg font-semibold mb-4">Toasts com Duração Customizada</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() =>
              toast.success("Toast rápido (2 segundos)", 2000)
            }
          >
            2 Segundos
          </Button>

          <Button
            onClick={() =>
              toast.info("Toast longo (10 segundos)", 10000)
            }
          >
            10 Segundos
          </Button>

          <Button
            onClick={() =>
              toast.toast("Toast permanente (não fecha automaticamente)", {
                duration: 0,
              })
            }
            variant="outline"
          >
            Permanente
          </Button>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t">
        <h3 className="text-lg font-semibold mb-4">Múltiplos Toasts</h3>
        <Button
          onClick={() => {
            toast.success("Primeiro toast");
            setTimeout(() => toast.info("Segundo toast"), 300);
            setTimeout(() => toast.warning("Terceiro toast"), 600);
            setTimeout(() => toast.error("Quarto toast"), 900);
          }}
        >
          Disparar Múltiplos Toasts
        </Button>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: "Components/Toaster",
  decorators: [
    (Story, context) => (
      <ToasterProvider position={context.args.position}>
        <Story />
      </ToasterProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      description: "Posição dos toasts na tela",
      defaultValue: "top-right",
    },
  },
};

export default meta;

type Story = StoryObj;

export const TopRight: Story = {
  args: {
    position: "top-right",
  },
  render: () => <ToasterDemo position="top-right" />,
};

export const TopLeft: Story = {
  args: {
    position: "top-left",
  },
  render: () => <ToasterDemo position="top-left" />,
};

export const TopCenter: Story = {
  args: {
    position: "top-center",
  },
  render: () => <ToasterDemo position="top-center" />,
};

export const BottomRight: Story = {
  args: {
    position: "bottom-right",
  },
  render: () => <ToasterDemo position="bottom-right" />,
};

export const BottomLeft: Story = {
  args: {
    position: "bottom-left",
  },
  render: () => <ToasterDemo position="bottom-left" />,
};

export const BottomCenter: Story = {
  args: {
    position: "bottom-center",
  },
  render: () => <ToasterDemo position="bottom-center" />,
};

export const AllVariants: Story = {
  args: {
    position: "top-right",
  },
  render: () => {
    const toast = useToast();

    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Todas as Variantes de Toast</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-green-700 mb-2">Success</h3>
            <p className="text-sm text-gray-600 mb-3">
              Usado para indicar sucesso em operações
            </p>
            <Button onClick={() => toast.success("Salvo com sucesso!")}>
              Testar
            </Button>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-red-700 mb-2">Error</h3>
            <p className="text-sm text-gray-600 mb-3">
              Usado para indicar erros ou falhas
            </p>
            <Button onClick={() => toast.error("Erro ao salvar dados")}>
              Testar
            </Button>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-yellow-700 mb-2">Warning</h3>
            <p className="text-sm text-gray-600 mb-3">
              Usado para avisos e alertas
            </p>
            <Button onClick={() => toast.warning("Dados não salvos")}>
              Testar
            </Button>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-blue-700 mb-2">Info</h3>
            <p className="text-sm text-gray-600 mb-3">
              Usado para informações gerais
            </p>
            <Button onClick={() => toast.info("Nova atualização disponível")}>
              Testar
            </Button>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Default</h3>
            <p className="text-sm text-gray-600 mb-3">
              Variante padrão neutra
            </p>
            <Button
              onClick={() =>
                toast.toast("Notificação padrão", { variant: "default" })
              }
            >
              Testar
            </Button>
          </div>
        </div>
      </div>
    );
  },
};

export const WithCallbacks: Story = {
  args: {
    position: "top-right",
  },
  render: () => {
    const ToastWithCallback = () => {
      const { addToast } = useToaster();
      
      return (
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Toasts com Callbacks</h2>
          <p className="text-gray-600 mb-6">
            Toasts podem executar ações ao serem fechados
          </p>

          <Button
            onClick={() => {
              addToast({
                message: "Este toast executa uma ação ao fechar",
                variant: "info",
                duration: 3000,
                onClose: () => {
                  console.log("Toast fechado!");
                  alert("Callback executado ao fechar o toast");
                },
              });
            }}
          >
            Toast com Callback
          </Button>
        </div>
      );
    };

    return <ToastWithCallback />;
  },
};

export const StressTest: Story = {
  args: {
    position: "top-right",
  },
  render: () => {
    const toast = useToast();

    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Teste de Stress</h2>
        <p className="text-gray-600 mb-6">
          O sistema limita automaticamente para 5 toasts simultâneos
        </p>

        <Button
          onClick={() => {
            for (let i = 1; i <= 10; i++) {
              setTimeout(() => {
                toast.info(`Toast número ${i} de 10`);
              }, i * 200);
            }
          }}
        >
          Disparar 10 Toasts Sequenciais
        </Button>
      </div>
    );
  },
};
