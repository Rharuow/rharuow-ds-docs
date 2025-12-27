import{R as e}from"./iframe-ByqLMeo7.js";import{r as S}from"./index-CaDRek56.js";import{c as n}from"./utils-CuF-iVWQ.js";import{B as l}from"./Button-ChZJrihn.js";import"./index-CCxAuWan.js";const i=({open:t,onClose:a,side:d="right",size:s="md",closeOnOverlayClick:x=!0,children:N,className:E="",...A})=>{const m=typeof document<"u"?document.body:null,C=s==="sm"?"w-64":s==="md"?"w-96":s==="lg"?"w-[36rem]":void 0,c=typeof s=="string"&&!["sm","md","lg"].includes(s)?{width:s}:void 0,y=e.createElement("div",{"aria-hidden":!t,className:n("fixed inset-0 z-50 flex",t?"pointer-events-auto":"pointer-events-none")},e.createElement("div",{className:n("absolute inset-0 bg-black/40 transition-opacity duration-200",t?"opacity-100":"opacity-0"),onMouseDown:u=>{x&&u.target===u.currentTarget&&a()}}),e.createElement("div",{className:n("relative h-full",d==="right"?"ml-auto":"mr-auto","flex-shrink-0"),style:c},e.createElement("aside",{role:"dialog","aria-modal":!0,className:n("h-full bg-white shadow-xl border-l border-gray-100 overflow-auto transition-transform duration-300",d==="right"?t?"translate-x-0":"translate-x-full":t?"translate-x-0":"-translate-x-full",C,E),style:c,...A},N)));return m?S.createPortal(y,m):null};i.displayName="AsideSheet";const q={title:"Components/AsideSheet",component:i,tags:["autodocs"]},r={render:()=>{const[t,a]=e.useState(!1);return e.createElement("div",{className:"p-8"},e.createElement(l,{onClick:()=>a(!0)},"Abrir Aside (direita)"),e.createElement(i,{open:t,onClose:()=>a(!1),side:"right",size:"md"},e.createElement("div",{className:"p-6"},e.createElement("h3",{className:"text-lg font-semibold mb-4"},"Aside (direita)"),e.createElement("p",{className:"text-sm text-gray-600 mb-4"},"Conteúdo do painel lateral."),e.createElement(l,{onClick:()=>a(!1)},"Fechar"))))}},o={render:()=>{const[t,a]=e.useState(!1);return e.createElement("div",{className:"p-8"},e.createElement(l,{onClick:()=>a(!0)},"Abrir Aside (esquerda)"),e.createElement(i,{open:t,onClose:()=>a(!1),side:"left",size:"sm"},e.createElement("div",{className:"p-6"},e.createElement("h3",{className:"text-lg font-semibold mb-4"},"Aside (esquerda)"),e.createElement("p",{className:"text-sm text-gray-600 mb-4"},"Conteúdo do painel lateral vindo da esquerda."),e.createElement(l,{onClick:()=>a(!1)},"Fechar"))))}};var p,f,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div className="p-8">
        <Button onClick={() => setOpen(true)}>Abrir Aside (direita)</Button>
        <AsideSheet open={open} onClose={() => setOpen(false)} side="right" size="md">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Aside (direita)</h3>
            <p className="text-sm text-gray-600 mb-4">Conteúdo do painel lateral.</p>
            <Button onClick={() => setOpen(false)}>Fechar</Button>
          </div>
        </AsideSheet>
      </div>;
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,b,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div className="p-8">
        <Button onClick={() => setOpen(true)}>Abrir Aside (esquerda)</Button>
        <AsideSheet open={open} onClose={() => setOpen(false)} side="left" size="sm">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Aside (esquerda)</h3>
            <p className="text-sm text-gray-600 mb-4">Conteúdo do painel lateral vindo da esquerda.</p>
            <Button onClick={() => setOpen(false)}>Fechar</Button>
          </div>
        </AsideSheet>
      </div>;
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const F=["Right","Left"];export{o as Left,r as Right,F as __namedExportsOrder,q as default};
