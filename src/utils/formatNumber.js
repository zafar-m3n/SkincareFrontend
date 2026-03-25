import { DEFAULT_CURRENCY, DEFAULT_LOCALE } from "@/lib/constants";

const formatCurrency = (
  value,
  { currency = DEFAULT_CURRENCY, locale = DEFAULT_LOCALE, minimumFractionDigits = 2, maximumFractionDigits = 2 } = {},
) => {
  const numericValue = Number(value);

  if (!Number.isFinite(numericValue)) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits,
      maximumFractionDigits,
    }).format(0);
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(numericValue);
};

export default formatCurrency;
