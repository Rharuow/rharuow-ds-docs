import { MultiSelect } from "../components/MultiSelect";
import { useForm, FormProvider } from "react-hook-form";
import { StoryFn } from "@storybook/react";
import { MultiSelectProps } from "../components/MultiSelect";
import { UseFormReturn } from "react-hook-form";
import { useEffect } from "react";

export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
  argTypes: {
    isClearable: {
      control: "boolean",
      description: "Exibe botão para limpar a seleção",
      defaultValue: false,
    },
    label: {
      control: "text",
      defaultValue: "Selecione uma ou mais opções",
    },
    options: {
      control: "object",
      defaultValue: [
        { label: "Opção 1", value: "1" },
        { label: "Opção 2", value: "2" },
        { label: "Opção 3", value: "3" },
        { label: "Opção 4", value: "4" },
        { label: "Opção 5", value: "5" },
      ],
    },
    name: {
      control: "text",
      defaultValue: "multiSelect",
    },
    // Controles para variáveis CSS
    primaryColor: {
      control: "color",
      description: "Cor primária do tema",
      defaultValue: "#2563eb",
    },
    primaryHover: {
      control: "color", 
      description: "Cor de hover/background primária",
      defaultValue: "#dbeafe",
    },
  },
};

interface FormValues {
  multiSelect: string[];
  multiSelect1?: string[];
  multiSelect2?: string[];
  multiSelect3?: string[];
  multiSelect4?: string[];
}

interface DefaultStoryProps extends MultiSelectProps {
  primaryColor?: string;
  primaryHover?: string;
}

export const Default: StoryFn<DefaultStoryProps> = (args) => {
  const { primaryColor, primaryHover, ...multiSelectArgs } = args;
  
  const methods: UseFormReturn<FormValues> = useForm<FormValues>({
    defaultValues: { multiSelect: [] },
  });

  // Apply CSS variables when they change
  useEffect(() => {
    if (primaryColor) {
      document.documentElement.style.setProperty('--primary', primaryColor);
    }
    if (primaryHover) {
      document.documentElement.style.setProperty('--primary-hover', primaryHover);
    }
  }, [primaryColor, primaryHover]);

  return (
    <FormProvider {...methods}>
      <form style={{ maxWidth: 320 }}>
        <MultiSelect {...multiSelectArgs} />
      </form>
    </FormProvider>
  );
};

Default.args = {
  name: "multiSelect",
  label: "Selecione uma ou mais opções",
  options: [
    { label: "Opção 1", value: "1" },
    { label: "Opção 2", value: "2" },
    { label: "Opção 3", value: "3" },
    { label: "Opção 4", value: "4" },
    { label: "Opção 5", value: "5" },
  ],
  isClearable: false,
  primaryColor: "#2563eb",
  primaryHover: "#dbeafe",
};

// Story para demonstrar variações de tema
export const ThemeVariations: StoryFn = () => {
  const methods = useForm<FormValues>({
    defaultValues: { multiSelect1: [], multiSelect2: [], multiSelect3: [] },
  });

  const themes = [
    { 
      name: "Blue (Default)", 
      primary: "#2563eb", 
      hover: "#dbeafe" 
    },
    { 
      name: "Red", 
      primary: "#dc2626", 
      hover: "#fecaca" 
    },
    { 
      name: "Green", 
      primary: "#059669", 
      hover: "#d1fae5" 
    },
    { 
      name: "Purple", 
      primary: "#7c3aed", 
      hover: "#e9d5ff" 
    },
  ];

  return (
    <FormProvider {...methods}>
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
            <div style={{ 
              maxWidth: "320px",
              "--primary": theme.primary,
              "--primary-hover": theme.hover,
              "--primary-text": "#fff",
            } as React.CSSProperties}>
              <MultiSelect
                name={`multiSelect${index + 1}`}
                label={`${theme.name} MultiSelect`}
                options={[
                  { label: "Opção 1", value: "1" },
                  { label: "Opção 2", value: "2" },
                  { label: "Opção 3", value: "3" },
                ]}
                isClearable
              />
            </div>
          </div>
        ))}
      </div>
    </FormProvider>
  );
};
