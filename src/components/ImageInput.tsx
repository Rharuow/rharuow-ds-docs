import React, { useState, useRef } from 'react';
import { cn } from '../lib/utils';

export interface ImageInputProps {
  /** Nome do campo (para integração com forms) */
  name?: string;
  /** Label do campo */
  label?: string;
  /** Se o campo está desabilitado */
  disabled?: boolean;
  /** Mensagem de erro */
  error?: string;
  /** Classes CSS adicionais */
  className?: string;
  /** Se true, exibe o input em formato circular (ideal para avatars) */
  avatar?: boolean;
  /** URL da imagem atual (para exibir imagem já salva) */
  value?: string;
  /** Callback chamado quando o usuário confirma o upload da imagem selecionada */
  onUpload?: (file: File) => Promise<string> | string;
  /** Callback chamado quando o usuário remove a imagem */
  onRemove?: (imageUrl?: string) => Promise<void> | void;
  /** Tipos de arquivo aceitos (padrão: "image/*") */
  accept?: string;
  /** Tamanho máximo do arquivo em bytes */
  maxSize?: number;
  /** Texto exibido quando não há imagem */
  placeholder?: string;
  /** Se true, mostra estado de loading durante upload */
  loading?: boolean;
  /** Tamanho do componente */
  size?: 'sm' | 'md' | 'lg';
}

export const ImageInput: React.FC<ImageInputProps> = ({
  avatar = false,
  value,
  onUpload,
  onRemove,
  accept = "image/*",
  maxSize,
  placeholder = "Selecionar imagem",
  loading = false,
  size = 'md',
  label,
  error,
  disabled,
  className,
  ...props
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Estados derivados
  const hasExistingImage = !!value;
  const hasSelectedFile = !!selectedFile;
  const showPreview = hasExistingImage || hasSelectedFile;
  const isProcessing = loading || isUploading;

  // Tamanhos baseados no size prop
  const sizeClasses = {
    sm: avatar ? 'w-16 h-16' : 'w-24 h-16',
    md: avatar ? 'w-24 h-24' : 'w-32 h-24',
    lg: avatar ? 'w-32 h-32' : 'w-40 h-32',
  };

  // Placeholder padrão baseado no tipo
  const defaultPlaceholder = avatar ? "Adicionar foto" : "Selecionar imagem";
  const displayPlaceholder = placeholder || defaultPlaceholder;

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validação de tamanho
    if (maxSize && file.size > maxSize) {
      alert(`Arquivo muito grande. Tamanho máximo: ${(maxSize / 1024 / 1024).toFixed(1)}MB`);
      return;
    }

    // Criar preview local
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
      setSelectedFile(file);
    };
    reader.readAsDataURL(file);
  };

  const handleConfirmUpload = async () => {
    if (!selectedFile || !onUpload) return;

    try {
      setIsUploading(true);
      const result = await onUpload(selectedFile);
      
      // Limpar estado temporário após upload bem-sucedido
      setSelectedFile(null);
      setPreviewUrl('');
      
      // Reset do input file
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
      alert('Erro ao fazer upload da imagem');
    } finally {
      setIsUploading(false);
    }
  };

  const handleCancelSelection = () => {
    setSelectedFile(null);
    setPreviewUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveImage = async () => {
    try {
      if (onRemove) {
        await onRemove(value);
      }
      
      // Limpar estados locais
      setSelectedFile(null);
      setPreviewUrl('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Erro ao remover imagem:', error);
      alert('Erro ao remover imagem');
    }
  };

  const handleClick = () => {
    if (disabled || isProcessing) return;
    fileInputRef.current?.click();
  };

  // URL da imagem a ser exibida (prioridade: preview local > imagem salva)
  const displayImageUrl = previewUrl || value;

  return (
    <div className={cn('flex flex-col space-y-2', className)}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      
      <div className="relative flex flex-col items-center">
        {/* Input file oculto */}
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileSelect}
          disabled={disabled || isProcessing}
          className="hidden"
          {...props}
        />

        {/* Container da imagem */}
        <div
          onClick={handleClick}
          className={cn(
            // Base styles
            'relative border-2 border-dashed border-gray-300 transition-colors cursor-pointer',
            'hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
            
            // Shape
            avatar ? 'rounded-full' : 'rounded-lg',
            
            // Size
            sizeClasses[size],
            
            // States
            disabled && 'opacity-50 cursor-not-allowed',
            isProcessing && 'cursor-wait',
            error && 'border-red-300',
            
            // Background
            !showPreview && 'bg-gray-50 hover:bg-gray-100',
            showPreview && 'border-solid border-gray-200'
          )}
        >
          {showPreview ? (
            // Preview da imagem
            <img
              src={displayImageUrl}
              alt="Preview"
              className={cn(
                'w-full h-full object-cover',
                avatar ? 'rounded-full' : 'rounded-lg'
              )}
            />
          ) : (
            // Estado vazio
            <div className="flex flex-col items-center justify-center h-full text-gray-500 text-sm">
              {avatar ? (
                // Ícone de usuário para avatar
                <>
                  <svg
                    className="w-8 h-8 mb-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-center px-2 text-xs">{displayPlaceholder}</span>
                </>
              ) : (
                // Ícone de adicionar imagem genérica
                <>
                  <svg
                    className="w-6 h-6 mb-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="text-center px-2">{displayPlaceholder}</span>
                </>
              )}
            </div>
          )}

          {/* Loading overlay */}
          {isProcessing && (
            <div className={cn(
              'absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center',
              avatar ? 'rounded-full' : 'rounded-lg'
            )}>
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Ações */}
        {showPreview && !isProcessing && (
          <div className="flex justify-center space-x-2 mt-3">
            {hasSelectedFile ? (
              // Ações para arquivo selecionado (não salvo ainda)
              <>
                <button
                  onClick={handleConfirmUpload}
                  disabled={!onUpload}
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirmar
                </button>
                <button
                  onClick={handleCancelSelection}
                  className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700"
                >
                  Cancelar
                </button>
              </>
            ) : (
              // Ações para imagem já salva
              <button
                onClick={handleRemoveImage}
                disabled={!onRemove}
                className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Remover
              </button>
            )}
          </div>
        )}
      </div>

      {/* Mensagem de erro */}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {/* Informações adicionais */}
      {maxSize && !showPreview && (
        <p className="text-xs text-gray-500">
          Tamanho máximo: {(maxSize / 1024 / 1024).toFixed(1)}MB
        </p>
      )}
      
      {/* Dica para avatars */}
      {avatar && !showPreview && (
        <p className="text-xs text-gray-500 text-center">
          Use uma foto com seu rosto centralizado e bem visível
        </p>
      )}
    </div>
  );
};

export default ImageInput;