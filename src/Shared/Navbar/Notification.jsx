import { Menu } from "@headlessui/react";
import PropTypes from "prop-types";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoNotificationsSharp } from "react-icons/io5";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Notification = ({ handleLogoutBtn }) => {
  const axiosPublic = useAxiosPublic();
  const[notification, setNotification] = useState([])

  const { data: userData = {}, refetch } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const res = await axiosPublic(`/user/${user.email}`);
      return res.data;
    },
  });
  console.log(userData.isRead);


  const read = userData.isRead
  console.log(read)



  return (
    <div className="relative text-right">
      <Menu as="div" className="relative inline-block text-left ">
        <Menu.Button  className="btn btn-ghost btn-circle avatar text-black">
          <IoMdNotificationsOutline className="text-[28px]" />
        </Menu.Button>

        <Menu.Items className="absolute right-0 mt-2 w-52 origin-top-right p-[2px] bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:w-64">
          <div className="border-b p-3">
            <h3 className="text-lg font-semibold text-black">Notifications</h3>
          </div>
          <div className="bg-white rounded-xl pb-6">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-white" : ""
                  } text-start w-full hover:bg-gray-300 py-1.5 text-black `}
                >
                  <div className="px-3 flex gap-2.5 ">
                    {
                        userData?.isRead === false || userData?.isRead === true? (<><div className="">
                        <IoNotificationsSharp className="mt-1.5 p-1 bg-secondary text-white text-[22px] rounded " />
                      </div>
                      <h2>Thank you for the payment</h2></> ): (<p>no notification</p>)
                    }
                  </div>
                </button>
              )}
            </Menu.Item>
            {/* <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-white' : ''
                                        } text-start w-full hover:bg-gray-300 py-1.5 text-black `}
                                >
                                    <div className='px-3 flex gap-2.5 '>
                                        <div className=''>
                                            <IoNotificationsSharp  className="mt-1.5 p-1 bg-secondary text-white text-[22px] rounded " />
                                        </div>
                                        <h2>
                                            This is where your notifications will appear
                                        </h2>

                                    </div>
                                </button>
                            )}
                        </Menu.Item>
                        */}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

Notification.propTypes = {
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
  handleRoleChange: PropTypes.func,
};

export default Notification;
