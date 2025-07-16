import { MultiSelect } from "../components/MultiSelect";
import { useForm, FormProvider } from "react-hook-form";
import { StoryFn } from "@storybook/react";
import { MultiSelectProps } from "../components/MultiSelect";
import { UseFormReturn } from "react-hook-form";

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
  },
};

interface FormValues {
  multiSelect: string[];
}

interface DefaultStoryProps extends MultiSelectProps {}

export const Default: StoryFn<DefaultStoryProps> = (args) => {
  const methods: UseFormReturn<FormValues> = useForm<FormValues>({
    defaultValues: { multiSelect: [] },
  });
  return (
    <FormProvider {...methods}>
      <form style={{ maxWidth: 320 }}>
        <MultiSelect {...args} />
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
};
