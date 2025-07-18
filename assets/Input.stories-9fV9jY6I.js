import{j as e}from"./utils-DLq8OvKD.js";import{I as o}from"./Input-C2VcUyfn.js";import{b as c,F as i}from"./index.esm-p54QvZLk.js";import"./iframe-Dgkcj9Oc.js";const z={title:"Components/Input",component:o,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url"],description:"Tipo do input",defaultValue:"text"},label:{control:"text",description:"Label do input (fica flutuante)"},placeholder:{control:"text",description:"Placeholder do input"},disabled:{control:"boolean",description:"Input desabilitado",defaultValue:!1},name:{control:"text",description:"Nome do campo para React Hook Form",defaultValue:"inputField"}},parameters:{docs:{description:{component:`
Um componente de Input moderno com label flutuante e integração completa com React Hook Form.

## Características:
- 📝 Label flutuante automático
- 🔒 Suporte a password com ícone de mostrar/esconder
- 🎨 Customização via CSS Variables
- ♿ Acessibilidade completa
- 🔗 Integração nativa com React Hook Form
        `}}}},w=a=>{const l=c();return e.jsx(i,{...l,children:e.jsx("div",{style:{maxWidth:"320px"},children:e.jsx(o,{...a})})})},n={render:w,args:{name:"email",type:"text",label:"E-mail",placeholder:"Digite seu e-mail"},parameters:{docs:{description:{story:"Input básico com label flutuante."}}}},t={render:w,args:{name:"password",type:"password",label:"Senha",placeholder:"Digite sua senha"},parameters:{docs:{description:{story:"Input de senha com ícone automático para mostrar/esconder."}}}},r={render:()=>{const a=c();return e.jsx(i,{...a,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"320px"},children:[e.jsx(o,{name:"text",type:"text",label:"Texto",placeholder:"Campo de texto"}),e.jsx(o,{name:"email",type:"email",label:"E-mail",placeholder:"seu@email.com"}),e.jsx(o,{name:"password",type:"password",label:"Senha",placeholder:"Digite sua senha"}),e.jsx(o,{name:"number",type:"number",label:"Número",placeholder:"123"}),e.jsx(o,{name:"tel",type:"tel",label:"Telefone",placeholder:"(11) 99999-9999"}),e.jsx(o,{name:"url",type:"url",label:"URL",placeholder:"https://exemplo.com"})]})})},parameters:{docs:{description:{story:"Diferentes tipos de input disponíveis. Note que o input de senha automaticamente adiciona o ícone de mostrar/esconder."}}}},s={render:()=>{const a=c(),l=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"currentColor"})});return e.jsx(i,{...a,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"320px"},children:[e.jsx(o,{name:"username",type:"text",label:"Usuário",placeholder:"Digite seu usuário",Icon:l}),e.jsx(o,{name:"password",type:"password",label:"Senha com ícone customizado (ignorado)",placeholder:"Digite sua senha"})]})})},parameters:{docs:{description:{story:"Input com ícone customizado. Note que em inputs de password, o ícone customizado é ignorado em favor do ícone de mostrar/esconder senha."}}}};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: "email",
    type: "text",
    label: "E-mail",
    placeholder: "Digite seu e-mail"
  },
  parameters: {
    docs: {
      description: {
        story: "Input básico com label flutuante."
      }
    }
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: "password",
    type: "password",
    label: "Senha",
    placeholder: "Digite sua senha"
  },
  parameters: {
    docs: {
      description: {
        story: "Input de senha com ícone automático para mostrar/esconder."
      }
    }
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,b,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm();
    return <FormProvider {...methods}>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "320px"
      }}>
          <Input name="text" type="text" label="Texto" placeholder="Campo de texto" />
          <Input name="email" type="email" label="E-mail" placeholder="seu@email.com" />
          <Input name="password" type="password" label="Senha" placeholder="Digite sua senha" />
          <Input name="number" type="number" label="Número" placeholder="123" />
          <Input name="tel" type="tel" label="Telefone" placeholder="(11) 99999-9999" />
          <Input name="url" type="url" label="URL" placeholder="https://exemplo.com" />
        </div>
      </FormProvider>;
  },
  parameters: {
    docs: {
      description: {
        story: "Diferentes tipos de input disponíveis. Note que o input de senha automaticamente adiciona o ícone de mostrar/esconder."
      }
    }
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,I,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm();

    // Ícone de usuário
    const UserIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" />
      </svg>;
    return <FormProvider {...methods}>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "320px"
      }}>
          <Input name="username" type="text" label="Usuário" placeholder="Digite seu usuário" Icon={UserIcon} />
          <Input name="password" type="password" label="Senha com ícone customizado (ignorado)" placeholder="Digite sua senha" />
        </div>
      </FormProvider>;
  },
  parameters: {
    docs: {
      description: {
        story: "Input com ícone customizado. Note que em inputs de password, o ícone customizado é ignorado em favor do ícone de mostrar/esconder senha."
      }
    }
  }
}`,...(v=(I=s.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};const T=["Default","Password","InputTypes","WithCustomIcon"];export{n as Default,r as InputTypes,t as Password,s as WithCustomIcon,T as __namedExportsOrder,z as default};
