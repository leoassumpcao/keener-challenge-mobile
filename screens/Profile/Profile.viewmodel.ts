import { useNavigation } from "@react-navigation/native";
import { action, computed, makeObservable, observable } from "mobx";

class ProfileViewModel {
  private navigation = useNavigation();

  constructor() {
    makeObservable(this);
  }

  @observable
  private _loading: boolean = false;
  @computed get loading(): boolean {
    return this._loading;
  }
  set loading(loading: boolean) {
    this._loading = loading;
  }

  @action OnProfilePress = (): void => {
    this.navigation.navigate("ProfileDetailsTab" as never);
  };

  @action OnOrdersPress = (): void => {
    this.navigation.navigate("OrdersTab" as never);
  };
}

export default ProfileViewModel;
