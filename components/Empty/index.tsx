import { View, Text, Image } from "react-native";
import React from "react";
import { scale } from "react-native-size-matters";

interface IEmptyProps {
  label?: string;
}

export default function Empty(props: IEmptyProps) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {props.label && (
        <Text style={{ fontSize: scale(23), paddingVertical: scale(20) }}>
          {props.label}
        </Text>
      )}
    </View>
  );
}
