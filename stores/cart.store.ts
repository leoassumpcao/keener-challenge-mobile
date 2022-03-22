import { action, computed, makeObservable, observable } from "mobx";
import BasketProductModel from "../models/basketProduct.model";
import ProductModel from "../models/product.model";

class CartStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  private _cartProducts: BasketProductModel[] = [];
  @computed get cartProducts(): BasketProductModel[] {
    return this._cartProducts;
  }

  set cartProducts(value: BasketProductModel[]) {
    this._cartProducts = value;
  }

  getCartProduct(productId: string): BasketProductModel {
    let product: BasketProductModel = new BasketProductModel();
    this._cartProducts.forEach((item, index, object) => {
      if (item.productId == productId) {
        product = item;
      }
    });
    return product;
  }

  /*@action addCartProduct = (
    product: BasketProductModel,
    count?: number
  ): void => {
    let existingBasketProduct: BasketProductModel = new BasketProductModel();

    this.cartProducts.forEach((item, index, object) => {
      if (item.productId == product.productId) {
        existingBasketProduct = item;
      }
    });

    if (existingBasketProduct.productId !== "") {
      this.cartProducts = this.cartProducts.map((p) => {
        if (p.productId === product.productId) {
          if (count) p.quantity += count;
          else p.quantity += product.quantity;
        }

        return p;
      });
    } else this.cartProducts.push(product);
  };*/

  @action addCartProduct = (product: ProductModel, count: number): void => {
    let existingBasketProduct: BasketProductModel = new BasketProductModel();

    this._cartProducts.forEach((item, index, object) => {
      if (item.productId === product.productId) {
        existingBasketProduct = item;
      }
    });

    if (existingBasketProduct.productId !== "") {
      this._cartProducts = this._cartProducts.map((p) => {
        if (p.productId === product.productId) {
          p.quantity += count;
        }
        return p;
      });
    } else
      this._cartProducts.push(
        new BasketProductModel({
          name: product.name,
          product: product,
          productId: product.productId,
          quantity: count,
          unitPrice: product.price,
        })
      );
  };

  @action removeCartProduct = (product: BasketProductModel): void => {
    this._cartProducts = this._cartProducts.filter((p, index) => {
      return p.productId !== product.productId;
    });
  };

  @action reduceCartProduct = (
    product: BasketProductModel,
    count: number
  ): void => {
    this._cartProducts = this._cartProducts.map((p, index) => {
      if (p.productId === product.productId) {
        p.quantity -= count;
        if (p.quantity <= 0) this._cartProducts.splice(index, 1);
      }
      return p;
    });
  };

  @action cleanCartProducts = (): void => {
    this._cartProducts = [];
  };
}

export default CartStore;
