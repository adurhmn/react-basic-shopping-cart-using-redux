import { configureStore } from "@reduxjs/toolkit";
import foodCart from "./sliceFoodCart";

const store = configureStore({
  reducer: {
    cart: foodCart.reducer,
  },
});

export default store;
