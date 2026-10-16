import apiClient from "@/lib/axios";
import { ScanResponse } from "@/shared/types/api";

export const scanService = {
  /**
   * Upload image file and scan for waste classification
   */
  async uploadAndScan(file: File | Blob): Promise<ScanResponse> {
    const formData = new FormData();
    formData.append("file", file);

    const response = await apiClient.post<ScanResponse>(
      "/api/v1/scans/upload-and-scan",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return response.data;
  },

  /**
   * Get user's waste scan history with pagination
   */
  async getScanHistory(params?: {
    limit?: number;
    offset?: number;
  }): Promise<ScanResponse[]> {
    const response = await apiClient.get<ScanResponse[]>(
      "/api/v1/scans/history",
      {
        params,
      },
    );
    return response.data;
  },
};

export default scanService;
