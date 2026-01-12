import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../components/Accordion";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Componente Accordion (acordeão) flexível e acessível que permite expandir e colapsar seções de conteúdo. Suporta modo single (apenas um item aberto) ou multiple (vários itens abertos). Totalmente personalizável via CSS Variables e com animações suaves.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "Modo de operação do accordion",
      control: "select",
      options: ["single", "multiple"],
      table: {
        defaultValue: { summary: "single" },
      },
    },
    variant: {
      description: "Estilo visual do accordion",
      control: "select",
      options: ["default", "bordered", "separated"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    collapsible: {
      description:
        "Se true, permite fechar todos os itens no modo single (senão, sempre mantém um aberto)",
      control: "boolean",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    className: {
      description: "Classes CSS adicionais",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// História básica
export const Default: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item title="O que é React?">
        <p>
          React é uma biblioteca JavaScript para construir interfaces de usuário. Foi desenvolvida pelo Facebook e é mantida por uma comunidade de desenvolvedores individuais e empresas.
        </p>
      </Accordion.Item>
      <Accordion.Item title="O que é TypeScript?">
        <p>
          TypeScript é um superset de JavaScript que adiciona tipagem estática opcional. Ele é desenvolvido e mantido pela Microsoft.
        </p>
      </Accordion.Item>
      <Accordion.Item title="O que é um Design System?">
        <p>
          Um Design System é uma coleção de componentes reutilizáveis, guiados por padrões claros, que podem ser montados juntos para construir qualquer número de aplicações.
        </p>
      </Accordion.Item>
    </Accordion>
  ),
};

// Accordion com um item aberto por padrão
export const WithDefaultOpen: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item title="Seção 1" defaultOpen>
        <p>Esta seção está aberta por padrão.</p>
      </Accordion.Item>
      <Accordion.Item title="Seção 2">
        <p>Esta seção está fechada por padrão.</p>
      </Accordion.Item>
      <Accordion.Item title="Seção 3">
        <p>Esta seção também está fechada por padrão.</p>
      </Accordion.Item>
    </Accordion>
  ),
};

// Accordion com múltiplos itens abertos
export const MultipleMode: Story = {
  render: () => (
    <Accordion type="multiple">
      <Accordion.Item title="Frontend Technologies" defaultOpen>
        <div className="space-y-2">
          <p>
            <strong>React:</strong> Biblioteca para interfaces de usuário
          </p>
          <p>
            <strong>Vue:</strong> Framework progressivo para JavaScript
          </p>
          <p>
            <strong>Angular:</strong> Plataforma para aplicações web
          </p>
        </div>
      </Accordion.Item>
      <Accordion.Item title="Backend Technologies" defaultOpen>
        <div className="space-y-2">
          <p>
            <strong>Node.js:</strong> Ambiente de execução JavaScript
          </p>
          <p>
            <strong>Python:</strong> Linguagem versátil e poderosa
          </p>
          <p>
            <strong>Go:</strong> Linguagem eficiente e concorrente
          </p>
        </div>
      </Accordion.Item>
      <Accordion.Item title="Database Technologies">
        <div className="space-y-2">
          <p>
            <strong>PostgreSQL:</strong> Banco de dados relacional avançado
          </p>
          <p>
            <strong>MongoDB:</strong> Banco de dados NoSQL orientado a documentos
          </p>
          <p>
            <strong>Redis:</strong> Armazenamento de estrutura de dados em memória
          </p>
        </div>
      </Accordion.Item>
    </Accordion>
  ),
};

// Accordion com variant bordered
export const BorderedVariant: Story = {
  render: () => (
    <Accordion variant="bordered">
      <Accordion.Item title="Recursos do Produto">
        <ul className="list-disc list-inside space-y-1">
          <li>Interface intuitiva e fácil de usar</li>
          <li>Integração com múltiplas plataformas</li>
          <li>Suporte 24/7</li>
          <li>Atualizações automáticas</li>
        </ul>
      </Accordion.Item>
      <Accordion.Item title="Preços">
        <div className="space-y-2">
          <p>
            <strong>Básico:</strong> R$ 29/mês
          </p>
          <p>
            <strong>Pro:</strong> R$ 79/mês
          </p>
          <p>
            <strong>Enterprise:</strong> Preço personalizado
          </p>
        </div>
      </Accordion.Item>
      <Accordion.Item title="FAQ">
        <p>
          Confira nossa seção de perguntas frequentes para obter respostas às dúvidas mais comuns.
        </p>
      </Accordion.Item>
    </Accordion>
  ),
};

// Accordion com variant separated
export const SeparatedVariant: Story = {
  render: () => (
    <Accordion variant="separated" type="multiple">
      <Accordion.Item title="📊 Analytics">
        <p>Visualize métricas e insights em tempo real sobre o desempenho da sua aplicação.</p>
      </Accordion.Item>
      <Accordion.Item title="🔒 Segurança">
        <p>Recursos avançados de segurança incluindo criptografia end-to-end e autenticação de dois fatores.</p>
      </Accordion.Item>
      <Accordion.Item title="⚡ Performance">
        <p>Otimizado para velocidade com carregamento instantâneo e resposta rápida.</p>
      </Accordion.Item>
      <Accordion.Item title="🌐 Integrações">
        <p>Conecte-se facilmente com centenas de ferramentas e serviços populares.</p>
      </Accordion.Item>
    </Accordion>
  ),
};

// Accordion com conteúdo rico
export const RichContent: Story = {
  render: () => (
    <Accordion variant="bordered">
      <Accordion.Item title="Instalação">
        <div className="space-y-3">
          <p>Para instalar o componente, execute o seguinte comando:</p>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            npm install @rharuow/design-system
          </pre>
          <p>Ou com yarn:</p>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            yarn add @rharuow/design-system
          </pre>
        </div>
      </Accordion.Item>
      <Accordion.Item title="Uso Básico">
        <div className="space-y-3">
          <p>Importe e use o componente:</p>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            {`import { Accordion } from '@rharuow/design-system';

<Accordion>
  <Accordion.Item title="Item 1">
    Conteúdo 1
  </Accordion.Item>
</Accordion>`}
          </pre>
        </div>
      </Accordion.Item>
      <Accordion.Item title="Exemplos Avançados">
        <div className="space-y-3">
          <p>Veja alguns exemplos de uso avançado:</p>
          <Button variant="default">Ver Documentação</Button>
        </div>
      </Accordion.Item>
    </Accordion>
  ),
};

// Accordion com itens desabilitados
export const WithDisabledItems: Story = {
  render: () => (
    <Accordion variant="bordered">
      <Accordion.Item title="Item Ativo 1">
        <p>Este item pode ser expandido normalmente.</p>
      </Accordion.Item>
      <Accordion.Item title="Item Desabilitado" disabled>
        <p>Este conteúdo não pode ser visualizado pois o item está desabilitado.</p>
      </Accordion.Item>
      <Accordion.Item title="Item Ativo 2">
        <p>Este item também pode ser expandido normalmente.</p>
      </Accordion.Item>
    </Accordion>
  ),
};

// Accordion não collapsible (sempre mantém um aberto)
export const NonCollapsible: Story = {
  render: () => (
    <Accordion collapsible={false}>
      <Accordion.Item title="Passo 1: Configuração Inicial" defaultOpen>
        <p>Configure seu ambiente de desenvolvimento instalando as dependências necessárias.</p>
      </Accordion.Item>
      <Accordion.Item title="Passo 2: Desenvolvimento">
        <p>Desenvolva sua aplicação seguindo as melhores práticas e padrões estabelecidos.</p>
      </Accordion.Item>
      <Accordion.Item title="Passo 3: Deploy">
        <p>Faça o deploy da sua aplicação em produção com confiança.</p>
      </Accordion.Item>
    </Accordion>
  ),
};

// Accordion com ícones customizados
export const WithCustomIcons: Story = {
  render: () => (
    <Accordion variant="separated" type="multiple">
      <Accordion.Item
        title="Documentação"
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        }
      >
        <p>Acesse a documentação completa para aprender como usar todos os recursos.</p>
      </Accordion.Item>
      <Accordion.Item
        title="Suporte"
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        }
      >
        <p>Entre em contato com nossa equipe de suporte para obter ajuda.</p>
      </Accordion.Item>
      <Accordion.Item
        title="Configurações"
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }
      >
        <p>Personalize as configurações do sistema de acordo com suas preferências.</p>
      </Accordion.Item>
    </Accordion>
  ),
};

// Accordion com classes customizadas
export const WithCustomClasses: Story = {
  render: () => (
    <Accordion variant="bordered" className="max-w-2xl mx-auto">
      <Accordion.Item
        title="Título Customizado"
        headerClassName="bg-blue-50 hover:bg-blue-100"
        contentClassName="bg-blue-50/50"
      >
        <p>Este item tem classes customizadas no header e no conteúdo.</p>
      </Accordion.Item>
      <Accordion.Item
        title="Outro Item Customizado"
        headerClassName="bg-green-50 hover:bg-green-100"
        contentClassName="bg-green-50/50"
      >
        <p>Você pode aplicar diferentes estilos para cada item.</p>
      </Accordion.Item>
    </Accordion>
  ),
};

// Playground interativo
export const Playground: Story = {
  args: {
    type: "single",
    variant: "default",
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item title="Item 1" defaultOpen>
        <p>Conteúdo do primeiro item do accordion.</p>
      </Accordion.Item>
      <Accordion.Item title="Item 2">
        <p>Conteúdo do segundo item do accordion.</p>
      </Accordion.Item>
      <Accordion.Item title="Item 3">
        <p>Conteúdo do terceiro item do accordion.</p>
      </Accordion.Item>
    </Accordion>
  ),
};

// Caso de uso: FAQ
export const FAQExample: Story = {
  render: () => (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Perguntas Frequentes</h2>
      <Accordion variant="separated">
        <Accordion.Item title="Como faço para criar uma conta?">
          <p>
            Para criar uma conta, clique no botão "Cadastrar" no canto superior direito da página. Preencha o formulário com suas informações e siga as instruções enviadas por email para verificar sua conta.
          </p>
        </Accordion.Item>
        <Accordion.Item title="Quais são as formas de pagamento aceitas?">
          <p>
            Aceitamos cartões de crédito (Visa, Mastercard, American Express), débito, PayPal e transferência bancária. Para planos Enterprise, também oferecemos faturamento personalizado.
          </p>
        </Accordion.Item>
        <Accordion.Item title="Posso cancelar minha assinatura a qualquer momento?">
          <p>
            Sim! Você pode cancelar sua assinatura a qualquer momento através do painel de controle. Após o cancelamento, você continuará tendo acesso até o final do período já pago.
          </p>
        </Accordion.Item>
        <Accordion.Item title="Há suporte técnico disponível?">
          <p>
            Sim, oferecemos suporte técnico por email e chat ao vivo. Planos Pro e Enterprise também incluem suporte por telefone e um gerente de conta dedicado.
          </p>
        </Accordion.Item>
        <Accordion.Item title="Os dados são seguros?">
          <p>
            A segurança dos seus dados é nossa prioridade. Utilizamos criptografia SSL/TLS, armazenamento seguro em servidores certificados e seguimos as melhores práticas de segurança da indústria, incluindo conformidade com LGPD e GDPR.
          </p>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};

// Caso de uso: Sidebar de navegação
export const NavigationExample: Story = {
  render: () => (
    <div className="max-w-xs">
      <Accordion variant="default" type="multiple">
        <Accordion.Item
          title="Componentes"
          icon={
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          }
          defaultOpen
        >
          <div className="space-y-1 text-sm">
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Button</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Input</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Select</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Card</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Accordion</div>
          </div>
        </Accordion.Item>
        <Accordion.Item
          title="Utilidades"
          icon={
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          }
        >
          <div className="space-y-1 text-sm">
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Utils</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Hooks</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Helpers</div>
          </div>
        </Accordion.Item>
        <Accordion.Item
          title="Guias"
          icon={
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
          }
        >
          <div className="space-y-1 text-sm">
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Introdução</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Instalação</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Customização</div>
          </div>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};

// Exemplo com formulário dentro do accordion (teste de re-render)
export const WithForm: Story = {
  render: () => {
    const FormExample = () => {
      const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        comments: "",
      });

      const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [field]: e.target.value });
      };

      return (
        <div className="max-w-2xl">
          <h3 className="text-lg font-bold mb-4">Formulário de Cadastro</h3>
          <Accordion variant="bordered" type="multiple">
            <Accordion.Item title="Dados Pessoais" defaultOpen>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nome Completo</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange("name")}
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange("email")}
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Telefone</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange("phone")}
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
            </Accordion.Item>

            <Accordion.Item title="Endereço">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Endereço</label>
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={handleChange("address")}
                    placeholder="Rua, número"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Cidade</label>
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={handleChange("city")}
                    placeholder="Sua cidade"
                  />
                </div>
              </div>
            </Accordion.Item>

            <Accordion.Item title="Observações">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Comentários</label>
                  <textarea
                    value={formData.comments}
                    onChange={handleChange("comments")}
                    placeholder="Alguma observação adicional?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  />
                </div>
              </div>
            </Accordion.Item>
          </Accordion>

          <div className="mt-6">
            <Button onClick={() => console.log(formData)}>Salvar Dados</Button>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded text-sm">
            <strong>Debug - Estado do formulário:</strong>
            <pre className="mt-2 whitespace-pre-wrap break-words">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        </div>
      );
    };

    return <FormExample />;
  },
};
