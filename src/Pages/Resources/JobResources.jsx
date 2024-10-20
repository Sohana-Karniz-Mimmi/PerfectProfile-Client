import jobImg1 from "../../assets/Resource/job/letter-of-intent-hero-image.avif";
import jobImg2 from "../../assets/Resource/job/skills-based-hiring.avif";
import jobImg3 from "../../assets/Resource/job/preparing-your-resume-for-email.avif";

const JobResources = () => {
  return (
    <div>
      <div className="mt-12 text-right ">
        {/* <a href="#" className="text-blue-600 font-semibold">
          View more jobs articles ➜
        </a> */}
      </div>
      <div className="text-center my-6">
        <h1 className="text-3xl md:text-4xl mb-4 font-bold">Jobs</h1>
        <p className="font-montserrat md:text-[17px] text-sm text-gray-800 font-light ">
          If you are interested in a company that does not have a specific job
          opening advertised, you can use a letter <br /> of intent to introduce
          yourself and express your interest in working for them.
        </p>
      </div>
      <div className="bg-[#d1fae5] p-20 ">
        <div className="container mx-auto">
          {/* Buttons */}
          {/* <div className="mb-6 flex space-x-4">
            <button className="px-4 py-2 bg-gray-200 rounded-lg text-blue-900">
              Job Search
            </button>
          </div> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
          <div className="flex flex-col ">
            <img
              className="w-full  rounded-xl"
              src={jobImg1}
              alt="Letter of Intent"
            />
            <p className="font-bold text-primary my-2">
              JOBS .{" "}
              <span className="font-normal text-gray-600">10 min read</span>
            </p>
            <h3 className="text-xl font-bold text-secondary ">
              How to Write a Letter of Intent: Examples &..
            </h3>
            <p className="my-2 ">
              A well-crafted letter of intent (LOI) is a powerful tool for
              articulating how your.
            </p>
            <p className="font-bold text-primary ">
              Nilda Melissa Diaz, CPRW .{" "}
              <span className="font-normal text-gray-600">Jul 21,2024</span>
            </p>
          </div>
          <div className="flex flex-col ">
            <img
              className="w-full  rounded-xl"
              src={jobImg2}
              alt="Skills Based Hiring"
            />
            <p className="font-bold text-primary my-2">
              JOBS .{" "}
              <span className="font-normal text-gray-600">13 min read</span>{" "}
            </p>
            <h3 className="text-xl font-bold text-secondary  cursor-pointer">
              Skills-Based Hiring is Revolutionizing Talent..
            </h3>
            <p className="my-2 font-normal ">
              In today's rapidly evolving job market, traditional hiring
              practices often fall..
            </p>
            <p className="font-bold text-primary ">
              Elizabeth Muenzen, CPRW .{" "}
              <span className="font-normal text-gray-600"> May 21, 2024</span>
            </p>
          </div>
          <div className="flex flex-col ">
            <img
              className="w-full  rounded-xl"
              src={jobImg3}
              alt="Resume Email"
            />
            <p className="font-bold text-primary my-2">
              JOBS .{" "}
              <span className="font-normal text-gray-600">7 min read</span>
            </p>
            <h3 className="text-xl font-bold text-secondary ">
              What to Write in an Email When Sending Your..
            </h3>
            <p className="my-2 font-normal ">
              Your resume email is the first point of contact between you and a
              potential..
            </p>
            <p className="font-bold text-primary ">
              John Doe, CPRW . {""}
              <span className="font-normal text-gray-600">May 16,2024</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobResources;
