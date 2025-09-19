import{r as a,R as i}from"./iframe-0UjUrlXI.js";import{u as Ue,a as Xe,b as Je,F as _e}from"./index.esm-Bu0awhvF.js";import{c as p}from"./utils-CuF-iVWQ.js";const q=a.forwardRef(({name:t,label:s,loadOptions:g,className:Pe,containerClassName:Ne,isClearable:Me,defaultOptions:f=!1,loadingMessage:Ae="Carregando...",noOptionsMessage:Te="Nenhuma opção encontrada",searchable:c=!1,debounceMs:I=300,maxSelectedDisplay:R=3,onFocus:W,onBlur:j,...l},De)=>{var Q,Y,$;const[Le,d]=a.useState(!1),[u,N]=a.useState(!1),[m,M]=a.useState([]),[A,z]=a.useState(!1),[T,D]=a.useState(""),[B,Ve]=a.useState(""),L=a.useRef(null),V=a.useRef(null),r=Ue(),H=r==null?void 0:r.control,qe=H&&t?Xe({control:H,name:t}):void 0,n=l.value??qe??[],U=($=(Y=(Q=r==null?void 0:r.formState)==null?void 0:Q.errors)==null?void 0:Y[t])==null?void 0:$.message,Fe=Le||n&&n.length>0;a.useEffect(()=>{const e=setTimeout(()=>{Ve(T)},I);return()=>clearTimeout(e)},[T,I]),a.useEffect(()=>{(u||f&&m.length===0)&&X(c?B:void 0)},[B,u]),a.useEffect(()=>{f===!0?X():Array.isArray(f)&&M(f)},[]);const X=async e=>{try{z(!0);const o=await g(e);M(o)}catch(o){console.error("Error loading options:",o),M([])}finally{z(!1)}};a.useEffect(()=>{const e=o=>{L.current&&!L.current.contains(o.target)&&(N(!1),d(!1),D(""))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const Ie=()=>{u||(N(!0),d(!0),c&&V.current&&setTimeout(()=>{var e;return(e=V.current)==null?void 0:e.focus()},0))},J=e=>{d(!0),W&&W(e)},_=e=>{j&&j(e)},Re=e=>{D(e.target.value)},We=e=>{let o;n.includes(e)?o=n.filter(y=>y!==e):o=[...n,e],r&&t&&r.setValue(t,o),l.onChange&&l.onChange({target:{value:o}}),d(!0)},je=(e,o)=>{o.stopPropagation();const y=n.filter(He=>He!==e);r&&t&&r.setValue(t,y),l.onChange&&l.onChange({target:{value:y}})},ze=e=>{e.stopPropagation(),r&&t&&r.setValue(t,[]),l.onChange&&l.onChange({target:{value:[]}}),N(!1),d(!1),D("")},G=m.filter(e=>n.includes(e.value)),Be=G.slice(0,R),K=G.length-R;return a.createElement("div",{className:p("relative",Ne),ref:L},a.createElement("div",{id:l.id||t,tabIndex:c?-1:0,role:"button","aria-haspopup":"listbox","aria-expanded":u,className:p("peer flex items-center min-h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 py-2 text-sm transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer relative",Pe),onClick:Ie,onFocus:c?void 0:J,onBlur:c?void 0:_,ref:De},a.createElement("div",{className:"flex flex-wrap gap-1 items-center min-h-[1.5rem] w-full"},Be.map(e=>a.createElement("span",{key:e.value,className:"flex items-center border border-blue-200 bg-blue-50 text-blue-700 rounded-2xl px-3 py-1 text-xs shadow-sm gap-2",style:{maxWidth:"140px"}},a.createElement("span",{className:"truncate",title:e.label},e.label),a.createElement("button",{type:"button",className:"ml-1 text-[var(--primary,#2563eb)] hover:text-red-500 focus:outline-none w-4 h-4 flex items-center justify-center rounded-full transition-colors duration-150","aria-label":`Remover ${e.label}`,tabIndex:-1,onClick:o=>je(e.value,o)},a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M3 3L9 9M9 3L3 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}))))),K>0&&a.createElement("span",{className:"flex items-center border border-gray-200 bg-gray-100 text-gray-600 rounded-2xl px-3 py-1 text-xs"},"+",K," mais"),c?a.createElement("input",{ref:V,type:"text",value:T,onChange:Re,onFocus:J,onBlur:_,placeholder:n.length===0&&!s?"Selecione...":"",className:"flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm"}):n.length===0&&!s&&a.createElement("span",{className:"text-gray-400 text-sm"},"Selecione...")),A&&a.createElement("div",{className:"absolute right-8 top-1/2 -translate-y-1/2"},a.createElement("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-[var(--primary,#2563eb)]"})),Me&&n&&n.length>0&&!A&&a.createElement("button",{type:"button",tabIndex:-1,"aria-label":"Limpar seleção",className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-transparent p-1 rounded-full focus:outline-none",onClick:ze},"✕")),s&&a.createElement("label",{htmlFor:l.id||t,className:p("absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",Fe?"top-0 scale-90 -translate-y-1 text-xs text-[var(--primary,#2563eb)] p-1 rounded-full bg-white":"top-3 scale-100 translate-y-0.5")},s),a.createElement("div",{className:p("absolute left-0 w-full mt-1 rounded-md shadow-lg bg-white z-20 transition-all duration-200 overflow-hidden",u?"border border-[var(--primary,#2563eb)] max-h-36 opacity-100 scale-100":"max-h-0 opacity-0 scale-95 pointer-events-none"),style:{maxHeight:u?"9.5rem":"0",overflowY:m.length>3?"auto":"hidden"}},A?a.createElement("div",{className:"px-3 py-2 text-sm text-gray-500 text-center"},Ae):m.length===0?a.createElement("div",{className:"px-3 py-2 text-sm text-gray-500 text-center"},Te):m.map(e=>a.createElement("div",{key:e.value,className:p("px-3 py-2 cursor-pointer hover:bg-blue-50 text-sm flex items-center gap-2",n.includes(e.value)&&"bg-blue-100 font-semibold"),onMouseDown:()=>We(e.value)},a.createElement("input",{type:"checkbox",checked:n.includes(e.value),readOnly:!0,className:"accent-blue-500"}),e.label))),U&&a.createElement("span",{className:"text-red-500 text-xs mt-1 block"},U))});q.displayName="MultiAsyncSelect";q.__docgenInfo={description:"",methods:[],displayName:"MultiAsyncSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},loadOptions:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue?: string) => Promise<SelectOption[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"}],raw:"Promise<SelectOption[]>"}}},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},defaultOptions:{required:!1,tsType:{name:"union",raw:"SelectOption[] | boolean",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},{name:"boolean"}]},description:"",defaultValue:{value:"false",computed:!1}},loadingMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Carregando..."',computed:!1}},noOptionsMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Nenhuma opção encontrada"',computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},debounceMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},maxSelectedDisplay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}}},composes:["Omit"]};const Ge=({children:t,...s})=>{const g=Je({defaultValues:{[s.name]:[]}});return i.createElement(_e,{...g},i.createElement("div",{className:"w-80 p-4"},t,i.createElement("div",{className:"mt-4 p-3 bg-gray-100 rounded text-sm"},i.createElement("strong",null,"Valores selecionados:"),i.createElement("pre",{className:"mt-1 text-xs"},JSON.stringify(g.watch(),null,2)))))},$e={title:"Components/MultiAsyncSelect",component:q,decorators:[(t,{args:s})=>i.createElement(Ge,{...s},i.createElement(t,null))],parameters:{layout:"centered",docs:{description:{component:"Um componente de múltipla seleção com carregamento assíncrono de opções. Combina as funcionalidades do MultiSelect com AsyncSelect, permitindo selecionar múltiplas opções carregadas dinamicamente via API."}}},tags:["autodocs"],argTypes:{name:{description:"Nome do campo para integração com formulários",control:"text"},label:{description:"Label flutuante do campo",control:"text"},searchable:{description:"Permite busca digitando no campo",control:"boolean"},isClearable:{description:"Mostra botão para limpar todas as seleções",control:"boolean"},debounceMs:{description:"Delay em ms para busca (evita muitas chamadas à API)",control:{type:"number",min:0,max:2e3,step:100}},defaultOptions:{description:"Carrega opções ao montar o componente",control:"boolean"},maxSelectedDisplay:{description:"Máximo de itens selecionados exibidos antes de mostrar '+X mais'",control:{type:"number",min:1,max:10,step:1}},loadingMessage:{description:"Mensagem exibida durante carregamento",control:"text"},noOptionsMessage:{description:"Mensagem quando não há opções",control:"text"}}},Z=[{label:"Brasil",value:"br"},{label:"Estados Unidos",value:"us"},{label:"Argentina",value:"ar"},{label:"França",value:"fr"},{label:"Alemanha",value:"de"},{label:"Japão",value:"jp"},{label:"Canadá",value:"ca"},{label:"Reino Unido",value:"uk"},{label:"Itália",value:"it"},{label:"Espanha",value:"es"},{label:"México",value:"mx"},{label:"China",value:"cn"},{label:"Índia",value:"in"},{label:"Austrália",value:"au"},{label:"Coreia do Sul",value:"kr"}],P=[{label:"JavaScript",value:"javascript"},{label:"TypeScript",value:"typescript"},{label:"React",value:"react"},{label:"Vue.js",value:"vue"},{label:"Angular",value:"angular"},{label:"Node.js",value:"nodejs"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"PHP",value:"php"},{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"Swift",value:"swift"},{label:"Kotlin",value:"kotlin"},{label:"Docker",value:"docker"},{label:"AWS",value:"aws"},{label:"Azure",value:"azure"},{label:"MongoDB",value:"mongodb"},{label:"PostgreSQL",value:"postgresql"},{label:"Redis",value:"redis"}],b=async t=>(await new Promise(s=>setTimeout(s,600)),t?Z.filter(s=>s.label.toLowerCase().includes(t.toLowerCase())):Z),F=async t=>(await new Promise(s=>setTimeout(s,800)),t?P.filter(s=>s.label.toLowerCase().includes(t.toLowerCase())):P),v={args:{name:"countries",label:"Países",loadOptions:b,defaultOptions:!0},parameters:{docs:{description:{story:"Versão básica do MultiAsyncSelect com carregamento automático das opções."}}}},x={args:{name:"countries-search",label:"Países",loadOptions:b,searchable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Permite busca digitando no campo. As opções são filtradas conforme o usuário digita."}}}},h={args:{name:"countries-clearable",label:"Países",loadOptions:b,isClearable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Adiciona um botão 'X' para limpar todas as seleções de uma vez."}}}},S={args:{name:"skills-complete",label:"Habilidades Técnicas",loadOptions:F,searchable:!0,isClearable:!0,defaultOptions:!0,maxSelectedDisplay:2},parameters:{docs:{description:{story:"Versão completa com busca, botão limpar e limite de exibição de itens selecionados."}}}},C={args:{name:"skills-custom",label:"Tecnologias",loadOptions:F,searchable:!0,loadingMessage:"🔍 Buscando tecnologias...",noOptionsMessage:"😔 Nenhuma tecnologia encontrada",defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Exemplo com mensagens personalizadas e emoji para melhor UX."}}}},O={args:{name:"countries-fast",label:"Países (busca rápida)",loadOptions:b,searchable:!0,debounceMs:100,defaultOptions:!0,isClearable:!0,maxSelectedDisplay:3},parameters:{docs:{description:{story:"Debounce reduzido para 100ms - busca mais responsiva mas mais chamadas à API."}}}},w={args:{name:"skills-slow",label:"Habilidades (carregamento lento)",loadOptions:async t=>(await new Promise(s=>setTimeout(s,2e3)),t?P.filter(s=>s.label.toLowerCase().includes(t.toLowerCase())):P),searchable:!0,defaultOptions:!0,loadingMessage:"⏳ Carregando habilidades...",isClearable:!0,maxSelectedDisplay:2},parameters:{docs:{description:{story:"Simula uma API lenta (2s) para demonstrar o estado de loading."}}}},E={args:{name:"countries-limited",label:"Países (máx 1 visível)",loadOptions:b,searchable:!0,defaultOptions:!0,isClearable:!0,maxSelectedDisplay:1},parameters:{docs:{description:{story:"Demonstra a funcionalidade de limitar quantos itens selecionados são exibidos."}}}},k={args:{name:"skills-no-label",loadOptions:F,searchable:!0,defaultOptions:!0,isClearable:!0,maxSelectedDisplay:3},parameters:{docs:{description:{story:"Exemplo sem label - útil quando o contexto já deixa claro o que é o campo."}}}};var ee,ae,te;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,oe,ne;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var re,le,ie;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,ue,de;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,pe,be;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ge,fe,ye;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ye=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,xe,he;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(he=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var Se,Ce,Oe;E.parameters={...E.parameters,docs:{...(Se=E.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Oe=(Ce=E.parameters)==null?void 0:Ce.docs)==null?void 0:Oe.source}}};var we,Ee,ke;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ke=(Ee=k.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};const Ze=["Default","Searchable","WithClearButton","Complete","WithCustomMessages","FastSearch","SlowLoading","LimitedDisplay","WithoutLabel"];export{S as Complete,v as Default,O as FastSearch,E as LimitedDisplay,x as Searchable,w as SlowLoading,h as WithClearButton,C as WithCustomMessages,k as WithoutLabel,Ze as __namedExportsOrder,$e as default};
