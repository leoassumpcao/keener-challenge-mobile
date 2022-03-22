import { IUserModel } from "../../models/user.model";

export interface IUserServiceGetUserByIdResult {
  user?: IUserModel;
  errors?: string[];
  success: boolean;
}
