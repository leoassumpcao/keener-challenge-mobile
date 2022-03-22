import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9fbfc",
    height: "100%",
  },
  fields: {
    width: "80%",
  },
  registerButton: {
    width: "70%",
    marginTop: 50,
  },
  registerButtonText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 30,
  },
});

export const Logo = styled.Image`
  width: 70%;
  max-width: 300px;
  max-height: 200px;
  height: ${(props) => (props.height ? props.height * 0.25 + "px" : "25%")};
  margin-bottom: 15px;
`;
