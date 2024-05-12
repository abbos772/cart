import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import wishlistSlice from "./wishlistSlice";
import cart from "./cardslice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    wishlist: wishlistSlice,
    cart: cart,
  },
});
