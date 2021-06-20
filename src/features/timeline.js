import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const init = createAsyncThunk("timeline/init", async () => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
});

const timeline = createSlice({
  name: "timeline",
  initialState: {
    loading: false,
    error: false,
    notes: [
      {
        id: 16,
        datetime: 1624183425273,
        title: "Le note sono gestite con redux",
        note:
          "Ho creato lo store 'timeline' e ricavo la lista delle note con `useSelector`",
        author: {
          name: "Francesco",
          surname: "Michienzi",
        },
      },
      {
        id: 15,
        datetime: 1624183291083,
        title: "Drawer",
        note: "Tutte le pagine sono apribili",
        author: {
          name: "Francesco",
          surname: "Michienzi",
        },
      },
      {
        id: 10,
        datetime: 1624106747873,
        title: "Avanzamento progetto",
        note: "Tutto procede a meraviglia",
        author: {
          name: "Francesco",
          surname: "Michienzi",
        },
      },
      {
        id: 1,
        datetime: 1624030204663,
        title: "Inizio progetto",
        note: "Nome in codice: Dottie",
        author: {
          name: "Francesco",
          surname: "Michienzi",
        },
      },
    ],
  },
  extraReducers: {
    [init.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      // state.notes = payload;
    },
    [init.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [init.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.name;
    },
  },
});

export default timeline.reducer;
