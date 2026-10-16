import apiClient from "@/lib/axios";
import {
  DecisionEvaluateParams,
  DecisionResponse,
} from "@/shared/types/api";

export const decisionService = {
  /**
   * Evaluate decision and get recommendations for waste processing
   */
  async evaluateDecision(
    params: DecisionEvaluateParams,
  ): Promise<DecisionResponse> {
    const response = await apiClient.get<DecisionResponse>(
      "/api/v1/decisions/evaluate",
      {
        params,
      },
    );
    return response.data;
  },
};

export default decisionService;
