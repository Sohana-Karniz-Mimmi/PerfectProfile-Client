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

const ShareResumeNavbar = ({ shareLink }) => {
    const { user, } = useAuth();
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
        <div className="min-h-[70px] border-b bg-[#00000f] shadow">
            <Container>
                <div className=" flex items-center justify-between barlow-regular min-h-[70px] p-0 md:py-3 py-5">
                    <div className="space-x-5 flex items-center">

                        <Link to="/">
                            <h1 className="text-white lg:text-2xl text-xl font-extrabold font-lora">
                                Perfect<span className="text-primary">Profile</span>
                            </h1>
                        </Link>

                        <button className="hidden px-4 border font-montserrat rounded text-center border-secondary text-secondary md:flex items-center gap-2 py-1 font-medium">
                            <FaRegEye className="text-secondary" /> View Only
                        </button>

                    </div>

                    {/* Right Section (Login/Logout Buttons) */}
                    <div className="flex gap-5">
                        <Link
                            onClick={handleShareClick}>

                            {/* <button className="flex md:px-8 px-4 border font-montserrat rounded text-center border-secondary text-secondary items-center gap-2 py-1 md:text-base text-sm">
                                <FaShare className="text-secondary" /> Share
                            </button> */}

                            <div className="md:h-[36px] h-7 border group border-primary font-montserrat text-center rounded group-hover:border-secondary hover:border-secondary">
                                <button className="py-1 md:px-8 px-4 font-medium group-hover:bg-secondary group-hover:text-white h-0 group-hover:h-full transition-all duration-300 ease-out transform translate-y-0 font-montserrat rounded group-hover:border-secondary  text-secondary gap-2 md:text-base text-sm">
                                    <h2 className="flex items-center gap-2"><FaShare className="text-secondary group-hover:text-white md:text-base text-sm" /> Share</h2>
                                </button>
                            </div>


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
