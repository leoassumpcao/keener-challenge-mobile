import React, { useEffect } from "react";
import { RefreshControl } from "react-native";
import { OrdersView, styles, Title } from "./styles";
import { observer } from "mobx-react";
import OrderViewModel from "./Order.viewmodel";
import Message from "../../components/Message";
import OrderCard from "./components/OrderCard";
import OrderModel from "../../models/order.model";

interface OrderViewProps {
  viewModel: OrderViewModel;
}

const OrderView = observer(({ viewModel }: OrderViewProps) => {
  useEffect(() => {
    try {
      viewModel.updateOrders();
    } catch (e) {
      console.warn(e);
    } finally {
    }
  }, []);

  {
    viewModel.errors && viewModel.errors.length > 0 && (
      <Message variant="warning">{viewModel.errors[0]}</Message>
    );
  }

  if (viewModel.orders.length == 0)
    return (
      <Message variant="warning" size="large">
        There are no orders. :(
      </Message>
    );

  return (
    <OrdersView<React.ElementType>
      ListHeaderComponent={() => {
        return <Title>ORDERS</Title>;
      }}
      ListHeaderComponentStyle={styles.container}
      ref={viewModel.ordersListRef}
      data={viewModel.orders.slice()}
      scrollsToTop={false}
      refreshControl={
        <RefreshControl
          enabled={true}
          refreshing={viewModel.loading}
          onRefresh={viewModel.handleOnRefresh}
        />
      }
      keyExtractor={viewModel.keyExtractor}
      renderItem={({ item, index }: { item: OrderModel; index: React.Key }) => {
        return (
          <OrderCard
            order={item}
            onPress={() => {
              viewModel.OnOrderCardPress(item.orderId);
            }}
          />
        );
      }}
      onEndReached={viewModel.handleOnEndReached}
      onEndReachedThreshold={0.5}
      maintainVisibleContentPosition={{
        minIndexForVisible: 0,
      }}
    />
  );
});

export default OrderView;
