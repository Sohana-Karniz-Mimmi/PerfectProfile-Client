import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";
import { FaEnvelope } from "react-icons/fa";
import { FaFileExport, FaShare } from "react-icons/fa6";
import ShareLinkCopyModal from "./ShareLinkCopyModal";
import { Menu } from "@headlessui/react";
import { GrDocumentText } from "react-icons/gr";
import { toJpeg, toPng } from "html-to-image";
import { px } from "framer-motion";
import { PiFilePng } from "react-icons/pi";
import { SiJpeg } from "react-icons/si";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";

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
      jsPDF: { format: "a4", orientation: "portrait" },
    };
    html2pdf()
      .set(opt)
      .from(element)
      .save();
  };

  console.log(userData.resumeLink);

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
        console.log("captureImg", dataURL);

        const link = document.createElement("a");
        link.download = "my-resume.png";
        link.href = dataURL; // Correctly setting the dataURL
        link.click();
      })
      .catch((error) => {
        console.log("error", error);
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
        console.log("captureImg", dataURL);

        const link = document.createElement("a");
        link.download = "my-resume.jpeg";
        link.href = dataURL; // Correctly setting the dataURL for jpeg
        link.click();
      })
      .catch((error) => {
        console.log("error", error);
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
          console.error("Error checking feedback submission:", error);
        }
      }
    };

    checkFeedbackSubmission();
  }, [user]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (

    <>
      {info && (
        <Helmet>
          <title>{`${info?.name} - PerfectProfile`}</title>
        </Helmet>
      )}

      <div className="h-screen">
        <div className="py-6 px-4 flex justify-between items-center bg-[#00000f]">
          <Link to="/">
            <h1 className="text-white lg:text-2xl text-xl font-extrabold font-lora">
              Perfect<span className="text-primary">Profile</span>
            </h1>
          </Link>

          <div className="text-white flex gap-2 items-center justify-center md:mx-auto">
            <BsFillFileEarmarkCheckFill />
            <h2>Saved</h2>
          </div>
        </div>

        <Container>
          <section className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center py-8">
            <div className="md:w-2/12 w-full"></div>

            {/* <div className="border-2">
          <div className="" ref={contentRef} id="element">
            {renderTemplate(info?.templateItem)}
          </div>
        </div> */}

            <div>
              <div className="my-9 mx-auto w-fit border border-secondary hidden lg:block">
                <div ref={contentRef} id="element">
                  {renderTemplate(info?.templateItem)}
                </div>
              </div>

              <div className="my-12 mx-auto w-[500px] border border-secondary hidden md:block lg:hidden overflow-hidden">
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

              <div className="my-6 mx-auto w-[303px] overflow-hidden border border-secondary block md:hidden">
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

            {/* Button */}
            <div className="lg:w-2/12 flex flex-col lg:flex-col md:flex-row lg:items-start items-center px-7 lg:pt-10 pt-0 gap-4 lg:justify-start justify-center">
              {/* <div className="lg:w-2/12 w-full flex flex-col lg:items-start items-center px-7 pt-10 gap-4"> */}
              <div className="relative text-right">
                <Menu as="div" className="relative inline-block text-left ">
                  <Menu.Button className="btn btn-ghost btn-circle avatar text-black">
                    <button
                      // onClick={handlePdf}
                      // onClick={generatePDF}
                      className="w-44 group justify-center md:text-base text-sm px-8 border font-montserrat rounded-full text-center hover:bg-secondary hover:text-white border-secondary transition duration-300 text-secondary flex items-center gap-2"
                    >
                      <FaFileExport className="text-secondary group-hover:text-white" /> Download
                    </button>
                  </Menu.Button>

                  <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right p-[2px] bg-gradient-to-r from-[#00FFB2] via-[#00ffff] to-[#006AFF] rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:w-44">
                    <div className="bg-white rounded-xl p-5">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handlePdf}
                            className={`${active ? " font-semibold bg-white " : "font-semibold"
                              } group flex w-full md:text-base text-sm items-center gap-2 border-b py-1.5 text-black`}
                          >
                            <GrDocumentText className="text-red-600" /> PDF Standard
                          </button>
                        )}
                      </Menu.Item>
                      {/* PNG */}
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handlePng}
                            className={` ${active ? " font-semibold bg-white " : "font-semibold"
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
                            className={`${active ? " font-semibold bg-white " : "font-semibold"
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
                <FaShare className="text-secondary group-hover:text-white " /> Share
              </button>
              <ShareLinkCopyModal
                isOpen={shareLinkCopy}
                closeModal={closeModal}
                copyToClipboard={copyToClipboard}
                copied={copied}
                shareLink={userData?.resumeLink}
              />

              <button className="w-44 justify-center md:text-base text-sm px-8 border font-montserrat rounded-full text-center border-secondary text-secondary flex items-center gap-2 group hover:bg-secondary hover:text-white transition duration-300">
                <FaEnvelope className="text-secondary group-hover:text-white " /> Email
              </button>

              <Link to={`/`}>
                <button className="w-44 px-5 py-1 rounded-full text-center bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-sm md:text-xl font-montserrat  shadow-lg font-bold text-white">
                  Finish
                </button>
              </Link>
            </div>
          </section>
        </Container>
        {showModal && (
          <ReviewModal showModal={showModal} handleCloseModal={handleCloseModal}>
          </ReviewModal>
        )}
      </div>
    </>
  );
};

export default FinalResume;
