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
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ResumeProvider>
          <RouterProvider router={router} />
        </ResumeProvider>
      </QueryClientProvider>
      <Toaster />
    </HelmetProvider>
  </AuthProvider>
);
