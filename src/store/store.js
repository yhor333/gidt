import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import basketSlice from "./basketSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    basket: basketSlice,
  },
});
