import{b as h,F as f}from"./index.esm-BjoyFiYm.js";import{B as l}from"./Button-D0S_Uts4.js";import{I as N}from"./Input-Bb6KkQGB.js";import{R as E}from"./RadioGroup-DHr4PTWr.js";import{S as C}from"./Select-DLU16LoI.js";import{C as t}from"./Card-DpXfOk_M.js";import{C as a}from"./Table-D3EpvdRF.js";import{T as d}from"./Tooltip-jXp2GfhD.js";import{R as e}from"./iframe-DKIKpqtB.js";import"./utils-CuF-iVWQ.js";import"./index-hAGgyQPK.js";import"./index-meVzrAwI.js";const w=({children:o})=>{const r=h({defaultValues:{name:"",category:"",priority:"",status:""}});return e.createElement(f,{...r},e.createElement("div",{className:"max-w-4xl mx-auto p-6 space-y-6"},o))},M={title:"🎨 Theme Customization",decorators:[o=>e.createElement(w,null,e.createElement(o,null))],parameters:{layout:"padded",docs:{description:{component:`
# 🎨 Customização de Tema

O rharuow-ds utiliza um **sistema de cores baseado em brand colors** que permite criar uma experiência visual coesa em toda a aplicação.

## 🌈 Sistema de Cores

### Como funciona:

1. **Você define** as cores primárias e secundárias da sua marca
2. **Os componentes derivam** automaticamente suas cores dessas variáveis
3. **Tudo fica consistente** - Card, Table, Select, Tooltip, etc.

### Variáveis Principais:

\`\`\`css
:root {
  --primary: #2563eb;           /* Cor principal da marca */
  --primary-hover: #1d4ed8;     /* Hover da cor principal */
  --primary-light: #dbeafe;     /* Versão clara para fundos */
  
  --secondary: #64748b;         /* Cor secundária */
  --secondary-hover: #475569;   /* Hover da cor secundária */
  --secondary-light: #f1f5f9;   /* Versão clara para fundos */
}
\`\`\`

### Como os Componentes Usam:

- **Card Header**: Mescla 5% da cor primária com fundo neutro
- **Table Header**: Mescla 8% da cor primária com fundo neutro
- **Table Hover**: Mescla 10% da cor primária com fundo neutro
- **Select Selected**: Usa diretamente \`--primary-light\`

## 💡 Como Personalizar:

\`\`\`css
/* No seu index.css ou App.css */
@import 'rharuow-ds/dist/styles.css';

:root {
  --primary: #8b5cf6;           /* Roxo */
  --primary-hover: #7c3aed;
  --primary-light: #ede9fe;
  
  --secondary: #ec4899;         /* Rosa */
  --secondary-hover: #db2777;
  --secondary-light: #fce7f3;
}
\`\`\`

## 📚 Componentes que Respondem ao Tema:

- ✅ Card (header, body, footer)
- ✅ Table (header, rows, hover, selected)
- ✅ Select/AsyncSelect/MultiSelect (dropdown, hover, selected)
- ✅ Tooltip
- ✅ Button
- ✅ Input, Textarea, RadioGroup
        `}}}},n={render:()=>e.createElement(e.Fragment,null,e.createElement("div",{className:"text-center mb-8"},e.createElement("h2",{className:"text-3xl font-bold text-gray-800 mb-3"},"🎨 Theme Customization Demo"),e.createElement("p",{className:"text-gray-600 text-lg"},"Todos os componentes derivam suas cores das variáveis ",e.createElement("code",{className:"bg-blue-50 px-2 py-1 rounded text-blue-600"},"--primary")," e ",e.createElement("code",{className:"bg-purple-50 px-2 py-1 rounded text-purple-600"},"--secondary"))),e.createElement(t,{variant:"default"},e.createElement(t.Header,null,e.createElement("h3",{className:"text-lg font-semibold"},"Card Component"),e.createElement("p",{className:"text-sm text-gray-600"},"O header usa color-mix com 5% da cor primária")),e.createElement(t.Body,null,e.createElement("div",{className:"space-y-4"},e.createElement(N,{name:"name",label:"Your Name",placeholder:"Enter your name"}),e.createElement(C,{name:"category",label:"Category",options:[{label:"Work",value:"work"},{label:"Personal",value:"personal"},{label:"Study",value:"study"}]}),e.createElement(E,{name:"priority",label:"Priority Level",options:[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}],direction:"row",size:"md"}))),e.createElement(t.Footer,null,e.createElement("div",{className:"flex gap-3"},e.createElement(l,{variant:"default",className:"flex-1"},"Primary Action"),e.createElement(l,{variant:"outline",className:"flex-1"},"Secondary")))),e.createElement(t,{variant:"default"},e.createElement(t.Header,null,e.createElement("h3",{className:"text-lg font-semibold"},"Table Component"),e.createElement("p",{className:"text-sm text-gray-600"},"O header usa 8% da cor primária, hover 10%, selected usa --primary-light")),e.createElement(t.Body,null,e.createElement(a,{variant:"striped",size:"sm"},e.createElement(a.Header,null,e.createElement(a.Row,null,e.createElement(a.Cell,{as:"th"},"Name"),e.createElement(a.Cell,{as:"th"},"Category"),e.createElement(a.Cell,{as:"th"},"Status"))),e.createElement(a.Body,null,e.createElement(a.Row,{variant:"hover"},e.createElement(a.Cell,null,"John Doe"),e.createElement(a.Cell,null,"Development"),e.createElement(a.Cell,null,"Active")),e.createElement(a.Row,{variant:"selected"},e.createElement(a.Cell,null,"Jane Smith"),e.createElement(a.Cell,null,"Design"),e.createElement(a.Cell,null,"Active")),e.createElement(a.Row,{variant:"hover"},e.createElement(a.Cell,null,"Bob Johnson"),e.createElement(a.Cell,null,"Marketing"),e.createElement(a.Cell,null,"Inactive")))))),e.createElement("div",{className:"flex gap-4 justify-center"},e.createElement(d,{content:"Tooltip usa variáveis de tema",position:"top"},e.createElement(l,{variant:"default"},"Hover me (Top)")),e.createElement(d,{content:"Totalmente customizável via CSS",position:"bottom"},e.createElement(l,{variant:"outline"},"Hover me (Bottom)")))),parameters:{docs:{description:{story:"Demonstra Card, Table e Tooltip reagindo às variáveis de tema. Experimente mudar as cores primárias no seu CSS!"}}}},s={render:()=>{const o=[{name:"Blue (Default)",colors:{primary:"#2563eb",primaryHover:"#1d4ed8",primaryLight:"#dbeafe",secondary:"#64748b"}},{name:"Purple/Pink",colors:{primary:"#8b5cf6",primaryHover:"#7c3aed",primaryLight:"#ede9fe",secondary:"#ec4899"}},{name:"Green/Amber",colors:{primary:"#10b981",primaryHover:"#059669",primaryLight:"#d1fae5",secondary:"#f59e0b"}},{name:"Cyan",colors:{primary:"#0ea5e9",primaryHover:"#0284c7",primaryLight:"#e0f2fe",secondary:"#64748b"}},{name:"Red",colors:{primary:"#dc2626",primaryHover:"#b91c1c",primaryLight:"#fecaca",secondary:"#6b7280"}},{name:"Gray (Minimal)",colors:{primary:"#6b7280",primaryHover:"#4b5563",primaryLight:"#f3f4f6",secondary:"#9ca3af"}}];return e.createElement(e.Fragment,null,e.createElement("div",{className:"text-center mb-6"},e.createElement("h3",{className:"text-2xl font-bold text-gray-800 mb-2"},"🎨 Paletas de Cores Sugeridas"),e.createElement("p",{className:"text-gray-600"},"Copie e cole no seu CSS para aplicar esses temas")),e.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},o.map(r=>e.createElement("div",{key:r.name,className:"p-6 border-2 rounded-xl shadow-sm hover:shadow-md transition-shadow",style:{borderColor:r.colors.primary,backgroundColor:r.colors.primaryLight}},e.createElement("div",{className:"flex items-center gap-3 mb-4"},e.createElement("div",{className:"w-12 h-12 rounded-lg shadow-md",style:{backgroundColor:r.colors.primary}}),e.createElement("div",null,e.createElement("h4",{className:"font-bold text-gray-800"},r.name),e.createElement("p",{className:"text-xs text-gray-600"},"Brand Colors"))),e.createElement("div",{className:"space-y-2 text-xs font-mono"},e.createElement("div",{className:"flex items-center gap-2"},e.createElement("div",{className:"w-6 h-6 rounded border border-gray-300",style:{backgroundColor:r.colors.primary}}),e.createElement("div",null,e.createElement("div",{className:"text-gray-700 font-semibold"},"Primary"),e.createElement("div",{className:"text-gray-500"},r.colors.primary))),e.createElement("div",{className:"flex items-center gap-2"},e.createElement("div",{className:"w-6 h-6 rounded border border-gray-300",style:{backgroundColor:r.colors.primaryLight}}),e.createElement("div",null,e.createElement("div",{className:"text-gray-700 font-semibold"},"Light"),e.createElement("div",{className:"text-gray-500"},r.colors.primaryLight))),e.createElement("div",{className:"flex items-center gap-2"},e.createElement("div",{className:"w-6 h-6 rounded border border-gray-300",style:{backgroundColor:r.colors.secondary}}),e.createElement("div",null,e.createElement("div",{className:"text-gray-700 font-semibold"},"Secondary"),e.createElement("div",{className:"text-gray-500"},r.colors.secondary)))),e.createElement("div",{className:"mt-4 p-3 bg-white/80 rounded text-xs"},e.createElement("pre",{className:"text-gray-700 overflow-x-auto"},`:root {
  --primary: ${r.colors.primary};
  --primary-hover: ${r.colors.primaryHover};
  --primary-light: ${r.colors.primaryLight};
  --secondary: ${r.colors.secondary};
}`))))))},parameters:{docs:{description:{story:"Paletas de cores sugeridas com códigos CSS prontos para copiar."}}}},m={render:()=>e.createElement("div",{className:"max-w-3xl mx-auto"},e.createElement("div",{className:"text-center mb-8"},e.createElement("h3",{className:"text-3xl font-bold text-gray-800 mb-3"},"📚 Guia Completo de Customização"),e.createElement("p",{className:"text-gray-600"},"Aprenda a personalizar o tema do Design System")),e.createElement("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl mb-6 shadow-md"},e.createElement("h4",{className:"text-blue-900 font-bold text-xl mb-4 flex items-center gap-2"},e.createElement("span",{className:"bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm"},"1"),"CSS Global (Recomendado)"),e.createElement("p",{className:"text-blue-800 mb-4"},"No seu ",e.createElement("code",{className:"bg-blue-200 px-2 py-1 rounded"},"index.css")," ou ",e.createElement("code",{className:"bg-blue-200 px-2 py-1 rounded"},"App.css"),":"),e.createElement("pre",{className:"bg-blue-900 text-blue-50 p-4 rounded-lg overflow-auto text-sm font-mono"},`/* Importar o DS primeiro */
@import 'rharuow-ds/dist/styles.css';

/* Depois sobrescrever as cores da marca */
:root {
  --primary: #8b5cf6;           /* Roxo */
  --primary-hover: #7c3aed;
  --primary-light: #ede9fe;
  
  --secondary: #ec4899;         /* Rosa */
  --secondary-hover: #db2777;
  --secondary-light: #fce7f3;
}

/* Para dark mode */
[data-theme="dark"], .dark {
  --primary: #a78bfa;
  --primary-light: #4c1d95;
}`)),e.createElement("div",{className:"bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl mb-6 shadow-md"},e.createElement("h4",{className:"text-green-900 font-bold text-xl mb-4 flex items-center gap-2"},e.createElement("span",{className:"bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm"},"2"),"JavaScript/React"),e.createElement("p",{className:"text-green-800 mb-4"},"Defina as cores dinamicamente no seu componente:"),e.createElement("pre",{className:"bg-green-900 text-green-50 p-4 rounded-lg overflow-auto text-sm font-mono"},`// App.tsx ou main.tsx
useEffect(() => {
  const root = document.documentElement;
  
  root.style.setProperty('--primary', '#f59e0b');
  root.style.setProperty('--primary-hover', '#d97706');
  root.style.setProperty('--primary-light', '#fef3c7');
  
  root.style.setProperty('--secondary', '#6366f1');
  root.style.setProperty('--secondary-hover', '#4f46e5');
  root.style.setProperty('--secondary-light', '#e0e7ff');
}, []);`)),e.createElement("div",{className:"bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl mb-6 shadow-md"},e.createElement("h4",{className:"text-purple-900 font-bold text-xl mb-4 flex items-center gap-2"},e.createElement("span",{className:"bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm"},"3"),"Customização Avançada"),e.createElement("p",{className:"text-purple-800 mb-4"},"Para controle total, sobrescreva variáveis específicas:"),e.createElement("pre",{className:"bg-purple-900 text-purple-50 p-4 rounded-lg overflow-auto text-sm font-mono"},`:root {
  /* Cores base */
  --primary: #8b5cf6;
  
  /* Customização específica de Card */
  --card-header-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --card-header-border: #8b5cf6;
  
  /* Customização específica de Table */
  --table-header-bg: #f3e8ff;
  --table-row-selected: #ede9fe;
  --table-row-hover: #ddd6fe;
  
  /* Customização de Select */
  --select-dropdown-selected: #ede9fe;
  --select-dropdown-hover: #ddd6fe;
}`)),e.createElement("div",{className:"bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-md"},e.createElement("h4",{className:"text-orange-900 font-bold text-xl mb-4"},"📋 Todas as Variáveis Disponíveis"),e.createElement("div",{className:"grid md:grid-cols-2 gap-4"},e.createElement("div",{className:"bg-white/80 p-4 rounded-lg"},e.createElement("h5",{className:"font-semibold text-orange-800 mb-2"},"Brand Colors"),e.createElement("ul",{className:"text-sm text-orange-700 space-y-1 font-mono"},e.createElement("li",null,"--primary"),e.createElement("li",null,"--primary-hover"),e.createElement("li",null,"--primary-light"),e.createElement("li",null,"--secondary"),e.createElement("li",null,"--secondary-hover"),e.createElement("li",null,"--secondary-light"))),e.createElement("div",{className:"bg-white/80 p-4 rounded-lg"},e.createElement("h5",{className:"font-semibold text-orange-800 mb-2"},"Card"),e.createElement("ul",{className:"text-sm text-orange-700 space-y-1 font-mono"},e.createElement("li",null,"--card-bg"),e.createElement("li",null,"--card-border"),e.createElement("li",null,"--card-header-bg"),e.createElement("li",null,"--card-header-border"),e.createElement("li",null,"--card-footer-bg"))),e.createElement("div",{className:"bg-white/80 p-4 rounded-lg"},e.createElement("h5",{className:"font-semibold text-orange-800 mb-2"},"Table"),e.createElement("ul",{className:"text-sm text-orange-700 space-y-1 font-mono"},e.createElement("li",null,"--table-bg"),e.createElement("li",null,"--table-header-bg"),e.createElement("li",null,"--table-row-hover"),e.createElement("li",null,"--table-row-selected"),e.createElement("li",null,"--table-border"))),e.createElement("div",{className:"bg-white/80 p-4 rounded-lg"},e.createElement("h5",{className:"font-semibold text-orange-800 mb-2"},"Select"),e.createElement("ul",{className:"text-sm text-orange-700 space-y-1 font-mono"},e.createElement("li",null,"--select-dropdown-bg"),e.createElement("li",null,"--select-dropdown-hover"),e.createElement("li",null,"--select-dropdown-selected"),e.createElement("li",null,"--select-dropdown-border"))))),e.createElement("div",{className:"mt-8 bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-xl"},e.createElement("h4",{className:"text-gray-900 font-bold text-lg mb-3"},"💡 Dicas de UX"),e.createElement("ul",{className:"text-gray-700 space-y-2 text-sm"},e.createElement("li",null,"✅ ",e.createElement("strong",null,"Consistência:")," Use a mesma paleta em todo o app"),e.createElement("li",null,"✅ ",e.createElement("strong",null,"Contraste:")," Garanta contraste suficiente (WCAG AAA: 7:1)"),e.createElement("li",null,"✅ ",e.createElement("strong",null,"Hierarquia:")," A cor primária deve ser dominante"),e.createElement("li",null,"✅ ",e.createElement("strong",null,"Teste Dark Mode:")," Sempre teste suas cores no modo escuro"),e.createElement("li",null,"✅ ",e.createElement("strong",null,"Ferramentas:")," Use ",e.createElement("a",{href:"https://coolors.co/",className:"text-blue-600 underline"},"Coolors")," para gerar paletas")))),parameters:{docs:{description:{story:"Guia completo com todos os métodos de customização e variáveis disponíveis."}}}};var c,i,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          🎨 Theme Customization Demo
        </h2>
        <p className="text-gray-600 text-lg">
          Todos os componentes derivam suas cores das variáveis <code className="bg-blue-50 px-2 py-1 rounded text-blue-600">--primary</code> e <code className="bg-purple-50 px-2 py-1 rounded text-purple-600">--secondary</code>
        </p>
      </div>

      {/* Card Demo */}
      <Card variant="default">
        <Card.Header>
          <h3 className="text-lg font-semibold">Card Component</h3>
          <p className="text-sm text-gray-600">O header usa color-mix com 5% da cor primária</p>
        </Card.Header>
        <Card.Body>
          <div className="space-y-4">
            <Input name="name" label="Your Name" placeholder="Enter your name" />

            <Select name="category" label="Category" options={[{
            label: "Work",
            value: "work"
          }, {
            label: "Personal",
            value: "personal"
          }, {
            label: "Study",
            value: "study"
          }]} />

            <RadioGroup name="priority" label="Priority Level" options={[{
            label: "Low",
            value: "low"
          }, {
            label: "Medium",
            value: "medium"
          }, {
            label: "High",
            value: "high"
          }]} direction="row" size="md" />
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="flex gap-3">
            <Button variant="default" className="flex-1">
              Primary Action
            </Button>
            <Button variant="outline" className="flex-1">
              Secondary
            </Button>
          </div>
        </Card.Footer>
      </Card>

      {/* Table Demo */}
      <Card variant="default">
        <Card.Header>
          <h3 className="text-lg font-semibold">Table Component</h3>
          <p className="text-sm text-gray-600">O header usa 8% da cor primária, hover 10%, selected usa --primary-light</p>
        </Card.Header>
        <Card.Body>
          <Table variant="striped" size="sm">
            <Table.Header>
              <Table.Row>
                <Table.Cell as="th">Name</Table.Cell>
                <Table.Cell as="th">Category</Table.Cell>
                <Table.Cell as="th">Status</Table.Cell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row variant="hover">
                <Table.Cell>John Doe</Table.Cell>
                <Table.Cell>Development</Table.Cell>
                <Table.Cell>Active</Table.Cell>
              </Table.Row>
              <Table.Row variant="selected">
                <Table.Cell>Jane Smith</Table.Cell>
                <Table.Cell>Design</Table.Cell>
                <Table.Cell>Active</Table.Cell>
              </Table.Row>
              <Table.Row variant="hover">
                <Table.Cell>Bob Johnson</Table.Cell>
                <Table.Cell>Marketing</Table.Cell>
                <Table.Cell>Inactive</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card.Body>
      </Card>

      {/* Tooltip Demo */}
      <div className="flex gap-4 justify-center">
        <Tooltip content="Tooltip usa variáveis de tema" position="top">
          <Button variant="default">Hover me (Top)</Button>
        </Tooltip>
        <Tooltip content="Totalmente customizável via CSS" position="bottom">
          <Button variant="outline">Hover me (Bottom)</Button>
        </Tooltip>
      </div>
    </>,
  parameters: {
    docs: {
      description: {
        story: "Demonstra Card, Table e Tooltip reagindo às variáveis de tema. Experimente mudar as cores primárias no seu CSS!"
      }
    }
  }
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,b,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const themes = [{
      name: "Blue (Default)",
      colors: {
        primary: "#2563eb",
        primaryHover: "#1d4ed8",
        primaryLight: "#dbeafe",
        secondary: "#64748b"
      }
    }, {
      name: "Purple/Pink",
      colors: {
        primary: "#8b5cf6",
        primaryHover: "#7c3aed",
        primaryLight: "#ede9fe",
        secondary: "#ec4899"
      }
    }, {
      name: "Green/Amber",
      colors: {
        primary: "#10b981",
        primaryHover: "#059669",
        primaryLight: "#d1fae5",
        secondary: "#f59e0b"
      }
    }, {
      name: "Cyan",
      colors: {
        primary: "#0ea5e9",
        primaryHover: "#0284c7",
        primaryLight: "#e0f2fe",
        secondary: "#64748b"
      }
    }, {
      name: "Red",
      colors: {
        primary: "#dc2626",
        primaryHover: "#b91c1c",
        primaryLight: "#fecaca",
        secondary: "#6b7280"
      }
    }, {
      name: "Gray (Minimal)",
      colors: {
        primary: "#6b7280",
        primaryHover: "#4b5563",
        primaryLight: "#f3f4f6",
        secondary: "#9ca3af"
      }
    }];
    return <>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            🎨 Paletas de Cores Sugeridas
          </h3>
          <p className="text-gray-600">
            Copie e cole no seu CSS para aplicar esses temas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map(theme => <div key={theme.name} className="p-6 border-2 rounded-xl shadow-sm hover:shadow-md transition-shadow" style={{
          borderColor: theme.colors.primary,
          backgroundColor: theme.colors.primaryLight
        }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg shadow-md" style={{
              backgroundColor: theme.colors.primary
            }} />
                <div>
                  <h4 className="font-bold text-gray-800">{theme.name}</h4>
                  <p className="text-xs text-gray-600">Brand Colors</p>
                </div>
              </div>
              
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded border border-gray-300" style={{
                backgroundColor: theme.colors.primary
              }} />
                  <div>
                    <div className="text-gray-700 font-semibold">Primary</div>
                    <div className="text-gray-500">{theme.colors.primary}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded border border-gray-300" style={{
                backgroundColor: theme.colors.primaryLight
              }} />
                  <div>
                    <div className="text-gray-700 font-semibold">Light</div>
                    <div className="text-gray-500">{theme.colors.primaryLight}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded border border-gray-300" style={{
                backgroundColor: theme.colors.secondary
              }} />
                  <div>
                    <div className="text-gray-700 font-semibold">Secondary</div>
                    <div className="text-gray-500">{theme.colors.secondary}</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white/80 rounded text-xs">
                <pre className="text-gray-700 overflow-x-auto">
              {\`:root {
  --primary: \${theme.colors.primary};
  --primary-hover: \${theme.colors.primaryHover};
  --primary-light: \${theme.colors.primaryLight};
  --secondary: \${theme.colors.secondary};
}\`}
                </pre>
              </div>
            </div>)}
        </div>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: "Paletas de cores sugeridas com códigos CSS prontos para copiar."
      }
    }
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,v,x;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-3">
          📚 Guia Completo de Customização
        </h3>
        <p className="text-gray-600">
          Aprenda a personalizar o tema do Design System
        </p>
      </div>

      {/* Método 1 */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl mb-6 shadow-md">
        <h4 className="text-blue-900 font-bold text-xl mb-4 flex items-center gap-2">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
          CSS Global (Recomendado)
        </h4>
        <p className="text-blue-800 mb-4">
          No seu <code className="bg-blue-200 px-2 py-1 rounded">index.css</code> ou <code className="bg-blue-200 px-2 py-1 rounded">App.css</code>:
        </p>
        <pre className="bg-blue-900 text-blue-50 p-4 rounded-lg overflow-auto text-sm font-mono">
        {\`/* Importar o DS primeiro */
@import 'rharuow-ds/dist/styles.css';

/* Depois sobrescrever as cores da marca */
:root {
  --primary: #8b5cf6;           /* Roxo */
  --primary-hover: #7c3aed;
  --primary-light: #ede9fe;
  
  --secondary: #ec4899;         /* Rosa */
  --secondary-hover: #db2777;
  --secondary-light: #fce7f3;
}

/* Para dark mode */
[data-theme="dark"], .dark {
  --primary: #a78bfa;
  --primary-light: #4c1d95;
}\`}
        </pre>
      </div>

      {/* Método 2 */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl mb-6 shadow-md">
        <h4 className="text-green-900 font-bold text-xl mb-4 flex items-center gap-2">
          <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
          JavaScript/React
        </h4>
        <p className="text-green-800 mb-4">
          Defina as cores dinamicamente no seu componente:
        </p>
        <pre className="bg-green-900 text-green-50 p-4 rounded-lg overflow-auto text-sm font-mono">
        {\`// App.tsx ou main.tsx
useEffect(() => {
  const root = document.documentElement;
  
  root.style.setProperty('--primary', '#f59e0b');
  root.style.setProperty('--primary-hover', '#d97706');
  root.style.setProperty('--primary-light', '#fef3c7');
  
  root.style.setProperty('--secondary', '#6366f1');
  root.style.setProperty('--secondary-hover', '#4f46e5');
  root.style.setProperty('--secondary-light', '#e0e7ff');
}, []);\`}
        </pre>
      </div>

      {/* Customização Avançada */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl mb-6 shadow-md">
        <h4 className="text-purple-900 font-bold text-xl mb-4 flex items-center gap-2">
          <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
          Customização Avançada
        </h4>
        <p className="text-purple-800 mb-4">
          Para controle total, sobrescreva variáveis específicas:
        </p>
        <pre className="bg-purple-900 text-purple-50 p-4 rounded-lg overflow-auto text-sm font-mono">
        {\`:root {
  /* Cores base */
  --primary: #8b5cf6;
  
  /* Customização específica de Card */
  --card-header-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --card-header-border: #8b5cf6;
  
  /* Customização específica de Table */
  --table-header-bg: #f3e8ff;
  --table-row-selected: #ede9fe;
  --table-row-hover: #ddd6fe;
  
  /* Customização de Select */
  --select-dropdown-selected: #ede9fe;
  --select-dropdown-hover: #ddd6fe;
}\`}
        </pre>
      </div>

      {/* Variáveis Disponíveis */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-md">
        <h4 className="text-orange-900 font-bold text-xl mb-4">
          📋 Todas as Variáveis Disponíveis
        </h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/80 p-4 rounded-lg">
            <h5 className="font-semibold text-orange-800 mb-2">Brand Colors</h5>
            <ul className="text-sm text-orange-700 space-y-1 font-mono">
              <li>--primary</li>
              <li>--primary-hover</li>
              <li>--primary-light</li>
              <li>--secondary</li>
              <li>--secondary-hover</li>
              <li>--secondary-light</li>
            </ul>
          </div>
          
          <div className="bg-white/80 p-4 rounded-lg">
            <h5 className="font-semibold text-orange-800 mb-2">Card</h5>
            <ul className="text-sm text-orange-700 space-y-1 font-mono">
              <li>--card-bg</li>
              <li>--card-border</li>
              <li>--card-header-bg</li>
              <li>--card-header-border</li>
              <li>--card-footer-bg</li>
            </ul>
          </div>
          
          <div className="bg-white/80 p-4 rounded-lg">
            <h5 className="font-semibold text-orange-800 mb-2">Table</h5>
            <ul className="text-sm text-orange-700 space-y-1 font-mono">
              <li>--table-bg</li>
              <li>--table-header-bg</li>
              <li>--table-row-hover</li>
              <li>--table-row-selected</li>
              <li>--table-border</li>
            </ul>
          </div>
          
          <div className="bg-white/80 p-4 rounded-lg">
            <h5 className="font-semibold text-orange-800 mb-2">Select</h5>
            <ul className="text-sm text-orange-700 space-y-1 font-mono">
              <li>--select-dropdown-bg</li>
              <li>--select-dropdown-hover</li>
              <li>--select-dropdown-selected</li>
              <li>--select-dropdown-border</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dicas */}
      <div className="mt-8 bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-xl">
        <h4 className="text-gray-900 font-bold text-lg mb-3">💡 Dicas de UX</h4>
        <ul className="text-gray-700 space-y-2 text-sm">
          <li>✅ <strong>Consistência:</strong> Use a mesma paleta em todo o app</li>
          <li>✅ <strong>Contraste:</strong> Garanta contraste suficiente (WCAG AAA: 7:1)</li>
          <li>✅ <strong>Hierarquia:</strong> A cor primária deve ser dominante</li>
          <li>✅ <strong>Teste Dark Mode:</strong> Sempre teste suas cores no modo escuro</li>
          <li>✅ <strong>Ferramentas:</strong> Use <a href="https://coolors.co/" className="text-blue-600 underline">Coolors</a> para gerar paletas</li>
        </ul>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Guia completo com todos os métodos de customização e variáveis disponíveis."
      }
    }
  }
}`,...(x=(v=m.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const F=["ComponentShowcase","ThemePresets","CustomThemeGuide"];export{n as ComponentShowcase,m as CustomThemeGuide,s as ThemePresets,F as __namedExportsOrder,M as default};
