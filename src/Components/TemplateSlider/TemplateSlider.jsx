import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import Tem1 from "../../assets/Images/ResumeTemplate/1.png";
// import Tem2 from "../../assets/2.png";
// import Tem3 from "../../assets/3.png";
// import Tem4 from "../../assets/4.png";
// import Tem5 from "../../assets/5.png";
// import Tem6 from "../../assets/6.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";

// Custom navigation buttons
const CustomPrevButton = (props) => (

  <button
    className="prev absolute z-10 lg:left-24 left-4 top-1/2 transform -translate-y-1/2 bg-secondary rounded-full p-2 shadow-md"
    onClick={props.onClick}
  >
    {/* &#10094; */}
    <FaArrowLeft className="text-xl text-white"></FaArrowLeft>
  </button>
);

const CustomNextButton = (props) => (
  <button
    className="next absolute z-10 lg:right-24 right-4 top-1/2 transform -translate-y-1/2 bg-secondary rounded-full p-2 shadow-md"
    onClick={props.onClick}
  >
    {/* &#10095; */}
    <FaArrowRight className="text-xl text-white"></FaArrowRight>
  </button>
);

export default function App() {
  const axiosPublic = useAxiosPublic();
  const [predefinedTemplate, setPredefinedTemplate] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic(
        `/predefined-templates`)
      setPredefinedTemplate(data)
    }
    getData()
  }, [])

  // console.log(predefinedTemplate);


  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {
          predefinedTemplate?.map(template => <SwiperSlide>
            <div className="relative group">
              <div className="absolute h-full w-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-45 transition-opacity duration-300">
                <Link to={`resume/edit/${template.templateItem}`}>
                  <button className="bg-primary text-white font-montserrat md:font-bold font-semibold rounded py-2 px-3 md:py-3 md:px-6 text-[14px] md:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Use Template
                  </button>
                </Link>
              </div>
              <img src={template.image} alt="" />
            </div>
          </SwiperSlide>)
        }


        {/* <SwiperSlide>
          <div className="relative group">
            <div className="absolute h-full w-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-45 transition-opacity duration-300">
              <Link to={'resume/edit'}>
                <button className="bg-primary text-white font-montserrat md:font-bold font-semibold rounded py-2 px-3 md:py-3 md:px-6 text-[14px] md:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Use Template
                </button>
              </Link>
            </div>
            <img src={Tem1} alt="" />
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className="relative group">
            <div className="absolute h-full w-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-45 transition-opacity duration-300">
            <Link to={'resume/edit'}>
              <button className="bg-primary text-white font-montserrat md:font-bold font-semibold rounded py-2 px-3 md:py-3 md:px-6 text-[14px] md:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Use Template
              </button>
              </Link>
            </div>
            <img src={Tem2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className="absolute h-full w-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-45 transition-opacity duration-300">
            <Link to={'resume/edit'}>
              <button className="bg-primary text-white font-montserrat md:font-bold font-semibold rounded py-2 px-3 md:py-3 md:px-6 text-[14px] md:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Use Template
              </button>
              </Link>
            </div>
            <img src={Tem3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className="absolute h-full w-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-45 transition-opacity duration-300">
            <Link to={'resume/edit'}>
              <button className="bg-primary text-white font-montserrat md:font-bold font-semibold rounded py-2 px-3 md:py-3 md:px-6 text-[14px] md:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Use Template
              </button>
              </Link>
            </div>
            <img src={Tem4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className="absolute h-full w-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-45 transition-opacity duration-300">
            <Link to={'resume/edit'}>
              <button className="bg-primary text-white font-montserrat md:font-bold font-semibold rounded py-2 px-3 md:py-3 md:px-6 text-[14px] md:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Use Template
              </button>
              </Link>
            </div>
            <img src={Tem5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className="absolute h-full w-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-45 transition-opacity duration-300">
            <Link to={'resume/edit'}>
              <button className="bg-primary text-white font-montserrat md:font-bold font-semibold rounded py-2 px-3 md:py-3 md:px-6 text-[14px] md:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Use Template
              </button>
              </Link>
            </div>
            <img src={Tem6} alt="" />
          </div>
        </SwiperSlide> */}

        {/* Custom navigation buttons */}
        <CustomPrevButton />
        <CustomNextButton />
      </Swiper>
    </>
  );
}
