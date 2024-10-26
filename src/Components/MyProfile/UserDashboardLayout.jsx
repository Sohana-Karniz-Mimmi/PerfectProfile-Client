import { lazy, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
// import Navbar from "../../Shared/Navbar/Navbar";
// import Footer from "../../Shared/Footer/Footer";
// import SitebarProfileRoute from "./SitebarProfileRoute";

const Navbar = lazy(() => import("../../Shared/Navbar/Navbar"));
const Footer = lazy(() => import("../../Shared/Footer/Footer"));
const SitebarProfileRoute = lazy(() => import("./SitebarProfileRoute"));
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import loadingGif from "../../assets/loading.gif"
const UserDashboardLayout = () => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex justify-center items-center">
          <img className="h-64" src={loadingGif} alt="loading..." />
        </div>
      }
    >
      <div className="fixed z-[100] min-h-[99px] w-full bg-white">
        <Navbar />
      </div>

      <div className="md:flex justify-between">
        <div className="w-72 md:mt-[100px] mt-[173px] fixed z-[50] ">
          <SitebarProfileRoute />
        </div>
        {/* Main Content */}
        <div className="md:max-w-4/6 min-h-screen md:mt-[100px] shadow-lg border -mt-1 md:ml-72 w-full ">
          <Outlet />
        </div>
      </div>
      {/* <div>
        <Footer />
        </div> */}
    </Suspense>
  );
};

export default UserDashboardLayout;
