import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <>
      <section className="relative ">
        <div className="absolute inset-0 "></div>

        <div className="relative mx-auto max-w-screen-xl px-4 pb-32 sm:px-6 lg:flex justify-between lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold  sm:text-5xl">
              Make your <br /> professional resume
              <strong className="block font-extrabold text-primary">
                <h1
                  style={{
                    paddingTop: "",
                    margin: "auto 0",
                    fontWeight: "normal",
                  }}
                >
                  <span style={{ color: "", fontWeight: "bold" }}>
                    <Typewriter
                      words={["in  minutes"]}
                      loop={100}
                      cursor
                      cursorStyle=" | "
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={2000}
                      // onLoopDone={handleDone}
                      // onType={handleType}
                    />
                  </span>
                </h1>
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-gray-600 sm:text-xl/relaxed">
              From generating bullet points to automatic formatting, our resume
              builder will help you make a professional resume quickly and
              effortlessly.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to={`#`}
                href="#"
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-blue-500 sm:w-auto hover:scale-110"
              >
                Get Started
              </Link>

              <Link
                to={"/template"}
                className="block w-full rounded bg-secondary hover:bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:text-white focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
              >
                Browse Templates
              </Link>
            </div>
          </div>
          <div className="md:w-[600px]">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              //   rewind={true}
              pagination={true}
              autoplay={{
                delay: 4000,
              }}
              //   speed={20}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className=""
                  src="https://cdn-images.zety.com/images/zety/landings/builder/hero-image-desktop@3x.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className=""
                  src="https://cdn-images.zety.com/images/zety/landings/builder/hero-image-desktop@3x.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className=""
                  src="https://cdn-images.zety.com/images/zety/landings/builder/hero-image-desktop@3x.webp"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
