const AdminHeader = () => {
    return (
        <div className="flex justify-between items-center md:py-6 py-3 md:px-9 p-4 bg-white mb-5"
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
            <div className="md:text-2xl text-xl font-bold text-gray-800">
                Admin Dashboard
            </div>
            <div className="flex items-center">
                <div className="md:block hidden">
                    <h2 className="font-semibold mr-3 md:text-lg text-base text-gray-800">Shohana Akter</h2>
                    <p className="mr-3 md:text-base text-xs text-gray-600">Admin</p>
                </div>
                <img
                    src="https://i.ibb.co.com/FmYjv4B/profile-pic-12.png"
                    alt="Profile"
                    className="md:w-14 w-10 md:h-14 h-10 rounded-full"
                />
            </div>
        </div>
    );
};

export default AdminHeader;
