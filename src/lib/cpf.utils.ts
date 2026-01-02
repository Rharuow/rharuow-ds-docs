/**
 * Remove todos os caracteres não numéricos de uma string
 */
export const removeNonNumeric = (value: string): string => {
  return value.replace(/\D/g, '');
};

/**
 * Aplica máscara de CPF (000.000.000-00)
 */
export const applyCpfMask = (value: string): string => {
  const numericValue = removeNonNumeric(value);
  
  // Limita a 11 dígitos
  const limitedValue = numericValue.slice(0, 11);
  
  // Aplica a máscara progressivamente
  if (limitedValue.length <= 3) {
    return limitedValue;
  } else if (limitedValue.length <= 6) {
    return `${limitedValue.slice(0, 3)}.${limitedValue.slice(3)}`;
  } else if (limitedValue.length <= 9) {
    return `${limitedValue.slice(0, 3)}.${limitedValue.slice(3, 6)}.${limitedValue.slice(6)}`;
  } else {
    return `${limitedValue.slice(0, 3)}.${limitedValue.slice(3, 6)}.${limitedValue.slice(6, 9)}-${limitedValue.slice(9, 11)}`;
  }
};

/**
 * Valida se um CPF é válido
 * @param cpf - CPF com ou sem máscara
 * @returns true se o CPF é válido, false caso contrário
 */
export const validateCpf = (cpf: string): boolean => {
  const numericCpf = removeNonNumeric(cpf);
  
  // Verifica se tem 11 dígitos
  if (numericCpf.length !== 11) {
    return false;
  }
  
  // Verifica se todos os dígitos são iguais (CPFs inválidos conhecidos)
  if (/^(\d)\1{10}$/.test(numericCpf)) {
    return false;
  }
  
  // Validação do primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(numericCpf.charAt(i)) * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }
  if (remainder !== parseInt(numericCpf.charAt(9))) {
    return false;
  }
  
  // Validação do segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(numericCpf.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }
  if (remainder !== parseInt(numericCpf.charAt(10))) {
    return false;
  }
  
  return true;
};

/**
 * Retorna mensagem de erro se o CPF for inválido
 */
export const getCpfErrorMessage = (cpf: string): string | null => {
  const numericCpf = removeNonNumeric(cpf);
  
  if (!numericCpf) {
    return 'CPF é obrigatório';
  }
  
  if (numericCpf.length < 11) {
    return 'CPF incompleto';
  }
  
  if (!validateCpf(cpf)) {
    return 'CPF inválido';
  }
  
  return null;
};
