import{R as e}from"./iframe-DKIKpqtB.js";import{C as l}from"./Table-D3EpvdRF.js";import{B as r}from"./Button-D0S_Uts4.js";import"./utils-CuF-iVWQ.js";const f={title:"Components/Table",component:l,parameters:{layout:"padded",docs:{description:{component:`
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
        `}}},argTypes:{variant:{control:"select",options:["default","striped","bordered"],description:"Variante visual da tabela"},size:{control:"select",options:["sm","md","lg"],description:"Tamanho da fonte e espaçamentos"},responsive:{control:"boolean",description:"Ativar scroll horizontal em telas pequenas"},stickyHeader:{control:"boolean",description:"Fixar cabeçalho durante scroll vertical"}}},a={render:()=>e.createElement(l,{variant:"default",size:"md"},e.createElement(l.Header,null,e.createElement(l.Row,null,e.createElement(l.Cell,{as:"th",scope:"col"},"Nome"),e.createElement(l.Cell,{as:"th",scope:"col"},"Email"),e.createElement(l.Cell,{as:"th",scope:"col"},"Status"),e.createElement(l.Cell,{as:"th",scope:"col"},"Ações"))),e.createElement(l.Body,null,e.createElement(l.Row,null,e.createElement(l.Cell,null,"João Silva"),e.createElement(l.Cell,null,"joao.silva@email.com"),e.createElement(l.Cell,null,e.createElement("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"},"Ativo")),e.createElement(l.Cell,null,e.createElement(r,{variant:"outline"},"Editar"))),e.createElement(l.Row,null,e.createElement(l.Cell,null,"Maria Santos"),e.createElement(l.Cell,null,"maria.santos@email.com"),e.createElement(l.Cell,null,e.createElement("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"},"Pendente")),e.createElement(l.Cell,null,e.createElement(r,{variant:"outline"},"Editar")))))},t={render:()=>e.createElement(l,{variant:"striped",size:"md"},e.createElement(l.Header,null,e.createElement(l.Row,null,e.createElement(l.Cell,{as:"th",scope:"col"},"Produto"),e.createElement(l.Cell,{as:"th",scope:"col"},"Categoria"),e.createElement(l.Cell,{as:"th",scope:"col",align:"right"},"Preço"),e.createElement(l.Cell,{as:"th",scope:"col",align:"center"},"Estoque"))),e.createElement(l.Body,null,e.createElement(l.Row,null,e.createElement(l.Cell,null,"Smartphone X"),e.createElement(l.Cell,null,"Eletrônicos"),e.createElement(l.Cell,{align:"right"},"R$ 1.299,00"),e.createElement(l.Cell,{align:"center"},"15")),e.createElement(l.Row,null,e.createElement(l.Cell,null,"Notebook Pro"),e.createElement(l.Cell,null,"Informática"),e.createElement(l.Cell,{align:"right"},"R$ 3.299,00"),e.createElement(l.Cell,{align:"center"},"8"))))},n={render:()=>e.createElement(l,{variant:"bordered",size:"md"},e.createElement(l.Header,null,e.createElement(l.Row,null,e.createElement(l.Cell,{as:"th",scope:"col"},"Data"),e.createElement(l.Cell,{as:"th",scope:"col"},"Descrição"),e.createElement(l.Cell,{as:"th",scope:"col",align:"right"},"Valor"),e.createElement(l.Cell,{as:"th",scope:"col"},"Tipo"))),e.createElement(l.Body,null,e.createElement(l.Row,null,e.createElement(l.Cell,null,"15/09/2025"),e.createElement(l.Cell,null,"Salário"),e.createElement(l.Cell,{align:"right"},"+ R$ 5.000,00"),e.createElement(l.Cell,null,e.createElement("span",{className:"text-green-600 font-medium"},"Receita"))),e.createElement(l.Row,null,e.createElement(l.Cell,null,"14/09/2025"),e.createElement(l.Cell,null,"Aluguel"),e.createElement(l.Cell,{align:"right"},"- R$ 1.200,00"),e.createElement(l.Cell,null,e.createElement("span",{className:"text-red-600 font-medium"},"Despesa")))),e.createElement(l.Footer,null,e.createElement(l.Row,null,e.createElement(l.Cell,{as:"th",scope:"row",colSpan:2},"Total"),e.createElement(l.Cell,{align:"right",className:"font-bold"},"+ R$ 3.800,00"),e.createElement(l.Cell,null," "))))},o={render:()=>e.createElement("div",{"data-theme":"dark",className:"p-6 bg-gray-900 rounded-lg"},e.createElement("h3",{className:"text-white mb-4"},"Tabela em Tema Escuro"),e.createElement(l,{variant:"striped",size:"md"},e.createElement(l.Header,null,e.createElement(l.Row,null,e.createElement(l.Cell,{as:"th",scope:"col"},"Projeto"),e.createElement(l.Cell,{as:"th",scope:"col"},"Cliente"),e.createElement(l.Cell,{as:"th",scope:"col"},"Status"),e.createElement(l.Cell,{as:"th",scope:"col",align:"right"},"Progresso"))),e.createElement(l.Body,null,e.createElement(l.Row,null,e.createElement(l.Cell,null,"Website Redesign"),e.createElement(l.Cell,null,"Empresa ABC"),e.createElement(l.Cell,null,e.createElement("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-900 text-green-100"},"Concluído")),e.createElement(l.Cell,{align:"right"},"100%")),e.createElement(l.Row,null,e.createElement(l.Cell,null,"App Mobile"),e.createElement(l.Cell,null,"Startup XYZ"),e.createElement(l.Cell,null,e.createElement("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-900 text-blue-100"},"Em desenvolvimento")),e.createElement(l.Cell,{align:"right"},"75%")))))};var s,c,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,b,T;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(T=(b=t.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var C,d,u;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,E,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(E=o.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};const v=["Default","Striped","Bordered","DarkTheme"];export{n as Bordered,o as DarkTheme,a as Default,t as Striped,v as __namedExportsOrder,f as default};
