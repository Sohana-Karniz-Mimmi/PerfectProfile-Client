import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";
import { FaEnvelope, FaHome, FaRegFileAlt, FaTimes } from "react-icons/fa";
import { FaApper, FaDollarSign, FaFileExport, FaShare } from "react-icons/fa6";
import ShareLinkCopyModal from "./ShareLinkCopyModal";
import { Menu } from "@headlessui/react";
import { GrDocumentText } from "react-icons/gr";
import { toJpeg, toPng } from "html-to-image";
import { px } from "framer-motion";
import { PiFilePng } from "react-icons/pi";
import { SiJpeg } from "react-icons/si";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { GoRepoTemplate } from "react-icons/go";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import { RiCustomerServiceLine } from "react-icons/ri";

/******** Templates **********/
import Template1 from "../../Components/AllTemplates/Template1";
import Template2 from "../../Components/AllTemplates/Template2";
import Template3 from "../../Components/AllTemplates/Template3";
import Template4 from "../../Components/AllTemplates/Template4";
import Template5 from "../../Components/AllTemplates/Template5";
import Template6 from "../../Components/AllTemplates/Template6";

// import Template1 from "../../assets/Template1";
import useAuth from "../../Hook/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import ReviewModal from "../../Components/ReviewModal/ReviewModal";
import { Helmet } from "react-helmet-async";
import Container from "../../Shared/Container";
import Templats from "../../Components/DrawerComponent/Templates";
import Pricings from "../../Components/DrawerComponent/Pricings";
import Designs from "../../Components/DrawerComponent/Designs";
import './Final.css';
const FinalResume = () => {
  const axiosPublic = useAxiosPublic();
  const info = useLoaderData();
  const { user } = useAuth();

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
      filename: "myResume.pdf",
      enableLinks: true,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: {
        format: "a4",
        orientation: "portrait",
      },
    };
    html2pdf()
      .set(opt)
      .from(element)
      .save();
  };

  // console.log(userData.resumeLink);

  // download png

  const contentRef = useRef(null);
  const handlePng = async () => {
    const node = contentRef.current;

    toPng(node, {
      cacheBust: true,
      width: node.offsetWidth,
      height: node.offsetHeight,
    })
      .then((dataURL) => {
        // console.log("captureImg", dataURL);

        const link = document.createElement("a");
        link.download = "my-resume.png";
        link.href = dataURL; // Correctly setting the dataURL
        link.click();
      })
      .catch((error) => {
        // console.log("error", error);
      });
  };
  const handleJpeg = async () => {
    const node = contentRef.current;

    // Set white background for the content area
    node.style.backgroundColor = "white"; // Apply white background

    toJpeg(node, {
      quality: 0.95,
      cacheBust: true,
      width: node.offsetWidth,
      height: node.offsetHeight,
    })
      .then((dataURL) => {
        // console.log("captureImg", dataURL);

        const link = document.createElement("a");
        link.download = "my-resume.jpeg";
        link.href = dataURL; // Correctly setting the dataURL for jpeg
        link.click();
      })
      .catch((error) => {
        // console.log("error", error);
      })
      .finally(() => {
        // Remove the background color after capture to avoid affecting the UI
        node.style.backgroundColor = "";
      });
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkFeedbackSubmission = async () => {
      if (user?.email) {
        try {
          const response = await axiosPublic.get(
            `/check-feedback?email=${user.email}`
          );
          if (!response.data.hasSubmitted) {
            // Show the modal after 2 seconds
            const timer = setTimeout(() => {
              setShowModal(true);
            }, 2000);
            return () => clearTimeout(timer);
          }
        } catch (error) {
          // console.error("Error checking feedback submission:", error);
        }
      }
    };

    checkFeedbackSubmission();
  }, [user]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState("");
  const [activeComponent, setActiveComponent] = useState(null);

  // Function to set active component based on icon clicked
  const handleIconClick = (component) => {
    setActiveComponent(component);
    setActiveIcon(component);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setActiveComponent(null);
    setActiveIcon("");
  };

  return (
    <div className="min-h-screen 2xl:max-w-[2150px] mx-auto">
      <div className="w-full">
        {info && (
          <Helmet>
            <title>{`${info?.name} - PerfectProfile`}</title>
          </Helmet>
        )}
      </div>

      <div className="h-[80px] fixed w-full z-50 px-4 flex justify-between items-center bg-[#00000f]">
        <Link to="/">
          <h1 className="text-white lg:text-2xl text-xl font-extrabold font-lora">
            Perfect
            <span className="text-primary">Profile</span>
          </h1>
        </Link>

        <div className="text-white font-montserrat  flex gap-1 items-center justify-center md:mx-auto">
          <BsFillFileEarmarkCheckFill />
          <h2>Saved</h2>
        </div>
      </div>

      {/* <Container> */}
      <section className="flex justify-between min-h-screen">
        {/* Mini Sidebar */}
        <div className="w-[80px] mt-[80px] fixed lg:block hidden border-r z-50 bg-white min-h-screen">
          <div className="flex flex-col justify-center items-center gap-4 pt-10">
            <div
              onClick={() => handleIconClick("template")}
              className={`text-sm cursor-pointer my-2 flex flex-col items-center font-lora text-center ${
                activeIcon === "template"
                  ? "text-secondary"
                  : "text-black hover:text-secondary"
              }`}
            >
              <FaRegFileAlt className="text-3xl" />
              Explore Templates
            </div>
            <div
              onClick={() => handleIconClick("designs")}
              className={`text-sm cursor-pointer my-2 flex flex-col items-center font-lora text-center ${
                activeIcon === "designs"
                  ? "text-secondary"
                  : "text-black hover:text-secondary"
              }`}
            >
              <RiCustomerServiceLine className="text-3xl" />
              Resume Guidance
            </div>
            <div
              onClick={() => handleIconClick("pricings")}
              className={`text-sm cursor-pointer my-2 flex flex-col items-center font-lora text-center ${
                activeIcon === "pricings"
                  ? "text-secondary"
                  : "text-black hover:text-secondary"
              }`}
            >
              <LiaCrownSolid className="text-3xl" />
              Upgrade Premium
            </div>
          </div>
        </div>

        {/* Drawer */}
        <div
          // className={`fixed bg-white lg:block hidden shadow-lg drop-shadow z-10 transform transition-all duration-1000 ease-in-out ${
          //   activeComponent
          //     ? "translate-x-0 mt-[80px] min-h-screen w-[350px] ml-[50px]"
          //     : "-translate-x-full mt-[80px] min-h-screen -ml-[50px] w-0"
          // }`}
          className={`fixed top-0 left-0 bg-gray-50 shadow-lg z-10 transition-transform duration-1000 ease-in-out overflow-y-auto ${
            activeComponent
              ? "translate-x-0 mt-[80px] min-h-screen w-[350px] ml-[80px]"
              : "-translate-x-full mt-[80px] overflow-hidden min-h-screen -ml-[80px] w-0"
          }`}
        >
          <div className="flex justify-end border-b bg-white">
            <button
              onClick={closeDrawer}
              className={`transform transition-transform duration-1000 ease-in-out text-right flex justify-end px-4 py-3`}
            >
              <FaTimes className="text-gray-800 text-2xl cursor-pointer" />
            </button>
          </div>
          <div className="xl:p-4 lg:pt-4 overflow-y-auto max-h-[calc(100vh-0px)]">
            {/* <h3 className="font-semibold text-lg">This is drawer</h3> */}
            {activeComponent === "template" && <Templats />}
            {activeComponent === "pricings" && <Pricings />}
            {activeComponent === "designs" && <Designs />}
          </div>
        </div>

        {/* <div className="border-2">
          <div className="" ref={contentRef} id="element">
            {renderTemplate(info?.templateItem)}
          </div>
        </div> */}
        <div
          className={`flex flex-col-reverse w-full lg:justify-between mt-[80px]  transform transition-all duration-1000 ease-in-out ${
            activeComponent
              ? "lg:flex-col-reverse xl:flex-row lg:w-[594px] xl:w-[930px] 2xl:w-full custom:w-[1080px] lg:ml-[430px]"
              : "lg:ml-[80px] lg:w-[944px] xl:w-[1280px] custom:w-[1456px] custom:ml-[80px] 2xl:w-full lg:flex-row"
          }`}
        >
          {/* Template section */}
          <div
            className={`transform transition-all duration-1000 ease-in-out  ${
              activeComponent
                ? " lg:w-full xl:w-2/3 2xl:w-3/4"
                : "lg:w-3/4 xl:w-2/3 2xl:w-3/4"
            }`}
          >
            <div
              className={`w-fit border lg:block hidden  border-secondary ${
                activeComponent
                  ? " 2xl:ml-44 2xl:!-mt-[7px] lg:-mt-36 custom:ml-12 lg:-ml-24 xl:-mt-[100px] 2xl:scale-[0.9] lg:scale-[0.6]  xl:scale-[0.7]"
                  : "lg:scale-[0.6] xl:scale-[0.7] 2xl:scale-[0.9] 2xl:ml-[510px] 2xl:-mt-[7px] xl:ml-36 xl:-mt-24 lg:ml-16 lg:-mt-40 custom:ml-80"
              }`}
            >
              <div ref={contentRef} id="element" className={``}>
                {renderTemplate(info?.templateItem)}
              </div>
            </div>

            <div className="my-12 mx-auto w-[500px] border border-secondary hidden md:block lg:hidden overflow-x-auto">
              <div
                className="w-full h-full"
                style={{
                  transform: "scale(0.63)",
                  transformOrigin: "top left",
                  height: "560px",
                }}
              >
                {renderTemplate(info?.templateItem)}
              </div>
            </div>

            <div className="my-6 mx-auto w-[303px] overflow-y-auto border border-secondary block md:hidden">
              <div
                className="w-full h-full"
                style={{
                  transform: "scale(0.38)",
                  transformOrigin: "top left",
                  height: "380px",
                }}
              >
                {renderTemplate(info?.templateItem)}
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div
            className={` ${
              activeComponent
                ? "lg:w-full xl:w-1/3 2xl:w-1/4"
                : "lg:w-1/3 xl:w-1/3 2xl:w-1/4"
            }`}
          >
            <div
              className={`flex flex-col md:flex-row md:gap-2 md:py-8 pt-8 gap-4  items-center justify-center ${
                activeComponent
                  ? "lg:w-full xl:w-full lg:flex-col lg:items-center xl:items-center lg:py-12 xl:py-12"
                  : "lg:flex-col lg:items-center xl:items-center  lg:py-10"
              }`}
            >
              {/* <div className="lg:w-2/12 w-full flex flex-col lg:items-start items-center px-7 pt-10 gap-4"> */}
              <div className="relative">
                <Menu as="div" className="relative inline-block text-left ">
                  <Menu.Button className="btn btn-ghost btn-circle avatar text-black">
                    <button
                      // onClick={handlePdf}
                      // onClick={generatePDF}
                      className="w-44 group justify-center md:text-base text-sm px-8 border font-montserrat rounded-full text-center hover:bg-secondary hover:text-white border-secondary transition duration-300 text-secondary flex items-center gap-2"
                    >
                      <FaFileExport className="text-secondary group-hover:text-white" />{" "}
                      Download
                    </button>
                  </Menu.Button>

                  <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right p-[2px] bg-gradient-to-r from-[#00FFB2] via-[#00ffff] to-[#006AFF] rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:w-44">
                    <div className="bg-white rounded-xl p-5">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handlePdf}
                            className={`${
                              active
                                ? " font-semibold bg-white "
                                : "font-semibold"
                            } group flex w-full md:text-base text-sm items-center gap-2 border-b py-1.5 text-black`}
                          >
                            <GrDocumentText className="text-red-600" /> PDF
                            Standard
                          </button>
                        )}
                      </Menu.Item>
                      {/* PNG */}
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handlePng}
                            className={` ${
                              active
                                ? " font-semibold bg-white "
                                : "font-semibold"
                            } group flex w-full md:text-base text-sm items-center gap-2 border-b py-1.5 text-black`}
                          >
                            <PiFilePng className="text-red-600" /> PNG
                          </button>
                        )}
                      </Menu.Item>
                      {/* JPEG */}
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleJpeg}
                            className={`${
                              active
                                ? " font-semibold bg-white "
                                : "font-semibold"
                            } group flex w-full md:text-base text-sm items-center gap-2  py-1.5 text-black`}
                          >
                            <GrDocumentText className="text-red-600" /> JPG
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Menu>
              </div>

              <button
                onClick={() => setShareLinkCopy(true)}
                className="w-44 justify-center md:text-base text-sm px-8 border font-montserrat rounded-full text-center hover:bg-secondary hover:text-white transition duration-300 border-secondary group text-secondary flex items-center gap-2"
              >
                <FaShare className="text-secondary group-hover:text-white " />{" "}
                Share
              </button>
              <ShareLinkCopyModal
                isOpen={shareLinkCopy}
                closeModal={closeModal}
                copyToClipboard={copyToClipboard}
                copied={copied}
                shareLink={userData?.resumeLink}
              />

              {/* <button className="w-44 justify-center md:text-base text-sm px-8 border font-montserrat rounded-full text-center border-secondary text-secondary flex items-center gap-2 group hover:bg-secondary hover:text-white transition duration-300">
                <FaEnvelope className="text-secondary group-hover:text-white " />{" "}
                Email
              </button> */}

              <Link to={`/my-resume`}>
                <button className="w-44 px-5 py-1 rounded-full text-center bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-sm md:text-xl font-montserrat  shadow-lg font-bold text-white">
                  Finish
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* </Container> */}
      {showModal && (
        <ReviewModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        ></ReviewModal>
      )}
    </div>
  );
};

export default FinalResume;
