# rharuow-ds

Design System em React com integração a React Hook Form, Tailwind CSS e shadcn/ui.

## Instalação

Adicione o pacote ao seu projeto:

```bash
npm install rharuow-ds
```

> **Atenção:**  
> Não é necessário instalar ou configurar Tailwind CSS no seu projeto consumidor para usar os estilos do rharuow-ds. O CSS já vem pronto no pacote!

---

## Como usar

1. **Importe o CSS do design system**  
   No seu arquivo de entrada (ex: `src/main.tsx`, `src/index.tsx` ou `_app.tsx` no Next.js):

   ```js
   import "rharuow-ds/dist/styles.css";
   ```

2. **Use os componentes normalmente**

   ```tsx
   import { Button, Input } from "rharuow-ds";

   function App() {
     return (
       <div>
         <Input label="E-mail" name="email" />
         <Button variant="default">Enviar</Button>
       </div>
     );
   }
   ```

---

## Documentação

Acesse a documentação interativa dos componentes em [GitHub Pages](#) _(link será atualizado após o deploy)_.

---

## Desenvolvimento

Para contribuir ou rodar localmente:

```bash
git clone https://github.com/seu-usuario/rharuow-ds.git
cd rharuow-ds
npm install
npm run storybook
```

---

Desenvolvido por Harysson.
