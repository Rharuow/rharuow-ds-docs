import{r as a,R as d}from"./iframe-D80oVCNt.js";import{u as aa,a as ta,b as sa,F as oa}from"./index.esm-2pgJAuOa.js";import{c as f}from"./utils-CuF-iVWQ.js";const F=a.forwardRef(({name:t,label:s,loadOptions:h,className:Be,containerClassName:Ie,isClearable:Re,defaultOptions:x=!1,loadingMessage:We="Carregando...",noOptionsMessage:ze="Nenhuma opção encontrada",searchable:u=!1,debounceMs:H=300,maxSelectedDisplay:U=3,onFocus:X,onBlur:J,...i},Fe)=>{var se,oe,ne;const[je,m]=a.useState(!1),[n,L]=a.useState(!1),[p,D]=a.useState([]),[T,_]=a.useState(!1),[V,q]=a.useState(""),[$,He]=a.useState(""),[B,Ue]=a.useState({top:0,left:0,width:0}),b=a.useRef(null),I=a.useRef(null),l=aa(),G=l==null?void 0:l.control,Xe=G&&t?ta({control:G,name:t}):void 0,r=i.value??Xe??[],K=(ne=(oe=(se=l==null?void 0:l.formState)==null?void 0:se.errors)==null?void 0:oe[t])==null?void 0:ne.message,Je=je||r&&r.length>0,Q=a.useCallback(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,[]),y=a.useCallback(()=>{if(b.current&&n){const e=b.current.getBoundingClientRect(),o=Q(),c=window.innerHeight,R=window.innerWidth,g=152;let W=e.bottom+4,z=e.left;if(o){const re=c-e.bottom,Ze=e.top;re<g&&Ze>g&&(W=e.top-g-4);const le=16,ea=R-e.width-le;z=Math.min(Math.max(z,le),ea)}else c-e.bottom<g&&(W=e.top-g-4);Ue({top:W,left:z,width:e.width})}},[n,Q]);a.useEffect(()=>{if(y(),n){const e=()=>y(),o=()=>y();return window.addEventListener("resize",e),window.addEventListener("scroll",o,!0),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",o,!0)}}},[n,y]),a.useEffect(()=>{const e=setTimeout(()=>{He(V)},H);return()=>clearTimeout(e)},[V,H]),a.useEffect(()=>{(n||x&&p.length===0)&&Y(u?$:void 0)},[$,n]),a.useEffect(()=>{x===!0?Y():Array.isArray(x)&&D(x)},[]);const Y=async e=>{try{_(!0);const o=await h(e);D(o)}catch(o){console.error("Error loading options:",o),D([])}finally{_(!1)}};a.useEffect(()=>{const e=o=>{b.current&&!b.current.contains(o.target)&&(L(!1),m(!1),q(""))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const _e=()=>{n||(L(!0),m(!0),u&&I.current&&setTimeout(()=>{var e;return(e=I.current)==null?void 0:e.focus()},0))},Z=e=>{m(!0),X&&X(e)},ee=e=>{J&&J(e)},$e=e=>{q(e.target.value)},Ge=e=>{let o;r.includes(e)?o=r.filter(c=>c!==e):o=[...r,e],l&&t&&l.setValue(t,o),i.onChange&&i.onChange({target:{value:o}}),m(!0)},Ke=(e,o)=>{o.stopPropagation();const c=r.filter(R=>R!==e);l&&t&&l.setValue(t,c),i.onChange&&i.onChange({target:{value:c}})},Qe=e=>{e.stopPropagation(),l&&t&&l.setValue(t,[]),i.onChange&&i.onChange({target:{value:[]}}),L(!1),m(!1),q("")},ae=p.filter(e=>r.includes(e.value)),Ye=ae.slice(0,U),te=ae.length-U;return a.createElement("div",{className:f("relative",Ie),ref:b},a.createElement("div",{id:i.id||t,tabIndex:u?-1:0,role:"button","aria-haspopup":"listbox","aria-expanded":n,className:f("peer flex items-center min-h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 py-2 text-sm transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer relative",Be),onClick:_e,onFocus:u?void 0:Z,onBlur:u?void 0:ee,ref:Fe},a.createElement("div",{className:"flex flex-wrap gap-1 items-center min-h-[1.5rem] w-full"},Ye.map(e=>a.createElement("span",{key:e.value,className:"flex items-center border border-blue-200 bg-blue-50 text-blue-700 rounded-2xl px-3 py-1 text-xs shadow-sm gap-2",style:{maxWidth:"140px"}},a.createElement("span",{className:"truncate",title:e.label},e.label),a.createElement("button",{type:"button",className:"ml-1 text-[var(--primary,#2563eb)] hover:text-red-500 focus:outline-none w-4 h-4 flex items-center justify-center rounded-full transition-colors duration-150","aria-label":`Remover ${e.label}`,tabIndex:-1,onClick:o=>Ke(e.value,o)},a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M3 3L9 9M9 3L3 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}))))),te>0&&a.createElement("span",{className:"flex items-center border border-gray-200 bg-gray-100 text-gray-600 rounded-2xl px-3 py-1 text-xs"},"+",te," mais"),u?a.createElement("input",{ref:I,type:"text",value:V,onChange:$e,onFocus:Z,onBlur:ee,placeholder:r.length===0&&!s?"Selecione...":"",className:"flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm"}):r.length===0&&!s&&a.createElement("span",{className:"text-gray-400 text-sm"},"Selecione...")),T&&a.createElement("div",{className:"absolute right-8 top-1/2 -translate-y-1/2"},a.createElement("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-[var(--primary,#2563eb)]"})),Re&&r&&r.length>0&&!T&&a.createElement("button",{type:"button",tabIndex:-1,"aria-label":"Limpar seleção",className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-transparent p-1 rounded-full focus:outline-none",onClick:Qe},"✕")),s&&a.createElement("label",{htmlFor:i.id||t,className:f("absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",Je?"top-0 scale-90 -translate-y-1 text-xs text-[var(--primary,#2563eb)] p-1 rounded-full bg-white":"top-3 scale-100 translate-y-0.5")},s),a.createElement("div",{className:f("absolute left-0 w-full mt-1 rounded-md transition-all duration-200 overflow-hidden","bg-[var(--select-dropdown-bg)] border-[var(--select-dropdown-border)] text-[var(--select-dropdown-text)]",n?"border max-h-36 opacity-100 scale-100":"max-h-0 opacity-0 scale-95 pointer-events-none"),style:{maxHeight:n?"9.5rem":"0",overflowY:p.length>3?"auto":"hidden",position:"fixed",top:n?`${B.top}px`:"auto",left:n?`${B.left}px`:"auto",width:n?`${B.width}px`:"auto",zIndex:9999,boxShadow:n?"var(--select-dropdown-shadow)":"none"}},T?a.createElement("div",{className:"px-3 py-2 text-sm text-gray-500 text-center"},We):p.length===0?a.createElement("div",{className:"px-3 py-2 text-sm text-gray-500 text-center"},ze):p.map(e=>a.createElement("div",{key:e.value,className:f("px-3 py-2 cursor-pointer text-sm flex items-center gap-2 transition-colors duration-150","hover:bg-[var(--select-dropdown-hover)]",r.includes(e.value)&&"bg-[var(--select-dropdown-selected)] font-semibold"),onMouseDown:()=>Ge(e.value)},a.createElement("input",{type:"checkbox",checked:r.includes(e.value),readOnly:!0,className:"accent-blue-500"}),e.label))),K&&a.createElement("span",{className:"text-red-500 text-xs mt-1 block"},K))});F.displayName="MultiAsyncSelect";F.__docgenInfo={description:"",methods:[],displayName:"MultiAsyncSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},loadOptions:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue?: string) => Promise<SelectOption[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"}],raw:"Promise<SelectOption[]>"}}},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},defaultOptions:{required:!1,tsType:{name:"union",raw:"SelectOption[] | boolean",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},{name:"boolean"}]},description:"",defaultValue:{value:"false",computed:!1}},loadingMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Carregando..."',computed:!1}},noOptionsMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Nenhuma opção encontrada"',computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},debounceMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},maxSelectedDisplay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}}},composes:["Omit"]};const na=({children:t,...s})=>{const h=sa({defaultValues:{[s.name]:[]}});return d.createElement(oa,{...h},d.createElement("div",{className:"w-80 p-4"},t,d.createElement("div",{className:"mt-4 p-3 bg-gray-100 rounded text-sm"},d.createElement("strong",null,"Valores selecionados:"),d.createElement("pre",{className:"mt-1 text-xs"},JSON.stringify(h.watch(),null,2)))))},ca={title:"Components/MultiAsyncSelect",component:F,decorators:[(t,{args:s})=>d.createElement(na,{...s},d.createElement(t,null))],parameters:{layout:"centered",docs:{description:{component:"Um componente de múltipla seleção com carregamento assíncrono de opções. Combina as funcionalidades do MultiSelect com AsyncSelect, permitindo selecionar múltiplas opções carregadas dinamicamente via API."}}},tags:["autodocs"],argTypes:{name:{description:"Nome do campo para integração com formulários",control:"text"},label:{description:"Label flutuante do campo",control:"text"},searchable:{description:"Permite busca digitando no campo",control:"boolean"},isClearable:{description:"Mostra botão para limpar todas as seleções",control:"boolean"},debounceMs:{description:"Delay em ms para busca (evita muitas chamadas à API)",control:{type:"number",min:0,max:2e3,step:100}},defaultOptions:{description:"Carrega opções ao montar o componente",control:"boolean"},maxSelectedDisplay:{description:"Máximo de itens selecionados exibidos antes de mostrar '+X mais'",control:{type:"number",min:1,max:10,step:1}},loadingMessage:{description:"Mensagem exibida durante carregamento",control:"text"},noOptionsMessage:{description:"Mensagem quando não há opções",control:"text"}}},ie=[{label:"Brasil",value:"br"},{label:"Estados Unidos",value:"us"},{label:"Argentina",value:"ar"},{label:"França",value:"fr"},{label:"Alemanha",value:"de"},{label:"Japão",value:"jp"},{label:"Canadá",value:"ca"},{label:"Reino Unido",value:"uk"},{label:"Itália",value:"it"},{label:"Espanha",value:"es"},{label:"México",value:"mx"},{label:"China",value:"cn"},{label:"Índia",value:"in"},{label:"Austrália",value:"au"},{label:"Coreia do Sul",value:"kr"}],A=[{label:"JavaScript",value:"javascript"},{label:"TypeScript",value:"typescript"},{label:"React",value:"react"},{label:"Vue.js",value:"vue"},{label:"Angular",value:"angular"},{label:"Node.js",value:"nodejs"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"PHP",value:"php"},{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"Swift",value:"swift"},{label:"Kotlin",value:"kotlin"},{label:"Docker",value:"docker"},{label:"AWS",value:"aws"},{label:"Azure",value:"azure"},{label:"MongoDB",value:"mongodb"},{label:"PostgreSQL",value:"postgresql"},{label:"Redis",value:"redis"}],v=async t=>(await new Promise(s=>setTimeout(s,600)),t?ie.filter(s=>s.label.toLowerCase().includes(t.toLowerCase())):ie),j=async t=>(await new Promise(s=>setTimeout(s,800)),t?A.filter(s=>s.label.toLowerCase().includes(t.toLowerCase())):A),w={args:{name:"countries",label:"Países",loadOptions:v,defaultOptions:!0},parameters:{docs:{description:{story:"Versão básica do MultiAsyncSelect com carregamento automático das opções."}}}},S={args:{name:"countries-search",label:"Países",loadOptions:v,searchable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Permite busca digitando no campo. As opções são filtradas conforme o usuário digita."}}}},C={args:{name:"countries-clearable",label:"Países",loadOptions:v,isClearable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Adiciona um botão 'X' para limpar todas as seleções de uma vez."}}}},O={args:{name:"skills-complete",label:"Habilidades Técnicas",loadOptions:j,searchable:!0,isClearable:!0,defaultOptions:!0,maxSelectedDisplay:2},parameters:{docs:{description:{story:"Versão completa com busca, botão limpar e limite de exibição de itens selecionados."}}}},E={args:{name:"skills-custom",label:"Tecnologias",loadOptions:j,searchable:!0,loadingMessage:"🔍 Buscando tecnologias...",noOptionsMessage:"😔 Nenhuma tecnologia encontrada",defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Exemplo com mensagens personalizadas e emoji para melhor UX."}}}},k={args:{name:"countries-fast",label:"Países (busca rápida)",loadOptions:v,searchable:!0,debounceMs:100,defaultOptions:!0,isClearable:!0,maxSelectedDisplay:3},parameters:{docs:{description:{story:"Debounce reduzido para 100ms - busca mais responsiva mas mais chamadas à API."}}}},P={args:{name:"skills-slow",label:"Habilidades (carregamento lento)",loadOptions:async t=>(await new Promise(s=>setTimeout(s,2e3)),t?A.filter(s=>s.label.toLowerCase().includes(t.toLowerCase())):A),searchable:!0,defaultOptions:!0,loadingMessage:"⏳ Carregando habilidades...",isClearable:!0,maxSelectedDisplay:2},parameters:{docs:{description:{story:"Simula uma API lenta (2s) para demonstrar o estado de loading."}}}},M={args:{name:"countries-limited",label:"Países (máx 1 visível)",loadOptions:v,searchable:!0,defaultOptions:!0,isClearable:!0,maxSelectedDisplay:1},parameters:{docs:{description:{story:"Demonstra a funcionalidade de limitar quantos itens selecionados são exibidos."}}}},N={args:{name:"skills-no-label",loadOptions:j,searchable:!0,defaultOptions:!0,isClearable:!0,maxSelectedDisplay:3},parameters:{docs:{description:{story:"Exemplo sem label - útil quando o contexto já deixa claro o que é o campo."}}}};var ce,de,ue;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    name: "countries",
    label: "Países",
    loadOptions: loadCountries,
    defaultOptions: true
  },
  parameters: {
    docs: {
      description: {
        story: "Versão básica do MultiAsyncSelect com carregamento automático das opções."
      }
    }
  }
}`,...(ue=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,be;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    name: "countries-search",
    label: "Países",
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
}`,...(be=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ge,fe,ve;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    name: "countries-clearable",
    label: "Países",
    loadOptions: loadCountries,
    isClearable: true,
    defaultOptions: true
  },
  parameters: {
    docs: {
      description: {
        story: "Adiciona um botão 'X' para limpar todas as seleções de uma vez."
      }
    }
  }
}`,...(ve=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var he,xe,ye;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    name: "skills-complete",
    label: "Habilidades Técnicas",
    loadOptions: loadSkills,
    searchable: true,
    isClearable: true,
    defaultOptions: true,
    maxSelectedDisplay: 2
  },
  parameters: {
    docs: {
      description: {
        story: "Versão completa com busca, botão limpar e limite de exibição de itens selecionados."
      }
    }
  }
}`,...(ye=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var we,Se,Ce;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    name: "skills-custom",
    label: "Tecnologias",
    loadOptions: loadSkills,
    searchable: true,
    loadingMessage: "🔍 Buscando tecnologias...",
    noOptionsMessage: "😔 Nenhuma tecnologia encontrada",
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
}`,...(Ce=(Se=E.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var Oe,Ee,ke;k.parameters={...k.parameters,docs:{...(Oe=k.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    name: "countries-fast",
    label: "Países (busca rápida)",
    loadOptions: loadCountries,
    searchable: true,
    debounceMs: 100,
    defaultOptions: true,
    isClearable: true,
    maxSelectedDisplay: 3
  },
  parameters: {
    docs: {
      description: {
        story: "Debounce reduzido para 100ms - busca mais responsiva mas mais chamadas à API."
      }
    }
  }
}`,...(ke=(Ee=k.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};var Pe,Me,Ne;P.parameters={...P.parameters,docs:{...(Pe=P.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    name: "skills-slow",
    label: "Habilidades (carregamento lento)",
    loadOptions: async (inputValue?: string): Promise<SelectOption[]> => {
      // Simulate very slow network
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (!inputValue) return mockSkills;
      return mockSkills.filter(skill => skill.label.toLowerCase().includes(inputValue.toLowerCase()));
    },
    searchable: true,
    defaultOptions: true,
    loadingMessage: "⏳ Carregando habilidades...",
    isClearable: true,
    maxSelectedDisplay: 2
  },
  parameters: {
    docs: {
      description: {
        story: "Simula uma API lenta (2s) para demonstrar o estado de loading."
      }
    }
  }
}`,...(Ne=(Me=P.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source}}};var Ae,Le,De;M.parameters={...M.parameters,docs:{...(Ae=M.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    name: "countries-limited",
    label: "Países (máx 1 visível)",
    loadOptions: loadCountries,
    searchable: true,
    defaultOptions: true,
    isClearable: true,
    maxSelectedDisplay: 1
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstra a funcionalidade de limitar quantos itens selecionados são exibidos."
      }
    }
  }
}`,...(De=(Le=M.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var Te,Ve,qe;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    name: "skills-no-label",
    loadOptions: loadSkills,
    searchable: true,
    defaultOptions: true,
    isClearable: true,
    maxSelectedDisplay: 3
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo sem label - útil quando o contexto já deixa claro o que é o campo."
      }
    }
  }
}`,...(qe=(Ve=N.parameters)==null?void 0:Ve.docs)==null?void 0:qe.source}}};const da=["Default","Searchable","WithClearButton","Complete","WithCustomMessages","FastSearch","SlowLoading","LimitedDisplay","WithoutLabel"];export{O as Complete,w as Default,k as FastSearch,M as LimitedDisplay,S as Searchable,P as SlowLoading,C as WithClearButton,E as WithCustomMessages,N as WithoutLabel,da as __namedExportsOrder,ca as default};
