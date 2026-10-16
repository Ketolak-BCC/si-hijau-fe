import apiClient from "@/lib/axios";
import {
  ActionLogCreate,
  ActionLogResponse,
  ImpactSummaryResponse,
} from "@/shared/types/api";

export const actionLogService = {
  /**
   * Create an action log (e.g. user processed, recycled, or allocated waste)
   */
  async createActionLog(data: ActionLogCreate): Promise<ActionLogResponse> {
    const response = await apiClient.post<ActionLogResponse>(
      "/api/v1/action-logs",
      data,
    );
    return response.data;
  },

  /**
   * List action logs for the currently logged in user
   */
  async listUserActionLogs(params?: {
    limit?: number;
    offset?: number;
  }): Promise<ActionLogResponse[]> {
    const response = await apiClient.get<ActionLogResponse[]>(
      "/api/v1/action-logs",
      {
        params,
      },
    );
    return response.data;
  },

  /**
   * Get user impact summary (total actions, by category, and by action type)
   */
  async getUserImpactSummary(): Promise<ImpactSummaryResponse> {
    const response = await apiClient.get<ImpactSummaryResponse>(
      "/api/v1/action-logs/summary",
    );
    return response.data;
  },
};

export default actionLogService;
