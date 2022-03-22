import ProductModel, { IProductModel } from "./product.model";
export interface IOrderedProductModel {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  product: IProductModel;
}

class OrderedProductModel implements IOrderedProductModel {
  id = "";
  orderId = "";
  productId = "";
  quantity = 0;
  unitPrice = 0;
  product = new ProductModel();

  constructor(init?: Partial<IOrderedProductModel>) {
    Object.assign(this, init);
  }
}

export default OrderedProductModel;
