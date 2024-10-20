import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";

const Categories = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCat(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="relative">
      <div className="text-center my-6">
        <h1 className=" container mx-auto mt-12 px-4 mb-2 text-3xl md:text-4xl my-5 font-bold">
          Categories
        </h1>
        <p className="font-montserrat md:text-[17px] text-sm text-gray-800 font-light ">
          Choosing the best font for your resume can be the difference between
          standing out to <br /> recruiters and being overlooked among a sea of
          applicants.
        </p>
      </div>

      {/* Swiper Container */}
      <div className="relative flex items-center justify-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {cat.map((category, index) => (
            <SwiperSlide
              key={index}
              className="bg-[#d1fae5] rounded-lg shadow-lg p-6 max-w-xl"
            >
              <h2 className="text-3xl font-semibold text-center mt-4 text-primary">
                {category?.name}
              </h2>
              <p className="text-center text-gray-600 mt-2">
                {category?.description}
              </p>
              <img
                className="mx-auto bg-[#d1fae5]"
                src={category?.img}
                alt={category?.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
