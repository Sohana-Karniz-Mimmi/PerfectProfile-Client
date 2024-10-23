import { Link, NavLink } from "react-router-dom";
import {
  FaUser,
  FaEdit,
  FaUsers,
  FaBuilding,
  FaFileAlt,
  FaAddressBook,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";

const SitebarProfileRoute = () => {
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div>
      {/* Mobile Navbar */}
      <div className=" flex mt-[95px] justify-between w-full fixed top-0 left-0 md:hidden bg-white">
        <div className="p-4">
          <Link
            to="/"
            className="font-bold text-lg md:text-3xl gap-3 flex items-center"
          >
            <h1 className="uppercase font-bold font-lora text-white">
              <span className="text-[#00000f]">
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
        className={`z-[100]  md:block flex flex-col justify-between bg-white border-r text-white md:w-full w-[80%] md:h-screen h-screen fixed space-y-6 px-2 py-4
        transform ${isActive ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-200 ease-in-out md:translate-x-0 md:relative`}
      >
        <div className="h-full ">
          {/* Close Button for Mobile Devices */}
          <div className="hidden px-4 border">
            <Link to="/" className="  ">
              <h1 className="font-bold text-lg lg:text-2xl uppercase font-lora">
                <span>
                  Perfect
                  <span className="text-primary">Profile</span>
                </span>
              </h1>
            </Link>
          </div>
          {/* {isActive && (
            <button onClick={handleToggle} className="p-2 text-white md:hidden">
              <AiOutlineClose className="h-5 w-5" />
            </button>
          )} */}
          <div className="h-full flex flex-col font-montserrat justify-between">
            <div className="flex flex-col gap-2">
              <NavLink
                to="editingProfile"
                className={({ isActive }) =>
                  `hover:bg-[#A7F3D0] hover:rounded px-4 py-3 flex items-center gap-2 ${
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-700 font-semibold"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <CgProfile
                      className="text-2xl text-gray-700"
                      style={{
                        color: isActive && "#00C8AA",
                        fontSize: isActive && "28px",
                      }}
                    />
                    Your Account
                  </>
                )}
              </NavLink>
              <NavLink
                to="address"
                className={({ isActive }) =>
                  `hover:bg-[#A7F3D0] hover:rounded px-4 py-3 flex items-center gap-2 ${
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-700 font-semibold"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <CgProfile
                      className="text-2xl text-gray-700"
                      style={{
                        color: isActive && "#00C8AA",
                        fontSize: isActive && "28px",
                      }}
                    />
                    General
                  </>
                )}
              </NavLink>
            </div>
            <div>
              <h1 className="-mt-44">abc</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitebarProfileRoute;
