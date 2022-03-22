import { IProductModel } from "../../models/product.model";

export interface IProductsServiceGetAll {
  items: IProductModel[];
  errors?: string[];
  success: boolean;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageNumber: number;
  totalCount: number;
  totalPages: number;
}

export interface IProductsServiceGetById {
  product?: IProductModel;
  errors?: string[];
  success: boolean;
}

export interface IProductsServiceGetAllParams {
  name?: string;
  description?: string;
  nameOrDescription?: string;
  pageSize?: number;
  pageNumber: number;
}
