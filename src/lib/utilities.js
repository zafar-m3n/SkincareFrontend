import { jwtDecode } from "jwt-decode";
import { STORAGE_KEYS, TOKEN_EXPIRY_SKEW_MS } from "./constants";

let logoutTimerId = null;
let onExpireCallback = null;
let storageListenerAttached = false;

/* ---------------------------
 * Basic storage helpers
 * --------------------------*/
const getAuthToken = () => localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);

const setAuthToken = (authToken) => {
  localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, authToken);
};

const removeAuthToken = () => {
  localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
};

const getUserData = () => {
  const raw = localStorage.getItem(STORAGE_KEYS.USER_DATA);
  return raw ? JSON.parse(raw) : null;
};

const setUserData = (userData) => {
  localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
};

const removeUserData = () => {
  localStorage.removeItem(STORAGE_KEYS.USER_DATA);
};

/* ---------------------------
 * JWT exp helpers
 * --------------------------*/
const decodeExpMs = () => {
  const authToken = getAuthToken();
  if (!authToken) return null;

  try {
    const { exp } = jwtDecode(authToken);
    if (!exp) return null;
    return exp * 1000;
  } catch {
    return null;
  }
};

const isAuthenticated = () => !!getAuthToken();

const isExpired = () => {
  const expMs = decodeExpMs();

  if (!expMs) {
    return isAuthenticated();
  }

  return Date.now() >= expMs - TOKEN_EXPIRY_SKEW_MS;
};

/* ---------------------------
 * Logout + scheduling
 * --------------------------*/
const clearLogoutTimer = () => {
  if (logoutTimerId) {
    clearTimeout(logoutTimerId);
    logoutTimerId = null;
  }
};

const broadcastLogout = () => {
  localStorage.setItem(STORAGE_KEYS.LOGOUT_BROADCAST, String(Date.now()));
};

const logout = () => {
  clearLogoutTimer();
  removeAuthToken();
  removeUserData();
  broadcastLogout();

  if (typeof onExpireCallback === "function") {
    onExpireCallback();
  }
};

const scheduleAutoLogout = () => {
  clearLogoutTimer();

  if (!isAuthenticated()) return;

  const expMs = decodeExpMs();

  if (!expMs) {
    logout();
    return;
  }

  const remaining = expMs - Date.now() - TOKEN_EXPIRY_SKEW_MS;

  if (remaining <= 0) {
    logout();
    return;
  }

  logoutTimerId = setTimeout(() => {
    logout();
  }, remaining);
};

/* ---------------------------
 * Session initializer
 * --------------------------*/
const handleStorageLogout = (e) => {
  if (e.key === STORAGE_KEYS.LOGOUT_BROADCAST) {
    clearLogoutTimer();
    removeAuthToken();
    removeUserData();

    if (typeof onExpireCallback === "function") {
      onExpireCallback();
    }
  }
};

const initAuthSession = (handleExpire) => {
  onExpireCallback = handleExpire;

  if (isExpired()) {
    logout();
  } else {
    scheduleAutoLogout();
  }

  if (!storageListenerAttached) {
    window.addEventListener("storage", handleStorageLogout);
    storageListenerAttached = true;
  }
};

/* ---------------------------
 * Optional cleanup
 * --------------------------*/
const destroyAuthSession = () => {
  clearLogoutTimer();

  if (storageListenerAttached) {
    window.removeEventListener("storage", handleStorageLogout);
    storageListenerAttached = false;
  }

  onExpireCallback = null;
};

/* ---------------------------
 * Public API
 * --------------------------*/
const token = {
  getAuthToken,
  setAuthToken,
  removeAuthToken,

  getUserData,
  setUserData,
  removeUserData,

  isAuthenticated,
  isExpired,

  initAuthSession,
  destroyAuthSession,
  scheduleAutoLogout,
  logout,
};

export default token;
