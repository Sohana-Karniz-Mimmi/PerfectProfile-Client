import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "../Container";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa6"
import useAuth from "../../Hook/useAuth";
import Login from "../../Authentication/Login";
import Register from "../../Authentication/Register";
import { GrLogout } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import NavModal from "./NavModal";
import Notification from "./Notification";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        {" "}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-0 text-primary pb-1 rounded-none text-[17px] border-b-2 font-medium mt-2 border-secondary"
              : "font-medium p-0 transition-all duration-200 ease-in-out hover:pb-1 hover:text-secondary hover:rounded-none text-[17px] hover:border-b-2 border-primary mt-2"
          }
          to={"/"}
        >
          {" "}
          Home{" "}
        </NavLink>{" "}
      </li>

      <li>
        {" "}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-0 text-primary pb-1 rounded-none text-[17px] border-b-2 font-medium mt-2 border-secondary"
              : "font-medium p-0 transition-all duration-200 ease-in-out hover:text-secondary hover:pb-1 hover:rounded-none text-[17px] hover:border-b-2 mt-2 border-primary"
          }
          to={"/predefined-templates"}
        >
          {" "}
          Templates{" "}
        </NavLink>{" "}
      </li>

      <li>
        {" "}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-0 text-primary pb-1 rounded-none text-[17px] border-b-2 font-medium mt-2 border-blue-600"
              : "font-medium p-0 transition-all duration-200 ease-in-out hover:text-secondary hover:pb-1 hover:rounded-none text-[17px] hover:border-b-2 mt-2 border-primary"
          }
          to={"/pricing"}
        >
          {" "}
          Pricing{" "}
        </NavLink>{" "}
      </li>

      {/* <li>
        {" "}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-0 text-primary pb-1 rounded-none text-[17px] border-b-2 font-medium mt-2 border-secondary"
              : "font-medium p-0 transition-all duration-200 ease-in-out hover:text-secondary hover:pb-1 hover:rounded-none text-[17px] hover:border-b-2 mt-2 border-primary"
          }
          to={"/resources"}
        >
          {" "}
          Resources{" "}
        </NavLink>{" "}
      </li> */}

      <li>
        {" "}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-0 text-primary pb-1 rounded-none text-[17px] border-b-2 font-medium mt-2 border-secondary"
              : "font-medium p-0 transition-all duration-200 ease-in-out hover:text-secondary hover:pb-1 hover:rounded-none text-[17px] hover:border-b-2 mt-2 border-primary"
          }
          to={"/about"}
        >
          {" "}
          About Us
        </NavLink>{" "}
      </li>

      <li>
        {" "}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-0 text-primary pb-1 rounded-none text-[17px] border-b-2 font-medium mt-2 border-secondary"
              : "font-medium p-0 transition-all duration-200 ease-in-out hover:text-secondary hover:pb-1 hover:rounded-none text-[17px] hover:border-b-2 mt-2 border-primary"
          }
          to={"/contact"}
        >
          {" "}
          Contact Us{" "}
        </NavLink>{" "}
      </li>
    </>
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogoutBtn = () => {
    logOut();
    navigate("/")
      .then(() => {
        toast.success("Sign Out Successfully");
      })
      .catch((error) => {
        toast.error("Sign Out Error", error);
      });
  };

  return (
    <div className="min-h-[99px] border-b shadow">
      <Container>
        <div className="flex items-center justify-between min-h-[99px] p-0 md:py-3 py-5">
          <div className="flex items-center">
            <div className="relative">
              {/* Hamburger Icon */}
              <div
                className="m-1 bg-transparent border-none lg:hidden shadow-none cursor-pointer"
                onClick={toggleMenu} // Call toggle function on click
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 font-bold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              {/* Menu */}
              {menuOpen && ( // Only show menu when menuOpen is true
                <ul className="absolute mt-2 p-2 shadow-lg z-50 bg-white rounded-lg w-52 text-black space-y-2">
                  {navLinks} {/* Replace with your navigation links */}
                </ul>
              )}
            </div>

            <Link
              to={"/"}
              className="font-bold text-lg md:text-3xl gap-3 flex items-center"
            >
              {/* <img className="md:w-12 md:h-10 w-7 h-7 relative" src={logo} alt="" /> */}
              <span>
                P<span>er</span>fect
                <span className="text-primary">Profile</span>
              </span>
            </Link>

            {/* Nav Menu */}
            <div className="hidden ml-8 lg:flex">
              <ul className="flex space-x-5">{navLinks}</ul>
            </div>
          </div>

          {/* Right Section (Login/Logout Buttons) */}
          <div>
            {user ? (
              <div className="flex md:gap-5 items-center">
                <Notification />
                <NavModal handleLogoutBtn={handleLogoutBtn} />
              </div>
            ) : (
              <div className="flex gap-5">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="font-bold flex gap-2 items-center justify-center py-2 bg-primary px-5 rounded-lg text-white"
                >
                  <FaUser className="text-sm text-white"></FaUser>Log In
                </button>

                <Link to={`/createResume`}>
                  <button className="hidden font-bold flex gap-2 items-center justify-center py-2 lg:block bg-secondary text-white px-5 rounded-lg">
                    Create My Resume
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Modal for Login */}
      <Login />
      <Register />
    </div>
  );
};

export default Navbar;
