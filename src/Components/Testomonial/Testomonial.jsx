import Container from "../../Shared/Container";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const Testimonial = () => {
  const swiperRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <Container>
      <div className="flex flex-col justify-center items-center pt-24 space-y-4">
        <h2 className="lg:text-5xl text-center md:text-4xl text-3xl font-bold font-lora text-black">
          Your Success, Our Inspiration
        </h2>
        <p className="lg:w-3/4 w-full text-center md:text-lg text-base font-montserrat">Every success story fuels our passion. We’re inspired by the achievements of our users and proud to be a part of their journey.</p>
      </div>

      <div className="md:flex justify-between items-center md:mt-16 mt-8">
        <div className="md:w-[470px] md:h-[398px]">
          <img src="https://cvland.netlify.app/img/core-img/test.png" alt="" />
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 8000,
          }}
          loop={true}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          onInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper md:w-[640px] md:h-[310px] overflow-hidden"
        >
          <SwiperSlide className="flex justify-center items-center border-2 border-gray-200 relative overflow-hidden px-[20px] py-[30px] bg-white">
            <div className="flex gap-1 text-sm text-[#F3961B]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="font-medium text-[#888] mt-5 mb-6 text-sm leading-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              hic molestias aliquid possimus autem! Inventore ut ipsa aut,
              laborum ea molestiae odit sint consequuntur, sequi voluptatum
              saepe dolore et libero. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Minus hic molestias aliquid possimus autem!
              Inventore ut ipsa aut.
            </p>

            <div className="flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <div className="avatar">
                  <div className="w-[70px] h-[70px] rounded">
                    <img src="https://cvland.netlify.app/img/test-img/1.jpg" />
                  </div>
                </div>
                <div className="">
                  <h2 className="text-xl font-bold mb-1 text-[#13287e]">
                    Sunny Khan
                  </h2>
                  <h2 className="text-base font-semibold">
                    One Of Our Clients{" "}
                  </h2>
                </div>
              </div>
              <div
                className=" bottom-0
  right-[15px]
  p-5
  text-white
  text-[60px]
  z-0
  leading-none
  absolute
  opacity-80
  bg-primary"
              >
                <FaQuoteRight />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center border-2 border-gray-200 relative overflow-hidden px-[20px] py-[30px] bg-white">
            <div className="flex gap-1 text-sm text-[#F3961B]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="font-medium text-[#888] mt-5 mb-6 text-sm leading-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              hic molestias aliquid possimus autem! Inventore ut ipsa aut,
              laborum ea molestiae odit sint consequuntur, sequi voluptatum
              saepe dolore et libero. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Minus hic molestias aliquid possimus autem!
              Inventore ut ipsa aut.
            </p>

            <div className="flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <div className="avatar">
                  <div className="w-[70px] h-[70px] rounded">
                    <img src="https://cvland.netlify.app/img/test-img/1.jpg" />
                  </div>
                </div>
                <div className="">
                  <h2 className="text-xl font-bold mb-1 text-[#13287e]">
                    Sunny Khan
                  </h2>
                  <h2 className="text-base font-semibold">
                    One Of Our Clients{" "}
                  </h2>
                </div>
              </div>
              <div
                className=" bottom-0
  right-[15px]
  p-5
  text-white
  text-[60px]
  z-0
  leading-none
  absolute
  opacity-100
  bg-primary"
              >
                <FaQuoteRight />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center border-2 border-gray-200 relative overflow-hidden px-[20px] py-[30px] bg-white">
            <div className="flex gap-1 text-sm text-[#F3961B]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="font-medium text-[#888] mt-5 mb-6 text-sm leading-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              hic molestias aliquid possimus autem! Inventore ut ipsa aut,
              laborum ea molestiae odit sint consequuntur, sequi voluptatum
              saepe dolore et libero. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Minus hic molestias aliquid possimus autem!
              Inventore ut ipsa aut.
            </p>

            <div className="flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <div className="avatar">
                  <div className="w-[70px] h-[70px] rounded">
                    <img src="https://cvland.netlify.app/img/test-img/1.jpg" />
                  </div>
                </div>
                <div className="">
                  <h2 className="text-xl font-bold mb-1 text-[#13287e]">
                    Sunny Khan
                  </h2>
                  <h2 className="text-base font-semibold">
                    One Of Our Clients{" "}
                  </h2>
                </div>
              </div>
              <div
                className=" bottom-0
  right-[15px]
  p-5
  text-white
  text-[60px]
  z-0
  leading-none
  absolute
  opacity-100
  bg-primary"
              >
                <FaQuoteRight />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};
export default Testimonial;
