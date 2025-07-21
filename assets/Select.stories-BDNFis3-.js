import{j as a}from"./utils-DLq8OvKD.js";import{S as t}from"./Select-244hPVCi.js";import{b as i,F as p}from"./index.esm-C8SzPwbq.js";import"./iframe-BH0FnrdN.js";const f={title:"Components/Select",component:t,argTypes:{isClearable:{control:"boolean",description:"Exibe botão para limpar a seleção",defaultValue:!1}}},n=[{label:"Opção 1",value:"1"},{label:"Opção 2",value:"2"},{label:"Opção 3",value:"3"},{label:"Opção 4",value:"4"},{label:"Opção 5",value:"5"}],e=o=>{const m=i({defaultValues:{select:""}});return a.jsx(p,{...m,children:a.jsx("form",{style:{maxWidth:320},children:a.jsx(t,{label:o.label||"Selecione uma opção",isClearable:o.isClearable??!1,...o,name:o.name||"select",options:o.options||n})})})};e.args={name:"select",options:n,label:"Selecione uma opção",isClearable:!1};e.__docgenInfo={description:"",methods:[],displayName:"Default"};var l,s,r;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,f as default};
