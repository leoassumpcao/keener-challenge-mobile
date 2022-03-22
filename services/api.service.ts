import axios, { AxiosInstance, AxiosRequestHeaders } from "axios";
import { API_URL } from "./../config/";
import stores from "./../stores";

export interface IApiResult {
  success: boolean;
  data?: any | null;
  errors?: string[] | null;
  code: number;
}

export default class ApiService {
  private readonly client: AxiosInstance;
  private readonly baseURL: string = `${API_URL}`;

  constructor(baseRoute: string) {
    this.baseURL = `${API_URL}/${baseRoute}`;
    this.client = axios.create({
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async post(
    route: string,
    data: any,
    headers?: AxiosRequestHeaders
  ): Promise<IApiResult> {
    try {
      const response = await this.client.post<IApiResult>(
        `${this.baseURL}/${route}`,
        JSON.stringify(data),
        {
          headers: { ...headers },
          timeout: 10000,
        }
      );
      const result: IApiResult = response.data;
      result.code = response.status;
      return result;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data) {
          const result: IApiResult = error.response.data;
          result.code = error.response.status;
          return result;
        } else if (error.response?.status == 401) {
          stores.authStore.onStoredDataFail();
          return {
            success: false,
            errors: [error.response?.status.toString()],
            data: null,
            code: -1,
          };
        } else {
          console.warn("api->post: ", JSON.stringify(error));
        }
      } else if (typeof error === "string") {
        return {
          success: false,
          errors: [error],
          data: null,
          code: -1,
        };
      }
    }
    return {
      success: false,
      errors: ["An unexpected error has occurred."],
      data: null,
      code: -1,
    };
  }

  async get(
    route: string,
    headers?: AxiosRequestHeaders,
    params?: any
  ): Promise<IApiResult> {
    try {
      const response = await this.client.get<IApiResult>(
        `${this.baseURL}/${route}`,
        {
          headers: { ...headers },
          timeout: 10000,
          params: params,
        }
      );
      const result: IApiResult = response.data;
      result.code = response.status;
      return result;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data) {
          const result: IApiResult = error.response.data;
          result.code = error.response.status;
          return result;
        } else if (error.response?.status == 401) {
          stores.authStore.onStoredDataFail();
          return {
            success: false,
            errors: [error.response?.status.toString()],
            data: null,
            code: -1,
          };
        } else {
          console.warn("api->get: ", JSON.stringify(error));
        }
      } else if (typeof error === "string") {
        return {
          success: false,
          errors: [error],
          data: null,
          code: -1,
        };
      }
    }
    return {
      success: false,
      errors: ["An unexpected error has occurred."],
      data: null,
      code: -1,
    };
  }
}
