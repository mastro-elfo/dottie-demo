import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  create as create_note,
  readAll as readAll_notes,
} from "../controllers/timeline";

// import { TimelineEnd } from "../errors/";

// import { MOCK_NOTES } from "./mock";
//
// export const init = createAsyncThunk("timeline/init", async () => {
//   return readAll_notes();
// });

export const create = createAsyncThunk(
  "timeline/create",
  async ({ author, data }) => {
    console.log("feature", data);
    return create_note(author, data);
  }
);

export const readAll = createAsyncThunk("timeline/readAll", async () => {
  return readAll_notes();
});

const timeline = createSlice({
  name: "timeline",
  initialState: {
    loading: false,
    error: false,
    notes: [],
    hasMore: false,
  },
  extraReducers: {
    [readAll.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.notes = payload;
    },
    [readAll.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [readAll.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.name;
    },
    [create.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      // state.notes = [payload, ...state.notes];
    },
    [create.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [create.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.name;
    },
  },
});

export default timeline.reducer;
