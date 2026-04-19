import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BottomTabNavigator } from "../components/BottomTabNavigator";

const meta: Meta<typeof BottomTabNavigator> = {
  title: "Components/BottomTabNavigator",
  component: BottomTabNavigator,
  tags: ["autodocs"],
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export default meta;

type Story = StoryObj<typeof BottomTabNavigator>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = React.useState("home");

    return (
      <div className="relative mx-auto min-h-[580px] max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-[var(--neutral-50)] shadow-sm">
        <div className="px-4 py-6">
          <p className="text-xs uppercase tracking-wide text-[var(--text-muted)]">Tela ativa</p>
          <h3 className="mt-2 text-2xl font-semibold text-[var(--neutral-900)]">
            {active === "home" && "Início"}
            {active === "search" && "Buscar"}
            {active === "wallet" && "Carteira"}
            {active === "profile" && "Perfil"}
          </h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Componente fixado apenas no mobile. Em telas md+ ele é ocultado automaticamente.
          </p>
        </div>

        <BottomTabNavigator
          value={active}
          onValueChange={setActive}
          items={[
            { id: "home", label: "Início", icon: "🏠" },
            { id: "search", label: "Buscar", icon: "🔎" },
            { id: "wallet", label: "Carteira", icon: "💳", badge: "●" },
            { id: "profile", label: "Perfil", icon: "👤" },
          ]}
        />
      </div>
    );
  },
};
