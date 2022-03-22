import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { observer } from "mobx-react";
import ProductDetailViewModel from "./ProductDetail.viewmodel";
import Loading from "../../components/Loading";
import Message from "../../components/Message";
import CustomButton from "../../components/CustomButton";
import { styles } from "./styles";
import NoProductImage from "../../assets/no-product-image.png";
import Container from "../../components/Container";

interface ProductDetailViewProps {
  viewModel: ProductDetailViewModel;
}

const ProductDetailView = observer(({ viewModel }: ProductDetailViewProps) => {
  useEffect(() => {
    viewModel.loading = true;
    try {
      viewModel.updateProduct();
    } catch (e) {
      console.warn(e);
    } finally {
      viewModel.loading = false;
    }
  }, []);

  if (viewModel.loading) return <Loading />;

  {
    viewModel.errors && viewModel.errors.length > 0 && (
      <Message variant="error">{viewModel.errors[0]}</Message>
    );
  }

  if (!viewModel.product.name || !viewModel.product.productId)
    return (
      <Message variant="error" size="large">
        Oops, there was a problem to load your product.
      </Message>
    );

  return (
    <Container isScrollable={true}>
      <Text style={styles.name}>{viewModel.product.name}</Text>
      <Text style={styles.price}>${viewModel.product.price.toFixed(2)}</Text>
      <Image
        resizeMode="contain"
        style={styles.thumb}
        source={
          viewModel.product.thumb && viewModel.product.thumb !== ""
            ? { uri: viewModel.product.thumb }
            : NoProductImage
        }
      />
      <Text style={styles.description}>{viewModel.product.description}</Text>
      {viewModel.product.inStock && (
        <View style={styles.addCartView}>
          <CustomButton
            textProps={{ style: styles.addCartText }}
            iconProps={{ name: "shopping-cart", color: "white", size: 26 }}
            onPress={viewModel.addProductToCart}
            style={styles.addCartBtt}
          >
            Add to cart
          </CustomButton>
        </View>
      )}
      {!viewModel.product.inStock && (
        <View style={styles.addCartView}>
          <CustomButton
            type="ERROR"
            textProps={{ style: styles.addCartText }}
            style={styles.addCartBtt}
            iconProps={{
              name: "shopping-cart",
              color: "white",
              size: 26,
            }}
          >
            OUT OF STOCK
          </CustomButton>
        </View>
      )}
    </Container>
  );
});

export default ProductDetailView;
