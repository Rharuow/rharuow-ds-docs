import{r as a,R as o}from"./iframe-CllnT1cI.js";import{u as be,a as ve,b as O,F as N}from"./index.esm-D-xy-1vJ.js";import{c as S}from"./utils-CuF-iVWQ.js";const f=a.forwardRef(({name:t,label:i,options:l,className:y,containerClassName:k,isClearable:Z,searchable:b=!1,filterPlaceholder:R="Digite para filtrar...",caseSensitive:W=!1,filterFunction:ee,onFocus:C,onBlur:E,...s},te)=>{var I,q,A;const[ae,v]=a.useState(!1),[u,F]=a.useState(!1),[P,re]=a.useState(""),[D,le]=a.useState({top:0,left:0,width:0}),g=a.useRef(null),ne=a.useRef(null),c=be(),T=c==null?void 0:c.control,oe=T&&t?ve({control:T,name:t}):void 0,n=s.value??oe??[],L=(A=(q=(I=c==null?void 0:c.formState)==null?void 0:I.errors)==null?void 0:q[t])==null?void 0:A.message,ie=ee||((e,r)=>{const m=W?e.label:e.label.toLowerCase(),x=W?r:r.toLowerCase();return m.includes(x)}),_=P.trim()?l.filter(e=>ie(e,P.trim())):l,se=ae||n&&n.length>0||b&&!!P,V=a.useCallback(()=>{if(g.current&&u){const e=g.current.getBoundingClientRect();le({top:e.bottom+window.scrollY+4,left:e.left+window.scrollX,width:e.width})}},[u]);a.useEffect(()=>{if(V(),u){const e=()=>V(),r=()=>V();return window.addEventListener("resize",e),window.addEventListener("scroll",r,!0),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",r,!0)}}},[u,V]),a.useEffect(()=>{const e=r=>{g.current&&!g.current.contains(r.target)&&(F(!1),v(!1))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const ce=()=>{F(e=>!e),v(!0)},ue=e=>{v(!0),C&&C(e)},me=e=>{E&&E(e)},de=e=>{var m;let r;n.includes(e)?r=n.filter(x=>x!==e):r=[...n,e],c&&t&&c.setValue(t,r),s.onChange&&((m=s.onChange)==null||m.call(s,{target:{value:r}})),v(!0)},pe=e=>{var r;e.stopPropagation(),c&&t&&c.setValue(t,[]),s.onChange&&((r=s.onChange)==null||r.call(s,{target:{value:[]}})),F(!1),v(!1)},fe=e=>{re(e.target.value)};return a.createElement("div",{className:S("relative",k),ref:g},a.createElement("div",{id:s.id||t,tabIndex:0,role:"button","aria-haspopup":"listbox","aria-expanded":u,className:S("peer flex items-center h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 py-3 text-sm transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer relative",y),onClick:b?void 0:ce,onFocus:b?void 0:ue,onBlur:b?void 0:me,ref:te},a.createElement("div",{className:"flex flex-nowrap gap-1 items-center min-h-[1.5rem] w-full overflow-x-auto",style:{scrollbarWidth:"none"}},n&&n.length>0?l.filter(e=>n.includes(e.value)).map(e=>a.createElement("span",{key:e.value,className:"flex items-center border border-blue-200 bg-blue-50 text-blue-700 rounded-2xl px-3 py-1 text-xs shadow-sm mr-1 gap-2",style:{maxWidth:"140px"}},a.createElement("span",{className:"truncate",title:e.label},e.label),a.createElement("button",{type:"button",className:"ml-1 text-[var(--primary,#2563eb)] hover:text-red-500 focus:outline-none w-4 h-4 flex items-center justify-center rounded-full transition-colors duration-150","aria-label":`Remover ${e.label}`,tabIndex:-1,onClick:r=>{r.stopPropagation();const m=n.filter(x=>x!==e.value);c&&t&&c.setValue(t,m),s.onChange&&s.onChange({target:{value:m}})}},a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M3 3L9 9M9 3L3 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}))))):!i&&!b&&a.createElement("span",{className:"text-gray-400 text-sm"},"Selecione..."),b&&a.createElement("input",{ref:ne,type:"text",value:P,onChange:fe,onFocus:e=>{v(!0),F(!0),C&&C(e)},onBlur:e=>{E&&E(e)},placeholder:i?n&&n.length>0?"":R:R||"Selecione...",className:"flex-1 bg-transparent border-none outline-none text-sm min-w-[100px]"})),Z&&n&&n.length>0&&a.createElement("button",{type:"button",tabIndex:-1,"aria-label":"Limpar seleção",className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-transparent p-1 rounded-full focus:outline-none",onClick:pe},"✕")),i&&a.createElement("label",{htmlFor:s.id||t,className:S("absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",se?"top-0 scale-90 -translate-y-1 text-xs text-[var(--primary,#2563eb)] p-1 rounded-full bg-white":"top-3 scale-100 translate-y-0.5")},i),a.createElement("div",{className:S("absolute left-0 w-full mt-1 rounded-md transition-all duration-200 overflow-hidden","bg-[var(--select-dropdown-bg)] border-[var(--select-dropdown-border)] text-[var(--select-dropdown-text)]",u?"border max-h-36 opacity-100 scale-100":"max-h-0 opacity-0 scale-95 pointer-events-none"),style:{maxHeight:u?"9.5rem":"0",overflowY:l.length>3?"auto":"hidden",position:"fixed",top:u?D.top:"auto",left:u?D.left:"auto",width:u?D.width:"auto",zIndex:9999,boxShadow:u?"var(--select-dropdown-shadow)":"none"}},_.length===0?a.createElement("div",{className:"px-3 py-2 text-sm text-gray-500 text-center"},"Nenhuma opção encontrada"):_.map(e=>a.createElement("div",{key:e.value,className:S("px-3 py-2 cursor-pointer text-sm flex items-center gap-2 transition-colors duration-150","hover:bg-[var(--select-dropdown-hover)]",n.includes(e.value)&&"bg-[var(--select-dropdown-selected)] font-semibold"),onMouseDown:()=>de(e.value)},a.createElement("input",{type:"checkbox",checked:n.includes(e.value),readOnly:!0,className:"accent-blue-500"}),e.label))),L&&a.createElement("span",{className:"text-red-500 text-xs mt-1 block"},L))});f.displayName="MultiSelect";f.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},filterPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Digite para filtrar..."',computed:!1}},caseSensitive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},filterFunction:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: MultiSelectOption, searchTerm: string) => boolean",signature:{arguments:[{type:{name:"MultiSelectOption"},name:"option"},{type:{name:"string"},name:"searchTerm"}],return:{name:"boolean"}}},description:""}}};const Se={title:"Components/MultiSelect",component:f,argTypes:{isClearable:{control:"boolean",description:"Exibe botão para limpar a seleção",defaultValue:!1},searchable:{control:"boolean",description:"Permite filtrar opções digitando",defaultValue:!1},caseSensitive:{control:"boolean",description:"Filtro case-sensitive",defaultValue:!1},filterPlaceholder:{control:"text",description:"Placeholder do input de filtro",defaultValue:"Digite para filtrar..."},label:{control:"text",defaultValue:"Selecione uma ou mais opções"},options:{control:"object",defaultValue:[{label:"Opção 1",value:"1"},{label:"Opção 2",value:"2"},{label:"Opção 3",value:"3"},{label:"Opção 4",value:"4"},{label:"Opção 5",value:"5"}]},name:{control:"text",defaultValue:"multiSelect"},primaryColor:{control:"color",description:"Cor primária do tema",defaultValue:"#2563eb"},primaryHover:{control:"color",description:"Cor de hover/background primária",defaultValue:"#dbeafe"}}},h=t=>{const{primaryColor:i,primaryHover:l,...y}=t,k=O({defaultValues:{multiSelect:[]}});return a.useEffect(()=>{i&&document.documentElement.style.setProperty("--primary",i),l&&document.documentElement.style.setProperty("--primary-hover",l)},[i,l]),o.createElement(N,{...k},o.createElement("form",{style:{maxWidth:320}},o.createElement(f,{...y})))};h.args={name:"multiSelect",label:"Selecione uma ou mais opções",options:[{label:"Opção 1",value:"1"},{label:"Opção 2",value:"2"},{label:"Opção 3",value:"3"},{label:"Opção 4",value:"4"},{label:"Opção 5",value:"5"}],isClearable:!1,primaryColor:"#2563eb",primaryHover:"#dbeafe"};const w=()=>{const t=O({defaultValues:{multiSelect1:[],multiSelect2:[],multiSelect3:[]}}),i=[{name:"Blue (Default)",primary:"#2563eb",hover:"#dbeafe"},{name:"Red",primary:"#dc2626",hover:"#fecaca"},{name:"Green",primary:"#059669",hover:"#d1fae5"},{name:"Purple",primary:"#7c3aed",hover:"#e9d5ff"}];return o.createElement(N,{...t},o.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"}},i.map((l,y)=>o.createElement("div",{key:l.name,style:{padding:"1rem",border:"1px solid #e5e7eb",borderRadius:"8px",background:"#fafafa"}},o.createElement("h3",{style:{margin:"0 0 1rem 0",color:l.primary,fontSize:"1.1rem",fontWeight:"600"}},l.name," Theme"),o.createElement("div",{style:{maxWidth:"320px","--primary":l.primary,"--primary-hover":l.hover,"--primary-text":"#fff"}},o.createElement(f,{name:`multiSelect${y+1}`,label:`${l.name} MultiSelect`,options:[{label:"Opção 1",value:"1"},{label:"Opção 2",value:"2"},{label:"Opção 3",value:"3"}],isClearable:!0}))))))},M=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"},{label:"Kiwi",value:"kiwi"},{label:"Lemon",value:"lemon"},{label:"Mango",value:"mango"},{label:"Orange",value:"orange"},{label:"Papaya",value:"papaya"},{label:"Quince",value:"quince"},{label:"Raspberry",value:"raspberry"}],d=t=>{const i=O({defaultValues:{multiSelect:[]}});return o.createElement(N,{...i},o.createElement("form",{style:{maxWidth:320}},o.createElement(f,{label:t.label||"Selecione frutas",searchable:t.searchable??!0,isClearable:t.isClearable??!0,filterPlaceholder:t.filterPlaceholder||"Digite para filtrar frutas...",caseSensitive:t.caseSensitive??!1,...t,name:t.name||"multiSelect",options:t.options||M})))};d.args={name:"multiSelect",options:M,label:"Selecione frutas",searchable:!0,isClearable:!0,filterPlaceholder:"Digite para filtrar frutas...",caseSensitive:!1};d.storyName="Com Filtro";const p=t=>{const i=O({defaultValues:{multiSelect:[]}});return o.createElement(N,{...i},o.createElement("form",{style:{maxWidth:320}},o.createElement(f,{label:t.label||"Filtro Case-Sensitive",searchable:t.searchable??!0,isClearable:t.isClearable??!0,filterPlaceholder:t.filterPlaceholder||"Digite 'Apple' ou 'apple'",caseSensitive:t.caseSensitive??!0,...t,name:t.name||"multiSelect",options:t.options||M})))};p.args={name:"multiSelect",options:M,label:"Filtro Case-Sensitive",searchable:!0,isClearable:!0,filterPlaceholder:"Digite 'Apple' ou 'apple'",caseSensitive:!0};p.storyName="Filtro Case-Sensitive";h.__docgenInfo={description:"",methods:[],displayName:"Default"};w.__docgenInfo={description:"",methods:[],displayName:"ThemeVariations"};d.__docgenInfo={description:"",methods:[],displayName:"WithFilter"};p.__docgenInfo={description:"",methods:[],displayName:"MultiSelectCaseSensitive"};var H,z,B;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const {
    primaryColor,
    primaryHover,
    ...multiSelectArgs
  } = args;
  const methods: UseFormReturn<FormValues> = useForm<FormValues>({
    defaultValues: {
      multiSelect: []
    }
  });

  // Apply CSS variables when they change
  useEffect(() => {
    if (primaryColor) {
      document.documentElement.style.setProperty('--primary', primaryColor);
    }
    if (primaryHover) {
      document.documentElement.style.setProperty('--primary-hover', primaryHover);
    }
  }, [primaryColor, primaryHover]);
  return <FormProvider {...methods}>
      <form style={{
      maxWidth: 320
    }}>
        <MultiSelect {...multiSelectArgs} />
      </form>
    </FormProvider>;
}`,...(B=(z=h.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var $,G,U;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const methods = useForm<FormValues>({
    defaultValues: {
      multiSelect1: [],
      multiSelect2: [],
      multiSelect3: []
    }
  });
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
  return <FormProvider {...methods}>
      <div style={{
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
            <div style={{
          maxWidth: "320px",
          "--primary": theme.primary,
          "--primary-hover": theme.hover,
          "--primary-text": "#fff"
        } as React.CSSProperties}>
              <MultiSelect name={\`multiSelect\${index + 1}\`} label={\`\${theme.name} MultiSelect\`} options={[{
            label: "Opção 1",
            value: "1"
          }, {
            label: "Opção 2",
            value: "2"
          }, {
            label: "Opção 3",
            value: "3"
          }]} isClearable />
            </div>
          </div>)}
      </div>
    </FormProvider>;
}`,...(U=(G=w.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var j,Y,K;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const methods: UseFormReturn<FormValues> = useForm<FormValues>({
    defaultValues: {
      multiSelect: []
    }
  });
  return <FormProvider {...methods}>
      <form style={{
      maxWidth: 320
    }}>
        <MultiSelect label={args.label || "Selecione frutas"} searchable={args.searchable ?? true} isClearable={args.isClearable ?? true} filterPlaceholder={args.filterPlaceholder || "Digite para filtrar frutas..."} caseSensitive={args.caseSensitive ?? false} {...args} name={args.name || "multiSelect"} options={args.options || fruitOptions} />
      </form>
    </FormProvider>;
}`,...(K=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var Q,X,J;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const methods: UseFormReturn<FormValues> = useForm<FormValues>({
    defaultValues: {
      multiSelect: []
    }
  });
  return <FormProvider {...methods}>
      <form style={{
      maxWidth: 320
    }}>
        <MultiSelect label={args.label || "Filtro Case-Sensitive"} searchable={args.searchable ?? true} isClearable={args.isClearable ?? true} filterPlaceholder={args.filterPlaceholder || "Digite 'Apple' ou 'apple'"} caseSensitive={args.caseSensitive ?? true} {...args} name={args.name || "multiSelect"} options={args.options || fruitOptions} />
      </form>
    </FormProvider>;
}`,...(J=(X=p.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};const we=["Default","ThemeVariations","WithFilter","MultiSelectCaseSensitive"];export{h as Default,p as MultiSelectCaseSensitive,w as ThemeVariations,d as WithFilter,we as __namedExportsOrder,Se as default};
