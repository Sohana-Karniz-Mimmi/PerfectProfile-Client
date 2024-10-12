import { Menu } from "@headlessui/react";
import PropTypes from "prop-types";
import { GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const NavModal = ({ handleLogoutBtn }) => {
  const { user } = useAuth();
  return (
    <div className="relative text-right">
      <Menu as="div" className="relative inline-block text-left ">
        <Menu.Button className="bg-transparent rounded-full p-2 text-black">
          <div className="w-14 h-14 border rounded-full overflow-hidden">
            <img
              alt="User"
              src={
                user?.photoURL ||
                "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              }
              className="object-cover w-full h-full"
            />
          </div>
        </Menu.Button>

        <Menu.Items className="absolute right-0 mt-2 w-52 origin-top-right p-[2px] bg-gradient-to-r from-[#00FFB2] via-[#00ffff] to-[#006AFF] rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:w-64">
          <div className="bg-white rounded-xl p-6">
            <Menu.Item>
              {({ active }) => (
                <Link to={`/profile`}>
                  <button
                    className={`${
                      active ? "bg-white" : ""
                    } group flex w-full items-center gap-2  py-1.5 border-b text-black`}
                  >
                    My Profile
                  </button>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`${
                    active ? "bg-white" : ""
                  } group flex w-full items-center gap-2  py-1.5 border-b text-black`}
                >
                  My Resume
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-white" : ""
                  } group flex w-full items-center gap-2  py-1.5 border-b text-black`}
                  onClick={() => handleRoleChange("archive")}
                >
                  Favorite
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-white" : ""
                  } group flex w-full items-center gap-2  py-1.5 border-b text-black`}
                  onClick={() => handleRoleChange("archive")}
                >
                  Plan & Pricing
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-white" : ""
                  } group flex w-full items-center gap-2  py-1.5 border-b text-black`}
                  onClick={() => handleRoleChange("archive")}
                >
                  Purchase History
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogoutBtn}
                  className={`${
                    active ? "bg-white" : ""
                  } group flex w-full items-center gap-2  py-1.5 text-black`}
                >
                  Logout
                  <GrLogout className="size-4 fill-black/30" />
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

NavModal.propTypes = {
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
  handleRoleChange: PropTypes.func,
};

export default NavModal;
