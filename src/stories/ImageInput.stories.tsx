import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ImageInput, ImageInputProps } from '../components/ImageInput';

const meta: Meta<typeof ImageInput> = {
  title: 'Components/ImageInput',
  component: ImageInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    avatar: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    accept: { control: 'text' },
    maxSize: { control: 'number' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Simulação de upload (retorna URL após 2 segundos)
const simulateUpload = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simula uma URL de retorno (como seria com Cloudinary)
      resolve(`https://example.com/uploaded/${file.name}`);
    }, 2000);
  });
};

// Simulação de remoção
const simulateRemove = (imageUrl?: string): Promise<void> => {
  return new Promise((resolve) => {
    console.log('Removendo imagem:', imageUrl);
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export const Default: Story = {
  args: {
    label: 'Selecionar Imagem',
    placeholder: 'Clique para adicionar uma imagem',
  },
};

export const Avatar: Story = {
  args: {
    avatar: true,
    label: 'Foto do Perfil',
    placeholder: 'Adicionar avatar',
    size: 'md',
  },
};

export const WithUploadFunction: Story = {
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

    return (
      <ImageInput
        {...args}
        value={imageUrl}
        onUpload={handleUpload}
        onRemove={handleRemove}
        loading={loading}
      />
    );
  },
  args: {
    label: 'Upload com Função',
    placeholder: 'Selecionar e fazer upload',
  },
};

export const AvatarWithExistingImage: Story = {
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

    return (
      <ImageInput
        {...args}
        value={imageUrl}
        onUpload={handleUpload}
        onRemove={handleRemove}
        loading={loading}
      />
    );
  },
  args: {
    avatar: true,
    label: 'Avatar Existente',
    size: 'lg',
  },
};

export const LargeSizes: Story = {
  render: () => (
    <div className="space-y-6">
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
  ),
};

export const WithValidation: Story = {
  args: {
    label: 'Imagem com Validação',
    maxSize: 2 * 1024 * 1024, // 2MB
    accept: 'image/jpeg,image/png',
    placeholder: 'Apenas JPG/PNG até 2MB',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo Desabilitado',
    disabled: true,
    placeholder: 'Não é possível selecionar',
  },
};

export const WithError: Story = {
  args: {
    label: 'Campo com Erro',
    error: 'Formato de imagem inválido',
    placeholder: 'Selecionar imagem',
  },
};

export const Loading: Story = {
  args: {
    label: 'Estado de Loading',
    loading: true,
    value: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
};

// Exemplo completo com React Hook Form
export const WithFormIntegration: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      profileImage: '',
      coverImage: '',
    });
    const [loading, setLoading] = useState<Record<string, boolean>>({});

    const handleUpload = (field: string) => async (file: File): Promise<string> => {
      setLoading(prev => ({ ...prev, [field]: true }));
      try {
        const url = await simulateUpload(file);
        setFormData(prev => ({ ...prev, [field]: url }));
        return url;
      } finally {
        setLoading(prev => ({ ...prev, [field]: false }));
      }
    };

    const handleRemove = (field: string) => async (url?: string) => {
      setLoading(prev => ({ ...prev, [field]: true }));
      try {
        await simulateRemove(url);
        setFormData(prev => ({ ...prev, [field]: '' }));
      } finally {
        setLoading(prev => ({ ...prev, [field]: false }));
      }
    };

    return (
      <div className="space-y-6 max-w-md">
        <h3 className="text-lg font-medium">Formulário de Perfil</h3>
        
        <ImageInput
          name="profileImage"
          label="Foto do Perfil"
          avatar
          size="lg"
          value={formData.profileImage}
          onUpload={handleUpload('profileImage')}
          onRemove={handleRemove('profileImage')}
          loading={loading.profileImage}
          maxSize={1024 * 1024} // 1MB
        />
        
        <ImageInput
          name="coverImage"
          label="Imagem de Capa"
          value={formData.coverImage}
          onUpload={handleUpload('coverImage')}
          onRemove={handleRemove('coverImage')}
          loading={loading.coverImage}
          maxSize={5 * 1024 * 1024} // 5MB
          placeholder="Adicionar capa do perfil"
        />

        <div className="p-4 bg-gray-100 rounded text-sm">
          <strong>Dados do formulário:</strong>
          <pre className="mt-2 text-xs">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};