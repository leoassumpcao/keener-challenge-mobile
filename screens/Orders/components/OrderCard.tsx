import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import OrderModel from "../../../models/order.model";

const OrderCard = ({
  order,
  onPress,
}: {
  order: OrderModel;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        order.delivered ? styles.deliveredStatus : styles.notDeliveredStatus,
      ]}
      onPress={onPress}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.orderId}>Order id: {order.orderId}</Text>
        <Text style={styles.date}>
          Date: {new Date(order.createdAt).toLocaleDateString()}
        </Text>
        <Text style={styles.price}>${order.total.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    elevation: 1,
    marginVertical: 8,
    backgroundColor: "rgba(97, 175, 254, 0.1)",
    borderTopColor: "#61affe",
    borderTopWidth: 1,
    borderRightColor: "#61affe",
    borderRightWidth: 1,
    borderBottomColor: "#61affe",
    borderBottomWidth: 1,
  },
  deliveredStatus: {
    borderLeftColor: "#83eb85",
    borderLeftWidth: 12,
  },
  notDeliveredStatus: {
    borderLeftColor: "#ed9039",
    borderLeftWidth: 12,
  },
  infoContainer: {
    padding: 10,
  },
  orderId: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto-Regular",
  },
  date: {
    fontSize: 18,
    fontWeight: "400",
    color: "#787878",
    fontFamily: "Roboto-Regular",
    marginTop: 5,
  },
  price: {
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    marginBottom: 5,
    textAlign: "right",
  },
});
export default OrderCard;
