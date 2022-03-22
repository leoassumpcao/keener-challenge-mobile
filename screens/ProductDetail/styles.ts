import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    margin: 10,
    width: "90%",
    height: 200,
    alignSelf: "center",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
  },
  price: {
    fontSize: 28,
    fontFamily: "Montserrat-Regular",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    color: "#787878",
    textAlign: "justify",
    marginLeft: 20,
    marginRight: 20,
  },
  addCartView: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addCartBtt: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginTop: 40,
  },
  addCartText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 25,
    marginLeft: 15,
    color: "white",
  },
});
