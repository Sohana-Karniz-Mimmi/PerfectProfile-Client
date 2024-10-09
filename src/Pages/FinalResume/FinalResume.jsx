import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

import Template1 from "../../Components/TemplateSection/Template1";
import Template2 from "../../Components/TemplateSection/Template2";
import Template3 from "../../Components/TemplateSection/Template3";
import { FaEnvelope } from "react-icons/fa";
import { FaFileExport, FaShare } from "react-icons/fa6";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { ResumeContext } from "../../Context/CustomizeResumeContext";
import ShareLinkCopyModal from "./ShareLinkCopyModal";

const FinalResume = () => {
  const { savedResume, shareLink } = useContext(ResumeContext);
  // Find common objects with the same _id in both arrays
  const info = useLoaderData();
  console.log(savedResume);

  const useUnloadAlert = () => {
    useEffect(() => {
      const handleBeforeUnload = (event) => {
        // Confirmation message
        event.preventDefault();
        event.returnValue = ""; // Required for modern browsers
      };

      // Add event listener for 'beforeunload' event
      window.addEventListener("beforeunload", handleBeforeUnload);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }, []);
  };
  useUnloadAlert();

  const userData = info?.userData;
  console.log(userData);

  const renderTemplate = (id) => {
    if (id === "template1") {
      return <Template1 userData={userData} />;
    }
    if (id === "template2") {
      return <Template2 userData={userData} />;
    }
  };

  // for modal state management
  const [shareLinkCopy, setShareLinkCopy] = useState(false);

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
    <div className="h-screen">
      <div className="py-8 px-4 bg-[#00000f]">
        <Link to="/">
          <h1 className="text-white text-xl font-bold inline-block">
            Perfect Profile
          </h1>
        </Link>
      </div>
      <section className="flex justify-between pt-12 gap-8">
        <div className="w-3/12"></div>
        <div className="w-6/12">
          {renderTemplate(info?.userData?.templateItem)}
        </div>
        <div className="w-3/12 flex flex-col items-end px-8 gap-4">
          <button className="w-36 px-8 border font-montserrat rounded-full text-center border-secondary text-secondary flex items-center gap-2">
            <FaFileExport className="text-secondary" /> Export
          </button>
          <button
            onClick={() => setShareLinkCopy(true)}
            className="w-36 px-8 border font-montserrat rounded-full text-center border-secondary text-secondary flex items-center gap-2"
          >
            <FaShare className="text-secondary" /> Share
          </button>
          <ShareLinkCopyModal
            isOpen={shareLinkCopy}
            closeModal={closeModal}
            copyToClipboard={copyToClipboard}
            copied={copied}
            shareLink={shareLink}
          />

          <button className="w-36 px-8 border font-montserrat rounded-full text-center border-secondary text-secondary flex items-center gap-2">
            <FaEnvelope className="text-secondary" /> Email
          </button>
          <button className="w-36 px-8 py-2  font-montserrat rounded-full text-center bg-primary font-bold text-black">
            Finish
          </button>
        </div>
      </section>
    </div>
  );
};

export default FinalResume;
