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
      const { id, removeCount, price, itemCount } = action.payload;

      // if it is the last count, remove food from cart
      if (itemCount === removeCount) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        // else, reduce food count
        state.cartItems.find((item) => item.id === id).count -= removeCount;
      }

      state.cartTotalCount -= removeCount;
      state.cartTotalPrice -= price * removeCount;
    },

    addItem: (state, action) => {
      const {
        addCount,
        foodData,
        foodData: { id, price },
      } = action.payload;

      // if food is in cart, increase count
      if (state.cartItems.some((item) => item.id === id)) {
        state.cartItems.find((item) => item.id === id).count += addCount;
      } else {
        // else, add food
        state.cartItems.push({
          ...foodData,
          count: addCount,
        });
      }

      state.cartTotalCount += addCount;
      state.cartTotalPrice += price * addCount;
    },
  },
});

export const cartActions = foodCart.actions;
export default foodCart;
