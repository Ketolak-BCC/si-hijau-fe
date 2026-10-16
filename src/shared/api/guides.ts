import apiClient from "@/lib/axios";
import {
  GuideCreate,
  GuideResponse,
  WasteCategoryEnum,
} from "@/shared/types/api";

export const guideService = {
  /**
   * List waste processing guides, optionally filtered by category
   */
  async listGuides(params?: {
    category?: WasteCategoryEnum;
  }): Promise<GuideResponse[]> {
    const response = await apiClient.get<GuideResponse[]>("/api/v1/guides", {
      params,
    });
    return response.data;
  },

  /**
   * Create a new processing guide (requires authentication)
   */
  async createGuide(data: GuideCreate): Promise<GuideResponse> {
    const response = await apiClient.post<GuideResponse>(
      "/api/v1/guides",
      data,
    );
    return response.data;
  },

  /**
   * Get guide details by ID
   */
  async getGuide(guideId: number): Promise<GuideResponse> {
    const response = await apiClient.get<GuideResponse>(
      `/api/v1/guides/${guideId}`,
    );
    return response.data;
  },
};

export default guideService;
