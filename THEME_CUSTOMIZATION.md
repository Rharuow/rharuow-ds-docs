# 🎨 Customização de Tema - rharuow-ds

O Design System agora utiliza um sistema de cores baseado em **brand colors** (cores da marca) que você pode personalizar para criar uma experiência visual coesa em toda a sua aplicação.

## 🌈 Sistema de Cores

### Variáveis Principais

O DS agora expõe variáveis CSS que você pode personalizar:

```css
:root {
  /* Cores Primárias - Personalizáveis */
  --primary: #2563eb;           /* Cor principal da marca */
  --primary-hover: #1d4ed8;     /* Hover da cor principal */
  --primary-light: #dbeafe;     /* Versão clara para fundos */
  
  /* Cores Secundárias - Personalizáveis */
  --secondary: #64748b;         /* Cor secundária */
  --secondary-hover: #475569;   /* Hover da cor secundária */
  --secondary-light: #f1f5f9;   /* Versão clara para fundos */
}
```

### Como os Componentes Usam as Cores

Os componentes do DS agora **derivam suas cores** das variáveis `--primary` e `--secondary`:

- **Card Header**: Usa `color-mix()` com 5% da cor primária + neutro
- **Table Header**: Usa `color-mix()` com 8% da cor primária + neutro
- **Table Hover**: Usa `color-mix()` com 10% da cor primária + neutro
- **Select Selected**: Usa diretamente `--primary-light`
- **Elementos Selecionados**: Consistentemente usam a cor primária clara

## 💡 Como Personalizar

### Método 1: CSS Global (Recomendado)

No seu arquivo CSS principal (geralmente `index.css` ou `App.css`):

```css
/* Importar o DS primeiro */
@import 'rharuow-ds/dist/styles.css';

/* Depois sobrescrever as cores da marca */
:root {
  /* Defina suas cores da marca */
  --primary: #8b5cf6;           /* Roxo */
  --primary-hover: #7c3aed;
  --primary-light: #ede9fe;
  
  --secondary: #ec4899;         /* Rosa */
  --secondary-hover: #db2777;
  --secondary-light: #fce7f3;
}

/* Para dark mode, customize também */
[data-theme="dark"], .dark {
  --primary: #a78bfa;           /* Roxo mais claro para dark */
  --primary-hover: #8b5cf6;
  --primary-light: #4c1d95;
  
  --secondary: #f472b6;
  --secondary-hover: #ec4899;
  --secondary-light: #831843;
}
```

### Método 2: Inline no HTML

```html
<html style="
  --primary: #059669;
  --primary-hover: #047857;
  --primary-light: #d1fae5;
">
```

### Método 3: JavaScript/React

```typescript
// App.tsx ou main.tsx
useEffect(() => {
  const root = document.documentElement;
  
  root.style.setProperty('--primary', '#f59e0b');
  root.style.setProperty('--primary-hover', '#d97706');
  root.style.setProperty('--primary-light', '#fef3c7');
  
  root.style.setProperty('--secondary', '#6366f1');
  root.style.setProperty('--secondary-hover', '#4f46e5');
  root.style.setProperty('--secondary-light', '#e0e7ff');
}, []);
```

## 🎯 Exemplos de Paletas

### Paleta Corporativa (Azul)
```css
:root {
  --primary: #0ea5e9;
  --primary-hover: #0284c7;
  --primary-light: #e0f2fe;
  --secondary: #64748b;
  --secondary-hover: #475569;
  --secondary-light: #f1f5f9;
}
```

### Paleta Moderna (Roxo/Rosa)
```css
:root {
  --primary: #8b5cf6;
  --primary-hover: #7c3aed;
  --primary-light: #ede9fe;
  --secondary: #ec4899;
  --secondary-hover: #db2777;
  --secondary-light: #fce7f3;
}
```

### Paleta Natureza (Verde)
```css
:root {
  --primary: #10b981;
  --primary-hover: #059669;
  --primary-light: #d1fae5;
  --secondary: #f59e0b;
  --secondary-hover: #d97706;
  --secondary-light: #fef3c7;
}
```

### Paleta Minimalista (Cinza)
```css
:root {
  --primary: #6b7280;
  --primary-hover: #4b5563;
  --primary-light: #f3f4f6;
  --secondary: #9ca3af;
  --secondary-hover: #6b7280;
  --secondary-light: #f9fafb;
}
```

## 🔧 Customização Avançada

Se você precisar de controle total, ainda pode sobrescrever variáveis específicas de componentes:

```css
:root {
  /* Cores base da marca */
  --primary: #8b5cf6;
  --primary-light: #ede9fe;
  
  /* Customização específica de Card */
  --card-header-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --card-header-border: #8b5cf6;
  
  /* Customização específica de Table */
  --table-header-bg: #f3e8ff;
  --table-row-selected: #ede9fe;
}
```

## 📚 Variáveis Disponíveis

### Cores Neutras (também personalizáveis)
```css
--neutral-50: #f9fafb;
--neutral-100: #f3f4f6;
--neutral-200: #e5e7eb;
--neutral-300: #d1d5db;
--neutral-700: #374151;
--neutral-800: #1f2937;
--neutral-900: #111827;
```

### Componentes Específicos

#### Card
- `--card-bg`
- `--card-border`
- `--card-text`
- `--card-header-bg`
- `--card-header-border`
- `--card-footer-bg`
- `--card-footer-border`

#### Table
- `--table-bg`
- `--table-border`
- `--table-text`
- `--table-header-bg`
- `--table-row-odd`
- `--table-row-even`
- `--table-row-hover`
- `--table-row-selected`

#### Select/AsyncSelect/MultiSelect
- `--select-dropdown-bg`
- `--select-dropdown-border`
- `--select-dropdown-text`
- `--select-dropdown-hover`
- `--select-dropdown-selected`

#### Tooltip
- `--tooltip-bg`
- `--tooltip-text`

## 🌓 Dark Mode

O sistema agora ajusta automaticamente as cores primárias no dark mode para melhor contraste:

```css
[data-theme="dark"] {
  --primary: #3b82f6;           /* Azul mais claro para contraste */
  --primary-light: #1e3a8a;     /* Mais escuro para fundos */
}
```

## 💡 Dicas de UX

1. **Consistência**: Use a mesma paleta em todo o app
2. **Contraste**: Garanta contraste suficiente (WCAG AAA: 7:1)
3. **Hierarquia**: A cor primária deve ser dominante, secundária para acentos
4. **Teste Dark Mode**: Sempre teste suas cores personalizadas no modo escuro
5. **Ferramentas**: Use [Coolors](https://coolors.co/) ou [Adobe Color](https://color.adobe.com/) para gerar paletas

## 🚀 Benefícios

✅ **Experiência Coesa**: Todos os componentes seguem a mesma paleta  
✅ **Menos Código**: Defina uma vez, aplique em todos os componentes  
✅ **Manutenível**: Mudanças globais com apenas algumas linhas  
✅ **Acessível**: Cores otimizadas para contraste adequado  
✅ **Flexível**: Total controle quando necessário  

---

Para mais informações sobre temas e customização, consulte a [documentação do Storybook](https://rharuow.github.io/rharuow-ds-docs/).
