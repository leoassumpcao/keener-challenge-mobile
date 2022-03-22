import React, { FC } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";

import Icon from "react-native-vector-icons/Feather";

import BasketProductModel from "../../../models/basketProduct.model";
import NoProductImage from "../../../assets/no-product-image.png";
import { styles } from "./style";

interface RenderBasketProps {
  item: BasketProductModel;
  onAddItem: Function;
  onRemoveItem: Function;
  onReduceQuantity: Function;
}

const hitSlop = { top: 20, left: 20, bottom: 20, right: 20 };

export const BasketItem: FC<RenderBasketProps> = (props) => {
  const { item, onAddItem, onRemoveItem, onReduceQuantity } = props;

  return (
    <View style={[styles.container, styles.shadow]}>
      <Image
        resizeMode="contain"
        style={[styles.image]}
        source={
          item.product.thumb && item.product.thumb !== ""
            ? { uri: item.product.thumb }
            : NoProductImage
        }
      />
      <View style={styles.center}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>${item.unitPrice.toFixed(2)}</Text>
      </View>

      <View style={styles.rightColumn}>
        <TouchableOpacity
          onPress={() => {
            item.quantity === 1
              ? onRemoveItem(item.productId)
              : onReduceQuantity(item.productId);
          }}
          hitSlop={hitSlop}
        >
          <Icon name="minus-circle" size={20} style={styles.plusButton} />
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity && item.quantity}</Text>
        <TouchableOpacity
          onPress={() => onAddItem(item)}
          hitSlop={hitSlop}
          delayPressOut={5}
        >
          <Icon name="plus-circle" size={20} style={styles.minusButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
