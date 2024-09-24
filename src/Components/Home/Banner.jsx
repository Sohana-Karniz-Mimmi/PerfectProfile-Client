import { Link } from "react-router-dom";
import video from "../../assets/banner.mp4";
import { Typewriter } from "react-simple-typewriter";

import img1 from "../../assets/banner/1131w-f5JNR-K5jjw.webp";
import img2 from "../../assets/banner/1131w-xkDELtpQH94.webp";
import img3 from "../../assets/banner/hero-image-desktop@2x.webp";

import { initializeApp } from "firebase/app";
import Container from "../../Shared/Container";
import TemplateSlider from '../TemplateSlider/TemplateSlider'
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="relative bg-white">
        {/* <div className="absolute inset-0 "></div> */}

        <div className="relative mx-auto max-w-screen-xl px-4 pb-14  sm:px-6 lg:flex justify-between lg:items-center lg:px-8">
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
                <button className="py-3 px-5 rounded font-bold font-roboto text-base bg-primary hover:bg-secondary text-white ">
                  Get Started
                </button>
              </Link>

              <Link>
                <div className="h-[50px] border group border-primary rounded group-hover:border-secondary">
                  <button className="py-3 px-5  font-bold font-roboto text-base  text-primary group-hover:bg-secondary group-hover:text-white h-0 group-hover:h-full transition-all duration-300 ease-out transform translate-y-0 ">
                    Browse Templates
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="md:w-[500px]">
            <video width="500" autoPlay muted loop>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>
        </div>
      </section>
      <section className="thing pb-60 bg-gradient-to-r from-[#51E2C2] to-[#4BCCEF]">
        <Container>
          <div className="absolute z-10 -mt-24  flex flex-col justify-center items-center space-y-4">
            <h1 className="text-5xl font-bold text-center font-lora text-white">
              Templates to win recruiters over
            </h1>
            <p className="font-montserrat text-center lg:w-3/4 w-full">We'll help you choose the right layout for your CV from over 40 available templates. Each is instantly ready to use and requires no design skills.</p>
          </div>
        </Container>
        <div className="mt-20 px-8"><TemplateSlider></TemplateSlider></div>
      </section>
      <section>
        
      </section>
    </>
  );
};

export default Banner;