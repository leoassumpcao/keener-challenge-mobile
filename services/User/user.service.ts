import ApiService from "../api.service";
import { IUserServiceGetUserByIdResult } from "./types";
import stores from "../../stores";

export default class AccountService {
  private readonly apiClient: ApiService;
  constructor() {
    this.apiClient = new ApiService("user");
  }

  async getUserById(userId: string): Promise<IUserServiceGetUserByIdResult> {
    let result: IUserServiceGetUserByIdResult = { success: false };

    const response = await this.apiClient.get(userId, {
      Authorization: `Bearer ${stores.authStore.accessToken}`,
    });
    if (response.success) {
      result.user = response.data;
      result.success = true;
    } else if (response.errors) {
      result.errors = response.errors;
    }
    return result;
  }
}
