import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useRole from "./../../Hook/useRole";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { TiTimes } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa";
import { LuShare } from "react-icons/lu";
import { MdOutlineColorLens } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaCrown } from "react-icons/fa";


// Custom navigation buttons
const CustomPrevButton = (props) => (
  <button
    className="prev absolute z-10 lg:left-12 left-4 top-1/2 transform -translate-y-1/2 bg-secondary rounded-full p-2 shadow-md"
    onClick={props.onClick}
  >
    {/* &#10094; */}
    <FaArrowLeft className="text-xl text-white"></FaArrowLeft>
  </button>
);

const CustomNextButton = (props) => (
  <button
    className="next absolute z-10 lg:right-12 right-4 top-1/2 transform -translate-y-1/2 bg-secondary rounded-full p-2 shadow-md"
    onClick={props.onClick}
  >
    {/* &#10095; */}
    <FaArrowRight className="text-xl text-white"></FaArrowRight>
  </button>
);

export default function App() {
  const [role] = useRole();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [predefinedTemplate, setPredefinedTemplate] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic(`/predefined-templates`);
      setPredefinedTemplate(data);
    };
    getData();
  }, []);


  const handleTemplateClick = (template) => {
    if (!user) {
      toast.error("You have to login first");
      document.getElementById("my_modal_3").showModal();
      return;
    }
    if (template.package === "premium" && role.productName === "premium") {
      window.location.href = `/resume/edit/${template.templateItem}`;
      return;
    }
    if (template.package === "premium" && role.productName === "standard") {
      window.location.href = `/resume/edit/${template.templateItem}`;
      return;
    }

    if (template.package === "premium") {
      setModalContent(template?.image);
      setShowModal(true);
      return;
    }

    if (template.package === "free") {
      window.location.href = `/resume/edit/${template.templateItem}`;
      return;
    }

    setModalContent("To use this template, please check your package.");
    setShowModal(true);
  };


  const handleFavorite = () => {
    toast.success("Added to the favorite");
  }
  

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1441: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {predefinedTemplate?.map((template) => (
          <SwiperSlide key={template._id} className="relative !overflow-visible">
            <div className="relative group !overflow-visible">
              <div
                className={`absolute top-1 left-1 text-white font-lora font-bold rounded-full px-4 py-1 z-[500] flex items-center ${template.package === "premium" ? "bg-secondary" : "bg-primary"
                  }`}
              >
                {template.package === "premium" ? (
                  <>
                    <FaCrown className="mr-1" /> Premium
                  </>
                ) : (
                  <>
                    <FaStar className="mr-1" /> Free
                  </>
                )}
              </div>

              <div className="absolute h-full w-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-45 transition-opacity duration-300">
                <button
                  onClick={() => handleTemplateClick(template)}
                  className="bg-primary text-white font-montserrat md:font-bold font-semibold rounded py-2 px-3 md:py-3 md:px-6 text-[14px] md:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Use Template
                </button>
              </div>

              <img className="w-full size" src={template.image} alt="" />
            </div>
          </SwiperSlide>
        ))}

        {showModal && (
          <div className="fixed z-50 inset-0 flex justify-center bg-black bg-opacity-50 mt-28 mb-5">
            <div className="bg-white p-6 rounded-md flex md:flex-row flex-col items-center max-w-4xl mx-auto relative">
              {/* Close Icon */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <TiTimes className="text-xl" />
              </button>

              {/* Image Section */}
              <div className="md:w-1/2 w-full p-4">
                <img
                  src={modalContent}
                  alt="Premium Template"
                  className="w-[300px] h-[400px] rounded-md shadow-md"
                />
              </div>

              {/* Text Section */}
              <div className="md:w-1/2 w-full p-4 space-y-4">
                {/* Premium Icon and Heading */}
                <div className="flex items-center gap-1 px-2 bg-black bg-opacity-60 rounded-full w-fit">
                  <FaCrown className="text-yellow-500 text-base" />
                  <span className="text-sm text-white">Pro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-2xl font-bold">Professional Modern Resume</h2>
                </div>

                {/* Description */}
                <span className="block text-lg font-medium text-gray-600">
                  Premium templates designed to showcase your skills with a modern and professional look.
                </span>

                {/* Use Template Button */}
                <div className="flex items-center w-full gap-2">
                  <Link to="/pricing">
                    <button className="bg-primary text-white py-2 px-4 rounded-lg w-[300px] font-semibold hover:bg-primary-dark transition flex justify-center items-center gap-2">
                      <FaCrown className="text-xl" />
                      Use This Template
                    </button>
                  </Link>

                  <button
                   onClick={handleFavorite}
                    className=" hover:text-primary border bg-white p-2 rounded-xl">
                    <FaRegStar size={20} />
                  </button>
                  
                  
                  <button
                    className=" hover:text-primary border bg-white p-2 rounded-xl">
                    <HiDotsHorizontal size={20} />
                  </button>
                  <div></div>
                </div>

                {/* Feature 1 */}
                <div className="flex items-center space-x-2 text-gray-700">
                  <MdOutlineColorLens className="text-xl text-black" />
                  <p>100% fully customizable</p>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center space-x-2 text-gray-700">
                  <FiEdit className="text-xl text-black" />
                  <p>Edit and download on the go</p>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center space-x-2 text-gray-700">
                  <LuShare className="text-xl text-black" />
                  <p>Share and publish anywhere</p>
                </div>
              </div>
            </div>
          </div>
        )}


        <CustomPrevButton />
        <CustomNextButton />
      </Swiper>
    </>
  );
}
