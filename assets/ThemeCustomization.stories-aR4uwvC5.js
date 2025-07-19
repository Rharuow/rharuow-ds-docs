import{j as e}from"./utils-DLq8OvKD.js";import{b as v,F as y}from"./index.esm-XPhABQqt.js";import{B as t}from"./Button-vGQ9ZFtK.js";import{I as g}from"./Input-CmspeYyk.js";import{R as l}from"./RadioGroup-BPQjaNaU.js";import{S as f}from"./Select-kDn-kOE7.js";import"./iframe-CMkvJYxT.js";const j=({children:r})=>{const o=v({defaultValues:{name:"",category:"",priority:"",status:""}});return e.jsx(y,{...o,children:e.jsxs("div",{className:"max-w-md mx-auto p-6 space-y-4",children:[r,e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-2",children:"Form Values:"}),e.jsx("pre",{className:"text-xs text-gray-600 overflow-auto",children:JSON.stringify(o.watch(),null,2)})]})]})})},z={title:"🎨 Theme Customization",decorators:[r=>e.jsx(j,{children:e.jsx(r,{})})],parameters:{layout:"padded",docs:{description:{component:`
# 🎨 Customização de Tema

Use a **toolbar** no topo da página para alterar o tema em tempo real!

## Como usar:

1. **🔵 Tema Pré-definido**: Escolha um dos temas prontos (Blue, Red, Green, etc.)
2. **🎨 Tema Custom**: Selecione "Custom" e use os color pickers para definir suas próprias cores

## Variáveis CSS aplicadas:

- \`--primary\`: Cor principal dos componentes
- \`--primary-hover\`: Cor de hover/background
- \`--primary-text\`: Cor do texto em backgrounds primários

## Componentes que respondem ao tema:

- Todos os componentes do design system respeitam essas variáveis
- Bordas, backgrounds, textos e estados de hover se adaptam automaticamente
        `}}}},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"🎨 Theme Customization Demo"}),e.jsx("p",{className:"text-gray-600",children:"Use the toolbar above to change themes and see live updates!"})]}),e.jsx(g,{name:"name",label:"Your Name",placeholder:"Enter your name"}),e.jsx(f,{name:"category",label:"Category",options:[{label:"Work",value:"work"},{label:"Personal",value:"personal"},{label:"Study",value:"study"}]}),e.jsx(l,{name:"priority",label:"Priority Level",options:[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}],direction:"row",size:"md"}),e.jsx(l,{name:"status",label:"Status",options:[{label:"Todo",value:"todo"},{label:"In Progress",value:"progress"},{label:"Done",value:"done"}],direction:"col",size:"sm"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(t,{variant:"default",className:"flex-1",children:"Primary Action"}),e.jsx(t,{variant:"outline",className:"flex-1",children:"Secondary"})]})]}),parameters:{docs:{description:{story:"Demonstra todos os componentes principais reagindo às mudanças de tema em tempo real."}}}},s={render:()=>{const r=[{name:"Blue",colors:{primary:"#2563eb",hover:"#dbeafe"}},{name:"Red",colors:{primary:"#dc2626",hover:"#fecaca"}},{name:"Green",colors:{primary:"#059669",hover:"#d1fae5"}},{name:"Purple",colors:{primary:"#7c3aed",hover:"#e9d5ff"}},{name:"Orange",colors:{primary:"#ea580c",hover:"#fed7aa"}},{name:"Cyan",colors:{primary:"#0891b2",hover:"#cffafe"}}];return e.jsx("div",{className:"grid grid-cols-2 gap-4",children:r.map(o=>e.jsxs("div",{className:"p-4 border rounded-lg text-center",style:{borderColor:o.colors.primary,backgroundColor:o.colors.hover},children:[e.jsx("div",{className:"w-8 h-8 rounded-full mx-auto mb-2",style:{backgroundColor:o.colors.primary}}),e.jsx("h4",{className:"font-semibold",style:{color:o.colors.primary},children:o.name}),e.jsxs("div",{className:"text-xs text-gray-600 mt-1",children:[e.jsx("div",{children:o.colors.primary}),e.jsx("div",{children:o.colors.hover})]})]},o.name))})},parameters:{docs:{description:{story:"Paleta de cores dos temas pré-definidos disponíveis."}}}},n={render:()=>e.jsxs("div",{className:"prose prose-sm max-w-none",children:[e.jsx("h3",{children:"🎨 Como usar temas customizados"}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg mb-4",children:[e.jsx("h4",{className:"text-blue-800 font-semibold mb-2",children:"No Storybook:"}),e.jsxs("ol",{className:"text-blue-700 text-sm space-y-1",children:[e.jsx("li",{children:'1. Selecione "Custom" no seletor de tema'}),e.jsx("li",{children:"2. Use os color pickers na toolbar para definir cores"}),e.jsx("li",{children:"3. Veja as mudanças aplicadas em tempo real"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg mb-4",children:[e.jsx("h4",{className:"text-green-800 font-semibold mb-2",children:"Em sua aplicação:"}),e.jsx("pre",{className:"text-green-700 text-xs bg-green-100 p-2 rounded overflow-auto",children:`:root {
  --primary: #your-color;
  --primary-hover: #your-hover-color;
  --primary-text: #fff;
}`})]}),e.jsxs("div",{className:"bg-orange-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"text-orange-800 font-semibold mb-2",children:"CSS Variables disponíveis:"}),e.jsxs("ul",{className:"text-orange-700 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"--primary"}),": Cor principal (bordas, texto ativo)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--primary-hover"}),": Cor de hover/background"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--primary-text"}),": Cor do texto em backgrounds primários"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--input-bg"}),": Background dos inputs"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--input-text"}),": Cor do texto dos inputs"]})]})]})]}),parameters:{docs:{description:{story:"Guia completo para implementar temas customizados em sua aplicação."}}}};var i,d,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          🎨 Theme Customization Demo
        </h2>
        <p className="text-gray-600">
          Use the toolbar above to change themes and see live updates!
        </p>
      </div>

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

      <RadioGroup name="status" label="Status" options={[{
      label: "Todo",
      value: "todo"
    }, {
      label: "In Progress",
      value: "progress"
    }, {
      label: "Done",
      value: "done"
    }]} direction="col" size="sm" />

      <div className="flex gap-3">
        <Button variant="default" className="flex-1">
          Primary Action
        </Button>
        <Button variant="outline" className="flex-1">
          Secondary
        </Button>
      </div>
    </>,
  parameters: {
    docs: {
      description: {
        story: "Demonstra todos os componentes principais reagindo às mudanças de tema em tempo real."
      }
    }
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const themes = [{
      name: "Blue",
      colors: {
        primary: "#2563eb",
        hover: "#dbeafe"
      }
    }, {
      name: "Red",
      colors: {
        primary: "#dc2626",
        hover: "#fecaca"
      }
    }, {
      name: "Green",
      colors: {
        primary: "#059669",
        hover: "#d1fae5"
      }
    }, {
      name: "Purple",
      colors: {
        primary: "#7c3aed",
        hover: "#e9d5ff"
      }
    }, {
      name: "Orange",
      colors: {
        primary: "#ea580c",
        hover: "#fed7aa"
      }
    }, {
      name: "Cyan",
      colors: {
        primary: "#0891b2",
        hover: "#cffafe"
      }
    }];
    return <div className="grid grid-cols-2 gap-4">
        {themes.map(theme => <div key={theme.name} className="p-4 border rounded-lg text-center" style={{
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.hover
      }}>
            <div className="w-8 h-8 rounded-full mx-auto mb-2" style={{
          backgroundColor: theme.colors.primary
        }} />
            <h4 className="font-semibold" style={{
          color: theme.colors.primary
        }}>
              {theme.name}
            </h4>
            <div className="text-xs text-gray-600 mt-1">
              <div>{theme.colors.primary}</div>
              <div>{theme.colors.hover}</div>
            </div>
          </div>)}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Paleta de cores dos temas pré-definidos disponíveis."
      }
    }
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,x,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="prose prose-sm max-w-none">
      <h3>🎨 Como usar temas customizados</h3>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <h4 className="text-blue-800 font-semibold mb-2">No Storybook:</h4>
        <ol className="text-blue-700 text-sm space-y-1">
          <li>1. Selecione "Custom" no seletor de tema</li>
          <li>2. Use os color pickers na toolbar para definir cores</li>
          <li>3. Veja as mudanças aplicadas em tempo real</li>
        </ol>
      </div>

      <div className="bg-green-50 p-4 rounded-lg mb-4">
        <h4 className="text-green-800 font-semibold mb-2">Em sua aplicação:</h4>
        <pre className="text-green-700 text-xs bg-green-100 p-2 rounded overflow-auto">
        {\`:root {
  --primary: #your-color;
  --primary-hover: #your-hover-color;
  --primary-text: #fff;
}\`}
        </pre>
      </div>

      <div className="bg-orange-50 p-4 rounded-lg">
        <h4 className="text-orange-800 font-semibold mb-2">CSS Variables disponíveis:</h4>
        <ul className="text-orange-700 text-sm space-y-1">
          <li><code>--primary</code>: Cor principal (bordas, texto ativo)</li>
          <li><code>--primary-hover</code>: Cor de hover/background</li>
          <li><code>--primary-text</code>: Cor do texto em backgrounds primários</li>
          <li><code>--input-bg</code>: Background dos inputs</li>
          <li><code>--input-text</code>: Cor do texto dos inputs</li>
        </ul>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Guia completo para implementar temas customizados em sua aplicação."
      }
    }
  }
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const B=["ComponentShowcase","ThemePresets","CustomThemeGuide"];export{a as ComponentShowcase,n as CustomThemeGuide,s as ThemePresets,B as __namedExportsOrder,z as default};
