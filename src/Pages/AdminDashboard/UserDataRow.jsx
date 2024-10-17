import PropTypes from 'prop-types'
const UserDataRow = ({ user, refetch }) => {

  const closeModal = () => {
    setIsUserModalOpen(false)
    setIsAdminModalOpen(false)
  }

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
        <p className="text-gray-900 whitespace-no-wrap">{user?.productName}</p>
      </td>
      <td className="pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm">
        {user?.status ? (
          <p
            className={`${
              user.status === "Verified" ? "text-green-500" : "text-yellow-500"
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className="text-green-500 whitespace-no-wrap">Active</p>
        )}
      </td>
      <td className="pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => setIsAdminModalOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-medium text-green-600 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-emerald-100 opacity-50 rounded-full"
          ></span>
          <span className="relative">Make Admin</span>
        </button>

        <button
          onClick={() => setIsUserModalOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-medium text-blue-600 leading-tight ml-3"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-blue-100 opacity-50 rounded-full"
          ></span>
          <span className="relative">Make User</span>
        </button>
      </td>
    </tr>
  );
}

UserDataRow.propTypes = {
  user: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
  indx: PropTypes.node.isRequired,
}

export default UserDataRow
