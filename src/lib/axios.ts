import axios, { AxiosError } from "axios";

const rawBaseUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://ordered-property-officially-rendering.trycloudflare.com";

export const API_BASE_URL = rawBaseUrl.replace(/\/+$/, "");

export const TOKEN_STORAGE_KEY = "sihijau_auth_token";

export const getAuthToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_STORAGE_KEY);
};

export const setAuthToken = (token: string): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const removeAuthToken = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_STORAGE_KEY);
};

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ detail?: unknown }>) => {
    if (error.response?.status === 401) {
      // Token is invalid or expired
      removeAuthToken();
    }
    return Promise.reject(error);
  },
);

export const getApiErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const detail = error.response?.data?.detail;
    if (typeof detail === "string") {
      return detail;
    }
    if (Array.isArray(detail) && detail.length > 0) {
      return detail.map((d) => d.msg || JSON.stringify(d)).join(", ");
    }
    if (error.code === "ERR_NETWORK" || error.message?.includes("Network Error")) {
      return "Gagal terhubung ke server backend (" + API_BASE_URL + "). Pastikan backend SiHijau sudah dijalankan.";
    }
    if (error.response?.statusText) {
      return error.response.statusText;
    }
    if (error.message) {
      return error.message;
    }
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "Terjadi kesalahan pada server.";
};

export default apiClient;
