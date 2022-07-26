import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./Users/usersSlice";

export const store = configureStore({
  reducer: {
    usersState: usersSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const selectUsers = (state: RootState) => state.usersState;
