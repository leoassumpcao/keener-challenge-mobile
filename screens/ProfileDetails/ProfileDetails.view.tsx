import React from "react";
import { observer } from "mobx-react";
import { Masks } from "react-native-mask-input";

import ProfileDetailsViewModel from "./ProfileDetails.viewmodel";
import { styles } from "./styles";

import CustomInput from "../../components/CustomInput";
import Container from "../../components/Container";
import CustomMaskedInput from "../../components/CustomMaskedInput";
import stores from "../../stores";
import moment from "moment";

interface ProfileDetailsViewProps {
  viewModel: ProfileDetailsViewModel;
}

const ProfileDetailsView = observer(
  ({ viewModel }: ProfileDetailsViewProps) => {
    return (
      <Container
        bodyStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        isScrollable={true}
      >
        <CustomInput
          placeholder="<Your full name is empty>"
          onChangeText={viewModel.onNameTextChange}
          onSubmitEditing={viewModel.ProfileDetails}
          value={stores.authStore.user.name}
          editable={false}
        />
        <CustomInput
          placeholder="<Your e-mail address is empty>"
          onChangeText={viewModel.onEmailTextChange}
          onSubmitEditing={viewModel.ProfileDetails}
          value={stores.authStore.user.email}
          editable={false}
        />
        <CustomMaskedInput
          placeholder="<Your birth date is empty>"
          onChangeText={viewModel.onBirthDateTextChange}
          mask={Masks.DATE_DDMMYYYY}
          value={moment(stores.authStore.user.birthDate).format("DD/MM/yyyy")}
          editable={false}
        />
        <CustomInput
          placeholder="<Your address is empty>"
          onChangeText={viewModel.onAddressTextChange}
          onSubmitEditing={viewModel.ProfileDetails}
          value={stores.authStore.user.address.addressLine1}
          editable={false}
        />
        <CustomInput
          placeholder="<Your address line 2 is empty>"
          onChangeText={viewModel.onAddressSecondTextChange}
          onSubmitEditing={viewModel.ProfileDetails}
          value={stores.authStore.user.address.addressLine2}
          editable={false}
        />
        <CustomInput
          placeholder="<Your neighborhood is empty>"
          onChangeText={viewModel.onNeighborhoodTextChange}
          onSubmitEditing={viewModel.ProfileDetails}
          value={stores.authStore.user.address.neighborhood}
          editable={false}
        />
        <CustomInput
          placeholder="<Your city is empty>"
          onChangeText={viewModel.onCityTextChange}
          onSubmitEditing={viewModel.ProfileDetails}
          value={stores.authStore.user.address.city}
          editable={false}
        />

        <CustomInput
          placeholder="<Your state is empty>"
          onChangeText={viewModel.onStateTextChange}
          onSubmitEditing={viewModel.ProfileDetails}
          value={stores.authStore.user.address.state}
          editable={false}
        />
        <CustomInput
          placeholder="<Your country is empty>"
          onChangeText={viewModel.onCountryTextChange}
          onSubmitEditing={viewModel.ProfileDetails}
          value={stores.authStore.user.address.country}
          editable={false}
        />
        <CustomInput
          placeholder="<Your zip code is empty>"
          onChangeText={viewModel.onZipTextChange}
          onSubmitEditing={viewModel.ProfileDetails}
          value={stores.authStore.user.address.zipCode}
          editable={false}
        />
      </Container>
    );
  }
);

export default ProfileDetailsView;
