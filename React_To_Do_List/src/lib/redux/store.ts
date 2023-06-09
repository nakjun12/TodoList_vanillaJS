import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import loginReducer from "./loginSlice";
import modalReducer from "./modalSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
