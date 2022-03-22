import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";

import { Router } from "./router/router";

import SplashScreen from "./screens/Splash/Splash.screen";
import stores from "./stores";
import UserService from "./services/User";
import UserModel from "./models/user.model";
import * as Font from "expo-font";

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  useEffect(() => {
    try {
      const fetchFonts = async () =>
        await Font.loadAsync({
          "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
          "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        });
      async function loadUsingStoredData() {
        if (stores.authStore.accessToken && stores.authStore.user.id) {
          const userService = new UserService();
          userService
            .getUserById(stores.authStore.user.id)
            .then((response) => {
              if (response && response.success && response.user) {
                const user: UserModel = response.user;
                stores.authStore.onStoredDataSuccess(user);
              } else {
                stores.authStore.onStoredDataFail();
              }
            })
            .catch((error) => {
              console.warn("failed load data");
              stores.authStore.onStoredDataFail();
            });
        }
      }

      loadUsingStoredData();
      fetchFonts();
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  }, []);

  if (!appIsReady) return <SplashScreen />;
  return <Router />;
}
