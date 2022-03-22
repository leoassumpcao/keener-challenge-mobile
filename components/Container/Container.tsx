import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
} from "react-native";
import { scale } from "react-native-size-matters";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface IContainerProps {
  children?: any;
  isScrollable?: Boolean;
  safeAreaStyle?: any;
  scrollViewStyle?: any;
  contentContainerStyle?: StyleProp<ViewStyle>;
  bodyStyle?: any;
}

export default function Container({
  children,
  isScrollable,
  scrollViewStyle,
  bodyStyle,
  contentContainerStyle,
}: IContainerProps) {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        {isScrollable ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
            contentContainerStyle={contentContainerStyle}
            style={[styles.outerView, scrollViewStyle]}
          >
            <View style={[styles.innerView, bodyStyle]}>{children}</View>
          </ScrollView>
        ) : (
          <View style={[styles.innerView, bodyStyle]}>{children}</View>
        )}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outerView: {
    flex: 1,
    flexGrow: 1,
  },
  innerView: {
    flex: 1,
    paddingHorizontal: scale(5),
  },
});
