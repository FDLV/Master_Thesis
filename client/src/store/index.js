import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice.js";

const rootReducer = combineReducers({
  auth: tokenSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
