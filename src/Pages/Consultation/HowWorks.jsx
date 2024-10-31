import img1 from "../../assets/consultation/session-book.png";
import img2 from "../../assets/consultation/guidance.png";
import img3 from "../../assets/consultation/feedback.png";
import img4 from "../../assets/consultation/download.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Heading from "../../Shared/Heading";

const HowWorks = () => {
  return (
    <div className="lg:mb-36 mb-24 lg:mt-36 mt-32 ">
       <div className="">
          <Heading
            title={" How It Works"}
            subtitle={
              "Our simple process involves understanding your goals, crafting a tailored resume, and providing revisions until you're satisfied."
            }
            className={"max-w-3xl mx-auto md:w-[670px]"}
          />
        </div>
      
      <div className="flex flex-col lg:flex-row justify-center mt-16 lg:mt-24 lg:items-start items-center gap-4 lg:gap-9">
        {/* 1 */}

        <div className=" flex flex-col justify-center items-center w-60 gap-1 text-center">
          <img className="h-20 w-20" src={img1} alt="" />
          <h1 className="font-bold text-xl font-lora">Book a Session</h1>
          <p className="text-gray-500 text-sm md:text-base font-montserrat">
            Schedule a consultation with one of our expert resume consultants at
            a time that suits you.
          </p>
        </div>
        <div>
          <FaLongArrowAltRight className="lg:mt-24 mt-2 mb-6 lg:mb-0  text-xl text-primary transition transform rotate-90 lg:rotate-0 "></FaLongArrowAltRight>
        </div>
        {/* 2 */}

        <div className=" flex flex-col justify-center items-center w-60 gap-1 text-center">
          <img className="h-20 w-20" src={img2} alt="" />
          <h1 className="font-bold text-xl font-lora">Live Guidance</h1>
          <p className="text-gray-500 text-sm md:text-base font-montserrat">
            Join a Google Meet session where our consultant will help you build
            or update your resume from scratch.
          </p>
        </div>
        <div>
          <FaLongArrowAltRight className="lg:mt-24 mt-2 mb-3 lg:mb-0  text-xl text-primary transition transform rotate-90 lg:rotate-0 "></FaLongArrowAltRight>
        </div>
        {/* 3 */}
        <div className=" flex flex-col justify-center items-center w-60 gap-1 text-center">
          <img className="h-20 w-20" src={img3} alt="" />
          <h1 className="font-bold text-xl font-lora">
            Collaborative Editing & Feedback
          </h1>
          <p className="text-gray-500text-sm md:text-base font-montserrat">
            Collaborate in real-time to refine your resume and receive expert
            feedback to make it stand out
          </p>
        </div>
        <div>
          <FaLongArrowAltRight className="lg:mt-24 mt-2 mb-1 lg:mb-0  text-xl text-primary transition transform rotate-90 lg:rotate-0 "></FaLongArrowAltRight>
        </div>
        {/* 4 */}
        <div className=" flex flex-col justify-center items-center w-60 gap-1 text-center">
          <img className="h-20 w-20" src={img4} alt="" />
          <h1 className="font-bold text-xl font-lora">Finalize & Download</h1>
          <p className="text-gray-500 font-montserrat text-sm md:text-base">
            Once completed, download your polished resume as PDF, PNG or JPEG.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
