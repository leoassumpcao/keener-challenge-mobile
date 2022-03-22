import AuthStore from "./auth.store";
import CartStore from "./cart.store";
const stores = {
  authStore: new AuthStore(),
  cartStore: new CartStore(),
};

export default stores;
