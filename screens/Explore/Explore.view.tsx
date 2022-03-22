import React, { useEffect } from "react";
import { RefreshControl, SafeAreaView } from "react-native";
import { observer } from "mobx-react";
import ExploreViewModel from "./Explore.viewmodel";
import Message from "../../components/Message";
import ProductModel from "../../models/product.model";
import ProductCard from "./components/ProductCard";
import SearchBar from "../../components/SearchBar";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./styles";

interface ExploreViewProps {
  viewModel: ExploreViewModel;
}

const ExploreView = observer(({ viewModel }: ExploreViewProps) => {
  useEffect(() => {
    try {
      viewModel.updateProducts();
    } catch (e) {
      console.warn(e);
    } finally {
    }
  }, []);

  return (
    <SafeAreaView style={{ height: "100%" }}>
      {viewModel.errors && viewModel.errors.length > 0 && (
        <Message variant="error" size="medium">
          {viewModel.errors[0]}
        </Message>
      )}
      {viewModel.products && viewModel.products.length === 0 && (
        <Message variant="warning" size="large">
          There are no products. :(
        </Message>
      )}

      <SearchBar
        placeholder="Search here..."
        onChangeText={viewModel.handleSearchOnChangeText}
        onSubmitEditing={viewModel.handleSearchOnSubmitEditing}
      />
      <KeyboardAwareFlatList
        data={viewModel.products.slice()}
        scrollsToTop={true}
        style={styles.container}
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={viewModel.loading}
            onRefresh={viewModel.handleOnRefresh}
          />
        }
        keyExtractor={viewModel.keyExtractor}
        renderItem={({
          item,
          index,
        }: {
          item: ProductModel;
          index: React.Key;
        }) => {
          return (
            <ProductCard
              product={item}
              onPress={() => {
                viewModel.OnProductCardPress(item.productId);
              }}
            />
          );
        }}
        onEndReached={viewModel.handleOnEndReached}
        onEndReachedThreshold={0.5}
        maintainVisibleContentPosition={{
          minIndexForVisible: 0,
        }}
      />
    </SafeAreaView>
  );
});

export default ExploreView;
