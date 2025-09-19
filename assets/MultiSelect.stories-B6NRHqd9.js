import{r as t,R as m}from"./iframe-0UjUrlXI.js";import{u as U,a as Y,b as _,F as D}from"./index.esm-Bu0awhvF.js";import{c as f}from"./utils-CuF-iVWQ.js";const y=t.forwardRef(({name:a,label:s,options:r,className:u,containerClassName:v,isClearable:H,onFocus:E,onBlur:C,...l},I)=>{var k,V,F;const[L,d]=t.useState(!1),[h,x]=t.useState(!1),g=t.useRef(null),o=U(),w=o==null?void 0:o.control,q=w&&a?Y({control:w,name:a}):void 0,n=l.value??q??[],O=(F=(V=(k=o==null?void 0:o.formState)==null?void 0:k.errors)==null?void 0:V[a])==null?void 0:F.message,A=L||n&&n.length>0;t.useEffect(()=>{const e=i=>{g.current&&!g.current.contains(i.target)&&(x(!1),d(!1))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const $=()=>{x(e=>!e),d(!0)},z=e=>{d(!0),E&&E(e)},B=e=>{C&&C(e)},j=e=>{var p;let i;n.includes(e)?i=n.filter(S=>S!==e):i=[...n,e],o&&a&&o.setValue(a,i),l.onChange&&((p=l.onChange)==null||p.call(l,{target:{value:i}})),d(!0)},G=e=>{var i;e.stopPropagation(),o&&a&&o.setValue(a,[]),l.onChange&&((i=l.onChange)==null||i.call(l,{target:{value:[]}})),x(!1),d(!1)};return t.createElement("div",{className:f("relative",v),ref:g},t.createElement("div",{id:l.id||a,tabIndex:0,role:"button","aria-haspopup":"listbox","aria-expanded":h,className:f("peer flex items-center h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 py-3 text-sm transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer relative",u),onClick:$,onFocus:z,onBlur:B,ref:I},t.createElement("div",{className:"flex flex-nowrap gap-1 items-center min-h-[1.5rem] w-full overflow-x-auto",style:{scrollbarWidth:"none"}},n&&n.length>0?r.filter(e=>n.includes(e.value)).map(e=>t.createElement("span",{key:e.value,className:"flex items-center border border-blue-200 bg-blue-50 text-blue-700 rounded-2xl px-3 py-1 text-xs shadow-sm mr-1 gap-2",style:{maxWidth:"140px"}},t.createElement("span",{className:"truncate",title:e.label},e.label),t.createElement("button",{type:"button",className:"ml-1 text-[var(--primary,#2563eb)] hover:text-red-500 focus:outline-none w-4 h-4 flex items-center justify-center rounded-full transition-colors duration-150","aria-label":`Remover ${e.label}`,tabIndex:-1,onClick:i=>{i.stopPropagation();const p=n.filter(S=>S!==e.value);o&&a&&o.setValue(a,p),l.onChange&&l.onChange({target:{value:p}})}},t.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M3 3L9 9M9 3L3 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}))))):!s&&t.createElement("span",{className:"text-gray-400 text-sm"},"Selecione...")),H&&n&&n.length>0&&t.createElement("button",{type:"button",tabIndex:-1,"aria-label":"Limpar seleção",className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-transparent p-1 rounded-full focus:outline-none",onClick:G},"✕")),s&&t.createElement("label",{htmlFor:l.id||a,className:f("absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",A?"top-0 scale-90 -translate-y-1 text-xs text-[var(--primary,#2563eb)] p-1 rounded-full bg-white":"top-3 scale-100 translate-y-0.5")},s),t.createElement("div",{className:f("absolute left-0 w-full mt-1 rounded-md shadow-lg bg-white z-20 transition-all duration-200 overflow-hidden",h?"border border-[var(--primary,#2563eb)] max-h-36 opacity-100 scale-100":"max-h-0 opacity-0 scale-95 pointer-events-none"),style:{maxHeight:h?"9.5rem":"0",overflowY:r.length>3?"auto":"hidden"}},r.map(e=>t.createElement("div",{key:e.value,className:f("px-3 py-2 cursor-pointer hover:bg-blue-50 text-sm flex items-center gap-2",n.includes(e.value)&&"bg-blue-100 font-semibold"),onMouseDown:()=>j(e.value)},t.createElement("input",{type:"checkbox",checked:n.includes(e.value),readOnly:!0,className:"accent-blue-500"}),e.label))),O&&t.createElement("span",{className:"text-red-500 text-xs mt-1 block"},O))});y.displayName="MultiSelect";y.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""}}};const X={title:"Components/MultiSelect",component:y,argTypes:{isClearable:{control:"boolean",description:"Exibe botão para limpar a seleção",defaultValue:!1},label:{control:"text",defaultValue:"Selecione uma ou mais opções"},options:{control:"object",defaultValue:[{label:"Opção 1",value:"1"},{label:"Opção 2",value:"2"},{label:"Opção 3",value:"3"},{label:"Opção 4",value:"4"},{label:"Opção 5",value:"5"}]},name:{control:"text",defaultValue:"multiSelect"},primaryColor:{control:"color",description:"Cor primária do tema",defaultValue:"#2563eb"},primaryHover:{control:"color",description:"Cor de hover/background primária",defaultValue:"#dbeafe"}}},c=a=>{const{primaryColor:s,primaryHover:r,...u}=a,v=_({defaultValues:{multiSelect:[]}});return t.useEffect(()=>{s&&document.documentElement.style.setProperty("--primary",s),r&&document.documentElement.style.setProperty("--primary-hover",r)},[s,r]),m.createElement(D,{...v},m.createElement("form",{style:{maxWidth:320}},m.createElement(y,{...u})))};c.args={name:"multiSelect",label:"Selecione uma ou mais opções",options:[{label:"Opção 1",value:"1"},{label:"Opção 2",value:"2"},{label:"Opção 3",value:"3"},{label:"Opção 4",value:"4"},{label:"Opção 5",value:"5"}],isClearable:!1,primaryColor:"#2563eb",primaryHover:"#dbeafe"};const b=()=>{const a=_({defaultValues:{multiSelect1:[],multiSelect2:[],multiSelect3:[]}}),s=[{name:"Blue (Default)",primary:"#2563eb",hover:"#dbeafe"},{name:"Red",primary:"#dc2626",hover:"#fecaca"},{name:"Green",primary:"#059669",hover:"#d1fae5"},{name:"Purple",primary:"#7c3aed",hover:"#e9d5ff"}];return m.createElement(D,{...a},m.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"}},s.map((r,u)=>m.createElement("div",{key:r.name,style:{padding:"1rem",border:"1px solid #e5e7eb",borderRadius:"8px",background:"#fafafa"}},m.createElement("h3",{style:{margin:"0 0 1rem 0",color:r.primary,fontSize:"1.1rem",fontWeight:"600"}},r.name," Theme"),m.createElement("div",{style:{maxWidth:"320px","--primary":r.primary,"--primary-hover":r.hover,"--primary-text":"#fff"}},m.createElement(y,{name:`multiSelect${u+1}`,label:`${r.name} MultiSelect`,options:[{label:"Opção 1",value:"1"},{label:"Opção 2",value:"2"},{label:"Opção 3",value:"3"}],isClearable:!0}))))))};c.__docgenInfo={description:"",methods:[],displayName:"Default"};b.__docgenInfo={description:"",methods:[],displayName:"ThemeVariations"};var N,M,P;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
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
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var R,T,W;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(W=(T=b.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};const Z=["Default","ThemeVariations"];export{c as Default,b as ThemeVariations,Z as __namedExportsOrder,X as default};
