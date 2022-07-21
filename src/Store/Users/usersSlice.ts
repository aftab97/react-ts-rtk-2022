import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Users {
  id: number;
  first_name: string;
  last_name: string;
  industry: string;
  date_of_birth: string;
  salary: number;
  email: string;
  years_of_experience: number;
  age: number;
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
  reducers: {
    addUser(state) {
      state.users.push({
        id: 999,
        first_name: "Bob",
        last_name: "Builder",
        email: "lsteaning0@usnews.com",
        date_of_birth: "13/05/1978",
        industry: "n/a",
        salary: 98803.83,
        years_of_experience: 6.6,
        age: 20,
      });
      state.loading = false;
    },
    editUser(state, action) {},
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      action.payload.map((val: any) => {
        state.users.push(val);
      }),
        (state.loading = false);
    });
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
