import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import SitebarProfileRoute from "./SitebarProfileRoute";
const UserDashboardLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex min-h-screen">
        <div className=" p-4 md:p-8  bg-slate-600 ">
          <SitebarProfileRoute />
        </div>
        {/* Main Content */}
        <div className="flex-1 p-4  bg-slate-200 shadow-white">
          <div className="flex justify-between mt-4 text-4xl font-montserrat  w-[70%]">
            <h1>My Profile</h1>
          </div>
          <hr className="border-dashed my-6 border-slate-600 w-[70%]" />

          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default UserDashboardLayout;
