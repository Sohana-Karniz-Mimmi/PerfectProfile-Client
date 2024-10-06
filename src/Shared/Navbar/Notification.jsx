import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';
import { GrLogout } from 'react-icons/gr';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Notification = ({ handleLogoutBtn }) => {
    return (
        <div className="relative text-right">
            <Menu as="div" className="relative inline-block text-left ">
                <Menu.Button className="btn btn-ghost btn-circle avatar text-black">
                    <IoMdNotificationsOutline className="text-3xl" />
                </Menu.Button>

                <Menu.Items
                    className="absolute right-0 mt-2 w-52 origin-top-right p-[2px] bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:w-64">



                    <div className="border-b p-3">
                        <h3 className='text-lg font-semibold text-black'>Notification</h3>
                    </div>
                    <div className="bg-white rounded-xl pb-6">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-white' : ''
                                        } text-start w-full hover:bg-gray-400 py-1.5 text-black`}
                                >
                                    <h2 className=' px-3'>
                                        This is where your will notifications will appear
                                    </h2>
                                </button>
                            )}
                        </Menu.Item>

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
