import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaShare, FaUser } from "react-icons/fa6"
import { FaRegEye } from "react-icons/fa";
import Container from "../../Shared/Container";
import Login from "../../Authentication/Login";
import Register from "../../Authentication/Register";
import Notification from "../../Shared/Navbar/Notification";
import NavModal from "../../Shared/Navbar/NavModal";
import useAuth from "../../Hook/useAuth";

const ShareResumeNavbar = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();



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
        <div className="min-h-[70px] border-b shadow">
            <Container>
                <div className=" flex items-center justify-between barlow-regular min-h-[70px] p-0 md:py-3 py-5">
                    <div className="space-x-5 flex items-center">

                        <Link
                            to={"/"}
                            className="font-bold text-lg md:text-3xl gap-3 flex items-center"
                        >
                            {/* <img className="md:w-12 md:h-10 w-7 h-7 relative" src={logo} alt="" /> */}
                            <span className="">
                                P<span className="">er</span>fect
                                <span className="text-primary">Profile</span>
                            </span>
                        </Link>

                        <button className=" px-4 border font-montserrat rounded text-center border-secondary text-secondary flex items-center gap-2 py-1">
                            <FaRegEye className="text-secondary" /> View Only
                        </button>

                    </div>

                    {/* Right Section (Login/Logout Buttons) */}
                    <div className="">
                        {user ? (
                            <div className="flex md:gap-5 items-center">
                                <Notification />
                                <NavModal
                                    handleLogoutBtn={handleLogoutBtn}
                                />
                            </div>
                        ) : (
                            <div className="flex gap-5">

                                <Link to={`#`}>

                                    <button className=" px-8 border font-montserrat rounded text-center border-secondary text-secondary flex items-center gap-2 py-1">
                                        <FaShare className="text-secondary" /> Share
                                    </button>
                                </Link>

                                <button
                                    onClick={() => document.getElementById("my_modal_3").showModal()}
                                    className=" px-8 border font-montserrat rounded text-center border-primary bg-primary text-white flex items-center gap-2"
                                >
                                    <FaUser className="text-sm text-white"></FaUser>Log In
                                </button>


                            </div>
                        )}
                    </div>
                </div>
            </Container>

            {/* Modal for Login */}
            <Login />
            <Register />
            {/* <Modal>
      </Modal> */}
        </div>
    );
};

export default ShareResumeNavbar;
