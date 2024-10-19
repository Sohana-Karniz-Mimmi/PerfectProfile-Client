import jobImg1 from "../../assets/Resource/job/letter-of-intent-hero-image.avif";
import jobImg2 from "../../assets/Resource/job/skills-based-hiring.avif";
import jobImg3 from "../../assets/Resource/job/preparing-your-resume-for-email.avif";
const JobResources = () => {
  return (
    <div>
      <div className="mt-12 text-right ">
        <a href="#" className="text-blue-600 font-semibold">
          View more jobs articles ➜
        </a>
      </div>
      <h1 className="text-3xl font-bold mb-6">Jobs</h1>

      {/* Buttons */}
      <div className="mb-6 flex space-x-4">
        <button className="px-4 py-2 bg-gray-200 rounded-lg text-blue-900">
          Job Search
        </button>
      </div>
      <div className="bg-slate-100 p-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
          <div>
            <img className="w-[250px] rounded-xl" src={jobImg1} alt="" />
            <p className="font-bold text-blue-900 my-2">
              JOBS . <span className="font-normal">10 min read</span>
              <h3 className="text-xl font-bold text-blue-900">
                How to Write a Letter of Intent: Examples &..
              </h3>
              <p className="my-2 font-normal">
                A well-crafted letter of intent (LOI) is a powerful tool for
                articulating how your.
              </p>
              <p className="font-bold ">
                Nilda Melissa Diaz, CPRW .{" "}
                <span className="font-normal">Jul 21,2024</span>
              </p>
            </p>
          </div>
          <div>
            <img className="w-[250px] rounded-xl" src={jobImg2} alt="" />
            <p className="font-bold text-blue-900 my-2">
              JOBS . <span className="font-normal">13 min read</span>
              <h3 className="text-xl font-bold text-blue-900 cursor-pointer">
                Skills-Based Hiring is Revolutionizing Talent..
              </h3>
              <p className="my-2 font-normal">
                In today’s rapidly evolving job market, traditional hiring
                practices often fall..
              </p>
              <p className="font-bold ">
                Elizabeth Muenzen, CPRW .{" "}
                <span className="font-normal"> May 21, 2024</span>
              </p>
            </p>
          </div>
          <div>
            <img className="w-[250px] rounded-xl" src={jobImg3} alt="" />
            <p className="font-bold text-blue-900 my-2">
              JOBS . <span className="font-normal">7 min read</span>
              <h3 className="text-xl font-bold text-blue-900">
                What to Write in an Email When Sending Your..
              </h3>
              <p className="my-2 font-normal">
                Your resume email is the first point of contact between you and
                a potential..
              </p>
              <p className="font-bold ">
                john doe, CPRW .<span className="font-normal">may 16,2024</span>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobResources;
