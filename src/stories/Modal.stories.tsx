import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { FormProvider, useForm } from "react-hook-form";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Abrir Modal Básico</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <h2 className="text-xl font-bold mb-2">Título do Modal</h2>
          <p className="text-gray-600">
            Este é um modal básico com conteúdo simples.
          </p>
        </Modal>
      </div>
    );
  },
};

export const WithStructure: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Abrir Modal Estruturado</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Modal.Header>
            <h2 className="text-2xl font-bold">Confirmar Ação</h2>
            <p className="text-sm text-gray-500 mt-1">
              Esta ação não poderá ser desfeita
            </p>
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              Você tem certeza que deseja continuar com esta operação? Todos os
              dados serão processados e salvos permanentemente.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={() => setOpen(false)}>Confirmar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
};

export const SmallSize: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Modal Pequeno</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="sm">
          <Modal.Header>
            <h2 className="text-xl font-bold">Modal Pequeno</h2>
          </Modal.Header>
          <Modal.Body>
            <p className="text-sm text-gray-600">
              Este é um modal com tamanho pequeno (sm).
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpen(false)}>OK</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
};

export const LargeSize: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Modal Grande</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="lg">
          <Modal.Header>
            <h2 className="text-2xl font-bold">Modal Grande</h2>
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700 mb-4">
              Este é um modal com tamanho grande (lg). Ideal para conteúdos mais
              extensos ou formulários complexos.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const methods = useForm();

    const onSubmit = (data: any) => {
      console.log("Form data:", data);
      setOpen(false);
      methods.reset();
    };

    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Abrir Formulário</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="md">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Modal.Header>
                <h2 className="text-2xl font-bold">Novo Cadastro</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Preencha os dados abaixo
                </p>
              </Modal.Header>
              <Modal.Body>
                <div className="space-y-4">
                  <Input label="Nome completo" name="name" required />
                  <Input label="E-mail" name="email" type="email" required />
                  <Input label="Telefone" name="phone" />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit">Salvar</Button>
              </Modal.Footer>
            </form>
          </FormProvider>
        </Modal>
      </div>
    );
  },
};

export const NoCloseButton: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Modal sem X</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          showCloseButton={false}
        >
          <Modal.Header>
            <h2 className="text-xl font-bold">Atenção</h2>
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              Este modal não possui o botão X de fechar. Use os botões abaixo.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpen(false)}>Entendi</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
};

export const NoOverlayClose: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Modal Bloqueado</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          closeOnOverlayClick={false}
          closeOnEscape={false}
        >
          <Modal.Header>
            <h2 className="text-xl font-bold text-orange-600">⚠️ Importante</h2>
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              Este modal não fecha ao clicar fora nem ao pressionar ESC. Você
              deve usar o botão abaixo.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpen(false)}>Fechar Modal</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Modal Largura Total</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="full">
          <Modal.Header>
            <h2 className="text-2xl font-bold">Modal em Largura Total</h2>
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700 mb-4">
              Este modal ocupa quase toda a largura da tela (com margem de segurança).
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gray-100 rounded">Coluna 1</div>
              <div className="p-4 bg-gray-100 rounded">Coluna 2</div>
              <div className="p-4 bg-gray-100 rounded">Coluna 3</div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpen(false)}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
};
