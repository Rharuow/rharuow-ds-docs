import React from "react";
import { Select } from "../components/Select";
import { useForm, FormProvider } from "react-hook-form";
import { StoryFn } from "@storybook/react";
import { SelectProps } from "../components/Select";
import { UseFormReturn } from "react-hook-form";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    isClearable: {
      control: "boolean",
      description: "Exibe botão para limpar a seleção",
      defaultValue: false,
    },
    searchable: {
      control: "boolean",
      description: "Permite filtrar opções digitando",
      defaultValue: false,
    },
    caseSensitive: {
      control: "boolean",
      description: "Filtro case-sensitive",
      defaultValue: false,
    },
    filterPlaceholder: {
      control: "text",
      description: "Placeholder do input de filtro",
      defaultValue: "Digite para filtrar...",
    },
  },
};

const options = [
  { label: "Todas as frutas", value: "" },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
  { label: "Elderberry", value: "elderberry" },
  { label: "Fig", value: "fig" },
  { label: "Grape", value: "grape" },
  { label: "Honeydew", value: "honeydew" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Lemon", value: "lemon" },
  { label: "Mango", value: "mango" },
  { label: "Orange", value: "orange" },
  { label: "Papaya", value: "papaya" },
  { label: "Quince", value: "quince" },
  { label: "Raspberry", value: "raspberry" },
];

interface FormValues {
  select: string;
}

interface DefaultStoryProps extends SelectProps {}

export const Default: StoryFn<DefaultStoryProps> = (args) => {
  const methods: UseFormReturn<FormValues> = useForm<FormValues>({
    defaultValues: { select: "" },
  });
  return (
    <FormProvider {...methods}>
      <form style={{ maxWidth: 320 }}>
        <Select
          label={args.label || "Selecione uma opção"}
          isClearable={args.isClearable ?? false}
          {...args}
          name={args.name || "select"}
          options={args.options || options}
        />
      </form>
    </FormProvider>
  );
};

Default.args = {
  name: "select",
  options,
  label: "Selecione uma opção",
  isClearable: false,
};

export const WithFilter: StoryFn<DefaultStoryProps> = (args) => {
  const methods: UseFormReturn<FormValues> = useForm<FormValues>({
    defaultValues: { select: "" },
  });
  return (
    <FormProvider {...methods}>
      <form style={{ maxWidth: 320 }}>
        <Select
          label={args.label || "Selecione uma fruta"}
          searchable={args.searchable ?? true}
          isClearable={args.isClearable ?? true}
          filterPlaceholder={args.filterPlaceholder || "Digite para filtrar frutas..."}
          caseSensitive={args.caseSensitive ?? false}
          {...args}
          name={args.name || "select"}
          options={args.options || options}
        />
      </form>
    </FormProvider>
  );
};

WithFilter.args = {
  name: "select",
  options,
  label: "Selecione uma fruta",
  searchable: true,
  isClearable: true,
  filterPlaceholder: "Digite para filtrar frutas...",
  caseSensitive: false,
};

WithFilter.storyName = "Com Filtro";

export const CaseSensitiveFilter: StoryFn<DefaultStoryProps> = (args) => {
  const methods: UseFormReturn<FormValues> = useForm<FormValues>({
    defaultValues: { select: "" },
  });
  return (
    <FormProvider {...methods}>
      <form style={{ maxWidth: 320 }}>
        <Select
          label={args.label || "Filtro Case-Sensitive"}
          searchable={args.searchable ?? true}
          isClearable={args.isClearable ?? true}
          filterPlaceholder={args.filterPlaceholder || "Digite 'Apple' ou 'apple'"}
          caseSensitive={args.caseSensitive ?? true}
          {...args}
          name={args.name || "select"}
          options={args.options || options}
        />
      </form>
    </FormProvider>
  );
};

CaseSensitiveFilter.args = {
  name: "select",
  options,
  label: "Filtro Case-Sensitive",
  searchable: true,
  isClearable: true,
  filterPlaceholder: "Digite 'Apple' ou 'apple'",
  caseSensitive: true,
};

CaseSensitiveFilter.storyName = "Filtro Case-Sensitive";

export const EmptyValueWithLabel: StoryFn<DefaultStoryProps> = (args) => {
  const methods: UseFormReturn<FormValues> = useForm<FormValues>({
    defaultValues: { select: "" },
  });
  return (
    <FormProvider {...methods}>
      <form style={{ maxWidth: 320 }}>
        <Select
          label={args.label || "Escolha uma opção"}
          isClearable={args.isClearable ?? true}
          {...args}
          name={args.name || "select"}
          options={args.options || options}
        />
        <div style={{ marginTop: "24px", padding: "12px", backgroundColor: "#f3f4f6", borderRadius: "6px", fontSize: "12px" }}>
          <p><strong>✅ Solução implementada:</strong></p>
          <p>Ao abrir o dropdown, o label flutua para cima mesmo com valor vazio, evitando sobreposição.</p>
        </div>
      </form>
    </FormProvider>
  );
};

EmptyValueWithLabel.args = {
  name: "select",
  options,
  label: "Escolha uma opção",
  isClearable: true,
};

EmptyValueWithLabel.storyName = "Valor Vazio com Label";
