import React from "react";
import { Textarea } from "../components/Textarea";
import { useForm, FormProvider } from "react-hook-form";

export default {
  title: "Components/Textarea",
  component: Textarea,
};

export const Default = () => {
  const methods = useForm({ defaultValues: { textarea: "" } });
  return (
    <FormProvider {...methods}>
      <form style={{ maxWidth: 320 }}>
        <Textarea name="textarea" label="Mensagem" rows={4} />
      </form>
    </FormProvider>
  );
};

export const WithIcon = () => {
  const methods = useForm({ defaultValues: { textareaWithIcon: "" } });

  const MessageIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <FormProvider {...methods}>
      <form style={{ maxWidth: 320 }}>
        <Textarea
          name="textareaWithIcon"
          label="Comentário"
          rows={3}
          Icon={MessageIcon}
          iconAction={() => console.log("Ícone clicado")}
        />
      </form>
    </FormProvider>
  );
};
