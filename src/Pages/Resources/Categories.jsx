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
      <h1 className="text-4xl font-bold  container mx-auto">Categories</h1>

      {/* Swiper Container */}
      <div className="relative flex items-center justify-center mt-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Navigation, Pagination]}
          className="mySwiper"
        >
          {cat.map((category, index) => (
            <SwiperSlide
              key={index}
              className="bg-[#e4e4e4] rounded-lg shadow-lg p-6 max-w-xl"
            >
              <h2 className="text-3xl font-semibold text-center mt-4">
                {category?.name}
              </h2>
              <p className="text-center text-gray-600 mt-2">
                {category?.description}
              </p>
              <img
                className=" mx-auto bg-[#e4e4e4]"
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
