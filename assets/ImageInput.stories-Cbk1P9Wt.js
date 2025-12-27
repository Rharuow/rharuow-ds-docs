import{r as d,R as a}from"./iframe-ByqLMeo7.js";import{c as I}from"./utils-CuF-iVWQ.js";const c=({avatar:r=!1,value:t,onUpload:s,onRemove:i,accept:o="image/*",maxSize:m,placeholder:n="Selecionar imagem",loading:l=!1,size:e="md",label:v,error:P,disabled:T,className:he,...be})=>{const[C,h]=d.useState(null),[ye,b]=d.useState(""),[Ie,D]=d.useState(!1),p=d.useRef(null),xe=!!t,M=!!C,g=xe||M,f=l||Ie,Ee={sm:r?"w-16 h-16":"w-24 h-16",md:r?"w-24 h-24":"w-32 h-24",lg:r?"w-32 h-32":"w-40 h-32"},Re=u=>{var W;const y=(W=u.target.files)==null?void 0:W[0];if(!y)return;if(m&&y.size>m){alert(`Arquivo muito grande. Tamanho máximo: ${(m/1024/1024).toFixed(1)}MB`);return}const k=new FileReader;k.onload=ze=>{var V;b((V=ze.target)==null?void 0:V.result),h(y)},k.readAsDataURL(y)},Se=async()=>{if(!(!C||!s))try{D(!0);const u=await s(C);h(null),b(""),p.current&&(p.current.value="")}catch(u){console.error("Erro ao fazer upload:",u),alert("Erro ao fazer upload da imagem")}finally{D(!1)}},we=()=>{h(null),b(""),p.current&&(p.current.value="")},Ue=async()=>{try{i&&await i(t),h(null),b(""),p.current&&(p.current.value="")}catch(u){console.error("Erro ao remover imagem:",u),alert("Erro ao remover imagem")}},Ne=()=>{var u;T||f||(u=p.current)==null||u.click()},Le=ye||t;return a.createElement("div",{className:I("flex flex-col space-y-2",he)},v&&a.createElement("label",{className:"text-sm font-medium text-gray-700"},v),a.createElement("div",{className:"relative"},a.createElement("input",{ref:p,type:"file",accept:o,onChange:Re,disabled:T||f,className:"hidden",...be}),a.createElement("div",{onClick:Ne,className:I("relative border-2 border-dashed border-gray-300 transition-colors cursor-pointer","hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",r?"rounded-full":"rounded-lg",Ee[e],T&&"opacity-50 cursor-not-allowed",f&&"cursor-wait",P&&"border-red-300",!g&&"bg-gray-50 hover:bg-gray-100",g&&"border-solid border-gray-200")},g?a.createElement("img",{src:Le,alt:"Preview",className:I("w-full h-full object-cover",r?"rounded-full":"rounded-lg")}):a.createElement("div",{className:"flex flex-col items-center justify-center h-full text-gray-500 text-sm"},a.createElement("svg",{className:"w-6 h-6 mb-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})),a.createElement("span",{className:"text-center px-2"},n)),f&&a.createElement("div",{className:I("absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",r?"rounded-full":"rounded-lg")},a.createElement("div",{className:"w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"}))),g&&!f&&a.createElement("div",{className:"flex justify-center space-x-2 mt-3"},M?a.createElement(a.Fragment,null,a.createElement("button",{onClick:Se,disabled:!s,className:"px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"},"Confirmar"),a.createElement("button",{onClick:we,className:"px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700"},"Cancelar")):a.createElement("button",{onClick:Ue,disabled:!i,className:"px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"},"Remover"))),P&&a.createElement("p",{className:"text-sm text-red-600"},P),m&&!g&&a.createElement("p",{className:"text-xs text-gray-500"},"Tamanho máximo: ",(m/1024/1024).toFixed(1),"MB"))};c.__docgenInfo={description:"",methods:[],displayName:"ImageInput",props:{name:{required:!1,tsType:{name:"string"},description:"Nome do campo (para integração com forms)"},label:{required:!1,tsType:{name:"string"},description:"Label do campo"},disabled:{required:!1,tsType:{name:"boolean"},description:"Se o campo está desabilitado"},error:{required:!1,tsType:{name:"string"},description:"Mensagem de erro"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS adicionais"},avatar:{required:!1,tsType:{name:"boolean"},description:"Se true, exibe o input em formato circular (ideal para avatars)",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"URL da imagem atual (para exibir imagem já salva)"},onUpload:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => Promise<string> | string",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"union",raw:"Promise<string> | string",elements:[{name:"Promise",elements:[{name:"string"}],raw:"Promise<string>"},{name:"string"}]}}},description:"Callback chamado quando o usuário confirma o upload da imagem selecionada"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(imageUrl?: string) => Promise<void> | void",signature:{arguments:[{type:{name:"string"},name:"imageUrl"}],return:{name:"union",raw:"Promise<void> | void",elements:[{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"},{name:"void"}]}}},description:"Callback chamado quando o usuário remove a imagem"},accept:{required:!1,tsType:{name:"string"},description:'Tipos de arquivo aceitos (padrão: "image/*")',defaultValue:{value:'"image/*"',computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:"Tamanho máximo do arquivo em bytes"},placeholder:{required:!1,tsType:{name:"string"},description:"Texto exibido quando não há imagem",defaultValue:{value:'"Selecionar imagem"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Se true, mostra estado de loading durante upload",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Tamanho do componente",defaultValue:{value:"'md'",computed:!1}}}};const Te={title:"Components/ImageInput",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{avatar:{control:"boolean"},size:{control:{type:"select"},options:["sm","md","lg"]},accept:{control:"text"},maxSize:{control:"number"},placeholder:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean"}}},q=r=>new Promise(t=>{setTimeout(()=>{t(`https://example.com/uploaded/${r.name}`)},2e3)}),A=r=>new Promise(t=>{console.log("Removendo imagem:",r),setTimeout(()=>{t()},1e3)}),x={args:{label:"Selecionar Imagem",placeholder:"Clique para adicionar uma imagem"}},E={args:{avatar:!0,label:"Foto do Perfil",placeholder:"Adicionar avatar",size:"md"}},R={render:r=>{const[t,s]=d.useState(""),[i,o]=d.useState(!1),m=async l=>{o(!0);try{const e=await q(l);return s(e),e}finally{o(!1)}},n=async l=>{o(!0);try{await A(l),s("")}finally{o(!1)}};return React.createElement(c,{...r,value:t,onUpload:m,onRemove:n,loading:i})},args:{label:"Upload com Função",placeholder:"Selecionar e fazer upload"}},S={render:r=>{const[t,s]=d.useState("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"),[i,o]=d.useState(!1),m=async l=>{o(!0);try{const e=await q(l);return s(e),e}finally{o(!1)}},n=async l=>{o(!0);try{await A(l),s("")}finally{o(!1)}};return React.createElement(c,{...r,value:t,onUpload:m,onRemove:n,loading:i})},args:{avatar:!0,label:"Avatar Existente",size:"lg"}},w={render:()=>React.createElement("div",{className:"space-y-6"},React.createElement("div",null,React.createElement("h3",{className:"text-lg font-medium mb-4"},"Tamanhos Normais"),React.createElement("div",{className:"flex space-x-4 items-start"},React.createElement(c,{size:"sm",label:"Small",placeholder:"Pequeno"}),React.createElement(c,{size:"md",label:"Medium",placeholder:"Médio"}),React.createElement(c,{size:"lg",label:"Large",placeholder:"Grande"}))),React.createElement("div",null,React.createElement("h3",{className:"text-lg font-medium mb-4"},"Tamanhos Avatar"),React.createElement("div",{className:"flex space-x-4 items-start"},React.createElement(c,{avatar:!0,size:"sm",label:"Small Avatar"}),React.createElement(c,{avatar:!0,size:"md",label:"Medium Avatar"}),React.createElement(c,{avatar:!0,size:"lg",label:"Large Avatar"}))))},U={args:{label:"Imagem com Validação",maxSize:2*1024*1024,accept:"image/jpeg,image/png",placeholder:"Apenas JPG/PNG até 2MB"}},N={args:{label:"Campo Desabilitado",disabled:!0,placeholder:"Não é possível selecionar"}},L={args:{label:"Campo com Erro",error:"Formato de imagem inválido",placeholder:"Selecionar imagem"}},z={args:{label:"Estado de Loading",loading:!0,value:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"}},F={render:()=>{const[r,t]=d.useState({profileImage:"",coverImage:""}),[s,i]=d.useState({}),o=n=>async l=>{i(e=>({...e,[n]:!0}));try{const e=await q(l);return t(v=>({...v,[n]:e})),e}finally{i(e=>({...e,[n]:!1}))}},m=n=>async l=>{i(e=>({...e,[n]:!0}));try{await A(l),t(e=>({...e,[n]:""}))}finally{i(e=>({...e,[n]:!1}))}};return React.createElement("div",{className:"space-y-6 max-w-md"},React.createElement("h3",{className:"text-lg font-medium"},"Formulário de Perfil"),React.createElement(c,{name:"profileImage",label:"Foto do Perfil",avatar:!0,size:"lg",value:r.profileImage,onUpload:o("profileImage"),onRemove:m("profileImage"),loading:s.profileImage,maxSize:1024*1024}),React.createElement(c,{name:"coverImage",label:"Imagem de Capa",value:r.coverImage,onUpload:o("coverImage"),onRemove:m("coverImage"),loading:s.coverImage,maxSize:5*1024*1024,placeholder:"Adicionar capa do perfil"}),React.createElement("div",{className:"p-4 bg-gray-100 rounded text-sm"},React.createElement("strong",null,"Dados do formulário:"),React.createElement("pre",{className:"mt-2 text-xs"},JSON.stringify(r,null,2))))}};var j,B,G;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Selecionar Imagem',
    placeholder: 'Clique para adicionar uma imagem'
  }
}`,...(G=(B=x.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,_,O;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    avatar: true,
    label: 'Foto do Perfil',
    placeholder: 'Adicionar avatar',
    size: 'md'
  }
}`,...(O=(_=E.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var $,H,K;R.parameters={...R.parameters,docs:{...($=R.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: (args: ImageInputProps) => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const handleUpload = async (file: File): Promise<string> => {
      setLoading(true);
      try {
        const url = await simulateUpload(file);
        setImageUrl(url);
        return url;
      } finally {
        setLoading(false);
      }
    };
    const handleRemove = async (url?: string) => {
      setLoading(true);
      try {
        await simulateRemove(url);
        setImageUrl('');
      } finally {
        setLoading(false);
      }
    };
    return <ImageInput {...args} value={imageUrl} onUpload={handleUpload} onRemove={handleRemove} loading={loading} />;
  },
  args: {
    label: 'Upload com Função',
    placeholder: 'Selecionar e fazer upload'
  }
}`,...(K=(H=R.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,X,Y;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: (args: ImageInputProps) => {
    const [imageUrl, setImageUrl] = useState<string>('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face');
    const [loading, setLoading] = useState(false);
    const handleUpload = async (file: File): Promise<string> => {
      setLoading(true);
      try {
        const url = await simulateUpload(file);
        setImageUrl(url);
        return url;
      } finally {
        setLoading(false);
      }
    };
    const handleRemove = async (url?: string) => {
      setLoading(true);
      try {
        await simulateRemove(url);
        setImageUrl('');
      } finally {
        setLoading(false);
      }
    };
    return <ImageInput {...args} value={imageUrl} onUpload={handleUpload} onRemove={handleRemove} loading={loading} />;
  },
  args: {
    avatar: true,
    label: 'Avatar Existente',
    size: 'lg'
  }
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Tamanhos Normais</h3>
        <div className="flex space-x-4 items-start">
          <ImageInput size="sm" label="Small" placeholder="Pequeno" />
          <ImageInput size="md" label="Medium" placeholder="Médio" />
          <ImageInput size="lg" label="Large" placeholder="Grande" />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Tamanhos Avatar</h3>
        <div className="flex space-x-4 items-start">
          <ImageInput avatar size="sm" label="Small Avatar" />
          <ImageInput avatar size="md" label="Medium Avatar" />
          <ImageInput avatar size="lg" label="Large Avatar" />
        </div>
      </div>
    </div>
}`,...(ae=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,oe;U.parameters={...U.parameters,docs:{...(re=U.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: 'Imagem com Validação',
    maxSize: 2 * 1024 * 1024,
    // 2MB
    accept: 'image/jpeg,image/png',
    placeholder: 'Apenas JPG/PNG até 2MB'
  }
}`,...(oe=(te=U.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,le,se;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'Campo Desabilitado',
    disabled: true,
    placeholder: 'Não é possível selecionar'
  }
}`,...(se=(le=N.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ie,me,ce;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Campo com Erro',
    error: 'Formato de imagem inválido',
    placeholder: 'Selecionar imagem'
  }
}`,...(ce=(me=L.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var de,ue,pe;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: 'Estado de Loading',
    loading: true,
    value: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  }
}`,...(pe=(ue=z.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,fe,ve;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      profileImage: '',
      coverImage: ''
    });
    const [loading, setLoading] = useState<Record<string, boolean>>({});
    const handleUpload = (field: string) => async (file: File): Promise<string> => {
      setLoading(prev => ({
        ...prev,
        [field]: true
      }));
      try {
        const url = await simulateUpload(file);
        setFormData(prev => ({
          ...prev,
          [field]: url
        }));
        return url;
      } finally {
        setLoading(prev => ({
          ...prev,
          [field]: false
        }));
      }
    };
    const handleRemove = (field: string) => async (url?: string) => {
      setLoading(prev => ({
        ...prev,
        [field]: true
      }));
      try {
        await simulateRemove(url);
        setFormData(prev => ({
          ...prev,
          [field]: ''
        }));
      } finally {
        setLoading(prev => ({
          ...prev,
          [field]: false
        }));
      }
    };
    return <div className="space-y-6 max-w-md">
        <h3 className="text-lg font-medium">Formulário de Perfil</h3>
        
        <ImageInput name="profileImage" label="Foto do Perfil" avatar size="lg" value={formData.profileImage} onUpload={handleUpload('profileImage')} onRemove={handleRemove('profileImage')} loading={loading.profileImage} maxSize={1024 * 1024} // 1MB
      />
        
        <ImageInput name="coverImage" label="Imagem de Capa" value={formData.coverImage} onUpload={handleUpload('coverImage')} onRemove={handleRemove('coverImage')} loading={loading.coverImage} maxSize={5 * 1024 * 1024} // 5MB
      placeholder="Adicionar capa do perfil" />

        <div className="p-4 bg-gray-100 rounded text-sm">
          <strong>Dados do formulário:</strong>
          <pre className="mt-2 text-xs">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>;
  }
}`,...(ve=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};const Ce=["Default","Avatar","WithUploadFunction","AvatarWithExistingImage","LargeSizes","WithValidation","Disabled","WithError","Loading","WithFormIntegration"];export{E as Avatar,S as AvatarWithExistingImage,x as Default,N as Disabled,w as LargeSizes,z as Loading,L as WithError,F as WithFormIntegration,R as WithUploadFunction,U as WithValidation,Ce as __namedExportsOrder,Te as default};
