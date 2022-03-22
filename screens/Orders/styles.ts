import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Title = styled.Text`
  font-size: 25px;
  font-family: "Roboto-Regular";
  margin-bottom: 5px;
  margin-top: 5px;
  text-align: center;
`;

export const OrdersView = styled.FlatList`
  padding: 10px;
  background-color: #f9fbfc;
  flex: 1;
  width: 100%;
`;

export const styles = StyleSheet.create({
  container: {
    padding: 2,
    backgroundColor: "#f9fbfc",
    flex: 1,
    width: "100%",
  },
});
