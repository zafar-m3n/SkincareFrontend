const isBrowser = typeof window !== "undefined";

const getItem = (key, fallback = null) => {
  if (!isBrowser || !key) return fallback;

  try {
    const value = window.localStorage.getItem(key);
    return value ?? fallback;
  } catch {
    return fallback;
  }
};

const setItem = (key, value) => {
  if (!isBrowser || !key) return false;

  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
};

const removeItem = (key) => {
  if (!isBrowser || !key) return false;

  try {
    window.localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
};

const getJSON = (key, fallback = null) => {
  const value = getItem(key);

  if (value === null) return fallback;

  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

const setJSON = (key, value) => {
  try {
    return setItem(key, JSON.stringify(value));
  } catch {
    return false;
  }
};

const clear = () => {
  if (!isBrowser) return false;

  try {
    window.localStorage.clear();
    return true;
  } catch {
    return false;
  }
};

const storage = {
  getItem,
  setItem,
  removeItem,
  getJSON,
  setJSON,
  clear,
};

export default storage;
