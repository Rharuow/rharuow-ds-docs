import{r as a,R as o}from"./iframe-0UjUrlXI.js";import{u as B,a as k,b as V,F as z}from"./index.esm-Bu0awhvF.js";import{c as u}from"./utils-CuF-iVWQ.js";const i=a.forwardRef(({name:e,className:p,label:x,onFocus:v,onBlur:m,Icon:f,iconClassName:C,iconAction:_,containerClassName:q,rows:R=4,...d},s)=>{var w,b,E;const[D,h]=a.useState(!1),t=B(),g=t==null?void 0:t.control,P=t==null?void 0:t.register,L=g&&e?k({control:g,name:e}):void 0,S=d.value??L??"",y=(E=(b=(w=t==null?void 0:t.formState)==null?void 0:w.errors)==null?void 0:b[e])==null?void 0:E.message,A=D||!!S;return a.createElement("div",{className:u("relative",q)},a.createElement("textarea",{id:d.id||e,rows:R,className:u("peer flex min-h-[80px] w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 pt-6 pb-2 text-sm placeholder-transparent transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 resize-vertical",f?"pr-12":"",p),onFocus:r=>{h(!0),v&&v(r)},...t&&e?(()=>{const r=P(e),T=r.onBlur;return{...r,ref:n=>{typeof s=="function"?s(n):s&&(s.current=n),r.ref&&r.ref(n)},onBlur:n=>{h(!1),m&&m(n),T&&T(n)}}})():{ref:s,onBlur:r=>{h(!1),m&&m(r)}},...d}),x&&a.createElement("label",{htmlFor:d.id||e,className:u("absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",A?"top-0 scale-90 -translate-y-1 text-xs text-[var(--primary,#2563eb)] p-1 rounded-full bg-white":"top-3 scale-100 translate-y-0.5")},x),f&&a.createElement("div",{className:u("absolute top-3 right-3 text-gray-400 cursor-pointer hover:text-[var(--primary,#2563eb)] transition-colors duration-200",C),onClick:_},a.createElement(f,null)),y&&a.createElement("span",{className:"text-red-500 text-xs mt-1 block"},y))});i.displayName="Textarea";i.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},Icon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},iconClassName:{required:!1,tsType:{name:"string"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},iconAction:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},rows:{defaultValue:{value:"4",computed:!1},required:!1}}};const J={title:"Components/Textarea",component:i},l=()=>{const e=V({defaultValues:{textarea:""}});return o.createElement(z,{...e},o.createElement("form",{style:{maxWidth:320}},o.createElement(i,{name:"textarea",label:"Mensagem",rows:4})))},c=()=>{const e=V({defaultValues:{textareaWithIcon:""}}),p=()=>o.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",fill:"currentColor"}));return o.createElement(z,{...e},o.createElement("form",{style:{maxWidth:320}},o.createElement(i,{name:"textareaWithIcon",label:"Comentário",rows:3,Icon:p,iconAction:()=>console.log("Ícone clicado")})))};l.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};var I,F,W;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const methods = useForm({
    defaultValues: {
      textarea: ""
    }
  });
  return <FormProvider {...methods}>
      <form style={{
      maxWidth: 320
    }}>
        <Textarea name="textarea" label="Mensagem" rows={4} />
      </form>
    </FormProvider>;
}`,...(W=(F=l.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var H,M,N;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const methods = useForm({
    defaultValues: {
      textareaWithIcon: ""
    }
  });
  const MessageIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" fill="currentColor" />
    </svg>;
  return <FormProvider {...methods}>
      <form style={{
      maxWidth: 320
    }}>
        <Textarea name="textareaWithIcon" label="Comentário" rows={3} Icon={MessageIcon} iconAction={() => console.log("Ícone clicado")} />
      </form>
    </FormProvider>;
}`,...(N=(M=c.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const K=["Default","WithIcon"];export{l as Default,c as WithIcon,K as __namedExportsOrder,J as default};
