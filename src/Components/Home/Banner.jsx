import { Link } from "react-router-dom";
import video from "../../assets/banner.mp4";
import { Typewriter } from "react-simple-typewriter";
import Container from "../../Shared/Container";
import "./Banner.css";
import TemplateSlider from "../TemplateSlider/TemplateSlider";

const Banner = () => {
  return (
    <>
      <section className=" bg-white">
        <Container>
          <div className="flex lg:flex-row flex-col gap-8">
            <div className="lg:w-1/2 w-full flex flex-col justify-center lg:items-start items-center border ltr:sm:text-left rtl:sm:text-right">
              <h1 className="lg:text-5xl md:text-3xl text-2xl lg:text-left text-center font-bold font-lora">
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

              <p className="mt-4 max-w-lg text-gray-600 sm:text-xl/relaxed lg:text-left text-center  font-montserrat">
                From generating bullet points to automatic formatting, our
                resume builder will help you make a professional resume quickly
                and effortlessly.
              </p>

              <div className="mt-8 flex justify-center flex-wrap lg:gap-8 gap-3 text-center">
                <Link>
                  <button className="py-3 px-5 rounded font-bold font-roboto text-base bg-primary text-white ">
                    Get Started
                  </button>
                </Link>

                <Link>
                  <button className="py-3 px-5 rounded font-bold font-roboto text-base border border-primary text-primary hover:bg-primary hover:text-white ">
                    Browse Templates
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full border">
              <video className="border-none" width="600" autoPlay muted loop>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </Container>
      </section>
      <section className="thing bg-gradient-to-r from-[#51E2C2] to-[#4BCCEF]">
        <Container>
          <div className="z-10 absolute flex flex-col justify-center items-center space-y-4">
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
        <div className="px-8">
          <TemplateSlider></TemplateSlider>
        </div>
      </section>
    </>
  );
};

export default Banner;
