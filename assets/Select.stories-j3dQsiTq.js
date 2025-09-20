import{R as a}from"./iframe-jqMjAhQi.js";import{S as i}from"./Select-BT6mi-pO.js";import{b as n,F as c}from"./index.esm-bIV8_WNw.js";import"./utils-CuF-iVWQ.js";const P={title:"Components/Select",component:i,argTypes:{isClearable:{control:"boolean",description:"Exibe botão para limpar a seleção",defaultValue:!1},searchable:{control:"boolean",description:"Permite filtrar opções digitando",defaultValue:!1},caseSensitive:{control:"boolean",description:"Filtro case-sensitive",defaultValue:!1},filterPlaceholder:{control:"text",description:"Placeholder do input de filtro",defaultValue:"Digite para filtrar..."}}},s=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"},{label:"Kiwi",value:"kiwi"},{label:"Lemon",value:"lemon"},{label:"Mango",value:"mango"},{label:"Orange",value:"orange"},{label:"Papaya",value:"papaya"},{label:"Quince",value:"quince"},{label:"Raspberry",value:"raspberry"}],t=e=>{const o=n({defaultValues:{select:""}});return a.createElement(c,{...o},a.createElement("form",{style:{maxWidth:320}},a.createElement(i,{label:e.label||"Selecione uma opção",isClearable:e.isClearable??!1,...e,name:e.name||"select",options:e.options||s})))};t.args={name:"select",options:s,label:"Selecione uma opção",isClearable:!1};const l=e=>{const o=n({defaultValues:{select:""}});return a.createElement(c,{...o},a.createElement("form",{style:{maxWidth:320}},a.createElement(i,{label:e.label||"Selecione uma fruta",searchable:e.searchable??!0,isClearable:e.isClearable??!0,filterPlaceholder:e.filterPlaceholder||"Digite para filtrar frutas...",caseSensitive:e.caseSensitive??!1,...e,name:e.name||"select",options:e.options||s})))};l.args={name:"select",options:s,label:"Selecione uma fruta",searchable:!0,isClearable:!0,filterPlaceholder:"Digite para filtrar frutas...",caseSensitive:!1};l.storyName="Com Filtro";const r=e=>{const o=n({defaultValues:{select:""}});return a.createElement(c,{...o},a.createElement("form",{style:{maxWidth:320}},a.createElement(i,{label:e.label||"Filtro Case-Sensitive",searchable:e.searchable??!0,isClearable:e.isClearable??!0,filterPlaceholder:e.filterPlaceholder||"Digite 'Apple' ou 'apple'",caseSensitive:e.caseSensitive??!0,...e,name:e.name||"select",options:e.options||s})))};r.args={name:"select",options:s,label:"Filtro Case-Sensitive",searchable:!0,isClearable:!0,filterPlaceholder:"Digite 'Apple' ou 'apple'",caseSensitive:!0};r.storyName="Filtro Case-Sensitive";t.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"WithFilter"};r.__docgenInfo={description:"",methods:[],displayName:"CaseSensitiveFilter"};var m,u,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const methods: UseFormReturn<FormValues> = useForm<FormValues>({
    defaultValues: {
      select: ""
    }
  });
  return <FormProvider {...methods}>
      <form style={{
      maxWidth: 320
    }}>
        <Select label={args.label || "Selecione uma opção"} isClearable={args.isClearable ?? false} {...args} name={args.name || "select"} options={args.options || options} />
      </form>
    </FormProvider>;
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,b,f;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const methods: UseFormReturn<FormValues> = useForm<FormValues>({
    defaultValues: {
      select: ""
    }
  });
  return <FormProvider {...methods}>
      <form style={{
      maxWidth: 320
    }}>
        <Select label={args.label || "Selecione uma fruta"} searchable={args.searchable ?? true} isClearable={args.isClearable ?? true} filterPlaceholder={args.filterPlaceholder || "Digite para filtrar frutas..."} caseSensitive={args.caseSensitive ?? false} {...args} name={args.name || "select"} options={args.options || options} />
      </form>
    </FormProvider>;
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,v,F;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const methods: UseFormReturn<FormValues> = useForm<FormValues>({
    defaultValues: {
      select: ""
    }
  });
  return <FormProvider {...methods}>
      <form style={{
      maxWidth: 320
    }}>
        <Select label={args.label || "Filtro Case-Sensitive"} searchable={args.searchable ?? true} isClearable={args.isClearable ?? true} filterPlaceholder={args.filterPlaceholder || "Digite 'Apple' ou 'apple'"} caseSensitive={args.caseSensitive ?? true} {...args} name={args.name || "select"} options={args.options || options} />
      </form>
    </FormProvider>;
}`,...(F=(v=r.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const V=["Default","WithFilter","CaseSensitiveFilter"];export{r as CaseSensitiveFilter,t as Default,l as WithFilter,V as __namedExportsOrder,P as default};
