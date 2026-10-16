import apiClient from "@/lib/axios";
import {
  ListPartnersParams,
  PartnerCreate,
  PartnerResponse,
  PartnerUpdate,
} from "@/shared/types/api";

export const partnerService = {
  /**
   * List partner directories with optional geolocation and category filters
   */
  async listPartners(params?: ListPartnersParams): Promise<PartnerResponse[]> {
    const response = await apiClient.get<PartnerResponse[]>(
      "/api/v1/partners",
      {
        params,
      },
    );
    return response.data;
  },

  /**
   * Create a new partner (requires authentication)
   */
  async createPartner(data: PartnerCreate): Promise<PartnerResponse> {
    const response = await apiClient.post<PartnerResponse>(
      "/api/v1/partners",
      data,
    );
    return response.data;
  },

  /**
   * Get single partner details by ID
   */
  async getPartner(
    partnerId: number,
    loc?: { user_lat?: number | null; user_lon?: number | null },
  ): Promise<PartnerResponse> {
    const response = await apiClient.get<PartnerResponse>(
      `/api/v1/partners/${partnerId}`,
      {
        params: loc,
      },
    );
    return response.data;
  },

  /**
   * Update partner details by ID (requires authentication)
   */
  async updatePartner(
    partnerId: number,
    data: PartnerUpdate,
  ): Promise<PartnerResponse> {
    const response = await apiClient.put<PartnerResponse>(
      `/api/v1/partners/${partnerId}`,
      data,
    );
    return response.data;
  },

  /**
   * Delete partner by ID (requires authentication)
   */
  async deletePartner(partnerId: number): Promise<void> {
    await apiClient.delete(`/api/v1/partners/${partnerId}`);
  },
};

export default partnerService;
