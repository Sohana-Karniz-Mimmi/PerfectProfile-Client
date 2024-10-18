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
        <div className=" p-4 md:p-8  bg-[#00000f]">
          <SitebarProfileRoute />
        </div>
        {/* Main Content */}
        <div className="flex-1  ">
          {/* <hr className="border-dashed my-6 border-slate-600 " /> */}

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
