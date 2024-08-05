import { createSlice } from "@reduxjs/toolkit";
import { theme } from "flowbite-react";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: theme,
  initialState,
  reducers: {
    toggleThemes: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleThemes } = themeSlice.actions;

export default themeSlice.reducer;
