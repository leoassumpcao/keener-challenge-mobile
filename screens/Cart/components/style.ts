import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#dce3f5",
    marginVertical: 5,
    alignSelf: "center",
    padding: 5,
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 3,
    resizeMode: "stretch",
  },
  center: {
    alignSelf: "center",
    width: "65%",
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    marginBottom: 30,
    color: "rgb(101,100,145)",
    fontSize: 18,
    textAlign: "justify",
  },
  price: {
    color: "rgb(72,81,161)",
    fontSize: 16,
  },
  rightColumn: {
    justifyContent: "space-around",
    width: 40,
    alignItems: "center",
  },
  quantity: {
    marginLeft: 23,
    marginTop: 15,
    width: 40,
    height: 40,
    fontSize: 20,
  },
  plusButton: {},
  minusButton: {},
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 0,
  },
});
