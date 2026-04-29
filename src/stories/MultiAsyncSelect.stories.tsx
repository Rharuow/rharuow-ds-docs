import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { MultiAsyncSelect } from "../components/MultiAsyncSelect";
import type { SelectOption } from "../components/types";

// Wrapper component to provide form context
const FormWrapper = ({ children, ...props }: { children: React.ReactNode; name: string }) => {
  const methods = useForm({
    defaultValues: {
      [props.name]: [],
    },
  });

  return (
    <FormProvider {...methods}>
      <div className="w-80 p-4">
        {children}
        <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
          <strong>Valores selecionados:</strong>
          <pre className="mt-1 text-xs">
            {JSON.stringify(methods.watch(), null, 2)}
          </pre>
        </div>
      </div>
    </FormProvider>
  );
};

const meta: Meta<typeof MultiAsyncSelect> = {
  title: "Components/MultiAsyncSelect",
  component: MultiAsyncSelect,
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
        component: "Um componente de múltipla seleção com carregamento assíncrono de opções. Combina as funcionalidades do MultiSelect com AsyncSelect, permitindo selecionar múltiplas opções carregadas dinamicamente via API.",
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
      description: "Mostra botão para limpar todas as seleções",
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
    maxSelectedDisplay: {
      description: "Máximo de itens selecionados exibidos antes de mostrar '+X mais'",
      control: { type: "number", min: 1, max: 10, step: 1 },
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
const mockCountries: SelectOption[] = [
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
  { label: "México", value: "mx" },
  { label: "China", value: "cn" },
  { label: "Índia", value: "in" },
  { label: "Austrália", value: "au" },
  { label: "Coreia do Sul", value: "kr" },
];

const mockSkills: SelectOption[] = [
  { label: "JavaScript", value: "javascript" },
  { label: "TypeScript", value: "typescript" },
  { label: "React", value: "react" },
  { label: "Vue.js", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Node.js", value: "nodejs" },
  { label: "Python", value: "python" },
  { label: "Java", value: "java" },
  { label: "C#", value: "csharp" },
  { label: "PHP", value: "php" },
  { label: "Go", value: "go" },
  { label: "Rust", value: "rust" },
  { label: "Swift", value: "swift" },
  { label: "Kotlin", value: "kotlin" },
  { label: "Docker", value: "docker" },
  { label: "AWS", value: "aws" },
  { label: "Azure", value: "azure" },
  { label: "MongoDB", value: "mongodb" },
  { label: "PostgreSQL", value: "postgresql" },
  { label: "Redis", value: "redis" },
];

// Simulate API calls
const loadCountries = async (inputValue?: string): Promise<SelectOption[]> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  
  if (!inputValue) {
    return mockCountries;
  }
  
  return mockCountries.filter(country =>
    country.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadSkills = async (inputValue?: string): Promise<SelectOption[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  if (!inputValue) {
    return mockSkills;
  }
  
  return mockSkills.filter(skill =>
    skill.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

export const Default: Story = {
  args: {
    name: "countries",
    label: "Países",
    loadOptions: loadCountries,
    defaultOptions: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Versão básica do MultiAsyncSelect com carregamento automático das opções.",
      },
    },
  },
};

export const Searchable: Story = {
  args: {
    name: "countries-search",
    label: "Países",
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

export const WithClearButton: Story = {
  args: {
    name: "countries-clearable",
    label: "Países",
    loadOptions: loadCountries,
    isClearable: true,
    defaultOptions: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Adiciona um botão 'X' para limpar todas as seleções de uma vez.",
      },
    },
  },
};

export const Complete: Story = {
  args: {
    name: "skills-complete",
    label: "Habilidades Técnicas",
    loadOptions: loadSkills,
    searchable: true,
    isClearable: true,
    defaultOptions: true,
    maxSelectedDisplay: 2,
  },
  parameters: {
    docs: {
      description: {
        story: "Versão completa com busca, botão limpar e limite de exibição de itens selecionados.",
      },
    },
  },
};

export const WithCustomMessages: Story = {
  args: {
    name: "skills-custom",
    label: "Tecnologias",
    loadOptions: loadSkills,
    searchable: true,
    loadingMessage: "🔍 Buscando tecnologias...",
    noOptionsMessage: "😔 Nenhuma tecnologia encontrada",
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

export const FastSearch: Story = {
  args: {
    name: "countries-fast",
    label: "Países (busca rápida)",
    loadOptions: loadCountries,
    searchable: true,
    debounceMs: 100,
    defaultOptions: true,
    isClearable: true,
    maxSelectedDisplay: 3,
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
    name: "skills-slow",
    label: "Habilidades (carregamento lento)",
    loadOptions: async (inputValue?: string): Promise<SelectOption[]> => {
      // Simulate very slow network
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (!inputValue) return mockSkills;
      return mockSkills.filter(skill =>
        skill.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    },
    searchable: true,
    defaultOptions: true,
    loadingMessage: "⏳ Carregando habilidades...",
    isClearable: true,
    maxSelectedDisplay: 2,
  },
  parameters: {
    docs: {
      description: {
        story: "Simula uma API lenta (2s) para demonstrar o estado de loading.",
      },
    },
  },
};

export const LimitedDisplay: Story = {
  args: {
    name: "countries-limited",
    label: "Países (máx 1 visível)",
    loadOptions: loadCountries,
    searchable: true,
    defaultOptions: true,
    isClearable: true,
    maxSelectedDisplay: 1,
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstra a funcionalidade de limitar quantos itens selecionados são exibidos.",
      },
    },
  },
};

export const WithoutLabel: Story = {
  args: {
    name: "skills-no-label",
    loadOptions: loadSkills,
    searchable: true,
    defaultOptions: true,
    isClearable: true,
    maxSelectedDisplay: 3,
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
    name: "countries-empty",
    label: "Escolha um ou mais países",
    loadOptions: loadCountries,
    defaultOptions: true,
    isClearable: true,
    maxSelectedDisplay: 2,
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstra a solução para o caso de valor vazio com label: o label flutua quando o dropdown abre, evitando sobreposição com as opções.",
      },
    },
  },
};
