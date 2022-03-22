import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { observer } from "mobx-react";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import stores from "../stores";

export const Router = observer(() => {
  return (
    <NavigationContainer>
      {stores.authStore.user.id !== "" ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
});
