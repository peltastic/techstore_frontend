import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type Count = {
    cartCount: number
}

const initialState:Count = {
    cartCount: 0
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCartCount: (state, action: PayloadAction<number>) => {
      state.cartCount = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCartCount } = cartSlice.actions;

export default cartSlice.reducer;