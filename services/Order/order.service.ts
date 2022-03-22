import BasketProductModel from "../../models/basketProduct.model";
import stores from "../../stores";
import ApiService from "../api.service";
import {
  IOrderedProducts,
  IOrderServiceGetAll,
  IOrderServiceGetById,
} from "./types";

export default class OrderService {
  private readonly apiClient: ApiService;
  constructor() {
    this.apiClient = new ApiService("order");
  }

  async getAll(
    pageNumber: number,
    pageSize: number = 10
  ): Promise<IOrderServiceGetAll> {
    let result: IOrderServiceGetAll = {
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
      {
        pageNumber: pageNumber,
        pageSize: pageSize,
      }
    );
    if (response.success) {
      result = response.data;
      result.success = true;
    } else if (response.errors) {
      result.errors = response.errors;
    }
    return result;
  }

  async getById(productId: string): Promise<IOrderServiceGetById> {
    let result: IOrderServiceGetById = { success: false };
    const response = await this.apiClient.get(productId, {
      Authorization: `Bearer ${stores.authStore.accessToken}`,
    });

    result = response as IOrderServiceGetById;
    if (result.success) {
      result.order = response.data;
    }
    return result;
  }

  async placeOrder(
    userId: string,
    total: number,
    basketProductModel: BasketProductModel[]
  ): Promise<IOrderServiceGetById> {
    let result: IOrderServiceGetById = { success: false, errors: [] };
    const response = await this.apiClient.post(
      "",
      {
        userId: userId,
        total: total,
        orderedProducts: this.convertToOrderedProducts(basketProductModel),
      },
      {
        Authorization: `Bearer ${stores.authStore.accessToken}`,
      }
    );

    result = response as IOrderServiceGetById;
    if (result.success) {
      result.order = response.data;
    }
    return result;
  }

  convertToOrderedProducts(
    basketProductModel: BasketProductModel[]
  ): IOrderedProducts[] {
    const result: IOrderedProducts[] = [];

    basketProductModel.forEach((item) => {
      result.push({
        productId: item.productId,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
      });
    });

    return result;
  }
}
