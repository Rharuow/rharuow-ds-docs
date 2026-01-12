import{R as e}from"./iframe-DKIKpqtB.js";import{T as t}from"./Tooltip-jXp2GfhD.js";import{B as o}from"./Button-D0S_Uts4.js";import{C as n}from"./Card-DpXfOk_M.js";import"./index-hAGgyQPK.js";import"./index-meVzrAwI.js";import"./utils-CuF-iVWQ.js";const O={title:"Components/Tooltip",component:t,tags:["autodocs"],argTypes:{position:{control:{type:"select"},options:["top","bottom","left","right"]},disabled:{control:{type:"boolean"}}}},a={args:{content:"Este é um tooltip padrão",position:"top"},render:L=>e.createElement("div",{className:"p-8 flex justify-center"},e.createElement(t,{...L},e.createElement(o,null,"Passe o mouse aqui")))},s={render:()=>e.createElement("div",{className:"p-16 grid grid-cols-2 gap-8 place-items-center"},e.createElement(t,{content:"Tooltip no topo",position:"top"},e.createElement(o,null,"Top")),e.createElement(t,{content:"Tooltip na direita",position:"right"},e.createElement(o,null,"Right")),e.createElement(t,{content:"Tooltip embaixo",position:"bottom"},e.createElement(o,null,"Bottom")),e.createElement(t,{content:"Tooltip na esquerda",position:"left"},e.createElement(o,null,"Left")))},r={render:()=>e.createElement("div",{className:"p-8 flex justify-center"},e.createElement(t,{content:"Informação adicional sobre este texto"},e.createElement("span",{className:"underline cursor-help"},"Texto com tooltip")))},l={render:()=>e.createElement("div",{className:"p-8 flex justify-center"},e.createElement(t,{content:"Este é um tooltip com conteúdo mais longo para demonstrar como ele se comporta"},e.createElement(o,null,"Tooltip com conteúdo longo")))},i={render:()=>e.createElement("div",{className:"p-8 flex justify-center"},e.createElement(t,{content:"Este tooltip está desabilitado",disabled:!0},e.createElement(o,null,"Tooltip desabilitado")))},c={render:()=>e.createElement("div",{className:"p-8 flex justify-center"},e.createElement(t,{content:"Tooltip customizado",className:"bg-red-500 text-white"},e.createElement(o,{variant:"outline"},"Tooltip customizado")))},d={render:()=>e.createElement("div",{className:"p-8 flex justify-center"},e.createElement("div",{className:"w-80"},e.createElement("div",{className:"bg-gray-100 p-4 rounded-lg",style:{overflow:"hidden"}},e.createElement("h3",{className:"text-lg font-semibold mb-4"},"Container com overflow: hidden"),e.createElement("div",{className:"space-y-4"},e.createElement(t,{content:"Tooltip que funciona mesmo com overflow hidden",position:"top"},e.createElement(o,{className:"w-full"},"Tooltip no topo")),e.createElement(t,{content:"Tooltip posicionado à direita",position:"right"},e.createElement(o,{className:"w-full"},"Tooltip à direita")),e.createElement(t,{content:"Tooltip posicionado embaixo",position:"bottom"},e.createElement(o,{className:"w-full"},"Tooltip embaixo")),e.createElement(t,{content:"Tooltip posicionado à esquerda",position:"left"},e.createElement(o,{className:"w-full"},"Tooltip à esquerda"))),e.createElement("div",{className:"mt-4 p-3 bg-yellow-100 rounded text-sm"},e.createElement("p",null,"⚠️ Este container tem ",e.createElement("code",null,"overflow: hidden")," aplicado, mas os tooltips ainda funcionam corretamente usando Portal!")))))},m={render:()=>e.createElement("div",{className:"p-8 flex justify-center"},e.createElement("div",{className:"w-96"},e.createElement(n,{variant:"elevated"},e.createElement(n.Header,null,e.createElement("div",{className:"flex justify-between items-center"},e.createElement("h3",{className:"text-lg font-semibold"},"Dashboard Analytics"),e.createElement(t,{content:"Informações sobre este dashboard",position:"left"},e.createElement("button",{className:"text-gray-500 hover:text-gray-700"},"ℹ️")))),e.createElement(n.Body,null,e.createElement("div",{className:"grid grid-cols-2 gap-4 mb-4"},e.createElement("div",{className:"text-center"},e.createElement(t,{content:"Total de vendas do mês atual",position:"top"},e.createElement("div",{className:"bg-blue-50 p-3 rounded-lg cursor-help"},e.createElement("div",{className:"text-2xl font-bold text-blue-600"},"R$ 45.2k"),e.createElement("div",{className:"text-sm text-gray-600"},"Vendas")))),e.createElement("div",{className:"text-center"},e.createElement(t,{content:"Número de novos clientes este mês",position:"top"},e.createElement("div",{className:"bg-green-50 p-3 rounded-lg cursor-help"},e.createElement("div",{className:"text-2xl font-bold text-green-600"},"127"),e.createElement("div",{className:"text-sm text-gray-600"},"Clientes"))))),e.createElement("p",{className:"text-sm text-gray-600 mb-4"},"Este Card tem ",e.createElement("code",null,"overflow: hidden")," aplicado, mas todos os tooltips funcionam perfeitamente."),e.createElement("div",{className:"flex space-x-2"},e.createElement(t,{content:"Ver relatório detalhado",position:"bottom"},e.createElement(o,{variant:"outline",className:"flex-1"},"Relatório")),e.createElement(t,{content:"Exportar dados para Excel",position:"bottom"},e.createElement(o,{className:"flex-1"},"Exportar")))),e.createElement(n.Footer,null,e.createElement("div",{className:"flex justify-between items-center"},e.createElement(t,{content:"Última atualização dos dados",position:"top"},e.createElement("span",{className:"text-xs text-gray-500 cursor-help"},"Atualizado: 30/09/2025")),e.createElement(t,{content:"Configurar alertas automáticos",position:"top"},e.createElement("button",{className:"text-blue-600 text-sm hover:underline"},"Configurar Alertas"))))))),parameters:{docs:{description:{story:"Exemplo realista de tooltips funcionando dentro de um Card com overflow: hidden. Todos os tooltips são renderizados usando Portal, garantindo que apareçam corretamente independente do container pai."}}}};var p,u,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: "Este é um tooltip padrão",
    position: "top"
  },
  render: args => <div className="p-8 flex justify-center">
      <Tooltip {...args}>
        <Button>Passe o mouse aqui</Button>
      </Tooltip>
    </div>
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var v,x,E;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var T,g,N;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="p-8 flex justify-center">
      <Tooltip content="Informação adicional sobre este texto">
        <span className="underline cursor-help">
          Texto com tooltip
        </span>
      </Tooltip>
    </div>
}`,...(N=(g=r.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var b,y,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="p-8 flex justify-center">
      <Tooltip content="Este é um tooltip com conteúdo mais longo para demonstrar como ele se comporta">
        <Button>Tooltip com conteúdo longo</Button>
      </Tooltip>
    </div>
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var B,C,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="p-8 flex justify-center">
      <Tooltip content="Este tooltip está desabilitado" disabled>
        <Button>Tooltip desabilitado</Button>
      </Tooltip>
    </div>
}`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var j,q,z;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="p-8 flex justify-center">
      <Tooltip content="Tooltip customizado" className="bg-red-500 text-white">
        <Button variant="outline">Tooltip customizado</Button>
      </Tooltip>
    </div>
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var S,I,P;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var R,A,D;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const G=["Default","Positions","WithText","LongContent","Disabled","CustomStyle","InsideCard","InsideCardComponent"];export{c as CustomStyle,a as Default,i as Disabled,d as InsideCard,m as InsideCardComponent,l as LongContent,s as Positions,r as WithText,G as __namedExportsOrder,O as default};
