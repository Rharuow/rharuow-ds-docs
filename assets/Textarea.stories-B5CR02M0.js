import{j as e,c as m}from"./utils-DLq8OvKD.js";import{r as j}from"./iframe-BH0FnrdN.js";import{u as A,a as B,b as V,F as z}from"./index.esm-C8SzPwbq.js";const l=j.forwardRef(({name:t,className:u,label:h,onFocus:f,onBlur:c,Icon:p,iconClassName:C,iconAction:E,containerClassName:_,rows:q=4,...d},o)=>{var y,w,b;const[R,x]=j.useState(!1),r=A(),v=r==null?void 0:r.control,D=r==null?void 0:r.register,P=v&&t?B({control:v,name:t}):void 0,L=d.value??P??"",g=(b=(w=(y=r==null?void 0:r.formState)==null?void 0:y.errors)==null?void 0:w[t])==null?void 0:b.message,S=R||!!L;return e.jsxs("div",{className:m("relative",_),children:[e.jsx("textarea",{id:d.id||t,rows:q,className:m("peer flex min-h-[80px] w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 pt-6 pb-2 text-sm placeholder-transparent transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 resize-vertical",p?"pr-12":"",u),onFocus:s=>{x(!0),f&&f(s)},...r&&t?(()=>{const s=D(t),T=s.onBlur;return{...s,ref:a=>{typeof o=="function"?o(a):o&&(o.current=a),s.ref&&s.ref(a)},onBlur:a=>{x(!1),c&&c(a),T&&T(a)}}})():{ref:o,onBlur:s=>{x(!1),c&&c(s)}},...d}),h&&e.jsx("label",{htmlFor:d.id||t,className:m("absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",S?"top-0 scale-90 -translate-y-1 text-xs text-[var(--primary,#2563eb)] p-1 rounded-full bg-white":"top-3 scale-100 translate-y-0.5"),children:h}),p&&e.jsx("div",{className:m("absolute top-3 right-3 text-gray-400 cursor-pointer hover:text-[var(--primary,#2563eb)] transition-colors duration-200",C),onClick:E,children:e.jsx(p,{})}),g&&e.jsx("span",{className:"text-red-500 text-xs mt-1 block",children:g})]})});l.displayName="Textarea";l.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},Icon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},iconClassName:{required:!1,tsType:{name:"string"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},iconAction:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},rows:{defaultValue:{value:"4",computed:!1},required:!1}}};const J={title:"Components/Textarea",component:l},n=()=>{const t=V({defaultValues:{textarea:""}});return e.jsx(z,{...t,children:e.jsx("form",{style:{maxWidth:320},children:e.jsx(l,{name:"textarea",label:"Mensagem",rows:4})})})},i=()=>{const t=V({defaultValues:{textareaWithIcon:""}}),u=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",fill:"currentColor"})});return e.jsx(z,{...t,children:e.jsx("form",{style:{maxWidth:320},children:e.jsx(l,{name:"textareaWithIcon",label:"Comentário",rows:3,Icon:u,iconAction:()=>console.log("Ícone clicado")})})})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};var I,F,W;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(W=(F=n.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var H,M,N;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const K=["Default","WithIcon"];export{n as Default,i as WithIcon,K as __namedExportsOrder,J as default};
