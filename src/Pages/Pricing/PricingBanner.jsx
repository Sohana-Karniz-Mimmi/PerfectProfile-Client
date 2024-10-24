import img from "../../assets/pricing banner.png";
const PricingBanner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:gap-6 gap-4 mb-16 lg:mb-7 items-center px-5 md:px-9 mt-9 py-16 rounded-lg bg-cyan-50">
      <div className="md:w-2/4">
        <h1 className="text-4xl md:text-2xl font-lora font-bold ">Professional Resume Writing</h1>
        <p className="text-gray-700 lg:w-2/3 xl:w-full font-montserrat w-full mt-4">
          Our resume experts help thousands of career seekers secure more job
          offers, higher salaries, and land new jobs and promotions in less time
          than typical self-written resumes. Professionally written resumes that
          help fast-track the path to your dream job - that’s priceless.
        </p>
      </div>
      <div className="md:w-2/4 xl:text-center">
        <img className="w-full h-full xl:h-1/2 xl:w-1/2" src={img} alt="" />
      </div>
    </div>
  );
};

export default PricingBanner;
