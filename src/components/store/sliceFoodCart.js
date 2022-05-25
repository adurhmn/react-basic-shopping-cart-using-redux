import { createSlice } from "@reduxjs/toolkit";

const foodCart = createSlice({
  name: "foodCart",
  initialState: {
    cartItems: [],
    cartTotalCount: 0,
    cartTotalPrice: 0,
  },
  reducers: {
    removeItem: (state, action) => {
      const { id, count } = action.payload;
      const itemPrice =
        state.cartItems.find((item) => item.id === id).price * count;

      // if it is the last count, remove food from cart
      if (state.cartItems.find((item) => item.id === id).count === count) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        // else, reduce food count
        state.cartItems.find((item) => item.id === id).count -= count;
      }

      state.cartTotalCount -= count;
      state.cartTotalPrice -= itemPrice;
    },

    addItem: (state, action) => {
      const { id, count, foodData } = action.payload;
      const itemPrice = foodData.find((item) => item.id === id).price * count;

      // if food is in cart, increase count
      if (state.cartItems.some((item) => item.id === id)) {
        state.cartItems.find((item) => item.id === id).count += count;
      } else {
        // else, add food
        state.cartItems.push({
          ...foodData.find((item) => item.id === id),
          count: count,
        });
      }

      state.cartTotalCount += count;
      state.cartTotalPrice += itemPrice;
    },
  },
});

export const cartActions = foodCart.actions;
export default foodCart;
