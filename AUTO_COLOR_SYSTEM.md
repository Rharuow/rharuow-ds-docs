# 🎨 Sistema de Cores Automático - rharuow-ds

O Design System agora possui um **sistema inteligente de cálculo automático de cores** que gera todas as variações necessárias (hover, light, dark) e cores de texto com contraste adequado a partir de apenas **duas cores**: primária e secundária.

## ✨ Principais Benefícios

- ✅ **Defina apenas 2 cores**: `--primary` e `--secondary`
- ✅ **Cálculo automático** de todas as variações (hover, light, dark)
- ✅ **Contraste automático** para textos (garante acessibilidade WCAG)
- ✅ **Suporte a dark mode** com ajustes automáticos
- ✅ **Funções utilitárias** para cálculos dinâmicos em JavaScript/TypeScript

## 🚀 Uso Básico (Apenas CSS)

### Opção 1: Variáveis CSS (Mais Simples)

Defina apenas as cores primária e secundária no seu CSS global:

```css
/* index.css ou App.css */
@import 'rharuow-ds/dist/styles.css';

:root {
  /* Defina APENAS estas duas cores */
  --primary: #8b5cf6;    /* Roxo */
  --secondary: #ec4899;  /* Rosa */
}
```

**Isso é tudo!** O sistema automaticamente calcula:
- `--primary-hover` (versão mais escura/clara para hover)
- `--primary-light` (versão muito clara para backgrounds)
- `--primary-dark` (versão escura para acentos)
- `--primary-text` (cor de texto com contraste adequado)
- E o mesmo para `--secondary-*`

### Opção 2: Inline no HTML

```html
<html style="--primary: #059669; --secondary: #f59e0b;">
```

### Opção 3: Dark Mode

```css
[data-theme="dark"] {
  --primary: #a78bfa;    /* Versão mais clara para dark mode */
  --secondary: #f472b6;
}
```

## 💻 Uso Avançado (JavaScript/TypeScript)

### Função `applyThemeColors()`

Para aplicações que precisam mudar cores dinamicamente:

```typescript
import { applyThemeColors } from 'rharuow-ds/lib/color.utils';

// Aplicar tema ao carregar a aplicação
applyThemeColors('#8b5cf6', '#ec4899');

// Aplicar tema dinamicamente (ex: seletor de tema)
function handleThemeChange(primaryColor: string, secondaryColor: string) {
  applyThemeColors(primaryColor, secondaryColor);
}
```

### Hook React

```tsx
import { useEffect } from 'react';
import { applyThemeColors } from 'rharuow-ds/lib/color.utils';

function App() {
  useEffect(() => {
    // Aplicar cores da marca ao inicializar
    applyThemeColors('#8b5cf6', '#ec4899');
  }, []);

  return <div>...</div>;
}
```

### Função `generateColorPalette()`

Para gerar uma paleta completa a partir de uma cor:

```typescript
import { generateColorPalette } from 'rharuow-ds/lib/color.utils';

const palette = generateColorPalette('#8b5cf6');
/*
{
  base: '#8b5cf6',
  hover: '#7c3aed',        // Versão hover
  light: '#ede9fe',        // Versão clara para backgrounds
  dark: '#6d28d9',         // Versão escura
  text: '#ffffff',         // Cor de texto com melhor contraste
  textOnLight: '#1f2937'   // Cor de texto para usar sobre fundo light
}
*/
```

### Funções de Utilidade

```typescript
import {
  isLightColor,
  getContrastingTextColor,
  lightenColor,
  darkenColor,
  hexToRgb,
  getLuminance,
  getContrastRatio
} from 'rharuow-ds/lib/color.utils';

// Verificar se uma cor é clara ou escura
const isLight = isLightColor('#8b5cf6'); // false

// Obter cor de texto com melhor contraste
const textColor = getContrastingTextColor('#8b5cf6'); // '#ffffff'

// Clarear uma cor em 20%
const lighter = lightenColor('#8b5cf6', 20); // '#a78bfa'

// Escurecer uma cor em 20%
const darker = darkenColor('#8b5cf6', 20); // '#6d28d9'

// Calcular luminância (0-1)
const rgb = hexToRgb('#8b5cf6');
const luminance = getLuminance(rgb.r, rgb.g, rgb.b); // ~0.3

// Calcular razão de contraste entre duas cores
const contrast = getContrastRatio(0.3, 1); // ~4.3
```

## 🎯 Como Funciona

### Cálculo Automático de Variações

O sistema usa a função CSS `color-mix()` (suportada em todos os navegadores modernos):

```css
:root {
  --primary: #2563eb;
  
  /* Hover: 10% mais escuro */
  --primary-hover: color-mix(in srgb, var(--primary) 90%, black);
  
  /* Light: 85% mais claro (ótimo para backgrounds) */
  --primary-light: color-mix(in srgb, var(--primary) 15%, white);
  
  /* Dark: 30% mais escuro */
  --primary-dark: color-mix(in srgb, var(--primary) 70%, black);
}
```

### Contraste Automático para Textos

A função `getContrastingTextColor()` usa o algoritmo WCAG 2.0:

1. Calcula a **luminância relativa** da cor de fundo (0-1)
2. Calcula a **razão de contraste** com branco e preto
3. Retorna a cor que oferece **maior contraste** (≥ 4.5:1 para texto normal)

Isso garante que textos sejam sempre legíveis, independente da cor de fundo.

### Ajuste Automático para Dark Mode

No dark mode, cores escuras são **automaticamente clareadas** para melhor visibilidade:

```css
[data-theme="dark"] {
  /* Hover: 20% mais claro (invertido do light mode) */
  --primary-hover: color-mix(in srgb, var(--primary) 80%, white);
  
  /* Light: 80% mais escuro (invertido do light mode) */
  --primary-light: color-mix(in srgb, var(--primary) 20%, black);
}
```

## 📊 Exemplos de Paletas

### Paleta Verde (Natureza)
```css
:root {
  --primary: #059669;   /* Verde esmeralda */
  --secondary: #0891b2; /* Cyan */
}
```

### Paleta Roxa (Premium)
```css
:root {
  --primary: #8b5cf6;   /* Roxo vibrante */
  --secondary: #ec4899; /* Rosa */
}
```

### Paleta Laranja (Energia)
```css
:root {
  --primary: #f59e0b;   /* Laranja */
  --secondary: #ef4444; /* Vermelho */
}
```

### Paleta Azul Corporativo
```css
:root {
  --primary: #0ea5e9;   /* Azul céu */
  --secondary: #6366f1; /* Índigo */
}
```

## 🔍 Componentes que Usam o Sistema

Todos os componentes principais agora usam as cores automáticas:

- **Button**: backgrounds, hovers e textos
- **Card**: header backgrounds, borders
- **Modal**: backgrounds e variantes (primary, secondary)
- **Input**: bordas de foco
- **Table**: headers, row hovers, seleções
- **Select/AsyncSelect**: opções selecionadas, hovers

## ⚠️ Notas Importantes

### Suporte de Navegadores

A função `color-mix()` é suportada em:
- ✅ Chrome 111+
- ✅ Firefox 113+
- ✅ Safari 16.2+
- ✅ Edge 111+

Para navegadores mais antigos, as cores padrão serão usadas.

### Quando NÃO Usar

Se você precisa de **controle total** sobre cada variação de cor, ainda pode definir manualmente:

```css
:root {
  --primary: #8b5cf6;
  --primary-hover: #7c3aed;        /* Defina manualmente se preferir */
  --primary-light: #ede9fe;
  --primary-text: #ffffff;
}
```

O sistema respeitará suas definições customizadas.

### Acessibilidade

O sistema garante contraste mínimo de **4.5:1** (WCAG AA) para textos normais. Se você precisar de **contraste maior** (7:1 para WCAG AAA), ajuste manualmente `--primary-text` e `--secondary-text`.

## 🎓 Recursos Adicionais

- [WCAG Color Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [CSS color-mix() Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix)
- [Color Theory for Designers](https://www.interaction-design.org/literature/topics/color-theory)

## 💡 Dicas de UX

1. **Use cores complementares**: Escolha primária e secundária que se complementem
2. **Teste em dark mode**: Sempre teste suas cores em ambos os temas
3. **Considere acessibilidade**: Use ferramentas como [Contrast Checker](https://webaim.org/resources/contrastchecker/)
4. **Mantenha consistência**: Use as mesmas cores em toda aplicação
5. **Menos é mais**: Não abuse de muitas cores, mantenha a paleta simples

## 🚀 Próximos Passos

1. Defina as cores da sua marca (`--primary` e `--secondary`)
2. Importe o CSS do DS
3. (Opcional) Use `applyThemeColors()` para mudanças dinâmicas
4. Aproveite os componentes com cores automáticas!
