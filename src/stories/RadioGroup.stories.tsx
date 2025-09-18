import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { RadioGroup } from "../components/RadioGroup";

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

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
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
        component: "Um componente moderno de radio button com design criativo. Oferece botões estilizados com animações, ícones opcionais, diferentes tamanhos e direções de layout. Totalmente integrado com React Hook Form.",
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
      description: "Label flutuante do grupo de radio buttons",
      control: "text",
    },
    direction: {
      description: "Direção do layout dos botões",
      control: "select",
      options: ["row", "col"],
    },
    size: {
      description: "Tamanho dos botões",
      control: "select",
      options: ["sm", "md", "lg"],
    },
    options: {
      description: "Array de opções com label, value e ícone opcional",
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Ícones para demonstração
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 4.5L6.75 12.75L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1.5L11.472 6.531L17.25 7.371L13.125 11.394L14.058 17.25L9 14.625L3.942 17.25L4.875 11.394L0.75 7.371L6.528 6.531L9 1.5Z" fill="currentColor"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.75 3.75C15.75 2.5074 14.7426 1.5 13.5 1.5C12.2574 1.5 11.25 2.5074 11.25 3.75C11.25 3.75 11.25 3.75 9 6.75C6.75 3.75 6.75 3.75 6.75 3.75C6.75 2.5074 5.7426 1.5 4.5 1.5C3.2574 1.5 2.25 2.5074 2.25 3.75C2.25 6.4853 9 16.5 9 16.5S15.75 6.4853 15.75 3.75Z" fill="currentColor"/>
  </svg>
);

const ThumbsUpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.75 7.5V15H4.5C3.675 15 3 14.325 3 13.5V9C3 8.175 3.675 7.5 4.5 7.5H6.75ZM6.75 7.5L9 3L9.75 3.75V6H13.5C14.325 6 15 6.675 15 7.5L13.5 12.75C13.35 13.425 12.75 15 11.25 15H8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Opções básicas sem ícones
const basicOptions = [
  { label: "Opção 1", value: "option1" },
  { label: "Opção 2", value: "option2" },
  { label: "Opção 3", value: "option3" },
];

// Opções com ícones
const iconOptions = [
  { label: "Aprovado", value: "approved", icon: <CheckIcon /> },
  { label: "Favorito", value: "favorite", icon: <StarIcon /> },
  { label: "Curtido", value: "liked", icon: <HeartIcon /> },
  { label: "Recomendado", value: "recommended", icon: <ThumbsUpIcon /> },
];

// Opções de tamanho de camiseta
const sizeOptions = [
  { label: "P", value: "small" },
  { label: "M", value: "medium" },
  { label: "G", value: "large" },
  { label: "GG", value: "extra-large" },
];

// Opções de planos
const planOptions = [
  { label: "Básico", value: "basic" },
  { label: "Pro", value: "pro" },
  { label: "Enterprise", value: "enterprise" },
];

// Opções de prioridade
const priorityOptions = [
  { label: "🔴 Alta", value: "high" },
  { label: "🟡 Média", value: "medium" },
  { label: "🟢 Baixa", value: "low" },
];

// Opções de método de pagamento
const paymentOptions = [
  { label: "💳 Cartão de Crédito", value: "credit" },
  { label: "💰 PIX", value: "pix" },
  { label: "🏦 Boleto", value: "boleto" },
];

export const Default: Story = {
  args: {
    name: "basic",
    label: "Escolha uma opção",
    options: basicOptions,
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup básico com label flutuante e três opções simples.",
      },
    },
  },
};

export const WithIcons: Story = {
  args: {
    name: "status",
    label: "Status do Item",
    options: iconOptions,
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup com ícones personalizados para cada opção, tornando a interface mais visual e intuitiva.",
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    name: "size-small",
    label: "Tamanho da Camiseta",
    options: sizeOptions,
    size: "sm",
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup compacto (tamanho pequeno) ideal para layouts onde o espaço é limitado.",
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    name: "plan",
    label: "Plano de Assinatura",
    options: planOptions,
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup grande para destacar opções importantes como planos de assinatura.",
      },
    },
  },
};

export const VerticalLayout: Story = {
  args: {
    name: "priority",
    label: "Prioridade da Tarefa",
    options: priorityOptions,
    direction: "col",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Layout vertical ideal para formulários longos ou quando há muitas opções.",
      },
    },
  },
};

export const PaymentMethods: Story = {
  args: {
    name: "payment",
    label: "Método de Pagamento",
    options: paymentOptions,
    direction: "col",
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo prático de seleção de método de pagamento com emojis e layout vertical.",
      },
    },
  },
};

export const WithoutLabel: Story = {
  args: {
    name: "no-label",
    options: basicOptions,
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup sem label quando o contexto já deixa claro o que está sendo selecionado.",
      },
    },
  },
};

export const CustomStyling: Story = {
  args: {
    name: "custom",
    label: "Opções Customizadas",
    options: [
      { label: "Primeira Opção", value: "first" },
      { label: "Segunda Opção", value: "second" },
      { label: "Terceira Opção", value: "third" },
    ],
    optionClassName: "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 hover:border-purple-400 data-[checked]:border-purple-500 data-[checked]:bg-gradient-to-r data-[checked]:from-purple-100 data-[checked]:to-pink-100",
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo com estilização customizada usando gradientes e cores personalizadas.",
      },
    },
  },
};

export const ManyOptions: Story = {
  args: {
    name: "technology",
    label: "Tecnologia Favorita",
    options: [
      { label: "JavaScript", value: "js" },
      { label: "TypeScript", value: "ts" },
      { label: "React", value: "react" },
      { label: "Vue.js", value: "vue" },
      { label: "Angular", value: "angular" },
      { label: "Svelte", value: "svelte" },
    ],
    direction: "col",
    size: "sm",
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup com muitas opções em layout vertical e tamanho compacto.",
      },
    },
  },
};

// Story para demonstrar variações de tema
export const ThemeVariations: StoryObj = {
  render: () => {
    const themes = [
      { name: "Blue (Default)", primary: "#2563eb", hover: "#dbeafe" },
      { name: "Red", primary: "#dc2626", hover: "#fecaca" },
      { name: "Green", primary: "#059669", hover: "#d1fae5" },
      { name: "Purple", primary: "#7c3aed", hover: "#e9d5ff" },
    ];

    const options = [
      { label: "Opção A", value: "a" },
      { label: "Opção B", value: "b" },
      { label: "Opção C", value: "c" },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {themes.map((theme, index) => (
          <div key={theme.name} style={{ 
            padding: "1rem", 
            border: "1px solid #e5e7eb", 
            borderRadius: "8px",
            background: "#fafafa"
          }}>
            <h3 style={{ 
              margin: "0 0 1rem 0", 
              color: theme.primary,
              fontSize: "1.1rem",
              fontWeight: "600"
            }}>
              {theme.name} Theme
            </h3>
            <FormWrapper name={`radio${index + 1}`}>
              <div style={{ 
                "--primary": theme.primary,
                "--primary-hover": theme.hover,
                "--primary-text": "#fff",
              } as React.CSSProperties}>
                <RadioGroup
                  name={`radio${index + 1}`}
                  label={`${theme.name} RadioGroup`}
                  options={options}
                  direction="row"
                  size="md"
                />
              </div>
            </FormWrapper>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstra como o RadioGroup se adapta a diferentes temas usando variáveis CSS customizadas.",
      },
    },
  },
};
