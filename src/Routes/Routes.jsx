import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Pricing from "../Pages/Pricing/Pricing";
import Template from "../Pages/Template/Template";
import About from "../Pages/About/About";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import ResumeEditPage from "../Pages/ResumeEditPage/ResumeEditPage";
import FinalResume from "../Pages/FinalResume/FinalResume";
import ResumeViewer from "../Pages/ViewResume/ResumeViewer ";
import AdminLayout from "../Layouts/AdminLayout";
import OverviewPage from "../Pages/AdminPage/OverviewPage";
import AllUserPage from "../Pages/AdminPage/AllUserPage";
import AllTemplates from "../Pages/AdminPage/AllTemplates";

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
        element: <Pricing />,
      },
      {
        path: "/predefined-templates",
        element: <Template />,
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
    path: "/resume/edit/:id",
    element: <ResumeEditPage />,
  },
  {
    path: "/resume/final-resume/:id",
    element: <FinalResume />,
    loader: ({ params }) =>
      fetch(`${import.meta.env.VITE_LOCALHOST}/share-resume/${params.id}`),
  },
  // {
  //   path: "/resume/:customUrl",
  //   element: <ShareResume />,
  // },
  {
    path: "/resume/:link",
    element: <ResumeViewer />,
  },
  {
    path: "admin/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/dashboard/overview",
        element: <OverviewPage />,
      },
      {
        path: "alluser",
        element: <AllUserPage />,
      },
      {
        path: "alltemplate",
        element: <AllTemplates />,
      },
    ],
  },
]);

export default router;
