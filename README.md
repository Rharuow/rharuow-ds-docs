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
- 🧩 **11 componentes** prontos para uso (Input, Textarea, Select, AsyncSelect, MultiSelect, MultiAsyncSelect, RadioGroup, Button, Card, Table, Tooltip)
- 💡 **Filtro digitável** em componentes Select - Digite para encontrar opções rapidamente
- 🔗 **Integração nativa** com React Hook Form
- 🎨 **Customização via CSS Variables** - Mude o tema facilmente
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
     Input,
     Textarea,
     Select,
     AsyncSelect,
     MultiSelect,
     RadioGroup,
     Tooltip,
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

### 🪟 AsideSheet

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
```

---

## 🎨 Customização de Tema

O rharuow-ds utiliza **CSS Variables** para permitir customização fácil do tema. Você pode modificar as cores primárias do design system definindo as seguintes variáveis CSS:

### Variáveis Disponíveis

```css
:root {
  --primary: #2563eb; /* Cor primária principal */
  --primary-hover: #dbeafe; /* Cor para hover/background */
  --primary-text: #fff; /* Cor do texto em backgrounds primários */
  --input-bg: #fff; /* Background dos inputs */
  --input-text: #222; /* Cor do texto dos inputs */
}
```

### Exemplo de Customização

```css
/* Tema vermelho */
:root {
  --primary: #dc2626;
  --primary-hover: #fecaca;
  --primary-text: #fff;
}

/* Tema verde */
:root {
  --primary: #059669;
  --primary-hover: #d1fae5;
  --primary-text: #fff;
}

/* Tema roxo */
:root {
  --primary: #7c3aed;
  --primary-hover: #e9d5ff;
  --primary-text: #fff;
}
```

### No Storybook

Na documentação do Storybook, você pode testar diferentes temas usando os controles na toolbar:

- 🎨 **Primary Color**: Muda a cor principal
- 🌈 **Primary Hover**: Muda a cor de hover/background

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
