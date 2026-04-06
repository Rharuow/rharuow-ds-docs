import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { Input, type InputProps } from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input/Currency",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

type CurrencyStoryProps = InputProps & {
  submitLabel: string;
};

const CurrencyForm = ({ submitLabel, ...args }: CurrencyStoryProps) => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      [args.name]: args.currencyValueType === "number" ? 1234.56 : "R$ 1.234,56",
    },
  });
  const [submittedValue, setSubmittedValue] = React.useState<Record<string, unknown> | null>(null);
  const liveValue = useWatch({ control: methods.control, name: args.name });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => setSubmittedValue(data))}
        className="w-96 space-y-4"
      >
        <Input {...args} />

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {submitLabel}
        </button>

        <div className="rounded-md bg-slate-50 p-3 text-sm text-slate-700 space-y-2">
          <p>
            <strong>Valor no form state:</strong> {String(liveValue ?? "vazio")}
          </p>
          <p>
            <strong>Tipo atual:</strong> {liveValue === undefined ? "undefined" : typeof liveValue}
          </p>
          <p>
            <strong>Último submit:</strong> {submittedValue ? JSON.stringify(submittedValue, null, 2) : "nenhum"}
          </p>
        </div>
      </form>
    </FormProvider>
  );
};

export const StringValue: Story = {
  args: {
    name: "amount",
    label: "Valor",
    currency: true,
    currencyValueType: "string",
  },
  render: (args) => <CurrencyForm {...args} submitLabel="Enviar string formatada" />,
};

export const NumberValue: Story = {
  args: {
    name: "amount",
    label: "Valor",
    currency: true,
    currencyValueType: "number",
  },
  render: (args) => <CurrencyForm {...args} submitLabel="Enviar número" />,
};

export const UsdExample: Story = {
  args: {
    name: "amount",
    label: "Amount",
    currency: true,
    currencyCode: "USD",
    currencyLocale: "en-US",
    currencyValueType: "number",
  },
  render: (args) => <CurrencyForm {...args} submitLabel="Submit USD number" />,
};