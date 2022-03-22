import { Alert } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { action, computed, makeObservable, observable } from "mobx";
import ProductModel from "../../models/product.model";
import ProductService from "../../services/Product/product.service";
import stores from "../../stores/";

type ProductDetailRouteProps = {
  productId: { productId: string };
};

class ProductDetailViewModel {
  private productService: ProductService;
  private navigation = useNavigation();
  private route = useRoute<RouteProp<ProductDetailRouteProps, "productId">>();

  constructor() {
    makeObservable(this);
    this.productService = new ProductService();
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

  @observable
  private _product: ProductModel = new ProductModel();
  @computed get product(): ProductModel {
    return this._product;
  }
  set product(product: ProductModel) {
    this._product = product;
  }

  @action updateProduct = async (): Promise<void> => {
    try {
      await this.getProduct();
    } catch (e) {
      alert(e);
    }
  };

  @action addProductToCart = async (): Promise<void> => {
    try {
      stores.cartStore.addCartProduct(this.product, 1);
      Alert.alert(`${this.product.name} added to your cart.`);
      this.navigation.navigate("Cart" as never, "CartTab" as never);
    } catch (e) {
      alert(e);
    }
  };

  private async getProduct(): Promise<any> {
    this.loading = true;
    try {
      const { productId } = this.route.params;

      if (productId !== undefined) {
        const response = await this.productService.getById(productId);
        if (response !== undefined) {
          if (response.success === true && response.product) {
            this.product = response.product;
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

export default ProductDetailViewModel;
