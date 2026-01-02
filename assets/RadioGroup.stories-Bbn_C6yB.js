import{R as e}from"./iframe-CB-4TmZU.js";import{b as U,F as _}from"./index.esm-Kd4NofSR.js";import{R as $}from"./RadioGroup-Bzwge4Nv.js";import"./utils-CuF-iVWQ.js";const J=({children:o,...n})=>{const a=U({defaultValues:{[n.name]:""}});return e.createElement(_,{...a},e.createElement("div",{className:"w-80 p-4"},o,e.createElement("div",{className:"mt-4 p-3 bg-gray-100 rounded text-sm"},e.createElement("strong",null,"Valor selecionado:"),e.createElement("pre",{className:"mt-1 text-xs"},JSON.stringify(a.watch(),null,2)))))},ce={title:"Components/RadioGroup",component:$,decorators:[(o,{args:n})=>e.createElement(J,{...n},e.createElement(o,null))],parameters:{layout:"centered",docs:{description:{component:"Um componente moderno de radio button com design criativo. Oferece botões estilizados com animações, ícones opcionais, diferentes tamanhos e direções de layout. Totalmente integrado com React Hook Form."}}},tags:["autodocs"],argTypes:{name:{description:"Nome do campo para integração com formulários",control:"text"},label:{description:"Label flutuante do grupo de radio buttons",control:"text"},direction:{description:"Direção do layout dos botões",control:"select",options:["row","col"]},size:{description:"Tamanho dos botões",control:"select",options:["sm","md","lg"]},options:{description:"Array de opções com label, value e ícone opcional",control:"object"}}},X=()=>e.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M15 4.5L6.75 12.75L3 9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),K=()=>e.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M9 1.5L11.472 6.531L17.25 7.371L13.125 11.394L14.058 17.25L9 14.625L3.942 17.25L4.875 11.394L0.75 7.371L6.528 6.531L9 1.5Z",fill:"currentColor"})),Q=()=>e.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M15.75 3.75C15.75 2.5074 14.7426 1.5 13.5 1.5C12.2574 1.5 11.25 2.5074 11.25 3.75C11.25 3.75 11.25 3.75 9 6.75C6.75 3.75 6.75 3.75 6.75 3.75C6.75 2.5074 5.7426 1.5 4.5 1.5C3.2574 1.5 2.25 2.5074 2.25 3.75C2.25 6.4853 9 16.5 9 16.5S15.75 6.4853 15.75 3.75Z",fill:"currentColor"})),Y=()=>e.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M6.75 7.5V15H4.5C3.675 15 3 14.325 3 13.5V9C3 8.175 3.675 7.5 4.5 7.5H6.75ZM6.75 7.5L9 3L9.75 3.75V6H13.5C14.325 6 15 6.675 15 7.5L13.5 12.75C13.35 13.425 12.75 15 11.25 15H8.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),Z=[{label:"Opção 1",value:"option1"},{label:"Opção 2",value:"option2"},{label:"Opção 3",value:"option3"}],ee=[{label:"Aprovado",value:"approved",icon:e.createElement(X,null)},{label:"Favorito",value:"favorite",icon:e.createElement(K,null)},{label:"Curtido",value:"liked",icon:e.createElement(Q,null)},{label:"Recomendado",value:"recommended",icon:e.createElement(Y,null)}],ae=[{label:"P",value:"small"},{label:"M",value:"medium"},{label:"G",value:"large"},{label:"GG",value:"extra-large"}],oe=[{label:"Básico",value:"basic"},{label:"Pro",value:"pro"},{label:"Enterprise",value:"enterprise"}],ne=[{label:"🔴 Alta",value:"high"},{label:"🟡 Média",value:"medium"},{label:"🟢 Baixa",value:"low"}],re=[{label:"💳 Cartão de Crédito",value:"credit"},{label:"💰 PIX",value:"pix"},{label:"🏦 Boleto",value:"boleto"}],r={args:{name:"basic",label:"Escolha uma opção",options:Z},parameters:{docs:{description:{story:"RadioGroup básico com label flutuante e três opções simples."}}}},t={args:{name:"status",label:"Status do Item",options:ee},parameters:{docs:{description:{story:"RadioGroup com ícones personalizados para cada opção, tornando a interface mais visual e intuitiva."}}}},s={args:{name:"size-small",label:"Tamanho da Camiseta",options:ae,size:"sm"},parameters:{docs:{description:{story:"RadioGroup compacto (tamanho pequeno) ideal para layouts onde o espaço é limitado."}}}},i={args:{name:"plan",label:"Plano de Assinatura",options:oe,size:"lg"},parameters:{docs:{description:{story:"RadioGroup grande para destacar opções importantes como planos de assinatura."}}}},l={args:{name:"priority",label:"Prioridade da Tarefa",options:ne,direction:"col",size:"md"},parameters:{docs:{description:{story:"Layout vertical ideal para formulários longos ou quando há muitas opções."}}}},c={args:{name:"payment",label:"Método de Pagamento",options:re,direction:"col",size:"lg"},parameters:{docs:{description:{story:"Exemplo prático de seleção de método de pagamento com emojis e layout vertical."}}}},p={args:{name:"no-label",options:Z,size:"md"},parameters:{docs:{description:{story:"RadioGroup sem label quando o contexto já deixa claro o que está sendo selecionado."}}}},d={args:{name:"custom",label:"Opções Customizadas",options:[{label:"Primeira Opção",value:"first"},{label:"Segunda Opção",value:"second"},{label:"Terceira Opção",value:"third"}],optionClassName:"bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 hover:border-purple-400 data-[checked]:border-purple-500 data-[checked]:bg-gradient-to-r data-[checked]:from-purple-100 data-[checked]:to-pink-100"},parameters:{docs:{description:{story:"Exemplo com estilização customizada usando gradientes e cores personalizadas."}}}},m={args:{name:"technology",label:"Tecnologia Favorita",options:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"},{label:"React",value:"react"},{label:"Vue.js",value:"vue"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],direction:"col",size:"sm"},parameters:{docs:{description:{story:"RadioGroup com muitas opções em layout vertical e tamanho compacto."}}}},u={render:()=>{const o=[{name:"Blue (Default)",primary:"#2563eb",hover:"#dbeafe"},{name:"Red",primary:"#dc2626",hover:"#fecaca"},{name:"Green",primary:"#059669",hover:"#d1fae5"},{name:"Purple",primary:"#7c3aed",hover:"#e9d5ff"}],n=[{label:"Opção A",value:"a"},{label:"Opção B",value:"b"},{label:"Opção C",value:"c"}];return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"}},o.map((a,b)=>e.createElement("div",{key:a.name,style:{padding:"1rem",border:"1px solid #e5e7eb",borderRadius:"8px",background:"#fafafa"}},e.createElement("h3",{style:{margin:"0 0 1rem 0",color:a.primary,fontSize:"1.1rem",fontWeight:"600"}},a.name," Theme"),e.createElement(J,{name:`radio${b+1}`},e.createElement("div",{style:{"--primary":a.primary,"--primary-hover":a.hover,"--primary-text":"#fff"}},e.createElement($,{name:`radio${b+1}`,label:`${a.name} RadioGroup`,options:n,direction:"row",size:"md"}))))))},parameters:{docs:{description:{story:"Demonstra como o RadioGroup se adapta a diferentes temas usando variáveis CSS customizadas."}}}};var v,g,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,f,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,z,O;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(O=(z=s.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var C,E,R;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var w,L,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(L=l.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var G,T,P;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(P=(T=c.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var M,j,B;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(B=(j=p.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var V,W,F;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(F=(W=d.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var A,D,I;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var q,N,H;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(N=u.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};const pe=["Default","WithIcons","SmallSize","LargeSize","VerticalLayout","PaymentMethods","WithoutLabel","CustomStyling","ManyOptions","ThemeVariations"];export{d as CustomStyling,r as Default,i as LargeSize,m as ManyOptions,c as PaymentMethods,s as SmallSize,u as ThemeVariations,l as VerticalLayout,t as WithIcons,p as WithoutLabel,pe as __namedExportsOrder,ce as default};
