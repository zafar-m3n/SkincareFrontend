import { DEFAULT_LOCALE } from "@/lib/constants";

const formatNumber = (
  value,
  { locale = DEFAULT_LOCALE, minimumFractionDigits = 0, maximumFractionDigits = 2 } = {},
) => {
  const numericValue = Number(value);

  if (!Number.isFinite(numericValue)) {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits,
      maximumFractionDigits,
    }).format(0);
  }

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(numericValue);
};

export default formatNumber;
