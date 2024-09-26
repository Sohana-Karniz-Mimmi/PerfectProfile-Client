import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import Tem1 from "../../assets/1.png";
import Tem2 from "../../assets/2.png";
import Tem3 from "../../assets/3.png";
import Tem4 from "../../assets/4.png";
import Tem5 from "../../assets/5.png";
import Tem6 from "../../assets/6.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Custom navigation buttons
const CustomPrevButton = (props) => (
  <button
    className="prev absolute z-10 left-24 top-1/2 transform -translate-y-1/2 bg-secondary rounded-full p-2 shadow-md"
    onClick={props.onClick}
  >
    {/* &#10094; */}
    <FaArrowLeft className="text-xl text-white"></FaArrowLeft>
  </button>
);

const CustomNextButton = (props) => (
  <button
    className="next absolute z-10 right-24 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-2 shadow-md"
    onClick={props.onClick}
  >
    {/* &#10095; */}
    <FaArrowRight className="text-xl text-white"></FaArrowRight>
  </button>
);

export default function App() {
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
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Tem1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tem2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tem3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tem4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tem5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tem6} alt="" />
        </SwiperSlide>

        {/* Custom navigation buttons */}
        <CustomPrevButton />
        <CustomNextButton />
      </Swiper>
    </>
  );
}
