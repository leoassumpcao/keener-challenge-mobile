import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";

import Explore from "../screens/Explore";
import ProductDetail from "../screens/ProductDetail";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import ProfileDetails from "../screens/ProfileDetails";
import Orders from "../screens/Orders";
import OrderDetails from "../screens/OrderDetails";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function ExploreTabStack() {
  return (
    <Stack.Navigator initialRouteName="ExploreTab">
      <Stack.Screen
        name="ExploreTab"
        component={Explore}
        options={{ headerShown: false, headerTitle: "" }}
      />
      <Stack.Screen
        name="ProductDetailTab"
        component={ProductDetail}
        options={{
          headerShown: true,
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}

export function CartTabStack() {
  return (
    <Stack.Navigator initialRouteName="CartTab">
      <Stack.Screen
        name="CartTab"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetailTab"
        component={ProductDetail}
        options={{
          headerShown: true,
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}

export function ProfileTabStack() {
  return (
    <Stack.Navigator initialRouteName="ProfileTab">
      <Stack.Screen
        name="ProfileTab"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileDetailsTab"
        component={ProfileDetails}
        options={{ headerShown: true, headerTitle: "", headerBackTitle: "" }}
      />
      <Stack.Screen
        name="OrdersTab"
        component={Orders}
        options={{ headerShown: true, headerTitle: "", headerBackTitle: "" }}
      />
      <Stack.Screen
        name="OrderDetailsTab"
        component={OrderDetails}
        options={{ headerShown: true, headerTitle: "", headerBackTitle: "" }}
      />
    </Stack.Navigator>
  );
}

export function AppStack() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Explore":
              iconName = "home";
              break;
            case "Cart":
              iconName = "shopping-cart";
              break;
            case "Profile":
              iconName = "user";
              break;
            default:
              iconName = "circle";
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4f88e3",
        tabBarinactiveTintColor: "#777",
      })}
    >
      <BottomTab.Screen
        name="Explore"
        component={ExploreTabStack}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartTabStack}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileTabStack}
        options={{ headerShown: false }}
      />
    </BottomTab.Navigator>
  );
}
