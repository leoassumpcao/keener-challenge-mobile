import { useNavigation } from "@react-navigation/native";
import { action, computed, makeObservable, observable } from "mobx";
import ProductModel from "../../models/product.model";
import ProductService from "../../services/Product";
import { IProductsServiceGetAll } from "../../services/Product/types";
import { useRef } from "react";
import { FlatList } from "react-native";

class ExploreViewModel {
  private productService: ProductService;
  private navigation = useNavigation();
  public productsListRef = useRef<FlatList>();

  constructor() {
    makeObservable(this);
    this.productService = new ProductService();
  }

  @observable
  private _lastFetchResult: IProductsServiceGetAll = {
    items: [],
    errors: [],
    success: false,
    hasNextPage: false,
    hasPreviousPage: false,
    pageNumber: 0,
    totalCount: 0,
    totalPages: 0,
  };

  @observable
  private _scrollPosition: number = 0;

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
  private _products: ProductModel[] = [];

  @computed get products(): ProductModel[] {
    return this._products;
  }
  set products(products: ProductModel[]) {
    this._products = products;
  }

  @observable
  private _searchText: string = "";
  @computed get searchText(): string {
    return this._searchText;
  }
  set searchText(value: string) {
    this._searchText = value;
  }

  @action OnProductCardPress = (productId: string): void => {
    this.navigation.navigate(
      "ProductDetailTab" as never,
      {
        productId: productId,
      } as never
    );
  };

  @action updateProducts = async (): Promise<void> => {
    try {
      await this.fetchProducts(
        this._lastFetchResult.pageNumber + 1,
        this.searchText
      );
    } catch (e) {
      console.warn(e);
    }
  };

  handleOnRefresh = async () => {
    this._lastFetchResult = {
      items: [],
      errors: [],
      success: false,
      hasNextPage: false,
      hasPreviousPage: false,
      pageNumber: 0,
      totalCount: 0,
      totalPages: 0,
    };
    this.products = [];
    this.updateProducts();
  };

  handleOnEndReached = async () => {
    if (!this.loading && this._lastFetchResult.hasNextPage) {
      await this.updateProducts();
    }
  };

  keyExtractor = (item: ProductModel, index: number) => {
    return `${item.productId}-${index}`;
  };

  handleSearchOnChangeText = (text: string) => {
    this.searchText = text;
  };

  handleSearchOnSubmitEditing = async () => {
    if (!this.loading) {
      this.products = [];
      await this.fetchProducts(1, this.searchText);
    }
  };

  private async fetchProducts(
    pageNumber: number,
    searchText: string = ""
  ): Promise<any> {
    this.loading = true;
    try {
      const response = await this.productService.getAll({
        pageNumber: pageNumber,
        pageSize: 20,
        nameOrDescription: searchText,
      });
      if (response !== undefined) {
        if (response.success === true && response.items) {
          this._lastFetchResult = response;
          this.products = [...this.products, ...this._lastFetchResult.items];
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

export default ExploreViewModel;
