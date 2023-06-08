import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import modalReducer from "./modalSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
