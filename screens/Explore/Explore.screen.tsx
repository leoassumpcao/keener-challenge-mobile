import React from "react";
import ExploreViewModel from "./Explore.viewmodel";
import ExploreView from "./Explore.view";

const ExploreScreen = () => {
  const viewModel = new ExploreViewModel();
  return <ExploreView viewModel={viewModel}></ExploreView>;
};

export default ExploreScreen;
