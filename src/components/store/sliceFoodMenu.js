import { createSlice } from "@reduxjs/toolkit";

const foodMenu = createSlice({
  name: "foodMenu",
  initialState: [],
  reducers: {
    updateMenu: (_, { payload }) => {
      return payload;
    },
  },
});

export const menuActions = foodMenu.actions;
export default foodMenu;
