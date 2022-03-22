import OrderModel, { IOrderModel } from "../../models/order.model";
import { action, computed, makeObservable, observable } from "mobx";
import OrderService from "../../services/Order";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

type OrderDetailsProductDetailRouteProps = {
  orderId: { orderId: string };
};

class OrderDetailsViewModel {
  private orderService: OrderService;
  private navigation = useNavigation();
  private route =
    useRoute<RouteProp<OrderDetailsProductDetailRouteProps, "orderId">>();

  constructor() {
    makeObservable(this);
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

  @observable
  private _order: IOrderModel = new OrderModel();
  @computed get order(): IOrderModel {
    return this._order;
  }
  set order(order: IOrderModel) {
    this._order = order;
  }

  @action async getOrder(): Promise<any> {
    this.loading = true;
    try {
      const { orderId } = this.route.params;

      if (orderId !== undefined) {
        const response = await this.orderService.getById(orderId);
        if (response !== undefined) {
          if (response.success === true && response.order) {
            this.order = response.order;
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

  keyExtractor = (item: IOrderModel, index: number) => {
    return `${item.orderId}-${index}`;
  };
}

export default OrderDetailsViewModel;
