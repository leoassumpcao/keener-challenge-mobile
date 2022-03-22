import React, { useEffect } from "react";
import {
  styles,
  OrderIdText,
  OrderIdValue,
  OrderDateText,
  OrderDateValue,
  ProductsListView,
  OrderTotalText,
  OrderStatusText,
  OrderStatusValue,
  OrderDeliveryAddressText,
  OrderDeliveryAddressValue,
} from "./styles";
import { observer } from "mobx-react";
import { Text, View } from "react-native";
import OrderDetailsViewModel from "./OrderDetails.viewmodel";
import Container from "../../components/Container";
import OrderedProductModel from "../../models/orderedProduct.model";
import HorizontalDivider from "../../components/HorizontalDivider";

interface OrderDetailsViewProps {
  viewModel: OrderDetailsViewModel;
}

const OrderDetailsView = observer(({ viewModel }: OrderDetailsViewProps) => {
  useEffect(() => {
    viewModel.loading = true;
    try {
      viewModel.getOrder();
    } catch (e) {
      console.warn(e);
    } finally {
      viewModel.loading = false;
    }
  }, []);

  return (
    <ProductsListView<React.ElementType>
      data={viewModel.order.orderedProducts.slice()}
      scrollsToTop={false}
      keyExtractor={viewModel.keyExtractor}
      style={styles.shadow}
      ListHeaderComponent={() => {
        return (
          <Container
            bodyStyle={styles.container}
            contentContainerStyle={styles.contentContainer}
            isScrollable={true}
          >
            <View style={{ flex: 1, marginBottom: 25 }}>
              <OrderIdText>Order Id#:</OrderIdText>
              <OrderIdValue>{viewModel.order.orderId}</OrderIdValue>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 10 }}>
              <OrderDateText>Order Date:</OrderDateText>
              <OrderDateValue>
                {new Date(viewModel.order.createdAt).toLocaleDateString()}
              </OrderDateValue>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 20 }}>
              <OrderStatusText>Order Status:</OrderStatusText>
              <OrderStatusValue
                status={viewModel.order.delivered ? "DELIVERED" : "PENDING"}
              >
                {viewModel.order.delivered ? "DELIVERED" : "PENDING"}
              </OrderStatusValue>
            </View>
            <View
              style={{ flex: 1, flexDirection: "column", marginBottom: 10 }}
            >
              <OrderDeliveryAddressText>
                Delivery Address:
              </OrderDeliveryAddressText>
              <OrderDeliveryAddressValue>
                {viewModel.order.deliveryAddress.addressLine1}
                {"\n"}
                {viewModel.order.deliveryAddress.addressLine2}
                {"\n"}
                {viewModel.order.deliveryAddress.neighborhood}
                {"\n"}
                {viewModel.order.deliveryAddress.city}
                {" - "}
                {viewModel.order.deliveryAddress.state}
                {"\n"}
                {viewModel.order.deliveryAddress.country}
                {"\n"}
                {viewModel.order.deliveryAddress.zipCode}
              </OrderDeliveryAddressValue>
            </View>
            <HorizontalDivider />
            <Text>PRODUCTS</Text>
          </Container>
        );
      }}
      ListFooterComponent={() => {
        return (
          <Container isScrollable={true}>
            <HorizontalDivider />
            <OrderTotalText>
              TOTAL: ${viewModel.order.total.toFixed(2)}
            </OrderTotalText>
          </Container>
        );
      }}
      renderItem={({
        item,
        index,
      }: {
        item: OrderedProductModel;
        index: React.Key;
      }) => {
        return (
          <Container isScrollable={true} bodyStyle={{ marginLeft: 15 }}>
            <Text style={styles.productName}>
              {item.quantity} x {item.product.name}
            </Text>

            <Text style={styles.productSubTotal}>
              subtotal: ${item.unitPrice.toFixed(2)}
            </Text>
          </Container>
        );
      }}
    />
  );
});

export default OrderDetailsView;
