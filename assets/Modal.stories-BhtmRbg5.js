import{R as e}from"./iframe-DKIKpqtB.js";import{r as ue}from"./index-hAGgyQPK.js";import{c as s}from"./utils-CuF-iVWQ.js";import{B as o}from"./Button-D0S_Uts4.js";import{I as B}from"./Input-Bb6KkQGB.js";import{b as pe,F as fe}from"./index.esm-BjoyFiYm.js";import"./index-meVzrAwI.js";const t=({open:n,onClose:a,size:l="md",variant:r="default",closeOnOverlayClick:d=!0,closeOnEscape:c=!0,showCloseButton:ne=!0,children:oe,className:re="",...le})=>{const b=typeof document<"u"?document.body:null;e.useEffect(()=>{if(!n||!c)return;const m=ie=>{ie.key==="Escape"&&a()};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[n,c,a]),e.useEffect(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[n]);const se={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl",full:"max-w-full mx-4"},ce={default:"bg-white text-gray-900",primary:"bg-[var(--primary,#2563eb)] text-[var(--primary-text,#fff)]",secondary:"bg-[var(--secondary,#fbbf24)] text-[var(--secondary-text,#222)]"},de={default:"text-gray-400 hover:text-gray-600",primary:"text-[var(--primary-text,#fff)] hover:opacity-80",secondary:"text-[var(--secondary-text,#222)] hover:opacity-80"};if(!b||!n)return null;const me=e.createElement("div",{className:s("fixed inset-0 z-50 flex items-center justify-center p-4",n?"pointer-events-auto":"pointer-events-none")},e.createElement("div",{className:s("absolute inset-0 bg-black/50 transition-opacity duration-200",n?"opacity-100":"opacity-0"),onClick:m=>{d&&m.target===m.currentTarget&&a()}}),e.createElement("div",{role:"dialog","aria-modal":!0,className:s("relative rounded-lg shadow-xl w-full transition-all duration-200",se[l],ce[r],n?"scale-100 opacity-100":"scale-95 opacity-0",re),...le},ne&&e.createElement("button",{onClick:a,className:s("absolute top-4 right-4 transition-colors",de[r]),"aria-label":"Fechar modal"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))),e.createElement("div",{className:"p-6"},oe)));return ue.createPortal(me,b)};t.Header=function({children:a,className:l="",...r}){return e.createElement("div",{className:s("mb-4 pr-8",l),...r},a)};t.Body=function({children:a,className:l="",...r}){return e.createElement("div",{className:s("mb-4",l),...r},a)};t.Footer=function({children:a,className:l="",...r}){return e.createElement("div",{className:s("flex justify-end gap-2 mt-6 pt-4 border-t border-gray-200",l),...r},a)};const Be={title:"Components/Modal",component:t,tags:["autodocs"]},i={render:()=>{const[n,a]=e.useState(!1);return e.createElement("div",{className:"p-8"},e.createElement(o,{onClick:()=>a(!0)},"Abrir Modal Básico"),e.createElement(t,{open:n,onClose:()=>a(!1)},e.createElement("h2",{className:"text-xl font-bold mb-2"},"Título do Modal"),e.createElement("p",{className:"text-gray-600"},"Este é um modal básico com conteúdo simples.")))}},u={render:()=>{const[n,a]=e.useState(!1);return e.createElement("div",{className:"p-8"},e.createElement(o,{onClick:()=>a(!0)},"Abrir Modal Estruturado"),e.createElement(t,{open:n,onClose:()=>a(!1)},e.createElement(t.Header,null,e.createElement("h2",{className:"text-2xl font-bold"},"Confirmar Ação"),e.createElement("p",{className:"text-sm text-gray-500 mt-1"},"Esta ação não poderá ser desfeita")),e.createElement(t.Body,null,e.createElement("p",{className:"text-gray-700"},"Você tem certeza que deseja continuar com esta operação? Todos os dados serão processados e salvos permanentemente.")),e.createElement(t.Footer,null,e.createElement(o,{variant:"outline",onClick:()=>a(!1)},"Cancelar"),e.createElement(o,{onClick:()=>a(!1)},"Confirmar"))))}},p={render:()=>{const[n,a]=e.useState(!1);return e.createElement("div",{className:"p-8"},e.createElement(o,{onClick:()=>a(!0)},"Modal Pequeno"),e.createElement(t,{open:n,onClose:()=>a(!1),size:"sm"},e.createElement(t.Header,null,e.createElement("h2",{className:"text-xl font-bold"},"Modal Pequeno")),e.createElement(t.Body,null,e.createElement("p",{className:"text-sm text-gray-600"},"Este é um modal com tamanho pequeno (sm).")),e.createElement(t.Footer,null,e.createElement(o,{onClick:()=>a(!1)},"OK"))))}},f={render:()=>{const[n,a]=e.useState(!1);return e.createElement("div",{className:"p-8"},e.createElement(o,{onClick:()=>a(!0)},"Modal Grande"),e.createElement(t,{open:n,onClose:()=>a(!1),size:"lg"},e.createElement(t.Header,null,e.createElement("h2",{className:"text-2xl font-bold"},"Modal Grande")),e.createElement(t.Body,null,e.createElement("p",{className:"text-gray-700 mb-4"},"Este é um modal com tamanho grande (lg). Ideal para conteúdos mais extensos ou formulários complexos."),e.createElement("p",{className:"text-gray-700"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),e.createElement(t.Footer,null,e.createElement(o,{variant:"outline",onClick:()=>a(!1)},"Fechar"))))}},y={render:()=>{const[n,a]=e.useState(!1),l=pe(),r=d=>{console.log("Form data:",d),a(!1),l.reset()};return e.createElement("div",{className:"p-8"},e.createElement(o,{onClick:()=>a(!0)},"Abrir Formulário"),e.createElement(t,{open:n,onClose:()=>a(!1),size:"md"},e.createElement(fe,{...l},e.createElement("form",{onSubmit:l.handleSubmit(r)},e.createElement(t.Header,null,e.createElement("h2",{className:"text-2xl font-bold"},"Novo Cadastro"),e.createElement("p",{className:"text-sm text-gray-500 mt-1"},"Preencha os dados abaixo")),e.createElement(t.Body,null,e.createElement("div",{className:"space-y-4"},e.createElement(B,{label:"Nome completo",name:"name",required:!0}),e.createElement(B,{label:"E-mail",name:"email",type:"email",required:!0}),e.createElement(B,{label:"Telefone",name:"phone"}))),e.createElement(t.Footer,null,e.createElement(o,{type:"button",variant:"outline",onClick:()=>a(!1)},"Cancelar"),e.createElement(o,{type:"submit"},"Salvar"))))))}},E={render:()=>{const[n,a]=e.useState(!1);return e.createElement("div",{className:"p-8"},e.createElement(o,{onClick:()=>a(!0)},"Modal sem X"),e.createElement(t,{open:n,onClose:()=>a(!1),showCloseButton:!1},e.createElement(t.Header,null,e.createElement("h2",{className:"text-xl font-bold"},"Atenção")),e.createElement(t.Body,null,e.createElement("p",{className:"text-gray-700"},"Este modal não possui o botão X de fechar. Use os botões abaixo.")),e.createElement(t.Footer,null,e.createElement(o,{onClick:()=>a(!1)},"Entendi"))))}},x={render:()=>{const[n,a]=e.useState(!1);return e.createElement("div",{className:"p-8"},e.createElement(o,{onClick:()=>a(!0)},"Modal Bloqueado"),e.createElement(t,{open:n,onClose:()=>a(!1),closeOnOverlayClick:!1,closeOnEscape:!1},e.createElement(t.Header,null,e.createElement("h2",{className:"text-xl font-bold text-orange-600"},"⚠️ Importante")),e.createElement(t.Body,null,e.createElement("p",{className:"text-gray-700"},"Este modal não fecha ao clicar fora nem ao pressionar ESC. Você deve usar o botão abaixo.")),e.createElement(t.Footer,null,e.createElement(o,{onClick:()=>a(!1)},"Fechar Modal"))))}},M={render:()=>{const[n,a]=e.useState(!1);return e.createElement("div",{className:"p-8"},e.createElement(o,{onClick:()=>a(!0)},"Modal Largura Total"),e.createElement(t,{open:n,onClose:()=>a(!1),size:"full"},e.createElement(t.Header,null,e.createElement("h2",{className:"text-2xl font-bold"},"Modal em Largura Total")),e.createElement(t.Body,null,e.createElement("p",{className:"text-gray-700 mb-4"},"Este modal ocupa quase toda a largura da tela (com margem de segurança)."),e.createElement("div",{className:"grid grid-cols-3 gap-4"},e.createElement("div",{className:"p-4 bg-gray-100 rounded"},"Coluna 1"),e.createElement("div",{className:"p-4 bg-gray-100 rounded"},"Coluna 2"),e.createElement("div",{className:"p-4 bg-gray-100 rounded"},"Coluna 3"))),e.createElement(t.Footer,null,e.createElement(o,{onClick:()=>a(!1)},"Fechar"))))}},v={render:()=>{const[n,a]=e.useState(!1);return e.createElement("div",{className:"p-8"},e.createElement(o,{onClick:()=>a(!0)},"Modal Primary"),e.createElement(t,{open:n,onClose:()=>a(!1),variant:"primary"},e.createElement(t.Header,null,e.createElement("h2",{className:"text-2xl font-bold"},"Modal com Cor Primária"),e.createElement("p",{className:"text-sm opacity-90 mt-1"},"Background usa a cor primária da aplicação")),e.createElement(t.Body,null,e.createElement("p",{className:"opacity-95"},"Este modal utiliza a variável CSS ",e.createElement("code",null,"--primary")," para o background e ",e.createElement("code",null,"--primary-text")," para o texto. Perfeito para destacar ações importantes ou fluxos principais da aplicação.")),e.createElement(t.Footer,null,e.createElement(o,{variant:"outline",onClick:()=>a(!1)},"Fechar"))))}},C={render:()=>{const[n,a]=e.useState(!1);return e.createElement("div",{className:"p-8"},e.createElement(o,{onClick:()=>a(!0),variant:"secondary"},"Modal Secondary"),e.createElement(t,{open:n,onClose:()=>a(!1),variant:"secondary"},e.createElement(t.Header,null,e.createElement("h2",{className:"text-2xl font-bold"},"Modal com Cor Secundária"),e.createElement("p",{className:"text-sm opacity-90 mt-1"},"Background usa a cor secundária da aplicação")),e.createElement(t.Body,null,e.createElement("p",{className:"opacity-95"},"Este modal utiliza a variável CSS ",e.createElement("code",null,"--secondary")," para o background e ",e.createElement("code",null,"--secondary-text")," para o texto. Ideal para avisos ou ações alternativas.")),e.createElement(t.Footer,null,e.createElement(o,{variant:"secondary",onClick:()=>a(!1)},"Fechar"))))}},N={render:()=>{const[n,a]=e.useState(!1),[l,r]=e.useState(!1),[d,c]=e.useState(!1);return e.createElement("div",{className:"p-8"},e.createElement("h2",{className:"text-2xl font-bold mb-6"},"Todas as Variantes de Modal"),e.createElement("div",{className:"flex flex-wrap gap-4"},e.createElement(o,{onClick:()=>a(!0)},"Default"),e.createElement(o,{onClick:()=>r(!0)},"Primary"),e.createElement(o,{onClick:()=>c(!0),variant:"secondary"},"Secondary")),e.createElement(t,{open:n,onClose:()=>a(!1)},e.createElement(t.Header,null,e.createElement("h3",{className:"text-xl font-bold"},"Variante Default")),e.createElement(t.Body,null,e.createElement("p",null,"Background branco, texto escuro. Neutro e versátil.")),e.createElement(t.Footer,null,e.createElement(o,{onClick:()=>a(!1)},"Fechar"))),e.createElement(t,{open:l,onClose:()=>r(!1),variant:"primary"},e.createElement(t.Header,null,e.createElement("h3",{className:"text-xl font-bold"},"Variante Primary")),e.createElement(t.Body,null,e.createElement("p",{className:"opacity-95"},"Usa as cores primárias da aplicação. Destaque e ênfase.")),e.createElement(t.Footer,null,e.createElement(o,{variant:"outline",onClick:()=>r(!1)},"Fechar"))),e.createElement(t,{open:d,onClose:()=>c(!1),variant:"secondary"},e.createElement(t.Header,null,e.createElement("h3",{className:"text-xl font-bold"},"Variante Secondary")),e.createElement(t.Body,null,e.createElement("p",{className:"opacity-95"},"Usa as cores secundárias da aplicação. Alternativa visual.")),e.createElement(t.Footer,null,e.createElement(o,{variant:"secondary",onClick:()=>c(!1)},"Fechar"))))}};var g,h,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div className="p-8">
        <Button onClick={() => setOpen(true)}>Abrir Modal Básico</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <h2 className="text-xl font-bold mb-2">Título do Modal</h2>
          <p className="text-gray-600">
            Este é um modal básico com conteúdo simples.
          </p>
        </Modal>
      </div>;
  }
}`,...(S=(h=i.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var O,k,F;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div className="p-8">
        <Button onClick={() => setOpen(true)}>Abrir Modal Estruturado</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Modal.Header>
            <h2 className="text-2xl font-bold">Confirmar Ação</h2>
            <p className="text-sm text-gray-500 mt-1">
              Esta ação não poderá ser desfeita
            </p>
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              Você tem certeza que deseja continuar com esta operação? Todos os
              dados serão processados e salvos permanentemente.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={() => setOpen(false)}>Confirmar</Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}`,...(F=(k=u.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var H,P,w;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div className="p-8">
        <Button onClick={() => setOpen(true)}>Modal Pequeno</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="sm">
          <Modal.Header>
            <h2 className="text-xl font-bold">Modal Pequeno</h2>
          </Modal.Header>
          <Modal.Body>
            <p className="text-sm text-gray-600">
              Este é um modal com tamanho pequeno (sm).
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpen(false)}>OK</Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}`,...(w=(P=p.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var q,z,V;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div className="p-8">
        <Button onClick={() => setOpen(true)}>Modal Grande</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="lg">
          <Modal.Header>
            <h2 className="text-2xl font-bold">Modal Grande</h2>
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700 mb-4">
              Este é um modal com tamanho grande (lg). Ideal para conteúdos mais
              extensos ou formulários complexos.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}`,...(V=(z=f.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var R,D,A;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const methods = useForm();
    const onSubmit = (data: any) => {
      console.log("Form data:", data);
      setOpen(false);
      methods.reset();
    };
    return <div className="p-8">
        <Button onClick={() => setOpen(true)}>Abrir Formulário</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="md">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Modal.Header>
                <h2 className="text-2xl font-bold">Novo Cadastro</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Preencha os dados abaixo
                </p>
              </Modal.Header>
              <Modal.Body>
                <div className="space-y-4">
                  <Input label="Nome completo" name="name" required />
                  <Input label="E-mail" name="email" type="email" required />
                  <Input label="Telefone" name="phone" />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">Salvar</Button>
              </Modal.Footer>
            </form>
          </FormProvider>
        </Modal>
      </div>;
  }
}`,...(A=(D=y.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var L,T,I;E.parameters={...E.parameters,docs:{...(L=E.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div className="p-8">
        <Button onClick={() => setOpen(true)}>Modal sem X</Button>
        <Modal open={open} onClose={() => setOpen(false)} showCloseButton={false}>
          <Modal.Header>
            <h2 className="text-xl font-bold">Atenção</h2>
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              Este modal não possui o botão X de fechar. Use os botões abaixo.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpen(false)}>Entendi</Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}`,...(I=(T=E.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var W,U,j;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div className="p-8">
        <Button onClick={() => setOpen(true)}>Modal Bloqueado</Button>
        <Modal open={open} onClose={() => setOpen(false)} closeOnOverlayClick={false} closeOnEscape={false}>
          <Modal.Header>
            <h2 className="text-xl font-bold text-orange-600">⚠️ Importante</h2>
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              Este modal não fecha ao clicar fora nem ao pressionar ESC. Você
              deve usar o botão abaixo.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpen(false)}>Fechar Modal</Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}`,...(j=(U=x.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var G,X,K;M.parameters={...M.parameters,docs:{...(G=M.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div className="p-8">
        <Button onClick={() => setOpen(true)}>Modal Largura Total</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="full">
          <Modal.Header>
            <h2 className="text-2xl font-bold">Modal em Largura Total</h2>
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700 mb-4">
              Este modal ocupa quase toda a largura da tela (com margem de segurança).
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gray-100 rounded">Coluna 1</div>
              <div className="p-4 bg-gray-100 rounded">Coluna 2</div>
              <div className="p-4 bg-gray-100 rounded">Coluna 3</div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpen(false)}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}`,...(K=(X=M.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var _,J,Q;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div className="p-8">
        <Button onClick={() => setOpen(true)}>Modal Primary</Button>
        <Modal open={open} onClose={() => setOpen(false)} variant="primary">
          <Modal.Header>
            <h2 className="text-2xl font-bold">Modal com Cor Primária</h2>
            <p className="text-sm opacity-90 mt-1">
              Background usa a cor primária da aplicação
            </p>
          </Modal.Header>
          <Modal.Body>
            <p className="opacity-95">
              Este modal utiliza a variável CSS <code>--primary</code> para o
              background e <code>--primary-text</code> para o texto. Perfeito para
              destacar ações importantes ou fluxos principais da aplicação.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,$;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div className="p-8">
        <Button onClick={() => setOpen(true)} variant="secondary">
          Modal Secondary
        </Button>
        <Modal open={open} onClose={() => setOpen(false)} variant="secondary">
          <Modal.Header>
            <h2 className="text-2xl font-bold">Modal com Cor Secundária</h2>
            <p className="text-sm opacity-90 mt-1">
              Background usa a cor secundária da aplicação
            </p>
          </Modal.Header>
          <Modal.Body>
            <p className="opacity-95">
              Este modal utiliza a variável CSS <code>--secondary</code> para o
              background e <code>--secondary-text</code> para o texto. Ideal para
              avisos ou ações alternativas.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}`,...($=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,te;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [openDefault, setOpenDefault] = React.useState(false);
    const [openPrimary, setOpenPrimary] = React.useState(false);
    const [openSecondary, setOpenSecondary] = React.useState(false);
    return <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Todas as Variantes de Modal</h2>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => setOpenDefault(true)}>Default</Button>
          <Button onClick={() => setOpenPrimary(true)}>Primary</Button>
          <Button onClick={() => setOpenSecondary(true)} variant="secondary">
            Secondary
          </Button>
        </div>

        <Modal open={openDefault} onClose={() => setOpenDefault(false)}>
          <Modal.Header>
            <h3 className="text-xl font-bold">Variante Default</h3>
          </Modal.Header>
          <Modal.Body>
            <p>Background branco, texto escuro. Neutro e versátil.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenDefault(false)}>Fechar</Button>
          </Modal.Footer>
        </Modal>

        <Modal open={openPrimary} onClose={() => setOpenPrimary(false)} variant="primary">
          <Modal.Header>
            <h3 className="text-xl font-bold">Variante Primary</h3>
          </Modal.Header>
          <Modal.Body>
            <p className="opacity-95">
              Usa as cores primárias da aplicação. Destaque e ênfase.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline" onClick={() => setOpenPrimary(false)}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal open={openSecondary} onClose={() => setOpenSecondary(false)} variant="secondary">
          <Modal.Header>
            <h3 className="text-xl font-bold">Variante Secondary</h3>
          </Modal.Header>
          <Modal.Body>
            <p className="opacity-95">
              Usa as cores secundárias da aplicação. Alternativa visual.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setOpenSecondary(false)}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}`,...(te=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const be=["Basic","WithStructure","SmallSize","LargeSize","WithForm","NoCloseButton","NoOverlayClose","FullWidth","PrimaryVariant","SecondaryVariant","AllVariants"];export{N as AllVariants,i as Basic,M as FullWidth,f as LargeSize,E as NoCloseButton,x as NoOverlayClose,v as PrimaryVariant,C as SecondaryVariant,p as SmallSize,y as WithForm,u as WithStructure,be as __namedExportsOrder,Be as default};
