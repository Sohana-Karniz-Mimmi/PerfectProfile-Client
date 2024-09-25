// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// import Tem1 from '../../assets/1.png';
// import Tem2 from '../../assets/2.png';
// import Tem3 from '../../assets/3.png';
// import Tem4 from '../../assets/4.png';
// import Tem5 from '../../assets/5.png';
// import Tem6 from '../../assets/6.png';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         loop={true}
//         spaceBetween={30}
//         //
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           // When the window width is >= 320px (small devices)
//           320: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//           },
//           // When the window width is >= 1024px (large devices)
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 30,
//           },
//         }}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide><img src={Tem1} alt="" /></SwiperSlide>
//         <SwiperSlide><img src={Tem2} alt="" /></SwiperSlide>
//         <SwiperSlide><img src={Tem3} alt="" /></SwiperSlide>
//         <SwiperSlide><img src={Tem4} alt="" /></SwiperSlide>
//         <SwiperSlide><img src={Tem5} alt="" /></SwiperSlide>
//         <SwiperSlide><img src={Tem6} alt="" /></SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './styles.css';

// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import React Icons

// import Tem1 from '../../assets/1.png';
// import Tem2 from '../../assets/2.png';
// import Tem3 from '../../assets/3.png';
// import Tem4 from '../../assets/4.png';
// import Tem5 from '../../assets/5.png';
// import Tem6 from '../../assets/6.png';

// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// export default function App() {
//   // Use refs for custom navigation buttons
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <>
//       <Swiper
//         loop={true}
//         spaceBetween={30}
//         navigation={{
//           prevEl: prevRef.current, // Custom previous button
//           nextEl: nextRef.current, // Custom next button
//         }}
//         onBeforeInit={(swiper) => {
//           // Assign the custom navigation elements to swiper
//           swiper.params.navigation.prevEl = prevRef.current;
//           swiper.params.navigation.nextEl = nextRef.current;
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           320: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 30,
//           },
//         }}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide><img src={Tem1} alt="Template 1" /></SwiperSlide>
//         <SwiperSlide><img src={Tem2} alt="Template 2" /></SwiperSlide>
//         <SwiperSlide><img src={Tem3} alt="Template 3" /></SwiperSlide>
//         <SwiperSlide><img src={Tem4} alt="Template 4" /></SwiperSlide>
//         <SwiperSlide><img src={Tem5} alt="Template 5" /></SwiperSlide>
//         <SwiperSlide><img src={Tem6} alt="Template 6" /></SwiperSlide>
//       </Swiper>

//       {/* Custom button icons using React Icons */}
//       <style jsx>{`
//         .swiper-button-prev,
//         .swiper-button-next {
//           @apply bg-blue-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center;
//           width: 40px; /* Set custom button width */
//           height: 40px; /* Set custom button height */
//           z-index: 10; /* Ensure buttons are above the Swiper content */
//         }

//         .swiper-button-prev {
//           @apply left-4; /* Position on the left */
//         }

//         .swiper-button-next {
//           @apply right-4; /* Position on the right */
//         }

//         /* Remove default icons */
//         .swiper-button-prev::after,
//         .swiper-button-next::after {
//           display: none;
//         }
//       `}</style>

//       {/* Replace with React Icons, set refs for custom buttons */}
//       <div className="swiper-button-prev bg-secondary p-3 rounded-full" ref={prevRef}>
//         <FaArrowLeft className="text-xl text-white" />
//       </div>

//       <div className="swiper-button-next bg-primary p-3 rounded-full" ref={nextRef}>
//         <FaArrowRight className="text-xl text-white" />
//       </div>
//     </>
//   );
// }

// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './styles.css';

// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// import Tem1 from '../../assets/1.png';
// import Tem2 from '../../assets/2.png';
// import Tem3 from '../../assets/3.png';
// import Tem4 from '../../assets/4.png';
// import Tem5 from '../../assets/5.png';
// import Tem6 from '../../assets/6.png';

// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// export default function App() {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <>
//       <Swiper
//         loop={true}
//         spaceBetween={30}
//         navigation={{
//           prevEl: prevRef.current,
//           nextEl: nextRef.current,
//         }}
//         onBeforeInit={(swiper) => {
//           swiper.params.navigation.prevEl = prevRef.current;
//           swiper.params.navigation.nextEl = nextRef.current;
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           320: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 30,
//           },
//         }}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide><img src={Tem1} alt="Template 1" /></SwiperSlide>
//         <SwiperSlide><img src={Tem2} alt="Template 2" /></SwiperSlide>
//         <SwiperSlide><img src={Tem3} alt="Template 3" /></SwiperSlide>
//         <SwiperSlide><img src={Tem4} alt="Template 4" /></SwiperSlide>
//         <SwiperSlide><img src={Tem5} alt="Template 5" /></SwiperSlide>
//         <SwiperSlide><img src={Tem6} alt="Template 6" /></SwiperSlide>
//       </Swiper>

//       {/* Custom button icons */}
//       <div className="swiper-button-prev" ref={prevRef}>
//         <FaArrowLeft className="text-xl text-white" />
//       </div>

//       <div className="swiper-button-next" ref={nextRef}>
//         <FaArrowRight className="text-xl text-white" />
//       </div>
//     </>
//   );
// }

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
    className="absolute z-10 left-24 top-1/2 transform -translate-y-1/2 bg-secondary rounded-full p-2 shadow-md"
    onClick={props.onClick}
  >
    {/* &#10094; */}
    <FaArrowLeft className="text-xl text-white"></FaArrowLeft>
  </button>
);

const CustomNextButton = (props) => (
  <button
    className="absolute z-10 right-24 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-2 shadow-md"
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
        pagination={{
          clickable: true,
        }}
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
