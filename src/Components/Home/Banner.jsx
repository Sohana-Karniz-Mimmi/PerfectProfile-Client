import { Link } from "react-router-dom";
import video from "../../assets/banner.mp4";
import { Typewriter } from "react-simple-typewriter";

import img1 from "../../assets/banner/1131w-f5JNR-K5jjw.webp";
import img2 from "../../assets/banner/1131w-xkDELtpQH94.webp";
import img3 from "../../assets/banner/hero-image-desktop@2x.webp";

import { initializeApp } from "firebase/app";

import Container from "../../Shared/Container";
import TemplateSlider from "../TemplateSlider/TemplateSlider";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className=" bg-white">
        <Container>
          <div className="flex lg:flex-row flex-col gap-1">
            <div className="lg:w-1/2 w-full flex flex-col justify-center">
              <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-2xl lg:text-left text-center font-extrabold text-black font-lora">
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

              <p className="mt-4 text-gray-600 lg:text-left text-center font-montserrat">
                From generating bullet points to automatic formatting, our
                resume builder will help you make a professional resume quickly
                and effortlessly.
              </p>

              <div className="mt-8 flex lg:flex-row flex-col lg:items-start items-center gap-6 text-center">
                <Link>
                  <button className="py-3 px-5 rounded font-bold font-montserrat text-base bg-primary hover:bg-secondary text-white ">
                    Get Started
                  </button>
                </Link>

                <Link>
                  <div className="h-[50px] border group border-primary  rounded group-hover:border-secondary hover:border-secondary">
                    <button className="py-3 px-5  font-bold !font-montserrat text-base  text-primary group-hover:bg-secondary group-hover:text-white h-0 group-hover:h-full transition-all duration-300 ease-out transform translate-y-0 ">
                      Create My Resume
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center">
              <video width="500" autoPlay muted loop>
                <source src={video} type="video/mp4"role="video" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Container>
      </section>
      {/* <section className="thing relative bg-gradient-to-r from-[#51E2C2] to-[#4BCCEF]">
        <Container>
          <div className="absolute z-10 lg:-mt-28 -mt-32  flex flex-col justify-center items-center space-y-4">
            <h1 className="lg:text-5xl text-3xl font-extrabold text-center font-lora text-white">
              Templates to win recruiters over
            </h1>
            <p className="font-montserrat text-center lg:w-3/4 w-full">
              We'll help you choose the right layout for your CV from over 40
              available templates. Each is instantly ready to use and requires
              no design skills.
            </p>
          </div>
        </Container>

        <div className="lg:mt-20 md:mt-8 mt-20 mx-8">
          <TemplateSlider></TemplateSlider>
        </div>
        <div className="flex justify-center items-center py-16">
          <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-3 px-8 rounded-full text-lg lg:text-xl font-semibold shadow-lg transform transition duration-500 hover:scale-105">
            Browse Templates
          </button>
        </div>
      </section> */}
      <section className=" bg-white">
        <div className="custom-shape-divider-bottom-1727289857">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 119"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "auto" }} // Make it responsive
          >
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#51E2C2", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#4BCCEF", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M598.97 70.72L0 0 0 120 1200 120 1200 0 598.97 70.72z"
              className="shape-fill"
              fill="url(#gradient1)" // Apply the gradient fill here
            />
          </svg>
        </div>
        {/* <div class="custom-shape-divider-bottom-1727365409">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                  offset="0%"
                  style={{ stopColor: "#51E2C2", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#4BCCEF", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>

            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              fill="url(#gradient)"
            ></path>
          </svg>
        </div> */}
      </section>
      <section className="bg-gradient-to-r from-[#51E2C2] to-[#4BCCEF]">
        <Container>
          <div className="flex flex-col justify-center items-center py-12 space-y-4">
            <h1 className="lg:text-5xl text-3xl font-extrabold text-center font-lora text-black">
              Templates to win recruiters over
            </h1>
            <p className="font-montserrat text-center lg:w-2/4 w-full">
              We'll help you choose the right layout for your CV from over 40
              available templates. Each is instantly ready to use and requires
              no design skills.
            </p>
          </div>
        </Container>

        <div className="overflow-visible relative">
          <TemplateSlider></TemplateSlider>
        </div>
        <div className="flex justify-center items-center lg:py-16 py-8">
          <button className="bg-gradient-to-r font-montserrat from-primary to-secondary hover:bg-gradient-to-l text-white py-3 px-8 rounded-full font-bold shadow-lg transform transition duration-500 hover:scale-105">
            Browse Templates
          </button>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Banner;
