import{j as a,c as p}from"./utils-DLq8OvKD.js";import{u as Ue,a as Xe,b as Je,F as _e}from"./index.esm-D8Rah7Xp.js";import{r as n}from"./iframe-B2pcfGHL.js";const q=n.forwardRef(({name:s,label:t,loadOptions:g,className:Pe,containerClassName:Ne,isClearable:Me,defaultOptions:f=!1,loadingMessage:Ae="Carregando...",noOptionsMessage:Te="Nenhuma opção encontrada",searchable:c=!1,debounceMs:F=300,maxSelectedDisplay:I=3,onFocus:R,onBlur:W,...i},De)=>{var Q,Y,$;const[Le,u]=n.useState(!1),[d,N]=n.useState(!1),[m,M]=n.useState([]),[A,z]=n.useState(!1),[T,D]=n.useState(""),[B,Ve]=n.useState(""),L=n.useRef(null),V=n.useRef(null),l=Ue(),H=l==null?void 0:l.control,qe=H&&s?Xe({control:H,name:s}):void 0,r=i.value??qe??[],U=($=(Y=(Q=l==null?void 0:l.formState)==null?void 0:Q.errors)==null?void 0:Y[s])==null?void 0:$.message,Ee=Le||r&&r.length>0;n.useEffect(()=>{const e=setTimeout(()=>{Ve(T)},F);return()=>clearTimeout(e)},[T,F]),n.useEffect(()=>{(d||f&&m.length===0)&&X(c?B:void 0)},[B,d]),n.useEffect(()=>{f===!0?X():Array.isArray(f)&&M(f)},[]);const X=async e=>{try{z(!0);const o=await g(e);M(o)}catch(o){console.error("Error loading options:",o),M([])}finally{z(!1)}};n.useEffect(()=>{const e=o=>{L.current&&!L.current.contains(o.target)&&(N(!1),u(!1),D(""))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const Fe=()=>{d||(N(!0),u(!0),c&&V.current&&setTimeout(()=>{var e;return(e=V.current)==null?void 0:e.focus()},0))},J=e=>{u(!0),R&&R(e)},_=e=>{W&&W(e)},Ie=e=>{D(e.target.value)},Re=e=>{let o;r.includes(e)?o=r.filter(x=>x!==e):o=[...r,e],l&&s&&l.setValue(s,o),i.onChange&&i.onChange({target:{value:o}}),u(!0)},We=(e,o)=>{o.stopPropagation();const x=r.filter(He=>He!==e);l&&s&&l.setValue(s,x),i.onChange&&i.onChange({target:{value:x}})},ze=e=>{e.stopPropagation(),l&&s&&l.setValue(s,[]),i.onChange&&i.onChange({target:{value:[]}}),N(!1),u(!1),D("")},G=m.filter(e=>r.includes(e.value)),Be=G.slice(0,I),K=G.length-I;return a.jsxs("div",{className:p("relative",Ne),ref:L,children:[a.jsxs("div",{id:i.id||s,tabIndex:c?-1:0,role:"button","aria-haspopup":"listbox","aria-expanded":d,className:p("peer flex items-center min-h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 py-2 text-sm transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer relative",Pe),onClick:Fe,onFocus:c?void 0:J,onBlur:c?void 0:_,ref:De,children:[a.jsxs("div",{className:"flex flex-wrap gap-1 items-center min-h-[1.5rem] w-full",children:[Be.map(e=>a.jsxs("span",{className:"flex items-center border border-blue-200 bg-blue-50 text-blue-700 rounded-2xl px-3 py-1 text-xs shadow-sm gap-2",style:{maxWidth:"140px"},children:[a.jsx("span",{className:"truncate",title:e.label,children:e.label}),a.jsx("button",{type:"button",className:"ml-1 text-[var(--primary,#2563eb)] hover:text-red-500 focus:outline-none w-4 h-4 flex items-center justify-center rounded-full transition-colors duration-150","aria-label":`Remover ${e.label}`,tabIndex:-1,onClick:o=>We(e.value,o),children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M3 3L9 9M9 3L3 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]},e.value)),K>0&&a.jsxs("span",{className:"flex items-center border border-gray-200 bg-gray-100 text-gray-600 rounded-2xl px-3 py-1 text-xs",children:["+",K," mais"]}),c?a.jsx("input",{ref:V,type:"text",value:T,onChange:Ie,onFocus:J,onBlur:_,placeholder:r.length===0&&!t?"Selecione...":"",className:"flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm"}):r.length===0&&!t&&a.jsx("span",{className:"text-gray-400 text-sm",children:"Selecione..."})]}),A&&a.jsx("div",{className:"absolute right-8 top-1/2 -translate-y-1/2",children:a.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-[var(--primary,#2563eb)]"})}),Me&&r&&r.length>0&&!A&&a.jsx("button",{type:"button",tabIndex:-1,"aria-label":"Limpar seleção",className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-transparent p-1 rounded-full focus:outline-none",onClick:ze,children:"✕"})]}),t&&a.jsx("label",{htmlFor:i.id||s,className:p("absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",Ee?"top-0 scale-90 -translate-y-1 text-xs text-[var(--primary,#2563eb)] p-1 rounded-full bg-white":"top-3 scale-100 translate-y-0.5"),children:t}),a.jsx("div",{className:p("absolute left-0 w-full mt-1 rounded-md shadow-lg bg-white z-20 transition-all duration-200 overflow-hidden",d?"border border-[var(--primary,#2563eb)] max-h-36 opacity-100 scale-100":"max-h-0 opacity-0 scale-95 pointer-events-none"),style:{maxHeight:d?"9.5rem":"0",overflowY:m.length>3?"auto":"hidden"},children:A?a.jsx("div",{className:"px-3 py-2 text-sm text-gray-500 text-center",children:Ae}):m.length===0?a.jsx("div",{className:"px-3 py-2 text-sm text-gray-500 text-center",children:Te}):m.map(e=>a.jsxs("div",{className:p("px-3 py-2 cursor-pointer hover:bg-blue-50 text-sm flex items-center gap-2",r.includes(e.value)&&"bg-blue-100 font-semibold"),onMouseDown:()=>Re(e.value),children:[a.jsx("input",{type:"checkbox",checked:r.includes(e.value),readOnly:!0,className:"accent-blue-500"}),e.label]},e.value))}),U&&a.jsx("span",{className:"text-red-500 text-xs mt-1 block",children:U})]})});q.displayName="MultiAsyncSelect";q.__docgenInfo={description:"",methods:[],displayName:"MultiAsyncSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},loadOptions:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue?: string) => Promise<SelectOption[]>",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"}],raw:"Promise<SelectOption[]>"}}},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},defaultOptions:{required:!1,tsType:{name:"union",raw:"SelectOption[] | boolean",elements:[{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},{name:"boolean"}]},description:"",defaultValue:{value:"false",computed:!1}},loadingMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Carregando..."',computed:!1}},noOptionsMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Nenhuma opção encontrada"',computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},debounceMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},maxSelectedDisplay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}}},composes:["Omit"]};const Ge=({children:s,...t})=>{const g=Je({defaultValues:{[t.name]:[]}});return a.jsx(_e,{...g,children:a.jsxs("div",{className:"w-80 p-4",children:[s,a.jsxs("div",{className:"mt-4 p-3 bg-gray-100 rounded text-sm",children:[a.jsx("strong",{children:"Valores selecionados:"}),a.jsx("pre",{className:"mt-1 text-xs",children:JSON.stringify(g.watch(),null,2)})]})]})})},$e={title:"Components/MultiAsyncSelect",component:q,decorators:[(s,{args:t})=>a.jsx(Ge,{...t,children:a.jsx(s,{})})],parameters:{layout:"centered",docs:{description:{component:"Um componente de múltipla seleção com carregamento assíncrono de opções. Combina as funcionalidades do MultiSelect com AsyncSelect, permitindo selecionar múltiplas opções carregadas dinamicamente via API."}}},tags:["autodocs"],argTypes:{name:{description:"Nome do campo para integração com formulários",control:"text"},label:{description:"Label flutuante do campo",control:"text"},searchable:{description:"Permite busca digitando no campo",control:"boolean"},isClearable:{description:"Mostra botão para limpar todas as seleções",control:"boolean"},debounceMs:{description:"Delay em ms para busca (evita muitas chamadas à API)",control:{type:"number",min:0,max:2e3,step:100}},defaultOptions:{description:"Carrega opções ao montar o componente",control:"boolean"},maxSelectedDisplay:{description:"Máximo de itens selecionados exibidos antes de mostrar '+X mais'",control:{type:"number",min:1,max:10,step:1}},loadingMessage:{description:"Mensagem exibida durante carregamento",control:"text"},noOptionsMessage:{description:"Mensagem quando não há opções",control:"text"}}},Z=[{label:"Brasil",value:"br"},{label:"Estados Unidos",value:"us"},{label:"Argentina",value:"ar"},{label:"França",value:"fr"},{label:"Alemanha",value:"de"},{label:"Japão",value:"jp"},{label:"Canadá",value:"ca"},{label:"Reino Unido",value:"uk"},{label:"Itália",value:"it"},{label:"Espanha",value:"es"},{label:"México",value:"mx"},{label:"China",value:"cn"},{label:"Índia",value:"in"},{label:"Austrália",value:"au"},{label:"Coreia do Sul",value:"kr"}],P=[{label:"JavaScript",value:"javascript"},{label:"TypeScript",value:"typescript"},{label:"React",value:"react"},{label:"Vue.js",value:"vue"},{label:"Angular",value:"angular"},{label:"Node.js",value:"nodejs"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"PHP",value:"php"},{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"Swift",value:"swift"},{label:"Kotlin",value:"kotlin"},{label:"Docker",value:"docker"},{label:"AWS",value:"aws"},{label:"Azure",value:"azure"},{label:"MongoDB",value:"mongodb"},{label:"PostgreSQL",value:"postgresql"},{label:"Redis",value:"redis"}],b=async s=>(await new Promise(t=>setTimeout(t,600)),s?Z.filter(t=>t.label.toLowerCase().includes(s.toLowerCase())):Z),E=async s=>(await new Promise(t=>setTimeout(t,800)),s?P.filter(t=>t.label.toLowerCase().includes(s.toLowerCase())):P),h={args:{name:"countries",label:"Países",loadOptions:b,defaultOptions:!0},parameters:{docs:{description:{story:"Versão básica do MultiAsyncSelect com carregamento automático das opções."}}}},v={args:{name:"countries-search",label:"Países",loadOptions:b,searchable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Permite busca digitando no campo. As opções são filtradas conforme o usuário digita."}}}},y={args:{name:"countries-clearable",label:"Países",loadOptions:b,isClearable:!0,defaultOptions:!0},parameters:{docs:{description:{story:"Adiciona um botão 'X' para limpar todas as seleções de uma vez."}}}},S={args:{name:"skills-complete",label:"Habilidades Técnicas",loadOptions:E,searchable:!0,isClearable:!0,defaultOptions:!0,maxSelectedDisplay:2},parameters:{docs:{description:{story:"Versão completa com busca, botão limpar e limite de exibição de itens selecionados."}}}},C={args:{name:"skills-custom",label:"Tecnologias",loadOptions:E,searchable:!0,loadingMessage:"🔍 Buscando tecnologias...",noOptionsMessage:"😔 Nenhuma tecnologia encontrada",defaultOptions:!0,isClearable:!0},parameters:{docs:{description:{story:"Exemplo com mensagens personalizadas e emoji para melhor UX."}}}},O={args:{name:"countries-fast",label:"Países (busca rápida)",loadOptions:b,searchable:!0,debounceMs:100,defaultOptions:!0,isClearable:!0,maxSelectedDisplay:3},parameters:{docs:{description:{story:"Debounce reduzido para 100ms - busca mais responsiva mas mais chamadas à API."}}}},w={args:{name:"skills-slow",label:"Habilidades (carregamento lento)",loadOptions:async s=>(await new Promise(t=>setTimeout(t,2e3)),s?P.filter(t=>t.label.toLowerCase().includes(s.toLowerCase())):P),searchable:!0,defaultOptions:!0,loadingMessage:"⏳ Carregando habilidades...",isClearable:!0,maxSelectedDisplay:2},parameters:{docs:{description:{story:"Simula uma API lenta (2s) para demonstrar o estado de loading."}}}},j={args:{name:"countries-limited",label:"Países (máx 1 visível)",loadOptions:b,searchable:!0,defaultOptions:!0,isClearable:!0,maxSelectedDisplay:1},parameters:{docs:{description:{story:"Demonstra a funcionalidade de limitar quantos itens selecionados são exibidos."}}}},k={args:{name:"skills-no-label",loadOptions:E,searchable:!0,defaultOptions:!0,isClearable:!0,maxSelectedDisplay:3},parameters:{docs:{description:{story:"Exemplo sem label - útil quando o contexto já deixa claro o que é o campo."}}}};var ee,ae,se;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,oe,re;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ne,le,ie;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,ue;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,be;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ge,fe,xe;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(xe=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var he,ve,ye;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ye=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var Se,Ce,Oe;j.parameters={...j.parameters,docs:{...(Se=j.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Oe=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:Oe.source}}};var we,je,ke;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ke=(je=k.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};const Ze=["Default","Searchable","WithClearButton","Complete","WithCustomMessages","FastSearch","SlowLoading","LimitedDisplay","WithoutLabel"];export{S as Complete,h as Default,O as FastSearch,j as LimitedDisplay,v as Searchable,w as SlowLoading,y as WithClearButton,C as WithCustomMessages,k as WithoutLabel,Ze as __namedExportsOrder,$e as default};
