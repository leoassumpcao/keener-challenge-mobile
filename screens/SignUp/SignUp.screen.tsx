import React from "react";
import SignUpViewModel from "./SignUp.viewmodel";
import SignUpView from "./SignUp.view";

const SignUpScreen = () => {
  const viewModel = new SignUpViewModel();
  return <SignUpView viewModel={viewModel}></SignUpView>;
};

export default SignUpScreen;
