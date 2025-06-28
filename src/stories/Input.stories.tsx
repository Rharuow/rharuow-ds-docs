import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input";
import { FormProvider, useForm } from "react-hook-form";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Input>;

const Template = (args: any) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Input {...args} name="email" />
    </FormProvider>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    label: "E-mail",
    placeholder: "Digite seu e-mail",
  },
};
