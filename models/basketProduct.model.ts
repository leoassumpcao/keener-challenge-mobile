import ProductModel, { IProductModel } from "./product.model";

export interface IBasketProductModel {
  productId: string;
  name: string;
  quantity: number;
  unitPrice: number;
  product: IProductModel;
}

class BasketProductModel implements IBasketProductModel {
  productId: string = "";
  name: string = "";
  quantity: number = 0;
  unitPrice: number = 0;
  product: IProductModel = new ProductModel();
  constructor(init?: Partial<BasketProductModel>) {
    Object.assign(this, init);
  }
}

export default BasketProductModel;
