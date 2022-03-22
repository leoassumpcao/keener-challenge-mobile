import React from "react";
import { useWindowDimensions, ActivityIndicator } from "react-native";
import { Logo, styles } from "./styles";
import { observer } from "mobx-react";
import { Masks } from "react-native-mask-input";

import LogoImage from "../../assets/logo_big.png";

import SignUpViewModel from "./SignUp.viewmodel";

import Message from "../../components/Message";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import Container from "../../components/Container";
import CustomMaskedInput from "../../components/CustomMaskedInput";
import HorizontalDivider from "../../components/HorizontalDivider";

interface SignUpViewProps {
  viewModel: SignUpViewModel;
}

const SignUpView = observer(({ viewModel }: SignUpViewProps) => {
  const { height } = useWindowDimensions();
  return (
    <Container bodyStyle={styles.container} isScrollable={true}>
      <Logo source={LogoImage} resizeMode="contain" height={height} />
      {!viewModel.arePasswordsMatching && (
        <Message variant="error" size="medium">
          Password and confirm password should be same.
        </Message>
      )}
      {viewModel.errors && viewModel.errors.length > 0 && (
        <Message variant="error" size="large">
          {viewModel.errors[0]}
        </Message>
      )}
      <CustomInput
        placeholder="Full name..."
        onChangeText={viewModel.onNameTextChange}
        onSubmitEditing={viewModel.signUp}
        style={styles.fields}
      />
      <CustomInput
        placeholder="E-mail address..."
        onChangeText={viewModel.onEmailTextChange}
        onSubmitEditing={viewModel.signUp}
        style={styles.fields}
      />
      <CustomMaskedInput
        value={viewModel.birthDate}
        onChangeText={viewModel.onBirthDateTextChange}
        mask={Masks.DATE_DDMMYYYY}
        style={styles.fields}
      />
      <CustomInput
        placeholder="Your password..."
        onChangeText={viewModel.onPasswordTextChange}
        secureTextEntry={true}
        onSubmitEditing={viewModel.signUp}
        style={styles.fields}
      />
      <CustomInput
        placeholder="Confirm your password..."
        onChangeText={viewModel.onConfirmPasswordTextChange}
        secureTextEntry={true}
        onSubmitEditing={viewModel.signUp}
        style={styles.fields}
      />
      <CustomInput
        placeholder="Your address..."
        onChangeText={viewModel.onAddressTextChange}
        onSubmitEditing={viewModel.signUp}
        style={styles.fields}
      />
      <CustomInput
        placeholder="Optional: Your address line 2..."
        onChangeText={viewModel.onAddressSecondTextChange}
        onSubmitEditing={viewModel.signUp}
        style={styles.fields}
      />
      <CustomInput
        placeholder="Neighborhood"
        onChangeText={viewModel.onNeighborhoodTextChange}
        onSubmitEditing={viewModel.signUp}
        style={styles.fields}
      />
      <CustomInput
        placeholder="City"
        onChangeText={viewModel.onCityTextChange}
        onSubmitEditing={viewModel.signUp}
        style={styles.fields}
      />

      <CustomInput
        placeholder="State"
        onChangeText={viewModel.onStateTextChange}
        onSubmitEditing={viewModel.signUp}
        style={styles.fields}
      />
      <CustomInput
        placeholder="Country"
        onChangeText={viewModel.onCountryTextChange}
        onSubmitEditing={viewModel.signUp}
        style={styles.fields}
      />
      <CustomInput
        placeholder="Zip code"
        onChangeText={viewModel.onZipTextChange}
        onSubmitEditing={viewModel.signUp}
        style={styles.fields}
      />
      <CustomButton
        onPress={viewModel.signUp}
        style={styles.registerButton}
        textStyle={styles.registerButtonText}
      >
        Register
      </CustomButton>

      <ActivityIndicator animating={viewModel.loading} />

      <HorizontalDivider>Or</HorizontalDivider>
      <CustomButton
        type="TERTIARY"
        onPress={() => {
          if (viewModel.arePasswordsMatching) viewModel.onSignInPress();
        }}
      >
        Already have an account? Sign in!
      </CustomButton>
    </Container>
  );
});

export default SignUpView;
