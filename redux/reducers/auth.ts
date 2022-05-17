import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type Token = {
  token: string;
};

const initialState: Token = {
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
