import { Link } from "react-router-dom";
import video from "../../assets/banner.mp4";
import { Typewriter } from "react-simple-typewriter";

import img1 from "../../assets/banner/1131w-f5JNR-K5jjw.webp";
import img2 from "../../assets/banner/1131w-xkDELtpQH94.webp";
import img3 from "../../assets/banner/hero-image-desktop@2x.webp";

import { initializeApp } from "firebase/app";


const Banner = () => {
  return (
    <>
      <section className="relative bg-white">
        {/* <div className="absolute inset-0 "></div> */}

        <div className="relative mx-auto max-w-screen-xl px-4 pb-32 sm:px-6 lg:flex justify-between lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold font-lora">
              Make your professional
              <br />
              resume in
              <span className="text-primary">
                <Typewriter
                  words={[" minutes"]}
                  loop
                  cursor
                  cursorStyle="_"
                ></Typewriter>
              </span>
            </h1>

            <p className="mt-4 max-w-lg text-gray-600 sm:text-xl/relaxed font-montserrat">
              From generating bullet points to automatic formatting, our resume
              builder will help you make a professional resume quickly and
              effortlessly.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-center">
              <Link>
                <button className="py-3 px-5 rounded font-bold font-roboto text-base bg-primary text-white ">Get Started</button>
              </Link>

              <Link>
                <button className="py-3 px-5 rounded font-bold font-roboto text-base border border-primary text-primary hover:bg-primary hover:text-white ">Browse Templates</button>
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
                <img className="w-1/2" src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-1/2" src={img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="" src={img3} alt="" />
              </SwiperSlide>
            </Swiper>

            <video width="500" autoPlay muted loop>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
