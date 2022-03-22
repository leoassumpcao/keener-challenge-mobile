import React from "react";
import { useWindowDimensions } from "react-native";
import { Logo } from "./styles";

import LogoImage from "../../assets/logo_big.png";

import SplashViewModel from "./Splash.viewmodel";
import Container from "../../components/Container";

interface SplashViewProps {
  viewModel: SplashViewModel;
}

const SplashView = ({ viewModel }: SplashViewProps) => {
  const { height } = useWindowDimensions();
  return (
    <Container scrollViewStyle={{ justifyContent: "center" }}>
      <Logo source={LogoImage} resizeMode="contain" height={height} />
    </Container>
  );
};

export default SplashView;
