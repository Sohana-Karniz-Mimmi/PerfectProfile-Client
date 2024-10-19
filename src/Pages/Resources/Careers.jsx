import careerImg from "../../assets/Resource/career/scholarship-guide.avif";
import careerImg1 from "../../assets/Resource/career/best-ai-cover-letter-generator.avif";

const Careers = () => {
  return (
    <div className="container mx-auto px-4 ">
      {/* View More Link */}
      <div className="mt-8 text-right">
        <a href="#" className="text-blue-600 font-semibold">
          View more careers articles ➜
        </a>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  my-6">
        Careers
      </h1>

      {/* Buttons */}
      <div className="mb-6 flex space-x-2 sm:space-x-4">
        <button className="px-3 py-2 bg-gray-200 rounded-lg text-blue-900 hover:bg-gray-300 transition">
          Career Basics
        </button>
        <button className="px-3 py-2 bg-gray-200 rounded-lg text-blue-900 hover:bg-gray-300 transition">
          Career Planning
        </button>
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {/* Article 1 */}
        <div className="">
          <img
            className="w-full h-48 md:h-72 lg:h-96 object-cover rounded-lg"
            src={careerImg}
            alt="Scholarship Guide"
          />
          <p className="font-bold my-2">
            CAREERS . <span className="font-normal">14 min read</span>
          </p>
          <h3 className="font-bold text-blue-900 cursor-pointer text-lg md:text-xl hover:text-blue-700 transition">
            How to Apply for Scholarships: Guide for Students
          </h3>
          <p className="my-2 text-sm md:text-base">
            Applying for a scholarship may seem like choosing numbers on a{" "}
            lottery coupon. You grasp the odds and carefully choose..
          </p>
          <p className="font-bold">
            Kellie Hanna, CPRW .{" "}
            <span className="font-normal">Apr 23, 2024</span>
          </p>
        </div>

        {/* Article 2 */}
        <div className="">
          <img
            className="w-full h-48 md:h-72 lg:h-96 object-cover rounded-lg"
            src={careerImg1}
            alt="AI Cover Letter Generator"
          />
          <p className="font-bold my-2">
            CAREERS . <span className="font-normal">14 min read</span>
          </p>
          <h3 className="font-bold text-blue-900 cursor-pointer text-lg md:text-xl hover:text-blue-700 transition">
            Best AI Cover Letter Generators (Review & Comparison)
          </h3>
          <p className="my-2 text-sm md:text-base">
            Applying for a scholarship may seem like choosing numbers on a{" "}
            lottery coupon. You grasp the odds and carefully choose..
          </p>
          <p className="font-bold">
            Kellie Hanna, CPRW .{" "}
            <span className="font-normal">Apr 23, 2024</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
