import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import SignIn from "../Authentication/Login";
import SignUp from "../Authentication/Register";
import Contact from "../Pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import Pricing from "../Pages/Pricing/Pricing";
// import Modal from "../Authentication/Modal";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Template from "../Pages/Template/Template";
import About from "../Pages/About/About";
// import Modal from "../Authentication/Modal";
// import Login from "../Authentication/Login";
// import Register from "../Authentication/Register";
import ResumeEditPage from "../Pages/ResumeEditPage/ResumeEditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing/>
      },
      {
        path: "/predefined-templates",
        element: <Template/>
      },
      {
        path: "/signIn",
        // element: <SignIn />,
      },
      {
        path: "/SignUp",
        // element: <SignUp />,
      },
     
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      
       },
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
  {
    path: "/resume/edit",
    element: <ResumeEditPage />,
  },
  
]);

export default router;
