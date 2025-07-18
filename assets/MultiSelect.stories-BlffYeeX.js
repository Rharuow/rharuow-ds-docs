import{j as r,c as f}from"./utils-DLq8OvKD.js";import{r as c}from"./iframe-B2pcfGHL.js";import{u as U,a as Y,b as W,F as _}from"./index.esm-D8Rah7Xp.js";const b=c.forwardRef(({name:t,label:i,options:a,className:u,containerClassName:x,isClearable:D,onFocus:C,onBlur:j,...l},H)=>{var V,F,N;const[I,d]=c.useState(!1),[v,y]=c.useState(!1),g=c.useRef(null),o=U(),w=o==null?void 0:o.control,L=w&&t?Y({control:w,name:t}):void 0,n=l.value??L??[],O=(N=(F=(V=o==null?void 0:o.formState)==null?void 0:V.errors)==null?void 0:F[t])==null?void 0:N.message,q=I||n&&n.length>0;c.useEffect(()=>{const e=s=>{g.current&&!g.current.contains(s.target)&&(y(!1),d(!1))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const A=()=>{y(e=>!e),d(!0)},$=e=>{d(!0),C&&C(e)},z=e=>{j&&j(e)},B=e=>{var p;let s;n.includes(e)?s=n.filter(S=>S!==e):s=[...n,e],o&&t&&o.setValue(t,s),l.onChange&&((p=l.onChange)==null||p.call(l,{target:{value:s}})),d(!0)},G=e=>{var s;e.stopPropagation(),o&&t&&o.setValue(t,[]),l.onChange&&((s=l.onChange)==null||s.call(l,{target:{value:[]}})),y(!1),d(!1)};return r.jsxs("div",{className:f("relative",x),ref:g,children:[r.jsxs("div",{id:l.id||t,tabIndex:0,role:"button","aria-haspopup":"listbox","aria-expanded":v,className:f("peer flex items-center h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 py-3 text-sm transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer relative",u),onClick:A,onFocus:$,onBlur:z,ref:H,children:[r.jsx("div",{className:"flex flex-nowrap gap-1 items-center min-h-[1.5rem] w-full overflow-x-auto",style:{scrollbarWidth:"none"},children:n&&n.length>0?a.filter(e=>n.includes(e.value)).map(e=>r.jsxs("span",{className:"flex items-center border border-blue-200 bg-blue-50 text-blue-700 rounded-2xl px-3 py-1 text-xs shadow-sm mr-1 gap-2",style:{maxWidth:"140px"},children:[r.jsx("span",{className:"truncate",title:e.label,children:e.label}),r.jsx("button",{type:"button",className:"ml-1 text-[var(--primary,#2563eb)] hover:text-red-500 focus:outline-none w-4 h-4 flex items-center justify-center rounded-full transition-colors duration-150","aria-label":`Remover ${e.label}`,tabIndex:-1,onClick:s=>{s.stopPropagation();const p=n.filter(S=>S!==e.value);o&&t&&o.setValue(t,p),l.onChange&&l.onChange({target:{value:p}})},children:r.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M3 3L9 9M9 3L3 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]},e.value)):!i&&r.jsx("span",{className:"text-gray-400 text-sm",children:"Selecione..."})}),D&&n&&n.length>0&&r.jsx("button",{type:"button",tabIndex:-1,"aria-label":"Limpar seleção",className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-transparent p-1 rounded-full focus:outline-none",onClick:G,children:"✕"})]}),i&&r.jsx("label",{htmlFor:l.id||t,className:f("absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",q?"top-0 scale-90 -translate-y-1 text-xs text-[var(--primary,#2563eb)] p-1 rounded-full bg-white":"top-3 scale-100 translate-y-0.5"),children:i}),r.jsx("div",{className:f("absolute left-0 w-full mt-1 rounded-md shadow-lg bg-white z-20 transition-all duration-200 overflow-hidden",v?"border border-[var(--primary,#2563eb)] max-h-36 opacity-100 scale-100":"max-h-0 opacity-0 scale-95 pointer-events-none"),style:{maxHeight:v?"9.5rem":"0",overflowY:a.length>3?"auto":"hidden"},children:a.map(e=>r.jsxs("div",{className:f("px-3 py-2 cursor-pointer hover:bg-blue-50 text-sm flex items-center gap-2",n.includes(e.value)&&"bg-blue-100 font-semibold"),onMouseDown:()=>B(e.value),children:[r.jsx("input",{type:"checkbox",checked:n.includes(e.value),readOnly:!0,className:"accent-blue-500"}),e.label]},e.value))}),O&&r.jsx("span",{className:"text-red-500 text-xs mt-1 block",children:O})]})});b.displayName="MultiSelect";b.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""}}};const X={title:"Components/MultiSelect",component:b,argTypes:{isClearable:{control:"boolean",description:"Exibe botão para limpar a seleção",defaultValue:!1},label:{control:"text",defaultValue:"Selecione uma ou mais opções"},options:{control:"object",defaultValue:[{label:"Opção 1",value:"1"},{label:"Opção 2",value:"2"},{label:"Opção 3",value:"3"},{label:"Opção 4",value:"4"},{label:"Opção 5",value:"5"}]},name:{control:"text",defaultValue:"multiSelect"},primaryColor:{control:"color",description:"Cor primária do tema",defaultValue:"#2563eb"},primaryHover:{control:"color",description:"Cor de hover/background primária",defaultValue:"#dbeafe"}}},m=t=>{const{primaryColor:i,primaryHover:a,...u}=t,x=W({defaultValues:{multiSelect:[]}});return c.useEffect(()=>{i&&document.documentElement.style.setProperty("--primary",i),a&&document.documentElement.style.setProperty("--primary-hover",a)},[i,a]),r.jsx(_,{...x,children:r.jsx("form",{style:{maxWidth:320},children:r.jsx(b,{...u})})})};m.args={name:"multiSelect",label:"Selecione uma ou mais opções",options:[{label:"Opção 1",value:"1"},{label:"Opção 2",value:"2"},{label:"Opção 3",value:"3"},{label:"Opção 4",value:"4"},{label:"Opção 5",value:"5"}],isClearable:!1,primaryColor:"#2563eb",primaryHover:"#dbeafe"};const h=()=>{const t=W({defaultValues:{multiSelect1:[],multiSelect2:[],multiSelect3:[]}}),i=[{name:"Blue (Default)",primary:"#2563eb",hover:"#dbeafe"},{name:"Red",primary:"#dc2626",hover:"#fecaca"},{name:"Green",primary:"#059669",hover:"#d1fae5"},{name:"Purple",primary:"#7c3aed",hover:"#e9d5ff"}];return r.jsx(_,{...t,children:r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:i.map((a,u)=>r.jsxs("div",{style:{padding:"1rem",border:"1px solid #e5e7eb",borderRadius:"8px",background:"#fafafa"},children:[r.jsxs("h3",{style:{margin:"0 0 1rem 0",color:a.primary,fontSize:"1.1rem",fontWeight:"600"},children:[a.name," Theme"]}),r.jsx("div",{style:{maxWidth:"320px","--primary":a.primary,"--primary-hover":a.hover,"--primary-text":"#fff"},children:r.jsx(b,{name:`multiSelect${u+1}`,label:`${a.name} MultiSelect`,options:[{label:"Opção 1",value:"1"},{label:"Opção 2",value:"2"},{label:"Opção 3",value:"3"}],isClearable:!0})})]},a.name))})})};m.__docgenInfo={description:"",methods:[],displayName:"Default"};h.__docgenInfo={description:"",methods:[],displayName:"ThemeVariations"};var k,M,P;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var E,R,T;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(T=(R=h.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const Z=["Default","ThemeVariations"];export{m as Default,h as ThemeVariations,Z as __namedExportsOrder,X as default};
