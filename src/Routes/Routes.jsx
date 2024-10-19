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
// import Profile from "../Components/MyProfile/Profile";
import ResumeViewer from "../Pages/ViewResume/ResumeViewer ";
// import SocketChatLive from "../Components/LiveChat/SocketChatLive";
import DashboardLayout from "../Layouts/DashboardLayout";
import Statistics from "../Pages/AdminDashboard/Statistics";
import ManageUsers from "../Pages/AdminDashboard/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import PrivetRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
// import MainChatBox from "../Components/LiveChat/NewChatComponent/MainChatbox";
import PremiumRoute from "./PremiumRoute";
import PremiumModal from "../Components/Modal/PremiumModal";
import MyResume from "../Pages/MyResume/MyResume";

import UserDashboardLayout from "../Components/MyProfile/UserDashboardLayout";
import ProfileInfo from "../Components/MyProfile/ProfileInfo";
import BeforeEditingProfile from "../Components/MyProfile/BeforeEditingProfile";
import Favorite from "../Pages/Favorites/Favorite";

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
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   path: "/livechat",
      //   element: <SocketChatLive />,
      // },
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
      {
        path: "/my-favorites",
        element: <Favorite />,
      },
      {
        // path: "/livechat",
        // element: <SocketChatLive />,
      },
      // {
      //   path: "/address",
      //   element: <Address />,
      // },
      {
        path: "/my-resume",
        element: <MyResume />,
      },
    ],
  },
  {
    path: "/resume/edit/:id",
    element: (
      // <PremiumRoute>
      <ResumeEditPage />
      // </PremiumRoute>
    ),
  },
  {
    path: "/premium",
    element: <PremiumModal />,
  },
  {
    path: "/resume/final-resume/:id",
    element: <FinalResume />,
    loader: ({ params }) =>
      fetch(`${import.meta.env.VITE_LOCALHOST_API_URL}/share-resume/${params.id}`),
  },
  {
    path: "/resume/:link",
    element: <ResumeViewer />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivetRoute>
            <AdminRoute>
              <Statistics />
            </AdminRoute>
          </PrivetRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivetRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/userDashboard",
    element: <UserDashboardLayout />,
    children: [
      {
        path: "editingProfile",
        element: <BeforeEditingProfile />,
      },
      {
        path: "address",
        element: <ProfileInfo />,
      },
    ],
  },
]);

export default router;
