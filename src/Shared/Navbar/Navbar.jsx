import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "../Container";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa6";
// import useAuth from "../../Hook/useAuth";
import Login from "../../Authentication/Login";
import Register from "../../Authentication/Register";
import { GrLogout } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import NavModal from "./NavModal";
import Notification from "./Notification";
import useAuth from "../../Hook/useAuth";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const modalRef = useRef(null); // Reference to the modal
  const burgerRef = useRef(null); // Reference to the hamburger icon

  // Function to close the modal when navLink is clicked
  const closeMenuOnNavLinkClick = () => {
    setMenuOpen(false);
  };

  const navLinks = (
    <>
      <li>
        {" "}
        <NavLink
          onClick={closeMenuOnNavLinkClick}
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
          onClick={closeMenuOnNavLinkClick}
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

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "p-0 text-primary pb-1 rounded-none text-[17px] border-b-2 font-medium mt-2 border-secondary"
              : "font-medium p-0 transition-all duration-200 ease-in-out hover:text-secondary hover:pb-1 hover:rounded-none text-[17px] hover:border-b-2 mt-2 border-primary"
          }
          to={"/consultation"}
        >

          Consultation
        </NavLink>
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


      <li>
        {" "}
        <NavLink
          onClick={closeMenuOnNavLinkClick}
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
          onClick={closeMenuOnNavLinkClick}
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
    // setMenuOpen(!menuOpen);
    setMenuOpen((prev) => !prev);
  };

  // Function to handle clicks outside of the modal
  const handleClickOutside = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      burgerRef.current &&
      !burgerRef.current.contains(event.target)
    ) {
      setMenuOpen(false); // Close the modal when clicking outside
    }
  };

  // Add event listener to detect clicks outside the modal
  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup on component unmount
    };
  }, [menuOpen]);

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
    <div className="min-h-[99px] border-b shadow ">
      {/* <Container> */}
      <div className="max-w-[93%] mx-auto xl:px-0 px-2 flex items-center justify-between min-h-[99px] p-0 md:py-3 py-5">
        <div className="flex items-center">
          <div className="relative">
            {/* Hamburger Icon */}
            <div
              className="m-1 bg-transparent border-none lg:hidden shadow-none cursor-pointer"
              onClick={toggleMenu} // Call toggle function on click
              ref={burgerRef}
            >
              <GiHamburgerMenu className="text-xl" />
            </div>

            {/* Menu */}
            {menuOpen && (
              <ul
                ref={modalRef}
                className="absolute mt-2 p-2 shadow-lg !z-[1000] bg-white rounded-lg w-52 text-black space-y-2"
              >
                {navLinks}
              </ul>
            )}
          </div>

          <Link to="/">
            <h1 className="text-black lg:text-2xl text-xl font-extrabold font-lora">
              Perfect<span className="text-primary">Profile</span>
            </h1>
          </Link>

          {/* Nav Menu */}
          <div className="hidden font-bold  ml-8 lg:flex">
            <ul className="flex space-x-5">{navLinks}</ul>
          </div>
        </div>

        {/* Right Section (Login/Logout Buttons) */}
        <div>
          {user ? (
            <div className="flex md:gap-5 gap-2 items-center">
              <Notification />
              <NavModal handleLogoutBtn={handleLogoutBtn} />
            </div>
          ) : (
            <div className="flex gap-5">
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="font-bold flex gap-2 items-center justify-center md:py-2 py-1 bg-primary md:px-5 px-2 rounded-lg text-white lg:text-base text-sm"
              >
                <FaUser className="md:text-sm text-xs text-white"></FaUser>
                Log In
              </button>

              <Link to={`predefined-templates`}>
                <button className="hidden font-bold xl:flex gap-2 items-center justify-center py-2 bg-secondary text-white px-5 rounded-lg">
                  Create Resume
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* </Container> */}

      {/* Modal for Login */}
      <Login />
      <Register />
    </div>
  );
};;

export default Navbar;
