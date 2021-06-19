import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { readAll } from "../controllers/user";

export const init = createAsyncThunk("hasAdmin", async () => {
  const response = await readAll();
  return response;
});

const hasAdmin = createSlice({
  name: "hasAdmin",
  initialState: {
    loading: false,
    has: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [init.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.has = payload.some(({ admin: { is } }) => is);
    },
    [init.pending]: (state) => {
      state.loading = false;
    },
    // [init.rejected]: (state, action)=>{}
  },
});

// export const { init } = hasAdmin.actions;

export default hasAdmin.reducer;
