import resume from "../../assets/Resource/Resumes/yale-resume.avif";
import resume1 from "../../assets/Resource/Resumes/shutterstock_712285927-scaled.avif";
import resume2 from "../../assets/Resource/Resumes/shutterstock_754101250-scaled.avif";
import resume3 from "../../assets/Resource/Resumes/best-font-for-resume.avif";
import resume5 from "../../assets/Resource/Resumes/mit-resume-template.avif";
import resume6 from "../../assets/Resource/Resumes/chicago-resume-template-1.avif";
import resume7 from "../../assets/Resource/Resumes/pexels-sora-shimazaki-5673496-scaled.avif";

const Resumes = () => {
  return (
    <>
      <div className="container mx-auto mt-12">
        {/* Header */}
        {/* Link to more articles */}
        <div className="mt-8 text-right">
          <a href="#" className="text-blue-600 font-semibold">
            View more resumes articles ➜
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-6">Resumes</h1>

        {/* Buttons */}
        <div className="mb-6 flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded-lg text-blue-900">
            Resume Basics
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg text-blue-900">
            Resume How-To
          </button>
        </div>

        {/* Content Grid */}
        <div className="flex  gap-6">
          {/* Left column (Featured resume) */}
          <div className="md:col-span-2">
            <img
              src={resume}
              alt="Yale Resume"
              className="rounded-lg w-[520px] h-64 object-cover mb-4"
            />
            <p className="text-gray-600">
              RESUME • <span>7 min read</span>
            </p>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Yale Resume Templates & Writing Guide
            </h3>
            <p className="text-gray-700">
              Yale University is a prestigious Ivy League institution known for
              its world-class education...
            </p>
          </div>
          <div className="flex gap-6">
            {/* Right column (other resumes) */}
            <div className="flex flex-col space-y-6 ">
              {/* First Small Card */}
              <div className="flex space-x-4">
                <img
                  className="w-32 h-32 object-cover rounded-lg"
                  src={resume3}
                  alt=""
                />
                <div>
                  <p className="text-gray-600 font-bold">
                    RESUME • <span className="font-normal">4 min read</span>
                  </p>
                  <h3 className="text-lg font-bold text-blue-900">
                    Best Font for Your Resume in 2024
                  </h3>
                </div>
              </div>

              {/* Second Small Card */}
              <div className="flex space-x-4">
                <img
                  className="w-32 h-32 object-cover rounded-lg"
                  src={resume1}
                  alt=""
                />
                <div>
                  <p className="text-gray-600 font-bold">
                    RESUME • <span className="font-normal">4 min read</span>
                  </p>
                  <h3 className="text-lg font-bold text-blue-900">
                    Stanford Resume Template (Guide & Examples)
                  </h3>
                </div>
              </div>

              {/* Third Small Card */}
              <div className="flex space-x-4">
                <img
                  className="w-32 h-32 object-cover rounded-lg"
                  src={resume2}
                  alt=""
                />
                <div>
                  <p className="text-gray-600 font-bold">
                    RESUME • <span className="font-normal">4 min read</span>
                  </p>
                  <h3 className="text-lg font-bold text-blue-900">
                    How to Make a Video Resume: Guide & Examples
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              {/* Fourth Small Card */}
              <div className="flex space-x-4">
                <img
                  className="w-32 h-32 object-cover rounded-lg"
                  src={resume6}
                  alt="MIT Resume"
                />
                <div>
                  <p className="text-gray-600 font-bold">
                    RESUME • <span className="font-normal">4 min read</span>
                  </p>
                  <h3 className="text-md font-bold text-blue-900">
                    University of Chicago REsume TEmplate (Guide &..)
                  </h3>
                </div>
              </div>
              {/* Fifth Small Card */}
              <div className="flex space-x-4">
                <img
                  className="w-32 h-32 object-cover rounded-lg"
                  src={resume7}
                  alt="MIT Resume"
                />
                <div>
                  <p className="text-gray-600 font-bold">
                    RESUME • <span className="font-normal">4 min read</span>
                  </p>
                  <h3 className="text-md font-bold text-blue-900">
                    University of Chicago REsume TEmplate (Guide &..)
                  </h3>
                </div>
              </div>
              {/* Fourth Small Card */}
              <div className="flex space-x-4">
                <img
                  className="w-32 h-32 object-cover rounded-lg"
                  src={resume5}
                  alt="MIT Resume"
                />
                <div>
                  <p className="text-gray-600 font-bold">
                    RESUME • <span className="font-normal">4 min read</span>
                  </p>
                  <h3 className="text-md font-bold text-blue-900">
                    University of Chicago REsume TEmplate (Guide &...)
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resumes;
