import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  isLogin: boolean;
}

const initialState: LoginState = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      console.log("close modal");
      state.isLogin = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
