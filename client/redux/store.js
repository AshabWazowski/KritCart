import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice.js";

//create a store and give it reducers
export const store = configureStore({
  reducer: {
    cartReducer:cartSlice,
  },
});
