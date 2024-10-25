import { MdStars } from "react-icons/md";
import img from "../../assets/pricing2ndBanner.png";
import { Link } from "react-router-dom";
const Pricing2ndBanner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between items-center lg:px-9 py-6 lg:mb-1 mt-9 rounded-lg bg-cyan-50">
      <div className="space-y-3 px-3">
        <h1 className="font-bold font-lora lg:text-4xl text-3xl md:text-lg">
          Get hired faster with PerfectProfile
          <span className="text-white inline-block font-semibold ml-1 text-base p-2 rounded-md bg-secondary">
            Pro
          </span>
        </h1>
        <p className="text-gray-700 md:w-3/4 w-full lg:text-base text-sm font-montserrat">
          PerfectProfile Pro gives you access to career building tools and
          resources to take your job search to the next level.
        </p>

        <div className="flex flex-col space-y-2 items-start mt-3 lg:text-base text-sm  font-bold lg:font-semibold">
          <div className="flex items-center  justify-center gap-1 text-gray-600">
            <p className="text-cyan-600">
              <MdStars />
            </p>
            <p>Unlimited AI Resume Writer access</p>
          </div>
          <div className="flex items-center justify-center gap-1 text-gray-600">
            <p className="text-cyan-600">
              <MdStars />
            </p>
            <p>Create unlimited resumes + PDF downloads</p>
          </div>
          <div className="flex items-start justify-center gap-1 ">
            <MdStars className="text-cyan-600 mt-1" />
            <p className="inline text-gray-600 ">
              Publish your resume as a personal career website
            </p>
          </div>
        </div>
        <div>
          <a href="#price" className="mt-6 mb-16  lg:mb-0">
            <button className="bg-gradient-to-r text-center from-primary to-secondary hover:bg-gradient-to-l text-white py-2 px-4 font-montserrat font-medium  uppercase lg:text-base shadow-lg transform transition duration-500 hover:scale-105">
              Upgrade Now
            </button>
          </a>
        </div>
      </div>

      <div className=" px-5">
        <img
          className="h-80 md:h-64 w-[27rem] md:w-[36rem] rounded-lg"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Pricing2ndBanner;
