import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f9fbfc",
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    alignItems: "center",
    backgroundColor: "#f9fbfc",
    width: "100%",
    height: "100%",
  },
  hello: {
    fontFamily: "Montserrat-Regular",
    fontSize: 25,
  },
  profile: {
    marginTop: 15,
    width: "80%",
  },
  profileText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 30,
  },
  orders: { marginTop: 15, width: "80%" },
  ordersText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 30,
  },
  logout: { marginTop: 15, position: "absolute", bottom: 0 },
});
