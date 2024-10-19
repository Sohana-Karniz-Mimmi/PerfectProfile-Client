import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaCrown, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useRole from "./../../Hook/useRole";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";

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
      setModalContent("To use this premium template, you need to purchase the premium package.");
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
          <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md">
              <h2 className="text-lg font-bold">{modalContent}</h2>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-black py-2 px-4 rounded mr-2"
                >
                  Close
                </button>
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
