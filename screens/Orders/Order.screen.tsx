import React from "react";
import OrderViewModel from "./Order.viewmodel";
import OrderView from "./Order.view";

const OrderScreen = () => {
  const viewModel = new OrderViewModel();
  return <OrderView viewModel={viewModel}></OrderView>;
};

export default OrderScreen;
