import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";
import Template1 from "../../Components/TemplateSection/Template1";
import Template2 from "../../Components/FinalPageTemplate/Template2";
import Template3 from "../../Components/TemplateSection/Template3";
import { FaEnvelope } from "react-icons/fa";
import { FaFileExport, FaShare } from "react-icons/fa6";
import ShareLinkCopyModal from "./ShareLinkCopyModal";
import { Menu } from '@headlessui/react';
import { GrDocumentText } from "react-icons/gr";
// import Template2nd from "../../Components/TemplateSection/Template2nd";
import Template4 from "../../Components/TemplateSection/Template4";
import Template5 from "../../Components/TemplateSection/Template5";
import Template6 from "../../Components/TemplateSection/Template6";
// import Template1 from "../../assets/Template1";
const FinalResume = () => {
  const info = useLoaderData();


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

  const userData = info;

  const renderTemplate = (id) => {
    if (id === "template1") {
      return <Template1 userData={userData} />;
    }
    if (id === "template2") {
      return <Template2 userData={userData} />;
    }
    if (id === "template3") {
      return <Template3 userData={userData} />;
    }
    if (id === "template4") {
      return <Template4 userData={userData} />;
    }
    if (id === "template5") {
      return <Template5 userData={userData} />;
    }
    if (id === "template6") {
      return <Template6 userData={userData} />;
    }
  };

  console.log(userData);

  // for modal state management
  const [shareLinkCopy, setShareLinkCopy] = useState(false);

  const closeModal = () => {
    setShareLinkCopy(false);
  };

  // Function to copy the shareable link
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(userData?.resumeLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handlePdf = async () => {
    const element = document.getElementById("element");
    const opt = {
      margin: 1,
      filename: userData?.name,
      enableLinks: true,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

 

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

        <div  id="element" className="w-full h-full">
          {/* <div id="element"
            className="w-full h-full"
            style={{
              transform: 'scale(0.60)',
              transformOrigin: 'top left',
              height: '400px',
            }}
          > */}
            {renderTemplate(info?.templateItem)}
          {/* </div> */}
        </div>


        <div className="w-2/12 flex flex-col items-start px-7 pt-10 gap-4">

          {/* <div className="lg:w-2/12 w-full flex flex-col lg:items-start items-center px-7 pt-10 gap-4"> */}
          <div className="relative text-right">
            <Menu as="div" className="relative inline-block text-left ">
              <Menu.Button className="btn btn-ghost btn-circle avatar text-black">


                <button
                  // onClick={handlePdf}
                  // onClick={generatePDF}
                  className="w-36 px-8 border font-montserrat rounded-full text-center border-secondary text-secondary flex items-center gap-2"
                >
                  <FaFileExport className="text-secondary" /> Export
                </button>
              </Menu.Button>

              <Menu.Items
                className="absolute right-0 mt-2 w-40 origin-top-right p-[2px] bg-gradient-to-r from-[#00FFB2] via-[#00ffff] to-[#006AFF] rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:w-44"
              >
                <div className="bg-white rounded-xl p-5">
                  <Menu.Item>
                    {({ active }) => (
                      <button onClick={handlePdf}
                        className={`${active ? ' font-semibold bg-white ' : 'font-semibold'
                          } group flex w-full items-center gap-2  py-1.5 text-black`}
                      >
                        <GrDocumentText className="text-primary" /> PDF Standard
                      </button>
                    )}
                  </Menu.Item>




                </div>
              </Menu.Items>

            </Menu>
          </div>

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
            shareLink={userData?.resumeLink}
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
