import apiClient from "@/lib/axios";
import { UserPreferencesUpdate, UserResponse } from "@/shared/types/api";

export const userService = {
  /**
   * Update current user's preferences (has_yard, free_time_level)
   */
  async updatePreferences(
    preferences: UserPreferencesUpdate,
  ): Promise<UserResponse> {
    const response = await apiClient.put<UserResponse>(
      "/api/v1/users/preferences",
      preferences,
    );
    return response.data;
  },
};

export default userService;
