import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import SitebarProfileRoute from "./SitebarProfileRoute";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
const UserDashboardLayout = () => {
  return (
    <div>
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
    </div>
  );
};

export default UserDashboardLayout;
