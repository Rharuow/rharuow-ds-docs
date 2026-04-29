import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { AsyncSelect } from "../components/AsyncSelect";
import type { SelectOption } from "../components/types";

// Wrapper component to provide form context
const FormWrapper = ({ children, ...props }: { children: React.ReactNode; name: string }) => {
  const methods = useForm({
    defaultValues: {
      [props.name]: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <div className="w-80 p-4">
        {children}
        <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
          <strong>Valor selecionado:</strong>
          <pre className="mt-1 text-xs">
            {JSON.stringify(methods.watch(), null, 2)}
          </pre>
        </div>
      </div>
    </FormProvider>
  );
};

const meta: Meta<typeof AsyncSelect> = {
  title: "Components/AsyncSelect",
  component: AsyncSelect,
  decorators: [
    (Story, { args }) => (
      <FormWrapper {...args}>
        <Story />
      </FormWrapper>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Um componente de seleção com carregamento assíncrono de opções. Suporta busca em tempo real, debounce configurável e integração completa com React Hook Form.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "Nome do campo para integração com formulários",
      control: "text",
    },
    label: {
      description: "Label flutuante do campo",
      control: "text",
    },
    searchable: {
      description: "Permite busca digitando no campo",
      control: "boolean",
    },
    isClearable: {
      description: "Mostra botão para limpar seleção",
      control: "boolean",
    },
    debounceMs: {
      description: "Delay em ms para busca (evita muitas chamadas à API)",
      control: { type: "number", min: 0, max: 2000, step: 100 },
    },
    defaultOptions: {
      description: "Carrega opções ao montar o componente",
      control: "boolean",
    },
    loadingMessage: {
      description: "Mensagem exibida durante carregamento",
      control: "text",
    },
    noOptionsMessage: {
      description: "Mensagem quando não há opções",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock data
const mockOptions: SelectOption[] = [
  { label: "Todos os países", value: "" },
  { label: "Brasil", value: "br" },
  { label: "Estados Unidos", value: "us" },
  { label: "Argentina", value: "ar" },
  { label: "França", value: "fr" },
  { label: "Alemanha", value: "de" },
  { label: "Japão", value: "jp" },
  { label: "Canadá", value: "ca" },
  { label: "Reino Unido", value: "uk" },
  { label: "Itália", value: "it" },
  { label: "Espanha", value: "es" },
];

// Simulate API call
const loadCountries = async (inputValue?: string): Promise<SelectOption[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  if (!inputValue) {
    return mockOptions;
  }
  
  return mockOptions.filter(option =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadUsers = async (inputValue?: string): Promise<SelectOption[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const users = [
    { label: "João Silva", value: "joao.silva" },
    { label: "Maria Santos", value: "maria.santos" },
    { label: "Pedro Oliveira", value: "pedro.oliveira" },
    { label: "Ana Costa", value: "ana.costa" },
    { label: "Carlos Ferreira", value: "carlos.ferreira" },
  ];
  
  if (!inputValue) {
    return users;
  }
  
  return users.filter(user =>
    user.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

export const Default: Story = {
  args: {
    name: "country",
    label: "País",
    loadOptions: loadCountries,
  },
  parameters: {
    docs: {
      description: {
        story: "Versão básica do AsyncSelect. As opções são carregadas apenas quando o dropdown é aberto.",
      },
    },
  },
};

export const WithDefaultOptions: Story = {
  args: {
    name: "country-default",
    label: "País",
    loadOptions: loadCountries,
    defaultOptions: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Carrega as opções automaticamente quando o componente é montado.",
      },
    },
  },
};

export const Searchable: Story = {
  args: {
    name: "country-search",
    label: "País",
    loadOptions: loadCountries,
    searchable: true,
    defaultOptions: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Permite busca digitando no campo. As opções são filtradas conforme o usuário digita.",
      },
    },
  },
};

export const Clearable: Story = {
  args: {
    name: "country-clearable",
    label: "País",
    loadOptions: loadCountries,
    isClearable: true,
    defaultOptions: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Adiciona um botão 'X' para limpar a seleção quando há valor selecionado.",
      },
    },
  },
};

export const Complete: Story = {
  args: {
    name: "country-complete",
    label: "País",
    loadOptions: loadCountries,
    searchable: true,
    isClearable: true,
    defaultOptions: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Versão completa com busca e botão de limpar ativados.",
      },
    },
  },
};

export const CustomMessages: Story = {
  args: {
    name: "users",
    label: "Usuário",
    loadOptions: loadUsers,
    searchable: true,
    loadingMessage: "🔍 Buscando usuários...",
    noOptionsMessage: "😔 Nenhum usuário encontrado",
    defaultOptions: true,
    isClearable: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo com mensagens personalizadas e emoji para melhor UX.",
      },
    },
  },
};

export const FastDebounce: Story = {
  args: {
    name: "country-fast",
    label: "País (busca rápida)",
    loadOptions: loadCountries,
    searchable: true,
    debounceMs: 100,
    defaultOptions: true,
    isClearable: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Debounce reduzido para 100ms - busca mais responsiva mas mais chamadas à API.",
      },
    },
  },
};

export const SlowLoading: Story = {
  args: {
    name: "country-slow",
    label: "País (carregamento lento)",
    loadOptions: async (inputValue?: string): Promise<SelectOption[]> => {
      // Simulate very slow network
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (!inputValue) return mockOptions;
      return mockOptions.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    },
    searchable: true,
    defaultOptions: true,
    loadingMessage: "⏳ Aguarde, carregando dados...",
    isClearable: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Simula uma API lenta (2s) para demonstrar o estado de loading.",
      },
    },
  },
};

export const WithoutLabel: Story = {
  args: {
    name: "country-no-label",
    loadOptions: loadCountries,
    searchable: true,
    defaultOptions: true,
    isClearable: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo sem label - útil quando o contexto já deixa claro o que é o campo.",
      },
    },
  },
};

export const EmptyValueWithLabel: Story = {
  args: {
    name: "country-empty",
    label: "Escolha um país",
    loadOptions: loadCountries,
    defaultOptions: true,
    isClearable: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstra a solução para o caso de valor vazio com label: o label flutua quando o dropdown abre, evitando sobreposição com as opções.",
      },
    },
  },
};
