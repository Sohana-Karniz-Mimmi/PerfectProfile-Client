import img from "../../assets/pricing banner.png";
const PricingBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between mb-16 lg:mb-7 items-center px-2 lg:px-9 mt-9 py-6 rounded-lg bg-cyan-50">
      <div>
        <h1 className="text-4xl font-lora font-bold ">Professional Resume Writing</h1>
        <p className="text-gray-700 lg:w-2/3 font-montserrat md:w-3/4 w-full mt-4">
          Our resume experts help thousands of career seekers secure more job
          offers, higher salaries, and land new jobs and promotions in less time
          than typical self-written resumes. Professionally written resumes that
          help fast-track the path to your dream job - that’s priceless.
        </p>
      </div>
      <div className="p-10 lg:p-12 ">
        <img className="lg:w-96" src={img} alt="" />
      </div>
    </div>
  );
};

export default PricingBanner;
