# rharuow-ds

[![NPM Version](https://img.shields.io/npm/v/rharuow-ds)](https://www.npmjs.com/package/rharuow-ds)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/Rharuow/rharuow-ds-docs/workflows/CI/badge.svg)](https://github.com/Rharuow/rharuow-ds-docs/actions)

Um Design System moderno em React com integração completa ao React Hook Form, estilizado com Tailwind CSS e baseado em shadcn/ui.

## 🌟 Características

- ⚛️ **React 18+** com TypeScript
- � **Integração nativa** com React Hook Form
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
     Button,
     Input,
     Textarea,
     Select,
     AsyncSelect,
     MultiSelect,
     RadioGroup,
   } from "rharuow-ds";

   function App() {
     return (
       <div>
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
         <Button variant="default">Enviar</Button>
       </div>
     );
   }
   ```

3. **Para componentes com React Hook Form**

   ```tsx
   import { useForm, FormProvider } from "react-hook-form";
   import {
     Input,
     Textarea,
     Select,
     AsyncSelect,
     MultiAsyncSelect,
     RadioGroup,
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

           <Button type="submit">Enviar</Button>
         </form>
       </FormProvider>
     );
   }
   ```

---

## Componentes Disponíveis

### 🎯 **Button**

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

Seletor múltiplo para escolha de várias opções.

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
