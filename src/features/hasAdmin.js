import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { create, readAll } from "../controllers/user";

export const init = createAsyncThunk("hasAdmin", async () => {
  const response = await readAll();
  return response;
});

export const createUser = createAsyncThunk("hasAdmin/create", async (data) => {
  return create(null, data);
});

const hasAdmin = createSlice({
  name: "hasAdmin",
  initialState: {
    loading: false,
    has: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [init.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.has = payload.some(({ admin: { is } }) => is);
      state.error = false;
    },
    [init.pending]: (state) => {
      state.loading = false;
      state.error = false;
    },
    [init.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.name;
    },
    [createUser.fulfilled]: (state) => {
      state.loading = false;
      state.has = true;
      state.error = false;
    },
    [createUser.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [createUser.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.name;
    },
  },
});

// export const { init } = hasAdmin.actions;

export default hasAdmin.reducer;
