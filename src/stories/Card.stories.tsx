import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Tooltip } from "../components/Tooltip";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Componente Card flexível com seções Header, Body e Footer. Por padrão, o card cresce para ocupar toda a largura disponível. Use constrainWidth=true para aplicar limitações de tamanho. Suporta diferentes variantes e personalização completa via CSS Variables.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Estilo visual do card",
      control: "select",
      options: ["default", "outlined", "elevated", "flat"],
    },
    size: {
      description: "Tamanho máximo do card (aplicado apenas quando constrainWidth for true)",
      control: "select", 
      options: ["sm", "md", "lg"],
    },
    constrainWidth: {
      description: "Aplicar limitação de largura máxima baseada no size",
      control: "boolean",
    },
    padding: {
      description: "Padding interno do card (além do padding das seções)",
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    rounded: {
      description: "Bordas arredondadas",
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
    },
    allowOverflow: {
      description: "Permitir que elementos filhos transbordem do card (útil para tooltips legados)",
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <h3 className="text-lg font-semibold text-gray-900">Título do Card</h3>
        <p className="text-sm text-gray-500">Subtítulo ou descrição</p>
      </Card.Header>
      <Card.Body>
        <p className="text-gray-700">
          Este é o conteúdo principal do card. Aqui você pode colocar qualquer 
          conteúdo que desejar, como texto, imagens, formulários, etc.
        </p>
      </Card.Body>
      <Card.Footer>
        <div className="flex justify-end space-x-2">
          <Button variant="outline">Cancelar</Button>
          <Button>Confirmar</Button>
        </div>
      </Card.Footer>
    </Card>
  ),
  args: {
    variant: "default",
    size: "md",
    constrainWidth: false,
    padding: "none",
    rounded: "lg",
  },
  parameters: {
    docs: {
      description: {
        story: "Card básico com header, body e footer. Demonstra a estrutura padrão com título, conteúdo e ações.",
      },
    },
  },
};

export const OnlyHeader: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <h3 className="text-lg font-semibold text-gray-900">Apenas Header</h3>
        <p className="text-sm text-gray-500">Card com apenas a seção de cabeçalho</p>
      </Card.Header>
    </Card>
  ),
  args: {
    variant: "default",
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story: "Card usando apenas o Header. Útil para títulos, notificações simples ou divisões de conteúdo.",
      },
    },
  },
};

export const OnlyBody: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Body>
        <h4 className="font-medium text-gray-900 mb-2">Conteúdo Principal</h4>
        <p className="text-gray-700">
          Card com apenas o body. Ideal para conteúdo simples sem necessidade 
          de header ou footer específicos.
        </p>
      </Card.Body>
    </Card>
  ),
  args: {
    variant: "default",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Card usando apenas o Body. Útil para conteúdo simples que não precisa de cabeçalho ou rodapé.",
      },
    },
  },
};

export const HeaderAndBody: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <h3 className="text-lg font-semibold text-gray-900">Produto Premium</h3>
        <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
          Destaque
        </span>
      </Card.Header>
      <Card.Body>
        <div className="space-y-3">
          <p className="text-gray-700">
            Descrição detalhada do produto com suas principais características
            e benefícios para o usuário.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Característica 1</li>
            <li>Característica 2</li>
            <li>Característica 3</li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  ),
  args: {
    variant: "default",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Card com Header e Body. Comum para exibir informações de produtos, artigos ou perfis.",
      },
    },
  },
};

export const BodyAndFooter: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Body>
        <div className="text-center">
          <div className="text-3xl font-bold text-[var(--primary,#2563eb)] mb-2">
            $99
          </div>
          <p className="text-gray-700">
            Plano mensal com todos os recursos incluídos
          </p>
        </div>
      </Card.Body>
      <Card.Footer>
        <Button className="w-full">
          Assinar Agora
        </Button>
      </Card.Footer>
    </Card>
  ),
  args: {
    variant: "default",
    size: "sm",
  },
  parameters: {
    docs: {
      description: {
        story: "Card com Body e Footer. Ideal para preços, calls-to-action ou formulários simples.",
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-4xl">
      <Card variant="default">
        <Card.Header>
          <h4 className="font-medium">Default</h4>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-gray-600">Card padrão com sombra sutil</p>
        </Card.Body>
      </Card>
      
      <Card variant="outlined">
        <Card.Header>
          <h4 className="font-medium">Outlined</h4>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-gray-600">Card com borda colorida</p>
        </Card.Body>
      </Card>
      
      <Card variant="elevated">
        <Card.Header>
          <h4 className="font-medium">Elevated</h4>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-gray-600">Card com sombra elevada</p>
        </Card.Body>
      </Card>
      
      <Card variant="flat">
        <Card.Header>
          <h4 className="font-medium">Flat</h4>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-gray-600">Card sem sombra ou borda</p>
        </Card.Body>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Diferentes variantes visuais do Card: default, outlined, elevated e flat.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold mb-4">Cards sem limitação de largura (padrão)</h4>
        <div className="space-y-4">
          <Card size="sm" constrainWidth={false}>
            <Card.Header>
              <h4 className="font-medium">Card sem limitação</h4>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-gray-600">
                Este card cresce livremente para se adaptar ao conteúdo ou container pai, 
                independente do size definido. Esta é a configuração padrão.
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Cards com limitação de largura (constrainWidth=true)</h4>
        <div className="space-y-4">
          <Card size="sm" constrainWidth={true}>
            <Card.Header>
              <h4 className="font-medium">Small (sm) - max-width: 384px</h4>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-gray-600">Card pequeno com largura limitada</p>
            </Card.Body>
          </Card>
          
          <Card size="md" constrainWidth={true}>
            <Card.Header>
              <h4 className="font-medium">Medium (md) - max-width: 448px</h4>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-gray-600">Card médio com largura limitada</p>
            </Card.Body>
          </Card>
          
          <Card size="lg" constrainWidth={true}>
            <Card.Header>
              <h4 className="font-medium">Large (lg) - max-width: 512px</h4>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-gray-600">Card grande com largura limitada</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstração do novo comportamento de sizing. Por padrão, cards crescem livremente. Use constrainWidth=true para aplicar limitações de largura baseadas no size.",
      },
    },
  },
};

export const CustomSemantic: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header as="header">
        <h1 className="text-xl font-bold text-gray-900">Artigo Técnico</h1>
        <time className="text-sm text-gray-500">18 de Setembro, 2025</time>
      </Card.Header>
      <Card.Body as="main">
        <article className="prose prose-sm">
          <p>
            Este é um exemplo de card usando elementos semânticos HTML5.
            O header usa a tag &lt;header&gt; e o body usa &lt;main&gt;.
          </p>
        </article>
      </Card.Body>
      <Card.Footer as="footer">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Por: Rharuow</span>
          <div className="flex space-x-2">
            <Button variant="outline">Compartilhar</Button>
            <Button>Ler Mais</Button>
          </div>
        </div>
      </Card.Footer>
    </Card>
  ),
  args: {
    variant: "default",
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story: "Card usando elementos semânticos HTML5. As seções podem usar tags como header, main, section, footer.",
      },
    },
  },
};

export const WithoutPadding: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header className="px-0 py-0">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop" 
          alt="Header"
          className="w-full h-32 object-cover"
        />
      </Card.Header>
      <Card.Body>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Card com Imagem</h3>
        <p className="text-gray-700">
          Exemplo de card onde o header não tem padding para acomodar uma imagem
          que ocupa toda a largura.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button className="w-full">Ver Detalhes</Button>
      </Card.Footer>
    </Card>
  ),
  args: {
    variant: "default",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Card com seção customizada sem padding, útil para imagens ou conteúdo que deve ocupar toda a largura.",
      },
    },
  },
};

export const InteractiveCard: Story = {
  render: (args) => {
    const [liked, setLiked] = React.useState(false);
    const [saved, setSaved] = React.useState(false);

    return (
      <Card {...args}>
        <Card.Header>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-[var(--card-text,#111827)]">Card Interativo</h3>
              <p className="text-sm text-[var(--card-text-muted,#6b7280)]">Com estado e interações</p>
            </div>
            <button
              onClick={() => setSaved(!saved)}
              className={`p-2 rounded-full transition-colors ${
                saved ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {saved ? '🔖' : '📄'}
            </button>
          </div>
        </Card.Header>
        <Card.Body>
          <p className="text-[var(--card-text,#111827)] mb-4">
            Este card demonstra como implementar interações e estado.
            Você pode curtir e salvar este card.
          </p>
          <div className="bg-[var(--card-header-bg,rgba(249,250,251,0.5))] p-3 rounded-md">
            <p className="text-sm text-[var(--card-text-muted,#6b7280)]">
              💡 Status: {liked ? 'Curtido' : 'Não curtido'} | {saved ? 'Salvo' : 'Não salvo'}
            </p>
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="flex justify-between">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                liked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <span>{liked ? '❤️' : '🤍'}</span>
              <span>{liked ? 'Curtido' : 'Curtir'}</span>
            </button>
            <Button variant="outline">Comentar</Button>
          </div>
        </Card.Footer>
      </Card>
    );
  },
  args: {
    variant: "default",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Card interativo com estado React. Demonstra como implementar funcionalidades dinâmicas.",
      },
    },
  },
};

export const DarkTheme: Story = {
  render: (args) => (
    <div data-theme="dark" className="p-6 bg-gray-900 min-h-screen">
      <div className="space-y-6">
        <Card {...args}>
          <Card.Header>
            <h3 className="text-lg font-semibold">Card no Tema Dark</h3>
            <p className="text-sm text-[var(--card-text-muted)]">Demonstração do tema escuro</p>
          </Card.Header>
          <Card.Body>
            <p className="mb-4">
              Este card demonstra como as variáveis CSS se adaptam automaticamente
              ao tema dark. As cores de fundo, bordas e texto são todas controladas
              por variáveis CSS.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-[var(--card-text-muted)]">
                • Fundo do card: var(--card-bg)
              </p>
              <p className="text-sm text-[var(--card-text-muted)]">
                • Texto: var(--card-text)
              </p>
              <p className="text-sm text-[var(--card-text-muted)]">
                • Bordas: var(--card-border)
              </p>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="flex space-x-2">
              <Button variant="outline">Secundário</Button>
              <Button>Primário</Button>
            </div>
          </Card.Footer>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card variant="default">
            <Card.Header>
              <h4 className="font-medium">Default Dark</h4>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-[var(--card-text-muted)]">Card padrão no tema dark</p>
            </Card.Body>
          </Card>
          
          <Card variant="elevated">
            <Card.Header>
              <h4 className="font-medium">Elevated Dark</h4>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-[var(--card-text-muted)]">Card elevado no tema dark</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  ),
  args: {
    variant: "default",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Card no tema dark. Demonstra como as variáveis CSS se adaptam automaticamente para fornecer uma experiência consistente no modo escuro.",
      },
    },
  },
};

export const ThemeComparison: Story = {
  render: (args) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Light Theme */}
      <div data-theme="light" className="p-6 bg-gray-50">
        <h3 className="text-lg font-bold mb-4 text-gray-900">Light Theme</h3>
        <Card {...args}>
          <Card.Header>
            <h4 className="font-medium">Tema Claro</h4>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Light</span>
          </Card.Header>
          <Card.Body>
            <p className="text-sm mb-3">
              Exemplo do card no tema claro com cores suaves e contraste adequado.
            </p>
            <ul className="text-xs space-y-1 text-[var(--card-text-muted)]">
              <li>• Fundo branco (#ffffff)</li>
              <li>• Bordas cinza claro (#e5e7eb)</li>
              <li>• Texto escuro (#111827)</li>
            </ul>
          </Card.Body>
          <Card.Footer>
            <Button className="w-full">Ação no Light</Button>
          </Card.Footer>
        </Card>
      </div>

      {/* Dark Theme */}
      <div data-theme="dark" className="p-6 bg-gray-900">
        <h3 className="text-lg font-bold mb-4 text-white">Dark Theme</h3>
        <Card {...args}>
          <Card.Header>
            <h4 className="font-medium">Tema Escuro</h4>
            <span className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded">Dark</span>
          </Card.Header>
          <Card.Body>
            <p className="text-sm mb-3">
              Exemplo do card no tema escuro com cores que reduzem o cansaço visual.
            </p>
            <ul className="text-xs space-y-1 text-[var(--card-text-muted)]">
              <li>• Fundo escuro (#1f2937)</li>
              <li>• Bordas cinza escuro (#374151)</li>
              <li>• Texto claro (#f9fafb)</li>
            </ul>
          </Card.Body>
          <Card.Footer>
            <Button className="w-full">Ação no Dark</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  ),
  args: {
    variant: "default",
    size: "md",
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Comparação lado a lado dos temas claro e escuro. Demonstra como o mesmo componente se adapta automaticamente usando variáveis CSS.",
      },
    },
  },
};

export const FullWidthCards: Story = {
  render: () => (
    <div className="space-y-6">
      <h4 className="text-lg font-semibold">Cards ocupando largura total do container</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card variant="default">
          <Card.Header>
            <h4 className="font-medium">Card Responsivo 1</h4>
          </Card.Header>
          <Card.Body>
            <p className="text-sm text-gray-600">
              Este card se adapta automaticamente ao seu container em layouts responsivos.
            </p>
          </Card.Body>
        </Card>
        
        <Card variant="outlined">
          <Card.Header>
            <h4 className="font-medium">Card Responsivo 2</h4>
          </Card.Header>
          <Card.Body>
            <p className="text-sm text-gray-600">
              Sem limitações de max-width, ideal para dashboards e layouts flexíveis.
            </p>
          </Card.Body>
        </Card>
        
        <Card variant="elevated">
          <Card.Header>
            <h4 className="font-medium">Card Responsivo 3</h4>
          </Card.Header>
          <Card.Body>
            <p className="text-sm text-gray-600">
              Perfeito para conteúdo que deve se expandir conforme necessário.
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="w-full">
        <Card variant="default">
          <Card.Header>
            <h4 className="font-medium">Card de largura total</h4>
            <p className="text-sm text-gray-500">Ocupa 100% da largura do container pai</p>
          </Card.Header>
          <Card.Body>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h5 className="font-medium text-sm">Coluna 1</h5>
                <p className="text-xs text-gray-600">
                  Conteúdo da primeira coluna em um card que ocupa toda a largura disponível.
                </p>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-sm">Coluna 2</h5>
                <p className="text-xs text-gray-600">
                  Conteúdo da segunda coluna, demonstrando como o card se expande.
                </p>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-sm">Coluna 3</h5>
                <p className="text-xs text-gray-600">
                  Terceira coluna mostrando a flexibilidade do novo comportamento.
                </p>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="flex justify-between items-center w-full">
              <span className="text-sm text-gray-500">Total de itens: 3</span>
              <Button>Ação Principal</Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Cards sem limitação de largura, ideais para layouts responsivos e dashboards. Os cards se adaptam automaticamente ao container pai.",
      },
    },
  },
};