import { Link } from "react-router-dom";
import video from "../../assets/banner.mp4";
import { Typewriter } from "react-simple-typewriter";
import { initializeApp } from "firebase/app";
import Container from "../../Shared/Container";
import "./Banner.css"

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
          <div className="md:w-[500px]">
            <video width="500" autoPlay muted loop>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className="thing">
        <Container>
          <div className="flex flex-col justify-center items-center space-y-4">
            <h1 className="text-5xl font-bold text-center font-lora text-white">
              Templates to win recruiters over
            </h1>
            <p className="font-montserrat text-center lg:w-3/4 w-full">We'll help you choose the right layout for your CV from over 40 available templates. Each is instantly ready to use and requires no design skills.</p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
