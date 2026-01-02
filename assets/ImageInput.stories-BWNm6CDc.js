import{r as d,R as e}from"./iframe-CB-4TmZU.js";import{c as x}from"./utils-CuF-iVWQ.js";const c=({avatar:a=!1,value:t,onUpload:s,onRemove:i,accept:o="image/*",maxSize:m,placeholder:n="Selecionar imagem",loading:l=!1,size:r="md",label:v,error:F,disabled:T,className:be,...ye})=>{const[C,h]=d.useState(null),[xe,b]=d.useState(""),[Ie,D]=d.useState(!1),p=d.useRef(null),Ee=!!t,k=!!C,g=Ee||k,f=l||Ie,we={sm:a?"w-16 h-16":"w-24 h-16",md:a?"w-24 h-24":"w-32 h-24",lg:a?"w-32 h-32":"w-40 h-32"},M=n||(a?"Adicionar foto":"Selecionar imagem"),Se=u=>{var j;const y=(j=u.target.files)==null?void 0:j[0];if(!y)return;if(m&&y.size>m){alert(`Arquivo muito grande. Tamanho máximo: ${(m/1024/1024).toFixed(1)}MB`);return}const W=new FileReader;W.onload=Pe=>{var B;b((B=Pe.target)==null?void 0:B.result),h(y)},W.readAsDataURL(y)},Re=async()=>{if(!(!C||!s))try{D(!0);const u=await s(C);h(null),b(""),p.current&&(p.current.value="")}catch(u){console.error("Erro ao fazer upload:",u),alert("Erro ao fazer upload da imagem")}finally{D(!1)}},Ue=()=>{h(null),b(""),p.current&&(p.current.value="")},Ne=async()=>{try{i&&await i(t),h(null),b(""),p.current&&(p.current.value="")}catch(u){console.error("Erro ao remover imagem:",u),alert("Erro ao remover imagem")}},ze=()=>{var u;T||f||(u=p.current)==null||u.click()},Le=xe||t;return e.createElement("div",{className:x("flex flex-col space-y-2",be)},v&&e.createElement("label",{className:"text-sm font-medium text-gray-700"},v),e.createElement("div",{className:"relative flex flex-col items-center"},e.createElement("input",{ref:p,type:"file",accept:o,onChange:Se,disabled:T||f,className:"hidden",...ye}),e.createElement("div",{onClick:ze,className:x("relative border-2 border-dashed border-gray-300 transition-colors cursor-pointer","hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",a?"rounded-full":"rounded-lg",we[r],T&&"opacity-50 cursor-not-allowed",f&&"cursor-wait",F&&"border-red-300",!g&&"bg-gray-50 hover:bg-gray-100",g&&"border-solid border-gray-200")},g?e.createElement("img",{src:Le,alt:"Preview",className:x("w-full h-full object-cover",a?"rounded-full":"rounded-lg")}):e.createElement("div",{className:"flex flex-col items-center justify-center h-full text-gray-500 text-sm"},a?e.createElement(e.Fragment,null,e.createElement("svg",{className:"w-8 h-8 mb-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})),e.createElement("span",{className:"text-center px-2 text-xs"},M)):e.createElement(e.Fragment,null,e.createElement("svg",{className:"w-6 h-6 mb-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})),e.createElement("span",{className:"text-center px-2"},M))),f&&e.createElement("div",{className:x("absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",a?"rounded-full":"rounded-lg")},e.createElement("div",{className:"w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"}))),g&&!f&&e.createElement("div",{className:"flex justify-center space-x-2 mt-3"},k?e.createElement(e.Fragment,null,e.createElement("button",{onClick:Re,disabled:!s,className:"px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"},"Confirmar"),e.createElement("button",{onClick:Ue,className:"px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700"},"Cancelar")):e.createElement("button",{onClick:Ne,disabled:!i,className:"px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"},"Remover"))),F&&e.createElement("p",{className:"text-sm text-red-600"},F),m&&!g&&e.createElement("p",{className:"text-xs text-gray-500"},"Tamanho máximo: ",(m/1024/1024).toFixed(1),"MB"),a&&!g&&e.createElement("p",{className:"text-xs text-gray-500 text-center"},"Use uma foto com seu rosto centralizado e bem visível"))};c.__docgenInfo={description:"",methods:[],displayName:"ImageInput",props:{name:{required:!1,tsType:{name:"string"},description:"Nome do campo (para integração com forms)"},label:{required:!1,tsType:{name:"string"},description:"Label do campo"},disabled:{required:!1,tsType:{name:"boolean"},description:"Se o campo está desabilitado"},error:{required:!1,tsType:{name:"string"},description:"Mensagem de erro"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS adicionais"},avatar:{required:!1,tsType:{name:"boolean"},description:"Se true, exibe o input em formato circular (ideal para avatars)",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"URL da imagem atual (para exibir imagem já salva)"},onUpload:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => Promise<string> | string",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"union",raw:"Promise<string> | string",elements:[{name:"Promise",elements:[{name:"string"}],raw:"Promise<string>"},{name:"string"}]}}},description:"Callback chamado quando o usuário confirma o upload da imagem selecionada"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(imageUrl?: string) => Promise<void> | void",signature:{arguments:[{type:{name:"string"},name:"imageUrl"}],return:{name:"union",raw:"Promise<void> | void",elements:[{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"},{name:"void"}]}}},description:"Callback chamado quando o usuário remove a imagem"},accept:{required:!1,tsType:{name:"string"},description:'Tipos de arquivo aceitos (padrão: "image/*")',defaultValue:{value:'"image/*"',computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:"Tamanho máximo do arquivo em bytes"},placeholder:{required:!1,tsType:{name:"string"},description:"Texto exibido quando não há imagem",defaultValue:{value:'"Selecionar imagem"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Se true, mostra estado de loading durante upload",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Tamanho do componente",defaultValue:{value:"'md'",computed:!1}}}};const qe={title:"Components/ImageInput",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{avatar:{control:"boolean"},size:{control:{type:"select"},options:["sm","md","lg"]},accept:{control:"text"},maxSize:{control:"number"},placeholder:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean"}}},q=a=>new Promise(t=>{setTimeout(()=>{t(`https://example.com/uploaded/${a.name}`)},2e3)}),A=a=>new Promise(t=>{console.log("Removendo imagem:",a),setTimeout(()=>{t()},1e3)}),I={args:{label:"Selecionar Imagem",placeholder:"Clique para adicionar uma imagem"}},E={args:{avatar:!0,label:"Foto do Perfil",placeholder:"Adicionar avatar",size:"md"}},w={render:a=>{const[t,s]=d.useState(""),[i,o]=d.useState(!1),m=async l=>{o(!0);try{const r=await q(l);return s(r),r}finally{o(!1)}},n=async l=>{o(!0);try{await A(l),s("")}finally{o(!1)}};return React.createElement(c,{...a,value:t,onUpload:m,onRemove:n,loading:i})},args:{label:"Upload com Função",placeholder:"Selecionar e fazer upload"}},S={render:a=>{const[t,s]=d.useState("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"),[i,o]=d.useState(!1),m=async l=>{o(!0);try{const r=await q(l);return s(r),r}finally{o(!1)}},n=async l=>{o(!0);try{await A(l),s("")}finally{o(!1)}};return React.createElement(c,{...a,value:t,onUpload:m,onRemove:n,loading:i})},args:{avatar:!0,label:"Avatar Existente",size:"lg"}},R={render:()=>React.createElement("div",{className:"space-y-6"},React.createElement("div",null,React.createElement("h3",{className:"text-lg font-medium mb-4"},"Tamanhos Normais"),React.createElement("div",{className:"flex space-x-4 items-start"},React.createElement(c,{size:"sm",label:"Small",placeholder:"Pequeno"}),React.createElement(c,{size:"md",label:"Medium",placeholder:"Médio"}),React.createElement(c,{size:"lg",label:"Large",placeholder:"Grande"}))),React.createElement("div",null,React.createElement("h3",{className:"text-lg font-medium mb-4"},"Tamanhos Avatar"),React.createElement("div",{className:"flex space-x-4 items-start"},React.createElement(c,{avatar:!0,size:"sm",label:"Small Avatar"}),React.createElement(c,{avatar:!0,size:"md",label:"Medium Avatar"}),React.createElement(c,{avatar:!0,size:"lg",label:"Large Avatar"}))))},U={args:{label:"Imagem com Validação",maxSize:2*1024*1024,accept:"image/jpeg,image/png",placeholder:"Apenas JPG/PNG até 2MB"}},N={args:{label:"Campo Desabilitado",disabled:!0,placeholder:"Não é possível selecionar"}},z={args:{label:"Campo com Erro",error:"Formato de imagem inválido",placeholder:"Selecionar imagem"}},L={args:{label:"Estado de Loading",loading:!0,value:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"}},P={render:()=>{const[a,t]=d.useState({profileImage:"",coverImage:""}),[s,i]=d.useState({}),o=n=>async l=>{i(r=>({...r,[n]:!0}));try{const r=await q(l);return t(v=>({...v,[n]:r})),r}finally{i(r=>({...r,[n]:!1}))}},m=n=>async l=>{i(r=>({...r,[n]:!0}));try{await A(l),t(r=>({...r,[n]:""}))}finally{i(r=>({...r,[n]:!1}))}};return React.createElement("div",{className:"space-y-6 max-w-md"},React.createElement("h3",{className:"text-lg font-medium"},"Formulário de Perfil"),React.createElement(c,{name:"profileImage",label:"Foto do Perfil",avatar:!0,size:"lg",value:a.profileImage,onUpload:o("profileImage"),onRemove:m("profileImage"),loading:s.profileImage,maxSize:1024*1024}),React.createElement(c,{name:"coverImage",label:"Imagem de Capa",value:a.coverImage,onUpload:o("coverImage"),onRemove:m("coverImage"),loading:s.coverImage,maxSize:5*1024*1024,placeholder:"Adicionar capa do perfil"}),React.createElement("div",{className:"p-4 bg-gray-100 rounded text-sm"},React.createElement("strong",null,"Dados do formulário:"),React.createElement("pre",{className:"mt-2 text-xs"},JSON.stringify(a,null,2))))}};var V,G,J;I.parameters={...I.parameters,docs:{...(V=I.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Selecionar Imagem',
    placeholder: 'Clique para adicionar uma imagem'
  }
}`,...(J=(G=I.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var _,O,$;E.parameters={...E.parameters,docs:{...(_=E.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    avatar: true,
    label: 'Foto do Perfil',
    placeholder: 'Adicionar avatar',
    size: 'md'
  }
}`,...($=(O=E.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var H,K,Q;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,oe,ne;U.parameters={...U.parameters,docs:{...(te=U.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Imagem com Validação',
    maxSize: 2 * 1024 * 1024,
    // 2MB
    accept: 'image/jpeg,image/png',
    placeholder: 'Apenas JPG/PNG até 2MB'
  }
}`,...(ne=(oe=U.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,se,ie;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Campo Desabilitado',
    disabled: true,
    placeholder: 'Não é possível selecionar'
  }
}`,...(ie=(se=N.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var me,ce,de;z.parameters={...z.parameters,docs:{...(me=z.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: 'Campo com Erro',
    error: 'Formato de imagem inválido',
    placeholder: 'Selecionar imagem'
  }
}`,...(de=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,ge;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'Estado de Loading',
    loading: true,
    value: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  }
}`,...(ge=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var fe,ve,he;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};const Ae=["Default","Avatar","WithUploadFunction","AvatarWithExistingImage","LargeSizes","WithValidation","Disabled","WithError","Loading","WithFormIntegration"];export{E as Avatar,S as AvatarWithExistingImage,I as Default,N as Disabled,R as LargeSizes,L as Loading,z as WithError,P as WithFormIntegration,w as WithUploadFunction,U as WithValidation,Ae as __namedExportsOrder,qe as default};
