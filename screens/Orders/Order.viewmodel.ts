import { IOrderServiceGetAll } from "./../../services/Order/types";
import { useNavigation } from "@react-navigation/native";
import { action, computed, makeObservable, observable } from "mobx";
import OrderModel from "../../models/order.model";
import OrderService from "../../services/Order";
import { useRef } from "react";
import { FlatList } from "react-native";

class OrderViewModel {
  private ordersService: OrderService;
  private navigation = useNavigation();
  public ordersListRef = useRef<FlatList>();

  constructor() {
    makeObservable(this);
    this.ordersService = new OrderService();
  }

  @observable
  private _lastFetchResult: IOrderServiceGetAll = {
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
  private _orders: OrderModel[] = [];

  @computed get orders(): OrderModel[] {
    return this._orders;
  }
  set orders(products: OrderModel[]) {
    this._orders = products;
  }

  @action OnOrderCardPress = (orderId: string): void => {
    this.navigation.navigate(
      "OrderDetailsTab" as never,
      {
        orderId: orderId,
      } as never
    );
  };

  @action updateOrders = async (): Promise<void> => {
    try {
      await this.fetchOrders(this._lastFetchResult.pageNumber + 1);
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
    this.orders = [];
    this.updateOrders();
  };

  handleOnEndReached = async () => {
    if (!this.loading && this._lastFetchResult.hasNextPage) {
      await this.updateOrders();
    }
  };

  keyExtractor = (item: OrderModel, index: number) => {
    return `${item.orderId}-${index}`;
  };

  private async fetchOrders(pageNumber: number): Promise<any> {
    this.loading = true;
    try {
      const response = await this.ordersService.getAll(pageNumber, 20);
      if (response !== undefined) {
        if (response.success === true && response.items) {
          this._lastFetchResult = response;
          this.orders = [...this.orders, ...this._lastFetchResult.items];
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

export default OrderViewModel;
