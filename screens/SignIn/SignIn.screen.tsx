import React from "react";
import SignInViewModel from "./SignIn.viewmodel";
import SignInView from "./SignIn.view";

const SignInScreen = () => {
  const viewModel = new SignInViewModel();
  return <SignInView viewModel={viewModel}></SignInView>;
};

export default SignInScreen;
