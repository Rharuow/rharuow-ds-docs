import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { applyThemeColors, generateColorPalette } from "../lib/color.utils";

const meta = {
  title: "Utils/Auto Color System",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
# 🎨 Sistema de Cores Automático

Este sistema permite que você defina **apenas as cores primária e secundária** e todas as variações (hover, light, dark) 
e cores de texto com contraste adequado são calculadas automaticamente.

## Principais Recursos:
- ✅ **Defina apenas 2 cores**: \`--primary\` e \`--secondary\`
- ✅ **Cálculo automático** de todas as variações
- ✅ **Contraste automático** para textos (WCAG AA compliance)
- ✅ **Suporte a dark mode** com ajustes automáticos
- ✅ **Funções utilitárias** para uso em JavaScript/TypeScript

## Como Usar:

### CSS (Mais Simples):
\`\`\`css
:root {
  --primary: #8b5cf6;
  --secondary: #ec4899;
}
\`\`\`

### JavaScript/TypeScript:
\`\`\`typescript
import { applyThemeColors } from 'rharuow-ds/lib/color.utils';

applyThemeColors('#8b5cf6', '#ec4899');
\`\`\`
        `,
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Component to demonstrate the auto color system
function AutoColorDemo() {
  const [primaryColor, setPrimaryColor] = useState("#2563eb");
  const [secondaryColor, setSecondaryColor] = useState("#64748b");
  const [palette, setPalette] = useState(generateColorPalette(primaryColor));

  useEffect(() => {
    applyThemeColors(primaryColor, secondaryColor);
    setPalette(generateColorPalette(primaryColor));
  }, [primaryColor, secondaryColor]);

  const presetColors = [
    { name: "Azul Corporativo", primary: "#2563eb", secondary: "#64748b" },
    { name: "Roxo Premium", primary: "#8b5cf6", secondary: "#ec4899" },
    { name: "Verde Natureza", primary: "#059669", secondary: "#0891b2" },
    { name: "Laranja Energia", primary: "#f59e0b", secondary: "#ef4444" },
    { name: "Rosa Moderno", primary: "#ec4899", secondary: "#8b5cf6" },
    { name: "Azul Céu", primary: "#0ea5e9", secondary: "#6366f1" },
  ];

  return (
    <div className="space-y-8">
      {/* Color Pickers */}
      <Card className="p-6">
        <Card.Header>
          <h3 className="text-lg font-semibold">Seletor de Cores</h3>
        </Card.Header>
        <Card.Body className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Cor Primária
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-16 h-10 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded"
                  placeholder="#2563eb"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Cor Secundária
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="w-16 h-10 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded"
                  placeholder="#64748b"
                />
              </div>
            </div>
          </div>

          {/* Preset Colors */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Paletas Predefinidas:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {presetColors.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => {
                    setPrimaryColor(preset.primary);
                    setSecondaryColor(preset.secondary);
                  }}
                  className="px-3 py-2 text-sm border rounded hover:bg-gray-50 transition"
                >
                  <div className="flex gap-2 items-center">
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: preset.primary }}
                    />
                    <span>{preset.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Generated Palette Display */}
      <Card className="p-6">
        <Card.Header>
          <h3 className="text-lg font-semibold">Paleta Gerada Automaticamente</h3>
        </Card.Header>
        <Card.Body>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {(Object.keys(palette) as Array<keyof typeof palette>).map((key) => {
              const color = palette[key];
              return (
                <div key={key} className="text-center">
                  <div
                    className="w-full h-24 rounded-lg shadow-md mb-2 flex items-center justify-center"
                    style={{
                      backgroundColor: color,
                      color:
                        key === "text" || key === "textOnLight"
                          ? undefined
                          : palette.text,
                    }}
                  >
                    <span className="font-mono text-xs">{color}</span>
                  </div>
                  <p className="text-sm font-medium capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </p>
                </div>
              );
            })}
          </div>
        </Card.Body>
      </Card>

      {/* Component Examples */}
      <Card className="p-6">
        <Card.Header>
          <h3 className="text-lg font-semibold">Componentes com Cores Aplicadas</h3>
        </Card.Header>
        <Card.Body className="space-y-6">
          {/* Buttons */}
          <div>
            <h4 className="text-md font-semibold mb-3">Buttons</h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
          </div>

          {/* Card Example */}
          <div>
            <h4 className="text-md font-semibold mb-3">Card</h4>
            <Card variant="default" className="max-w-md">
              <Card.Header>
                <h5 className="font-semibold">Card com Cores Automáticas</h5>
              </Card.Header>
              <Card.Body>
                <p className="text-sm">
                  O header deste card usa automaticamente uma mistura da cor primária
                  com um fundo neutro.
                </p>
              </Card.Body>
              <Card.Footer>
                <Button variant="default" className="w-full">
                  Ação Principal
                </Button>
              </Card.Footer>
            </Card>
          </div>

          {/* Input Example */}
          <div>
            <h4 className="text-md font-semibold mb-3">Input</h4>
            <div className="max-w-md">
              <Input
                name="example"
                label="Campo de Texto"
                placeholder="Digite algo..."
              />
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* CSS Code Display */}
      <Card className="p-6">
        <Card.Header>
          <h3 className="text-lg font-semibold">Código CSS</h3>
        </Card.Header>
        <Card.Body>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
            {`/* Cole isto no seu CSS global */
:root {
  --primary: ${primaryColor};
  --secondary: ${secondaryColor};
}

/* O sistema automaticamente calcula:
   --primary-hover: color-mix(in srgb, var(--primary) 90%, black);
   --primary-light: color-mix(in srgb, var(--primary) 15%, white);
   --primary-dark: color-mix(in srgb, var(--primary) 70%, black);
   --primary-text: ${palette.text};
   
   E o mesmo para --secondary-*
*/`}
          </pre>
        </Card.Body>
      </Card>

      {/* TypeScript Code Display */}
      <Card className="p-6">
        <Card.Header>
          <h3 className="text-lg font-semibold">Código TypeScript</h3>
        </Card.Header>
        <Card.Body>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
            {`// Cole isto no seu App.tsx ou main.tsx
import { applyThemeColors } from 'rharuow-ds/lib/color.utils';

useEffect(() => {
  applyThemeColors('${primaryColor}', '${secondaryColor}');
}, []);`}
          </pre>
        </Card.Body>
      </Card>
    </div>
  );
}

export const Default: Story = {
  render: () => <AutoColorDemo />,
};

export const FunctionExamples: Story = {
  render: () => {
    const exampleColor = "#8b5cf6";
    const palette = generateColorPalette(exampleColor);

    return (
      <div className="space-y-6 max-w-4xl">
        <Card className="p-6">
          <Card.Header>
            <h3 className="text-lg font-semibold">Exemplos de Funções Utilitárias</h3>
          </Card.Header>
          <Card.Body className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">generateColorPalette()</h4>
              <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
                {`import { generateColorPalette } from 'rharuow-ds/lib/color.utils';

const palette = generateColorPalette('${exampleColor}');
// Resultado:
${JSON.stringify(palette, null, 2)}`}
              </pre>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Outras Funções Disponíveis</h4>
              <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
                {`import {
  isLightColor,
  getContrastingTextColor,
  lightenColor,
  darkenColor,
  hexToRgb,
  getLuminance,
  getContrastRatio
} from 'rharuow-ds/lib/color.utils';

// Verificar se uma cor é clara
isLightColor('${exampleColor}'); // false

// Obter cor de texto com melhor contraste
getContrastingTextColor('${exampleColor}'); // '#ffffff'

// Clarear 20%
lightenColor('${exampleColor}', 20);

// Escurecer 20%
darkenColor('${exampleColor}', 20);`}
              </pre>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  },
};
