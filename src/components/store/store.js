import { configureStore } from "@reduxjs/toolkit";
import foodCart from "./sliceFoodCart";
import foodMenu from "./sliceFoodMenu";

const store = configureStore({
  reducer: {
    cart: foodCart.reducer,
    menu: foodMenu.reducer,
  },
});

export default store;
