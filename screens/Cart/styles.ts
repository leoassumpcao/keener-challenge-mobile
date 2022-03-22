import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const TotalText = styled.Text`
  font-size: 30px;
  font-family: "Roboto-Bold";
  margin-top: 10px;
  margin-left: 20px;
`;

export const TotalValue = styled.Text`
  font-size: 30px;
  font-family: "Roboto-Bold";
  margin-top: 10px;
  margin-right: 20px;
`;

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  rowFront: {
    justifyContent: "center",
    backgroundColor: "#808080",
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  deleteButton: {
    position: "absolute",
    right: 10,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  subPrices: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  rowBack: {
    width: "95%",
    flexDirection: "row",
    backgroundColor: "#FF0000",
    height: 95,
    marginVertical: 8,
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 5,
    justifyContent: "space-around",
  },
  priceContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  checkoutView: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkoutBtt: {
    width: "90%",
  },
});
