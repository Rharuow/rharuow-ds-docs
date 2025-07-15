import React from "react";
import { Select } from "../components/Select";
import { useForm, FormProvider } from "react-hook-form";

export default {
  title: "Components/Select",
  component: Select,
};

const options = [
  { label: "Opção 1", value: "1" },
  { label: "Opção 2", value: "2" },
  { label: "Opção 3", value: "3" },
  { label: "Opção 4", value: "4" },
  { label: "Opção 5", value: "5" },
];

export const Default = () => {
  const methods = useForm({ defaultValues: { select: "" } });
  return (
    <FormProvider {...methods}>
      <form style={{ maxWidth: 320 }}>
        <Select name="select" label="Selecione uma opção" options={options} />
      </form>
    </FormProvider>
  );
};
