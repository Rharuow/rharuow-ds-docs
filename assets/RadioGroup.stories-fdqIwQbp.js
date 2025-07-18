import{j as e,c as l}from"./utils-DLq8OvKD.js";import{u as be,a as he,b as ye,F as fe}from"./index.esm-DWK3f1FW.js";import{r as k}from"./iframe-B7N_hRC7.js";const xe={sm:"h-10 text-sm px-3",md:"h-12 text-base px-4",lg:"h-16 text-lg px-6"},f=k.forwardRef(({name:a,label:n,options:r,className:t,containerClassName:le,optionClassName:de,direction:ce="row",size:pe="md",onFocus:Le,onBlur:Ge,...x},me)=>{var R,O,T;const s=be(),j=s==null?void 0:s.control,ue=j&&a?he({control:j,name:a}):void 0,i=x.value??ue??"",z=(T=(O=(R=s==null?void 0:s.formState)==null?void 0:R.errors)==null?void 0:O[a])==null?void 0:T.message,[ve,C]=k.useState(!1),ge=ve||!!i,S=o=>{s&&a&&s.setValue(a,o),x.onChange&&x.onChange({target:{value:o}})};return e.jsxs("div",{className:l("relative",le),ref:me,children:[n&&e.jsx("label",{htmlFor:a,className:l("absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",ge?"top-0 scale-90 -translate-y-1 text-xs text-[var(--primary,#2563eb)] p-1 rounded-full bg-white":"top-3 scale-100 translate-y-0.5"),children:n}),e.jsx("div",{className:l("flex gap-2 w-full pt-6",ce==="row"?"flex-row":"flex-col",t),"aria-label":n,tabIndex:-1,onFocus:()=>C(!0),onBlur:()=>C(!1),children:r.map(o=>e.jsxs("button",{type:"button",className:l("relative flex items-center justify-center border rounded-lg transition-all duration-200 shadow-sm px-4 focus:outline-none focus:ring-2 focus:ring-[var(--primary-hover,#dbeafe)]",xe[pe],i===o.value?"border-[var(--primary,#2563eb)] bg-[var(--primary-hover,#dbeafe)] text-[var(--primary,#2563eb)] ring-2 ring-[var(--primary-hover,#dbeafe)] shadow-md transform scale-[1.02]":"border-gray-200 bg-white text-gray-600 hover:border-[var(--primary,#2563eb)] hover:bg-[var(--primary-hover,#dbeafe)] hover:text-[var(--primary,#2563eb)] hover:shadow-md",de),"aria-pressed":i===o.value,"data-selected":i===o.value,tabIndex:0,onClick:()=>S(o.value),onKeyDown:w=>{(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),S(o.value))},children:[o.icon&&e.jsx("span",{className:"mr-2 text-lg flex items-center",children:o.icon}),e.jsx("span",{className:"truncate font-medium",children:o.label})]},o.value))}),z&&e.jsx("span",{className:"text-red-500 text-xs mt-1 block",children:z})]})});f.displayName="RadioGroup";f.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioOption"}],raw:"RadioOption[]"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},optionClassName:{required:!1,tsType:{name:"string"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"row" | "col"',elements:[{name:"literal",value:'"row"'},{name:"literal",value:'"col"'}]},description:"",defaultValue:{value:'"row"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},onFocus:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const te=({children:a,...n})=>{const r=ye({defaultValues:{[n.name]:""}});return e.jsx(fe,{...r,children:e.jsxs("div",{className:"w-80 p-4",children:[a,e.jsxs("div",{className:"mt-4 p-3 bg-gray-100 rounded text-sm",children:[e.jsx("strong",{children:"Valor selecionado:"}),e.jsx("pre",{className:"mt-1 text-xs",children:JSON.stringify(r.watch(),null,2)})]})]})})},Ne={title:"Components/RadioGroup",component:f,decorators:[(a,{args:n})=>e.jsx(te,{...n,children:e.jsx(a,{})})],parameters:{layout:"centered",docs:{description:{component:"Um componente moderno de radio button com design criativo. Oferece botões estilizados com animações, ícones opcionais, diferentes tamanhos e direções de layout. Totalmente integrado com React Hook Form."}}},tags:["autodocs"],argTypes:{name:{description:"Nome do campo para integração com formulários",control:"text"},label:{description:"Label flutuante do grupo de radio buttons",control:"text"},direction:{description:"Direção do layout dos botões",control:"select",options:["row","col"]},size:{description:"Tamanho dos botões",control:"select",options:["sm","md","lg"]},options:{description:"Array de opções com label, value e ícone opcional",control:"object"}}},we=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15 4.5L6.75 12.75L3 9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),je=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9 1.5L11.472 6.531L17.25 7.371L13.125 11.394L14.058 17.25L9 14.625L3.942 17.25L4.875 11.394L0.75 7.371L6.528 6.531L9 1.5Z",fill:"currentColor"})}),ze=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15.75 3.75C15.75 2.5074 14.7426 1.5 13.5 1.5C12.2574 1.5 11.25 2.5074 11.25 3.75C11.25 3.75 11.25 3.75 9 6.75C6.75 3.75 6.75 3.75 6.75 3.75C6.75 2.5074 5.7426 1.5 4.5 1.5C3.2574 1.5 2.25 2.5074 2.25 3.75C2.25 6.4853 9 16.5 9 16.5S15.75 6.4853 15.75 3.75Z",fill:"currentColor"})}),Ce=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.75 7.5V15H4.5C3.675 15 3 14.325 3 13.5V9C3 8.175 3.675 7.5 4.5 7.5H6.75ZM6.75 7.5L9 3L9.75 3.75V6H13.5C14.325 6 15 6.675 15 7.5L13.5 12.75C13.35 13.425 12.75 15 11.25 15H8.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),ie=[{label:"Opção 1",value:"option1"},{label:"Opção 2",value:"option2"},{label:"Opção 3",value:"option3"}],Se=[{label:"Aprovado",value:"approved",icon:e.jsx(we,{})},{label:"Favorito",value:"favorite",icon:e.jsx(je,{})},{label:"Curtido",value:"liked",icon:e.jsx(ze,{})},{label:"Recomendado",value:"recommended",icon:e.jsx(Ce,{})}],Re=[{label:"P",value:"small"},{label:"M",value:"medium"},{label:"G",value:"large"},{label:"GG",value:"extra-large"}],Oe=[{label:"Básico",value:"basic"},{label:"Pro",value:"pro"},{label:"Enterprise",value:"enterprise"}],Te=[{label:"🔴 Alta",value:"high"},{label:"🟡 Média",value:"medium"},{label:"🟢 Baixa",value:"low"}],ke=[{label:"💳 Cartão de Crédito",value:"credit"},{label:"💰 PIX",value:"pix"},{label:"🏦 Boleto",value:"boleto"}],d={args:{name:"basic",label:"Escolha uma opção",options:ie},parameters:{docs:{description:{story:"RadioGroup básico com label flutuante e três opções simples."}}}},c={args:{name:"status",label:"Status do Item",options:Se},parameters:{docs:{description:{story:"RadioGroup com ícones personalizados para cada opção, tornando a interface mais visual e intuitiva."}}}},p={args:{name:"size-small",label:"Tamanho da Camiseta",options:Re,size:"sm"},parameters:{docs:{description:{story:"RadioGroup compacto (tamanho pequeno) ideal para layouts onde o espaço é limitado."}}}},m={args:{name:"plan",label:"Plano de Assinatura",options:Oe,size:"lg"},parameters:{docs:{description:{story:"RadioGroup grande para destacar opções importantes como planos de assinatura."}}}},u={args:{name:"priority",label:"Prioridade da Tarefa",options:Te,direction:"col",size:"md"},parameters:{docs:{description:{story:"Layout vertical ideal para formulários longos ou quando há muitas opções."}}}},v={args:{name:"payment",label:"Método de Pagamento",options:ke,direction:"col",size:"lg"},parameters:{docs:{description:{story:"Exemplo prático de seleção de método de pagamento com emojis e layout vertical."}}}},g={args:{name:"no-label",options:ie,size:"md"},parameters:{docs:{description:{story:"RadioGroup sem label quando o contexto já deixa claro o que está sendo selecionado."}}}},b={args:{name:"custom",label:"Opções Customizadas",options:[{label:"Primeira Opção",value:"first"},{label:"Segunda Opção",value:"second"},{label:"Terceira Opção",value:"third"}],optionClassName:"bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 hover:border-purple-400 data-[checked]:border-purple-500 data-[checked]:bg-gradient-to-r data-[checked]:from-purple-100 data-[checked]:to-pink-100"},parameters:{docs:{description:{story:"Exemplo com estilização customizada usando gradientes e cores personalizadas."}}}},h={args:{name:"technology",label:"Tecnologia Favorita",options:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"},{label:"React",value:"react"},{label:"Vue.js",value:"vue"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],direction:"col",size:"sm"},parameters:{docs:{description:{story:"RadioGroup com muitas opções em layout vertical e tamanho compacto."}}}},y={render:()=>{const a=[{name:"Blue (Default)",primary:"#2563eb",hover:"#dbeafe"},{name:"Red",primary:"#dc2626",hover:"#fecaca"},{name:"Green",primary:"#059669",hover:"#d1fae5"},{name:"Purple",primary:"#7c3aed",hover:"#e9d5ff"}],n=[{label:"Opção A",value:"a"},{label:"Opção B",value:"b"},{label:"Opção C",value:"c"}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:a.map((r,t)=>e.jsxs("div",{style:{padding:"1rem",border:"1px solid #e5e7eb",borderRadius:"8px",background:"#fafafa"},children:[e.jsxs("h3",{style:{margin:"0 0 1rem 0",color:r.primary,fontSize:"1.1rem",fontWeight:"600"},children:[r.name," Theme"]}),e.jsx(te,{name:`radio${t+1}`,children:e.jsx("div",{style:{"--primary":r.primary,"--primary-hover":r.hover,"--primary-text":"#fff"},children:e.jsx(f,{name:`radio${t+1}`,label:`${r.name} RadioGroup`,options:n,direction:"row",size:"md"})})})]},r.name))})},parameters:{docs:{description:{story:"Demonstra como o RadioGroup se adapta a diferentes temas usando variáveis CSS customizadas."}}}};var L,G,q;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    name: "basic",
    label: "Escolha uma opção",
    options: basicOptions
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup básico com label flutuante e três opções simples."
      }
    }
  }
}`,...(q=(G=d.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var F,E,N;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    name: "status",
    label: "Status do Item",
    options: iconOptions
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup com ícones personalizados para cada opção, tornando a interface mais visual e intuitiva."
      }
    }
  }
}`,...(N=(E=c.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var M,P,D;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    name: "size-small",
    label: "Tamanho da Camiseta",
    options: sizeOptions,
    size: "sm"
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup compacto (tamanho pequeno) ideal para layouts onde o espaço é limitado."
      }
    }
  }
}`,...(D=(P=p.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var B,H,V;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    name: "plan",
    label: "Plano de Assinatura",
    options: planOptions,
    size: "lg"
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup grande para destacar opções importantes como planos de assinatura."
      }
    }
  }
}`,...(V=(H=m.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var W,I,A;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    name: "priority",
    label: "Prioridade da Tarefa",
    options: priorityOptions,
    direction: "col",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Layout vertical ideal para formulários longos ou quando há muitas opções."
      }
    }
  }
}`,...(A=(I=u.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var $,_,J;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    name: "payment",
    label: "Método de Pagamento",
    options: paymentOptions,
    direction: "col",
    size: "lg"
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo prático de seleção de método de pagamento com emojis e layout vertical."
      }
    }
  }
}`,...(J=(_=v.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var Z,U,K;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    name: "no-label",
    options: basicOptions,
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup sem label quando o contexto já deixa claro o que está sendo selecionado."
      }
    }
  }
}`,...(K=(U=g.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var X,Q,Y;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    name: "custom",
    label: "Opções Customizadas",
    options: [{
      label: "Primeira Opção",
      value: "first"
    }, {
      label: "Segunda Opção",
      value: "second"
    }, {
      label: "Terceira Opção",
      value: "third"
    }],
    optionClassName: "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 hover:border-purple-400 data-[checked]:border-purple-500 data-[checked]:bg-gradient-to-r data-[checked]:from-purple-100 data-[checked]:to-pink-100"
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo com estilização customizada usando gradientes e cores personalizadas."
      }
    }
  }
}`,...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var ee,ae,oe;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    name: "technology",
    label: "Tecnologia Favorita",
    options: [{
      label: "JavaScript",
      value: "js"
    }, {
      label: "TypeScript",
      value: "ts"
    }, {
      label: "React",
      value: "react"
    }, {
      label: "Vue.js",
      value: "vue"
    }, {
      label: "Angular",
      value: "angular"
    }, {
      label: "Svelte",
      value: "svelte"
    }],
    direction: "col",
    size: "sm"
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup com muitas opções em layout vertical e tamanho compacto."
      }
    }
  }
}`,...(oe=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,ne,se;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const themes = [{
      name: "Blue (Default)",
      primary: "#2563eb",
      hover: "#dbeafe"
    }, {
      name: "Red",
      primary: "#dc2626",
      hover: "#fecaca"
    }, {
      name: "Green",
      primary: "#059669",
      hover: "#d1fae5"
    }, {
      name: "Purple",
      primary: "#7c3aed",
      hover: "#e9d5ff"
    }];
    const options = [{
      label: "Opção A",
      value: "a"
    }, {
      label: "Opção B",
      value: "b"
    }, {
      label: "Opção C",
      value: "c"
    }];
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "2rem"
    }}>
        {themes.map((theme, index) => <div key={theme.name} style={{
        padding: "1rem",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        background: "#fafafa"
      }}>
            <h3 style={{
          margin: "0 0 1rem 0",
          color: theme.primary,
          fontSize: "1.1rem",
          fontWeight: "600"
        }}>
              {theme.name} Theme
            </h3>
            <FormWrapper name={\`radio\${index + 1}\`}>
              <div style={{
            "--primary": theme.primary,
            "--primary-hover": theme.hover,
            "--primary-text": "#fff"
          } as React.CSSProperties}>
                <RadioGroup name={\`radio\${index + 1}\`} label={\`\${theme.name} RadioGroup\`} options={options} direction="row" size="md" />
              </div>
            </FormWrapper>
          </div>)}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstra como o RadioGroup se adapta a diferentes temas usando variáveis CSS customizadas."
      }
    }
  }
}`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const Me=["Default","WithIcons","SmallSize","LargeSize","VerticalLayout","PaymentMethods","WithoutLabel","CustomStyling","ManyOptions","ThemeVariations"];export{b as CustomStyling,d as Default,m as LargeSize,h as ManyOptions,v as PaymentMethods,p as SmallSize,y as ThemeVariations,u as VerticalLayout,c as WithIcons,g as WithoutLabel,Me as __namedExportsOrder,Ne as default};
