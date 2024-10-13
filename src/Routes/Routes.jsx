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
import Profile from "../Components/MyProfile/Profile";
import ResumeViewer from "../Pages/ViewResume/ResumeViewer ";
import SocketChatLive from "../Components/LiveChat/SocketChatLive";
import AllTemplates from "../Pages/AdminPage/AllTemplates";
import DashboardLayout from "../Layouts/DashboardLayout";
import Statistics from "../Pages/AdminDashboard/Statistics";
import ManageUsers from "../Pages/AdminDashboard/ManageUsers";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/livechat",
        element: <SocketChatLive />,
      },
    ],
  },
  {
    path: "/resume/edit/:id",
    element: <PrivateRoute><ResumeEditPage /></PrivateRoute>,
  },
  {
    path: "/resume/final-resume/:id",
    element: <FinalResume />,
    loader: ({ params }) =>
      fetch(`${import.meta.env.VITE_LOCALHOST}/share-resume/${params.id}`),
  },
  {
    path: "/resume/:link",
    element: <ResumeViewer />,
  },

  {
    path: '/dashboard',
    element: (
      <DashboardLayout />
    ),
    children: [
      {
        index: true,
        element: (
          <Statistics />

        ),
      },
      {
        path: 'manage-users',
        element: (
              <ManageUsers />

        ),
      },
    ],
  },

]);

export default router;
