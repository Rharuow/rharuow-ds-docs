import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../components/Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Chip is a pill-shaped toggle element used to represent filters, tags, or selections. It supports active/inactive states and can carry an optional icon.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: "Chip",
    active: false,
  },
};

export const Active: Story = {
  args: {
    label: "Ativo",
    active: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Desativado",
    active: false,
    disabled: true,
  },
};

export const DisabledActive: Story = {
  args: {
    label: "Desativado ativo",
    active: true,
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    label: "Com ícone",
    active: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        width={14}
        height={14}
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
};

/** Interactive group simulating a filter bar */
export const FilterGroup: Story = {
  render: () => {
    const filters = ["React", "TypeScript", "Tailwind", "Vite", "Storybook"];
    const [active, setActive] = useState<string[]>(["React"]);

    const toggle = (filter: string) => {
      setActive((prev) =>
        prev.includes(filter)
          ? prev.filter((f) => f !== filter)
          : [...prev, filter]
      );
    };

    return (
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {filters.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            active={active.includes(filter)}
            onChange={() => toggle(filter)}
          />
        ))}
      </div>
    );
  },
};
