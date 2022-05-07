import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUsers: (state, action) => state.push(...action.payload.users),
    deleteUser: (state, action) =>
      state.filter((user) => user.id !== action.payload.userId),
    resetUsers: (state, action) => [...action.payload.users],
  },
});

export const { addUsers, deleteUser, resetUsers } = usersSlice.actions;
export default usersSlice.reducer;
