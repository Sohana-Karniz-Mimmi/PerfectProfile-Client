import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaShare, FaUser } from "react-icons/fa6"
import { FaRegEye } from "react-icons/fa";
import Container from "../../Shared/Container";
import Login from "../../Authentication/Login";
import Register from "../../Authentication/Register";
import useAuth from "../../Hook/useAuth";
import ShareLinkCopyModal from "./ShareLinkCopyModal";
import { useState } from "react";

const ShareResumeNavbar = ({shareLink}) => {
    const { user,  } = useAuth();
    const [shareLinkCopy, setShareLinkCopy] = useState(false);

    const handleShareClick = () => {
      if (user) {
        setShareLinkCopy(true);
      } else {
        toast.error('You have to log in first')
         setTimeout(() => {
      document.getElementById("my_modal_3").showModal();
    }, 2000);
      }
    };
    
    
    // for modal state management
    const closeModal = () => {
        setShareLinkCopy(false);
    };

    // Function to copy the shareable link
    const [copied, setCopied] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareLink).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
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

                        <button className="hidden px-4 border font-montserrat rounded text-center border-secondary text-secondary md:flex items-center gap-2 py-1">
                            <FaRegEye className="text-secondary" /> View Only
                        </button>

                    </div>

                    {/* Right Section (Login/Logout Buttons) */}
                    <div className="flex gap-5">
                        <Link 
                        onClick={handleShareClick}>

                            <button className="md:flex hidden md:px-8 px-4 border font-montserrat rounded text-center border-secondary text-secondary  items-center gap-2 py-1">
                                <FaShare className="text-secondary" /> Share
                            </button>
                            <ShareLinkCopyModal
                                isOpen={shareLinkCopy}
                                closeModal={closeModal}
                                copyToClipboard={copyToClipboard}
                                copied={copied}
                                shareLink={shareLink}
                            />
                        </Link>
                        {!user && (
                            <div className="">
                                <button
                                    onClick={() => document.getElementById("my_modal_3").showModal()}
                                    className=" md:px-8 px-3 md:text-base text-sm border font-montserrat rounded text-center border-primary bg-primary text-white flex items-center gap-2 md:py-1 py-0.5"
                                >
                                    <FaUser className="md:text-sm text-xs text-white"></FaUser>Log In
                                </button>


                            </div>
                        )}
                    </div>
                </div>
            </Container >

            {/* Modal for Login */}
            < Login />
            <Register />
            {/* <Modal>
      </Modal> */}
        </div >
    );
};

export default ShareResumeNavbar;
