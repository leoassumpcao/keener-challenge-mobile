import React from "react";
import SplashViewModel from "./Splash.viewmodel";
import SplashView from "./Splash.view";

const SplashScreen = () => {
  const viewModel = new SplashViewModel();
  return <SplashView viewModel={viewModel}></SplashView>;
};

export default SplashScreen;
