import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";
import Template1 from "../../Components/TemplateSection/Template1";
import Template2 from "../../Components/TemplateSection/Template2";
import Template3 from "../../Components/TemplateSection/Template3";
import { FaEnvelope } from "react-icons/fa";
import { FaFileExport, FaShare } from "react-icons/fa6";
import useAxiosPublic, { axiosPublic } from "../../Hook/useAxiosPublic";
import { ResumeContext } from "../../Context/CustomizeResumeContext";
import ShareLinkCopyModal from "./ShareLinkCopyModal";
import axios from "axios";
// import Template1 from "../../assets/Template1";
const FinalResume = () => {
  const axiosPublic = useAxiosPublic();
  const { savedResume, shareLink } = useContext(ResumeContext);
  // Find common objects winpm i html2pdf.js@0.9.0th the same _id in both arrays
  const info = useLoaderData();
  const { id } = useParams();

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

  const handlePdf = async () => {
    const element = document.getElementById("element");
    const opt = {
      margin: 1,
      filename: "myResume.pdf",
      enableLinks: true,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  // const resumeRef = useRef(null);

  // // Generate PDF
  // const generatePDF = () => {
  //   const element = resumeRef.current;
  //   const options = {
  //     margin: 0, // Set to 0 for full-width
  //     filename: `${userData.name}_Resume.pdf`,
  //     image: { type: "jpeg", quality: 0.98 },
  //     html2canvas: { scale: 2 }, // Increase the scale for better quality
  //     jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  //   };

  //   html2pdf().set(options).from(element).save();
  // };

  return (
    <div className="h-screen">
      <div className="py-6 px-4 flex items-center bg-[#00000f]">
        <Link to="/">
          <h1 className="text-white lg:text-2xl text-xl font-extrabold font-lora uppercase">
            Perfect<span className="text-primary">Profile</span>
          </h1>
        </Link>
      </div>
      <section className="flex lg:flex-row flex-col justify-between pt-8 gap-5">
        <div className="lg:w-2/12 w-full"></div>

        <div>
          <div id="element" className=" w-full pt-0">
            {renderTemplate(info?.userData?.templateItem)}
          </div>
        </div>

        <div className="lg:w-2/12 w-full flex flex-col lg:items-start items-center px-7 pt-10 gap-4">
          <button
            onClick={handlePdf}
            // onClick={generatePDF}
            className="w-36 px-8 border font-montserrat rounded-full text-center border-secondary text-secondary flex items-center gap-2"
          >
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
          <button className="w-36 px-5 py-1   rounded-full text-center bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l  text-sm md:text-xl font-montserrat  shadow-lg font-bold text-white">
            Finish
          </button>
        </div>
      </section>
    </div>
  );
};

export default FinalResume;
