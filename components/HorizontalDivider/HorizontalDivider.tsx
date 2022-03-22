import { View, ViewProps } from "react-native";

const HorizontalDivider = (props: ViewProps) => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        borderRadius: 1,
        borderWidth: 1,
        borderColor: "lightgray",
        borderStyle: "dotted",
        marginBottom: 15,
        marginTop: 15,
      }}
    />
  );
};

export default HorizontalDivider;
