import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "./features/personal-info/personalInfoSlice";
export const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
  },
});
