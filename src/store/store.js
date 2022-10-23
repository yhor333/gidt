import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import basketSlice from "./basketSlice";
import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    basket: basketSlice,
    shop: productSlice,
  },
});
