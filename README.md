# rharuow-ds

Design System em React com integração a React Hook Form, Tailwind CSS e shadcn/ui.

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
   import { Button, Input, Select, AsyncSelect } from "rharuow-ds";

   function App() {
     return (
       <div>
         <Input label="E-mail" name="email" />
         <Select 
           label="País" 
           name="country"
           options={[
             { label: "Brasil", value: "br" },
             { label: "Estados Unidos", value: "us" }
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
   import { Input, Select, AsyncSelect } from "rharuow-ds";

   function FormExample() {
     const methods = useForm();

     const loadCountries = async (search?: string) => {
       // Simular chamada à API
       const countries = [
         { label: "Brasil", value: "br" },
         { label: "Argentina", value: "ar" },
         { label: "Estados Unidos", value: "us" }
       ];
       
       if (!search) return countries;
       return countries.filter(c => 
         c.label.toLowerCase().includes(search.toLowerCase())
       );
     };

     return (
       <FormProvider {...methods}>
         <form onSubmit={methods.handleSubmit(console.log)}>
           <Input label="Nome" name="name" />
           <AsyncSelect 
             label="País" 
             name="country"
             loadOptions={loadCountries}
             searchable
             isClearable
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
Campo de texto com label flutuante e integração com React Hook Form.

### 📋 **Select**
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
