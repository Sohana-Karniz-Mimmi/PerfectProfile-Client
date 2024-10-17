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
    <div className="md:flex justify-between bg-gray-50">
      {/* Sidebar */}
      <div className="w-72 fixed z-50">
        <Sidebar />
      </div>

      {/* Outlet --> Dynamic content */}
      <div className="max-w-4/6 md:ml-72 overflow-hidden w-full">
        <div className="md:p-6 p-2 md:mt-0 mt-20 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
