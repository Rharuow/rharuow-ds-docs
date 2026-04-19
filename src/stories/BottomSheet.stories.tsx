import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "../components/BottomSheet";
import { Button } from "../components/Button";

const meta: Meta<typeof BottomSheet> = {
  title: "Components/BottomSheet",
  component: BottomSheet,
  tags: ["autodocs"],
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="p-4">
        <Button onClick={() => setOpen(true)}>Abrir Bottom Sheet</Button>

        <BottomSheet open={open} onClose={() => setOpen(false)} size="md">
          <div className="px-4 pb-6 pt-4">
            <h3 className="text-lg font-semibold text-[var(--neutral-900)]">Filtros rápidos</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Esse bottom sheet foi desenhado para uso em mobile e fica oculto em telas md+.
            </p>

            <div className="mt-4 flex flex-col gap-2">
              <button className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm">
                Últimos 7 dias
              </button>
              <button className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm">
                Entradas
              </button>
              <button className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm">
                Saídas
              </button>
            </div>

            <div className="mt-5 flex gap-2">
              <Button variant="outline" className="flex-1" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button className="flex-1" onClick={() => setOpen(false)}>
                Aplicar
              </Button>
            </div>
          </div>
        </BottomSheet>
      </div>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="p-4">
        <Button onClick={() => setOpen(true)}>Abrir Bottom Sheet Grande</Button>

        <BottomSheet open={open} onClose={() => setOpen(false)} size="lg">
          <div className="px-4 pb-6 pt-4">
            <h3 className="text-lg font-semibold text-[var(--neutral-900)]">Conteúdo extenso</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Exemplo com mais área para listas e formulários.
            </p>
            <div className="mt-4 space-y-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm">
                  Item {index + 1}
                </div>
              ))}
            </div>
          </div>
        </BottomSheet>
      </div>
    );
  },
};
