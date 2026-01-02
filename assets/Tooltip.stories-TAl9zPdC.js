import{r as i,R as e}from"./iframe-D80oVCNt.js";import{r as de}from"./index-Jfzp79wL.js";import{c as me}from"./utils-CuF-iVWQ.js";import{B as n}from"./Button-SOFxHSCt.js";import{C as f}from"./Card-C-XC7eDz.js";import"./index-WNEpMmuZ.js";const t=({content:d,children:C,position:s="top",className:Y="",disabled:y=!1})=>{const[m,p]=i.useState(!1),[_,Z]=i.useState(s),[ee,te]=i.useState({}),w=i.useRef(null),B=i.useRef(null);i.useEffect(()=>{if(!m||!B.current)return;const o=B.current.getBoundingClientRect();let c=s,r=0,l=0;switch(s){case"top":r=o.top-8,l=o.left+o.width/2;break;case"bottom":r=o.bottom+8,l=o.left+o.width/2;break;case"left":r=o.top+o.height/2,l=o.left-8;break;case"right":r=o.top+o.height/2,l=o.right+8;break}if(w.current){const u=w.current.getBoundingClientRect(),ie=window.innerWidth,ce=window.innerHeight;s==="top"&&o.top<u.height+16?(c="bottom",r=o.bottom+8):s==="bottom"&&o.bottom+u.height+16>ce?(c="top",r=o.top-8):s==="left"&&o.left<u.width+16?(c="right",l=o.right+8):s==="right"&&o.right+u.width+16>ie&&(c="left",l=o.left-8)}Z(c),te({position:"fixed",top:`${r}px`,left:`${l}px`,zIndex:9999})},[m,s]);const oe=()=>{y||p(!0)},ne=()=>{p(!1)},ae=()=>{y||p(!0)},se=()=>{p(!1)},re=()=>{const a="pointer-events-none";switch(_){case"top":return`${a} transform -translate-x-1/2 -translate-y-full`;case"bottom":return`${a} transform -translate-x-1/2`;case"left":return`${a} transform -translate-x-full -translate-y-1/2`;case"right":return`${a} transform -translate-y-1/2`;default:return`${a} transform -translate-x-1/2 -translate-y-full`}},le=()=>{const a="absolute w-2 h-2 bg-[var(--tooltip-bg,#374151)] transform rotate-45";switch(_){case"top":return`${a} top-full left-1/2 -translate-x-1/2 -translate-y-1/2`;case"bottom":return`${a} bottom-full left-1/2 -translate-x-1/2 translate-y-1/2`;case"left":return`${a} left-full top-1/2 -translate-y-1/2 -translate-x-1/2`;case"right":return`${a} right-full top-1/2 -translate-y-1/2 translate-x-1/2`;default:return`${a} top-full left-1/2 -translate-x-1/2 -translate-y-1/2`}};return y||!d?e.createElement(e.Fragment,null,C):e.createElement(e.Fragment,null,e.createElement("div",{className:"relative inline-block",ref:B,onMouseEnter:oe,onMouseLeave:ne,onFocus:ae,onBlur:se},C),m&&typeof document<"u"&&de.createPortal(e.createElement("div",{ref:w,style:ee,className:me(re(),"px-2 py-1 text-sm rounded whitespace-nowrap","bg-[var(--tooltip-bg,#374151)] text-[var(--tooltip-text,#fff)]","shadow-[var(--tooltip-shadow,0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1))]","transition-opacity duration-200 ease-in-out",Y),role:"tooltip","aria-hidden":!m},d,e.createElement("div",{className:le()})),document.body))};t.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ee={title:"Components/Tooltip",component:t,tags:["autodocs"],argTypes:{position:{control:{type:"select"},options:["top","bottom","left","right"]},disabled:{control:{type:"boolean"}}}},g={args:{content:"Este é um tooltip padrão",position:"top"},render:d=>e.createElement("div",{className:"p-8 flex justify-center"},e.createElement(t,{...d},e.createElement(n,null,"Passe o mouse aqui")))},v={render:()=>e.createElement("div",{className:"p-16 grid grid-cols-2 gap-8 place-items-center"},e.createElement(t,{content:"Tooltip no topo",position:"top"},e.createElement(n,null,"Top")),e.createElement(t,{content:"Tooltip na direita",position:"right"},e.createElement(n,null,"Right")),e.createElement(t,{content:"Tooltip embaixo",position:"bottom"},e.createElement(n,null,"Bottom")),e.createElement(t,{content:"Tooltip na esquerda",position:"left"},e.createElement(n,null,"Left")))},x={render:()=>e.createElement("div",{className:"p-8 flex justify-center"},e.createElement(t,{content:"Informação adicional sobre este texto"},e.createElement("span",{className:"underline cursor-help"},"Texto com tooltip")))},E={render:()=>e.createElement("div",{className:"p-8 flex justify-center"},e.createElement(t,{content:"Este é um tooltip com conteúdo mais longo para demonstrar como ele se comporta"},e.createElement(n,null,"Tooltip com conteúdo longo")))},b={render:()=>e.createElement("div",{className:"p-8 flex justify-center"},e.createElement(t,{content:"Este tooltip está desabilitado",disabled:!0},e.createElement(n,null,"Tooltip desabilitado")))},T={render:()=>e.createElement("div",{className:"p-8 flex justify-center"},e.createElement(t,{content:"Tooltip customizado",className:"bg-red-500 text-white"},e.createElement(n,{variant:"outline"},"Tooltip customizado")))},h={render:()=>e.createElement("div",{className:"p-8 flex justify-center"},e.createElement("div",{className:"w-80"},e.createElement("div",{className:"bg-gray-100 p-4 rounded-lg",style:{overflow:"hidden"}},e.createElement("h3",{className:"text-lg font-semibold mb-4"},"Container com overflow: hidden"),e.createElement("div",{className:"space-y-4"},e.createElement(t,{content:"Tooltip que funciona mesmo com overflow hidden",position:"top"},e.createElement(n,{className:"w-full"},"Tooltip no topo")),e.createElement(t,{content:"Tooltip posicionado à direita",position:"right"},e.createElement(n,{className:"w-full"},"Tooltip à direita")),e.createElement(t,{content:"Tooltip posicionado embaixo",position:"bottom"},e.createElement(n,{className:"w-full"},"Tooltip embaixo")),e.createElement(t,{content:"Tooltip posicionado à esquerda",position:"left"},e.createElement(n,{className:"w-full"},"Tooltip à esquerda"))),e.createElement("div",{className:"mt-4 p-3 bg-yellow-100 rounded text-sm"},e.createElement("p",null,"⚠️ Este container tem ",e.createElement("code",null,"overflow: hidden")," aplicado, mas os tooltips ainda funcionam corretamente usando Portal!")))))},N={render:()=>e.createElement("div",{className:"p-8 flex justify-center"},e.createElement("div",{className:"w-96"},e.createElement(f,{variant:"elevated"},e.createElement(f.Header,null,e.createElement("div",{className:"flex justify-between items-center"},e.createElement("h3",{className:"text-lg font-semibold"},"Dashboard Analytics"),e.createElement(t,{content:"Informações sobre este dashboard",position:"left"},e.createElement("button",{className:"text-gray-500 hover:text-gray-700"},"ℹ️")))),e.createElement(f.Body,null,e.createElement("div",{className:"grid grid-cols-2 gap-4 mb-4"},e.createElement("div",{className:"text-center"},e.createElement(t,{content:"Total de vendas do mês atual",position:"top"},e.createElement("div",{className:"bg-blue-50 p-3 rounded-lg cursor-help"},e.createElement("div",{className:"text-2xl font-bold text-blue-600"},"R$ 45.2k"),e.createElement("div",{className:"text-sm text-gray-600"},"Vendas")))),e.createElement("div",{className:"text-center"},e.createElement(t,{content:"Número de novos clientes este mês",position:"top"},e.createElement("div",{className:"bg-green-50 p-3 rounded-lg cursor-help"},e.createElement("div",{className:"text-2xl font-bold text-green-600"},"127"),e.createElement("div",{className:"text-sm text-gray-600"},"Clientes"))))),e.createElement("p",{className:"text-sm text-gray-600 mb-4"},"Este Card tem ",e.createElement("code",null,"overflow: hidden")," aplicado, mas todos os tooltips funcionam perfeitamente."),e.createElement("div",{className:"flex space-x-2"},e.createElement(t,{content:"Ver relatório detalhado",position:"bottom"},e.createElement(n,{variant:"outline",className:"flex-1"},"Relatório")),e.createElement(t,{content:"Exportar dados para Excel",position:"bottom"},e.createElement(n,{className:"flex-1"},"Exportar")))),e.createElement(f.Footer,null,e.createElement("div",{className:"flex justify-between items-center"},e.createElement(t,{content:"Última atualização dos dados",position:"top"},e.createElement("span",{className:"text-xs text-gray-500 cursor-help"},"Atualizado: 30/09/2025")),e.createElement(t,{content:"Configurar alertas automáticos",position:"top"},e.createElement("button",{className:"text-blue-600 text-sm hover:underline"},"Configurar Alertas"))))))),parameters:{docs:{description:{story:"Exemplo realista de tooltips funcionando dentro de um Card com overflow: hidden. Todos os tooltips são renderizados usando Portal, garantindo que apareçam corretamente independente do container pai."}}}};var R,j,q;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    content: "Este é um tooltip padrão",
    position: "top"
  },
  render: args => <div className="p-8 flex justify-center">
      <Tooltip {...args}>
        <Button>Passe o mouse aqui</Button>
      </Tooltip>
    </div>
}`,...(q=(j=g.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var S,$,P;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="p-16 grid grid-cols-2 gap-8 place-items-center">
      <Tooltip content="Tooltip no topo" position="top">
        <Button>Top</Button>
      </Tooltip>
      
      <Tooltip content="Tooltip na direita" position="right">
        <Button>Right</Button>
      </Tooltip>
      
      <Tooltip content="Tooltip embaixo" position="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      
      <Tooltip content="Tooltip na esquerda" position="left">
        <Button>Left</Button>
      </Tooltip>
    </div>
}`,...(P=($=v.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var z,I,V;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="p-8 flex justify-center">
      <Tooltip content="Informação adicional sobre este texto">
        <span className="underline cursor-help">
          Texto com tooltip
        </span>
      </Tooltip>
    </div>
}`,...(V=(I=x.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var A,k,D;E.parameters={...E.parameters,docs:{...(A=E.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="p-8 flex justify-center">
      <Tooltip content="Este é um tooltip com conteúdo mais longo para demonstrar como ele se comporta">
        <Button>Tooltip com conteúdo longo</Button>
      </Tooltip>
    </div>
}`,...(D=(k=E.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var F,L,H;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="p-8 flex justify-center">
      <Tooltip content="Este tooltip está desabilitado" disabled>
        <Button>Tooltip desabilitado</Button>
      </Tooltip>
    </div>
}`,...(H=(L=b.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var M,W,O;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="p-8 flex justify-center">
      <Tooltip content="Tooltip customizado" className="bg-red-500 text-white">
        <Button variant="outline">Tooltip customizado</Button>
      </Tooltip>
    </div>
}`,...(O=(W=T.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var G,J,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="p-8 flex justify-center">
      <div className="w-80">
        <div className="bg-gray-100 p-4 rounded-lg" style={{
        overflow: 'hidden'
      }}>
          <h3 className="text-lg font-semibold mb-4">Container com overflow: hidden</h3>
          <div className="space-y-4">
            <Tooltip content="Tooltip que funciona mesmo com overflow hidden" position="top">
              <Button className="w-full">Tooltip no topo</Button>
            </Tooltip>
            
            <Tooltip content="Tooltip posicionado à direita" position="right">
              <Button className="w-full">Tooltip à direita</Button>
            </Tooltip>
            
            <Tooltip content="Tooltip posicionado embaixo" position="bottom">
              <Button className="w-full">Tooltip embaixo</Button>
            </Tooltip>
            
            <Tooltip content="Tooltip posicionado à esquerda" position="left">
              <Button className="w-full">Tooltip à esquerda</Button>
            </Tooltip>
          </div>
          
          <div className="mt-4 p-3 bg-yellow-100 rounded text-sm">
            <p>⚠️ Este container tem <code>overflow: hidden</code> aplicado, mas os tooltips ainda funcionam corretamente usando Portal!</p>
          </div>
        </div>
      </div>
    </div>
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="p-8 flex justify-center">
      <div className="w-96">
        <Card variant="elevated">
          <Card.Header>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Dashboard Analytics</h3>
              <Tooltip content="Informações sobre este dashboard" position="left">
                <button className="text-gray-500 hover:text-gray-700">ℹ️</button>
              </Tooltip>
            </div>
          </Card.Header>
          
          <Card.Body>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <Tooltip content="Total de vendas do mês atual" position="top">
                  <div className="bg-blue-50 p-3 rounded-lg cursor-help">
                    <div className="text-2xl font-bold text-blue-600">R$ 45.2k</div>
                    <div className="text-sm text-gray-600">Vendas</div>
                  </div>
                </Tooltip>
              </div>
              
              <div className="text-center">
                <Tooltip content="Número de novos clientes este mês" position="top">
                  <div className="bg-green-50 p-3 rounded-lg cursor-help">
                    <div className="text-2xl font-bold text-green-600">127</div>
                    <div className="text-sm text-gray-600">Clientes</div>
                  </div>
                </Tooltip>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Este Card tem <code>overflow: hidden</code> aplicado, mas todos os tooltips funcionam perfeitamente.
            </p>
            
            <div className="flex space-x-2">
              <Tooltip content="Ver relatório detalhado" position="bottom">
                <Button variant="outline" className="flex-1">Relatório</Button>
              </Tooltip>
              
              <Tooltip content="Exportar dados para Excel" position="bottom">
                <Button className="flex-1">Exportar</Button>
              </Tooltip>
            </div>
          </Card.Body>
          
          <Card.Footer>
            <div className="flex justify-between items-center">
              <Tooltip content="Última atualização dos dados" position="top">
                <span className="text-xs text-gray-500 cursor-help">
                  Atualizado: 30/09/2025
                </span>
              </Tooltip>
              
              <Tooltip content="Configurar alertas automáticos" position="top">
                <button className="text-blue-600 text-sm hover:underline">
                  Configurar Alertas
                </button>
              </Tooltip>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Exemplo realista de tooltips funcionando dentro de um Card com overflow: hidden. Todos os tooltips são renderizados usando Portal, garantindo que apareçam corretamente independente do container pai."
      }
    }
  }
}`,...(X=(U=N.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const be=["Default","Positions","WithText","LongContent","Disabled","CustomStyle","InsideCard","InsideCardComponent"];export{T as CustomStyle,g as Default,b as Disabled,h as InsideCard,N as InsideCardComponent,E as LongContent,v as Positions,x as WithText,be as __namedExportsOrder,Ee as default};
