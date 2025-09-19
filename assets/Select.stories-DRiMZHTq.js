import{R as o}from"./iframe-QiuHjIw5.js";import{S as r}from"./Select-BWBA2sfX.js";import{b as i,F as c}from"./index.esm-D7tubVpI.js";import"./utils-CuF-iVWQ.js";const f={title:"Components/Select",component:r,argTypes:{isClearable:{control:"boolean",description:"Exibe botão para limpar a seleção",defaultValue:!1}}},n=[{label:"Opção 1",value:"1"},{label:"Opção 2",value:"2"},{label:"Opção 3",value:"3"},{label:"Opção 4",value:"4"},{label:"Opção 5",value:"5"}],e=a=>{const m=i({defaultValues:{select:""}});return o.createElement(c,{...m},o.createElement("form",{style:{maxWidth:320}},o.createElement(r,{label:a.label||"Selecione uma opção",isClearable:a.isClearable??!1,...a,name:a.name||"select",options:a.options||n})))};e.args={name:"select",options:n,label:"Selecione uma opção",isClearable:!1};e.__docgenInfo={description:"",methods:[],displayName:"Default"};var l,s,t;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const F=["Default"];export{e as Default,F as __namedExportsOrder,f as default};
