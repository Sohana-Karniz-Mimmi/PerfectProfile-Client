import React from "react";
import { FaStar } from "react-icons/fa";
import Button from "../../Shared/Button/Button";
import Heading from "../../Shared/Heading";
import { Link } from "react-router-dom";
// import img from "../../assets/PremiumFeture/premium-0.webp"

const PremiumFeature = () => {
  // Card data array
  const cardData = [
    {
      title: "Unlimited Design Options",
      description:
        "Make your resume truly yours by customizing its design, layout, and much more.",
      imageUrl:
        "https://d.novoresume.com/images/landing_page/premium/premium-0.webp",
      altText: "Professional Resume",
    },
    {
      title: "Cover Letter Templates",
      description:
        "Want your application to stand out from the rest? Create a matching cover letter for your resume and impress the hiring manager.",
      imageUrl:
        "https://d.novoresume.com/images/landing_page/premium/premium-right.webp",
      altText: "Cover Letter Template",
    },
    {
      title: "Two Pages +",
      description:
        "Can’t fit your decade’s worth of experience on one page? Premium let’s you go beyond the one-page limit.",
      imageUrl:
        "https://d.novoresume.com/images/landing_page/premium/premium-2.webp",
      altText: "Two Pages Plus",
    },
  ];

  // Reusable card component inside the same file
  const Card = ({ title, description, imageUrl, altText }) => {
    return (
      <div className=" lg:h-[550px] lg:w-[375px] relative bg-white bg-opacity-20 shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] transform transition duration-500 p-8 rounded-2xl flex flex-col">
        <div className="absolute bg-primary rounded-full text-white p-2 top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <FaStar className="text-lg" />
        </div>
        <img
          src={imageUrl}
          alt={altText}
          className=" lg:w-[300px] lg:h-[240px]"
        />
        <div className="space-y-3 pt-6">
          <h3 className="font-bold font-lora text-xl text-black">
            {title}
          </h3>
          <p className=" text-gray-800 md:text-lg text-base font-montserrat">
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative bg-gradient-to-b pb-12 px-6 overflow-hidden">
      {/* Top Text Section */}
      <div className="mb-15">
        <Heading title={'Stand Out with Premium Features'} subtitle={'The job market today is competitive – you’ll need every edge to make your application shine.'} className={'max-w-3xl mx-auto mb-12 md:w-[600px]'} />
      </div>

      {/* Card Section rendered using map() */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-8 mx-auto">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            altText={card.altText}
          />
        ))}
      </div>

      {/* Button */}
      <div to={'/pricing'} className="relative z-10 text-center mt-12">
        <Button route={'/pricing'} text="Checkout Premium" className="px-8 rounded-full " />
      </div>

      {/* SVG Wave Background */}
      <div className="z-[-1] absolute bottom-0 w-full left-0">
        <div className="transform scale-x-[-1]">
          <svg
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
