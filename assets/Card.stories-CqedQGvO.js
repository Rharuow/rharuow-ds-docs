import{R as e}from"./iframe-CDg8zD-n.js";import{c as E}from"./utils-CuF-iVWQ.js";import{B as s}from"./Button-BR2ajRlj.js";const h=e.forwardRef(({children:t,className:r,as:d="div",...n},o)=>e.createElement(d,{ref:o,className:E("px-6 py-4 border-b","bg-[var(--card-header-bg,rgba(249,250,251,0.5))]","border-[var(--card-header-border,#e5e7eb)]","text-[var(--card-text,#111827)]",r),...n},t));h.displayName="CardHeader";const b=e.forwardRef(({children:t,className:r,as:d="div",...n},o)=>e.createElement(d,{ref:o,className:E("px-6 py-4","flex-1","bg-[var(--card-bg,#ffffff)]","text-[var(--card-text,#111827)]",r),...n},t));b.displayName="CardBody";const B=e.forwardRef(({children:t,className:r,as:d="div",...n},o)=>e.createElement(d,{ref:o,className:E("px-6 py-4 border-t","bg-[var(--card-footer-bg,rgba(249,250,251,0.5))]","border-[var(--card-footer-border,#e5e7eb)]","text-[var(--card-text,#111827)]",r),...n},t));B.displayName="CardFooter";const ce=e.forwardRef(({children:t,className:r,variant:d="default",size:n="md",padding:o="none",rounded:ie="lg",constrainWidth:ue=!1,...pe},xe)=>{const ge={default:"bg-[var(--card-bg,#ffffff)] border border-[var(--card-border,#e5e7eb)] shadow-[var(--card-shadow-sm,0_1px_2px_0_rgb(0_0_0_/_0.05))]",outlined:"bg-[var(--card-bg,#ffffff)] border-2 border-[var(--primary,#2563eb)]",elevated:"bg-[var(--card-bg,#ffffff)] border border-[var(--card-border,#e5e7eb)] shadow-[var(--card-shadow-lg,0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1))]",flat:"bg-[var(--card-bg,#ffffff)] border-0"},ve={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg"},fe={none:"",sm:"p-3",md:"p-4",lg:"p-6"},Ce={none:"rounded-none",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl"};return e.createElement("div",{ref:xe,className:E("flex flex-col","overflow-hidden",ge[d],ue&&ve[n],fe[o],Ce[ie],r),...pe},t)}),a=Object.assign(ce,{Header:h,Body:b,Footer:B});ce.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'outlined' | 'elevated' | 'flat'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'elevated'"},{name:"literal",value:"'flat'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},constrainWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"union",raw:"'div' | 'header'",elements:[{name:"literal",value:"'div'"},{name:"literal",value:"'header'"}]},description:"",defaultValue:{value:"'div'",computed:!1}}}};b.__docgenInfo={description:"",methods:[],displayName:"CardBody",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"union",raw:"'div' | 'main' | 'section'",elements:[{name:"literal",value:"'div'"},{name:"literal",value:"'main'"},{name:"literal",value:"'section'"}]},description:"",defaultValue:{value:"'div'",computed:!1}}}};B.__docgenInfo={description:"",methods:[],displayName:"CardFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"union",raw:"'div' | 'footer'",elements:[{name:"literal",value:"'div'"},{name:"literal",value:"'footer'"}]},description:"",defaultValue:{value:"'div'",computed:!1}}}};const he={title:"Components/Card",component:a,parameters:{layout:"centered",docs:{description:{component:"Componente Card flexível com seções Header, Body e Footer. Por padrão, o card cresce para ocupar toda a largura disponível. Use constrainWidth=true para aplicar limitações de tamanho. Suporta diferentes variantes e personalização completa via CSS Variables."}}},tags:["autodocs"],argTypes:{variant:{description:"Estilo visual do card",control:"select",options:["default","outlined","elevated","flat"]},size:{description:"Tamanho máximo do card (aplicado apenas quando constrainWidth for true)",control:"select",options:["sm","md","lg"]},constrainWidth:{description:"Aplicar limitação de largura máxima baseada no size",control:"boolean"},padding:{description:"Padding interno do card (além do padding das seções)",control:"select",options:["none","sm","md","lg"]},rounded:{description:"Bordas arredondadas",control:"select",options:["none","sm","md","lg","xl"]}}},l={render:t=>e.createElement(a,{...t},e.createElement(a.Header,null,e.createElement("h3",{className:"text-lg font-semibold text-gray-900"},"Título do Card"),e.createElement("p",{className:"text-sm text-gray-500"},"Subtítulo ou descrição")),e.createElement(a.Body,null,e.createElement("p",{className:"text-gray-700"},"Este é o conteúdo principal do card. Aqui você pode colocar qualquer conteúdo que desejar, como texto, imagens, formulários, etc.")),e.createElement(a.Footer,null,e.createElement("div",{className:"flex justify-end space-x-2"},e.createElement(s,{variant:"outline"},"Cancelar"),e.createElement(s,null,"Confirmar")))),args:{variant:"default",size:"md",constrainWidth:!1,padding:"none",rounded:"lg"},parameters:{docs:{description:{story:"Card básico com header, body e footer. Demonstra a estrutura padrão com título, conteúdo e ações."}}}},m={render:t=>e.createElement(a,{...t},e.createElement(a.Header,null,e.createElement("h3",{className:"text-lg font-semibold text-gray-900"},"Apenas Header"),e.createElement("p",{className:"text-sm text-gray-500"},"Card com apenas a seção de cabeçalho"))),args:{variant:"default",size:"md"},parameters:{docs:{description:{story:"Card usando apenas o Header. Útil para títulos, notificações simples ou divisões de conteúdo."}}}},c={render:t=>e.createElement(a,{...t},e.createElement(a.Body,null,e.createElement("h4",{className:"font-medium text-gray-900 mb-2"},"Conteúdo Principal"),e.createElement("p",{className:"text-gray-700"},"Card com apenas o body. Ideal para conteúdo simples sem necessidade de header ou footer específicos."))),args:{variant:"default",size:"md"},parameters:{docs:{description:{story:"Card usando apenas o Body. Útil para conteúdo simples que não precisa de cabeçalho ou rodapé."}}}},i={render:t=>e.createElement(a,{...t},e.createElement(a.Header,null,e.createElement("h3",{className:"text-lg font-semibold text-gray-900"},"Produto Premium"),e.createElement("span",{className:"inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"},"Destaque")),e.createElement(a.Body,null,e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-gray-700"},"Descrição detalhada do produto com suas principais características e benefícios para o usuário."),e.createElement("ul",{className:"list-disc list-inside text-sm text-gray-600 space-y-1"},e.createElement("li",null,"Característica 1"),e.createElement("li",null,"Característica 2"),e.createElement("li",null,"Característica 3"))))),args:{variant:"default",size:"md"},parameters:{docs:{description:{story:"Card com Header e Body. Comum para exibir informações de produtos, artigos ou perfis."}}}},u={render:t=>e.createElement(a,{...t},e.createElement(a.Body,null,e.createElement("div",{className:"text-center"},e.createElement("div",{className:"text-3xl font-bold text-[var(--primary,#2563eb)] mb-2"},"$99"),e.createElement("p",{className:"text-gray-700"},"Plano mensal com todos os recursos incluídos"))),e.createElement(a.Footer,null,e.createElement(s,{className:"w-full"},"Assinar Agora"))),args:{variant:"default",size:"sm"},parameters:{docs:{description:{story:"Card com Body e Footer. Ideal para preços, calls-to-action ou formulários simples."}}}},p={render:()=>e.createElement("div",{className:"grid grid-cols-2 gap-4 max-w-4xl"},e.createElement(a,{variant:"default"},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Default")),e.createElement(a.Body,null,e.createElement("p",{className:"text-sm text-gray-600"},"Card padrão com sombra sutil"))),e.createElement(a,{variant:"outlined"},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Outlined")),e.createElement(a.Body,null,e.createElement("p",{className:"text-sm text-gray-600"},"Card com borda colorida"))),e.createElement(a,{variant:"elevated"},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Elevated")),e.createElement(a.Body,null,e.createElement("p",{className:"text-sm text-gray-600"},"Card com sombra elevada"))),e.createElement(a,{variant:"flat"},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Flat")),e.createElement(a.Body,null,e.createElement("p",{className:"text-sm text-gray-600"},"Card sem sombra ou borda")))),parameters:{docs:{description:{story:"Diferentes variantes visuais do Card: default, outlined, elevated e flat."}}}},x={render:()=>e.createElement("div",{className:"space-y-6"},e.createElement("div",null,e.createElement("h4",{className:"text-lg font-semibold mb-4"},"Cards sem limitação de largura (padrão)"),e.createElement("div",{className:"space-y-4"},e.createElement(a,{size:"sm",constrainWidth:!1},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Card sem limitação")),e.createElement(a.Body,null,e.createElement("p",{className:"text-sm text-gray-600"},"Este card cresce livremente para se adaptar ao conteúdo ou container pai, independente do size definido. Esta é a configuração padrão."))))),e.createElement("div",null,e.createElement("h4",{className:"text-lg font-semibold mb-4"},"Cards com limitação de largura (constrainWidth=true)"),e.createElement("div",{className:"space-y-4"},e.createElement(a,{size:"sm",constrainWidth:!0},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Small (sm) - max-width: 384px")),e.createElement(a.Body,null,e.createElement("p",{className:"text-sm text-gray-600"},"Card pequeno com largura limitada"))),e.createElement(a,{size:"md",constrainWidth:!0},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Medium (md) - max-width: 448px")),e.createElement(a.Body,null,e.createElement("p",{className:"text-sm text-gray-600"},"Card médio com largura limitada"))),e.createElement(a,{size:"lg",constrainWidth:!0},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Large (lg) - max-width: 512px")),e.createElement(a.Body,null,e.createElement("p",{className:"text-sm text-gray-600"},"Card grande com largura limitada")))))),parameters:{docs:{description:{story:"Demonstração do novo comportamento de sizing. Por padrão, cards crescem livremente. Use constrainWidth=true para aplicar limitações de largura baseadas no size."}}}},g={render:t=>e.createElement(a,{...t},e.createElement(a.Header,{as:"header"},e.createElement("h1",{className:"text-xl font-bold text-gray-900"},"Artigo Técnico"),e.createElement("time",{className:"text-sm text-gray-500"},"18 de Setembro, 2025")),e.createElement(a.Body,{as:"main"},e.createElement("article",{className:"prose prose-sm"},e.createElement("p",null,"Este é um exemplo de card usando elementos semânticos HTML5. O header usa a tag <header> e o body usa <main>."))),e.createElement(a.Footer,{as:"footer"},e.createElement("div",{className:"flex justify-between items-center"},e.createElement("span",{className:"text-sm text-gray-500"},"Por: Rharuow"),e.createElement("div",{className:"flex space-x-2"},e.createElement(s,{variant:"outline"},"Compartilhar"),e.createElement(s,null,"Ler Mais"))))),args:{variant:"default",size:"lg"},parameters:{docs:{description:{story:"Card usando elementos semânticos HTML5. As seções podem usar tags como header, main, section, footer."}}}},v={render:t=>e.createElement(a,{...t},e.createElement(a.Header,{className:"px-0 py-0"},e.createElement("img",{src:"https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop",alt:"Header",className:"w-full h-32 object-cover"})),e.createElement(a.Body,null,e.createElement("h3",{className:"text-lg font-semibold text-gray-900 mb-2"},"Card com Imagem"),e.createElement("p",{className:"text-gray-700"},"Exemplo de card onde o header não tem padding para acomodar uma imagem que ocupa toda a largura.")),e.createElement(a.Footer,null,e.createElement(s,{className:"w-full"},"Ver Detalhes"))),args:{variant:"default",size:"md"},parameters:{docs:{description:{story:"Card com seção customizada sem padding, útil para imagens ou conteúdo que deve ocupar toda a largura."}}}},f={render:t=>{const[r,d]=e.useState(!1),[n,o]=e.useState(!1);return e.createElement(a,{...t},e.createElement(a.Header,null,e.createElement("div",{className:"flex justify-between items-start"},e.createElement("div",null,e.createElement("h3",{className:"text-lg font-semibold text-[var(--card-text,#111827)]"},"Card Interativo"),e.createElement("p",{className:"text-sm text-[var(--card-text-muted,#6b7280)]"},"Com estado e interações")),e.createElement("button",{onClick:()=>o(!n),className:`p-2 rounded-full transition-colors ${n?"bg-blue-100 text-blue-600":"bg-gray-100 text-gray-600"}`},n?"🔖":"📄"))),e.createElement(a.Body,null,e.createElement("p",{className:"text-[var(--card-text,#111827)] mb-4"},"Este card demonstra como implementar interações e estado. Você pode curtir e salvar este card."),e.createElement("div",{className:"bg-[var(--card-header-bg,rgba(249,250,251,0.5))] p-3 rounded-md"},e.createElement("p",{className:"text-sm text-[var(--card-text-muted,#6b7280)]"},"💡 Status: ",r?"Curtido":"Não curtido"," | ",n?"Salvo":"Não salvo"))),e.createElement(a.Footer,null,e.createElement("div",{className:"flex justify-between"},e.createElement("button",{onClick:()=>d(!r),className:`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${r?"bg-red-100 text-red-600":"bg-gray-100 text-gray-600"}`},e.createElement("span",null,r?"❤️":"🤍"),e.createElement("span",null,r?"Curtido":"Curtir")),e.createElement(s,{variant:"outline"},"Comentar"))))},args:{variant:"default",size:"md"},parameters:{docs:{description:{story:"Card interativo com estado React. Demonstra como implementar funcionalidades dinâmicas."}}}},C={render:t=>e.createElement("div",{"data-theme":"dark",className:"p-6 bg-gray-900 min-h-screen"},e.createElement("div",{className:"space-y-6"},e.createElement(a,{...t},e.createElement(a.Header,null,e.createElement("h3",{className:"text-lg font-semibold"},"Card no Tema Dark"),e.createElement("p",{className:"text-sm text-[var(--card-text-muted)]"},"Demonstração do tema escuro")),e.createElement(a.Body,null,e.createElement("p",{className:"mb-4"},"Este card demonstra como as variáveis CSS se adaptam automaticamente ao tema dark. As cores de fundo, bordas e texto são todas controladas por variáveis CSS."),e.createElement("div",{className:"space-y-2"},e.createElement("p",{className:"text-sm text-[var(--card-text-muted)]"},"• Fundo do card: var(--card-bg)"),e.createElement("p",{className:"text-sm text-[var(--card-text-muted)]"},"• Texto: var(--card-text)"),e.createElement("p",{className:"text-sm text-[var(--card-text-muted)]"},"• Bordas: var(--card-border)"))),e.createElement(a.Footer,null,e.createElement("div",{className:"flex space-x-2"},e.createElement(s,{variant:"outline"},"Secundário"),e.createElement(s,null,"Primário")))),e.createElement("div",{className:"grid grid-cols-2 gap-4"},e.createElement(a,{variant:"default"},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Default Dark")),e.createElement(a.Body,null,e.createElement("p",{className:"text-sm text-[var(--card-text-muted)]"},"Card padrão no tema dark"))),e.createElement(a,{variant:"elevated"},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Elevated Dark")),e.createElement(a.Body,null,e.createElement("p",{className:"text-sm text-[var(--card-text-muted)]"},"Card elevado no tema dark")))))),args:{variant:"default",size:"md"},parameters:{docs:{description:{story:"Card no tema dark. Demonstra como as variáveis CSS se adaptam automaticamente para fornecer uma experiência consistente no modo escuro."}}}},y={render:t=>e.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8"},e.createElement("div",{"data-theme":"light",className:"p-6 bg-gray-50"},e.createElement("h3",{className:"text-lg font-bold mb-4 text-gray-900"},"Light Theme"),e.createElement(a,{...t},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Tema Claro"),e.createElement("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"},"Light")),e.createElement(a.Body,null,e.createElement("p",{className:"text-sm mb-3"},"Exemplo do card no tema claro com cores suaves e contraste adequado."),e.createElement("ul",{className:"text-xs space-y-1 text-[var(--card-text-muted)]"},e.createElement("li",null,"• Fundo branco (#ffffff)"),e.createElement("li",null,"• Bordas cinza claro (#e5e7eb)"),e.createElement("li",null,"• Texto escuro (#111827)"))),e.createElement(a.Footer,null,e.createElement(s,{className:"w-full"},"Ação no Light")))),e.createElement("div",{"data-theme":"dark",className:"p-6 bg-gray-900"},e.createElement("h3",{className:"text-lg font-bold mb-4 text-white"},"Dark Theme"),e.createElement(a,{...t},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Tema Escuro"),e.createElement("span",{className:"text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded"},"Dark")),e.createElement(a.Body,null,e.createElement("p",{className:"text-sm mb-3"},"Exemplo do card no tema escuro com cores que reduzem o cansaço visual."),e.createElement("ul",{className:"text-xs space-y-1 text-[var(--card-text-muted)]"},e.createElement("li",null,"• Fundo escuro (#1f2937)"),e.createElement("li",null,"• Bordas cinza escuro (#374151)"),e.createElement("li",null,"• Texto claro (#f9fafb)"))),e.createElement(a.Footer,null,e.createElement(s,{className:"w-full"},"Ação no Dark"))))),args:{variant:"default",size:"md"},parameters:{layout:"fullscreen",docs:{description:{story:"Comparação lado a lado dos temas claro e escuro. Demonstra como o mesmo componente se adapta automaticamente usando variáveis CSS."}}}},N={render:()=>e.createElement("div",{className:"space-y-6"},e.createElement("h4",{className:"text-lg font-semibold"},"Cards ocupando largura total do container"),e.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},e.createElement(a,{variant:"default"},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Card Responsivo 1")),e.createElement(a.Body,null,e.createElement("p",{className:"text-sm text-gray-600"},"Este card se adapta automaticamente ao seu container em layouts responsivos."))),e.createElement(a,{variant:"outlined"},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Card Responsivo 2")),e.createElement(a.Body,null,e.createElement("p",{className:"text-sm text-gray-600"},"Sem limitações de max-width, ideal para dashboards e layouts flexíveis."))),e.createElement(a,{variant:"elevated"},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Card Responsivo 3")),e.createElement(a.Body,null,e.createElement("p",{className:"text-sm text-gray-600"},"Perfeito para conteúdo que deve se expandir conforme necessário.")))),e.createElement("div",{className:"w-full"},e.createElement(a,{variant:"default"},e.createElement(a.Header,null,e.createElement("h4",{className:"font-medium"},"Card de largura total"),e.createElement("p",{className:"text-sm text-gray-500"},"Ocupa 100% da largura do container pai")),e.createElement(a.Body,null,e.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4"},e.createElement("div",{className:"space-y-2"},e.createElement("h5",{className:"font-medium text-sm"},"Coluna 1"),e.createElement("p",{className:"text-xs text-gray-600"},"Conteúdo da primeira coluna em um card que ocupa toda a largura disponível.")),e.createElement("div",{className:"space-y-2"},e.createElement("h5",{className:"font-medium text-sm"},"Coluna 2"),e.createElement("p",{className:"text-xs text-gray-600"},"Conteúdo da segunda coluna, demonstrando como o card se expande.")),e.createElement("div",{className:"space-y-2"},e.createElement("h5",{className:"font-medium text-sm"},"Coluna 3"),e.createElement("p",{className:"text-xs text-gray-600"},"Terceira coluna mostrando a flexibilidade do novo comportamento.")))),e.createElement(a.Footer,null,e.createElement("div",{className:"flex justify-between items-center w-full"},e.createElement("span",{className:"text-sm text-gray-500"},"Total de itens: 3"),e.createElement(s,null,"Ação Principal")))))),parameters:{docs:{description:{story:"Cards sem limitação de largura, ideais para layouts responsivos e dashboards. Os cards se adaptam automaticamente ao container pai."}}}};var H,w,S;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <Card.Header>
        <h3 className="text-lg font-semibold text-gray-900">Título do Card</h3>
        <p className="text-sm text-gray-500">Subtítulo ou descrição</p>
      </Card.Header>
      <Card.Body>
        <p className="text-gray-700">
          Este é o conteúdo principal do card. Aqui você pode colocar qualquer 
          conteúdo que desejar, como texto, imagens, formulários, etc.
        </p>
      </Card.Body>
      <Card.Footer>
        <div className="flex justify-end space-x-2">
          <Button variant="outline">Cancelar</Button>
          <Button>Confirmar</Button>
        </div>
      </Card.Footer>
    </Card>,
  args: {
    variant: "default",
    size: "md",
    constrainWidth: false,
    padding: "none",
    rounded: "lg"
  },
  parameters: {
    docs: {
      description: {
        story: "Card básico com header, body e footer. Demonstra a estrutura padrão com título, conteúdo e ações."
      }
    }
  }
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var T,z,F;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <Card.Header>
        <h3 className="text-lg font-semibold text-gray-900">Apenas Header</h3>
        <p className="text-sm text-gray-500">Card com apenas a seção de cabeçalho</p>
      </Card.Header>
    </Card>,
  args: {
    variant: "default",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Card usando apenas o Header. Útil para títulos, notificações simples ou divisões de conteúdo."
      }
    }
  }
}`,...(F=(z=m.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var k,q,D;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <Card.Body>
        <h4 className="font-medium text-gray-900 mb-2">Conteúdo Principal</h4>
        <p className="text-gray-700">
          Card com apenas o body. Ideal para conteúdo simples sem necessidade 
          de header ou footer específicos.
        </p>
      </Card.Body>
    </Card>,
  args: {
    variant: "default",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Card usando apenas o Body. Útil para conteúdo simples que não precisa de cabeçalho ou rodapé."
      }
    }
  }
}`,...(D=(q=c.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var _,R,A;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <Card.Header>
        <h3 className="text-lg font-semibold text-gray-900">Produto Premium</h3>
        <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
          Destaque
        </span>
      </Card.Header>
      <Card.Body>
        <div className="space-y-3">
          <p className="text-gray-700">
            Descrição detalhada do produto com suas principais características
            e benefícios para o usuário.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Característica 1</li>
            <li>Característica 2</li>
            <li>Característica 3</li>
          </ul>
        </div>
      </Card.Body>
    </Card>,
  args: {
    variant: "default",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Card com Header e Body. Comum para exibir informações de produtos, artigos ou perfis."
      }
    }
  }
}`,...(A=(R=i.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var P,W,L;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <Card.Body>
        <div className="text-center">
          <div className="text-3xl font-bold text-[var(--primary,#2563eb)] mb-2">
            $99
          </div>
          <p className="text-gray-700">
            Plano mensal com todos os recursos incluídos
          </p>
        </div>
      </Card.Body>
      <Card.Footer>
        <Button className="w-full">
          Assinar Agora
        </Button>
      </Card.Footer>
    </Card>,
  args: {
    variant: "default",
    size: "sm"
  },
  parameters: {
    docs: {
      description: {
        story: "Card com Body e Footer. Ideal para preços, calls-to-action ou formulários simples."
      }
    }
  }
}`,...(L=(W=u.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var j,V,I;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4 max-w-4xl">
      <Card variant="default">
        <Card.Header>
          <h4 className="font-medium">Default</h4>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-gray-600">Card padrão com sombra sutil</p>
        </Card.Body>
      </Card>
      
      <Card variant="outlined">
        <Card.Header>
          <h4 className="font-medium">Outlined</h4>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-gray-600">Card com borda colorida</p>
        </Card.Body>
      </Card>
      
      <Card variant="elevated">
        <Card.Header>
          <h4 className="font-medium">Elevated</h4>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-gray-600">Card com sombra elevada</p>
        </Card.Body>
      </Card>
      
      <Card variant="flat">
        <Card.Header>
          <h4 className="font-medium">Flat</h4>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-gray-600">Card sem sombra ou borda</p>
        </Card.Body>
      </Card>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Diferentes variantes visuais do Card: default, outlined, elevated e flat."
      }
    }
  }
}`,...(I=(V=p.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var O,M,$;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold mb-4">Cards sem limitação de largura (padrão)</h4>
        <div className="space-y-4">
          <Card size="sm" constrainWidth={false}>
            <Card.Header>
              <h4 className="font-medium">Card sem limitação</h4>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-gray-600">
                Este card cresce livremente para se adaptar ao conteúdo ou container pai, 
                independente do size definido. Esta é a configuração padrão.
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Cards com limitação de largura (constrainWidth=true)</h4>
        <div className="space-y-4">
          <Card size="sm" constrainWidth={true}>
            <Card.Header>
              <h4 className="font-medium">Small (sm) - max-width: 384px</h4>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-gray-600">Card pequeno com largura limitada</p>
            </Card.Body>
          </Card>
          
          <Card size="md" constrainWidth={true}>
            <Card.Header>
              <h4 className="font-medium">Medium (md) - max-width: 448px</h4>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-gray-600">Card médio com largura limitada</p>
            </Card.Body>
          </Card>
          
          <Card size="lg" constrainWidth={true}>
            <Card.Header>
              <h4 className="font-medium">Large (lg) - max-width: 512px</h4>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-gray-600">Card grande com largura limitada</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Demonstração do novo comportamento de sizing. Por padrão, cards crescem livremente. Use constrainWidth=true para aplicar limitações de largura baseadas no size."
      }
    }
  }
}`,...($=(M=x.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var U,G,J;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <Card.Header as="header">
        <h1 className="text-xl font-bold text-gray-900">Artigo Técnico</h1>
        <time className="text-sm text-gray-500">18 de Setembro, 2025</time>
      </Card.Header>
      <Card.Body as="main">
        <article className="prose prose-sm">
          <p>
            Este é um exemplo de card usando elementos semânticos HTML5.
            O header usa a tag &lt;header&gt; e o body usa &lt;main&gt;.
          </p>
        </article>
      </Card.Body>
      <Card.Footer as="footer">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Por: Rharuow</span>
          <div className="flex space-x-2">
            <Button variant="outline">Compartilhar</Button>
            <Button>Ler Mais</Button>
          </div>
        </div>
      </Card.Footer>
    </Card>,
  args: {
    variant: "default",
    size: "lg"
  },
  parameters: {
    docs: {
      description: {
        story: "Card usando elementos semânticos HTML5. As seções podem usar tags como header, main, section, footer."
      }
    }
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <Card.Header className="px-0 py-0">
        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop" alt="Header" className="w-full h-32 object-cover" />
      </Card.Header>
      <Card.Body>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Card com Imagem</h3>
        <p className="text-gray-700">
          Exemplo de card onde o header não tem padding para acomodar uma imagem
          que ocupa toda a largura.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button className="w-full">Ver Detalhes</Button>
      </Card.Footer>
    </Card>,
  args: {
    variant: "default",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Card com seção customizada sem padding, útil para imagens ou conteúdo que deve ocupar toda a largura."
      }
    }
  }
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => {
    const [liked, setLiked] = React.useState(false);
    const [saved, setSaved] = React.useState(false);
    return <Card {...args}>
        <Card.Header>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-[var(--card-text,#111827)]">Card Interativo</h3>
              <p className="text-sm text-[var(--card-text-muted,#6b7280)]">Com estado e interações</p>
            </div>
            <button onClick={() => setSaved(!saved)} className={\`p-2 rounded-full transition-colors \${saved ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}\`}>
              {saved ? '🔖' : '📄'}
            </button>
          </div>
        </Card.Header>
        <Card.Body>
          <p className="text-[var(--card-text,#111827)] mb-4">
            Este card demonstra como implementar interações e estado.
            Você pode curtir e salvar este card.
          </p>
          <div className="bg-[var(--card-header-bg,rgba(249,250,251,0.5))] p-3 rounded-md">
            <p className="text-sm text-[var(--card-text-muted,#6b7280)]">
              💡 Status: {liked ? 'Curtido' : 'Não curtido'} | {saved ? 'Salvo' : 'Não salvo'}
            </p>
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="flex justify-between">
            <button onClick={() => setLiked(!liked)} className={\`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors \${liked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}\`}>
              <span>{liked ? '❤️' : '🤍'}</span>
              <span>{liked ? 'Curtido' : 'Curtir'}</span>
            </button>
            <Button variant="outline">Comentar</Button>
          </div>
        </Card.Footer>
      </Card>;
  },
  args: {
    variant: "default",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Card interativo com estado React. Demonstra como implementar funcionalidades dinâmicas."
      }
    }
  }
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,re;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => <div data-theme="dark" className="p-6 bg-gray-900 min-h-screen">
      <div className="space-y-6">
        <Card {...args}>
          <Card.Header>
            <h3 className="text-lg font-semibold">Card no Tema Dark</h3>
            <p className="text-sm text-[var(--card-text-muted)]">Demonstração do tema escuro</p>
          </Card.Header>
          <Card.Body>
            <p className="mb-4">
              Este card demonstra como as variáveis CSS se adaptam automaticamente
              ao tema dark. As cores de fundo, bordas e texto são todas controladas
              por variáveis CSS.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-[var(--card-text-muted)]">
                • Fundo do card: var(--card-bg)
              </p>
              <p className="text-sm text-[var(--card-text-muted)]">
                • Texto: var(--card-text)
              </p>
              <p className="text-sm text-[var(--card-text-muted)]">
                • Bordas: var(--card-border)
              </p>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="flex space-x-2">
              <Button variant="outline">Secundário</Button>
              <Button>Primário</Button>
            </div>
          </Card.Footer>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card variant="default">
            <Card.Header>
              <h4 className="font-medium">Default Dark</h4>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-[var(--card-text-muted)]">Card padrão no tema dark</p>
            </Card.Body>
          </Card>
          
          <Card variant="elevated">
            <Card.Header>
              <h4 className="font-medium">Elevated Dark</h4>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-[var(--card-text-muted)]">Card elevado no tema dark</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>,
  args: {
    variant: "default",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Card no tema dark. Demonstra como as variáveis CSS se adaptam automaticamente para fornecer uma experiência consistente no modo escuro."
      }
    }
  }
}`,...(re=(te=C.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,se,de;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Light Theme */}
      <div data-theme="light" className="p-6 bg-gray-50">
        <h3 className="text-lg font-bold mb-4 text-gray-900">Light Theme</h3>
        <Card {...args}>
          <Card.Header>
            <h4 className="font-medium">Tema Claro</h4>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Light</span>
          </Card.Header>
          <Card.Body>
            <p className="text-sm mb-3">
              Exemplo do card no tema claro com cores suaves e contraste adequado.
            </p>
            <ul className="text-xs space-y-1 text-[var(--card-text-muted)]">
              <li>• Fundo branco (#ffffff)</li>
              <li>• Bordas cinza claro (#e5e7eb)</li>
              <li>• Texto escuro (#111827)</li>
            </ul>
          </Card.Body>
          <Card.Footer>
            <Button className="w-full">Ação no Light</Button>
          </Card.Footer>
        </Card>
      </div>

      {/* Dark Theme */}
      <div data-theme="dark" className="p-6 bg-gray-900">
        <h3 className="text-lg font-bold mb-4 text-white">Dark Theme</h3>
        <Card {...args}>
          <Card.Header>
            <h4 className="font-medium">Tema Escuro</h4>
            <span className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded">Dark</span>
          </Card.Header>
          <Card.Body>
            <p className="text-sm mb-3">
              Exemplo do card no tema escuro com cores que reduzem o cansaço visual.
            </p>
            <ul className="text-xs space-y-1 text-[var(--card-text-muted)]">
              <li>• Fundo escuro (#1f2937)</li>
              <li>• Bordas cinza escuro (#374151)</li>
              <li>• Texto claro (#f9fafb)</li>
            </ul>
          </Card.Body>
          <Card.Footer>
            <Button className="w-full">Ação no Dark</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>,
  args: {
    variant: "default",
    size: "md"
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Comparação lado a lado dos temas claro e escuro. Demonstra como o mesmo componente se adapta automaticamente usando variáveis CSS."
      }
    }
  }
}`,...(de=(se=y.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var oe,le,me;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <h4 className="text-lg font-semibold">Cards ocupando largura total do container</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card variant="default">
          <Card.Header>
            <h4 className="font-medium">Card Responsivo 1</h4>
          </Card.Header>
          <Card.Body>
            <p className="text-sm text-gray-600">
              Este card se adapta automaticamente ao seu container em layouts responsivos.
            </p>
          </Card.Body>
        </Card>
        
        <Card variant="outlined">
          <Card.Header>
            <h4 className="font-medium">Card Responsivo 2</h4>
          </Card.Header>
          <Card.Body>
            <p className="text-sm text-gray-600">
              Sem limitações de max-width, ideal para dashboards e layouts flexíveis.
            </p>
          </Card.Body>
        </Card>
        
        <Card variant="elevated">
          <Card.Header>
            <h4 className="font-medium">Card Responsivo 3</h4>
          </Card.Header>
          <Card.Body>
            <p className="text-sm text-gray-600">
              Perfeito para conteúdo que deve se expandir conforme necessário.
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="w-full">
        <Card variant="default">
          <Card.Header>
            <h4 className="font-medium">Card de largura total</h4>
            <p className="text-sm text-gray-500">Ocupa 100% da largura do container pai</p>
          </Card.Header>
          <Card.Body>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h5 className="font-medium text-sm">Coluna 1</h5>
                <p className="text-xs text-gray-600">
                  Conteúdo da primeira coluna em um card que ocupa toda a largura disponível.
                </p>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-sm">Coluna 2</h5>
                <p className="text-xs text-gray-600">
                  Conteúdo da segunda coluna, demonstrando como o card se expande.
                </p>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-sm">Coluna 3</h5>
                <p className="text-xs text-gray-600">
                  Terceira coluna mostrando a flexibilidade do novo comportamento.
                </p>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="flex justify-between items-center w-full">
              <span className="text-sm text-gray-500">Total de itens: 3</span>
              <Button>Ação Principal</Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Cards sem limitação de largura, ideais para layouts responsivos e dashboards. Os cards se adaptam automaticamente ao container pai."
      }
    }
  }
}`,...(me=(le=N.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};const be=["Default","OnlyHeader","OnlyBody","HeaderAndBody","BodyAndFooter","Variants","Sizes","CustomSemantic","WithoutPadding","InteractiveCard","DarkTheme","ThemeComparison","FullWidthCards"];export{u as BodyAndFooter,g as CustomSemantic,C as DarkTheme,l as Default,N as FullWidthCards,i as HeaderAndBody,f as InteractiveCard,c as OnlyBody,m as OnlyHeader,x as Sizes,y as ThemeComparison,p as Variants,v as WithoutPadding,be as __namedExportsOrder,he as default};
