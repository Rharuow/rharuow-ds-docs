import{r as a,R as d}from"./iframe-CllnT1cI.js";import{u as Ue,a as We,b as je,F as Be}from"./index.esm-D-xy-1vJ.js";import{c as u}from"./utils-CuF-iVWQ.js";const I=a.forwardRef(({name:t,label:o,loadOptions:l,className:Se,containerClassName:Ee,isClearable:Pe,defaultOptions:v=!1,loadingMessage:Ae="Carregando...",noOptionsMessage:Ne="Nenhuma opção encontrada",searchable:i=!1,debounceMs:R=300,onFocus:z,onBlur:U,...c},qe)=>{var Y,G,K;const[Le,f]=a.useState(!1),[r,h]=a.useState(!1),[g,V]=a.useState([]),[F,W]=a.useState(!1),[w,x]=a.useState(""),[j,Me]=a.useState(""),[k,Te]=a.useState({top:0,left:0,width:0}),y=a.useRef(null),D=a.useRef(null),n=Ue(),B=n==null?void 0:n.control,Ve=B&&t?We({control:B,name:t}):void 0,p=c.value??Ve??"",X=(K=(G=(Y=n==null?void 0:n.formState)==null?void 0:Y.errors)==null?void 0:G[t])==null?void 0:K.message,Fe=Le||!!p,C=a.useCallback(()=>{if(y.current&&r){const e=y.current.getBoundingClientRect();Te({top:e.bottom+window.scrollY+4,left:e.left+window.scrollX,width:e.width})}},[r]);a.useEffect(()=>{if(C(),r){const e=()=>C(),s=()=>C();return window.addEventListener("resize",e),window.addEventListener("scroll",s,!0),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",s,!0)}}},[r,C]),a.useEffect(()=>{const e=setTimeout(()=>{Me(w)},R);return()=>clearTimeout(e)},[w,R]),a.useEffect(()=>{(r||v&&g.length===0)&&_(i?j:void 0)},[j,r]),a.useEffect(()=>{v===!0?_():Array.isArray(v)&&V(v)},[]);const _=async e=>{try{W(!0);const s=await l(e);V(s)}catch(s){console.error("Error loading options:",s),V([])}finally{W(!1)}};a.useEffect(()=>{const e=s=>{y.current&&!y.current.contains(s.target)&&(h(!1),f(!1),x(""))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const ke=()=>{r||(h(!0),f(!0),i&&D.current&&setTimeout(()=>{var e;return(e=D.current)==null?void 0:e.focus()},0))},J=e=>{f(!0),z&&z(e)},H=e=>{U&&U(e)},De=e=>{x(e.target.value)},Ie=e=>{if(n&&t&&n.setValue(t,e),c.onChange){const s={target:{value:e}};c.onChange(s)}h(!1),f(!1),x("")},Re=e=>{if(e.stopPropagation(),n&&t&&n.setValue(t,""),c.onChange){const s={target:{value:""}};c.onChange(s)}h(!1),f(!1),x("")},b=g.find(e=>e.value===p),ze=i&&r?w:(b==null?void 0:b.label)||"";return a.createElement("div",{className:u("relative",Ee),ref:y},a.createElement("div",{id:c.id||t,tabIndex:i?-1:0,role:"button","aria-haspopup":"listbox","aria-expanded":r,className:u("peer flex items-center h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 py-3 text-sm transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer relative",Se),onClick:ke,onFocus:i?void 0:J,onBlur:i?void 0:H,ref:qe},i?a.createElement("input",{ref:D,type:"text",value:ze,onChange:De,onFocus:J,onBlur:H,placeholder:o?"":"Selecione...",className:u("w-full bg-transparent border-none outline-none text-sm",!p&&!w&&"text-gray-400")}):a.createElement("span",{className:u("block truncate",!p&&"text-gray-400")},(b==null?void 0:b.label)||!o&&"Selecione..."),F&&a.createElement("div",{className:"absolute right-8 top-1/2 -translate-y-1/2"},a.createElement("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-[var(--primary,#2563eb)]"})),Pe&&p&&!F&&a.createElement("button",{type:"button",tabIndex:-1,"aria-label":"Limpar seleção",className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-transparent p-1 rounded-full focus:outline-none",onClick:Re},"✕")),o&&a.createElement("label",{htmlFor:c.id||t,className:u("absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",Fe?"top-0 scale-90 -translate-y-1 text-xs text-[var(--primary,#2563eb)] p-1 rounded-full bg-white":"top-3 scale-100 translate-y-0.5")},o),a.createElement("div",{className:u("absolute left-0 w-full mt-1 rounded-md transition-all duration-200 overflow-hidden","bg-[var(--select-dropdown-bg)] border-[var(--select-dropdown-border)] text-[var(--select-dropdown-text)]",r?"border max-h-36 opacity-100 scale-100":"max-h-0 opacity-0 scale-95 pointer-events-none"),style:{maxHeight:r?"9.5rem":"0",overflowY:g.length>3?"auto":"hidden",position:"fixed",top:r?k.top:"auto",left:r?k.left:"auto",width:r?k.width:"auto",zIndex:9999,boxShadow:r?"var(--select-dropdown-shadow)":"none"}},F?a.createElement("div",{className:"px-3 py-2 text-sm text-gray-500 text-center"},Ae):g.length===0?a.createElement("div",{className:"px-3 py-2 text-sm text-gray-500 text-center"},Ne):g.map(e=>a.createElement("div",{key:e.value,className:u("px-3 py-2 cursor-pointer text-sm transition-colors duration-150","hover:bg-[var(--select-dropdown-hover)]",p===e.value&&"bg-[var(--select-dropdown-selected)]"),onMouseDown:()=>Ie(e.value)},e.label))),X&&a.createElement("span",{className:"text-red-500 text-xs mt-1 block"},X))});I.displayName="AsyncSelect";I.__docgenInfo={description:"",methods:[],displayName:"AsyncSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},loadOptions:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue?: string) => Promise<SelectOption[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"}],raw:"Promise<SelectOption[]>"}}},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},defaultOptions:{required:!1,tsType:{name:"union",raw:"SelectOption[] | boolean",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},{name:"boolean"}]},description:"",defaultValue:{value:"false",computed:!1}},loadingMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Carregando..."',computed:!1}},noOptionsMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Nenhuma opção encontrada"',computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},debounceMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}}},composes:["Omit"]};const Xe=({children:t,...o})=>{const l=je({defaultValues:{[o.name]:""}});return d.createElement(Be,{...l},d.createElement("div",{className:"w-80 p-4"},t,d.createElement("div",{className:"mt-4 p-3 bg-gray-100 rounded text-sm"},d.createElement("strong",null,"Valor selecionado:"),d.createElement("pre",{className:"mt-1 text-xs"},JSON.stringify(l.watch(),null,2)))))},Ge={title:"Components/AsyncSelect",component:I,decorators:[(t,{args:o})=>d.createElement(Xe,{...o},d.createElement(t,null))],parameters:{layout:"centered",docs:{description:{component:"Um componente de seleção com carregamento assíncrono de opções. Suporta busca em tempo real, debounce configurável e integração completa com React Hook Form."}}},tags:["autodocs"],argTypes:{name:{description:"Nome do campo para integração com formulários",control:"text"},label:{description:"Label flutuante do campo",control:"text"},searchable:{description:"Permite busca digitando no campo",control:"boolean"},isClearable:{description:"Mostra botão para limpar seleção",control:"boolean"},debounceMs:{description:"Delay em ms para busca (evita muitas chamadas à API)",control:{type:"number",min:0,max:2e3,step:100}},defaultOptions:{description:"Carrega opções ao montar o componente",control:"boolean"},loadingMessage:{description:"Mensagem exibida durante carregamento",control:"text"},noOptionsMessage:{description:"Mensagem quando não há opções",control:"text"}}},T=[{label:"Brasil",value:"br"},{label:"Estados Unidos",value:"us"},{label:"Argentina",value:"ar"},{label:"França",value:"fr"},{label:"Alemanha",value:"de"},{label:"Japão",value:"jp"},{label:"Canadá",value:"ca"},{label:"Reino Unido",value:"uk"},{label:"Itália",value:"it"},{label:"Espanha",value:"es"}],m=async t=>(await new Promise(o=>setTimeout(o,800)),t?T.filter(o=>o.label.toLowerCase().includes(t.toLowerCase())):T),_e=async t=>{await new Promise(l=>setTimeout(l,1e3));const o=[{label:"João Silva",value:"joao.silva"},{label:"Maria Santos",value:"maria.santos"},{label:"Pedro Oliveira",value:"pedro.oliveira"},{label:"Ana Costa",value:"ana.costa"},{label:"Carlos Ferreira",value:"carlos.ferreira"}];return t?o.filter(l=>l.label.toLowerCase().includes(t.toLowerCase())):o},O={args:{name:"country",label:"País",loadOptions:m},parameters:{docs:{description:{story:"Versão básica do AsyncSelect. As opções são carregadas apenas quando o dropdown é aberto."}}}},S={args:{name:"country-default",label:"País",loadOptions:m,defaultOptions:!0},parameters:{docs:{description:{story:"Carrega as opções automaticamente quando o componente é montado."}}}},E={args:{name:"country-search",label:"País",loadOptions:m,searchable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Permite busca digitando no campo. As opções são filtradas conforme o usuário digita."}}}},P={args:{name:"country-clearable",label:"País",loadOptions:m,isClearable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Adiciona um botão 'X' para limpar a seleção quando há valor selecionado."}}}},A={args:{name:"country-complete",label:"País",loadOptions:m,searchable:!0,isClearable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Versão completa com busca e botão de limpar ativados."}}}},N={args:{name:"users",label:"Usuário",loadOptions:_e,searchable:!0,loadingMessage:"🔍 Buscando usuários...",noOptionsMessage:"😔 Nenhum usuário encontrado",defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Exemplo com mensagens personalizadas e emoji para melhor UX."}}}},q={args:{name:"country-fast",label:"País (busca rápida)",loadOptions:m,searchable:!0,debounceMs:100,defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Debounce reduzido para 100ms - busca mais responsiva mas mais chamadas à API."}}}},L={args:{name:"country-slow",label:"País (carregamento lento)",loadOptions:async t=>(await new Promise(o=>setTimeout(o,2e3)),t?T.filter(o=>o.label.toLowerCase().includes(t.toLowerCase())):T),searchable:!0,defaultOptions:!0,loadingMessage:"⏳ Aguarde, carregando dados...",isClearable:!0},parameters:{docs:{description:{story:"Simula uma API lenta (2s) para demonstrar o estado de loading."}}}},M={args:{name:"country-no-label",loadOptions:m,searchable:!0,defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Exemplo sem label - útil quando o contexto já deixa claro o que é o campo."}}}};var Q,Z,$;O.parameters={...O.parameters,docs:{...(Q=O.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    name: "country",
    label: "País",
    loadOptions: loadCountries
  },
  parameters: {
    docs: {
      description: {
        story: "Versão básica do AsyncSelect. As opções são carregadas apenas quando o dropdown é aberto."
      }
    }
  }
}`,...($=(Z=O.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,te;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    name: "country-default",
    label: "País",
    loadOptions: loadCountries,
    defaultOptions: true
  },
  parameters: {
    docs: {
      description: {
        story: "Carrega as opções automaticamente quando o componente é montado."
      }
    }
  }
}`,...(te=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,re,se;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    name: "country-search",
    label: "País",
    loadOptions: loadCountries,
    searchable: true,
    defaultOptions: true
  },
  parameters: {
    docs: {
      description: {
        story: "Permite busca digitando no campo. As opções são filtradas conforme o usuário digita."
      }
    }
  }
}`,...(se=(re=E.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,le,ie;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    name: "country-clearable",
    label: "País",
    loadOptions: loadCountries,
    isClearable: true,
    defaultOptions: true
  },
  parameters: {
    docs: {
      description: {
        story: "Adiciona um botão 'X' para limpar a seleção quando há valor selecionado."
      }
    }
  }
}`,...(ie=(le=P.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,ue,de;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    name: "country-complete",
    label: "País",
    loadOptions: loadCountries,
    searchable: true,
    isClearable: true,
    defaultOptions: true
  },
  parameters: {
    docs: {
      description: {
        story: "Versão completa com busca e botão de limpar ativados."
      }
    }
  }
}`,...(de=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,pe,be;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    name: "users",
    label: "Usuário",
    loadOptions: loadUsers,
    searchable: true,
    loadingMessage: "🔍 Buscando usuários...",
    noOptionsMessage: "😔 Nenhum usuário encontrado",
    defaultOptions: true,
    isClearable: true
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo com mensagens personalizadas e emoji para melhor UX."
      }
    }
  }
}`,...(be=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var fe,ge,ye;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    name: "country-fast",
    label: "País (busca rápida)",
    loadOptions: loadCountries,
    searchable: true,
    debounceMs: 100,
    defaultOptions: true,
    isClearable: true
  },
  parameters: {
    docs: {
      description: {
        story: "Debounce reduzido para 100ms - busca mais responsiva mas mais chamadas à API."
      }
    }
  }
}`,...(ye=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var ve,he,we;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    name: "country-slow",
    label: "País (carregamento lento)",
    loadOptions: async (inputValue?: string): Promise<SelectOption[]> => {
      // Simulate very slow network
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (!inputValue) return mockOptions;
      return mockOptions.filter(option => option.label.toLowerCase().includes(inputValue.toLowerCase()));
    },
    searchable: true,
    defaultOptions: true,
    loadingMessage: "⏳ Aguarde, carregando dados...",
    isClearable: true
  },
  parameters: {
    docs: {
      description: {
        story: "Simula uma API lenta (2s) para demonstrar o estado de loading."
      }
    }
  }
}`,...(we=(he=L.parameters)==null?void 0:he.docs)==null?void 0:we.source}}};var xe,Ce,Oe;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    name: "country-no-label",
    loadOptions: loadCountries,
    searchable: true,
    defaultOptions: true,
    isClearable: true
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo sem label - útil quando o contexto já deixa claro o que é o campo."
      }
    }
  }
}`,...(Oe=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:Oe.source}}};const Ke=["Default","WithDefaultOptions","Searchable","Clearable","Complete","CustomMessages","FastDebounce","SlowLoading","WithoutLabel"];export{P as Clearable,A as Complete,N as CustomMessages,O as Default,q as FastDebounce,E as Searchable,L as SlowLoading,S as WithDefaultOptions,M as WithoutLabel,Ke as __namedExportsOrder,Ge as default};
