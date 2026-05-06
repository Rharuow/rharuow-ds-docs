import { removeNonNumeric } from "./cpf.utils";

/**
 * Aplica máscara de CEP (00000-000)
 */
export const applyCepMask = (value: string): string => {
  const numericValue = removeNonNumeric(value);

  // Limita a 8 dígitos
  const limitedValue = numericValue.slice(0, 8);

  if (limitedValue.length <= 5) {
    return limitedValue;
  }

  return `${limitedValue.slice(0, 5)}-${limitedValue.slice(5)}`;
};

/**
 * Valida se um CEP tem formato válido
 * @param cep - CEP com ou sem máscara
 * @returns true se o CEP for válido, false caso contrário
 */
export const validateCep = (cep: string): boolean => {
  const numericCep = removeNonNumeric(cep);

  // Verifica se tem 8 dígitos
  if (numericCep.length !== 8) {
    return false;
  }

  // CEP inválido comum
  if (numericCep === "00000000") {
    return false;
  }

  return true;
};

/**
 * Retorna mensagem de erro se o CEP for inválido
 */
export const getCepErrorMessage = (cep: string): string | null => {
  const numericCep = removeNonNumeric(cep);

  if (!numericCep) {
    return "CEP é obrigatório";
  }

  if (numericCep.length < 8) {
    return "CEP incompleto";
  }

  if (!validateCep(cep)) {
    return "CEP inválido";
  }

  return null;
};