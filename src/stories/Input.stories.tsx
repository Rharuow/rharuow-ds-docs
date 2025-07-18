import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input";
import { FormProvider, useForm } from "react-hook-form";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "Tipo do input",
      defaultValue: "text",
    },
    label: {
      control: "text",
      description: "Label do input (fica flutuante)",
    },
    placeholder: {
      control: "text",
      description: "Placeholder do input",
    },
    disabled: {
      control: "boolean",
      description: "Input desabilitado",
      defaultValue: false,
    },
    name: {
      control: "text",
      description: "Nome do campo para React Hook Form",
      defaultValue: "inputField",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Um componente de Input moderno com label flutuante e integração completa com React Hook Form.

## Características:
- 📝 Label flutuante automático
- 🔒 Suporte a password com ícone de mostrar/esconder
- 🎨 Customização via CSS Variables
- ♿ Acessibilidade completa
- 🔗 Integração nativa com React Hook Form
        `,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

const Template = (args: any) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <div style={{ maxWidth: "320px" }}>
        <Input {...args} />
      </div>
    </FormProvider>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    name: "email",
    type: "text",
    label: "E-mail",
    placeholder: "Digite seu e-mail",
  },
  parameters: {
    docs: {
      description: {
        story: "Input básico com label flutuante.",
      },
    },
  },
};

export const Password: Story = {
  render: Template,
  args: {
    name: "password",
    type: "password",
    label: "Senha",
    placeholder: "Digite sua senha",
  },
  parameters: {
    docs: {
      description: {
        story: "Input de senha com ícone automático para mostrar/esconder.",
      },
    },
  },
};

export const InputTypes: Story = {
  render: () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "320px" }}>
          <Input name="text" type="text" label="Texto" placeholder="Campo de texto" />
          <Input name="email" type="email" label="E-mail" placeholder="seu@email.com" />
          <Input name="password" type="password" label="Senha" placeholder="Digite sua senha" />
          <Input name="number" type="number" label="Número" placeholder="123" />
          <Input name="tel" type="tel" label="Telefone" placeholder="(11) 99999-9999" />
          <Input name="url" type="url" label="URL" placeholder="https://exemplo.com" />
        </div>
      </FormProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Diferentes tipos de input disponíveis. Note que o input de senha automaticamente adiciona o ícone de mostrar/esconder.",
      },
    },
  },
};

export const WithCustomIcon: Story = {
  render: () => {
    const methods = useForm();
    
    // Ícone de usuário
    const UserIcon = () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
      </svg>
    );

    return (
      <FormProvider {...methods}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "320px" }}>
          <Input 
            name="username" 
            type="text" 
            label="Usuário" 
            placeholder="Digite seu usuário" 
            Icon={UserIcon}
          />
          <Input 
            name="password" 
            type="password" 
            label="Senha com ícone customizado (ignorado)" 
            placeholder="Digite sua senha" 
          />
        </div>
      </FormProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Input com ícone customizado. Note que em inputs de password, o ícone customizado é ignorado em favor do ícone de mostrar/esconder senha.",
      },
    },
  },
};
