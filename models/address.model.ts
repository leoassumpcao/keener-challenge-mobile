import { action, computed, makeObservable, observable } from "mobx";

export interface IAddressModel {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  neighborhood: string;
  zipCode: string;
  country: string;
}

class AddressModel implements IAddressModel {
  addressLine1: string = "";
  addressLine2: string = "";
  city: string = "";
  state: string = "";
  neighborhood: string = "";
  zipCode: string = "";
  country: string = "";

  constructor() {}
}

export default AddressModel;
