import { createSlice } from "@reduxjs/toolkit";
import hash from "hash.js";

import { User } from "../controllers";

export const users = createSlice({
  name: "users",
  initialState: {
    logged: null,
    users: [
      {
        cAuthor: undefined,
        cDateTime: "18/6/2021, 15:21:01",
        deleted: true,
        id: "_xc2TrKI4EuDLQcuKV3al",
        name: "Francesco",
        password:
          "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
        reset: undefined,
        surname: "Michienzi",
        uAuthor: undefined,
        uDateTime: "18/6/2021, 15:21:01",
        username: "fmichienzi",
        admin: { is: true },
      },
    ],
  },
  reducers: {
    // Create a new user
    create: (state, { payload: { author, data } }) => {
      const user = new User(data);
      user.password = data.password;
      user.create();
      console.log("Push", user.data);
      state.users.push(user.data);
    },
    update: (state, { payload }) => {},
    destroy: (state, { payload }) => {},
    login: (state, { payload }) => {
      const encrypted = hash.sha256().update(payload.password).digest("hex");
      const user = state.users.find(
        (u) => u.username === payload.username && u.password === encrypted
      );
      if (user) {
        state.logged = user;
      }
    },
  },
});

export const { create, update, destroy, login } = users.actions;

export default users.reducer;
