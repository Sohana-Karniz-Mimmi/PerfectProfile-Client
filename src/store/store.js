import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/user/userSlice";
import templateReducer from "./Features/predefinedTemplates/templateSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    templates: templateReducer,
  },
});
