import React from "react";
import OrderDetailsViewModel from "./OrderDetails.viewmodel";
import OrderDetailsView from "./OrderDetails.view";

const OrderDetailsScreen = () => {
  const viewModel = new OrderDetailsViewModel();
  return <OrderDetailsView viewModel={viewModel}></OrderDetailsView>;
};

export default OrderDetailsScreen;
