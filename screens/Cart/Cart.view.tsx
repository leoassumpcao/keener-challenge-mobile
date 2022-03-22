import React from "react";
import { TouchableOpacity, View } from "react-native";
import { observer } from "mobx-react";
import Icon from "react-native-vector-icons/Feather";
import { SwipeListView } from "react-native-swipe-list-view";

import Message from "../../components/Message";
import { BasketItem } from "./components/BasketItem";
import Empty from "../../components/Empty";
import CustomButton from "../../components/CustomButton";

import CartViewModel from "./Cart.viewmodel";
import { styles, TotalText, TotalValue } from "./styles";
import stores from "../../stores/";
import BasketProductModel from "../../models/basketProduct.model";
import HorizontalDivider from "../../components/HorizontalDivider";

interface CartViewProps {
  viewModel: CartViewModel;
}

const CartView = observer(({ viewModel }: CartViewProps) => {
  return (
    <>
      {viewModel.errors && viewModel.errors.length > 0 && (
        <Message variant="error" size="large" style={{ marginTop: 50 }}>
          {viewModel.errors[0]}
        </Message>
      )}

      <SwipeListView
        ListEmptyComponent={() => <Empty label={"Your cart is empty."} />}
        contentContainerStyle={styles.container}
        data={stores.cartStore.cartProducts.slice()}
        keyExtractor={(item: BasketProductModel, index: number) =>
          item.productId
        }
        renderItem={(data, rowMap) => (
          <BasketItem
            item={data.item}
            onAddItem={() => viewModel.addProductCart(data.item)}
            onReduceQuantity={() => viewModel.reduceProductCart(data.item)}
            onRemoveItem={() => viewModel.removeProductCart(data.item)}
          />
        )}
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.rowBack}>
            <TouchableOpacity
              onPress={() => viewModel.removeProductCart(data.item)}
              style={styles.deleteButton}
            >
              <Icon name="delete" size={45} color="white" />
            </TouchableOpacity>
          </View>
        )}
        disableRightSwipe
        leftOpenValue={75}
        rightOpenValue={-75}
        ListFooterComponent={() => {
          if (stores.cartStore.cartProducts.length === 0) return <></>;
          return (
            <View>
              <HorizontalDivider />
              <View style={styles.subPrices}>
                <TotalText>TOTAL:</TotalText>
                <TotalValue>${viewModel.totalPrice().toFixed(2)}</TotalValue>
              </View>
              <HorizontalDivider />
            </View>
          );
        }}
      />

      {stores.cartStore.cartProducts.length > 0 && (
        <View style={styles.checkoutView}>
          <CustomButton
            type="PRIMARY"
            textProps={{
              style: {
                fontFamily: "Montserrat-Regular",
                fontSize: 25,
                marginLeft: 15,
                color: "white",
              },
            }}
            style={styles.checkoutBtt}
            onPress={viewModel.placeOrder}
            iconProps={{ name: "shopping-bag", color: "white", size: 26 }}
          >
            CHECK OUT
          </CustomButton>
        </View>
      )}
    </>
  );
});

export default CartView;
