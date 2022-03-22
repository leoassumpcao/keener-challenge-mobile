import React from "react";
import ProfileDetailsViewModel from "./ProfileDetails.viewmodel";
import ProfileDetailsView from "./ProfileDetails.view";

const ProfileDetailsScreen = () => {
  const viewModel = new ProfileDetailsViewModel();
  return <ProfileDetailsView viewModel={viewModel}></ProfileDetailsView>;
};

export default ProfileDetailsScreen;
