# 🎨 Customização de Tema - rharuow-ds

O Design System agora utiliza um sistema de cores baseado em **brand colors** (cores da marca) que você pode personalizar para criar uma experiência visual coesa em toda a sua aplicação.

> ⚡ **NOVO**: Sistema de Cálculo Automático de Cores! Agora você precisa definir apenas `--primary` e `--secondary`, e todas as variações são calculadas automaticamente. Veja [AUTO_COLOR_SYSTEM.md](AUTO_COLOR_SYSTEM.md) para detalhes completos.

## 🌈 Sistema de Cores

### ✨ Modo Simplificado (Recomendado)

**Defina apenas 2 variáveis** e o sistema calcula automaticamente todas as variações:

```css
:root {
  /* Defina APENAS estas duas cores - o resto é automático! */
  --primary: #2563eb;    /* Cor principal da marca */
  --secondary: #64748b;  /* Cor secundária */
}
```

O sistema automaticamente gera:
- ✅ `--primary-hover`, `--primary-light`, `--primary-dark`, `--primary-text`
- ✅ `--secondary-hover`, `--secondary-light`, `--secondary-dark`, `--secondary-text`
- ✅ Contraste adequado para textos (WCAG AA compliance)
- ✅ Ajustes automáticos para dark mode

### 🎛️ Modo Avançado (Controle Total)

Se você precisa de controle total sobre cada variação:

```css
:root {
  /* Cores Primárias - Totalmente Personalizáveis */
  --primary: #2563eb;           
  --primary-hover: #1d4ed8;     /* Sobrescrever cálculo automático */
  --primary-light: #dbeafe;     
  --primary-dark: #1e40af;
  --primary-text: #ffffff;      /* Cor de texto sobre fundo primário */
  
  /* Cores Secundárias - Totalmente Personalizáveis */
  --secondary: #64748b;         
  --secondary-hover: #475569;   
  --secondary-light: #f1f5f9;   
  --secondary-dark: #334155;
  --secondary-text: #ffffff;
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

### Método 1: CSS Global (Recomendado - Modo Simplificado)

No seu arquivo CSS principal (geralmente `index.css` ou `App.css`):

```css
/* Importar o DS primeiro */
@import 'rharuow-ds/dist/styles.css';

/* Depois defina APENAS as cores base - o resto é automático! */
:root {
  --primary: #8b5cf6;    /* Roxo */
  --secondary: #ec4899;  /* Rosa */
}

/* Para dark mode */
[data-theme="dark"], .dark {
  --primary: #a78bfa;    /* Roxo mais claro para melhor contraste */
  --secondary: #f472b6;
}
```

### Método 1.1: CSS Global (Modo Avançado - Controle Total)

```css
@import 'rharuow-ds/dist/styles.css';

:root {
  /* Defina todas as variações manualmente */
  --primary: #8b5cf6;
  --primary-hover: #7c3aed;
  --primary-light: #ede9fe;
  --primary-dark: #6d28d9;
  --primary-text: #ffffff;
  
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

### Método 2: Inline no HTML (Modo Simplificado)

```html
<html style="--primary: #059669; --secondary: #0891b2;">
```

### Método 3: JavaScript/React (Modo Automático com Funções)

```typescript
// App.tsx ou main.tsx
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

### Método 3.1: JavaScript/React (Modo Manual)

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
