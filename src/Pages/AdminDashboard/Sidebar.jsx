import { useState } from "react";
import { GrLogout } from "react-icons/gr";
// import { FcSettings } from 'react-icons/fc'
// import { BsFingerprint, BsFillHouseAddFill } from 'react-icons/bs'
// import { GrUserAdmin } from 'react-icons/gr'
// import { MdHomeWork } from 'react-icons/md'
// import { NavLink } from 'react-router-dom'
import { AiOutlineBars, AiOutlineClose, AiOutlineOpenAI } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
// import ToggleBtn from '../../Shared/Button/ToggleBtn'
import { GoHomeFill } from "react-icons/go";
import { FaUsers } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";

import MenuItem from "./MenuItem";
import useAuth from "../../Hook/useAuth";
import { FaHamburger } from "react-icons/fa";

const Sidebar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);
  // const [toggle, setToggle] = useState(true)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogoutBtn = () => {
    logOut();
    navigate("/")
      .then(() => {
        console.log("Sing Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="bg-[#00000f] flex justify-between w-full fixed top-0 left-0 z-[1000] md:hidden">
        <div className="p-4">
          <Link
            to="/"
            className="font-bold text-lg md:text-3xl gap-3 flex items-center"
          >
            <h1 className="uppercase font-bold font-lora text-white">
              <span>
                Perfect
                <span className="text-primary">Profile</span>
              </span>
            </h1>
          </Link>
        </div>

        <button
          onClick={handleToggle}
          className={`p-4 focus:outline-none ${
            isActive ? "text-secondary" : "text-primary"
          } `}
        >
          {isActive ? (
            <AiOutlineClose className="text-2xl" /> // Close button when sidebar is open
          ) : (
            <GiHamburgerMenu className="text-2xl" /> // Open button when sidebar is closed
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-[100]  md:block flex flex-col justify-between bg-[#00000f] text-white md:w-full w-[80%] h-screen fixed space-y-6 px-2 py-4
        transform ${isActive ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-200 ease-in-out md:translate-x-0 md:relative`}
      >
        <div className="">
          {/* Close Button for Mobile Devices */}
          <div className="hidden md:block px-4">
            <Link to="/" className="  ">
              <h1 className="font-bold text-lg lg:text-2xl uppercase font-lora">
                <span>
                  Perfect
                  <span className="text-primary">Profile</span>
                </span>
              </h1>
            </Link>
          </div>
          {isActive && (
            <button onClick={handleToggle} className="p-2 text-white md:hidden">
              <AiOutlineClose className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Nav Items */}
        <div className="flex flex-col justify-between h-full ">
          <nav className="">
            <MenuItem
              label="Overview"
              address="/dashboard"
              icon={GoHomeFill}
              handleToggle={handleToggle} // Pass handleToggle to MenuItem
            />
            <MenuItem
              label="Manage Users"
              address="manage-users"
              icon={FaUsers}
              handleToggle={handleToggle} // Pass handleToggle to MenuItem
            />
            <MenuItem
              label="Subscription"
              address="subscription"
              icon={MdPayments}
              handleToggle={handleToggle} // Pass handleToggle to MenuItem
            />
            {/* <MenuItem

            <MenuItem
              label="Payment History"
              address="transaction-history"
              icon={MdPayments}
              handleToggle={handleToggle} // Pass handleToggle to MenuItem
            /> */}
            <MenuItem
              label="Make Consultant"
              address="make-consultant"
              icon={BsPersonWorkspace}
              handleToggle={handleToggle} // Pass handleToggle to MenuItem
            />
            {/* <MenuItem
              label="All Templates"
              address="/all-templates"
              icon={HiTemplate}
              handleToggle={handleToggle} // Pass handleToggle to MenuItem
            /> */}
          </nav>
          <div>
            <div className=" md:-mt-28">
              <button
                onClick={handleLogoutBtn}
                className="flex w-full items-center px-4 py-2 text-gray-600  transition-colors duration-300 transform"
              >
                <GrLogout className="text-2xl text-secondary" />
                <span className="mx-4 font-medium font-montserrat text-lg text-white">
                  Logout
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
