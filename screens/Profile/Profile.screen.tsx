import React from "react";
import ProfileViewModel from "./Profile.viewmodel";
import ProfileView from "./Profile.view";

const ProfileScreen = () => {
  const viewModel = new ProfileViewModel();
  return <ProfileView viewModel={viewModel}></ProfileView>;
};

export default ProfileScreen;
