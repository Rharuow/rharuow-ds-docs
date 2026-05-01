import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ColorInput } from "../components/ColorInput";
import { FormProvider, useForm } from "react-hook-form";

const meta: Meta<typeof ColorInput> = {
  title: "Components/ColorInput",
  component: ColorInput,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label do input (fica flutuante)",
    },
    disabled: {
      control: "boolean",
      description: "Input desabilitado",
      defaultValue: false,
    },
    name: {
      control: "text",
      description: "Nome do campo para React Hook Form",
      defaultValue: "color",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Um componente de seleção de cor (color picker) com label flutuante e integração completa com React Hook Form.

## Características:
- 🎨 Seletor de cor nativo do navegador
- 📝 Label flutuante automático
- 🔢 Exibe o valor hexadecimal selecionado
- 🔗 Integração nativa com React Hook Form
- ♿ Acessibilidade completa
- 🎨 Customização via CSS Variables
        `,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ColorInput>;

const Template = (args: any) => {
  const methods = useForm({ defaultValues: { [args.name || "color"]: "#8b5cf6" } });
  return (
    <FormProvider {...methods}>
      <div style={{ maxWidth: "320px" }}>
        <ColorInput {...args} />
      </div>
    </FormProvider>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    name: "color",
    label: "Cor",
  },
  parameters: {
    docs: {
      description: {
        story: "ColorInput básico com label flutuante integrado ao React Hook Form.",
      },
    },
  },
};

export const SemLabel: Story = {
  render: Template,
  args: {
    name: "color",
  },
  parameters: {
    docs: {
      description: {
        story: "ColorInput sem label.",
      },
    },
  },
};

export const Desabilitado: Story = {
  render: Template,
  args: {
    name: "color",
    label: "Cor (desabilitado)",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "ColorInput no estado desabilitado.",
      },
    },
  },
};

export const SemFormContext: Story = {
  render: (args) => {
    const [color, setColor] = React.useState("#ec4899");
    return (
      <div style={{ maxWidth: "320px" }}>
        <ColorInput
          {...args}
          value={color}
          onChange={(e) => setColor((e.target as HTMLInputElement).value)}
        />
      </div>
    );
  },
  args: {
    name: "color",
    label: "Cor favorita",
  },
  parameters: {
    docs: {
      description: {
        story: "ColorInput controlado fora do React Hook Form, usando estado local.",
      },
    },
  },
};

export const ComValidacao: Story = {
  render: (args) => {
    const methods = useForm({
      defaultValues: { color: "#000000" },
    });

    const onSubmit = (data: any) => alert(`Cor selecionada: ${data.color}`);

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} style={{ maxWidth: "320px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <ColorInput {...args} />
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              background: "var(--primary, #8b5cf6)",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Confirmar cor
          </button>
        </form>
      </FormProvider>
    );
  },
  args: {
    name: "color",
    label: "Cor do tema",
  },
  parameters: {
    docs: {
      description: {
        story: "ColorInput dentro de um formulário com submit.",
      },
    },
  },
};
