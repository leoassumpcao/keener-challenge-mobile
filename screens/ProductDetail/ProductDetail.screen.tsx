import React from "react";
import ProductDetailViewModel from "./ProductDetail.viewmodel";
import ProductDetailView from "./ProductDetail.view";

const ProductDetailScreen = () => {
  const viewModel = new ProductDetailViewModel();
  return <ProductDetailView viewModel={viewModel}></ProductDetailView>;
};

export default ProductDetailScreen;
