import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";
import { observer } from "mobx-react";
import ProfileViewModel from "./Profile.viewmodel";
import Loading from "../../components/Loading";
import Container from "../../components/Container";
import stores from "../../stores";
import CustomButton from "../../components/CustomButton";

interface ProfileViewProps {
  viewModel: ProfileViewModel;
}

const ProfileView = observer(({ viewModel }: ProfileViewProps) => {
  if (viewModel.loading) return <Loading />;

  return (
    <Container
      bodyStyle={styles.container}
      contentContainerStyle={styles.contentContainer}
      isScrollable={true}
    >
      <Text style={styles.hello}>
        {stores.authStore.user.name !== ""
          ? `Hello, ${stores.authStore.user.name}`
          : `Welcome, guest!`}
      </Text>

      <CustomButton
        style={styles.profile}
        textStyle={styles.profileText}
        onPress={viewModel.OnProfilePress}
      >
        Profile
      </CustomButton>

      <CustomButton
        style={styles.orders}
        textStyle={styles.ordersText}
        onPress={viewModel.OnOrdersPress}
      >
        Orders history
      </CustomButton>
      <CustomButton
        style={styles.logout}
        onPress={stores.authStore.onLogout}
        type="TERTIARY"
      >
        LOGOUT
      </CustomButton>
    </Container>
  );
});

export default ProfileView;
