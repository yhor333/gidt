import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProdut: (state, action) => {
      console.log(state);
      console.log(action);
      state.products.push(action.payload);
    },
  },
});

export const { addProdut } = basketSlice.actions;

export default basketSlice.reducer;
