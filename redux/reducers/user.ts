import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, UserInfo } from "../types/reducers";

const initialState: UserState = {
  userInfo: {
    username: "",
    userId: "",
    email: "",
    userRole: 0,
  },
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
