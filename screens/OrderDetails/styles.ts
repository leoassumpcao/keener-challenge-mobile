import styled from "styled-components/native";
import { StyleSheet } from "react-native";

interface IStatusValueProps {
  status?: string | undefined;
}

export const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    height: "100%",
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    height: "100%",
  },
  productName: {
    textAlign: "left",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
  },
  productSubTotal: { textAlign: "right", fontSize: 18, marginBottom: 5 },
  shadow: {
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
  },
  green: {
    color: "green",
  },
});

export const OrderIdText = styled.Text`
  font-size: 20px;
  font-family: "Roboto-Bold";
  font-weight: bold;
`;

export const OrderIdValue = styled.Text`
  font-size: 16px;
  font-family: "Roboto-Regular";
  text-align: center;
`;

export const OrderDateText = styled.Text`
  font-size: 18px;
  font-family: "Roboto-Bold";
  font-weight: bold;
`;

export const OrderDateValue = styled.Text`
  font-size: 18px;
  font-family: "Roboto-Bold";
  font-weight: bold;
  margin-left: 30px;
`;

export const OrderStatusText = styled.Text`
  font-size: 18px;
  font-family: "Roboto-Bold";
  font-weight: bold;
`;

export const OrderStatusValue = styled.Text<IStatusValueProps>`
  font-size: 18px;
  font-family: "Roboto-Bold";
  font-weight: bold;
  margin-left: 15px;
  color: ${(props) =>
    props.status === undefined || props.status === "CANCELED"
      ? "#f33b3e"
      : props.status === "DELIVERED"
      ? "#3bf354"
      : "#ed9039"};
`;

export const OrderTotalText = styled.Text`
  font-size: 25px;
  font-family: "Roboto-Bold";
  text-align: right;
  font-weight: bold;
  margin-top: 20px;
`;

export const OrderDeliveryAddressText = styled.Text`
  font-size: 18px;
  font-family: "Roboto-Bold";
  font-weight: bold;
`;

export const OrderDeliveryAddressValue = styled.Text`
  font-size: 18px;
  font-family: "Roboto-Regular";
  margin-left: 50px;
  margin-top: 10px;
`;

export const ProductsListView = styled.FlatList`
  flex: 1;
  padding: 10px;
  background-color: #f9fbfc;
  width: 100%;
  height: 100%;
`;
