import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../screens/SignIn";
import SignUpScreen from "../screens/SignUp";

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
