import{r as i,R as e}from"./iframe-DKIKpqtB.js";import{c as g}from"./utils-CuF-iVWQ.js";import{B as Ce}from"./Button-D0S_Uts4.js";import{I as v}from"./Input-Bb6KkQGB.js";import"./index.esm-BjoyFiYm.js";const Se=e.createContext(null),De=()=>{const r=e.useContext(Se);if(!r)throw new Error("AccordionItem must be used within an Accordion");return r};let we=0;const k=({title:r,children:n,defaultOpen:m=!1,disabled:o=!1,className:l,headerClassName:d,contentClassName:p,icon:E})=>{const{openItems:s,toggleItem:c,variant:t}=De(),[f]=i.useState(()=>we++),u=s.has(f),q=i.useRef(null),[ze,O]=i.useState(m?void 0:0);i.useEffect(()=>{if(u){const M=q.current;M&&O(M.scrollHeight)}else O(0)},[u]);const Pe=()=>{o||c(f)},V={default:{item:"border-b border-[var(--accordion-border,#e5e7eb)] last:border-b-0",header:"",content:""},bordered:{item:"border border-[var(--accordion-border,#e5e7eb)] rounded-md mb-2",header:"border-b border-[var(--accordion-border,#e5e7eb)]",content:""},separated:{item:"border border-[var(--accordion-border,#e5e7eb)] rounded-md mb-3 shadow-sm",header:"",content:""}}[t];return e.createElement("div",{className:g(V.item,l)},e.createElement("button",{type:"button",onClick:Pe,disabled:o,"aria-expanded":u,className:g("w-full flex items-center justify-between px-4 py-3 text-left transition-colors","bg-[var(--accordion-header-bg,transparent)]","hover:bg-[var(--accordion-header-hover,rgba(0,0,0,0.05))]","text-[var(--accordion-text,#111827)]","font-medium",o&&"opacity-50 cursor-not-allowed",u&&t!=="default"&&V.header,d)},e.createElement("span",{className:"flex items-center gap-2"},E&&e.createElement("span",{className:"flex-shrink-0"},E),r),e.createElement("svg",{className:g("w-5 h-5 transition-transform duration-200 flex-shrink-0","text-[var(--accordion-icon,#6b7280)]",u&&"rotate-180"),fill:"none",strokeWidth:"2",stroke:"currentColor",viewBox:"0 0 24 24"},e.createElement("path",{d:"M19 9l-7 7-7-7"}))),e.createElement("div",{style:{height:ze,overflow:"hidden",transition:"height 0.3s ease-in-out"}},e.createElement("div",{ref:q,className:g("px-4 py-3","text-[var(--accordion-content-text,#374151)]","bg-[var(--accordion-content-bg,transparent)]",p)},n)))};k.displayName="AccordionItem";const a=({children:r,type:n="single",className:m,variant:o="default",collapsible:l=!0})=>{const[d,p]=i.useState(new Set);i.useEffect(()=>{we=0;const s=e.Children.toArray(r),c=new Set;if(s.forEach((t,f)=>{e.isValidElement(t)&&t.props.defaultOpen&&c.add(f)}),n==="single"&&c.size>1){const t=Array.from(c)[0];p(new Set([t]))}else p(c)},[]);const E=s=>{p(c=>{const t=new Set(c);return n==="single"?t.has(s)?l&&t.clear():(t.clear(),t.add(s)):t.has(s)?t.delete(s):t.add(s),t})};return e.createElement(Se.Provider,{value:{type:n,openItems:d,toggleItem:E,collapsible:l,variant:o}},e.createElement("div",{className:g("w-full",m)},r))};a.Item=k;k.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},headerClassName:{required:!1,tsType:{name:"string"},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};a.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{
  title,
  children,
  defaultOpen = false,
  disabled = false,
  className,
  headerClassName,
  contentClassName,
  icon,
}`,optional:!1,type:null}],returns:null}],displayName:"Accordion",props:{type:{defaultValue:{value:'"single"',computed:!1},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},collapsible:{defaultValue:{value:"true",computed:!1},required:!1}}};const Be={title:"Components/Accordion",component:a,parameters:{layout:"padded",docs:{description:{component:"Componente Accordion (acordeão) flexível e acessível que permite expandir e colapsar seções de conteúdo. Suporta modo single (apenas um item aberto) ou multiple (vários itens abertos). Totalmente personalizável via CSS Variables e com animações suaves."}}},tags:["autodocs"],argTypes:{type:{description:"Modo de operação do accordion",control:"select",options:["single","multiple"],table:{defaultValue:{summary:"single"}}},variant:{description:"Estilo visual do accordion",control:"select",options:["default","bordered","separated"],table:{defaultValue:{summary:"default"}}},collapsible:{description:"Se true, permite fechar todos os itens no modo single (senão, sempre mantém um aberto)",control:"boolean",table:{defaultValue:{summary:"true"}}},className:{description:"Classes CSS adicionais",control:"text"}}},b={render:()=>e.createElement(a,null,e.createElement(a.Item,{title:"O que é React?"},e.createElement("p",null,"React é uma biblioteca JavaScript para construir interfaces de usuário. Foi desenvolvida pelo Facebook e é mantida por uma comunidade de desenvolvedores individuais e empresas.")),e.createElement(a.Item,{title:"O que é TypeScript?"},e.createElement("p",null,"TypeScript é um superset de JavaScript que adiciona tipagem estática opcional. Ele é desenvolvido e mantido pela Microsoft.")),e.createElement(a.Item,{title:"O que é um Design System?"},e.createElement("p",null,"Um Design System é uma coleção de componentes reutilizáveis, guiados por padrões claros, que podem ser montados juntos para construir qualquer número de aplicações.")))},h={render:()=>e.createElement(a,null,e.createElement(a.Item,{title:"Seção 1",defaultOpen:!0},e.createElement("p",null,"Esta seção está aberta por padrão.")),e.createElement(a.Item,{title:"Seção 2"},e.createElement("p",null,"Esta seção está fechada por padrão.")),e.createElement(a.Item,{title:"Seção 3"},e.createElement("p",null,"Esta seção também está fechada por padrão.")))},I={render:()=>e.createElement(a,{type:"multiple"},e.createElement(a.Item,{title:"Frontend Technologies",defaultOpen:!0},e.createElement("div",{className:"space-y-2"},e.createElement("p",null,e.createElement("strong",null,"React:")," Biblioteca para interfaces de usuário"),e.createElement("p",null,e.createElement("strong",null,"Vue:")," Framework progressivo para JavaScript"),e.createElement("p",null,e.createElement("strong",null,"Angular:")," Plataforma para aplicações web"))),e.createElement(a.Item,{title:"Backend Technologies",defaultOpen:!0},e.createElement("div",{className:"space-y-2"},e.createElement("p",null,e.createElement("strong",null,"Node.js:")," Ambiente de execução JavaScript"),e.createElement("p",null,e.createElement("strong",null,"Python:")," Linguagem versátil e poderosa"),e.createElement("p",null,e.createElement("strong",null,"Go:")," Linguagem eficiente e concorrente"))),e.createElement(a.Item,{title:"Database Technologies"},e.createElement("div",{className:"space-y-2"},e.createElement("p",null,e.createElement("strong",null,"PostgreSQL:")," Banco de dados relacional avançado"),e.createElement("p",null,e.createElement("strong",null,"MongoDB:")," Banco de dados NoSQL orientado a documentos"),e.createElement("p",null,e.createElement("strong",null,"Redis:")," Armazenamento de estrutura de dados em memória"))))},A={render:()=>e.createElement(a,{variant:"bordered"},e.createElement(a.Item,{title:"Recursos do Produto"},e.createElement("ul",{className:"list-disc list-inside space-y-1"},e.createElement("li",null,"Interface intuitiva e fácil de usar"),e.createElement("li",null,"Integração com múltiplas plataformas"),e.createElement("li",null,"Suporte 24/7"),e.createElement("li",null,"Atualizações automáticas"))),e.createElement(a.Item,{title:"Preços"},e.createElement("div",{className:"space-y-2"},e.createElement("p",null,e.createElement("strong",null,"Básico:")," R$ 29/mês"),e.createElement("p",null,e.createElement("strong",null,"Pro:")," R$ 79/mês"),e.createElement("p",null,e.createElement("strong",null,"Enterprise:")," Preço personalizado"))),e.createElement(a.Item,{title:"FAQ"},e.createElement("p",null,"Confira nossa seção de perguntas frequentes para obter respostas às dúvidas mais comuns.")))},y={render:()=>e.createElement(a,{variant:"separated",type:"multiple"},e.createElement(a.Item,{title:"📊 Analytics"},e.createElement("p",null,"Visualize métricas e insights em tempo real sobre o desempenho da sua aplicação.")),e.createElement(a.Item,{title:"🔒 Segurança"},e.createElement("p",null,"Recursos avançados de segurança incluindo criptografia end-to-end e autenticação de dois fatores.")),e.createElement(a.Item,{title:"⚡ Performance"},e.createElement("p",null,"Otimizado para velocidade com carregamento instantâneo e resposta rápida.")),e.createElement(a.Item,{title:"🌐 Integrações"},e.createElement("p",null,"Conecte-se facilmente com centenas de ferramentas e serviços populares.")))},N={render:()=>e.createElement(a,{variant:"bordered"},e.createElement(a.Item,{title:"Instalação"},e.createElement("div",{className:"space-y-3"},e.createElement("p",null,"Para instalar o componente, execute o seguinte comando:"),e.createElement("pre",{className:"bg-gray-100 p-3 rounded text-sm overflow-x-auto"},"npm install @rharuow/design-system"),e.createElement("p",null,"Ou com yarn:"),e.createElement("pre",{className:"bg-gray-100 p-3 rounded text-sm overflow-x-auto"},"yarn add @rharuow/design-system"))),e.createElement(a.Item,{title:"Uso Básico"},e.createElement("div",{className:"space-y-3"},e.createElement("p",null,"Importe e use o componente:"),e.createElement("pre",{className:"bg-gray-100 p-3 rounded text-sm overflow-x-auto"},`import { Accordion } from '@rharuow/design-system';

<Accordion>
  <Accordion.Item title="Item 1">
    Conteúdo 1
  </Accordion.Item>
</Accordion>`))),e.createElement(a.Item,{title:"Exemplos Avançados"},e.createElement("div",{className:"space-y-3"},e.createElement("p",null,"Veja alguns exemplos de uso avançado:"),e.createElement(Ce,{variant:"default"},"Ver Documentação"))))},x={render:()=>e.createElement(a,{variant:"bordered"},e.createElement(a.Item,{title:"Item Ativo 1"},e.createElement("p",null,"Este item pode ser expandido normalmente.")),e.createElement(a.Item,{title:"Item Desabilitado",disabled:!0},e.createElement("p",null,"Este conteúdo não pode ser visualizado pois o item está desabilitado.")),e.createElement(a.Item,{title:"Item Ativo 2"},e.createElement("p",null,"Este item também pode ser expandido normalmente.")))},C={render:()=>e.createElement(a,{collapsible:!1},e.createElement(a.Item,{title:"Passo 1: Configuração Inicial",defaultOpen:!0},e.createElement("p",null,"Configure seu ambiente de desenvolvimento instalando as dependências necessárias.")),e.createElement(a.Item,{title:"Passo 2: Desenvolvimento"},e.createElement("p",null,"Desenvolva sua aplicação seguindo as melhores práticas e padrões estabelecidos.")),e.createElement(a.Item,{title:"Passo 3: Deploy"},e.createElement("p",null,"Faça o deploy da sua aplicação em produção com confiança.")))},S={render:()=>e.createElement(a,{variant:"separated",type:"multiple"},e.createElement(a.Item,{title:"Documentação",icon:e.createElement("svg",{className:"w-5 h-5",fill:"none",strokeWidth:"2",stroke:"currentColor",viewBox:"0 0 24 24"},e.createElement("path",{d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}))},e.createElement("p",null,"Acesse a documentação completa para aprender como usar todos os recursos.")),e.createElement(a.Item,{title:"Suporte",icon:e.createElement("svg",{className:"w-5 h-5",fill:"none",strokeWidth:"2",stroke:"currentColor",viewBox:"0 0 24 24"},e.createElement("path",{d:"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"}))},e.createElement("p",null,"Entre em contato com nossa equipe de suporte para obter ajuda.")),e.createElement(a.Item,{title:"Configurações",icon:e.createElement("svg",{className:"w-5 h-5",fill:"none",strokeWidth:"2",stroke:"currentColor",viewBox:"0 0 24 24"},e.createElement("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.createElement("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}))},e.createElement("p",null,"Personalize as configurações do sistema de acordo com suas preferências.")))},w={render:()=>e.createElement(a,{variant:"bordered",className:"max-w-2xl mx-auto"},e.createElement(a.Item,{title:"Título Customizado",headerClassName:"bg-blue-50 hover:bg-blue-100",contentClassName:"bg-blue-50/50"},e.createElement("p",null,"Este item tem classes customizadas no header e no conteúdo.")),e.createElement(a.Item,{title:"Outro Item Customizado",headerClassName:"bg-green-50 hover:bg-green-100",contentClassName:"bg-green-50/50"},e.createElement("p",null,"Você pode aplicar diferentes estilos para cada item.")))},z={args:{type:"single",variant:"default",collapsible:!0},render:r=>e.createElement(a,{...r},e.createElement(a.Item,{title:"Item 1",defaultOpen:!0},e.createElement("p",null,"Conteúdo do primeiro item do accordion.")),e.createElement(a.Item,{title:"Item 2"},e.createElement("p",null,"Conteúdo do segundo item do accordion.")),e.createElement(a.Item,{title:"Item 3"},e.createElement("p",null,"Conteúdo do terceiro item do accordion.")))},P={render:()=>e.createElement("div",{className:"max-w-3xl mx-auto"},e.createElement("h2",{className:"text-2xl font-bold mb-4"},"Perguntas Frequentes"),e.createElement(a,{variant:"separated"},e.createElement(a.Item,{title:"Como faço para criar uma conta?"},e.createElement("p",null,'Para criar uma conta, clique no botão "Cadastrar" no canto superior direito da página. Preencha o formulário com suas informações e siga as instruções enviadas por email para verificar sua conta.')),e.createElement(a.Item,{title:"Quais são as formas de pagamento aceitas?"},e.createElement("p",null,"Aceitamos cartões de crédito (Visa, Mastercard, American Express), débito, PayPal e transferência bancária. Para planos Enterprise, também oferecemos faturamento personalizado.")),e.createElement(a.Item,{title:"Posso cancelar minha assinatura a qualquer momento?"},e.createElement("p",null,"Sim! Você pode cancelar sua assinatura a qualquer momento através do painel de controle. Após o cancelamento, você continuará tendo acesso até o final do período já pago.")),e.createElement(a.Item,{title:"Há suporte técnico disponível?"},e.createElement("p",null,"Sim, oferecemos suporte técnico por email e chat ao vivo. Planos Pro e Enterprise também incluem suporte por telefone e um gerente de conta dedicado.")),e.createElement(a.Item,{title:"Os dados são seguros?"},e.createElement("p",null,"A segurança dos seus dados é nossa prioridade. Utilizamos criptografia SSL/TLS, armazenamento seguro em servidores certificados e seguimos as melhores práticas de segurança da indústria, incluindo conformidade com LGPD e GDPR."))))},D={render:()=>e.createElement("div",{className:"max-w-xs"},e.createElement(a,{variant:"default",type:"multiple"},e.createElement(a.Item,{title:"Componentes",icon:e.createElement("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20"},e.createElement("path",{d:"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"})),defaultOpen:!0},e.createElement("div",{className:"space-y-1 text-sm"},e.createElement("div",{className:"py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer"},"Button"),e.createElement("div",{className:"py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer"},"Input"),e.createElement("div",{className:"py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer"},"Select"),e.createElement("div",{className:"py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer"},"Card"),e.createElement("div",{className:"py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer"},"Accordion"))),e.createElement(a.Item,{title:"Utilidades",icon:e.createElement("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20"},e.createElement("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}))},e.createElement("div",{className:"space-y-1 text-sm"},e.createElement("div",{className:"py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer"},"Utils"),e.createElement("div",{className:"py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer"},"Hooks"),e.createElement("div",{className:"py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer"},"Helpers"))),e.createElement(a.Item,{title:"Guias",icon:e.createElement("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20"},e.createElement("path",{d:"M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"}))},e.createElement("div",{className:"space-y-1 text-sm"},e.createElement("div",{className:"py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer"},"Introdução"),e.createElement("div",{className:"py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer"},"Instalação"),e.createElement("div",{className:"py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer"},"Customização")))))},R={render:()=>{const r=()=>{const[n,m]=e.useState({name:"",email:"",phone:"",address:"",city:"",comments:""}),o=l=>d=>{m({...n,[l]:d.target.value})};return e.createElement("div",{className:"max-w-2xl"},e.createElement("h3",{className:"text-lg font-bold mb-4"},"Formulário de Cadastro"),e.createElement(a,{variant:"bordered",type:"multiple"},e.createElement(a.Item,{title:"Dados Pessoais",defaultOpen:!0},e.createElement("div",{className:"space-y-4"},e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium mb-1"},"Nome Completo"),e.createElement(v,{name:"name",value:n.name,onChange:o("name"),placeholder:"Digite seu nome"})),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium mb-1"},"Email"),e.createElement(v,{name:"email",type:"email",value:n.email,onChange:o("email"),placeholder:"seu@email.com"})),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium mb-1"},"Telefone"),e.createElement(v,{name:"phone",value:n.phone,onChange:o("phone"),placeholder:"(00) 00000-0000"})))),e.createElement(a.Item,{title:"Endereço"},e.createElement("div",{className:"space-y-4"},e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium mb-1"},"Endereço"),e.createElement(v,{name:"address",value:n.address,onChange:o("address"),placeholder:"Rua, número"})),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium mb-1"},"Cidade"),e.createElement(v,{name:"city",value:n.city,onChange:o("city"),placeholder:"Sua cidade"})))),e.createElement(a.Item,{title:"Observações"},e.createElement("div",{className:"space-y-4"},e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium mb-1"},"Comentários"),e.createElement("textarea",{value:n.comments,onChange:o("comments"),placeholder:"Alguma observação adicional?",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",rows:4}))))),e.createElement("div",{className:"mt-6"},e.createElement(Ce,{onClick:()=>console.log(n)},"Salvar Dados")),e.createElement("div",{className:"mt-4 p-4 bg-gray-50 rounded text-sm"},e.createElement("strong",null,"Debug - Estado do formulário:"),e.createElement("pre",{className:"mt-2 whitespace-pre-wrap break-words"},JSON.stringify(n,null,2))))};return e.createElement(r,null)}};var B,T,F;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Accordion>
      <Accordion.Item title="O que é React?">
        <p>
          React é uma biblioteca JavaScript para construir interfaces de usuário. Foi desenvolvida pelo Facebook e é mantida por uma comunidade de desenvolvedores individuais e empresas.
        </p>
      </Accordion.Item>
      <Accordion.Item title="O que é TypeScript?">
        <p>
          TypeScript é um superset de JavaScript que adiciona tipagem estática opcional. Ele é desenvolvido e mantido pela Microsoft.
        </p>
      </Accordion.Item>
      <Accordion.Item title="O que é um Design System?">
        <p>
          Um Design System é uma coleção de componentes reutilizáveis, guiados por padrões claros, que podem ser montados juntos para construir qualquer número de aplicações.
        </p>
      </Accordion.Item>
    </Accordion>
}`,...(F=(T=b.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var L,W,H;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Accordion>
      <Accordion.Item title="Seção 1" defaultOpen>
        <p>Esta seção está aberta por padrão.</p>
      </Accordion.Item>
      <Accordion.Item title="Seção 2">
        <p>Esta seção está fechada por padrão.</p>
      </Accordion.Item>
      <Accordion.Item title="Seção 3">
        <p>Esta seção também está fechada por padrão.</p>
      </Accordion.Item>
    </Accordion>
}`,...(H=(W=h.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var j,J,Q;I.parameters={...I.parameters,docs:{...(j=I.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple">
      <Accordion.Item title="Frontend Technologies" defaultOpen>
        <div className="space-y-2">
          <p>
            <strong>React:</strong> Biblioteca para interfaces de usuário
          </p>
          <p>
            <strong>Vue:</strong> Framework progressivo para JavaScript
          </p>
          <p>
            <strong>Angular:</strong> Plataforma para aplicações web
          </p>
        </div>
      </Accordion.Item>
      <Accordion.Item title="Backend Technologies" defaultOpen>
        <div className="space-y-2">
          <p>
            <strong>Node.js:</strong> Ambiente de execução JavaScript
          </p>
          <p>
            <strong>Python:</strong> Linguagem versátil e poderosa
          </p>
          <p>
            <strong>Go:</strong> Linguagem eficiente e concorrente
          </p>
        </div>
      </Accordion.Item>
      <Accordion.Item title="Database Technologies">
        <div className="space-y-2">
          <p>
            <strong>PostgreSQL:</strong> Banco de dados relacional avançado
          </p>
          <p>
            <strong>MongoDB:</strong> Banco de dados NoSQL orientado a documentos
          </p>
          <p>
            <strong>Redis:</strong> Armazenamento de estrutura de dados em memória
          </p>
        </div>
      </Accordion.Item>
    </Accordion>
}`,...(Q=(J=I.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,G,_;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Accordion variant="bordered">
      <Accordion.Item title="Recursos do Produto">
        <ul className="list-disc list-inside space-y-1">
          <li>Interface intuitiva e fácil de usar</li>
          <li>Integração com múltiplas plataformas</li>
          <li>Suporte 24/7</li>
          <li>Atualizações automáticas</li>
        </ul>
      </Accordion.Item>
      <Accordion.Item title="Preços">
        <div className="space-y-2">
          <p>
            <strong>Básico:</strong> R$ 29/mês
          </p>
          <p>
            <strong>Pro:</strong> R$ 79/mês
          </p>
          <p>
            <strong>Enterprise:</strong> Preço personalizado
          </p>
        </div>
      </Accordion.Item>
      <Accordion.Item title="FAQ">
        <p>
          Confira nossa seção de perguntas frequentes para obter respostas às dúvidas mais comuns.
        </p>
      </Accordion.Item>
    </Accordion>
}`,...(_=(G=A.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var $,K,X;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Accordion variant="separated" type="multiple">
      <Accordion.Item title="📊 Analytics">
        <p>Visualize métricas e insights em tempo real sobre o desempenho da sua aplicação.</p>
      </Accordion.Item>
      <Accordion.Item title="🔒 Segurança">
        <p>Recursos avançados de segurança incluindo criptografia end-to-end e autenticação de dois fatores.</p>
      </Accordion.Item>
      <Accordion.Item title="⚡ Performance">
        <p>Otimizado para velocidade com carregamento instantâneo e resposta rápida.</p>
      </Accordion.Item>
      <Accordion.Item title="🌐 Integrações">
        <p>Conecte-se facilmente com centenas de ferramentas e serviços populares.</p>
      </Accordion.Item>
    </Accordion>
}`,...(X=(K=y.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,ee;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Accordion variant="bordered">
      <Accordion.Item title="Instalação">
        <div className="space-y-3">
          <p>Para instalar o componente, execute o seguinte comando:</p>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            npm install @rharuow/design-system
          </pre>
          <p>Ou com yarn:</p>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            yarn add @rharuow/design-system
          </pre>
        </div>
      </Accordion.Item>
      <Accordion.Item title="Uso Básico">
        <div className="space-y-3">
          <p>Importe e use o componente:</p>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            {\`import { Accordion } from '@rharuow/design-system';

<Accordion>
  <Accordion.Item title="Item 1">
    Conteúdo 1
  </Accordion.Item>
</Accordion>\`}
          </pre>
        </div>
      </Accordion.Item>
      <Accordion.Item title="Exemplos Avançados">
        <div className="space-y-3">
          <p>Veja alguns exemplos de uso avançado:</p>
          <Button variant="default">Ver Documentação</Button>
        </div>
      </Accordion.Item>
    </Accordion>
}`,...(ee=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <Accordion variant="bordered">
      <Accordion.Item title="Item Ativo 1">
        <p>Este item pode ser expandido normalmente.</p>
      </Accordion.Item>
      <Accordion.Item title="Item Desabilitado" disabled>
        <p>Este conteúdo não pode ser visualizado pois o item está desabilitado.</p>
      </Accordion.Item>
      <Accordion.Item title="Item Ativo 2">
        <p>Este item também pode ser expandido normalmente.</p>
      </Accordion.Item>
    </Accordion>
}`,...(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,re,se;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <Accordion collapsible={false}>
      <Accordion.Item title="Passo 1: Configuração Inicial" defaultOpen>
        <p>Configure seu ambiente de desenvolvimento instalando as dependências necessárias.</p>
      </Accordion.Item>
      <Accordion.Item title="Passo 2: Desenvolvimento">
        <p>Desenvolva sua aplicação seguindo as melhores práticas e padrões estabelecidos.</p>
      </Accordion.Item>
      <Accordion.Item title="Passo 3: Deploy">
        <p>Faça o deploy da sua aplicação em produção com confiança.</p>
      </Accordion.Item>
    </Accordion>
}`,...(se=(re=C.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ce,le,ie;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <Accordion variant="separated" type="multiple">
      <Accordion.Item title="Documentação" icon={<svg className="w-5 h-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>}>
        <p>Acesse a documentação completa para aprender como usar todos os recursos.</p>
      </Accordion.Item>
      <Accordion.Item title="Suporte" icon={<svg className="w-5 h-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>}>
        <p>Entre em contato com nossa equipe de suporte para obter ajuda.</p>
      </Accordion.Item>
      <Accordion.Item title="Configurações" icon={<svg className="w-5 h-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>}>
        <p>Personalize as configurações do sistema de acordo com suas preferências.</p>
      </Accordion.Item>
    </Accordion>
}`,...(ie=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var me,de,pe;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <Accordion variant="bordered" className="max-w-2xl mx-auto">
      <Accordion.Item title="Título Customizado" headerClassName="bg-blue-50 hover:bg-blue-100" contentClassName="bg-blue-50/50">
        <p>Este item tem classes customizadas no header e no conteúdo.</p>
      </Accordion.Item>
      <Accordion.Item title="Outro Item Customizado" headerClassName="bg-green-50 hover:bg-green-100" contentClassName="bg-green-50/50">
        <p>Você pode aplicar diferentes estilos para cada item.</p>
      </Accordion.Item>
    </Accordion>
}`,...(pe=(de=w.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,ve,ge;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    type: "single",
    variant: "default",
    collapsible: true
  },
  render: args => <Accordion {...args}>
      <Accordion.Item title="Item 1" defaultOpen>
        <p>Conteúdo do primeiro item do accordion.</p>
      </Accordion.Item>
      <Accordion.Item title="Item 2">
        <p>Conteúdo do segundo item do accordion.</p>
      </Accordion.Item>
      <Accordion.Item title="Item 3">
        <p>Conteúdo do terceiro item do accordion.</p>
      </Accordion.Item>
    </Accordion>
}`,...(ge=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var Ee,fe,be;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Perguntas Frequentes</h2>
      <Accordion variant="separated">
        <Accordion.Item title="Como faço para criar uma conta?">
          <p>
            Para criar uma conta, clique no botão "Cadastrar" no canto superior direito da página. Preencha o formulário com suas informações e siga as instruções enviadas por email para verificar sua conta.
          </p>
        </Accordion.Item>
        <Accordion.Item title="Quais são as formas de pagamento aceitas?">
          <p>
            Aceitamos cartões de crédito (Visa, Mastercard, American Express), débito, PayPal e transferência bancária. Para planos Enterprise, também oferecemos faturamento personalizado.
          </p>
        </Accordion.Item>
        <Accordion.Item title="Posso cancelar minha assinatura a qualquer momento?">
          <p>
            Sim! Você pode cancelar sua assinatura a qualquer momento através do painel de controle. Após o cancelamento, você continuará tendo acesso até o final do período já pago.
          </p>
        </Accordion.Item>
        <Accordion.Item title="Há suporte técnico disponível?">
          <p>
            Sim, oferecemos suporte técnico por email e chat ao vivo. Planos Pro e Enterprise também incluem suporte por telefone e um gerente de conta dedicado.
          </p>
        </Accordion.Item>
        <Accordion.Item title="Os dados são seguros?">
          <p>
            A segurança dos seus dados é nossa prioridade. Utilizamos criptografia SSL/TLS, armazenamento seguro em servidores certificados e seguimos as melhores práticas de segurança da indústria, incluindo conformidade com LGPD e GDPR.
          </p>
        </Accordion.Item>
      </Accordion>
    </div>
}`,...(be=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var he,Ie,Ae;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div className="max-w-xs">
      <Accordion variant="default" type="multiple">
        <Accordion.Item title="Componentes" icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>} defaultOpen>
          <div className="space-y-1 text-sm">
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Button</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Input</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Select</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Card</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Accordion</div>
          </div>
        </Accordion.Item>
        <Accordion.Item title="Utilidades" icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>}>
          <div className="space-y-1 text-sm">
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Utils</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Hooks</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Helpers</div>
          </div>
        </Accordion.Item>
        <Accordion.Item title="Guias" icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>}>
          <div className="space-y-1 text-sm">
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Introdução</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Instalação</div>
            <div className="py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer">Customização</div>
          </div>
        </Accordion.Item>
      </Accordion>
    </div>
}`,...(Ae=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.source}}};var ye,Ne,xe;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const FormExample = () => {
      const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        comments: ""
      });
      const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
          ...formData,
          [field]: e.target.value
        });
      };
      return <div className="max-w-2xl">
          <h3 className="text-lg font-bold mb-4">Formulário de Cadastro</h3>
          <Accordion variant="bordered" type="multiple">
            <Accordion.Item title="Dados Pessoais" defaultOpen>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nome Completo</label>
                  <Input name="name" value={formData.name} onChange={handleChange("name")} placeholder="Digite seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange("email")} placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Telefone</label>
                  <Input name="phone" value={formData.phone} onChange={handleChange("phone")} placeholder="(00) 00000-0000" />
                </div>
              </div>
            </Accordion.Item>

            <Accordion.Item title="Endereço">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Endereço</label>
                  <Input name="address" value={formData.address} onChange={handleChange("address")} placeholder="Rua, número" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Cidade</label>
                  <Input name="city" value={formData.city} onChange={handleChange("city")} placeholder="Sua cidade" />
                </div>
              </div>
            </Accordion.Item>

            <Accordion.Item title="Observações">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Comentários</label>
                  <textarea value={formData.comments} onChange={handleChange("comments")} placeholder="Alguma observação adicional?" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} />
                </div>
              </div>
            </Accordion.Item>
          </Accordion>

          <div className="mt-6">
            <Button onClick={() => console.log(formData)}>Salvar Dados</Button>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded text-sm">
            <strong>Debug - Estado do formulário:</strong>
            <pre className="mt-2 whitespace-pre-wrap break-words">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        </div>;
    };
    return <FormExample />;
  }
}`,...(xe=(Ne=R.parameters)==null?void 0:Ne.docs)==null?void 0:xe.source}}};const Te=["Default","WithDefaultOpen","MultipleMode","BorderedVariant","SeparatedVariant","RichContent","WithDisabledItems","NonCollapsible","WithCustomIcons","WithCustomClasses","Playground","FAQExample","NavigationExample","WithForm"];export{A as BorderedVariant,b as Default,P as FAQExample,I as MultipleMode,D as NavigationExample,C as NonCollapsible,z as Playground,N as RichContent,y as SeparatedVariant,w as WithCustomClasses,S as WithCustomIcons,h as WithDefaultOpen,x as WithDisabledItems,R as WithForm,Te as __namedExportsOrder,Be as default};
