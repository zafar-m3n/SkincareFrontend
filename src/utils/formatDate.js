import { DEFAULT_LOCALE } from "@/lib/constants";

const formatDate = (value, { locale = DEFAULT_LOCALE, dateStyle = "medium", timeStyle = undefined } = {}) => {
  if (!value) return "";

  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat(locale, {
    dateStyle,
    ...(timeStyle ? { timeStyle } : {}),
  }).format(date);
};

export const formatDateTime = (value, { locale = DEFAULT_LOCALE, dateStyle = "medium", timeStyle = "short" } = {}) => {
  if (!value) return "";

  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat(locale, {
    dateStyle,
    timeStyle,
  }).format(date);
};

export const formatTime = (value, { locale = DEFAULT_LOCALE, timeStyle = "short" } = {}) => {
  if (!value) return "";

  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat(locale, {
    timeStyle,
  }).format(date);
};

export default formatDate;
