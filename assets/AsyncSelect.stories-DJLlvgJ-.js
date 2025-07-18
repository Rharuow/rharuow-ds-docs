import{j as o,c as d}from"./utils-DLq8OvKD.js";import{u as Ie,a as De,b as Ue,F as Re}from"./index.esm-CJ1wkKMn.js";import{r}from"./iframe-CDxAx9rv.js";const F=r.forwardRef(({name:a,label:s,loadOptions:l,className:Oe,containerClassName:we,isClearable:Se,defaultOptions:y=!1,loadingMessage:Pe="Carregando...",noOptionsMessage:je="Nenhuma opção encontrada",searchable:i=!1,debounceMs:k=300,onFocus:I,onBlur:D,...c},Ae)=>{var J,H,Y;const[Ne,g]=r.useState(!1),[u,h]=r.useState(!1),[f,T]=r.useState([]),[L,U]=r.useState(!1),[x,v]=r.useState(""),[R,qe]=r.useState(""),V=r.useRef(null),E=r.useRef(null),t=Ie(),W=t==null?void 0:t.control,Me=W&&a?De({control:W,name:a}):void 0,m=c.value??Me??"",z=(Y=(H=(J=t==null?void 0:t.formState)==null?void 0:J.errors)==null?void 0:H[a])==null?void 0:Y.message,Te=Ne||!!m;r.useEffect(()=>{const e=setTimeout(()=>{qe(x)},k);return()=>clearTimeout(e)},[x,k]),r.useEffect(()=>{(u||y&&f.length===0)&&B(i?R:void 0)},[R,u]),r.useEffect(()=>{y===!0?B():Array.isArray(y)&&T(y)},[]);const B=async e=>{try{U(!0);const n=await l(e);T(n)}catch(n){console.error("Error loading options:",n),T([])}finally{U(!1)}};r.useEffect(()=>{const e=n=>{V.current&&!V.current.contains(n.target)&&(h(!1),g(!1),v(""))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const Le=()=>{u||(h(!0),g(!0),i&&E.current&&setTimeout(()=>{var e;return(e=E.current)==null?void 0:e.focus()},0))},X=e=>{g(!0),I&&I(e)},_=e=>{D&&D(e)},Ve=e=>{v(e.target.value)},Ee=e=>{if(t&&a&&t.setValue(a,e),c.onChange){const n={target:{value:e}};c.onChange(n)}h(!1),g(!1),v("")},Fe=e=>{if(e.stopPropagation(),t&&a&&t.setValue(a,""),c.onChange){const n={target:{value:""}};c.onChange(n)}h(!1),g(!1),v("")},b=f.find(e=>e.value===m),ke=i&&u?x:(b==null?void 0:b.label)||"";return o.jsxs("div",{className:d("relative",we),ref:V,children:[o.jsxs("div",{id:c.id||a,tabIndex:i?-1:0,role:"button","aria-haspopup":"listbox","aria-expanded":u,className:d("peer flex items-center h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 py-3 text-sm transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer relative",Oe),onClick:Le,onFocus:i?void 0:X,onBlur:i?void 0:_,ref:Ae,children:[i?o.jsx("input",{ref:E,type:"text",value:ke,onChange:Ve,onFocus:X,onBlur:_,placeholder:s?"":"Selecione...",className:d("w-full bg-transparent border-none outline-none text-sm",!m&&!x&&"text-gray-400")}):o.jsx("span",{className:d("block truncate",!m&&"text-gray-400"),children:(b==null?void 0:b.label)||!s&&"Selecione..."}),L&&o.jsx("div",{className:"absolute right-8 top-1/2 -translate-y-1/2",children:o.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-[var(--primary,#2563eb)]"})}),Se&&m&&!L&&o.jsx("button",{type:"button",tabIndex:-1,"aria-label":"Limpar seleção",className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-transparent p-1 rounded-full focus:outline-none",onClick:Fe,children:"✕"})]}),s&&o.jsx("label",{htmlFor:c.id||a,className:d("absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",Te?"top-0 scale-90 -translate-y-1 text-xs text-blue-400 p-1 rounded-full bg-white":"top-3 scale-100 translate-y-0.5"),children:s}),o.jsx("div",{className:d("absolute left-0 w-full mt-1 rounded-md shadow-lg bg-white z-20 transition-all duration-200 overflow-hidden",u?"border border-[var(--primary,#2563eb)] max-h-36 opacity-100 scale-100":"max-h-0 opacity-0 scale-95 pointer-events-none"),style:{maxHeight:u?"9.5rem":"0",overflowY:f.length>3?"auto":"hidden"},children:L?o.jsx("div",{className:"px-3 py-2 text-sm text-gray-500 text-center",children:Pe}):f.length===0?o.jsx("div",{className:"px-3 py-2 text-sm text-gray-500 text-center",children:je}):f.map(e=>o.jsx("div",{className:d("px-3 py-2 cursor-pointer hover:bg-blue-50 text-sm",m===e.value&&"bg-blue-100"),onMouseDown:()=>Ee(e.value),children:e.label},e.value))}),z&&o.jsx("span",{className:"text-red-500 text-xs mt-1 block",children:z})]})});F.displayName="AsyncSelect";F.__docgenInfo={description:"",methods:[],displayName:"AsyncSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},loadOptions:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue?: string) => Promise<SelectOption[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"}],raw:"Promise<SelectOption[]>"}}},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},defaultOptions:{required:!1,tsType:{name:"union",raw:"SelectOption[] | boolean",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},{name:"boolean"}]},description:"",defaultValue:{value:"false",computed:!1}},loadingMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Carregando..."',computed:!1}},noOptionsMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Nenhuma opção encontrada"',computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},debounceMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}}},composes:["Omit"]};const We=({children:a,...s})=>{const l=Ue({defaultValues:{[s.name]:""}});return o.jsx(Re,{...l,children:o.jsxs("div",{className:"w-80 p-4",children:[a,o.jsxs("div",{className:"mt-4 p-3 bg-gray-100 rounded text-sm",children:[o.jsx("strong",{children:"Valor selecionado:"}),o.jsx("pre",{className:"mt-1 text-xs",children:JSON.stringify(l.watch(),null,2)})]})]})})},Je={title:"Components/AsyncSelect",component:F,decorators:[(a,{args:s})=>o.jsx(We,{...s,children:o.jsx(a,{})})],parameters:{layout:"centered",docs:{description:{component:"Um componente de seleção com carregamento assíncrono de opções. Suporta busca em tempo real, debounce configurável e integração completa com React Hook Form."}}},tags:["autodocs"],argTypes:{name:{description:"Nome do campo para integração com formulários",control:"text"},label:{description:"Label flutuante do campo",control:"text"},searchable:{description:"Permite busca digitando no campo",control:"boolean"},isClearable:{description:"Mostra botão para limpar seleção",control:"boolean"},debounceMs:{description:"Delay em ms para busca (evita muitas chamadas à API)",control:{type:"number",min:0,max:2e3,step:100}},defaultOptions:{description:"Carrega opções ao montar o componente",control:"boolean"},loadingMessage:{description:"Mensagem exibida durante carregamento",control:"text"},noOptionsMessage:{description:"Mensagem quando não há opções",control:"text"}}},M=[{label:"Brasil",value:"br"},{label:"Estados Unidos",value:"us"},{label:"Argentina",value:"ar"},{label:"França",value:"fr"},{label:"Alemanha",value:"de"},{label:"Japão",value:"jp"},{label:"Canadá",value:"ca"},{label:"Reino Unido",value:"uk"},{label:"Itália",value:"it"},{label:"Espanha",value:"es"}],p=async a=>(await new Promise(s=>setTimeout(s,800)),a?M.filter(s=>s.label.toLowerCase().includes(a.toLowerCase())):M),ze=async a=>{await new Promise(l=>setTimeout(l,1e3));const s=[{label:"João Silva",value:"joao.silva"},{label:"Maria Santos",value:"maria.santos"},{label:"Pedro Oliveira",value:"pedro.oliveira"},{label:"Ana Costa",value:"ana.costa"},{label:"Carlos Ferreira",value:"carlos.ferreira"}];return a?s.filter(l=>l.label.toLowerCase().includes(a.toLowerCase())):s},C={args:{name:"country",label:"País",loadOptions:p},parameters:{docs:{description:{story:"Versão básica do AsyncSelect. As opções são carregadas apenas quando o dropdown é aberto."}}}},O={args:{name:"country-default",label:"País",loadOptions:p,defaultOptions:!0},parameters:{docs:{description:{story:"Carrega as opções automaticamente quando o componente é montado."}}}},w={args:{name:"country-search",label:"País",loadOptions:p,searchable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Permite busca digitando no campo. As opções são filtradas conforme o usuário digita."}}}},S={args:{name:"country-clearable",label:"País",loadOptions:p,isClearable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Adiciona um botão 'X' para limpar a seleção quando há valor selecionado."}}}},P={args:{name:"country-complete",label:"País",loadOptions:p,searchable:!0,isClearable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Versão completa com busca e botão de limpar ativados."}}}},j={args:{name:"users",label:"Usuário",loadOptions:ze,searchable:!0,loadingMessage:"🔍 Buscando usuários...",noOptionsMessage:"😔 Nenhum usuário encontrado",defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Exemplo com mensagens personalizadas e emoji para melhor UX."}}}},A={args:{name:"country-fast",label:"País (busca rápida)",loadOptions:p,searchable:!0,debounceMs:100,defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Debounce reduzido para 100ms - busca mais responsiva mas mais chamadas à API."}}}},N={args:{name:"country-slow",label:"País (carregamento lento)",loadOptions:async a=>(await new Promise(s=>setTimeout(s,2e3)),a?M.filter(s=>s.label.toLowerCase().includes(a.toLowerCase())):M),searchable:!0,defaultOptions:!0,loadingMessage:"⏳ Aguarde, carregando dados...",isClearable:!0},parameters:{docs:{description:{story:"Simula uma API lenta (2s) para demonstrar o estado de loading."}}}},q={args:{name:"country-no-label",loadOptions:p,searchable:!0,defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Exemplo sem label - útil quando o contexto já deixa claro o que é o campo."}}}};var G,K,Q;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,$,ee;O.parameters={...O.parameters,docs:{...(Z=O.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=O.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,oe,se;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,te,ne;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ne=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var le,ie,ce;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,de,pe;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(de=j.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,be,ge;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var fe,ye,he;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var xe,ve,Ce;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ce=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};const He=["Default","WithDefaultOptions","Searchable","Clearable","Complete","CustomMessages","FastDebounce","SlowLoading","WithoutLabel"];export{S as Clearable,P as Complete,j as CustomMessages,C as Default,A as FastDebounce,w as Searchable,N as SlowLoading,O as WithDefaultOptions,q as WithoutLabel,He as __namedExportsOrder,Je as default};
