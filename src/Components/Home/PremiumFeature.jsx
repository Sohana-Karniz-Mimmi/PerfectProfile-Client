import React from "react";
import { FaStar } from "react-icons/fa";
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
      <div className=" lg:h-[484px] lg:w-[375px] relative bg-white bg-opacity-20 backdrop-blur-lg shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] transform transition duration-500 p-8 rounded-2xl flex flex-col">
        <div className="absolute bg-sky-600 rounded-full text-white p-2 top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <FaStar className="text-lg" />
        </div>
        <img
          src={imageUrl}
          alt={altText}
          className=" lg:w-[300px] lg:h-[240px]"
        />
        <h3 className="font-bold text-xl text-gray-800 mt-6">{title}</h3>
        <p className=" text-gray-500 text-lg">{description}</p>
      </div>
    );
  };

  return (
    <div className="relative bg-gradient-to-b py-12 px-6 overflow-hidden">
      {/* Top Text Section */}
      <div className="mb-16">
        <h2 className="text-center mt-5 mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Stand Out with Premium Features
        </h2>
        <p className="text-center text-lg sm:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto mb-12 md:w-[600px]">
          The job market today is competitive – you’ll need every edge to make
          your application shine.
        </p>
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
      <div className="relative z-10 text-center mt-12">
        <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-3 px-8 rounded-full text-lg lg:text-xl font-semibold shadow-lg transform transition duration-500 hover:scale-105">
          Check Out Premium
        </button>
      </div>

      {/* SVG Wave Background */}

      {/* <div className="absolute z-0 bottom-0 left-0 w-full premium-container">

        <div className="shape-svg-premium-top transform scale-x-[-1]">
          <svg className="shape-svg-bottom "
            x="0px"
            y="0px"
            viewBox="0 0 1000 320"
            xml:space="preserve">
            <defs>
              <linearGradient
                id="grad3"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%">
                <stop offset="0%" style={{ stopColor: "#4bccef", stopOpacity: 1 }}></stop>
                <stop offset="100%" style={{ stopColor: "#51e2c2", stopOpacity: 1 }}></stop> </linearGradient>
            </defs>
            <path fill="url(#grad3)" d="M0,100c0,0,250,150,500,0s500,0,500,0v100H0V100z"></path>
          </svg>
        </div>
        {/* <div class="h-80 bg-gradient-to-r from-[#51E2C2] to-[#4BCCEF]">
          <!-- Content here -->
        </div> */}

      {/* </div> */}

      <div className="z-[-1] absolute bottom-0 w-full left-0">
        <div className="transform scale-x-[-1]">
          <svg className="shape-svg-bottom" x="0px" y="0px" viewBox="0 0 1000 200" xmlSpace="preserve">
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%">
                <stop offset="0%" style={{ stopColor: "#4bccef", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#51e2c2", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path fill="url(#grad3)" d="M0,100c0,0,250,150,500,0s500,0,500,0v100H0V100z"></path>
          </svg>
        </div>

        <div className="shape-space h-60 bg-gradient-to-r from-[#51E2C2] to-[#4BCCEF]"></div>

        <div className="shape-svg shape-svg-premium-bottom w-full mt-0 pb-0">
          <svg className="shape-svg-mid" viewBox="0 0 1920 140.049" x="0px" y="0px" xmlSpace="preserve">
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%">
                <stop offset="0%" style={{ stopColor: "#51e2c2", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#4bccef", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path fill="url(#grad2)" d="M0 396.309l.023.006a4922.834 4922.834 0 0 0 1919.977.107v-45.593H0z" transform="translate(0 -350.829)" />
          </svg>
        </div>
      </div>

    </div>
  );
};

export default PremiumFeature;