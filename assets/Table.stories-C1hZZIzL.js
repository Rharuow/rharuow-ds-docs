import{R as e}from"./iframe-DExB8K4I.js";import{c as s}from"./utils-CuF-iVWQ.js";import{B as w}from"./Button-DR_xwKWU.js";const C=e.forwardRef(({children:r,className:o,variant:a="default",size:t="md",responsive:n=!1,stickyHeader:c=!1,...u},p)=>{const T=s("w-full border-collapse bg-[var(--table-bg)] text-[var(--table-text)]",{"border border-[var(--table-border)]":a==="bordered"},{"text-sm":t==="sm","text-base":t==="md","text-lg":t==="lg"},o),D=s({"overflow-x-auto":n,"max-h-96 overflow-y-auto":c}),v=e.createElement("table",{ref:p,className:T,...u},r);return n||c?e.createElement("div",{className:D},v):v}),f=e.forwardRef(({children:r,className:o,as:a="thead",...t},n)=>e.createElement(a,{ref:n,className:s("border-b border-[var(--table-border)] bg-[var(--table-header-bg)]",{"sticky top-0 z-10":a==="thead"},o),...t},r)),g=e.forwardRef(({children:r,className:o,as:a="tbody",...t},n)=>e.createElement(a,{ref:n,className:s("[&_tr:nth-child(odd)]:bg-[var(--table-row-odd)]","[&_tr:nth-child(even)]:bg-[var(--table-row-even)]",o),...t},r)),E=e.forwardRef(({children:r,className:o,as:a="tfoot",...t},n)=>e.createElement(a,{ref:n,className:s("border-t border-[var(--table-border)] bg-[var(--table-header-bg)] font-medium",o),...t},r)),h=e.forwardRef(({children:r,className:o,variant:a="default",...t},n)=>e.createElement("tr",{ref:n,className:s("border-b border-[var(--table-border)] transition-colors",{"hover:bg-[var(--table-row-hover)]":a==="hover","bg-[var(--table-row-selected)]":a==="selected"},o),...t},r)),R=e.forwardRef(({children:r,className:o,as:a="td",align:t="left",scope:n,colSpan:c,rowSpan:u,...p},T)=>e.createElement(a,{ref:T,scope:a==="th"?n:void 0,colSpan:c,rowSpan:u,className:s("px-4 py-3 text-left",{"font-semibold":a==="th","text-sm":a==="td","text-center":t==="center","text-right":t==="right"},o),...p},r));C.displayName="Table";f.displayName="TableHeader";g.displayName="TableBody";E.displayName="TableFooter";h.displayName="TableRow";R.displayName="TableCell";const l=Object.assign(C,{Header:f,Body:g,Footer:E,Row:h,Cell:R});C.__docgenInfo={description:"",methods:[],displayName:"Table",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'striped' | 'bordered'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'striped'"},{name:"literal",value:"'bordered'"}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:'"md"',computed:!1}},responsive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};f.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"literal",value:"'thead'"},description:"",defaultValue:{value:'"thead"',computed:!1}}}};g.__docgenInfo={description:"",methods:[],displayName:"TableBody",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"literal",value:"'tbody'"},description:"",defaultValue:{value:'"tbody"',computed:!1}}}};E.__docgenInfo={description:"",methods:[],displayName:"TableFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"literal",value:"'tfoot'"},description:"",defaultValue:{value:'"tfoot"',computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"TableRow",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'selected' | 'hover'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'selected'"},{name:"literal",value:"'hover'"}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};R.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"union",raw:"'td' | 'th'",elements:[{name:"literal",value:"'td'"},{name:"literal",value:"'th'"}]},description:"",defaultValue:{value:'"td"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:'"left"',computed:!1}},scope:{required:!1,tsType:{name:"union",raw:"'col' | 'row'",elements:[{name:"literal",value:"'col'"},{name:"literal",value:"'row'"}]},description:""},colSpan:{required:!1,tsType:{name:"number"},description:""},rowSpan:{required:!1,tsType:{name:"number"},description:""}}};const k={title:"Components/Table",component:l,parameters:{layout:"padded",docs:{description:{component:`
O componente **Table** oferece uma estrutura completa e flexível para exibição de dados tabulares.

### Características:
- **Estrutura modular**: Table, Header, Body, Footer, Row, Cell
- **Variantes**: default, striped, bordered
- **Tamanhos**: sm, md, lg
- **Responsividade**: scroll horizontal automático
- **Header fixo**: para tabelas com muitos dados
- **Suporte a temas**: claro/escuro via CSS variables
- **Acessibilidade**: ARIA adequado para screen readers

### Uso:
\`\`\`tsx
import { Table } from "rharuow-ds";

<Table variant="striped" size="md" responsive>
  <Table.Header>
    <Table.Row>
      <Table.Cell as="th">Nome</Table.Cell>
      <Table.Cell as="th">Email</Table.Cell>
      <Table.Cell as="th">Ações</Table.Cell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>João Silva</Table.Cell>
      <Table.Cell>joao@email.com</Table.Cell>
      <Table.Cell>
        <Button>Editar</Button>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
\`\`\`
        `}}},argTypes:{variant:{control:"select",options:["default","striped","bordered"],description:"Variante visual da tabela"},size:{control:"select",options:["sm","md","lg"],description:"Tamanho da fonte e espaçamentos"},responsive:{control:"boolean",description:"Ativar scroll horizontal em telas pequenas"},stickyHeader:{control:"boolean",description:"Fixar cabeçalho durante scroll vertical"}}},i={render:()=>e.createElement(l,{variant:"default",size:"md"},e.createElement(l.Header,null,e.createElement(l.Row,null,e.createElement(l.Cell,{as:"th",scope:"col"},"Nome"),e.createElement(l.Cell,{as:"th",scope:"col"},"Email"),e.createElement(l.Cell,{as:"th",scope:"col"},"Status"),e.createElement(l.Cell,{as:"th",scope:"col"},"Ações"))),e.createElement(l.Body,null,e.createElement(l.Row,null,e.createElement(l.Cell,null,"João Silva"),e.createElement(l.Cell,null,"joao.silva@email.com"),e.createElement(l.Cell,null,e.createElement("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"},"Ativo")),e.createElement(l.Cell,null,e.createElement(w,{variant:"outline"},"Editar"))),e.createElement(l.Row,null,e.createElement(l.Cell,null,"Maria Santos"),e.createElement(l.Cell,null,"maria.santos@email.com"),e.createElement(l.Cell,null,e.createElement("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"},"Pendente")),e.createElement(l.Cell,null,e.createElement(w,{variant:"outline"},"Editar")))))},d={render:()=>e.createElement(l,{variant:"striped",size:"md"},e.createElement(l.Header,null,e.createElement(l.Row,null,e.createElement(l.Cell,{as:"th",scope:"col"},"Produto"),e.createElement(l.Cell,{as:"th",scope:"col"},"Categoria"),e.createElement(l.Cell,{as:"th",scope:"col",align:"right"},"Preço"),e.createElement(l.Cell,{as:"th",scope:"col",align:"center"},"Estoque"))),e.createElement(l.Body,null,e.createElement(l.Row,null,e.createElement(l.Cell,null,"Smartphone X"),e.createElement(l.Cell,null,"Eletrônicos"),e.createElement(l.Cell,{align:"right"},"R$ 1.299,00"),e.createElement(l.Cell,{align:"center"},"15")),e.createElement(l.Row,null,e.createElement(l.Cell,null,"Notebook Pro"),e.createElement(l.Cell,null,"Informática"),e.createElement(l.Cell,{align:"right"},"R$ 3.299,00"),e.createElement(l.Cell,{align:"center"},"8"))))},m={render:()=>e.createElement(l,{variant:"bordered",size:"md"},e.createElement(l.Header,null,e.createElement(l.Row,null,e.createElement(l.Cell,{as:"th",scope:"col"},"Data"),e.createElement(l.Cell,{as:"th",scope:"col"},"Descrição"),e.createElement(l.Cell,{as:"th",scope:"col",align:"right"},"Valor"),e.createElement(l.Cell,{as:"th",scope:"col"},"Tipo"))),e.createElement(l.Body,null,e.createElement(l.Row,null,e.createElement(l.Cell,null,"15/09/2025"),e.createElement(l.Cell,null,"Salário"),e.createElement(l.Cell,{align:"right"},"+ R$ 5.000,00"),e.createElement(l.Cell,null,e.createElement("span",{className:"text-green-600 font-medium"},"Receita"))),e.createElement(l.Row,null,e.createElement(l.Cell,null,"14/09/2025"),e.createElement(l.Cell,null,"Aluguel"),e.createElement(l.Cell,{align:"right"},"- R$ 1.200,00"),e.createElement(l.Cell,null,e.createElement("span",{className:"text-red-600 font-medium"},"Despesa")))),e.createElement(l.Footer,null,e.createElement(l.Row,null,e.createElement(l.Cell,{as:"th",scope:"row",colSpan:2},"Total"),e.createElement(l.Cell,{align:"right",className:"font-bold"},"+ R$ 3.800,00"),e.createElement(l.Cell,null," "))))},b={render:()=>e.createElement("div",{"data-theme":"dark",className:"p-6 bg-gray-900 rounded-lg"},e.createElement("h3",{className:"text-white mb-4"},"Tabela em Tema Escuro"),e.createElement(l,{variant:"striped",size:"md"},e.createElement(l.Header,null,e.createElement(l.Row,null,e.createElement(l.Cell,{as:"th",scope:"col"},"Projeto"),e.createElement(l.Cell,{as:"th",scope:"col"},"Cliente"),e.createElement(l.Cell,{as:"th",scope:"col"},"Status"),e.createElement(l.Cell,{as:"th",scope:"col",align:"right"},"Progresso"))),e.createElement(l.Body,null,e.createElement(l.Row,null,e.createElement(l.Cell,null,"Website Redesign"),e.createElement(l.Cell,null,"Empresa ABC"),e.createElement(l.Cell,null,e.createElement("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-900 text-green-100"},"Concluído")),e.createElement(l.Cell,{align:"right"},"100%")),e.createElement(l.Row,null,e.createElement(l.Cell,null,"App Mobile"),e.createElement(l.Cell,null,"Startup XYZ"),e.createElement(l.Cell,null,e.createElement("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-900 text-blue-100"},"Em desenvolvimento")),e.createElement(l.Cell,{align:"right"},"75%")))))};var y,x,N;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Table variant="default" size="md">
      <Table.Header>
        <Table.Row>
          <Table.Cell as="th" scope="col">Nome</Table.Cell>
          <Table.Cell as="th" scope="col">Email</Table.Cell>
          <Table.Cell as="th" scope="col">Status</Table.Cell>
          <Table.Cell as="th" scope="col">Ações</Table.Cell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>João Silva</Table.Cell>
          <Table.Cell>joao.silva@email.com</Table.Cell>
          <Table.Cell>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Ativo
            </span>
          </Table.Cell>
          <Table.Cell>
            <Button variant="outline">Editar</Button>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Maria Santos</Table.Cell>
          <Table.Cell>maria.santos@email.com</Table.Cell>
          <Table.Cell>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              Pendente
            </span>
          </Table.Cell>
          <Table.Cell>
            <Button variant="outline">Editar</Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
}`,...(N=(x=i.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var B,q,S;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Table variant="striped" size="md">
      <Table.Header>
        <Table.Row>
          <Table.Cell as="th" scope="col">Produto</Table.Cell>
          <Table.Cell as="th" scope="col">Categoria</Table.Cell>
          <Table.Cell as="th" scope="col" align="right">Preço</Table.Cell>
          <Table.Cell as="th" scope="col" align="center">Estoque</Table.Cell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Smartphone X</Table.Cell>
          <Table.Cell>Eletrônicos</Table.Cell>
          <Table.Cell align="right">R$ 1.299,00</Table.Cell>
          <Table.Cell align="center">15</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Notebook Pro</Table.Cell>
          <Table.Cell>Informática</Table.Cell>
          <Table.Cell align="right">R$ 3.299,00</Table.Cell>
          <Table.Cell align="center">8</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
}`,...(S=(q=d.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var H,_,A;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Table variant="bordered" size="md">
      <Table.Header>
        <Table.Row>
          <Table.Cell as="th" scope="col">Data</Table.Cell>
          <Table.Cell as="th" scope="col">Descrição</Table.Cell>
          <Table.Cell as="th" scope="col" align="right">Valor</Table.Cell>
          <Table.Cell as="th" scope="col">Tipo</Table.Cell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>15/09/2025</Table.Cell>
          <Table.Cell>Salário</Table.Cell>
          <Table.Cell align="right">+ R$ 5.000,00</Table.Cell>
          <Table.Cell>
            <span className="text-green-600 font-medium">Receita</span>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>14/09/2025</Table.Cell>
          <Table.Cell>Aluguel</Table.Cell>
          <Table.Cell align="right">- R$ 1.200,00</Table.Cell>
          <Table.Cell>
            <span className="text-red-600 font-medium">Despesa</span>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell as="th" scope="row" colSpan={2}>Total</Table.Cell>
          <Table.Cell align="right" className="font-bold">+ R$ 3.800,00</Table.Cell>
          <Table.Cell> </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
}`,...(A=(_=m.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var V,z,P;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div data-theme="dark" className="p-6 bg-gray-900 rounded-lg">
      <h3 className="text-white mb-4">Tabela em Tema Escuro</h3>
      <Table variant="striped" size="md">
        <Table.Header>
          <Table.Row>
            <Table.Cell as="th" scope="col">Projeto</Table.Cell>
            <Table.Cell as="th" scope="col">Cliente</Table.Cell>
            <Table.Cell as="th" scope="col">Status</Table.Cell>
            <Table.Cell as="th" scope="col" align="right">Progresso</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Website Redesign</Table.Cell>
            <Table.Cell>Empresa ABC</Table.Cell>
            <Table.Cell>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-900 text-green-100">
                Concluído
              </span>
            </Table.Cell>
            <Table.Cell align="right">100%</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>App Mobile</Table.Cell>
            <Table.Cell>Startup XYZ</Table.Cell>
            <Table.Cell>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-900 text-blue-100">
                Em desenvolvimento
              </span>
            </Table.Cell>
            <Table.Cell align="right">75%</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
}`,...(P=(z=b.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const j=["Default","Striped","Bordered","DarkTheme"];export{m as Bordered,b as DarkTheme,i as Default,d as Striped,j as __namedExportsOrder,k as default};
