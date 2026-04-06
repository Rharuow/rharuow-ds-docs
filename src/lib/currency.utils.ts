export type CurrencyValueType = "string" | "number";

export const DEFAULT_CURRENCY_CODE = "BRL";
export const DEFAULT_CURRENCY_LOCALE = "pt-BR";

export function parseCurrencyValue(
  value: string | number | null | undefined
): number | null {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      return null;
    }

    return Number(value.toFixed(2));
  }

  const digits = value.replace(/\D/g, "");

  if (!digits) {
    return null;
  }

  return Number(digits) / 100;
}

export function formatCurrencyValue(
  value: string | number | null | undefined,
  currency = DEFAULT_CURRENCY_CODE,
  locale = DEFAULT_CURRENCY_LOCALE
): string {
  const amount = parseCurrencyValue(value);

  if (amount === null) {
    return "";
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function serializeCurrencyValue(
  value: string | number | null | undefined,
  valueType: CurrencyValueType = "string",
  currency = DEFAULT_CURRENCY_CODE,
  locale = DEFAULT_CURRENCY_LOCALE
): string | number | undefined {
  const amount = parseCurrencyValue(value);

  if (amount === null) {
    return valueType === "number" ? undefined : "";
  }

  if (valueType === "number") {
    return amount;
  }

  return formatCurrencyValue(amount, currency, locale);
}