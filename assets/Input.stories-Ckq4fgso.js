import{R as e}from"./iframe-0UjUrlXI.js";import{I as o}from"./Input-DZ_ChseB.js";import{b as c,F as m}from"./index.esm-Bu0awhvF.js";import"./utils-CuF-iVWQ.js";const z={title:"Components/Input",component:o,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url"],description:"Tipo do input",defaultValue:"text"},label:{control:"text",description:"Label do input (fica flutuante)"},placeholder:{control:"text",description:"Placeholder do input"},disabled:{control:"boolean",description:"Input desabilitado",defaultValue:!1},name:{control:"text",description:"Nome do campo para React Hook Form",defaultValue:"inputField"}},parameters:{docs:{description:{component:`
Um componente de Input moderno com label flutuante e integração completa com React Hook Form.

## Características:
- 📝 Label flutuante automático
- 🔒 Suporte a password com ícone de mostrar/esconder
- 🎨 Customização via CSS Variables
- ♿ Acessibilidade completa
- 🔗 Integração nativa com React Hook Form
        `}}}},w=t=>{const l=c();return e.createElement(m,{...l},e.createElement("div",{style:{maxWidth:"320px"}},e.createElement(o,{...t})))},a={render:w,args:{name:"email",type:"text",label:"E-mail",placeholder:"Digite seu e-mail"},parameters:{docs:{description:{story:"Input básico com label flutuante."}}}},n={render:w,args:{name:"password",type:"password",label:"Senha",placeholder:"Digite sua senha"},parameters:{docs:{description:{story:"Input de senha com ícone automático para mostrar/esconder."}}}},r={render:()=>{const t=c();return e.createElement(m,{...t},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"320px"}},e.createElement(o,{name:"text",type:"text",label:"Texto",placeholder:"Campo de texto"}),e.createElement(o,{name:"email",type:"email",label:"E-mail",placeholder:"seu@email.com"}),e.createElement(o,{name:"password",type:"password",label:"Senha",placeholder:"Digite sua senha"}),e.createElement(o,{name:"number",type:"number",label:"Número",placeholder:"123"}),e.createElement(o,{name:"tel",type:"tel",label:"Telefone",placeholder:"(11) 99999-9999"}),e.createElement(o,{name:"url",type:"url",label:"URL",placeholder:"https://exemplo.com"})))},parameters:{docs:{description:{story:"Diferentes tipos de input disponíveis. Note que o input de senha automaticamente adiciona o ícone de mostrar/esconder."}}}},s={render:()=>{const t=c(),l=()=>e.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none"},e.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"currentColor"}));return e.createElement(m,{...t},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"320px"}},e.createElement(o,{name:"username",type:"text",label:"Usuário",placeholder:"Digite seu usuário",Icon:l}),e.createElement(o,{name:"password",type:"password",label:"Senha com ícone customizado (ignorado)",placeholder:"Digite sua senha"})))},parameters:{docs:{description:{story:"Input com ícone customizado. Note que em inputs de password, o ícone customizado é ignorado em favor do ícone de mostrar/esconder senha."}}}};var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,h,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,b,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(I=s.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};const T=["Default","Password","InputTypes","WithCustomIcon"];export{a as Default,r as InputTypes,n as Password,s as WithCustomIcon,T as __namedExportsOrder,z as default};
