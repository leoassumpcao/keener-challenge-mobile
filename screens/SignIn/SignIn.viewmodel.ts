import { useNavigation } from "@react-navigation/native";
import { action, computed, makeObservable, observable } from "mobx";
import stores from "../../stores/";
import AccountService from "../../services/Account";
import validator from "validator";

class SignInViewModel {
  private accountService: AccountService;
  private navigation = useNavigation();

  constructor() {
    makeObservable(this);
    this.accountService = new AccountService();

    this.email = "adm@test.dev";
    this.password = "$ABC12345wasd$";
  }

  @observable
  private _loading: boolean = false;
  @computed get loading(): boolean {
    return this._loading;
  }
  set loading(loading: boolean) {
    this._loading = loading;
  }

  @observable
  private _errors: string[] = [];
  @computed get errors(): string[] {
    return this._errors;
  }
  set errors(errors: string[]) {
    this._errors = errors;
  }

  @observable
  private _email: string = "";
  @computed get email(): string {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }

  @action onEmailTextChange = (text: string): void => {
    this._email = text;
  };

  @observable
  private _password: string = "";
  @computed get password(): string {
    return this._password;
  }
  set password(password: string) {
    this._password = password;
  }

  @action onPasswordTextChange = (text: string): void => {
    this._password = text;
  };

  @action onForgotPasswordPress = (): void => {
    console.warn("Not implemented yet.");
  };

  @action onSignUpPress = (): void => {
    this.navigation.navigate("SignUp" as never);
  };

  @action signIn = async (): Promise<void> => {
    try {
      await this.login();
    } catch (e) {
      alert(e);
    }
  };

  public async login(): Promise<void> {
    this.loading = true;
    this.errors = [];
    try {
      if (!this.email || !validator.isEmail(this.email)) {
        this.errors.push("Please provide a valid email address.");
      } else if (!this.password || validator.isEmpty(this.password)) {
        this.errors.push("Please provide password.");
      } else {
        const response = await this.accountService.login({
          email: this.email,
          password: this.password,
        });
        if (response !== undefined) {
          if (response.success === true && response.token && response.user) {
            const { token, user } = response;
            stores.authStore.onLogin(user, token);
          } else {
            if (response.errors) {
              this.errors = response.errors;
            } else {
              this.errors = ["An unexpected error has occurred."];
            }
          }
        }
      }
      this.loading = false;
    } catch (error) {
      this.loading = false;

      if (typeof error === "string") this.errors = [error];
      else throw error;
    }
  }
}

export default SignInViewModel;
