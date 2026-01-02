import{r as a,R as o}from"./iframe-CB-4TmZU.js";import{u as Ce,a as Ee,b as M,F as N}from"./index.esm-Kd4NofSR.js";import{c as w}from"./utils-CuF-iVWQ.js";const b=a.forwardRef(({name:t,label:i,options:l,className:g,containerClassName:D,isClearable:ne,searchable:v=!1,filterPlaceholder:L="Digite para filtrar...",caseSensitive:_=!1,filterFunction:oe,onFocus:E,onBlur:F,...s},ie)=>{var B,$,z;const[se,h]=a.useState(!1),[u,P]=a.useState(!1),[V,ce]=a.useState(""),[W,ue]=a.useState({top:0,left:0,width:0}),x=a.useRef(null),me=a.useRef(null),c=Ce(),A=c==null?void 0:c.control,de=A&&t?Ee({control:A,name:t}):void 0,n=s.value??de??[],H=(z=($=(B=c==null?void 0:c.formState)==null?void 0:B.errors)==null?void 0:$[t])==null?void 0:z.message,pe=oe||((e,r)=>{const m=_?e.label:e.label.toLowerCase(),d=_?r:r.toLowerCase();return m.includes(d)}),I=V.trim()?l.filter(e=>pe(e,V.trim())):l,fe=se||n&&n.length>0||v&&!!V,q=a.useCallback(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,[]),O=a.useCallback(()=>{if(x.current&&u){const e=x.current.getBoundingClientRect(),r=q(),m=window.innerHeight,d=window.innerWidth,S=152;let R=e.bottom+4,T=e.left;if(r){const G=m-e.bottom,Se=e.top;G<S&&Se>S&&(R=e.top-S-4);const U=16,we=d-e.width-U;T=Math.min(Math.max(T,U),we)}else m-e.bottom<S&&(R=e.top-S-4);ue({top:R,left:T,width:e.width})}},[u,q]);a.useEffect(()=>{if(O(),u){const e=()=>O(),r=()=>O();return window.addEventListener("resize",e),window.addEventListener("scroll",r,!0),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",r,!0)}}},[u,O]),a.useEffect(()=>{const e=r=>{x.current&&!x.current.contains(r.target)&&(P(!1),h(!1))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const be=()=>{P(e=>!e),h(!0)},ve=e=>{h(!0),E&&E(e)},he=e=>{F&&F(e)},ye=e=>{var m;let r;n.includes(e)?r=n.filter(d=>d!==e):r=[...n,e],c&&t&&c.setValue(t,r),s.onChange&&((m=s.onChange)==null||m.call(s,{target:{value:r}})),h(!0)},ge=e=>{var r;e.stopPropagation(),c&&t&&c.setValue(t,[]),s.onChange&&((r=s.onChange)==null||r.call(s,{target:{value:[]}})),P(!1),h(!1)},xe=e=>{ce(e.target.value)};return a.createElement("div",{className:w("relative",D),ref:x},a.createElement("div",{id:s.id||t,tabIndex:0,role:"button","aria-haspopup":"listbox","aria-expanded":u,className:w("peer flex items-center h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 py-3 text-sm transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer relative",g),onClick:v?void 0:be,onFocus:v?void 0:ve,onBlur:v?void 0:he,ref:ie},a.createElement("div",{className:"flex flex-nowrap gap-1 items-center min-h-[1.5rem] w-full overflow-x-auto",style:{scrollbarWidth:"none"}},n&&n.length>0?l.filter(e=>n.includes(e.value)).map(e=>a.createElement("span",{key:e.value,className:"flex items-center border border-blue-200 bg-blue-50 text-blue-700 rounded-2xl px-3 py-1 text-xs shadow-sm mr-1 gap-2",style:{maxWidth:"140px"}},a.createElement("span",{className:"truncate",title:e.label},e.label),a.createElement("button",{type:"button",className:"ml-1 text-[var(--primary,#2563eb)] hover:text-red-500 focus:outline-none w-4 h-4 flex items-center justify-center rounded-full transition-colors duration-150","aria-label":`Remover ${e.label}`,tabIndex:-1,onClick:r=>{r.stopPropagation();const m=n.filter(d=>d!==e.value);c&&t&&c.setValue(t,m),s.onChange&&s.onChange({target:{value:m}})}},a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M3 3L9 9M9 3L3 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}))))):!i&&!v&&a.createElement("span",{className:"text-gray-400 text-sm"},"Selecione..."),v&&a.createElement("input",{ref:me,type:"text",value:V,onChange:xe,onFocus:e=>{h(!0),P(!0),E&&E(e)},onBlur:e=>{F&&F(e)},placeholder:i?n&&n.length>0?"":L:L||"Selecione...",className:"flex-1 bg-transparent border-none outline-none text-sm min-w-[100px]"})),ne&&n&&n.length>0&&a.createElement("button",{type:"button",tabIndex:-1,"aria-label":"Limpar seleção",className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-transparent p-1 rounded-full focus:outline-none",onClick:ge},"✕")),i&&a.createElement("label",{htmlFor:s.id||t,className:w("absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",fe?"top-0 scale-90 -translate-y-1 text-xs text-[var(--primary,#2563eb)] p-1 rounded-full bg-white":"top-3 scale-100 translate-y-0.5")},i),a.createElement("div",{className:w("absolute left-0 w-full mt-1 rounded-md transition-all duration-200 overflow-hidden","bg-[var(--select-dropdown-bg)] border-[var(--select-dropdown-border)] text-[var(--select-dropdown-text)]",u?"border max-h-36 opacity-100 scale-100":"max-h-0 opacity-0 scale-95 pointer-events-none"),style:{maxHeight:u?"9.5rem":"0",overflowY:l.length>3?"auto":"hidden",position:"fixed",top:u?`${W.top}px`:"auto",left:u?`${W.left}px`:"auto",width:u?`${W.width}px`:"auto",zIndex:9999,boxShadow:u?"var(--select-dropdown-shadow)":"none"}},I.length===0?a.createElement("div",{className:"px-3 py-2 text-sm text-gray-500 text-center"},"Nenhuma opção encontrada"):I.map(e=>a.createElement("div",{key:e.value,className:w("px-3 py-2 cursor-pointer text-sm flex items-center gap-2 transition-colors duration-150","hover:bg-[var(--select-dropdown-hover)]",n.includes(e.value)&&"bg-[var(--select-dropdown-selected)] font-semibold"),onMouseDown:()=>ye(e.value)},a.createElement("input",{type:"checkbox",checked:n.includes(e.value),readOnly:!0,className:"accent-blue-500"}),e.label))),H&&a.createElement("span",{className:"text-red-500 text-xs mt-1 block"},H))});b.displayName="MultiSelect";b.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},filterPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Digite para filtrar..."',computed:!1}},caseSensitive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},filterFunction:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: MultiSelectOption, searchTerm: string) => boolean",signature:{arguments:[{type:{name:"MultiSelectOption"},name:"option"},{type:{name:"string"},name:"searchTerm"}],return:{name:"boolean"}}},description:""}}};const Me={title:"Components/MultiSelect",component:b,argTypes:{isClearable:{control:"boolean",description:"Exibe botão para limpar a seleção",defaultValue:!1},searchable:{control:"boolean",description:"Permite filtrar opções digitando",defaultValue:!1},caseSensitive:{control:"boolean",description:"Filtro case-sensitive",defaultValue:!1},filterPlaceholder:{control:"text",description:"Placeholder do input de filtro",defaultValue:"Digite para filtrar..."},label:{control:"text",defaultValue:"Selecione uma ou mais opções"},options:{control:"object",defaultValue:[{label:"Opção 1",value:"1"},{label:"Opção 2",value:"2"},{label:"Opção 3",value:"3"},{label:"Opção 4",value:"4"},{label:"Opção 5",value:"5"}]},name:{control:"text",defaultValue:"multiSelect"},primaryColor:{control:"color",description:"Cor primária do tema",defaultValue:"#2563eb"},primaryHover:{control:"color",description:"Cor de hover/background primária",defaultValue:"#dbeafe"}}},y=t=>{const{primaryColor:i,primaryHover:l,...g}=t,D=M({defaultValues:{multiSelect:[]}});return a.useEffect(()=>{i&&document.documentElement.style.setProperty("--primary",i),l&&document.documentElement.style.setProperty("--primary-hover",l)},[i,l]),o.createElement(N,{...D},o.createElement("form",{style:{maxWidth:320}},o.createElement(b,{...g})))};y.args={name:"multiSelect",label:"Selecione uma ou mais opções",options:[{label:"Opção 1",value:"1"},{label:"Opção 2",value:"2"},{label:"Opção 3",value:"3"},{label:"Opção 4",value:"4"},{label:"Opção 5",value:"5"}],isClearable:!1,primaryColor:"#2563eb",primaryHover:"#dbeafe"};const C=()=>{const t=M({defaultValues:{multiSelect1:[],multiSelect2:[],multiSelect3:[]}}),i=[{name:"Blue (Default)",primary:"#2563eb",hover:"#dbeafe"},{name:"Red",primary:"#dc2626",hover:"#fecaca"},{name:"Green",primary:"#059669",hover:"#d1fae5"},{name:"Purple",primary:"#7c3aed",hover:"#e9d5ff"}];return o.createElement(N,{...t},o.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"}},i.map((l,g)=>o.createElement("div",{key:l.name,style:{padding:"1rem",border:"1px solid #e5e7eb",borderRadius:"8px",background:"#fafafa"}},o.createElement("h3",{style:{margin:"0 0 1rem 0",color:l.primary,fontSize:"1.1rem",fontWeight:"600"}},l.name," Theme"),o.createElement("div",{style:{maxWidth:"320px","--primary":l.primary,"--primary-hover":l.hover,"--primary-text":"#fff"}},o.createElement(b,{name:`multiSelect${g+1}`,label:`${l.name} MultiSelect`,options:[{label:"Opção 1",value:"1"},{label:"Opção 2",value:"2"},{label:"Opção 3",value:"3"}],isClearable:!0}))))))},k=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"},{label:"Kiwi",value:"kiwi"},{label:"Lemon",value:"lemon"},{label:"Mango",value:"mango"},{label:"Orange",value:"orange"},{label:"Papaya",value:"papaya"},{label:"Quince",value:"quince"},{label:"Raspberry",value:"raspberry"}],p=t=>{const i=M({defaultValues:{multiSelect:[]}});return o.createElement(N,{...i},o.createElement("form",{style:{maxWidth:320}},o.createElement(b,{label:t.label||"Selecione frutas",searchable:t.searchable??!0,isClearable:t.isClearable??!0,filterPlaceholder:t.filterPlaceholder||"Digite para filtrar frutas...",caseSensitive:t.caseSensitive??!1,...t,name:t.name||"multiSelect",options:t.options||k})))};p.args={name:"multiSelect",options:k,label:"Selecione frutas",searchable:!0,isClearable:!0,filterPlaceholder:"Digite para filtrar frutas...",caseSensitive:!1};p.storyName="Com Filtro";const f=t=>{const i=M({defaultValues:{multiSelect:[]}});return o.createElement(N,{...i},o.createElement("form",{style:{maxWidth:320}},o.createElement(b,{label:t.label||"Filtro Case-Sensitive",searchable:t.searchable??!0,isClearable:t.isClearable??!0,filterPlaceholder:t.filterPlaceholder||"Digite 'Apple' ou 'apple'",caseSensitive:t.caseSensitive??!0,...t,name:t.name||"multiSelect",options:t.options||k})))};f.args={name:"multiSelect",options:k,label:"Filtro Case-Sensitive",searchable:!0,isClearable:!0,filterPlaceholder:"Digite 'Apple' ou 'apple'",caseSensitive:!0};f.storyName="Filtro Case-Sensitive";y.__docgenInfo={description:"",methods:[],displayName:"Default"};C.__docgenInfo={description:"",methods:[],displayName:"ThemeVariations"};p.__docgenInfo={description:"",methods:[],displayName:"WithFilter"};f.__docgenInfo={description:"",methods:[],displayName:"MultiSelectCaseSensitive"};var j,K,Q;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
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
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,J,X;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...(X=(J=C.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,ee,te;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
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
}`,...(te=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,le;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
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
}`,...(le=(re=f.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};const Ne=["Default","ThemeVariations","WithFilter","MultiSelectCaseSensitive"];export{y as Default,f as MultiSelectCaseSensitive,C as ThemeVariations,p as WithFilter,Ne as __namedExportsOrder,Me as default};
