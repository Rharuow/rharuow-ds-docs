import{r as c,R as e}from"./iframe-DKIKpqtB.js";import{r as re}from"./index-hAGgyQPK.js";import{c as ee}from"./utils-CuF-iVWQ.js";import{B as r}from"./Button-D0S_Uts4.js";import"./index-meVzrAwI.js";const te=c.createContext(null),oe=({children:o,position:t="top-right",maxToasts:a=5})=>{const[l,i]=c.useState([]),d=c.useCallback(s=>{const p=`toast-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,k={...s,id:p};if(i(C=>[...C,k].slice(-a)),s.duration!==0){const C=s.duration||5e3;setTimeout(()=>{var y;n(p),(y=s.onClose)==null||y.call(s)},C)}return p},[a]),n=c.useCallback(s=>{i(p=>p.filter(k=>k.id!==s))},[]),u=c.useCallback(()=>{i([])},[]);return e.createElement(te.Provider,{value:{toasts:l,addToast:d,removeToast:n,clearAll:u}},o,e.createElement(se,{toasts:l,position:t,onClose:n}))},ae=()=>{const o=c.useContext(te);if(!o)throw new Error("useToaster must be used within ToasterProvider");return o},w=()=>{const{addToast:o}=ae();return{toast:(t,a)=>o({message:t,...a}),success:(t,a)=>o({message:t,variant:"success",duration:a}),error:(t,a)=>o({message:t,variant:"error",duration:a}),warning:(t,a)=>o({message:t,variant:"warning",duration:a}),info:(t,a)=>o({message:t,variant:"info",duration:a})}},se=({toasts:o,position:t,onClose:a})=>{const l=typeof document<"u"?document.body:null;if(!l||o.length===0)return null;const i={"top-left":"top-4 left-4 items-start","top-center":"top-4 left-1/2 -translate-x-1/2 items-center","top-right":"top-4 right-4 items-end","bottom-left":"bottom-4 left-4 items-start","bottom-center":"bottom-4 left-1/2 -translate-x-1/2 items-center","bottom-right":"bottom-4 right-4 items-end"},d=e.createElement("div",{className:ee("fixed z-[100] flex flex-col gap-2 pointer-events-none",i[t]),style:{maxWidth:"calc(100vw - 2rem)"}},o.map(n=>e.createElement(ne,{key:n.id,toast:n,onClose:a})));return re.createPortal(d,l)},ne=({toast:o,onClose:t})=>{const[a,l]=c.useState(!1),i=()=>{l(!0),setTimeout(()=>{var s;t(o.id),(s=o.onClose)==null||s.call(o)},200)},d={success:"bg-green-50 text-green-800 border-green-200",error:"bg-red-50 text-red-800 border-red-200",warning:"bg-yellow-50 text-yellow-800 border-yellow-200",info:"bg-blue-50 text-blue-800 border-blue-200",default:"bg-white text-gray-800 border-gray-200"},n={success:e.createElement("svg",{className:"w-5 h-5 text-green-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})),error:e.createElement("svg",{className:"w-5 h-5 text-red-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})),warning:e.createElement("svg",{className:"w-5 h-5 text-yellow-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})),info:e.createElement("svg",{className:"w-5 h-5 text-blue-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})),default:e.createElement("svg",{className:"w-5 h-5 text-gray-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))},u=o.variant||"default";return e.createElement("div",{role:"alert",className:ee("pointer-events-auto flex items-start gap-3 px-4 py-3 rounded-lg border shadow-lg min-w-[300px] max-w-[500px]","transition-all duration-200 ease-in-out",a?"opacity-0 scale-95 translate-x-4":"opacity-100 scale-100 translate-x-0",d[u])},e.createElement("div",{className:"flex-shrink-0 mt-0.5"},n[u]),e.createElement("p",{className:"flex-1 text-sm font-medium leading-relaxed"},o.message),e.createElement("button",{onClick:i,className:"flex-shrink-0 text-current opacity-60 hover:opacity-100 transition-opacity","aria-label":"Fechar notificação"},e.createElement("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))))};oe.__docgenInfo={description:"",methods:[],displayName:"ToasterProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}},maxToasts:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}}}};const m=({position:o})=>{const t=w();return e.createElement("div",{className:"p-8 space-y-4"},e.createElement("h2",{className:"text-2xl font-bold mb-4"},"Demonstração de Toasts"),e.createElement("p",{className:"text-gray-600 mb-6"},"Clique nos botões abaixo para ver diferentes tipos de notificações"),e.createElement("div",{className:"flex flex-wrap gap-3"},e.createElement(r,{onClick:()=>t.success("Operação realizada com sucesso!")},"Success Toast"),e.createElement(r,{onClick:()=>t.error("Erro ao processar a requisição"),variant:"secondary"},"Error Toast"),e.createElement(r,{onClick:()=>t.warning("Atenção: Verifique os dados informados"),variant:"outline"},"Warning Toast"),e.createElement(r,{onClick:()=>t.info("Você tem 3 novas mensagens")},"Info Toast"),e.createElement(r,{onClick:()=>t.toast("Esta é uma notificação padrão",{variant:"default"}),variant:"outline"},"Default Toast")),e.createElement("div",{className:"mt-8 pt-8 border-t"},e.createElement("h3",{className:"text-lg font-semibold mb-4"},"Toasts com Duração Customizada"),e.createElement("div",{className:"flex flex-wrap gap-3"},e.createElement(r,{onClick:()=>t.success("Toast rápido (2 segundos)",2e3)},"2 Segundos"),e.createElement(r,{onClick:()=>t.info("Toast longo (10 segundos)",1e4)},"10 Segundos"),e.createElement(r,{onClick:()=>t.toast("Toast permanente (não fecha automaticamente)",{duration:0}),variant:"outline"},"Permanente"))),e.createElement("div",{className:"mt-8 pt-8 border-t"},e.createElement("h3",{className:"text-lg font-semibold mb-4"},"Múltiplos Toasts"),e.createElement(r,{onClick:()=>{t.success("Primeiro toast"),setTimeout(()=>t.info("Segundo toast"),300),setTimeout(()=>t.warning("Terceiro toast"),600),setTimeout(()=>t.error("Quarto toast"),900)}},"Disparar Múltiplos Toasts")))},pe={title:"Components/Toaster",decorators:[(o,t)=>e.createElement(oe,{position:t.args.position},e.createElement(o,null))],tags:["autodocs"],argTypes:{position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],description:"Posição dos toasts na tela",defaultValue:"top-right"}}},g={args:{position:"top-right"},render:()=>e.createElement(m,{position:"top-right"})},b={args:{position:"top-left"},render:()=>e.createElement(m,{position:"top-left"})},f={args:{position:"top-center"},render:()=>e.createElement(m,{position:"top-center"})},h={args:{position:"bottom-right"},render:()=>e.createElement(m,{position:"bottom-right"})},x={args:{position:"bottom-left"},render:()=>e.createElement(m,{position:"bottom-left"})},v={args:{position:"bottom-center"},render:()=>e.createElement(m,{position:"bottom-center"})},E={args:{position:"top-right"},render:()=>{const o=w();return e.createElement("div",{className:"p-8"},e.createElement("h2",{className:"text-2xl font-bold mb-6"},"Todas as Variantes de Toast"),e.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},e.createElement("div",{className:"p-4 border rounded-lg"},e.createElement("h3",{className:"font-semibold text-green-700 mb-2"},"Success"),e.createElement("p",{className:"text-sm text-gray-600 mb-3"},"Usado para indicar sucesso em operações"),e.createElement(r,{onClick:()=>o.success("Salvo com sucesso!")},"Testar")),e.createElement("div",{className:"p-4 border rounded-lg"},e.createElement("h3",{className:"font-semibold text-red-700 mb-2"},"Error"),e.createElement("p",{className:"text-sm text-gray-600 mb-3"},"Usado para indicar erros ou falhas"),e.createElement(r,{onClick:()=>o.error("Erro ao salvar dados")},"Testar")),e.createElement("div",{className:"p-4 border rounded-lg"},e.createElement("h3",{className:"font-semibold text-yellow-700 mb-2"},"Warning"),e.createElement("p",{className:"text-sm text-gray-600 mb-3"},"Usado para avisos e alertas"),e.createElement(r,{onClick:()=>o.warning("Dados não salvos")},"Testar")),e.createElement("div",{className:"p-4 border rounded-lg"},e.createElement("h3",{className:"font-semibold text-blue-700 mb-2"},"Info"),e.createElement("p",{className:"text-sm text-gray-600 mb-3"},"Usado para informações gerais"),e.createElement(r,{onClick:()=>o.info("Nova atualização disponível")},"Testar")),e.createElement("div",{className:"p-4 border rounded-lg"},e.createElement("h3",{className:"font-semibold text-gray-700 mb-2"},"Default"),e.createElement("p",{className:"text-sm text-gray-600 mb-3"},"Variante padrão neutra"),e.createElement(r,{onClick:()=>o.toast("Notificação padrão",{variant:"default"})},"Testar"))))}},T={args:{position:"top-right"},render:()=>{const o=()=>{const{addToast:t}=ae();return e.createElement("div",{className:"p-8"},e.createElement("h2",{className:"text-2xl font-bold mb-4"},"Toasts com Callbacks"),e.createElement("p",{className:"text-gray-600 mb-6"},"Toasts podem executar ações ao serem fechados"),e.createElement(r,{onClick:()=>{t({message:"Este toast executa uma ação ao fechar",variant:"info",duration:3e3,onClose:()=>{console.log("Toast fechado!"),alert("Callback executado ao fechar o toast")}})}},"Toast com Callback"))};return e.createElement(o,null)}},N={args:{position:"top-right"},render:()=>{const o=w();return e.createElement("div",{className:"p-8"},e.createElement("h2",{className:"text-2xl font-bold mb-4"},"Teste de Stress"),e.createElement("p",{className:"text-gray-600 mb-6"},"O sistema limita automaticamente para 5 toasts simultâneos"),e.createElement(r,{onClick:()=>{for(let t=1;t<=10;t++)setTimeout(()=>{o.info(`Toast número ${t} de 10`)},t*200)}},"Disparar 10 Toasts Sequenciais"))}};var B,S,D;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    position: "top-right"
  },
  render: () => <ToasterDemo position="top-right" />
}`,...(D=(S=g.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var L,W,M;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    position: "top-left"
  },
  render: () => <ToasterDemo position="top-left" />
}`,...(M=(W=b.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var R,V,z;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    position: "top-center"
  },
  render: () => <ToasterDemo position="top-center" />
}`,...(z=(V=f.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var q,P,U;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    position: "bottom-right"
  },
  render: () => <ToasterDemo position="bottom-right" />
}`,...(U=(P=h.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var j,I,A;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    position: "bottom-left"
  },
  render: () => <ToasterDemo position="bottom-left" />
}`,...(A=(I=x.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var O,_,$;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    position: "bottom-center"
  },
  render: () => <ToasterDemo position="bottom-center" />
}`,...($=(_=v.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var F,Q,G;E.parameters={...E.parameters,docs:{...(F=E.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    position: "top-right"
  },
  render: () => {
    const toast = useToast();
    return <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Todas as Variantes de Toast</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-green-700 mb-2">Success</h3>
            <p className="text-sm text-gray-600 mb-3">
              Usado para indicar sucesso em operações
            </p>
            <Button onClick={() => toast.success("Salvo com sucesso!")}>
              Testar
            </Button>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-red-700 mb-2">Error</h3>
            <p className="text-sm text-gray-600 mb-3">
              Usado para indicar erros ou falhas
            </p>
            <Button onClick={() => toast.error("Erro ao salvar dados")}>
              Testar
            </Button>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-yellow-700 mb-2">Warning</h3>
            <p className="text-sm text-gray-600 mb-3">
              Usado para avisos e alertas
            </p>
            <Button onClick={() => toast.warning("Dados não salvos")}>
              Testar
            </Button>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-blue-700 mb-2">Info</h3>
            <p className="text-sm text-gray-600 mb-3">
              Usado para informações gerais
            </p>
            <Button onClick={() => toast.info("Nova atualização disponível")}>
              Testar
            </Button>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Default</h3>
            <p className="text-sm text-gray-600 mb-3">
              Variante padrão neutra
            </p>
            <Button onClick={() => toast.toast("Notificação padrão", {
            variant: "default"
          })}>
              Testar
            </Button>
          </div>
        </div>
      </div>;
  }
}`,...(G=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:G.source}}};var H,J,K;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    position: "top-right"
  },
  render: () => {
    const ToastWithCallback = () => {
      const {
        addToast
      } = useToaster();
      return <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Toasts com Callbacks</h2>
          <p className="text-gray-600 mb-6">
            Toasts podem executar ações ao serem fechados
          </p>

          <Button onClick={() => {
          addToast({
            message: "Este toast executa uma ação ao fechar",
            variant: "info",
            duration: 3000,
            onClose: () => {
              console.log("Toast fechado!");
              alert("Callback executado ao fechar o toast");
            }
          });
        }}>
            Toast com Callback
          </Button>
        </div>;
    };
    return <ToastWithCallback />;
  }
}`,...(K=(J=T.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,Z;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    position: "top-right"
  },
  render: () => {
    const toast = useToast();
    return <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Teste de Stress</h2>
        <p className="text-gray-600 mb-6">
          O sistema limita automaticamente para 5 toasts simultâneos
        </p>

        <Button onClick={() => {
        for (let i = 1; i <= 10; i++) {
          setTimeout(() => {
            toast.info(\`Toast número \${i} de 10\`);
          }, i * 200);
        }
      }}>
          Disparar 10 Toasts Sequenciais
        </Button>
      </div>;
  }
}`,...(Z=(Y=N.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ue=["TopRight","TopLeft","TopCenter","BottomRight","BottomLeft","BottomCenter","AllVariants","WithCallbacks","StressTest"];export{E as AllVariants,v as BottomCenter,x as BottomLeft,h as BottomRight,N as StressTest,f as TopCenter,b as TopLeft,g as TopRight,T as WithCallbacks,ue as __namedExportsOrder,pe as default};
