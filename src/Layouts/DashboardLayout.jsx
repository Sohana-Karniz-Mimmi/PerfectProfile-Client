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
    <div className="min-h-screen md:flex justify-between">
      {/* Sidebar */}
      <div className="w-2/6 flex-1">
        <Sidebar />
      </div>

      {/* Outlet --> Dynamic content */}
      <div className="md:w-5/6 border-2 overflow-hidden border-red-500">
        <div className="md:p-6 p-2 md:mt-0 mt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
