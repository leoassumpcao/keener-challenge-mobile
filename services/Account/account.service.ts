import ApiService from "../api.service";
import {
  IAccountServiceRegisterResult,
  IAccountServiceLoginResult,
} from "./types";

export default class AccountService {
  private readonly apiClient: ApiService;
  constructor() {
    this.apiClient = new ApiService("account");
  }

  async register(data: any): Promise<IAccountServiceRegisterResult> {
    let result: IAccountServiceRegisterResult = { success: false };
    const response = await this.apiClient.post("register", data);
    if (response.success) {
      result = response.data;
      result.success = true;
    } else if (response.errors) {
      result.errors = response.errors;
    }
    return result;
  }

  async login(data: any): Promise<IAccountServiceLoginResult> {
    let result: IAccountServiceLoginResult = { success: false };
    const response = await this.apiClient.post("login", data);
    if (response.success) {
      result = response.data;
      result.success = true;
    } else if (response.errors) {
      result.errors = response.errors;
    }
    return result;
  }
}
