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
import DashboardLayout from "../Layouts/DashboardLayout";
import Statistics from "../Pages/AdminDashboard/Statistics";
import ManageUsers from "../Pages/AdminDashboard/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import PrivetRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import PremiumRoute from "./PremiumRoute";
import PremiumModal from "../Components/Modal/PremiumModal";
import MyResume from "../Pages/MyResume/MyResume";

import UserDashboardLayout from "../Components/MyProfile/UserDashboardLayout";
import ProfileInfo from "../Components/MyProfile/ProfileInfo";
import BeforeEditingProfile from "../Components/MyProfile/BeforeEditingProfile";
import Favorite from "../Pages/Favorites/Favorite";
import ResourcePage from "../Pages/Resources/ResourcePage";
import Consultation from "../Pages/Consultation/Consultation";
import MakeConsultant from "../Pages/AdminPage/ManageConsultants/MakeConsultant";
import PurchaseHistory from "../Pages/PurchaseHistory";
import AllPaymentHistory from "../Pages/AdminPage/AllPaymentHistory";
import SessionRequest from "../Pages/ConsultantDashboard/SessionRequest";
import Profile from "../Pages/ConsultantDashboard/Profile";

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
        path: "/consultation",
        element: <Consultation />,
      },
      
      {
        path: "/my-favorites",
        element: <Favorite />,
      },

      {
        path: "/my-resume",
        element: <MyResume />,
      },
      {
        path: "/resource",
        element: <ResourcePage />,
      },
      {
        path: "/purchase",
        element: <PurchaseHistory />,
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
      fetch(
        `${import.meta.env.VITE_LOCALHOST_API_URL}/share-resume/${params.id}`
      ),
  },
  {
    path: "/resume/:link",
    element: <ResumeViewer />,
  },

  {
    path: "/dashboard",
    element: (
      <DashboardLayout />
    ),
    children: [
      {
        index: true,
        element: (
          <Statistics />
          // <PrivetRoute>
          //   <AdminRoute>
             
          //   </AdminRoute>
          // </PrivetRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <ManageUsers />
          // <PrivetRoute>
          //   <AdminRoute>
             
          //   </AdminRoute>
          // </PrivetRoute>
        ),
      },
      {
        path: "make-consultant",
        element: (
          <PrivetRoute>
            <AdminRoute>
              <MakeConsultant />
              </AdminRoute>
              </PrivetRoute>
        )
      },


       { path: "transaction-history",
        element: (
          <PrivetRoute>
            <AdminRoute>
              <AllPaymentHistory />
            </AdminRoute>
          </PrivetRoute>
        ),
      },
    ],
  },

  // consultant dashboard
  {
    path: "/consultant-dashboard",
    element: (
      <DashboardLayout />
    ),
    children: [
      {
        index: true,
        element: (
          // session booking
          <SessionRequest />
          
        ),
      },
      {
        path: "profile",
        element: (
          // profile
          <Profile />
          
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
