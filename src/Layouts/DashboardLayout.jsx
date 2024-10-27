import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/AdminDashboard/Sidebar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../store/Features/user/userSlice";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const size = 10;
  const filter = "";
  const search = "";

  useEffect(() => {
    dispatch(fetchUsers({ page: 1, size, filter, search }));
  }, [dispatch, size, filter, search]);

  return (
    <div className="md:flex justify-between ">
      {/* Sidebar */}
      <div className="2xl:w-72 w-60 fixed z-50">
        <Sidebar />
      </div>

      {/* Outlet --> Dynamic content */}
      <div className="max-w-4/6 2xl:ml-72 md:ml-60 overflow-hidden w-full">
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
