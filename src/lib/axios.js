import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { STORAGE_KEYS, REQUEST_TIMEOUT } from "./constants";

const getAuthToken = () => localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);

const defaultHeaders = (contentType = "application/json") => {
  const authToken = getAuthToken();

  return {
    "X-Request-Id": uuidv4(),
    "Content-Type": contentType,
    Accept: "application/json",
    ...(authToken && { Authorization: `Bearer ${authToken}` }),
  };
};

const publicHeaders = () => {
  return {
    "X-Request-Id": uuidv4(),
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: REQUEST_TIMEOUT,
});

const instance = {
  apiClient,
  defaultHeaders,
  publicHeaders,
};

export default instance;
