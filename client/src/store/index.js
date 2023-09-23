import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice.js";
import notificationSlice from "./notificationSlice.js";

const rootReducer = combineReducers({
  auth: tokenSlice,
  notification: notificationSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
