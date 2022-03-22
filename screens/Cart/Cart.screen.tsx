import React from "react";
import CartViewModel from "./Cart.viewmodel";
import CartView from "./Cart.view";

const CartScreen = () => {
  const viewModel = new CartViewModel();
  return <CartView viewModel={viewModel}></CartView>;
};

export default CartScreen;
