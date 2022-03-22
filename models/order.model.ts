import AddressModel from "./address.model";
import { IOrderedProductModel } from "./orderedProduct.model";
import ProductModel, { IProductModel } from "./product.model";

export interface IOrderModel {
  orderId: string;
  userId: string;
  total: number;
  totalPaid: number;
  deliveryAddress: AddressModel;
  delivered: boolean;
  createdAt: string;
  orderedProducts: IOrderedProductModel[];
}

class OrderModel implements IOrderModel {
  orderId: string = "";
  userId: string = "";
  total: number = 0;
  totalPaid: number = 0;
  delivered: boolean = false;
  deliveryAddress: AddressModel = new AddressModel();
  createdAt: string = "";
  orderedProducts: IOrderedProductModel[] = [];
  constructor(init?: Partial<IOrderedProductModel>) {
    Object.assign(this, init);
  }
}

export default OrderModel;
