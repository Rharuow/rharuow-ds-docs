import{R as e}from"./iframe-CDg8zD-n.js";import{I as t}from"./Input-C9JuVjLz.js";import{b as s,F as i}from"./index.esm-Ch_DFpa3.js";import"./utils-CuF-iVWQ.js";const T={title:"Components/Input",component:t,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","date","datetime-local","time","month","week"],description:"Tipo do input",defaultValue:"text"},label:{control:"text",description:"Label do input (fica flutuante)"},placeholder:{control:"text",description:"Placeholder do input"},disabled:{control:"boolean",description:"Input desabilitado",defaultValue:!1},name:{control:"text",description:"Nome do campo para React Hook Form",defaultValue:"inputField"}},parameters:{docs:{description:{component:`
Um componente de Input moderno com label flutuante e integração completa com React Hook Form.

## Características:
- 📝 Label flutuante automático
- 🔒 Suporte a password com ícone de mostrar/esconder
- 🎨 Customização via CSS Variables
- ♿ Acessibilidade completa
- 🔗 Integração nativa com React Hook Form
        `}}}},z=a=>{const c=s();return e.createElement(i,{...c},e.createElement("div",{style:{maxWidth:"320px"}},e.createElement(t,{...a})))},o={render:z,args:{name:"email",type:"text",label:"E-mail",placeholder:"Digite seu e-mail"},parameters:{docs:{description:{story:"Input básico com label flutuante."}}}},n={render:z,args:{name:"password",type:"password",label:"Senha",placeholder:"Digite sua senha"},parameters:{docs:{description:{story:"Input de senha com ícone automático para mostrar/esconder."}}}},r={render:()=>{const a=s();return e.createElement(i,{...a},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"320px"}},e.createElement(t,{name:"text",type:"text",label:"Texto",placeholder:"Campo de texto"}),e.createElement(t,{name:"email",type:"email",label:"E-mail",placeholder:"seu@email.com"}),e.createElement(t,{name:"password",type:"password",label:"Senha",placeholder:"Digite sua senha"}),e.createElement(t,{name:"number",type:"number",label:"Número",placeholder:"123"}),e.createElement(t,{name:"tel",type:"tel",label:"Telefone",placeholder:"(11) 99999-9999"}),e.createElement(t,{name:"url",type:"url",label:"URL",placeholder:"https://exemplo.com"}),e.createElement(t,{name:"date",type:"date",label:"Data de Nascimento"}),e.createElement(t,{name:"datetime-local",type:"datetime-local",label:"Data e Hora"}),e.createElement(t,{name:"time",type:"time",label:"Horário"})))},parameters:{docs:{description:{story:"Diferentes tipos de input disponíveis. Note que o input de senha automaticamente adiciona o ícone de mostrar/esconder. Inputs de data, datetime-local e time mostram o problema de sobreposição do label com o placeholder nativo."}}}},m={render:()=>{const a=s(),c=()=>e.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none"},e.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"currentColor"}));return e.createElement(i,{...a},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"320px"}},e.createElement(t,{name:"username",type:"text",label:"Usuário",placeholder:"Digite seu usuário",Icon:c}),e.createElement(t,{name:"password",type:"password",label:"Senha com ícone customizado (ignorado)",placeholder:"Digite sua senha"})))},parameters:{docs:{description:{story:"Input com ícone customizado. Note que em inputs de password, o ícone customizado é ignorado em favor do ícone de mostrar/esconder senha."}}}},l={render:()=>{const a=s();return e.createElement(i,{...a},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"320px"}},e.createElement("div",{style:{marginBottom:"1rem"}},e.createElement("h3",{style:{fontSize:"1rem",fontWeight:"bold",marginBottom:"0.5rem",color:"#10b981"}},"✅ Solução: Label sempre flutuante para inputs de data"),e.createElement("p",{style:{fontSize:"0.875rem",color:"#666",marginBottom:"1rem"}},"O componente agora detecta automaticamente inputs de data/hora e força o label a ficar sempre na posição flutuante, evitando conflitos com placeholders nativos.")),e.createElement(t,{name:"date",type:"date",label:"Data de Nascimento"}),e.createElement(t,{name:"datetime-local",type:"datetime-local",label:"Data e Hora do Evento"}),e.createElement(t,{name:"time",type:"time",label:"Horário de Preferência"}),e.createElement(t,{name:"month",type:"month",label:"Mês de Referência"}),e.createElement(t,{name:"week",type:"week",label:"Semana"}),e.createElement("div",{style:{marginTop:"1rem",padding:"1rem",backgroundColor:"#f3f4f6",borderRadius:"0.5rem"}},e.createElement("p",{style:{fontSize:"0.875rem",color:"#374151",margin:0}},e.createElement("strong",null,"Como funciona:")," O componente detecta automaticamente os tipos",e.createElement("code",{style:{backgroundColor:"#e5e7eb",padding:"0.125rem 0.25rem",borderRadius:"0.25rem",fontSize:"0.75rem"}},"date, datetime-local, time, month, week"),"e força o label a ficar sempre flutuante, evitando conflitos visuais."))))},parameters:{docs:{description:{story:"✅ **Solução Implementada**: O componente Input agora detecta automaticamente inputs de data/hora e mantém o label sempre na posição flutuante, eliminando conflitos visuais com placeholders nativos do navegador. Esta solução funciona automaticamente para `date`, `datetime-local`, `time`, `month` e `week`."}}}};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,f,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,g,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
          <Input name="date" type="date" label="Data de Nascimento" />
          <Input name="datetime-local" type="datetime-local" label="Data e Hora" />
          <Input name="time" type="time" label="Horário" />
        </div>
      </FormProvider>;
  },
  parameters: {
    docs: {
      description: {
        story: "Diferentes tipos de input disponíveis. Note que o input de senha automaticamente adiciona o ícone de mostrar/esconder. Inputs de data, datetime-local e time mostram o problema de sobreposição do label com o placeholder nativo."
      }
    }
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,I,E;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var w,D,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm();
    return <FormProvider {...methods}>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "320px"
      }}>
          <div style={{
          marginBottom: "1rem"
        }}>
            <h3 style={{
            fontSize: "1rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
            color: "#10b981"
          }}>
              ✅ Solução: Label sempre flutuante para inputs de data
            </h3>
            <p style={{
            fontSize: "0.875rem",
            color: "#666",
            marginBottom: "1rem"
          }}>
              O componente agora detecta automaticamente inputs de data/hora e força o label a ficar sempre na posição flutuante, evitando conflitos com placeholders nativos.
            </p>
          </div>
          <Input name="date" type="date" label="Data de Nascimento" />
          <Input name="datetime-local" type="datetime-local" label="Data e Hora do Evento" />
          <Input name="time" type="time" label="Horário de Preferência" />
          <Input name="month" type="month" label="Mês de Referência" />
          <Input name="week" type="week" label="Semana" />
          <div style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#f3f4f6",
          borderRadius: "0.5rem"
        }}>
            <p style={{
            fontSize: "0.875rem",
            color: "#374151",
            margin: 0
          }}>
              <strong>Como funciona:</strong> O componente detecta automaticamente os tipos 
              <code style={{
              backgroundColor: "#e5e7eb",
              padding: "0.125rem 0.25rem",
              borderRadius: "0.25rem",
              fontSize: "0.75rem"
            }}>
                date, datetime-local, time, month, week
              </code> 
              e força o label a ficar sempre flutuante, evitando conflitos visuais.
            </p>
          </div>
        </div>
      </FormProvider>;
  },
  parameters: {
    docs: {
      description: {
        story: "✅ **Solução Implementada**: O componente Input agora detecta automaticamente inputs de data/hora e mantém o label sempre na posição flutuante, eliminando conflitos visuais com placeholders nativos do navegador. Esta solução funciona automaticamente para \`date\`, \`datetime-local\`, \`time\`, \`month\` e \`week\`."
      }
    }
  }
}`,...(S=(D=l.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const P=["Default","Password","InputTypes","WithCustomIcon","DateInput"];export{l as DateInput,o as Default,r as InputTypes,n as Password,m as WithCustomIcon,P as __namedExportsOrder,T as default};
