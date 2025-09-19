import{r as a,R as c}from"./iframe-CllnT1cI.js";import{u as _e,a as Ye,b as Ge,F as Ke}from"./index.esm-D-xy-1vJ.js";import{c as b}from"./utils-CuF-iVWQ.js";const I=a.forwardRef(({name:t,label:s,loadOptions:f,className:Me,containerClassName:Ae,isClearable:Le,defaultOptions:v=!1,loadingMessage:Te="Carregando...",noOptionsMessage:De="Nenhuma opção encontrada",searchable:d=!1,debounceMs:F=300,maxSelectedDisplay:W=3,onFocus:j,onBlur:B,...i},Ve)=>{var $,Z,ee;const[qe,u]=a.useState(!1),[n,A]=a.useState(!1),[m,L]=a.useState([]),[T,H]=a.useState(!1),[D,V]=a.useState(""),[X,Re]=a.useState(""),[q,Ie]=a.useState({top:0,left:0,width:0}),p=a.useRef(null),R=a.useRef(null),l=_e(),U=l==null?void 0:l.control,ze=U&&t?Ye({control:U,name:t}):void 0,r=i.value??ze??[],J=(ee=(Z=($=l==null?void 0:l.formState)==null?void 0:$.errors)==null?void 0:Z[t])==null?void 0:ee.message,Fe=qe||r&&r.length>0,y=a.useCallback(()=>{if(p.current&&n){const e=p.current.getBoundingClientRect();Ie({top:e.bottom+window.scrollY+4,left:e.left+window.scrollX,width:e.width})}},[n]);a.useEffect(()=>{if(y(),n){const e=()=>y(),o=()=>y();return window.addEventListener("resize",e),window.addEventListener("scroll",o,!0),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",o,!0)}}},[n,y]),a.useEffect(()=>{const e=setTimeout(()=>{Re(D)},F);return()=>clearTimeout(e)},[D,F]),a.useEffect(()=>{(n||v&&m.length===0)&&_(d?X:void 0)},[X,n]),a.useEffect(()=>{v===!0?_():Array.isArray(v)&&L(v)},[]);const _=async e=>{try{H(!0);const o=await f(e);L(o)}catch(o){console.error("Error loading options:",o),L([])}finally{H(!1)}};a.useEffect(()=>{const e=o=>{p.current&&!p.current.contains(o.target)&&(A(!1),u(!1),V(""))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const We=()=>{n||(A(!0),u(!0),d&&R.current&&setTimeout(()=>{var e;return(e=R.current)==null?void 0:e.focus()},0))},Y=e=>{u(!0),j&&j(e)},G=e=>{B&&B(e)},je=e=>{V(e.target.value)},Be=e=>{let o;r.includes(e)?o=r.filter(h=>h!==e):o=[...r,e],l&&t&&l.setValue(t,o),i.onChange&&i.onChange({target:{value:o}}),u(!0)},He=(e,o)=>{o.stopPropagation();const h=r.filter(Je=>Je!==e);l&&t&&l.setValue(t,h),i.onChange&&i.onChange({target:{value:h}})},Xe=e=>{e.stopPropagation(),l&&t&&l.setValue(t,[]),i.onChange&&i.onChange({target:{value:[]}}),A(!1),u(!1),V("")},K=m.filter(e=>r.includes(e.value)),Ue=K.slice(0,W),Q=K.length-W;return a.createElement("div",{className:b("relative",Ae),ref:p},a.createElement("div",{id:i.id||t,tabIndex:d?-1:0,role:"button","aria-haspopup":"listbox","aria-expanded":n,className:b("peer flex items-center min-h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 py-2 text-sm transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer relative",Me),onClick:We,onFocus:d?void 0:Y,onBlur:d?void 0:G,ref:Ve},a.createElement("div",{className:"flex flex-wrap gap-1 items-center min-h-[1.5rem] w-full"},Ue.map(e=>a.createElement("span",{key:e.value,className:"flex items-center border border-blue-200 bg-blue-50 text-blue-700 rounded-2xl px-3 py-1 text-xs shadow-sm gap-2",style:{maxWidth:"140px"}},a.createElement("span",{className:"truncate",title:e.label},e.label),a.createElement("button",{type:"button",className:"ml-1 text-[var(--primary,#2563eb)] hover:text-red-500 focus:outline-none w-4 h-4 flex items-center justify-center rounded-full transition-colors duration-150","aria-label":`Remover ${e.label}`,tabIndex:-1,onClick:o=>He(e.value,o)},a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M3 3L9 9M9 3L3 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}))))),Q>0&&a.createElement("span",{className:"flex items-center border border-gray-200 bg-gray-100 text-gray-600 rounded-2xl px-3 py-1 text-xs"},"+",Q," mais"),d?a.createElement("input",{ref:R,type:"text",value:D,onChange:je,onFocus:Y,onBlur:G,placeholder:r.length===0&&!s?"Selecione...":"",className:"flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm"}):r.length===0&&!s&&a.createElement("span",{className:"text-gray-400 text-sm"},"Selecione...")),T&&a.createElement("div",{className:"absolute right-8 top-1/2 -translate-y-1/2"},a.createElement("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-[var(--primary,#2563eb)]"})),Le&&r&&r.length>0&&!T&&a.createElement("button",{type:"button",tabIndex:-1,"aria-label":"Limpar seleção",className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-transparent p-1 rounded-full focus:outline-none",onClick:Xe},"✕")),s&&a.createElement("label",{htmlFor:i.id||t,className:b("absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",Fe?"top-0 scale-90 -translate-y-1 text-xs text-[var(--primary,#2563eb)] p-1 rounded-full bg-white":"top-3 scale-100 translate-y-0.5")},s),a.createElement("div",{className:b("absolute left-0 w-full mt-1 rounded-md transition-all duration-200 overflow-hidden","bg-[var(--select-dropdown-bg)] border-[var(--select-dropdown-border)] text-[var(--select-dropdown-text)]",n?"border max-h-36 opacity-100 scale-100":"max-h-0 opacity-0 scale-95 pointer-events-none"),style:{maxHeight:n?"9.5rem":"0",overflowY:m.length>3?"auto":"hidden",position:"fixed",top:n?q.top:"auto",left:n?q.left:"auto",width:n?q.width:"auto",zIndex:9999,boxShadow:n?"var(--select-dropdown-shadow)":"none"}},T?a.createElement("div",{className:"px-3 py-2 text-sm text-gray-500 text-center"},Te):m.length===0?a.createElement("div",{className:"px-3 py-2 text-sm text-gray-500 text-center"},De):m.map(e=>a.createElement("div",{key:e.value,className:b("px-3 py-2 cursor-pointer text-sm flex items-center gap-2 transition-colors duration-150","hover:bg-[var(--select-dropdown-hover)]",r.includes(e.value)&&"bg-[var(--select-dropdown-selected)] font-semibold"),onMouseDown:()=>Be(e.value)},a.createElement("input",{type:"checkbox",checked:r.includes(e.value),readOnly:!0,className:"accent-blue-500"}),e.label))),J&&a.createElement("span",{className:"text-red-500 text-xs mt-1 block"},J))});I.displayName="MultiAsyncSelect";I.__docgenInfo={description:"",methods:[],displayName:"MultiAsyncSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},loadOptions:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue?: string) => Promise<SelectOption[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"}],raw:"Promise<SelectOption[]>"}}},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},defaultOptions:{required:!1,tsType:{name:"union",raw:"SelectOption[] | boolean",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},{name:"boolean"}]},description:"",defaultValue:{value:"false",computed:!1}},loadingMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Carregando..."',computed:!1}},noOptionsMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Nenhuma opção encontrada"',computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},debounceMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},maxSelectedDisplay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}}},composes:["Omit"]};const Qe=({children:t,...s})=>{const f=Ge({defaultValues:{[s.name]:[]}});return c.createElement(Ke,{...f},c.createElement("div",{className:"w-80 p-4"},t,c.createElement("div",{className:"mt-4 p-3 bg-gray-100 rounded text-sm"},c.createElement("strong",null,"Valores selecionados:"),c.createElement("pre",{className:"mt-1 text-xs"},JSON.stringify(f.watch(),null,2)))))},aa={title:"Components/MultiAsyncSelect",component:I,decorators:[(t,{args:s})=>c.createElement(Qe,{...s},c.createElement(t,null))],parameters:{layout:"centered",docs:{description:{component:"Um componente de múltipla seleção com carregamento assíncrono de opções. Combina as funcionalidades do MultiSelect com AsyncSelect, permitindo selecionar múltiplas opções carregadas dinamicamente via API."}}},tags:["autodocs"],argTypes:{name:{description:"Nome do campo para integração com formulários",control:"text"},label:{description:"Label flutuante do campo",control:"text"},searchable:{description:"Permite busca digitando no campo",control:"boolean"},isClearable:{description:"Mostra botão para limpar todas as seleções",control:"boolean"},debounceMs:{description:"Delay em ms para busca (evita muitas chamadas à API)",control:{type:"number",min:0,max:2e3,step:100}},defaultOptions:{description:"Carrega opções ao montar o componente",control:"boolean"},maxSelectedDisplay:{description:"Máximo de itens selecionados exibidos antes de mostrar '+X mais'",control:{type:"number",min:1,max:10,step:1}},loadingMessage:{description:"Mensagem exibida durante carregamento",control:"text"},noOptionsMessage:{description:"Mensagem quando não há opções",control:"text"}}},ae=[{label:"Brasil",value:"br"},{label:"Estados Unidos",value:"us"},{label:"Argentina",value:"ar"},{label:"França",value:"fr"},{label:"Alemanha",value:"de"},{label:"Japão",value:"jp"},{label:"Canadá",value:"ca"},{label:"Reino Unido",value:"uk"},{label:"Itália",value:"it"},{label:"Espanha",value:"es"},{label:"México",value:"mx"},{label:"China",value:"cn"},{label:"Índia",value:"in"},{label:"Austrália",value:"au"},{label:"Coreia do Sul",value:"kr"}],M=[{label:"JavaScript",value:"javascript"},{label:"TypeScript",value:"typescript"},{label:"React",value:"react"},{label:"Vue.js",value:"vue"},{label:"Angular",value:"angular"},{label:"Node.js",value:"nodejs"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"PHP",value:"php"},{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"Swift",value:"swift"},{label:"Kotlin",value:"kotlin"},{label:"Docker",value:"docker"},{label:"AWS",value:"aws"},{label:"Azure",value:"azure"},{label:"MongoDB",value:"mongodb"},{label:"PostgreSQL",value:"postgresql"},{label:"Redis",value:"redis"}],g=async t=>(await new Promise(s=>setTimeout(s,600)),t?ae.filter(s=>s.label.toLowerCase().includes(t.toLowerCase())):ae),z=async t=>(await new Promise(s=>setTimeout(s,800)),t?M.filter(s=>s.label.toLowerCase().includes(t.toLowerCase())):M),x={args:{name:"countries",label:"Países",loadOptions:g,defaultOptions:!0},parameters:{docs:{description:{story:"Versão básica do MultiAsyncSelect com carregamento automático das opções."}}}},w={args:{name:"countries-search",label:"Países",loadOptions:g,searchable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Permite busca digitando no campo. As opções são filtradas conforme o usuário digita."}}}},S={args:{name:"countries-clearable",label:"Países",loadOptions:g,isClearable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Adiciona um botão 'X' para limpar todas as seleções de uma vez."}}}},C={args:{name:"skills-complete",label:"Habilidades Técnicas",loadOptions:z,searchable:!0,isClearable:!0,defaultOptions:!0,maxSelectedDisplay:2},parameters:{docs:{description:{story:"Versão completa com busca, botão limpar e limite de exibição de itens selecionados."}}}},O={args:{name:"skills-custom",label:"Tecnologias",loadOptions:z,searchable:!0,loadingMessage:"🔍 Buscando tecnologias...",noOptionsMessage:"😔 Nenhuma tecnologia encontrada",defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Exemplo com mensagens personalizadas e emoji para melhor UX."}}}},E={args:{name:"countries-fast",label:"Países (busca rápida)",loadOptions:g,searchable:!0,debounceMs:100,defaultOptions:!0,isClearable:!0,maxSelectedDisplay:3},parameters:{docs:{description:{story:"Debounce reduzido para 100ms - busca mais responsiva mas mais chamadas à API."}}}},k={args:{name:"skills-slow",label:"Habilidades (carregamento lento)",loadOptions:async t=>(await new Promise(s=>setTimeout(s,2e3)),t?M.filter(s=>s.label.toLowerCase().includes(t.toLowerCase())):M),searchable:!0,defaultOptions:!0,loadingMessage:"⏳ Carregando habilidades...",isClearable:!0,maxSelectedDisplay:2},parameters:{docs:{description:{story:"Simula uma API lenta (2s) para demonstrar o estado de loading."}}}},P={args:{name:"countries-limited",label:"Países (máx 1 visível)",loadOptions:g,searchable:!0,defaultOptions:!0,isClearable:!0,maxSelectedDisplay:1},parameters:{docs:{description:{story:"Demonstra a funcionalidade de limitar quantos itens selecionados são exibidos."}}}},N={args:{name:"skills-no-label",loadOptions:z,searchable:!0,defaultOptions:!0,isClearable:!0,maxSelectedDisplay:3},parameters:{docs:{description:{story:"Exemplo sem label - útil quando o contexto já deixa claro o que é o campo."}}}};var te,se,oe;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(se=x.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,re,le;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(le=(re=w.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ie,ce,de;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,pe;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(me=C.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var be,ge,fe;O.parameters={...O.parameters,docs:{...(be=O.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(fe=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ve,ye,he;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(he=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var xe,we,Se;k.parameters={...k.parameters,docs:{...(xe=k.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Se=(we=k.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Ce,Oe,Ee;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ee=(Oe=P.parameters)==null?void 0:Oe.docs)==null?void 0:Ee.source}}};var ke,Pe,Ne;N.parameters={...N.parameters,docs:{...(ke=N.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ne=(Pe=N.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.source}}};const ta=["Default","Searchable","WithClearButton","Complete","WithCustomMessages","FastSearch","SlowLoading","LimitedDisplay","WithoutLabel"];export{C as Complete,x as Default,E as FastSearch,P as LimitedDisplay,w as Searchable,k as SlowLoading,S as WithClearButton,O as WithCustomMessages,N as WithoutLabel,ta as __namedExportsOrder,aa as default};
