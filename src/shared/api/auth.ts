import apiClient, { setAuthToken, removeAuthToken } from "@/lib/axios";
import {
  UserCreate,
  UserResponse,
  Token,
  GoogleAuthRequest,
  GoogleAuthUrlResponse,
  GoogleDevLoginRequest,
} from "@/shared/types/api";

export const authService = {
  /**
   * Register a new user
   */
  async register(data: UserCreate): Promise<UserResponse> {
    const response = await apiClient.post<UserResponse>(
      "/api/v1/auth/register",
      data,
    );
    return response.data;
  },

  /**
   * Login with email (username) & password using OAuth2 Password Bearer flow (x-www-form-urlencoded)
   */
  async login(credentials: {
    username: string;
    password: string;
  }): Promise<Token> {
    const params = new URLSearchParams();
    params.append("username", credentials.username);
    params.append("password", credentials.password);
    params.append("grant_type", "password");

    const response = await apiClient.post<Token>(
      "/api/v1/auth/login",
      params.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    if (response.data.access_token) {
      setAuthToken(response.data.access_token);
    }
    return response.data;
  },

  /**
   * Authenticate with Google ID Token (Mobile & SPA)
   */
  async loginWithGoogle(idToken: string): Promise<Token> {
    const body: GoogleAuthRequest = { id_token: idToken };
    const response = await apiClient.post<Token>("/api/v1/auth/google", body);
    if (response.data.access_token) {
      setAuthToken(response.data.access_token);
    }
    return response.data;
  },

  /**
   * Get Google OAuth 2.0 authorization URL for redirect flow
   */
  async getGoogleAuthUrl(state?: string): Promise<GoogleAuthUrlResponse> {
    const response = await apiClient.get<GoogleAuthUrlResponse>(
      "/api/v1/auth/google/url",
      {
        params: state ? { state } : undefined,
      },
    );
    return response.data;
  },

  /**
   * Google OAuth redirect callback
   */
  async handleGoogleCallback(code: string, state?: string): Promise<Token> {
    const response = await apiClient.get<Token>(
      "/api/v1/auth/google/callback",
      {
        params: { code, ...(state ? { state } : {}) },
      },
    );
    if (response.data.access_token) {
      setAuthToken(response.data.access_token);
    }
    return response.data;
  },

  /**
   * Dev Mock Login for testing without real Google credentials
   */
  async loginWithGoogleDevMock(
    payload?: GoogleDevLoginRequest,
  ): Promise<Token> {
    const response = await apiClient.post<Token>(
      "/api/v1/auth/google/dev-mock",
      payload || {},
    );
    if (response.data.access_token) {
      setAuthToken(response.data.access_token);
    }
    return response.data;
  },

  /**
   * Get current authenticated user profile
   */
  async getMe(): Promise<UserResponse> {
    const response = await apiClient.get<UserResponse>("/api/v1/auth/me");
    return response.data;
  },

  /**
   * Logout user by clearing local token
   */
  logout(): void {
    removeAuthToken();
  },
};

export default authService;
