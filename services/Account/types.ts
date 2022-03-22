import { IUserModel } from "./../../models/user.model";

export interface IAccountServiceRegisterResult {
  token?: string;
  user?: IUserModel;
  errors?: string[];
  success: boolean;
}

export interface IAccountServiceLoginResult {
  token?: string;
  user?: IUserModel;
  errors?: string[];
  success: boolean;
}
