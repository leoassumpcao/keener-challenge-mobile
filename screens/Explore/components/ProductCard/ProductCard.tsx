import React from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import ProductModel from "../../../../models/product.model";
import NoProductImage from "../../../../assets/no-product-image.png";

const ProductCard = ({
  product,
  onPress,
}: {
  product: ProductModel;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity style={[styles.card]} onPress={onPress}>
      <Image
        resizeMode="contain"
        style={styles.thumb}
        source={
          product.thumb && product.thumb !== ""
            ? { uri: product.thumb }
            : NoProductImage
        }
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>
          {product.description.length > 100
            ? product.description.substring(0, 100) + "..."
            : product.description}
        </Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderColor: "#e3e3e3",
    borderWidth: 1,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowColor: "#78a0ff",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 8,
  },
  thumb: {
    margin: 5,
    width: "95%",
    height: 100,
    alignSelf: "center",
  },
  infoContainer: {
    paddingTop: 2,
    paddingLeft: 8,
    paddingRight: 8,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Roboto-Regular",
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    color: "#787878",
    fontFamily: "Roboto-Regular",
    textAlign: "justify",
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontFamily: "Roboto-Regular",
    marginBottom: 5,
    marginTop: 8,
    textAlign: "right",
  },
});
export default ProductCard;
