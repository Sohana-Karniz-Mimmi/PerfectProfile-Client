import PropTypes from "prop-types";

const UserDataRow = ({ user, refetch }) => {
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
    </tr>
  );
};

UserDataRow.propTypes = {
  user: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
  indx: PropTypes.node.isRequired,
};

export default UserDataRow;
