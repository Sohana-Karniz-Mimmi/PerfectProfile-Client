import React from "react";
import { FaStar } from "react-icons/fa";
import Button from "../../Shared/Button/Button";
import Heading from "../../Shared/Heading";
import { Link } from "react-router-dom";
// import img from "../../assets/PremiumFeture/premium-0.webp"

const PremiumFeature = () => {
  return (
    <div className="relative bg-gradient-to-b pb-12 px-6 overflow-hidden">
      {/* Top Text Section */}
      <div className="mb-15">
        <Heading
          title={"Stand Out with Premium Features"}
          subtitle={
            "The job market today is competitive – you’ll need every edge to make your application shine."
          }
          className={"max-w-3xl mx-auto mb-12 md:w-[600px]"}
        />
      </div>

      {/* Card Section rendered using map() */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-8 mx-auto">
        <div
          className="2xl:h-[550px] lg:h-[484px] lg:w-[375px] relative shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] transform transition duration-500 p-8 rounded-2xl flex flex-col justify-center items-center"
          style={{
            backdropFilter: "blur(25px)",
            backgroundColor: "rgba(245, 245, 245, 0.2)",
          }}
        >
          <div className="absolute bg-primary rounded-full text-white p-2 top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <FaStar className="text-lg" />
          </div>
          <img
            src="https://d.novoresume.com/images/landing_page/premium/premium-0.webp"
            alt={"Professional Resume"}
            role="img"
            className=" lg:w-[300px] lg:h-[240px]"
          />
          <div className="space-y-3 pt-8">
            <h3 className="font-bold font-lora text-xl text-black">
              Unlimited Design Options
            </h3>
            <p className=" text-gray-800 text-[15px] font-montserrat">
              Make your resume truly yours by customizing its design, layout,
              and much more.
            </p>
          </div>
        </div>

        <div
          className="2xl:h-[550px] lg:h-[484px] lg:w-[375px] relative shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] transform transition duration-500 p-8 rounded-2xl flex flex-col justify-center items-center"
          style={{
            backdropFilter: "blur(25px)",
            backgroundColor: "rgba(245, 245, 245, 0.2)",
          }}
        >
          <div className="absolute bg-primary rounded-full text-white p-2 top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <FaStar className="text-lg" />
          </div>

          <div class="flex">
            <figure className="mr-8 h-[240px] flex items-center">
              <img
                width="145"
                height="200"
                srcSet="https://d.novoresume.com/images/landing_page/premium/premium-left.webp"
                alt="Cover Letter Templates"
                loading="lazy"
                src="https://d.novoresume.com/images/landing_page/premium/premium-left.png"
                className=""
                role="img"
                style={{
                  transform: "perspective(60px) rotateY(-2deg)",
                }}
              />
            </figure>
            <figure className="h-[240px] flex items-center">
              <img
                width="145"
                height="200"
                srcSet="https://d.novoresume.com/images/landing_page/premium/premium-right.webp"
                alt="Cover Letter Templates"
                loading="lazy"
                src="https://d.novoresume.com/images/landing_page/premium/premium-right.png"
                className=""
                role="img"
                style={{
                  transform: "perspective(60px) rotateY(2deg)",
                }}
              />
            </figure>
          </div>

          <div className="space-y-3 pt-8">
            <h3 className="font-bold font-lora text-xl text-black">
              Cover Letter Templates
            </h3>
            <p className=" text-gray-800 text-[15px] font-montserrat">
              Want your application to stand out from the rest? Create a
              matching cover letter for your resume and impress the hiring
              manager.
            </p>
          </div>
        </div>

        <div
          className="2xl:h-[550px] lg:h-[484px] lg:w-[375px] relative shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] transform transition duration-500 p-8 rounded-2xl flex flex-col justify-center items-center"
          style={{
            backdropFilter: "blur(25px)",
            backgroundColor: "rgba(245, 245, 245, 0.2)",
          }}
        >
          <div className="absolute bg-primary rounded-full text-white p-2 top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <FaStar className="text-lg" />
          </div>
          <figure className="-mr-16">
            <img
              srcSet="https://d.novoresume.com/images/landing_page/premium/premium-2.webp"
              alt="Two Pages+"
              loading="lazy"
              element="2"
              src="https://d.novoresume.com/images/landing_page/premium/premium-2.png"
              class="mx-auto md:w-[160px] w-[160px] lg:h-[240px]"
              role="img"
              style={{
                transform: "perspective(44px) rotateX(0) rotateY(2deg)",
                boxShadow:
                  "-1px 0 3px 0 rgba(0, 0, 0, .2), -25px 0 0 -10px #fff, -25px 0 3px -10px rgba(0, 0, 0, .3), -50px 0 0 -20px #fff, -50px 0 3px -20px rgba(0, 0, 0, .3), -75px 0 0 -30px #fff, -75px 0 3px -30px rgba(0, 0, 0, .3)",
              }}
            />
          </figure>
          <div className="space-y-3 pt-8">
            <h3 className="font-bold font-lora text-xl text-black">
              Two Pages +
            </h3>
            <p className=" text-gray-800 text-[15px] font-montserrat">
              Can’t fit your decade’s worth of experience on one page? Premium
              let’s you go beyond the one-page limit.
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div to={"/pricing"} className="relative z-10 text-center mt-12">
        <Button
          route={"/pricing"}
          text="Checkout Premium"
          className="px-8 rounded-full "
        />
      </div>

      {/* SVG Wave Background */}
      <div className="z-[-1] absolute bottom-0 w-full left-0">
        <div className="transform scale-x-[-1]">
          <svg
            data-testid="svg-wave"
            className="shape-svg-bottom"
            x="0px"
            y="0px"
            viewBox="0 0 1000 199"
            xmlSpace="preserve"
          >
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#4bccef", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#51e2c2", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#grad3)"
              d="M0,100c0,0,250,150,500,0s500,0,500,0v100H0V100z"
            ></path>
          </svg>
        </div>

        <div className="shape-space h-60 bg-gradient-to-r from-[#51E2C2] to-[#4BCCEF]"></div>

        <div className="shape-svg shape-svg-premium-bottom w-full mt-0 pb-0">
          <svg
            className="shape-svg-mid"
            viewBox="0 0 1920 140.049"
            x="0px"
            y="0px"
            xmlSpace="preserve"
          >
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#51e2c2", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#4bccef", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              dataTest
              fill="url(#grad2)"
              d="M0 396.309l.023.006a4922.834 4922.834 0 0 0 1919.977.107v-45.593H0z"
              transform="translate(0 -350.829)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PremiumFeature;
