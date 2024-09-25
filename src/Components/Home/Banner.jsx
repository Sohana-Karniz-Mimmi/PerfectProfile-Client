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
      <section className="lg:pb-28 pb-16 bg-white">
        <Container>
          <div className="flex lg:flex-row flex-col gap-1">
            <div className="lg:w-1/2 w-full flex flex-col justify-center border">
              <h1 className="lg:text-5xl md:text-4xl text-2xl lg:text-left text-center font-extrabold font-lora">
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
            <div className="lg:w-1/2 w-full flex items-center justify-center border">
              <video width="500" autoPlay muted loop>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Container>
      </section>
      <section className="thing pb-60 bg-gradient-to-r from-[#51E2C2] to-[#4BCCEF]">
        <Container>
          <div className="absolute z-10 -mt-24  flex flex-col justify-center items-center space-y-4">
            <h1 className="text-5xl font-bold text-center font-lora text-white">
              Templates to win recruiters over
            </h1>
            <p className="font-montserrat text-center lg:w-3/4 w-full">
              We'll help you choose the right layout for your CV from over 40
              available templates. Each is instantly ready to use and requires
              no design skills.
            </p>
          </div>
        </Container>
        <div className="mt-20 px-8">
          <TemplateSlider></TemplateSlider>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Banner;
