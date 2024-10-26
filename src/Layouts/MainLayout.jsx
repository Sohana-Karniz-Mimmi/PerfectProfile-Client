import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import loadingGif from "../assets/loading.gif";
import { Suspense } from "react";

const MainLayout = () => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex justify-center items-center">
          <img className="h-64" src={loadingGif} alt="loading..." />
        </div>
      }
    >
      <div className="relative">
        <div className="sticky top-0 z-50 bg-white">
          <Navbar></Navbar>
        </div>

        <div>
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </Suspense>
  );
};

export default MainLayout;
