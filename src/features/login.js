import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);

const login = createSlice({
  name: "login",
  initialState: {
    logged: null,
    hasAdmin: false,
  },
  extraReducers: {},
});
