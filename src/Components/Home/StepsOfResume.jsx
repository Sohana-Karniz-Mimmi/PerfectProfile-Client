import { FaLongArrowAltRight } from "react-icons/fa";
import svg1 from "../../assets/StepsOfResume/1-svg.svg";
import svg2 from "../../assets/StepsOfResume/3-svg.svg";
import svg3 from "../../assets/StepsOfResume/4-svg.svg";
import svg4 from "../../assets/StepsOfResume/5-svg.svg";
import Container from "../../Shared/Container";


const StepsOfResume = () => {
  return (
    <div className="px-4 py-8 sm:px-6 md:px-12 lg:px-16 xl:px-24">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center my-12 space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-lora text-black font-bold">
          Easy Steps To Build Your Resume
        </h1>
        <p className="lg:w-4/6 w-full font-montserrat text-center md:text-lg text-base text-gray-800">Create a professional resume effortlessly in just a few simple steps. Choose from customizable templates, fill in your details, and tailor your resume to fit your career goals.</p>
      </div>

      {/* Card Section */}
      <Container>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
          {/* Step 1 */}
          <div className="text-center bg-white py-6 p-2 ">
            <div className="flex justify-center ">
              <div className="flex items-center relative">
                <img
                  className=" bg-white rounded-lg p-4 mb-4"
                  src={svg1}
                  alt="Step 1"
                  style={{ boxShadow: '2px 3.464px 24px 0px rgba(0, 200, 170, 0.25)' }}
                />
                <div className="hidden md:block absolute left-[87px] xl:w-[193px] lg:w-[100px] md:w-[230px] h-6 mb-6">
                  <div className="absolute top-1/2 left-0 dashed-line-animated transform -translate-y-1/2 text-gray-700"></div>
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 arrow-icon-animation">
                    <FaLongArrowAltRight className="text-secondary text-2xl !-mt-3" />
                  </div>
                </div>

              </div>

            </div>
            <p className="text-base font-montserrat">
              Step Num <span className="text-primary">#1</span>
            </p>
            <h3 className="mt-2 text-lg md:text-[22px] text-black font-lora font-semibold">
              Create Your Account
            </h3>
          </div>

          {/* Step 2 */}
          <div className="text-center  bg-white py-6 p-2 ">
            <div className="flex justify-center">
              <div className="flex items-center relative">
                <img
                  className=" bg-white rounded-lg p-4 mb-4"
                  src={svg2}
                  alt="Step 1"
                  style={{ boxShadow: '2px 3.464px 24px 0px rgba(0, 200, 170, 0.25)' }}
                />
                <div className="hidden lg:block absolute left-[87px] xl:w-[193px] lg:w-[100px] h-6 mb-6">
                  {/* Dashed Line with Animation */}
                  <div className="absolute top-1/2 left-0 dashed-line-animated transform -translate-y-1/2 text-gray-700"></div>

                  {/* Arrow Icon */}
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 arrow-icon-animation">
                    <FaLongArrowAltRight className="text-secondary text-2xl !-mt-3" />
                  </div>
                </div>

              </div>
            </div>
            <p className="text-base font-montserrat">
              Step Num <span className="text-primary">#2</span>
            </p>
            <h3 className="mt-2 text-lg md:text-[22px] text-black font-lora font-semibold">
              Choose Your Resume
            </h3>
          </div>

          {/* Step 3 */}
          <div className="text-center  bg-white py-6 p-2 ">
            <div className="flex justify-center ">
            <div className="flex items-center relative">
              <img
                className=" bg-white rounded-lg p-4 mb-4"
                src={svg3}
                alt="Step 1"
                style={{ boxShadow: '2px 3.464px 24px 0px rgba(0, 200, 170, 0.25)' }}
              />
              <div className="hidden md:block absolute left-[87px] xl:w-[193px] lg:w-[100px] md:w-[230px] h-6 mb-6">
                <div className="absolute top-1/2 left-0 dashed-line-animated transform -translate-y-1/2 text-gray-700"></div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 arrow-icon-animation">
                  <FaLongArrowAltRight className="text-secondary text-2xl !-mt-3" />
                </div>
              </div>

              </div>
            </div>
            <p className="text-base font-montserrat">
              Step Num <span className="text-primary">#3</span>
            </p>
            <h3 className="mt-2 text-lg md:text-[22px] text-black font-lora font-semibold">
              Add Your Information
            </h3>
          </div>

          {/* Step 4 */}
          <div className="text-center  bg-white py-6 p-2 ">
            <div className="flex justify-center ">
              <img
                className=" bg-white rounded-lg p-4 mb-4"
                src={svg4}
                alt="Step 4"
                style={{ boxShadow: '2px 3.464px 24px 0px rgba(0, 200, 170, 0.25)' }}
              />
            </div>
            <p className="text-base font-montserrat">
              Step Num <span className="text-primary">#4</span>
            </p>
            <h3 className="mt-2 text-lg md:text-[22px] text-black font-lora font-semibold">
              Download Resume
            </h3>
          </div>
        </div>
      </Container>

      {/* Marquee Section at the Bottom */}
    </div>
  );
};

export default StepsOfResume;
