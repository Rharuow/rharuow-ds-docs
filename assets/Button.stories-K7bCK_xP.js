import{j as v,c as b}from"./utils-DLq8OvKD.js";const u=({children:d,variant:i="default",className:c="",...m})=>{const p="px-4 py-2 rounded font-medium transition",f={default:"bg-[var(--primary,#2563eb)] text-[var(--primary-text,#fff)] hover:bg-[var(--primary-hover,#1d4ed8)]",outline:"border border-[var(--primary,#2563eb)] text-[var(--primary,#2563eb)] bg-white hover:bg-[var(--primary-hover,#e0e7ff)]",secondary:"bg-[var(--secondary,#fbbf24)] text-[var(--secondary-text,#222)] hover:bg-[var(--secondary-hover,#f59e42)]"};return v.jsx("button",{className:b(p,f[i],c),...m,children:d})};u.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "outline" | "secondary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const g={title:"Components/Button",component:u,tags:["autodocs"]},e={args:{children:"Botão padrão",variant:"default"}},a={args:{children:"Botão outline",variant:"outline"}};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: "Botão padrão",
    variant: "default"
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var n,s,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "Botão outline",
    variant: "outline"
  }
}`,...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const h=["Default","Outline"];export{e as Default,a as Outline,h as __namedExportsOrder,g as default};
