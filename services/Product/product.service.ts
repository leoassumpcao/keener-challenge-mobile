import stores from "../../stores";
import ApiService from "../api.service";
import {
  IProductsServiceGetAll,
  IProductsServiceGetAllParams,
  IProductsServiceGetById,
} from "./types";

export default class ProductService {
  private readonly apiClient: ApiService;
  constructor() {
    this.apiClient = new ApiService("product");
  }

  async getAll(
    params: IProductsServiceGetAllParams
  ): Promise<IProductsServiceGetAll> {
    let result: IProductsServiceGetAll = {
      success: false,
      items: [],
      hasNextPage: false,
      hasPreviousPage: false,
      pageNumber: 1,
      totalCount: 0,
      totalPages: 0,
    };

    const response = await this.apiClient.get(
      "",
      {
        Authorization: `Bearer ${stores.authStore.accessToken}`,
      },
      params
    );

    if (response.success) {
      result = response.data;
      result.success = true;
    } else if (response.errors) {
      result.errors = response.errors;
    }
    return result;
  }

  async getById(productId: string): Promise<IProductsServiceGetById> {
    let result: IProductsServiceGetById = { success: false };
    const response = await this.apiClient.get(productId, {
      Authorization: `Bearer ${stores.authStore.accessToken}`,
    });

    result = response as IProductsServiceGetById;
    if (response.success) {
      result.product = response.data;
    }
    return result;
  }
}
