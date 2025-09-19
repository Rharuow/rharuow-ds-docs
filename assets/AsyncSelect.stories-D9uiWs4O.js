import{r as a,R as d}from"./iframe-0UjUrlXI.js";import{u as De,a as Re,b as Ue,F as We}from"./index.esm-Bu0awhvF.js";import{c as u}from"./utils-CuF-iVWQ.js";const k=a.forwardRef(({name:t,label:o,loadOptions:n,className:Oe,containerClassName:we,isClearable:Se,defaultOptions:y=!1,loadingMessage:Ee="Carregando...",noOptionsMessage:Pe="Nenhuma opção encontrada",searchable:l=!1,debounceMs:I=300,onFocus:D,onBlur:R,...i},Ae)=>{var J,H,Y;const[Ne,g]=a.useState(!1),[c,v]=a.useState(!1),[f,T]=a.useState([]),[L,U]=a.useState(!1),[h,C]=a.useState(""),[W,qe]=a.useState(""),V=a.useRef(null),F=a.useRef(null),r=De(),j=r==null?void 0:r.control,Me=j&&t?Re({control:j,name:t}):void 0,p=i.value??Me??"",z=(Y=(H=(J=r==null?void 0:r.formState)==null?void 0:J.errors)==null?void 0:H[t])==null?void 0:Y.message,Te=Ne||!!p;a.useEffect(()=>{const e=setTimeout(()=>{qe(h)},I);return()=>clearTimeout(e)},[h,I]),a.useEffect(()=>{(c||y&&f.length===0)&&B(l?W:void 0)},[W,c]),a.useEffect(()=>{y===!0?B():Array.isArray(y)&&T(y)},[]);const B=async e=>{try{U(!0);const s=await n(e);T(s)}catch(s){console.error("Error loading options:",s),T([])}finally{U(!1)}};a.useEffect(()=>{const e=s=>{V.current&&!V.current.contains(s.target)&&(v(!1),g(!1),C(""))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const Le=()=>{c||(v(!0),g(!0),l&&F.current&&setTimeout(()=>{var e;return(e=F.current)==null?void 0:e.focus()},0))},X=e=>{g(!0),D&&D(e)},_=e=>{R&&R(e)},Ve=e=>{C(e.target.value)},Fe=e=>{if(r&&t&&r.setValue(t,e),i.onChange){const s={target:{value:e}};i.onChange(s)}v(!1),g(!1),C("")},ke=e=>{if(e.stopPropagation(),r&&t&&r.setValue(t,""),i.onChange){const s={target:{value:""}};i.onChange(s)}v(!1),g(!1),C("")},b=f.find(e=>e.value===p),Ie=l&&c?h:(b==null?void 0:b.label)||"";return a.createElement("div",{className:u("relative",we),ref:V},a.createElement("div",{id:i.id||t,tabIndex:l?-1:0,role:"button","aria-haspopup":"listbox","aria-expanded":c,className:u("peer flex items-center h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 py-3 text-sm transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer relative",Oe),onClick:Le,onFocus:l?void 0:X,onBlur:l?void 0:_,ref:Ae},l?a.createElement("input",{ref:F,type:"text",value:Ie,onChange:Ve,onFocus:X,onBlur:_,placeholder:o?"":"Selecione...",className:u("w-full bg-transparent border-none outline-none text-sm",!p&&!h&&"text-gray-400")}):a.createElement("span",{className:u("block truncate",!p&&"text-gray-400")},(b==null?void 0:b.label)||!o&&"Selecione..."),L&&a.createElement("div",{className:"absolute right-8 top-1/2 -translate-y-1/2"},a.createElement("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-[var(--primary,#2563eb)]"})),Se&&p&&!L&&a.createElement("button",{type:"button",tabIndex:-1,"aria-label":"Limpar seleção",className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-transparent p-1 rounded-full focus:outline-none",onClick:ke},"✕")),o&&a.createElement("label",{htmlFor:i.id||t,className:u("absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",Te?"top-0 scale-90 -translate-y-1 text-xs text-[var(--primary,#2563eb)] p-1 rounded-full bg-white":"top-3 scale-100 translate-y-0.5")},o),a.createElement("div",{className:u("absolute left-0 w-full mt-1 rounded-md shadow-lg bg-white z-20 transition-all duration-200 overflow-hidden",c?"border border-[var(--primary,#2563eb)] max-h-36 opacity-100 scale-100":"max-h-0 opacity-0 scale-95 pointer-events-none"),style:{maxHeight:c?"9.5rem":"0",overflowY:f.length>3?"auto":"hidden"}},L?a.createElement("div",{className:"px-3 py-2 text-sm text-gray-500 text-center"},Ee):f.length===0?a.createElement("div",{className:"px-3 py-2 text-sm text-gray-500 text-center"},Pe):f.map(e=>a.createElement("div",{key:e.value,className:u("px-3 py-2 cursor-pointer hover:bg-blue-50 text-sm",p===e.value&&"bg-blue-100"),onMouseDown:()=>Fe(e.value)},e.label))),z&&a.createElement("span",{className:"text-red-500 text-xs mt-1 block"},z))});k.displayName="AsyncSelect";k.__docgenInfo={description:"",methods:[],displayName:"AsyncSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},loadOptions:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue?: string) => Promise<SelectOption[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"}],raw:"Promise<SelectOption[]>"}}},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},defaultOptions:{required:!1,tsType:{name:"union",raw:"SelectOption[] | boolean",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},{name:"boolean"}]},description:"",defaultValue:{value:"false",computed:!1}},loadingMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Carregando..."',computed:!1}},noOptionsMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Nenhuma opção encontrada"',computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},debounceMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}}},composes:["Omit"]};const je=({children:t,...o})=>{const n=Ue({defaultValues:{[o.name]:""}});return d.createElement(We,{...n},d.createElement("div",{className:"w-80 p-4"},t,d.createElement("div",{className:"mt-4 p-3 bg-gray-100 rounded text-sm"},d.createElement("strong",null,"Valor selecionado:"),d.createElement("pre",{className:"mt-1 text-xs"},JSON.stringify(n.watch(),null,2)))))},Je={title:"Components/AsyncSelect",component:k,decorators:[(t,{args:o})=>d.createElement(je,{...o},d.createElement(t,null))],parameters:{layout:"centered",docs:{description:{component:"Um componente de seleção com carregamento assíncrono de opções. Suporta busca em tempo real, debounce configurável e integração completa com React Hook Form."}}},tags:["autodocs"],argTypes:{name:{description:"Nome do campo para integração com formulários",control:"text"},label:{description:"Label flutuante do campo",control:"text"},searchable:{description:"Permite busca digitando no campo",control:"boolean"},isClearable:{description:"Mostra botão para limpar seleção",control:"boolean"},debounceMs:{description:"Delay em ms para busca (evita muitas chamadas à API)",control:{type:"number",min:0,max:2e3,step:100}},defaultOptions:{description:"Carrega opções ao montar o componente",control:"boolean"},loadingMessage:{description:"Mensagem exibida durante carregamento",control:"text"},noOptionsMessage:{description:"Mensagem quando não há opções",control:"text"}}},M=[{label:"Brasil",value:"br"},{label:"Estados Unidos",value:"us"},{label:"Argentina",value:"ar"},{label:"França",value:"fr"},{label:"Alemanha",value:"de"},{label:"Japão",value:"jp"},{label:"Canadá",value:"ca"},{label:"Reino Unido",value:"uk"},{label:"Itália",value:"it"},{label:"Espanha",value:"es"}],m=async t=>(await new Promise(o=>setTimeout(o,800)),t?M.filter(o=>o.label.toLowerCase().includes(t.toLowerCase())):M),ze=async t=>{await new Promise(n=>setTimeout(n,1e3));const o=[{label:"João Silva",value:"joao.silva"},{label:"Maria Santos",value:"maria.santos"},{label:"Pedro Oliveira",value:"pedro.oliveira"},{label:"Ana Costa",value:"ana.costa"},{label:"Carlos Ferreira",value:"carlos.ferreira"}];return t?o.filter(n=>n.label.toLowerCase().includes(t.toLowerCase())):o},x={args:{name:"country",label:"País",loadOptions:m},parameters:{docs:{description:{story:"Versão básica do AsyncSelect. As opções são carregadas apenas quando o dropdown é aberto."}}}},O={args:{name:"country-default",label:"País",loadOptions:m,defaultOptions:!0},parameters:{docs:{description:{story:"Carrega as opções automaticamente quando o componente é montado."}}}},w={args:{name:"country-search",label:"País",loadOptions:m,searchable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Permite busca digitando no campo. As opções são filtradas conforme o usuário digita."}}}},S={args:{name:"country-clearable",label:"País",loadOptions:m,isClearable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Adiciona um botão 'X' para limpar a seleção quando há valor selecionado."}}}},E={args:{name:"country-complete",label:"País",loadOptions:m,searchable:!0,isClearable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Versão completa com busca e botão de limpar ativados."}}}},P={args:{name:"users",label:"Usuário",loadOptions:ze,searchable:!0,loadingMessage:"🔍 Buscando usuários...",noOptionsMessage:"😔 Nenhum usuário encontrado",defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Exemplo com mensagens personalizadas e emoji para melhor UX."}}}},A={args:{name:"country-fast",label:"País (busca rápida)",loadOptions:m,searchable:!0,debounceMs:100,defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Debounce reduzido para 100ms - busca mais responsiva mas mais chamadas à API."}}}},N={args:{name:"country-slow",label:"País (carregamento lento)",loadOptions:async t=>(await new Promise(o=>setTimeout(o,2e3)),t?M.filter(o=>o.label.toLowerCase().includes(t.toLowerCase())):M),searchable:!0,defaultOptions:!0,loadingMessage:"⏳ Aguarde, carregando dados...",isClearable:!0},parameters:{docs:{description:{story:"Simula uma API lenta (2s) para demonstrar o estado de loading."}}}},q={args:{name:"country-no-label",loadOptions:m,searchable:!0,defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Exemplo sem label - útil quando o contexto já deixa claro o que é o campo."}}}};var G,K,Q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,$,ee;O.parameters={...O.parameters,docs:{...(Z=O.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=O.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,te,oe;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(te=w.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,se,ne;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ne=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var le,ie,ce;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,de,me;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(de=P.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,be,ge;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var fe,ye,ve;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ve=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var he,Ce,xe;q.parameters={...q.parameters,docs:{...(he=q.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(xe=(Ce=q.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};const He=["Default","WithDefaultOptions","Searchable","Clearable","Complete","CustomMessages","FastDebounce","SlowLoading","WithoutLabel"];export{S as Clearable,E as Complete,P as CustomMessages,x as Default,A as FastDebounce,w as Searchable,N as SlowLoading,O as WithDefaultOptions,q as WithoutLabel,He as __namedExportsOrder,Je as default};
