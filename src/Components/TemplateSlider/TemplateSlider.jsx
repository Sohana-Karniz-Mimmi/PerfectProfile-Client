// import React, { useRef, useState } from 'react';
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
// import {Autoplay, Pagination, Navigation } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={5}
//         spaceBetween={30}
//         loop={true}
//         autoplay={{
//             delay: 1000,
//             disableOnInteraction: false,
//           }}
//         pagination={{
//           clickable: true,
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
//         {/* <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide> */}
//       </Swiper>
//     </>
//   );
// }

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import Tem1 from '../../assets/1.png';
import Tem2 from '../../assets/2.png';
import Tem3 from '../../assets/3.png';
import Tem4 from '../../assets/4.png';
import Tem5 from '../../assets/5.png';
import Tem6 from '../../assets/6.png';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // When the window width is >= 320px (small devices)
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // When the window width is >= 1024px (large devices)
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Tem1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Tem2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Tem3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Tem4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Tem5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Tem6} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
