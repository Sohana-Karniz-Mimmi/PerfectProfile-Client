import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
// import SignIn from "../Authentication/SignIn";
// import SignUp from "../Authentication/SignUp";
import Contact from "../Pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
// import Modal from "../Authentication/Modal";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/signIn",
      //   element: <SignIn />,
      // },
      // {
      //   path: "/SignUp",
      //   element: <SignUp />,
      // },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/modal",
      //   element: <Modal />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
