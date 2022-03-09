import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    allUsers: {
      allUsers: 100,
      limit: 10,
      page: 1,
      success: false,
      users: [],
    },
  },
  reducers: {
    setAllUsers: (state, { payload }) => {
      state.allUsers = payload;
    },
  },
});
