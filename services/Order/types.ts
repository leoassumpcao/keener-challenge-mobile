import { IProductModel } from "./../../models/product.model";
import { IOrderModel } from "./../../models/order.model";

export interface IOrderServiceGetAll {
  items: IOrderModel[];
  errors?: string[];
  success: boolean;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageNumber: number;
  totalCount: number;
  totalPages: number;
}

export interface IOrderServiceGetById {
  order?: IOrderModel;
  errors?: string[];
  success: boolean;
}

export interface IOrderedProducts {
  id?: string;
  orderId?: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  product?: IProductModel;
}
