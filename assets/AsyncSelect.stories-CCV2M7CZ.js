import{r as a,R as u}from"./iframe-BP7VOMC9.js";import{a as Ge,b as Ke,u as Qe,F as Ze}from"./index.esm-D0SS3XCx.js";import{c as d}from"./utils-CuF-iVWQ.js";const W=a.forwardRef(({name:t,label:o,loadOptions:l,className:qe,containerClassName:Te,isClearable:Ve,defaultOptions:h=!1,loadingMessage:ke="Carregando...",noOptionsMessage:Fe="Nenhuma opção encontrada",searchable:i=!1,debounceMs:z=300,onFocus:U,onBlur:j,...c},De)=>{var Q,Z,ee;const[Ie,f]=a.useState(!1),[r,w]=a.useState(!1),[g,k]=a.useState([]),[F,H]=a.useState(!1),[x,C]=a.useState(""),[X,Be]=a.useState(""),[D,Re]=a.useState({top:0,left:0,width:0}),y=a.useRef(null),I=a.useRef(null),n=Ge(),_=n==null?void 0:n.control,We=_&&t?Ke({control:_,name:t}):void 0,m=c.value??We??"",J=(ee=(Z=(Q=n==null?void 0:n.formState)==null?void 0:Q.errors)==null?void 0:Z[t])==null?void 0:ee.message,ze=Ie||!!m,$=a.useCallback(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,[]),O=a.useCallback(()=>{if(y.current&&r){const e=y.current.getBoundingClientRect(),s=$(),ae=window.innerHeight,Je=window.innerWidth,v=152;let B=e.bottom+4,R=e.left;if(s){const te=ae-e.bottom,$e=e.top;te<v&&$e>v&&(B=e.top-v-4);const oe=16,Ye=Je-e.width-oe;R=Math.min(Math.max(R,oe),Ye)}else ae-e.bottom<v&&(B=e.top-v-4);Re({top:B,left:R,width:e.width})}},[r,$]);a.useEffect(()=>{if(O(),r){const e=()=>O(),s=()=>O();return window.addEventListener("resize",e),window.addEventListener("scroll",s,!0),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",s,!0)}}},[r,O]),a.useEffect(()=>{const e=setTimeout(()=>{Be(x)},z);return()=>clearTimeout(e)},[x,z]),a.useEffect(()=>{(r||h&&g.length===0)&&Y(i?X:void 0)},[X,r]),a.useEffect(()=>{h===!0?Y():Array.isArray(h)&&k(h)},[]);const Y=async e=>{try{H(!0);const s=await l(e);k(s)}catch(s){console.error("Error loading options:",s),k([])}finally{H(!1)}};a.useEffect(()=>{const e=s=>{y.current&&!y.current.contains(s.target)&&(w(!1),f(!1),C(""))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const Ue=()=>{r||(w(!0),f(!0),i&&I.current&&setTimeout(()=>{var e;return(e=I.current)==null?void 0:e.focus()},0))},G=e=>{f(!0),U&&U(e)},K=e=>{j&&j(e)},je=e=>{C(e.target.value)},He=e=>{if(n&&t&&n.setValue(t,e),c.onChange){const s={target:{value:e}};c.onChange(s)}w(!1),f(!1),C("")},Xe=e=>{if(e.stopPropagation(),n&&t&&n.setValue(t,""),c.onChange){const s={target:{value:""}};c.onChange(s)}w(!1),f(!1),C("")},b=g.find(e=>e.value===m),_e=i&&r?x:(b==null?void 0:b.label)||"";return a.createElement("div",{className:d("relative",Te),ref:y},a.createElement("div",{id:c.id||t,tabIndex:i?-1:0,role:"button","aria-haspopup":"listbox","aria-expanded":r,className:d("peer flex items-center h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 py-3 text-sm transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer relative",qe),onClick:Ue,onFocus:i?void 0:G,onBlur:i?void 0:K,ref:De},i?a.createElement("input",{ref:I,type:"text",value:_e,onChange:je,onFocus:G,onBlur:K,placeholder:o?"":"Selecione...",className:d("w-full bg-transparent border-none outline-none text-sm",!m&&!x&&"text-gray-400")}):a.createElement("span",{className:d("block truncate",!m&&"text-gray-400")},(b==null?void 0:b.label)||!o&&"Selecione..."),F&&a.createElement("div",{className:"absolute right-8 top-1/2 -translate-y-1/2"},a.createElement("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-[var(--primary,#2563eb)]"})),Ve&&m&&!F&&a.createElement("button",{type:"button",tabIndex:-1,"aria-label":"Limpar seleção",className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-transparent p-1 rounded-full focus:outline-none",onClick:Xe},"✕")),o&&a.createElement("label",{htmlFor:c.id||t,className:d("absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",ze?"top-0 scale-90 -translate-y-1 text-xs text-[var(--primary,#2563eb)] p-1 rounded-full bg-white":"top-3 scale-100 translate-y-0.5")},o),a.createElement("div",{className:d("absolute left-0 w-full mt-1 rounded-md transition-all duration-200 overflow-hidden","bg-[var(--select-dropdown-bg)] border-[var(--select-dropdown-border)] text-[var(--select-dropdown-text)]",r?"border max-h-36 opacity-100 scale-100":"max-h-0 opacity-0 scale-95 pointer-events-none"),style:{maxHeight:r?"9.5rem":"0",overflowY:g.length>3?"auto":"hidden",position:"fixed",top:r?`${D.top}px`:"auto",left:r?`${D.left}px`:"auto",width:r?`${D.width}px`:"auto",zIndex:9999,boxShadow:r?"var(--select-dropdown-shadow)":"none"}},F?a.createElement("div",{className:"px-3 py-2 text-sm text-gray-500 text-center"},ke):g.length===0?a.createElement("div",{className:"px-3 py-2 text-sm text-gray-500 text-center"},Fe):g.map(e=>a.createElement("div",{key:e.value,className:d("px-3 py-2 cursor-pointer text-sm transition-colors duration-150","hover:bg-[var(--select-dropdown-hover)]",m===e.value&&"bg-[var(--select-dropdown-selected)]"),onMouseDown:()=>He(e.value)},e.label))),J&&a.createElement("span",{className:"text-red-500 text-xs mt-1 block"},J))});W.displayName="AsyncSelect";W.__docgenInfo={description:"",methods:[],displayName:"AsyncSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},loadOptions:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue?: string) => Promise<SelectOption[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"}],raw:"Promise<SelectOption[]>"}}},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},defaultOptions:{required:!1,tsType:{name:"union",raw:"SelectOption[] | boolean",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},{name:"boolean"}]},description:"",defaultValue:{value:"false",computed:!1}},loadingMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Carregando..."',computed:!1}},noOptionsMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Nenhuma opção encontrada"',computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},debounceMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}}},composes:["Omit"]};const ea=({children:t,...o})=>{const l=Qe({defaultValues:{[o.name]:""}});return u.createElement(Ze,{...l},u.createElement("div",{className:"w-80 p-4"},t,u.createElement("div",{className:"mt-4 p-3 bg-gray-100 rounded text-sm"},u.createElement("strong",null,"Valor selecionado:"),u.createElement("pre",{className:"mt-1 text-xs"},JSON.stringify(l.watch(),null,2)))))},sa={title:"Components/AsyncSelect",component:W,decorators:[(t,{args:o})=>u.createElement(ea,{...o},u.createElement(t,null))],parameters:{layout:"centered",docs:{description:{component:"Um componente de seleção com carregamento assíncrono de opções. Suporta busca em tempo real, debounce configurável e integração completa com React Hook Form."}}},tags:["autodocs"],argTypes:{name:{description:"Nome do campo para integração com formulários",control:"text"},label:{description:"Label flutuante do campo",control:"text"},searchable:{description:"Permite busca digitando no campo",control:"boolean"},isClearable:{description:"Mostra botão para limpar seleção",control:"boolean"},debounceMs:{description:"Delay em ms para busca (evita muitas chamadas à API)",control:{type:"number",min:0,max:2e3,step:100}},defaultOptions:{description:"Carrega opções ao montar o componente",control:"boolean"},loadingMessage:{description:"Mensagem exibida durante carregamento",control:"text"},noOptionsMessage:{description:"Mensagem quando não há opções",control:"text"}}},V=[{label:"Brasil",value:"br"},{label:"Estados Unidos",value:"us"},{label:"Argentina",value:"ar"},{label:"França",value:"fr"},{label:"Alemanha",value:"de"},{label:"Japão",value:"jp"},{label:"Canadá",value:"ca"},{label:"Reino Unido",value:"uk"},{label:"Itália",value:"it"},{label:"Espanha",value:"es"}],p=async t=>(await new Promise(o=>setTimeout(o,800)),t?V.filter(o=>o.label.toLowerCase().includes(t.toLowerCase())):V),aa=async t=>{await new Promise(l=>setTimeout(l,1e3));const o=[{label:"João Silva",value:"joao.silva"},{label:"Maria Santos",value:"maria.santos"},{label:"Pedro Oliveira",value:"pedro.oliveira"},{label:"Ana Costa",value:"ana.costa"},{label:"Carlos Ferreira",value:"carlos.ferreira"}];return t?o.filter(l=>l.label.toLowerCase().includes(t.toLowerCase())):o},S={args:{name:"country",label:"País",loadOptions:p},parameters:{docs:{description:{story:"Versão básica do AsyncSelect. As opções são carregadas apenas quando o dropdown é aberto."}}}},E={args:{name:"country-default",label:"País",loadOptions:p,defaultOptions:!0},parameters:{docs:{description:{story:"Carrega as opções automaticamente quando o componente é montado."}}}},P={args:{name:"country-search",label:"País",loadOptions:p,searchable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Permite busca digitando no campo. As opções são filtradas conforme o usuário digita."}}}},A={args:{name:"country-clearable",label:"País",loadOptions:p,isClearable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Adiciona um botão 'X' para limpar a seleção quando há valor selecionado."}}}},M={args:{name:"country-complete",label:"País",loadOptions:p,searchable:!0,isClearable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Versão completa com busca e botão de limpar ativados."}}}},N={args:{name:"users",label:"Usuário",loadOptions:aa,searchable:!0,loadingMessage:"🔍 Buscando usuários...",noOptionsMessage:"😔 Nenhum usuário encontrado",defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Exemplo com mensagens personalizadas e emoji para melhor UX."}}}},L={args:{name:"country-fast",label:"País (busca rápida)",loadOptions:p,searchable:!0,debounceMs:100,defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Debounce reduzido para 100ms - busca mais responsiva mas mais chamadas à API."}}}},q={args:{name:"country-slow",label:"País (carregamento lento)",loadOptions:async t=>(await new Promise(o=>setTimeout(o,2e3)),t?V.filter(o=>o.label.toLowerCase().includes(t.toLowerCase())):V),searchable:!0,defaultOptions:!0,loadingMessage:"⏳ Aguarde, carregando dados...",isClearable:!0},parameters:{docs:{description:{story:"Simula uma API lenta (2s) para demonstrar o estado de loading."}}}},T={args:{name:"country-no-label",loadOptions:p,searchable:!0,defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Exemplo sem label - útil quando o contexto já deixa claro o que é o campo."}}}};var re,se,ne;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ne=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var le,ie,ce;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,pe;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,be,fe;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(fe=(be=A.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ge,ye,ve;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(ye=M.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var he,we,xe;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(xe=(we=N.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var Ce,Oe,Se;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Se=(Oe=L.parameters)==null?void 0:Oe.docs)==null?void 0:Se.source}}};var Ee,Pe,Ae;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ae=(Pe=q.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};var Me,Ne,Le;T.parameters={...T.parameters,docs:{...(Me=T.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Le=(Ne=T.parameters)==null?void 0:Ne.docs)==null?void 0:Le.source}}};const na=["Default","WithDefaultOptions","Searchable","Clearable","Complete","CustomMessages","FastDebounce","SlowLoading","WithoutLabel"];export{A as Clearable,M as Complete,N as CustomMessages,S as Default,L as FastDebounce,P as Searchable,q as SlowLoading,E as WithDefaultOptions,T as WithoutLabel,na as __namedExportsOrder,sa as default};
