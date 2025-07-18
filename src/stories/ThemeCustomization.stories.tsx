import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { RadioGroup } from "../components/RadioGroup";
import { Select } from "../components/Select";
import React from "react";

// Wrapper component to provide form context
const ThemeShowcaseWrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({
    defaultValues: {
      name: "",
      category: "",
      priority: "",
      status: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <div className="max-w-md mx-auto p-6 space-y-4">
        {children}
        
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-700 mb-2">Form Values:</h4>
          <pre className="text-xs text-gray-600 overflow-auto">
            {JSON.stringify(methods.watch(), null, 2)}
          </pre>
        </div>
      </div>
    </FormProvider>
  );
};

const meta: Meta = {
  title: "🎨 Theme Customization",
  decorators: [
    (Story) => (
      <ThemeShowcaseWrapper>
        <Story />
      </ThemeShowcaseWrapper>
    ),
  ],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
# 🎨 Customização de Tema

Use a **toolbar** no topo da página para alterar o tema em tempo real!

## Como usar:

1. **🔵 Tema Pré-definido**: Escolha um dos temas prontos (Blue, Red, Green, etc.)
2. **🎨 Tema Custom**: Selecione "Custom" e use os color pickers para definir suas próprias cores

## Variáveis CSS aplicadas:

- \`--primary\`: Cor principal dos componentes
- \`--primary-hover\`: Cor de hover/background
- \`--primary-text\`: Cor do texto em backgrounds primários

## Componentes que respondem ao tema:

- Todos os componentes do design system respeitam essas variáveis
- Bordas, backgrounds, textos e estados de hover se adaptam automaticamente
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentShowcase: Story = {
  render: () => (
    <>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          🎨 Theme Customization Demo
        </h2>
        <p className="text-gray-600">
          Use the toolbar above to change themes and see live updates!
        </p>
      </div>

      <Input
        name="name"
        label="Your Name"
        placeholder="Enter your name"
      />

      <Select
        name="category"
        label="Category"
        options={[
          { label: "Work", value: "work" },
          { label: "Personal", value: "personal" },
          { label: "Study", value: "study" },
        ]}
      />

      <RadioGroup
        name="priority"
        label="Priority Level"
        options={[
          { label: "Low", value: "low" },
          { label: "Medium", value: "medium" },
          { label: "High", value: "high" },
        ]}
        direction="row"
        size="md"
      />

      <RadioGroup
        name="status"
        label="Status"
        options={[
          { label: "Todo", value: "todo" },
          { label: "In Progress", value: "progress" },
          { label: "Done", value: "done" },
        ]}
        direction="col"
        size="sm"
      />

      <div className="flex gap-3">
        <Button variant="default" className="flex-1">
          Primary Action
        </Button>
        <Button variant="outline" className="flex-1">
          Secondary
        </Button>
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstra todos os componentes principais reagindo às mudanças de tema em tempo real.",
      },
    },
  },
};

export const ThemePresets: Story = {
  render: () => {
    const themes = [
      { name: "Blue", colors: { primary: "#2563eb", hover: "#dbeafe" } },
      { name: "Red", colors: { primary: "#dc2626", hover: "#fecaca" } },
      { name: "Green", colors: { primary: "#059669", hover: "#d1fae5" } },
      { name: "Purple", colors: { primary: "#7c3aed", hover: "#e9d5ff" } },
      { name: "Orange", colors: { primary: "#ea580c", hover: "#fed7aa" } },
      { name: "Cyan", colors: { primary: "#0891b2", hover: "#cffafe" } },
    ];

    return (
      <div className="grid grid-cols-2 gap-4">
        {themes.map((theme) => (
          <div
            key={theme.name}
            className="p-4 border rounded-lg text-center"
            style={{
              borderColor: theme.colors.primary,
              backgroundColor: theme.colors.hover,
            }}
          >
            <div
              className="w-8 h-8 rounded-full mx-auto mb-2"
              style={{ backgroundColor: theme.colors.primary }}
            />
            <h4 className="font-semibold" style={{ color: theme.colors.primary }}>
              {theme.name}
            </h4>
            <div className="text-xs text-gray-600 mt-1">
              <div>{theme.colors.primary}</div>
              <div>{theme.colors.hover}</div>
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Paleta de cores dos temas pré-definidos disponíveis.",
      },
    },
  },
};

export const CustomThemeGuide: Story = {
  render: () => (
    <div className="prose prose-sm max-w-none">
      <h3>🎨 Como usar temas customizados</h3>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <h4 className="text-blue-800 font-semibold mb-2">No Storybook:</h4>
        <ol className="text-blue-700 text-sm space-y-1">
          <li>1. Selecione "Custom" no seletor de tema</li>
          <li>2. Use os color pickers na toolbar para definir cores</li>
          <li>3. Veja as mudanças aplicadas em tempo real</li>
        </ol>
      </div>

      <div className="bg-green-50 p-4 rounded-lg mb-4">
        <h4 className="text-green-800 font-semibold mb-2">Em sua aplicação:</h4>
        <pre className="text-green-700 text-xs bg-green-100 p-2 rounded overflow-auto">
{`:root {
  --primary: #your-color;
  --primary-hover: #your-hover-color;
  --primary-text: #fff;
}`}
        </pre>
      </div>

      <div className="bg-orange-50 p-4 rounded-lg">
        <h4 className="text-orange-800 font-semibold mb-2">CSS Variables disponíveis:</h4>
        <ul className="text-orange-700 text-sm space-y-1">
          <li><code>--primary</code>: Cor principal (bordas, texto ativo)</li>
          <li><code>--primary-hover</code>: Cor de hover/background</li>
          <li><code>--primary-text</code>: Cor do texto em backgrounds primários</li>
          <li><code>--input-bg</code>: Background dos inputs</li>
          <li><code>--input-text</code>: Cor do texto dos inputs</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Guia completo para implementar temas customizados em sua aplicação.",
      },
    },
  },
};
