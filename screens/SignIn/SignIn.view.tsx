import React from "react";
import { useWindowDimensions } from "react-native";
import { KeyboardView, Logo } from "./styles";
import { observer } from "mobx-react";
import SignInViewModel from "./SignIn.viewmodel";

import LogoImage from "../../assets/logo_big.png";

import Message from "../../components/Message";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import HorizontalDivider from "../../components/HorizontalDivider";
import Loading from "../../components/Loading";

interface SignInViewProps {
  viewModel: SignInViewModel;
}

const SignInView = observer(({ viewModel }: SignInViewProps) => {
  const { height } = useWindowDimensions();
  return (
    <KeyboardView>
      <Logo source={LogoImage} resizeMode="contain" height={height} />

      {viewModel.errors.length > 0 && (
        <Message variant="error">{viewModel.errors[0]}</Message>
      )}

      <CustomInput
        value={viewModel.email}
        placeholder="Your e-mail address..."
        onChangeText={viewModel.onEmailTextChange}
        onSubmitEditing={viewModel.signIn}
      />
      <CustomInput
        value={viewModel.password}
        placeholder="Your password..."
        onChangeText={viewModel.onPasswordTextChange}
        secureTextEntry
        onSubmitEditing={viewModel.signIn}
      />
      <CustomButton onPress={viewModel.signIn}>Sign In</CustomButton>

      {viewModel.loading && <Loading size="large" />}

      <CustomButton type="TERTIARY" onPress={viewModel.onForgotPasswordPress}>
        Forgot password?
      </CustomButton>

      <HorizontalDivider>Or</HorizontalDivider>

      <CustomButton type="TERTIARY" onPress={viewModel.onSignUpPress}>
        Don't have an account? Sign up!
      </CustomButton>
    </KeyboardView>
  );
});

export default SignInView;
