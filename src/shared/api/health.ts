import apiClient from "@/lib/axios";

export const healthService = {
  /**
   * Check backend API health status
   */
  async checkHealth(): Promise<Record<string, unknown>> {
    const response = await apiClient.get<Record<string, unknown>>("/health");
    return response.data;
  },
};

export default healthService;
