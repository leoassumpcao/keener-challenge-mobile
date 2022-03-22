import { action, computed, makeObservable, observable } from "mobx";
import AddressModel from "./address.model";

export interface IUserModel {
  id: string;
  name: string;
  email: string;
  birthDate: string;
  address: AddressModel;
  phone: string;
  isActive: boolean;
  memberSince: string;
}

class UserModel implements IUserModel {
  id: string = "";
  name: string = "";
  email: string = "";
  birthDate: string = "";
  address: AddressModel = new AddressModel();
  phone: string = "";
  isActive: boolean = false;
  memberSince: string = "";

  constructor() {}
}

export default UserModel;
