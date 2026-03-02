import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../components/Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Pagination lets users navigate through a set of pages. It shows a window of 3 consecutive pages, an ellipsis, and the last page when the total exceeds the visible window. Previous/Next arrows appear contextually.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Pagination>;

// ─── Static stories ──────────────────────────────────────────────────────────

export const FirstPage: Story = {
  args: { totalPages: 10, currentPage: 1, onPageChange: () => {} },
};

export const MiddlePage: Story = {
  args: { totalPages: 10, currentPage: 5, onPageChange: () => {} },
};

export const LastPage: Story = {
  args: { totalPages: 10, currentPage: 10, onPageChange: () => {} },
};

export const FewPages: Story = {
  name: "Poucas páginas (≤ 3)",
  args: { totalPages: 3, currentPage: 2, onPageChange: () => {} },
};

export const FourPages: Story = {
  name: "4 páginas (sem ellipsis)",
  args: { totalPages: 4, currentPage: 1, onPageChange: () => {} },
};

export const SinglePage: Story = {
  name: "Página única",
  args: { totalPages: 1, currentPage: 1, onPageChange: () => {} },
};

export const Disabled: Story = {
  args: { totalPages: 10, currentPage: 5, onPageChange: () => {}, disabled: true },
};

// ─── Interactive story ───────────────────────────────────────────────────────

export const Interactive: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const total = 20;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <p style={{ fontSize: "14px", color: "var(--pagination-item-text)" }}>
          Página <strong>{page}</strong> de <strong>{total}</strong>
        </p>
        <Pagination
          totalPages={total}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
    );
  },
};

export const SmallTotal: Story = {
  name: "Interativo — poucos itens",
  render: () => {
    const [page, setPage] = useState(1);
    const total = 5;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <p style={{ fontSize: "14px", color: "var(--pagination-item-text)" }}>
          Página <strong>{page}</strong> de <strong>{total}</strong>
        </p>
        <Pagination
          totalPages={total}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
    );
  },
};
