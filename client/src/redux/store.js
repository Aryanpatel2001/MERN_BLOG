import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice.js";
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
