export const isRequired = (value) => {
  if (typeof value === "string") {
    return value.trim().length > 0;
  }

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return value !== null && value !== undefined;
};

export const isEmail = (value) => {
  if (!value) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(value).trim());
};

export const isPhoneNumber = (value) => {
  if (!value) return false;

  const phoneRegex = /^[+]?[0-9\s\-()]{7,20}$/;
  return phoneRegex.test(String(value).trim());
};

export const minLength = (value, min = 0) => {
  if (value === null || value === undefined) return false;
  return String(value).trim().length >= min;
};

export const maxLength = (value, max = Infinity) => {
  if (value === null || value === undefined) return false;
  return String(value).trim().length <= max;
};

export const isNumber = (value) => {
  if (value === null || value === undefined || value === "") return false;
  return Number.isFinite(Number(value));
};

export const minValue = (value, min = 0) => {
  if (!isNumber(value)) return false;
  return Number(value) >= min;
};

export const maxValue = (value, max = Infinity) => {
  if (!isNumber(value)) return false;
  return Number(value) <= max;
};

export const matches = (value, pattern) => {
  if (!pattern || !(pattern instanceof RegExp)) return false;
  return pattern.test(String(value ?? ""));
};

const validators = {
  isRequired,
  isEmail,
  isPhoneNumber,
  minLength,
  maxLength,
  isNumber,
  minValue,
  maxValue,
  matches,
};

export default validators;
