import { action, computed, makeObservable, observable } from "mobx";
import AddressModel from "./address.model";

export interface IProductImageModel {
  id: string;
  name: string;
  image: Blob;
}

class ProductImageModel implements IProductImageModel {
  id: string = "";
  name: string = "";
  image: Blob = new Blob();
  constructor() {}
}

export default ProductImageModel;
