import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { action, computed, makeObservable, observable } from "mobx";
import BasketProductModel from "../../models/basketProduct.model";
import ProductService from "../../services/Product";
import OrderService from "../../services/Order";
import stores from "../../stores/";
import { Alert } from "react-native";

type CartRouteProps = {
  productId: { productId: string };
};
class CartViewModel {
  private productService: ProductService;
  private orderService: OrderService;
  private navigation = useNavigation();
  private route = useRoute<RouteProp<CartRouteProps, "productId">>();

  constructor() {
    makeObservable(this);
    this.productService = new ProductService();
    this.orderService = new OrderService();
  }

  @observable
  private _loading: boolean = false;
  @computed get loading(): boolean {
    return this._loading;
  }
  set loading(loading: boolean) {
    this._loading = loading;
  }

  @observable
  private _errors: string[] = [];
  @computed get errors(): string[] {
    return this._errors;
  }
  set errors(errors: string[]) {
    this._errors = errors;
  }

  totalPrice(): number {
    const products = stores.cartStore.cartProducts;
    let total = 0;
    const roundToDigit = (num: number, digits: number) =>
      Math.round(num * Math.pow(10, digits) + Number.EPSILON) /
      Math.pow(10, digits);

    products.forEach(
      (item) => (total += roundToDigit(item.unitPrice * item.quantity, 4))
    );
    return total;
  }

  @action addProductCart = async (
    basketProduct: BasketProductModel
  ): Promise<void> => {
    stores.cartStore.addCartProduct(basketProduct.product, 1);
  };

  @action reduceProductCart = async (
    basketProduct: BasketProductModel
  ): Promise<void> => {
    stores.cartStore.reduceCartProduct(basketProduct, 1);
  };

  @action removeProductCart = async (
    basketProduct: BasketProductModel
  ): Promise<void> => {
    stores.cartStore.removeCartProduct(basketProduct);
  };

  @action placeOrder = async (): Promise<void> => {
    try {
      await this.sendOrder();
    } catch (e) {
      alert(e);
    }
  };

  private async sendOrder(): Promise<any> {
    this.loading = true;
    this.errors = [];
    try {
      const response = await this.orderService.placeOrder(
        stores.authStore.user.id,
        this.totalPrice(),
        stores.cartStore.cartProducts
      );
      if (response !== undefined) {
        if (response.success === true && response.order) {
          stores.cartStore.cleanCartProducts();
          this.navigation.navigate("Profile" as never, "OrdersTab" as never);
          Alert.alert(`Your order has been placed!`);
        } else if (response.success === false) {
          if (response.errors && response.errors.length > 0) {
            this.errors = response.errors;
          } else {
            this.errors = ["An unexpected error has occurred."];
          }
        }
      }

      this.loading = false;
    } catch (e) {
      console.warn(e);
      this.loading = false;
      throw e;
    }
  }
}

export default CartViewModel;
