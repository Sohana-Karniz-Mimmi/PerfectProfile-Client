import PropTypes from "prop-types";

import { FaUser } from "react-icons/fa";

import { MdAdminPanelSettings } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { updateUserRole } from "../../store/Features/user/userSlice";

const UserDataRow = ({ user, refetch }) => {
  const axios = useAxiosPublic();
  const dispatch = useDispatch();
  const userId = user?._id;

  const handleRoleChange = async (newRole) => {
    Swal.fire({
      title: "Are you sure?",
      text: `If you Click yes then your user will be "${newRole}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, make them ${newRole}!`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.patch(`/user/${user?._id}`, { role: newRole });
        if (res.status === 200) {
          dispatch(updateUserRole({ userId, newRole }));
          Swal.fire({
            title: "Confirm!",
            text: res.data.message,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <tr className="">
      {/* <td className='pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{indx + 1}</p>
      </td> */}
      <td className="pr-5 pl-10 py-5 border-b   border-gray-200 bg-white text-sm ">
        <p className="text-gray-900 whitespace-no-wrap ">{user?.name}</p>
      </td>
      <td className="pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
      </td>
      <td className="pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.role}</p>
      </td>
      <td className="pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-green-500 ">{user.productName}</p>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap bg-white pr-5 pl-10 border-b border-gray-200 ">
        <div className="flex items-center gap-x-6">
          <button
            className="text-gray-500 transition-colors duration-200  hover:text-red-500 focus:outline-none"
            onClick={() => handleRoleChange("admin")}
          >
            <MdAdminPanelSettings className="text-2xl text-orange-500 hover:text-orange-300" />
          </button>

          <button
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500  hover:text-yellow-500 focus:outline-none"
            onClick={() => handleRoleChange("user")}
          >
            <FaUser className="text-2xl text-blue-500 hover:text-blue-800" />
          </button>
          <button
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500  hover:text-yellow-500 focus:outline-none"
            onClick={() => handleRoleChange("consultant")}
          >
            <FaHandsHelping className="text-2xl text-purple-500 hover:text-purple-700" />
          </button>
        </div>
      </td>
    </tr>
  );
};

UserDataRow.propTypes = {
  user: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
  indx: PropTypes.node.isRequired,
};

export default UserDataRow;
