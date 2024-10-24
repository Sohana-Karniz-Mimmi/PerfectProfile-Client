import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/user/userSlice";
import templateReducer from "./Features/predefinedTemplates/templateSlice";
import paymentReducer from "./Features/Payment/PaymentSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    templates: templateReducer,
    payment: paymentReducer,
  },
});
