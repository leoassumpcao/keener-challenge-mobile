import {
  PressableProps,
  TextProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { Container, Text } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { IconProps } from "react-native-vector-icons/Icon";
import React from "react";

interface ICustomButtonProps extends PressableProps {
  type?: "PRIMARY" | "TERTIARY" | "ERROR" | undefined;
  textProps?: TextProps;
  textColor?: number | string;
  textStyle?: TextStyle;
  iconProps?: IconProps;
  viewStyle?: ViewStyle | undefined;
}

const CustomButton = (props: ICustomButtonProps) => {
  if (props.iconProps) {
    return (
      <Container {...props}>
        <View
          style={[
            props.viewStyle,
            { flexDirection: "row", alignContent: "center" },
          ]}
        >
          <Icon {...props.iconProps}></Icon>
          <Text type={props.type} style={props.textStyle} {...props.textProps}>
            {props.children}
          </Text>
        </View>
      </Container>
    );
  } else {
    return (
      <Container {...props}>
        <Text type={props.type} style={props.textStyle} {...props.textProps}>
          {props.children}
        </Text>
        {}
      </Container>
    );
  }
};

export default CustomButton;
