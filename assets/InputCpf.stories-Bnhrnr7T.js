import{R as e}from"./iframe-D80oVCNt.js";import{I as n}from"./Input-CAcAUCQM.js";import{b as f,F as E}from"./index.esm-2pgJAuOa.js";import"./utils-CuF-iVWQ.js";const x={title:"Components/Input/CPF",component:n,parameters:{layout:"centered"},tags:["autodocs"]},b=a=>{const s=f({mode:"onChange",defaultValues:{[a.name]:""}}),u=i=>{alert(JSON.stringify(i,null,2))};return e.createElement(E,{...s},e.createElement("form",{onSubmit:s.handleSubmit(u),className:"w-96 space-y-4"},e.createElement(n,{...a}),e.createElement("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"},"Validar CPF"),e.createElement("div",{className:"text-sm text-gray-600 mt-4"},e.createElement("p",{className:"font-semibold mb-2"},"Teste com CPFs válidos:"),e.createElement("ul",{className:"list-disc list-inside space-y-1"},e.createElement("li",null,"123.456.789-09"),e.createElement("li",null,"111.444.777-35"),e.createElement("li",null,"123.456.789-10")))))},g=a=>e.createElement("div",{className:"w-96 space-y-4"},e.createElement(n,{...a}),e.createElement("p",{className:"text-sm text-gray-600"},"Este exemplo mostra o Input com máscara de CPF mas sem validação automática (sem react-hook-form). A máscara ainda é aplicada, mas a validação completa só funciona com react-hook-form.")),t={args:{name:"cpf",label:"CPF",cpf:!0},render:a=>e.createElement(b,{...a})},r={args:{name:"cpf",label:"CPF (Standalone - sem validação)",cpf:!0},render:a=>e.createElement(g,{...a})};var m,o,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'cpf',
    label: 'CPF',
    cpf: true
  },
  render: args => <FormWrapper {...args} />
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'cpf',
    label: 'CPF (Standalone - sem validação)',
    cpf: true
  },
  render: args => <StandaloneWrapper {...args} />
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const y=["Default","Standalone"];export{t as Default,r as Standalone,y as __namedExportsOrder,x as default};
