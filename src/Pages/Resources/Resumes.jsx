import resume from "../../assets/Resource/Resumes/yale-resume.avif";
import resume1 from "../../assets/Resource/Resumes/shutterstock_712285927-scaled.avif";
import resume2 from "../../assets/Resource/Resumes/shutterstock_754101250-scaled.avif";
import resume3 from "../../assets/Resource/Resumes/best-font-for-resume.avif";
// import resume5 from "../../assets/Resource/Resumes/mit-resume-template.avif";
import resume6 from "../../assets/Resource/Resumes/chicago-resume-template-1.avif";
import resume7 from "../../assets/Resource/Resumes/pexels-sora-shimazaki-5673496-scaled.avif";

const Resumes = () => {
  return (
    <>
      <div className="container mx-auto mt-12 px-4">
        {/* Header */}
        <div className="text-center my-6">
          <h1 className="text-3xl md:text-4xl my-5 font-bold">Resumes</h1>
          <p className="font-montserrat md:text-[17px] text-sm text-gray-800 font-light ">
            A well-structured two-page resume allows you to showcase the breadth
            of your skills and experience, <br /> helping you demonstrate your
            unique fit for the role.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left column (Featured resume) */}
          <div className="md:w-2/3">
            <img
              src={resume}
              alt="Yale Resume"
              className="rounded-lg w-full h-auto mb-4"
            />
            <p className="text-primary font-bold">
              RESUME •{" "}
              <span className="text-gray-600 font-normal">7 min read</span>
            </p>
            <h3 className="text-2xl font-bold text-secondary mb-2">
              Yale Resume Templates & Writing Guide
            </h3>
            <p className="text-gray-700">
              Yale University is a prestigious Ivy League institution known for
              its world-class education...
            </p>
          </div>

          {/* Right column (Other resumes) */}
          <div className="flex flex-col gap-6 md:w-1/3">
            {/* First Small Card */}
            <div className="flex space-x-4">
              <img
                className="w-32 h-32 object-cover rounded-lg"
                src={resume3}
                alt="Best Font Resume"
              />
              <div>
                <p className="text-primary font-bold">
                  RESUME •{" "}
                  <span className="text-gray-600 font-normal">10 min read</span>
                </p>
                <h3 className="text-lg font-bold text-secondary">
                  Best Font for Your Resume in 2024
                </h3>
              </div>
            </div>

            {/* Second Small Card */}
            <div className="flex space-x-4">
              <img
                className="w-32 h-32 object-cover rounded-lg"
                src={resume1}
                alt="Stanford Resume"
              />
              <div>
                <p className="text-primary font-bold">
                  RESUME •{" "}
                  <span className="text-gray-600 font-normal">4 min read</span>
                </p>
                <h3 className="text-lg font-bold text-secondary">
                  Stanford Resume Template (Guide & Examples)
                </h3>
              </div>
            </div>

            {/* Third Small Card */}
            <div className="flex space-x-4">
              <img
                className="w-32 h-32 object-cover rounded-lg"
                src={resume2}
                alt="Video Resume"
              />
              <div>
                <p className="text-primary font-bold">
                  RESUME •{" "}
                  <span className="text-gray-600 font-normal">6 min read</span>
                </p>
                <h3 className="text-lg font-bold text-secondary">
                  How to Make a Video Resume: Guide & Examples
                </h3>
              </div>
            </div>

            {/* Fourth Small Card */}
            <div className="flex space-x-4">
              <img
                className="w-32 h-32 object-cover rounded-lg"
                src={resume6}
                alt="Chicago Resume"
              />
              <div>
                <p className="text-primary font-bold">
                  RESUME •{" "}
                  <span className="text-gray-600 font-normal">7 min read</span>
                </p>
                <h3 className="text-md font-bold text-secondary">
                  University of Chicago Resume Template (Guide &..)
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
                <p className="text-primary font-bold">
                  RESUME •{" "}
                  <span className="text-gray-600 font-normal">5 min read</span>
                </p>
                <h3 className="text-md font-bold text-secondary">
                  University of Chicago Resume Template (Guide &..)
                </h3>
              </div>
            </div>

            {/* Sixth Small Card */}
            {/* <div className="flex space-x-4">
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
                  University of Chicago Resume Template (Guide &...)
                </h3>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resumes;
