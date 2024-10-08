import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Container from "../Container";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const navLinks = (
    <>
      <li>
        {" "}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-0 text-blue-600 pb-1 rounded-none text-[17px] border-b-2 font-medium mt-2 border-blue-600"
              : "font-medium p-0 transition-all duration-200 ease-in-out hover:pb-1 hover:text-blue-600 hover:rounded-none text-[17px] hover:border-b-2 border-blue-600 mt-2"
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
              ? "p-0 text-blue-600 pb-1 rounded-none text-[17px] border-b-2 font-medium mt-2 border-blue-600"
              : "font-medium p-0 transition-all duration-200 ease-in-out hover:text-blue-600 hover:pb-1 hover:rounded-none text-[17px] hover:border-b-2 mt-2 border-blue-600"
          }
          to={"/template"}
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
              ? "p-0 text-blue-600 pb-1 rounded-none text-[17px] border-b-2 font-medium mt-2 border-blue-600"
              : "font-medium p-0 transition-all duration-200 ease-in-out hover:text-blue-600 hover:pb-1 hover:rounded-none text-[17px] hover:border-b-2 mt-2 border-blue-600"
          }
          to={"/pricing"}
        >
          {" "}
          Pricing{" "}
        </NavLink>{" "}
      </li>

      <li>
        {" "}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-0 text-blue-600 pb-1 rounded-none text-[17px] border-b-2 font-medium mt-2 border-blue-600"
              : "font-medium p-0 transition-all duration-200 ease-in-out hover:text-blue-600 hover:pb-1 hover:rounded-none text-[17px] hover:border-b-2 mt-2 border-blue-600"
          }
          to={"/resources"}
        >
          {" "}
          Resources{" "}
        </NavLink>{" "}
      </li>

      <li>
        {" "}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-0 text-blue-600 pb-1 rounded-none text-[17px] border-b-2 font-medium mt-2 border-blue-600"
              : "font-medium p-0 transition-all duration-200 ease-in-out hover:text-blue-600 hover:pb-1 hover:rounded-none text-[17px] hover:border-b-2 mt-2 border-blue-600"
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
              ? "p-0 text-blue-600 pb-1 rounded-none text-[17px] border-b-2 font-medium mt-2 border-blue-600"
              : "font-medium p-0 transition-all duration-200 ease-in-out hover:text-blue-600 hover:pb-1 hover:rounded-none text-[17px] hover:border-b-2 mt-2 border-blue-600"
          }
          to={"/contact"}
        >
          {" "}
          Contact Us{" "}
        </NavLink>{" "}
      </li>
    </>
  );

  const handleLogoutBtn = () => {
    logOut();
    navigate("/")
      .then(() => {
        toast.success("Sing Out Successfully");
      })
      .catch((error) => {
        toast.error("SignOut", error);
      });
  };

  return (
    <Container>
      <div className=" navbar items-center justify-between barlow-regular min-h-[99px] p-0 md:py-3 py-5">
        <div className="">
          <details className="dropdown">
            <summary className="m-1 btn bg-transparent border-none hover:bg-transparent lg:hidden shadow-none">
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
            </summary>
            <ul className="p-2 shadow dropdown-content z-50 bg-white rounded-box w-52 text-black space-y-2">
              {navLinks}
            </ul>
          </details>

          <Link
            to={"/"}
            className="font-bold text-lg md:text-3xl gap-3 flex items-center"
          >
            {/* <img className="md:w-12 md:h-10 w-7 h-7 relative" src={logo} alt="" /> */}
            <span className="">
              P<span className="">er</span>fect
              <span className="text-blue-600">Profile</span>
            </span>
          </Link>

          {/* Nav Menu */}
          <div className="navbar-center hidden ml-8 lg:flex">
            <ul className="menu-horizontal space-x-5 ">{navLinks}</ul>
          </div>
        </div>

        {/* NavEnds */}
        <div className="">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <div
                  className="btn flex items-center btn-ghost btn-circle avatar tooltip hover:tooltip-open tooltip-bottom text-white"
                  data-tip={user?.displayName}
                >
                  <div className=" md:w-12 w-8 rounded-full ">
                    <img alt={"User"} src={user?.photoURL} />
                  </div>
                </div>

                <Link
                  to={`/signIn`}
                  onClick={handleLogoutBtn}
                  className="md:mr-2 mr-1 md:px-[20px] md:py-[11px] py-0.5 px-1.5 ease-out font-bold tracking-wide text-white md:text-[15px] text-xs capitalize transition-colors duration-300 transform bg-[#51AA1B] rounded-full hover:bg-blue-600 "
                >
                  Log Out
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className=" flex ">
                <Link
                  to={`/signIn`}
                  className="md:mr-2 mr-1 md:px-[30px] md:py-[9px] py-0.5 px-1.5 ease-out font-medium tracking-wide text-white md:text-[15px] text-xs capitalize transition-colors duration-300 transform bg-blue-600 rounded-full hover:bg-violet-800 "
                >
                  Login
                </Link>
                <Link
                  to={`/SignUp`}
                  className="md:px-[30px] md:py-[9px] px-1 ease-out font-medium tracking-wide text-white md:text-[15px] text-xs capitalize transition-colors duration-300 transform bg-violet-800 rounded-full hover:bg-blue-600 "
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
