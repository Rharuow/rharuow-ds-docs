import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "../components/Table";
import { Button } from "../components/Button";

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O componente **Table** oferece uma estrutura completa e flexível para exibição de dados tabulares.

### Características:
- **Estrutura modular**: Table, Header, Body, Footer, Row, Cell
- **Variantes**: default, striped, bordered
- **Tamanhos**: sm, md, lg
- **Responsividade**: scroll horizontal automático
- **Header fixo**: para tabelas com muitos dados
- **Suporte a temas**: claro/escuro via CSS variables
- **Acessibilidade**: ARIA adequado para screen readers

### Uso:
\`\`\`tsx
import { Table } from "rharuow-ds";

<Table variant="striped" size="md" responsive>
  <Table.Header>
    <Table.Row>
      <Table.Cell as="th">Nome</Table.Cell>
      <Table.Cell as="th">Email</Table.Cell>
      <Table.Cell as="th">Ações</Table.Cell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>João Silva</Table.Cell>
      <Table.Cell>joao@email.com</Table.Cell>
      <Table.Cell>
        <Button>Editar</Button>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "striped", "bordered"],
      description: "Variante visual da tabela",
    },
    size: {
      control: "select", 
      options: ["sm", "md", "lg"],
      description: "Tamanho da fonte e espaçamentos",
    },
    responsive: {
      control: "boolean",
      description: "Ativar scroll horizontal em telas pequenas",
    },
    stickyHeader: {
      control: "boolean",
      description: "Fixar cabeçalho durante scroll vertical",
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story básica
export const Default: Story = {
  render: () => (
    <Table variant="default" size="md">
      <Table.Header>
        <Table.Row>
          <Table.Cell as="th" scope="col">Nome</Table.Cell>
          <Table.Cell as="th" scope="col">Email</Table.Cell>
          <Table.Cell as="th" scope="col">Status</Table.Cell>
          <Table.Cell as="th" scope="col">Ações</Table.Cell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>João Silva</Table.Cell>
          <Table.Cell>joao.silva@email.com</Table.Cell>
          <Table.Cell>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Ativo
            </span>
          </Table.Cell>
          <Table.Cell>
            <Button variant="outline">Editar</Button>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Maria Santos</Table.Cell>
          <Table.Cell>maria.santos@email.com</Table.Cell>
          <Table.Cell>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              Pendente
            </span>
          </Table.Cell>
          <Table.Cell>
            <Button variant="outline">Editar</Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

// Tabela listrada
export const Striped: Story = {
  render: () => (
    <Table variant="striped" size="md">
      <Table.Header>
        <Table.Row>
          <Table.Cell as="th" scope="col">Produto</Table.Cell>
          <Table.Cell as="th" scope="col">Categoria</Table.Cell>
          <Table.Cell as="th" scope="col" align="right">Preço</Table.Cell>
          <Table.Cell as="th" scope="col" align="center">Estoque</Table.Cell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Smartphone X</Table.Cell>
          <Table.Cell>Eletrônicos</Table.Cell>
          <Table.Cell align="right">R$ 1.299,00</Table.Cell>
          <Table.Cell align="center">15</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Notebook Pro</Table.Cell>
          <Table.Cell>Informática</Table.Cell>
          <Table.Cell align="right">R$ 3.299,00</Table.Cell>
          <Table.Cell align="center">8</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

// Tabela com bordas e footer
export const Bordered: Story = {
  render: () => (
    <Table variant="bordered" size="md">
      <Table.Header>
        <Table.Row>
          <Table.Cell as="th" scope="col">Data</Table.Cell>
          <Table.Cell as="th" scope="col">Descrição</Table.Cell>
          <Table.Cell as="th" scope="col" align="right">Valor</Table.Cell>
          <Table.Cell as="th" scope="col">Tipo</Table.Cell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>15/09/2025</Table.Cell>
          <Table.Cell>Salário</Table.Cell>
          <Table.Cell align="right">+ R$ 5.000,00</Table.Cell>
          <Table.Cell>
            <span className="text-green-600 font-medium">Receita</span>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>14/09/2025</Table.Cell>
          <Table.Cell>Aluguel</Table.Cell>
          <Table.Cell align="right">- R$ 1.200,00</Table.Cell>
          <Table.Cell>
            <span className="text-red-600 font-medium">Despesa</span>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell as="th" scope="row" colSpan={2}>Total</Table.Cell>
          <Table.Cell align="right" className="font-bold">+ R$ 3.800,00</Table.Cell>
          <Table.Cell> </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  ),
};

// Tema Dark
export const DarkTheme: Story = {
  render: () => (
    <div data-theme="dark" className="p-6 bg-gray-900 rounded-lg">
      <h3 className="text-white mb-4">Tabela em Tema Escuro</h3>
      <Table variant="striped" size="md">
        <Table.Header>
          <Table.Row>
            <Table.Cell as="th" scope="col">Projeto</Table.Cell>
            <Table.Cell as="th" scope="col">Cliente</Table.Cell>
            <Table.Cell as="th" scope="col">Status</Table.Cell>
            <Table.Cell as="th" scope="col" align="right">Progresso</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Website Redesign</Table.Cell>
            <Table.Cell>Empresa ABC</Table.Cell>
            <Table.Cell>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-900 text-green-100">
                Concluído
              </span>
            </Table.Cell>
            <Table.Cell align="right">100%</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>App Mobile</Table.Cell>
            <Table.Cell>Startup XYZ</Table.Cell>
            <Table.Cell>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-900 text-blue-100">
                Em desenvolvimento
              </span>
            </Table.Cell>
            <Table.Cell align="right">75%</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  ),
};