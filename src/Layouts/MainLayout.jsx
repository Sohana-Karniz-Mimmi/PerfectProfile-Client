import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
 
  return (
    <div className="relative">
      <div className="sticky top-0 z-50 bg-white">
        <Navbar></Navbar>
      </div>
      <div >
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
