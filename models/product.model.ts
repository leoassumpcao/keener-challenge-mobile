import { action, computed, makeObservable, observable } from "mobx";
import AddressModel from "./address.model";

export interface IProductModel {
  productId: string;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  thumb: string;
}

class ProductModel implements IProductModel {
  productId: string = "";
  name: string = "";
  description: string = "";
  price: number = 0;
  inStock: boolean = false;
  thumb: string = "";
  constructor(init?: Partial<ProductModel>) {
    Object.assign(this, init);
  }
}

export default ProductModel;
