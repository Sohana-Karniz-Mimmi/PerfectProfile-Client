import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import SignIn from "../Authentication/SignIn";
import SignUp from "../Authentication/SignUp";
import Contact from "../Pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            {" "}
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            {" "}
            <Contact />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
