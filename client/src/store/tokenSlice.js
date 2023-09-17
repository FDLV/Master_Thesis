import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "auth",
  initialState: {
    token: 1,
  },
  reducers: {
    set_token(state) {
      state.token = state.token + 1;
    },
    remove_token(state) {
      state.token = null;
    },
  },
});

export default tokenSlice.reducer;
export const { set_token, remove_token } = tokenSlice.actions;
