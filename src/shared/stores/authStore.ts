"use client";

import { create } from "zustand";
import { authService } from "@/shared/api/auth";
import { getAuthToken, removeAuthToken, setAuthToken } from "@/lib/axios";
import { UserCreate, UserResponse, Token } from "@/shared/types/api";

interface AuthState {
  user: UserResponse | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitialized: boolean;

  login: (credentials: { username: string; password: string }) => Promise<Token>;
  register: (data: UserCreate) => Promise<UserResponse>;
  logout: () => void;
  fetchMe: () => Promise<UserResponse | null>;
  setUser: (user: UserResponse | null) => void;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  token: typeof window !== "undefined" ? getAuthToken() : null,
  isAuthenticated: false,
  isLoading: false,
  isInitialized: false,

  setUser: (user) => {
    set({ user, isAuthenticated: !!user });
  },

  login: async (credentials) => {
    set({ isLoading: true });
    try {
      const tokenData = await authService.login(credentials);
      set({
        token: tokenData.access_token,
        user: tokenData.user || null,
        isAuthenticated: true,
        isLoading: false,
      });

      // If user object wasn't in token response, fetch profile
      if (!tokenData.user) {
        try {
          const profile = await authService.getMe();
          set({ user: profile, isAuthenticated: true });
        } catch {
          // ignore profile fetch failure if token is valid
        }
      }
      return tokenData;
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  register: async (data) => {
    set({ isLoading: true });
    try {
      const user = await authService.register(data);
      set({ isLoading: false });
      return user;
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: () => {
    authService.logout();
    removeAuthToken();
    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  },

  fetchMe: async () => {
    const token = getAuthToken();
    if (!token) {
      set({ user: null, isAuthenticated: false, isInitialized: true });
      return null;
    }

    set({ isLoading: true });
    try {
      const user = await authService.getMe();
      set({
        user,
        token,
        isAuthenticated: true,
        isLoading: false,
        isInitialized: true,
      });
      return user;
    } catch {
      removeAuthToken();
      set({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        isInitialized: true,
      });
      return null;
    }
  },

  initialize: async () => {
    if (get().isInitialized) return;
    await get().fetchMe();
  },
}));

export default useAuthStore;
