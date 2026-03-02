# rharuow-ds

[![NPM Version](https://img.shields.io/npm/v/rharuow-ds)](https://www.npmjs.com/package/rharuow-ds)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/Rharuow/rharuow-ds-docs/workflows/CI### 📋 **Select**

Seletor customizado com opções estáticas e suporte a busca:

- ✅ Opções estáticas predefinidas
- ✅ **Filtro digitável** (`searchable`) - Digite para encontrar opções
- ✅ Filtro case-sensitive configurável
- ✅ Função de filtro customizável
- ✅ Placeholder personalizado para busca
- ✅ Validação de valores (só aceita opções válidas)
- ✅ Botão de limpeza (`isClearable`)
- ✅ Integração completa com React Hook Form

```tsx
// Select básico
<Select
  name="fruit"
  label="Escolha uma fruta"
  options={[
    { label: "Maçã", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Manga", value: "mango" }
  ]}
/>

// Select com filtro
<Select
  name="fruit"
  label="Escolha uma fruta"
  searchable
  filterPlaceholder="Digite para filtrar frutas..."
  caseSensitive={false}
  isClearable
  options={fruitOptions}
/>
```dge.svg)](https://github.com/Rharuow/rharuow-ds-docs/actions)

Um Design System moderno em React com integração completa ao React Hook Form, estilizado com Tailwind CSS e baseado em shadcn/ui.

## 🌟 Características

- ⚛️ **React 18+** com TypeScript
- 🧩 **18 componentes** prontos para uso (Input, Textarea, Select, AsyncSelect, MultiSelect, MultiAsyncSelect, RadioGroup, Button, Chip, Card, Table, Tooltip, Accordion, AsideSheet, Modal, Toaster, ImageInput)
- 💡 **Filtro digitável** em componentes Select - Digite para encontrar opções rapidamente
- 🔗 **Integração nativa** com React Hook Form
- 🎨 **Sistema de cores automático** - Defina apenas 2 cores e todas as variações são calculadas automaticamente
- 🎯 **Contraste automático** para textos (WCAG AA compliance)
- 🌓 **Dark mode** com ajustes automáticos de cores
- 🎯 **Componentes acessíveis** (ARIA)
- 📱 **Responsivo** por padrão
- 🎭 **Animações suaves** e modernas
- 📚 **Documentação interativa** com Storybook

## 📚 Documentação

Acesse a documentação interativa dos componentes em:
**[https://rharuow.github.io/rharuow-ds-docs/](https://rharuow.github.io/rharuow-ds-docs/)**

---

## 🚀 Instalação

Adicione o pacote ao seu projeto:

```bash
npm install rharuow-ds
```

### Dependências necessárias

Se você for usar componentes com formulários, instale também:

```bash
npm install react-hook-form
```

> **💡 Atenção:**  
> Não é necessário instalar ou configurar Tailwind CSS no seu projeto consumidor para usar os estilos do rharuow-ds. O CSS já vem pronto no pacote!

### Compatibilidade

- ⚛️ React 16.8+ (hooks)
- 📋 React Hook Form 7.0+
- 🌐 Navegadores modernos (ES2018+)

---

## 📖 Como usar

1. **Importe o CSS do design system**  
   No seu arquivo de entrada (ex: `src/main.tsx`, `src/index.tsx` ou `_app.tsx` no Next.js):

   ```js
   import "rharuow-ds/dist/styles.css";
   ```

2. **Use os componentes normalmente**

   ```tsx
   import {
     Card,
     Table,
     Button,
     Chip,
     Input,
     Textarea,
     Select,
     AsyncSelect,
     MultiSelect,
     RadioGroup,
     Tooltip,
     Accordion,
     AsideSheet,
     Modal,
     Toaster,
     ImageInput,
   } from "rharuow-ds";

   function App() {
     return (
       <div>
         {/* Exemplo básico do Card */}
         <Card variant="default">
           <Card.Header>
             <h3>Título do Card</h3>
             <p>Subtítulo ou descrição</p>
           </Card.Header>
           <Card.Body>
             <p>Conteúdo principal do card</p>
           </Card.Body>
           <Card.Footer>
             <Button>Ação Principal</Button>
           </Card.Footer>
         </Card>

         {/* Exemplo da Table */}
         <Table variant="striped" size="md">
           <Table.Header>
             <Table.Row>
               <Table.Cell as="th">Nome</Table.Cell>
               <Table.Cell as="th">Email</Table.Cell>
               <Table.Cell as="th">Ações</Table.Cell>
             </Table.Row>
           </Table.Header>
           <Table.Body>
             <Table.Row>
               <Table.Cell>João Silva</Table.Cell>
               <Table.Cell>joao@email.com</Table.Cell>
               <Table.Cell>
                 <Button variant="outline">Editar</Button>
               </Table.Cell>
             </Table.Row>
           </Table.Body>
         </Table>

         {/* Outros componentes */}
         <Input label="E-mail" name="email" type="email" />
         <Input label="Senha" name="password" type="password" />
         <Textarea label="Comentários" name="comments" rows={4} />
         <Select
           label="País"
           name="country"
           options={[
             { label: "Brasil", value: "br" },
             { label: "Estados Unidos", value: "us" },
           ]}
         />
         <RadioGroup
           label="Tamanho"
           name="size"
           options={[
             { label: "Pequeno", value: "sm" },
             { label: "Médio", value: "md" },
             { label: "Grande", value: "lg" },
           ]}
         />
         
         <Tooltip content="Clique para enviar o formulário" position="top">
           <Button variant="default">Enviar</Button>
         </Tooltip>
       </div>
     );
   }
   ```

3. **Para componentes com React Hook Form**

   ```tsx
   import { useForm, FormProvider } from "react-hook-form";
   import {
     Card,
     Table,
     Input,
     Textarea,
     Select,
     AsyncSelect,
     MultiAsyncSelect,
     RadioGroup,
     Button,
     Tooltip,
     Accordion,
     AsideSheet,
     Modal,
     Toaster,
     ImageInput,
   } from "rharuow-ds";

   function FormExample() {
     const methods = useForm();

     const loadCountries = async (search?: string) => {
       // Simular chamada à API
       const countries = [
         { label: "Brasil", value: "br" },
         { label: "Argentina", value: "ar" },
         { label: "Estados Unidos", value: "us" },
         { label: "Chile", value: "cl" },
         { label: "Peru", value: "pe" },
       ];

       if (!search) return countries;
       return countries.filter((c) =>
         c.label.toLowerCase().includes(search.toLowerCase())
       );
     };

     return (
       <Card variant="default" size="lg">
         <Card.Header>
           <h2>Formulário de Cadastro</h2>
           <p>Preencha os dados abaixo</p>
         </Card.Header>
         
         <Card.Body>
           <FormProvider {...methods}>
             <form onSubmit={methods.handleSubmit(console.log)}>
               <Input label="Nome" name="name" />
               <Input label="E-mail" name="email" type="email" />
               <Input label="Senha" name="password" type="password" />
               <Textarea label="Observações" name="notes" rows={3} />

               <AsyncSelect
                 label="País"
                 name="country"
                 loadOptions={loadCountries}
                 searchable
                 isClearable
               />

               <MultiAsyncSelect
                 label="Países favoritos"
                 name="favoriteCountries"
                 loadOptions={loadCountries}
                 searchable
                 isClearable
                 maxVisibleItems={2}
               />

               <RadioGroup
                 label="Tamanho"
                 name="size"
                 options={[
                   { label: "Pequeno", value: "sm" },
                   { label: "Médio", value: "md" },
                   { label: "Grande", value: "lg" },
                 ]}
               />
             </form>
           </FormProvider>
         </Card.Body>
         
         <Card.Footer>
           <div className="flex space-x-2">
             <Button variant="outline">Cancelar</Button>
             <Button type="submit">Enviar</Button>
           </div>
         </Card.Footer>
       </Card>
     );
   }
   ```

---

## Componentes Disponíveis

### � **Card**

Componente flexível para exibir conteúdo organizado em seções:

- ✅ **Estrutura modular**: Header, Body e Footer independentes
- ✅ **Múltiplas variantes**: default, outlined, elevated, flat
- ✅ **Largura flexível**: Por padrão, cresce para ocupar largura disponível
- ✅ **Controle de largura**: Use `constrainWidth=true` para aplicar limitações por tamanho
- ✅ **Tamanhos configuráveis**: sm, md, lg (aplicados apenas com `constrainWidth`)
- ✅ **Suporte ao tema dark**: Variáveis CSS para light/dark mode
- ✅ **Elementos semânticos**: Props `as` para acessibilidade (header, main, footer)
- ✅ **Flexibilidade total**: Use apenas as seções necessárias
- ✅ **Customização completa**: Padding, bordas arredondadas e estilos

### 📊 **Table**

Componente completo para exibição de dados tabulares:

- ✅ **Estrutura modular**: Table, Header, Body, Footer, Row, Cell
- ✅ **Múltiplas variantes**: default, striped, bordered
- ✅ **Tamanhos configuráveis**: sm, md, lg  
- ✅ **Responsividade**: Scroll horizontal automático
- ✅ **Header fixo**: Para tabelas com muitos dados
- ✅ **Suporte ao tema dark**: Variáveis CSS para light/dark mode
- ✅ **Alinhamento de células**: left, center, right
- ✅ **Colspan e rowspan**: Células que ocupam múltiplas colunas/linhas
- ✅ **Elementos semânticos**: Props `as` para acessibilidade (th/td, thead/tbody/tfoot)
- ✅ **Linhas interativas**: Hover e estados de seleção

### �

### �🎯 **Button**

Botão customizável com diferentes variantes e tamanhos.

### 🏷️ **Chip**

Elemento pill interativo para filtros, tags e seleções toggleáveis:

- ✅ Estado ativo/inativo com visual distinto
- ✅ Ícone opcional à esquerda
- ✅ `onChange(active: boolean)` — callback de toggle
- ✅ Estado `disabled` com visual reduzido
- ✅ Acessível (`role="switch"`, `aria-checked`)
- ✅ Totalmente estilizável via `className`

```tsx
import { Chip } from "rharuow-ds";

// Toggle simples
const [active, setActive] = useState(false);
<Chip label="Filtro" active={active} onChange={setActive} />

// Grupo de filtros
const filters = ["React", "TypeScript", "Tailwind"];
const [selected, setSelected] = useState<string[]>([]);

const toggle = (filter: string) =>
  setSelected(prev =>
    prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
  );

{filters.map(filter => (
  <Chip
    key={filter}
    label={filter}
    active={selected.includes(filter)}
    onChange={() => toggle(filter)}
  />
))}

// Com ícone
<Chip
  label="Favorito"
  active={isFavorite}
  onChange={setIsFavorite}
  icon={<StarIcon />}
/>
```

### 📝 **Input**

Campo de texto versátil com label flutuante e integração com React Hook Form:

- ✅ Label flutuante animada
- ✅ Suporte a múltiplos tipos (text, email, password, number, tel, url)
- ✅ Funcionalidade de password com botão mostrar/ocultar
- ✅ Ícones customizados opcionais
- ✅ Estados de erro integrados
- ✅ Totalmente acessível (ARIA)

### � **Textarea**

Campo de texto multilinha com as mesmas funcionalidades do Input:

- ✅ Label flutuante animada
- ✅ Altura ajustável (propriedade `rows`)
- ✅ Redimensionamento vertical permitido
- ✅ Ícones customizados opcionais
- ✅ Estados de erro integrados
- ✅ Integração completa com React Hook Form
- ✅ Mesma consistência visual do Input

### �📋 **Select**

Seletor customizado com opções estáticas e suporte a busca.

### 🔄 **AsyncSelect**

Seletor com carregamento assíncrono de opções:

- ✅ Carregamento de dados via API
- ✅ Busca em tempo real (searchable)
- ✅ Debounce configurável
- ✅ Estados de loading e "sem opções"
- ✅ Integração completa com React Hook Form

### 🎛️ **MultiSelect**

Seletor múltiplo para escolha de várias opções:

- ✅ Seleção múltipla com checkboxes
- ✅ **Filtro digitável** (`searchable`) - Digite para encontrar opções
- ✅ Tags visuais para itens selecionados
- ✅ Remoção individual de itens
- ✅ Filtro case-sensitive configurável
- ✅ Função de filtro customizável
- ✅ Botão de limpeza geral (`isClearable`)
- ✅ Integração completa com React Hook Form

```tsx
// MultiSelect básico
<MultiSelect
  name="fruits"
  label="Escolha suas frutas favoritas"
  options={fruitOptions}
/>

// MultiSelect com filtro
<MultiSelect
  name="fruits"
  label="Escolha suas frutas favoritas"
  searchable
  filterPlaceholder="Digite para filtrar frutas..."
  caseSensitive={false}
  isClearable
  options={fruitOptions}
/>
```

### 🔄🎛️ **MultiAsyncSelect**

Seletor múltiplo com carregamento assíncrono:

- ✅ Todas as funcionalidades do AsyncSelect
- ✅ Seleção múltipla com tags visuais
- ✅ Remoção individual de itens selecionados
- ✅ Limite configurável de itens exibidos
- ✅ Contador de itens extras (+X mais)

### 🎯 **RadioGroup**

Radio buttons modernos e criativos:

- ✅ Design de botões estilizados (não radio tradicional)
- ✅ Ícones customizados opcionais
- ✅ Layout horizontal ou vertical
- ✅ Diferentes tamanhos (sm, md, lg)
- ✅ Animações ao selecionar

### 💡 **Tooltip**

Componente de tooltip inteligente e acessível:

- ✅ **Posicionamento automático**: top, bottom, left, right
- ✅ **Detecção de bordas**: Ajusta posição automaticamente se não couber na tela
- ✅ **Acessibilidade completa**: Suporte a navegação por teclado e screen readers
- ✅ **Animações suaves**: Transições de entrada e saída elegantes
- ✅ **Seta indicativa**: Aponta para o elemento que ativou o tooltip
- ✅ **Suporte a temas**: Variáveis CSS para light/dark mode
- ✅ **Flexível**: Funciona com qualquer elemento como trigger
- ✅ **Controle de estado**: Pode ser desabilitado conforme necessário

```tsx
// Tooltip básico
<Tooltip content="Informação útil" position="top">
  <Button>Passe o mouse aqui</Button>
</Tooltip>

// Tooltip com texto
<Tooltip content="Clique para mais detalhes" position="right">
  <span className="underline cursor-help">
    Texto com tooltip
  </span>
</Tooltip>

// Tooltip personalizado
<Tooltip 
  content="Tooltip customizado" 
  position="bottom"
  className="bg-red-500 text-white"
>
  <Button variant="outline">Hover aqui</Button>
</Tooltip>

// Tooltip desabilitado
<Tooltip content="Este não aparece" disabled>
  <Button>Tooltip desabilitado</Button>
</Tooltip>
```

### 🪗 **Accordion**

Componente de accordion (acordeão) flexível e acessível para expandir e colapsar seções de conteúdo:

- ✅ **Modo single**: Apenas um item aberto por vez
- ✅ **Modo multiple**: Vários itens podem estar abertos simultaneamente
- ✅ **Animações suaves**: Transições de altura com ease-in-out
- ✅ **Variantes visuais**: default, bordered, separated
- ✅ **Acessibilidade completa**: ARIA labels e navegação por teclado
- ✅ **Itens desabilitados**: Suporte para itens que não podem ser expandidos
- ✅ **Ícones customizados**: Adicione ícones aos títulos
- ✅ **Collapsible configurável**: Controle se todos os itens podem ser fechados
- ✅ **DefaultOpen**: Items podem iniciar abertos
- ✅ **Customização total**: Classes CSS para header e content

```tsx
// Accordion básico
<Accordion>
  <Accordion.Item title="O que é React?">
    <p>React é uma biblioteca JavaScript para construir interfaces de usuário.</p>
  </Accordion.Item>
  <Accordion.Item title="O que é TypeScript?">
    <p>TypeScript é um superset de JavaScript que adiciona tipagem estática.</p>
  </Accordion.Item>
</Accordion>

// Accordion com múltiplos itens abertos
<Accordion type="multiple">
  <Accordion.Item title="Seção 1" defaultOpen>
    <p>Esta seção inicia aberta.</p>
  </Accordion.Item>
  <Accordion.Item title="Seção 2" defaultOpen>
    <p>Esta seção também inicia aberta.</p>
  </Accordion.Item>
</Accordion>

// Accordion com variant bordered
<Accordion variant="bordered">
  <Accordion.Item title="Recursos do Produto">
    <ul>
      <li>Interface intuitiva</li>
      <li>Integração com múltiplas plataformas</li>
      <li>Suporte 24/7</li>
    </ul>
  </Accordion.Item>
</Accordion>

// Accordion com ícones customizados
<Accordion variant="separated" type="multiple">
  <Accordion.Item
    title="Documentação"
    icon={<DocumentIcon />}
  >
    <p>Acesse a documentação completa.</p>
  </Accordion.Item>
  <Accordion.Item
    title="Suporte"
    icon={<SupportIcon />}
  >
    <p>Entre em contato com nossa equipe.</p>
  </Accordion.Item>
</Accordion>

// Accordion não collapsible (sempre mantém um aberto)
<Accordion collapsible={false}>
  <Accordion.Item title="Passo 1" defaultOpen>
    <p>Configure seu ambiente.</p>
  </Accordion.Item>
  <Accordion.Item title="Passo 2">
    <p>Desenvolva sua aplicação.</p>
  </Accordion.Item>
</Accordion>
```

### 🪟 **AsideSheet**

Componente tipo painel deslizante (sheet) que abre a partir das bordas da tela.

- ✅ Suporta controle programático (controlled) e estado interno (uncontrolled)
- ✅ Abre da direita para a esquerda ou da esquerda para a direita (`side: 'left' | 'right'`)
- ✅ Largura configurável via `size` ou `className`
- ✅ Acessível: foco gerenciado e comportamento esperado ao fechar (Esc)

Props principais:

- `isOpen?: boolean` — controla visibilidade (quando usado como controlled)
- `defaultOpen?: boolean` — estado inicial (uncontrolled)
- `onClose?: () => void` — callback chamado ao fechar
- `side?: 'left' | 'right'` — lado de abertura (padrão: 'right')
- `size?: 'sm' | 'md' | 'lg' | 'full'` — tamanho pré-definido do sheet
- `className?: string` — classes adicionais para o container
- `title?: string | React.ReactNode` — título opcional do painel

Exemplo de uso (controlado):

```tsx
import React from 'react';
import { AsideSheet, Button } from 'rharuow-ds';

function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Abrir Aside</Button>

      <AsideSheet
        isOpen={open}
        onClose={() => setOpen(false)}
        side="right"
        size="md"
      >
        <AsideSheet.Header>
          <h3>Detalhes</h3>
        </AsideSheet.Header>

        <AsideSheet.Body>
          <p>Conteúdo do painel.</p>
        </AsideSheet.Body>

        <AsideSheet.Footer>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Fechar
          </Button>
        </AsideSheet.Footer>
      </AsideSheet>
    </div>
  );
}
```

Veja a story do componente no Storybook para demonstrações e variações (left/right, controlled/uncontrolled):

[Storybook — AsideSheet](https://rharuow.github.io/rharuow-ds-docs/?path=/story/asidesheet--default)

### 🎭 **Modal**

Componente de diálogo modal para exibir conteúdo sobreposto à página principal.

- ✅ Overlay com transparência configurável
- ✅ Múltiplos tamanhos: sm, md, lg, xl, full
- ✅ Variantes de cor: default, primary, secondary (usando CSS Variables)
- ✅ Controle de fechamento via overlay, ESC ou botão X
- ✅ Prevenção de scroll do body quando aberto
- ✅ Animações suaves de entrada/saída
- ✅ Sub-componentes para estruturação: Header, Body, Footer
- ✅ Renderização via Portal (React Portal)
- ✅ Acessível: role="dialog", aria-modal

Props principais:

- `open: boolean` — controla visibilidade do modal
- `onClose: () => void` — callback chamado ao fechar
- `size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'` — tamanho do modal (padrão: 'md')
- `variant?: 'default' | 'primary' | 'secondary'` — variante de cor (padrão: 'default')
- `closeOnOverlayClick?: boolean` — fecha ao clicar fora (padrão: true)
- `closeOnEscape?: boolean` — fecha ao pressionar ESC (padrão: true)
- `showCloseButton?: boolean` — exibe botão X de fechar (padrão: true)
- `className?: string` — classes adicionais para o container do modal

Exemplo de uso básico:

```tsx
import React from 'react';
import { Modal, Button } from 'rharuow-ds';

function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Abrir Modal</Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>Título do Modal</h2>
        <p>Conteúdo do modal aqui.</p>
      </Modal>
    </div>
  );
}
```

Exemplo com estrutura completa:

```tsx
import React from 'react';
import { Modal, Button } from 'rharuow-ds';

function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Confirmar Ação</Button>

      <Modal 
        open={open} 
        onClose={() => setOpen(false)}
        size="md"
      >
        <Modal.Header>
          <h2 className="text-2xl font-bold">Confirmar Exclusão</h2>
          <p className="text-sm text-gray-500">Esta ação não pode ser desfeita</p>
        </Modal.Header>

        <Modal.Body>
          <p className="text-gray-700">
            Você tem certeza que deseja excluir este item? 
            Todos os dados associados serão removidos permanentemente.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={() => {
            // Executar ação
            setOpen(false);
          }}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
```

Exemplo com formulário integrado:

```tsx
import React from 'react';
import { Modal, Button, Input } from 'rharuow-ds';
import { FormProvider, useForm } from 'react-hook-form';

function FormModal() {
  const [open, setOpen] = React.useState(false);
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
    setOpen(false);
    methods.reset();
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Novo Cadastro</Button>

      <Modal 
        open={open} 
        onClose={() => setOpen(false)}
        size="lg"
        closeOnOverlayClick={false}
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Modal.Header>
              <h2 className="text-2xl font-bold">Cadastrar Usuário</h2>
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
}
```

Exemplo com variantes de cor:

```tsx
import React from 'react';
import { Modal, Button } from 'rharuow-ds';

function ColorVariants() {
  const [openPrimary, setOpenPrimary] = React.useState(false);
  const [openSecondary, setOpenSecondary] = React.useState(false);

  return (
    <div>
      {/* Modal com cor primária */}
      <Button onClick={() => setOpenPrimary(true)}>
        Modal Primary
      </Button>
      
      <Modal 
        open={openPrimary} 
        onClose={() => setOpenPrimary(false)}
        variant="primary"
      >
        <Modal.Header>
          <h2 className="text-2xl font-bold">Ação Importante</h2>
        </Modal.Header>
        <Modal.Body>
          <p className="opacity-95">
            Este modal usa as cores primárias da aplicação, 
            ideal para destacar ações principais.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline" onClick={() => setOpenPrimary(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal com cor secundária */}
      <Button onClick={() => setOpenSecondary(true)} variant="secondary">
        Modal Secondary
      </Button>
      
      <Modal 
        open={openSecondary} 
        onClose={() => setOpenSecondary(false)}
        variant="secondary"
      >
        <Modal.Header>
          <h2 className="text-2xl font-bold">Aviso</h2>
        </Modal.Header>
        <Modal.Body>
          <p className="opacity-95">
            Este modal usa as cores secundárias da aplicação,
            ideal para avisos e ações alternativas.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpenSecondary(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
```

Veja a story do componente no Storybook para mais exemplos e variações:

[Storybook — Modal](https://rharuow.github.io/rharuow-ds-docs/?path=/story/components-modal--basic)

### � **Toaster**

Sistema completo de notificações toast para feedback ao usuário com múltiplas variantes e posicionamento flexível.

- ✅ 5 variantes de toast: success, error, warning, info, default
- ✅ 6 posições configuráveis na tela
- ✅ Auto-dismiss com duração customizável
- ✅ Toast permanente (duration: 0)
- ✅ Ícones automáticos por variante
- ✅ Animações suaves de entrada e saída
- ✅ Limite de toasts simultâneos (padrão: 5)
- ✅ Callbacks ao fechar
- ✅ Hook `useToast` para uso simplificado
- ✅ Gerenciamento via Context API

**Configuração inicial:**

O Toaster precisa ser configurado uma única vez no nível superior da aplicação:

```tsx
import React from 'react';
import { ToasterProvider } from 'rharuow-ds';

function App() {
  return (
    <ToasterProvider position="top-right" maxToasts={5}>
      {/* Sua aplicação aqui */}
      <YourApp />
    </ToasterProvider>
  );
}
```

Props do `ToasterProvider`:

- `position?: ToastPosition` - Posição dos toasts na tela (padrão: 'top-right')
  - Opções: 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'
- `maxToasts?: number` - Número máximo de toasts simultâneos (padrão: 5)

**Uso básico com hook `useToast`:**

```tsx
import React from 'react';
import { useToast, Button } from 'rharuow-ds';

function MyComponent() {
  const toast = useToast();

  return (
    <div>
      <Button onClick={() => toast.success('Operação realizada com sucesso!')}>
        Success
      </Button>

      <Button onClick={() => toast.error('Erro ao processar requisição')}>
        Error
      </Button>

      <Button onClick={() => toast.warning('Atenção: verifique os dados')}>
        Warning
      </Button>

      <Button onClick={() => toast.info('Você tem 3 novas mensagens')}>
        Info
      </Button>
    </div>
  );
}
```

**Toasts com duração customizada:**

```tsx
import React from 'react';
import { useToast, Button } from 'rharuow-ds';

function CustomDuration() {
  const toast = useToast();

  return (
    <div>
      {/* Toast rápido - 2 segundos */}
      <Button onClick={() => toast.success('Toast rápido', 2000)}>
        2 Segundos
      </Button>

      {/* Toast longo - 10 segundos */}
      <Button onClick={() => toast.info('Toast longo', 10000)}>
        10 Segundos
      </Button>

      {/* Toast permanente - não fecha automaticamente */}
      <Button 
        onClick={() => toast.toast('Toast permanente', { duration: 0 })}
      >
        Permanente
      </Button>
    </div>
  );
}
```

**Toast com callback ao fechar:**

```tsx
import React from 'react';
import { useToaster, Button } from 'rharuow-ds';

function WithCallback() {
  const { addToast } = useToaster();

  const handleAction = () => {
    addToast({
      message: 'Processando dados...',
      variant: 'info',
      duration: 3000,
      onClose: () => {
        console.log('Toast fechado!');
        // Executar ação após fechamento
        performNextAction();
      },
    });
  };

  return <Button onClick={handleAction}>Iniciar Processo</Button>;
}
```

**Exemplo completo em um formulário:**

```tsx
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Input, Button, useToast } from 'rharuow-ds';

function FormWithToast() {
  const methods = useForm();
  const toast = useToast();

  const onSubmit = async (data: any) => {
    try {
      // Simular chamada à API
      await saveData(data);
      
      toast.success('Dados salvos com sucesso!');
      methods.reset();
    } catch (error) {
      toast.error('Erro ao salvar dados. Tente novamente.');
      console.error(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input label="Nome" name="name" required />
        <Input label="E-mail" name="email" type="email" required />
        
        <Button type="submit">Salvar</Button>
      </form>
    </FormProvider>
  );
}
```

**API do hook `useToast`:**

```typescript
const toast = useToast();

// Métodos disponíveis:
toast.success(message: string, duration?: number)
toast.error(message: string, duration?: number)
toast.warning(message: string, duration?: number)
toast.info(message: string, duration?: number)
toast.toast(message: string, options?: ToastOptions)
```

**API avançada com `useToaster`:**

```typescript
const { addToast, removeToast, clearAll, toasts } = useToaster();

// Adicionar toast com controle total
const id = addToast({
  message: 'Mensagem personalizada',
  variant: 'success',
  duration: 5000,
  onClose: () => console.log('Fechado'),
});

// Remover toast específico
removeToast(id);

// Limpar todos os toasts
clearAll();
```

**Dicas de uso:**

- Use `success` para operações bem-sucedidas (save, delete, update)
- Use `error` para falhas e erros
- Use `warning` para avisos que requerem atenção
- Use `info` para informações gerais
- Configure `duration: 0` para toasts que precisam de ação manual do usuário
- Posicione toasts conforme o contexto: top para notificações gerais, bottom para ações específicas

Veja a story do componente no Storybook para demonstrações interativas:

[Storybook — Toaster](https://rharuow.github.io/rharuow-ds-docs/?path=/story/components-toaster--top-right)

### �📷 **ImageInput**

Componente para seleção e upload de imagens com preview e ações de confirmação/remoção:

- ✅ **Seleção via explorador** - Clique para abrir o explorador de arquivos (apenas imagens)
- ✅ **Preview da imagem** - Visualização imediata após seleção
- ✅ **Modo avatar** (`avatar={true}`) - Formato circular para fotos de perfil
- ✅ **Ações de confirmação** - Botões para confirmar upload ou cancelar
- ✅ **Remoção de imagem** - Botão para excluir imagem já salva
- ✅ **Suporte a URLs externas** - Exibe imagens já salvas via `value` prop
- ✅ **Validação de arquivos** - Controle de tipo e tamanho máximo
- ✅ **Estados de loading** - Indicação visual durante upload/remoção
- ✅ **Flexível** - Funciona com qualquer serviço (Cloudinary, Firebase, S3, etc.)
- ✅ **Integração com React Hook Form** - Nome do campo e validação

Props principais:

- `avatar?: boolean` — formato circular (ideal para avatars)
- `value?: string` — URL da imagem atual (já salva)
- `onUpload?: (file: File) => Promise<string>` — callback para upload (retorna URL)
- `onRemove?: (imageUrl?: string) => Promise<void>` — callback para remoção
- `accept?: string` — tipos aceitos (padrão: "image/*")
- `maxSize?: number` — tamanho máximo em bytes
- `size?: 'sm' | 'md' | 'lg'` — tamanho do componente
- `loading?: boolean` — estado de carregamento
- `disabled?: boolean` — desabilitar interações

Exemplo básico:

```tsx
import React from 'react';
import { ImageInput } from 'rharuow-ds';

function ProfileForm() {
  const [avatarUrl, setAvatarUrl] = React.useState('');

  const handleUpload = async (file: File): Promise<string> => {
    // Upload para seu serviço preferido (Cloudinary, Firebase, etc.)
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    setAvatarUrl(data.url);
    return data.url;
  };

  const handleRemove = async (url?: string) => {
    // Remover do serviço se necessário
    await fetch(`/api/delete?url=${encodeURIComponent(url || '')}`, {
      method: 'DELETE'
    });
    setAvatarUrl('');
  };

  return (
    <ImageInput
      avatar
      label="Foto do Perfil"
      value={avatarUrl}
      onUpload={handleUpload}
      onRemove={handleRemove}
      size="lg"
      maxSize={2 * 1024 * 1024} // 2MB
    />
  );
}
```

Exemplo com Cloudinary:

```tsx
const uploadToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'seu_preset');

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/seu_cloud_name/image/upload`,
    {
      method: 'POST',
      body: formData
    }
  );

  const data = await response.json();
  return data.secure_url;
};

<ImageInput 
  onUpload={uploadToCloudinary}
  placeholder="Upload para Cloudinary"
/>
```

Veja a story do componente no Storybook para demonstrações completas:

[Storybook — ImageInput](https://rharuow.github.io/rharuow-ds-docs/?path=/story/imageinput--default)

---
```

---

## 🎨 Customização de Tema

O rharuow-ds utiliza um **sistema de cores inteligente** que permite personalizar todo o design system definindo apenas **duas cores**: primária e secundária. Todas as variações (hover, light, dark) e cores de texto com contraste adequado são **calculadas automaticamente**.

> ⚡ **NOVO**: Sistema de Cálculo Automático de Cores! Veja a [documentação completa](AUTO_COLOR_SYSTEM.md) para detalhes.

### ✨ Modo Simplificado (Recomendado)

**Defina apenas 2 variáveis** e o sistema calcula automaticamente todas as variações:

```css
/* Importar o DS primeiro */
@import 'rharuow-ds/dist/styles.css';

/* Defina APENAS as cores base - o resto é automático! */
:root {
  --primary: #8b5cf6;    /* Roxo */
  --secondary: #ec4899;  /* Rosa */
}

/* Para dark mode */
[data-theme="dark"] {
  --primary: #a78bfa;    /* Versão mais clara para melhor contraste */
  --secondary: #f472b6;
}
```

O sistema automaticamente gera:
- ✅ `--primary-hover`, `--primary-light`, `--primary-dark`, `--primary-text`
- ✅ `--secondary-hover`, `--secondary-light`, `--secondary-dark`, `--secondary-text`
- ✅ Contraste adequado para textos (WCAG AA compliance)
- ✅ Ajustes automáticos para dark mode

### 💻 Uso com JavaScript/TypeScript

Para aplicações que precisam mudar cores dinamicamente:

```typescript
import { applyThemeColors } from 'rharuow-ds/lib/color.utils';
import 'rharuow-ds/dist/styles.css';

function App() {
  useEffect(() => {
    // Aplica cores e calcula automaticamente todas as variações
    applyThemeColors('#8b5cf6', '#ec4899');
  }, []);
  
  return <div>...</div>;
}
```

### 🎨 Funções Utilitárias

O DS exporta várias funções para cálculos de cor:

```typescript
import {
  generateColorPalette,    // Gera paleta completa de uma cor
  getContrastingTextColor, // Retorna branco ou preto com melhor contraste
  isLightColor,            // Verifica se uma cor é clara ou escura
  lightenColor,            // Clareia uma cor em X%
  darkenColor,             // Escurece uma cor em X%
  hexToRgb,                // Converte HEX para RGB
  getLuminance,            // Calcula luminância relativa
  getContrastRatio         // Calcula razão de contraste (WCAG)
} from 'rharuow-ds/lib/color.utils';

// Exemplo: Gerar paleta completa
const palette = generateColorPalette('#8b5cf6');
/*
{
  base: '#8b5cf6',
  hover: '#7c3aed',
  light: '#ede9fe',
  dark: '#6d28d9',
  text: '#ffffff',
  textOnLight: '#1f2937'
}
*/
```

### 🌈 Sistema de Cores

#### Como os Componentes Usam as Cores

Os componentes **derivam automaticamente** suas cores das variáveis primárias:

- **Card Header**: Mescla 5% da cor primária com fundo neutro
- **Table Header**: Mescla 8% da cor primária com fundo neutro
- **Table Hover**: Mescla 10% da cor primária com fundo neutro
- **Select Selected**: Usa diretamente `--primary-light`
- **Button/Modal**: Usam cores primária/secundária com texto de alto contraste
- **Elementos Selecionados**: Consistentemente usam a cor primária clara

### 💡 Modo Avançado (Controle Total)

Se você precisa de controle total sobre cada variação:

```css
:root {
  /* Defina todas as variações manualmente */
  --primary: #8b5cf6;
  --primary-hover: #7c3aed;
  --primary-light: #ede9fe;
  --primary-dark: #6d28d9;
  --primary-text: #ffffff;
  
  --secondary: #ec4899;
  --secondary-hover: #db2777;
  --secondary-light: #fce7f3;
  --secondary-dark: #be185d;
  --secondary-text: #ffffff;
}
```

### 📖 Documentação Completa

- **[AUTO_COLOR_SYSTEM.md](AUTO_COLOR_SYSTEM.md)** - Guia completo do sistema de cores automático
- **[THEME_CUSTOMIZATION.md](THEME_CUSTOMIZATION.md)** - Customização detalhada de tema

#### Método 2: JavaScript/React

```typescript
// App.tsx ou main.tsx
useEffect(() => {
  const root = document.documentElement;
  
  root.style.setProperty('--primary', '#f59e0b');
  root.style.setProperty('--primary-hover', '#d97706');
  root.style.setProperty('--primary-light', '#fef3c7');
}, []);
```

### 🎯 Exemplos de Paletas

```css
/* Paleta Corporativa (Azul) */
:root {
  --primary: #0ea5e9;
  --primary-hover: #0284c7;
  --primary-light: #e0f2fe;
}

/* Paleta Moderna (Roxo/Rosa) */
:root {
  --primary: #8b5cf6;
  --primary-hover: #7c3aed;
  --primary-light: #ede9fe;
  --secondary: #ec4899;
}

/* Paleta Natureza (Verde) */
:root {
  --primary: #10b981;
  --primary-hover: #059669;
  --primary-light: #d1fae5;
}

/* Paleta Minimalista (Cinza) */
:root {
  --primary: #6b7280;
  --primary-hover: #4b5563;
  --primary-light: #f3f4f6;
}
```

### 🔧 Customização Avançada

Para controle total, você pode sobrescrever variáveis específicas:

```css
:root {
  /* Cores base da marca */
  --primary: #8b5cf6;
  
  /* Customização específica de Card */
  --card-header-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --card-header-border: #8b5cf6;
  
  /* Customização específica de Table */
  --table-header-bg: #f3e8ff;
  --table-row-selected: #ede9fe;
}
```

### 📚 Variáveis Disponíveis por Componente

#### Card
- `--card-bg`, `--card-border`, `--card-text`
- `--card-header-bg`, `--card-header-border`
- `--card-footer-bg`, `--card-footer-border`

#### Table
- `--table-bg`, `--table-border`, `--table-text`
- `--table-header-bg`, `--table-row-hover`, `--table-row-selected`

#### Select/AsyncSelect/MultiSelect
- `--select-dropdown-bg`, `--select-dropdown-border`
- `--select-dropdown-hover`, `--select-dropdown-selected`

#### Tooltip
- `--tooltip-bg`, `--tooltip-text`

### 🌓 Dark Mode

O sistema ajusta automaticamente as cores no dark mode:

```css
/* Ative o dark mode adicionando o atributo */
<html data-theme="dark">
  <!-- ou -->
<html class="dark">
```

### No Storybook

Na [documentação do Storybook](https://rharuow.github.io/rharuow-ds-docs/), você pode testar diferentes temas na story **"Theme Customization"**.

Para mais detalhes, consulte [THEME_CUSTOMIZATION.md](./THEME_CUSTOMIZATION.md).

---

## 🛠️ Desenvolvimento

- ✅ Ícones customizados opcionais
- ✅ Três tamanhos: sm, md, lg
- ✅ Layout horizontal ou vertical
- ✅ Animações e estados visuais
- ✅ Label flutuante integrada

---

## Documentação

Acesse a documentação interativa dos componentes em [GitHub Pages](#) _(link será atualizado após o deploy)_.

---

## Desenvolvimento

Para contribuir ou rodar localmente:

```bash
git clone https://github.com/Rharuow/rharuow-ds-docs.git
cd rharuow-ds-docs
npm install
```

### Comandos disponíveis:

```bash
# Iniciar Storybook para desenvolvimento
npm run storybook

# Build dos componentes
npm run build

# Gerar CSS do Tailwind
npm run build:css

# Executar testes
npm test

# Build do Storybook para produção
npm run build-storybook
```

### Estrutura do projeto:

```
src/
├── components/          # Componentes React
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Select.tsx
│   ├── AsyncSelect.tsx
│   ├── MultiSelect.tsx
│   ├── types.ts        # Tipos compartilhados
│   └── index.ts        # Exportações
├── lib/
│   └── utils.ts        # Utilitários (cn, etc.)
├── stories/            # Stories do Storybook
└── styles/
    └── ds.css          # Estilos Tailwind
```

---

## Tecnologias

- ⚛️ **React 18** - Biblioteca base
- 📋 **React Hook Form** - Gerenciamento de formulários
- 🎨 **Tailwind CSS** - Estilização
- 📚 **Storybook** - Documentação interativa
- 📦 **Vite** - Build tool
- 🔷 **TypeScript** - Tipagem estática

---

Desenvolvido por Harysson.
