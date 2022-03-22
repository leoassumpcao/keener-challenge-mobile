import React from "react";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  ColorValue,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

interface ICustomButtonProps extends ActivityIndicatorProps {
  hasBackground?: boolean;
  size?: number | "small" | "large" | undefined;
  color?: ColorValue | undefined;
  style?: StyleProp<ViewStyle> | undefined;
}

export default function Loading(props: ICustomButtonProps) {
  return (
    <ActivityIndicator
      size={props.size}
      color={props.color}
      style={[
        styles.loadingIndicator,
        props.style,
        {
          backgroundColor: props.hasBackground ? "#3b71f3" : "transparent",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  loadingIndicator: {
    alignItems: "center",
    justifyContent: "center",
  },
});
