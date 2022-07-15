import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Users {
  id: number;
  first_name: string;
  last_name: string;
  industry: string;
  date_of_birth: string;
  salary: number;
  years_of_experience: string;
}

interface UsersState {
  users: Users[];
  loading: boolean;
}

const initialState = {
  users: [],
  loading: true,
} as UsersState;

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  return fetch("./MOCK_DATA.json").then((res) => res.json());
});
/* eslint-disable */
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users.push(action.payload), (state.loading = false);
    });
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default usersSlice.reducer;
