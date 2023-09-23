import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    title: "заголовок",
    text: "текст уведомления",
    mode: "error",
    isShow: false,
  },
  reducers: {
    notify(state, action) {
      state.title = action.payload.title;
      state.text = action.payload.text;
      state.mode = action.payload.mode;
      state.isShow = true;
    },
    close(state) {
      state.title = null;
      state.text = null;
      state.mode = null;
      state.isShow = false;
    },
    // prepare
    // const id = nanoid()
    // return { payload: { id, text } }
  },
});

export default notificationSlice.reducer;
export const { notify, close } = notificationSlice.actions;
