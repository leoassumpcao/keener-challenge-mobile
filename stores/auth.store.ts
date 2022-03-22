import { action, computed, makeObservable, observable } from "mobx";
import UserModel, { IUserModel } from "../models/user.model";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  constructor() {
    makeObservable(this);
    AsyncStorage.getItem("auth_accessToken").then((value) => {
      if (value !== null) this._accessToken = value;
    });
    AsyncStorage.getItem("auth_user").then((value) => {
      if (value !== null) {
        const user: UserModel = JSON.parse(value);
        if (user) this._user = user;
      }
    });
  }

  @observable
  private _accessToken: string = "";
  @computed get accessToken(): string {
    return this._accessToken;
  }
  @action setAccessToken = (token: string): void => {
    this._accessToken = token;
    this.saveOnStore();
  };

  @observable
  private _user: IUserModel = new UserModel();
  @computed get user(): UserModel {
    return this._user;
  }
  @action setUser = (user: UserModel): void => {
    this._user = user;
    this.saveOnStore();
  };

  saveOnStore = (): void => {
    AsyncStorage.setItem("auth_accessToken", this._accessToken).then(() => {
      return true;
    });
    AsyncStorage.setItem("auth_user", JSON.stringify(this._user)).then(() => {
      return true;
    });
  };

  onLogin = (user: UserModel, token: string): void => {
    this.setUser(user);
    this.setAccessToken(token);
  };

  onLogout = (): void => {
    this.setUser(new UserModel());
    this.setAccessToken("");
  };

  onStoredDataSuccess = (user: UserModel): void => {
    this.setUser(user);
  };

  onStoredDataFail = (): void => {
    this.setUser(new UserModel());
    this.setAccessToken("");
  };
}

export default AuthStore;
