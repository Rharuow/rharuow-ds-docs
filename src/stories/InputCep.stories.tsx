import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input, type InputProps } from "../components/Input";
import { FormProvider, useForm } from "react-hook-form";

const meta: Meta<typeof Input> = {
  title: "Components/Input/CEP",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

const FormWrapper = (args: InputProps & { name: string }) => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      [args.name]: "",
    },
  });

  const [submitted, setSubmitted] = React.useState<Record<string, unknown> | null>(null);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => setSubmitted(data))}
        className="w-96 space-y-4"
      >
        <Input {...args} />

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Validar CEP
        </button>

        <div className="text-sm text-gray-600 mt-4">
          <p className="font-semibold mb-2">Teste com CEPs:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>01311-000</li>
            <li>30130-010</li>
            <li>20040-010</li>
          </ul>
          {submitted && (
            <p className="mt-3">Último submit: {JSON.stringify(submitted)}</p>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

const OnChangeWrapper = (args: InputProps & { name: string }) => {
  const [cep, setCep] = React.useState("");
  const [status, setStatus] = React.useState("Digite um CEP para simular a busca.");

  const handleCepChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const maskedCep = event.target.value;
    setCep(maskedCep);

    const normalizedCep = maskedCep.replace(/\D/g, "");
    if (normalizedCep.length === 8) {
      setStatus(`CEP completo (${maskedCep}). Aqui voce pode chamar um servico de endereco.`);
      return;
    }

    setStatus("Digite um CEP para simular a busca.");
  };

  return (
    <div className="w-96 space-y-4">
      <Input {...args} value={cep} onChange={handleCepChange} />
      <div className="rounded-md bg-slate-50 p-3 text-sm text-slate-700">
        <p><strong>Valor atual:</strong> {cep || "vazio"}</p>
        <p className="mt-1">{status}</p>
      </div>
    </div>
  );
};

export const Default: Story = {
  args: {
    name: "cep",
    label: "CEP",
    cep: true,
  },
  render: (args) => <FormWrapper {...args} />,
};

export const WithOnChangeForAddressLookup: Story = {
  args: {
    name: "cep",
    label: "CEP (com onChange externo)",
    cep: true,
  },
  render: (args) => <OnChangeWrapper {...args} />,
};