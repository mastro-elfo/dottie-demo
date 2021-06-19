import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { readAll } from "../controllers/user";
import { encrypt } from "../controllers/utils";
import { UserNotFound } from "../errors/";

export const login = createAsyncThunk(
  "login/login",
  async ({ username, password }) => {
    const encrypted = encrypt(password);
    return readAll()
      .then((list) =>
        list.find((u) => u.username === username && u.password === encrypted)
      )
      .then((user) => {
        if (user) {
          return user;
        }
        throw new UserNotFound();
      });
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    error: null,
    logged: null,
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.logged = payload;
    },
    [login.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = false;
    },
    [login.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.name;
    },
  },
});

export default loginSlice.reducer;
