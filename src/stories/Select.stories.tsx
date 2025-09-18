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
  },
};

const options = [
  { label: "Opção 1", value: "1" },
  { label: "Opção 2", value: "2" },
  { label: "Opção 3", value: "3" },
  { label: "Opção 4", value: "4" },
  { label: "Opção 5", value: "5" },
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
