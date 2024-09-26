import img from "../../assets/pricing banner.png";
const PricingBanner = () => {
  return (
    <div className="flex justify-between items-center bg-[#EAF9FF]">
      <div>
        <h1>Professional Resume Writing</h1>
        <p>
          Our resume experts help thousands of career seekers secure more job
          offers, higher salaries, and land new jobs and promotions in less time
          than typical self-written resumes. Professionally written resumes that
          help fast-track the path to your dream job - that’s priceless.
        </p>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default PricingBanner;
