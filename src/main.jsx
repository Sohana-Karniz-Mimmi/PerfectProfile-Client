import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import router from "./Routes/Routes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ResumeProvider } from "./Context/CustomizeResumeContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
import PremiumModal from "./Components/Modal/PremiumModal";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ResumeProvider>
            <RouterProvider router={router} />
          </ResumeProvider>
        </QueryClientProvider>
        <PremiumModal /> 
        <Toaster />
      </HelmetProvider>
    </AuthProvider>
  </Provider>
);
