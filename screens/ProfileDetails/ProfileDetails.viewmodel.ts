import { action, computed, makeObservable, observable } from "mobx";
import AccountService from "../../services/Account";
import stores from "../../stores";
import { useNavigation } from "@react-navigation/native";
import validator from "validator";

class ProfileDetailsViewModel {
  private accountService: AccountService;
  private navigation = useNavigation();

  constructor() {
    makeObservable(this);
    this.accountService = new AccountService();
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
  private _name: string = "";
  @computed get name(): string {
    return this._name;
  }
  set name(text: string) {
    this._name = text;
  }
  @action onNameTextChange = (text: string): void => {
    this.name = text;
  };

  @observable
  private _birthDate: string = "";
  @computed get birthDate(): string {
    return this._birthDate;
  }
  set birthDate(text: string) {
    this._birthDate = text;
  }
  @action onBirthDateTextChange = (text: string): void => {
    this.birthDate = text;
  };

  @observable
  private _email: string = "";
  @computed get email(): string {
    return this._email;
  }
  set email(text: string) {
    this._email = text;
  }
  @action onEmailTextChange = (text: string): void => {
    this.email = text;
  };

  @observable
  private _password: string = "";
  @computed get password(): string {
    return this._password;
  }
  set password(text: string) {
    this._password = text;
  }
  @action onPasswordTextChange = (text: string): void => {
    this.password = text;
    if (
      this.confirmPassword.length > 0 &&
      this.password.length > 0 &&
      this.password !== this.confirmPassword
    )
      this.errors.push("Password and confirm password should be same.");
  };

  @observable
  private _confirmPassword: string = "";
  @computed get confirmPassword(): string {
    return this._confirmPassword;
  }
  set confirmPassword(text: string) {
    this._confirmPassword = text;
  }
  @action onConfirmPasswordTextChange = (text: string): void => {
    this.confirmPassword = text;
    if (
      this.confirmPassword.length > 0 &&
      this.password.length > 0 &&
      this.password !== this.confirmPassword
    )
      this._errors.push("Password and confirm password should be same.");
  };

  @observable
  private _address: string = "";
  @computed get address(): string {
    return this._address;
  }
  set address(text: string) {
    this._address = text;
  }
  @action onAddressTextChange = (text: string): void => {
    this.address = text;
  };

  @observable
  private _addressSecond: string = "";
  @computed get addressSecond(): string {
    return this._addressSecond;
  }
  set addressSecond(text: string) {
    this._addressSecond = text;
  }
  @action onAddressSecondTextChange = (text: string): void => {
    this.addressSecond = text;
  };

  @observable
  private _neighborhood: string = "";
  @computed get neighborhood(): string {
    return this._neighborhood;
  }
  set neighborhood(text: string) {
    this._neighborhood = text;
  }
  @action onNeighborhoodTextChange = (text: string): void => {
    this.neighborhood = text;
  };

  @observable
  private _city: string = "";
  @computed get city(): string {
    return this._city;
  }
  set city(text: string) {
    this._city = text;
  }
  @action onCityTextChange = (text: string): void => {
    this.city = text;
  };

  @observable
  private _state: string = "";
  @computed get state(): string {
    return this._state;
  }
  set state(text: string) {
    this._state = text;
  }
  @action onStateTextChange = (text: string): void => {
    this.state = text;
  };

  @observable
  private _country: string = "";
  @computed get country(): string {
    return this._country;
  }
  set country(text: string) {
    this._country = text;
  }
  @action onCountryTextChange = (text: string): void => {
    this.country = text;
  };

  @observable
  private _zip: string = "";
  @computed get zip(): string {
    return this._zip;
  }
  set zip(text: string) {
    this._zip = text;
  }
  @action onZipTextChange = (text: string): void => {
    this.zip = text;
  };

  @action onSignInPress = (): void => {
    this.navigation.navigate("SignIn" as never);
  };

  @action ProfileDetails = async (): Promise<void> => {
    try {
      await this.register();
    } catch (e) {
      alert(e);
    }
  };

  async register(): Promise<void> {
    this.loading = true;
    try {
      this.errors = [];

      if (!this.email || !validator.isEmail(this.email)) {
        this.errors.push("Please provide a valid email address.");
      } else if (!this.password || validator.isEmpty(this.password)) {
        this.errors.push("Please provide password.");
      } else if (
        !this.confirmPassword ||
        validator.isEmpty(this.confirmPassword)
      ) {
        this.errors.push("Please provide password.");
      } else if (this.password !== this.confirmPassword) {
        this.errors.push("Password and confirm password should be same.");
      } else if (!this.name || validator.isEmpty(this.name)) {
        this.errors.push("Please tell us your name.");
      } else if (
        !this.birthDate ||
        validator.isDate(this.birthDate, { format: "DD/MM/YYYY" })
      ) {
        this.errors.push("Please a valid birth date. e.g.: DD/MM/YYYY");
      } else if (!this.address || validator.isEmpty(this.address)) {
        this.errors.push("Please tell us your address.");
      } else if (!this.neighborhood || validator.isEmpty(this.neighborhood)) {
        this.errors.push("Please tell us your neighborhood.");
      } else if (!this.city || validator.isEmpty(this.city)) {
        this.errors.push("Please tell us your city.");
      } else if (!this.state || validator.isEmpty(this.state)) {
        this.errors.push("Please tell us your state.");
      } else if (!this.zip || validator.isEmpty(this.zip)) {
        this.errors.push("Please tell us your zip code.");
      } else if (!this.country || validator.isEmpty(this.country)) {
        this.errors.push("Please tell us your country.");
      } else {
        const response = await this.accountService.register({
          name: this.name,
          email: this.email,
          password: this.password,
          birthDate: this.birthDate,
          addressLine1: this.address,
          addressLine2: this.addressSecond,
          neighborhood: this.neighborhood,
          city: this.city,
          state: this.state,
          zipCode: this.zip,
          country: this.country,
        });

        if (response !== undefined) {
          if (response.success === true && response.token && response.user) {
            const { token, user } = response;
            stores.authStore.setAccessToken(token);
            stores.authStore.setUser(user);
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
    } catch (e) {
      alert(e);
      this.loading = false;
      throw e;
    }
  }
}

export default ProfileDetailsViewModel;
