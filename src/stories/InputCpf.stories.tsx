import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input';
import { useForm, FormProvider } from 'react-hook-form';
import { InputProps } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input/CPF',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

// Wrapper com FormProvider
const FormWrapper = (args: InputProps & { name: string }) => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      [args.name]: '',
    },
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="w-96 space-y-4">
        <Input {...args} />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Validar CPF
        </button>
        <div className="text-sm text-gray-600 mt-4">
          <p className="font-semibold mb-2">Teste com CPFs válidos:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>123.456.789-09</li>
            <li>111.444.777-35</li>
            <li>123.456.789-10</li>
          </ul>
        </div>
      </form>
    </FormProvider>
  );
};

// Wrapper standalone
const StandaloneWrapper = (args: InputProps & { name: string }) => {
  return (
    <div className="w-96 space-y-4">
      <Input {...args} />
      <p className="text-sm text-gray-600">
        Este exemplo mostra o Input com máscara de CPF mas sem validação automática (sem react-hook-form).
        A máscara ainda é aplicada, mas a validação completa só funciona com react-hook-form.
      </p>
    </div>
  );
};

export const Default: Story = {
  args: {
    name: 'cpf',
    label: 'CPF',
    cpf: true,
  },
  render: (args) => <FormWrapper {...args} />,
};

export const Standalone: Story = {
  args: {
    name: 'cpf',
    label: 'CPF (Standalone - sem validação)',
    cpf: true,
  },
  render: (args) => <StandaloneWrapper {...args} />,
};
