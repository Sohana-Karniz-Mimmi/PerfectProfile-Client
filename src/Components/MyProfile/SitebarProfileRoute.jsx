import { Link, NavLink } from "react-router-dom";
import {
  FaUser,
  FaEdit,
  FaUsers,
  FaBuilding,
  FaFileAlt,
  FaAddressBook,
} from "react-icons/fa";

const SitebarProfileRoute = () => {
  return (
    <div className="">
      <div className="text-center py-8">
        {/* <h2 className="text-2xl font-bold">Profile Settings</h2> */}
      </div>
      <nav className="mt-10">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/userDashboard/editingProfile"
              className={({ isActive }) =>
                `flex items-center gap-2 p-4 transition duration-200 ${
                  isActive ? "text-white" : "hover:text-gray-300"
                }`
              }
            >
              <FaUser />
              General
            </NavLink>
          </li>
          {/* <li>
            <Link
              to="/edit-profile"
              className="flex items-center gap-2 p-4 hover:bg-gray-700 transition duration-200"
            >
              <FaEdit />
              Edit Profile
            </Link>
          </li> */}
          <li>
            <NavLink
              to="/userDashboard/address"
              className={({ isActive }) =>
                `flex items-center gap-2 p-4 transition duration-200 ${
                  isActive ? " text-white" : "hover:text-gray-300 "
                }`
              }
            >
              <FaAddressBook />
              Address
            </NavLink>
          </li>
          {/* <li>
            <Link
              to="/company"
              className="flex items-center gap-2 p-4 hover:bg-gray-700 transition duration-200"
            >
              <FaBuilding />
              Company
            </Link>
          </li> */}
          {/* <li>
            <Link
              to="/applications"
              className="flex items-center gap-2 p-4 hover:bg-gray-700 transition duration-200"
            >
              <FaFileAlt />
              Applications
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default SitebarProfileRoute;
