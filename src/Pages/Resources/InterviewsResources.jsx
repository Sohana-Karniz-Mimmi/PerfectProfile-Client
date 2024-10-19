import { Link } from "react-router-dom";
import interviewImg from "../../assets/Resource/interview/score.avif";
const InterviewsResources = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-12 text-right ">
        <a href="#" className="text-blue-600 font-semibold">
          View more resumes articles ➜
        </a>
      </div>
      <h1 className="text-3xl font-bold mb-6">Resumes</h1>

      {/* Buttons */}
      <div className="mb-6 flex space-x-4">
        <button className="px-4 py-2 bg-gray-200 rounded-lg text-blue-900">
          Interview Prep
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-lg text-blue-900">
          Interview Questions
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <div className="">
            <h3 className="my-2 text-xl font-bold text-blue-900 cursor-pointer">
              HR Administrative Assistant Interview..
            </h3>
            <p>
              Job interviews can be stressful, even for an experienced HR
              administrative..
            </p>
            <p className="font-bold my-2">
              <Link className="text-blue-900 ">INTERVIEWS .</Link>{" "}
              <span className="font-normal">16 min read</span>
            </p>
          </div>
          <div className="my-8">
            <h3 className="my-2 text-xl font-bold text-blue-900 cursor-pointer">
              Frequently Asked Communications..
            </h3>
            <p>
              Preparing for a job interview for a corporate communication
              specialist..
            </p>
            <p className="font-bold my-2">
              <Link className="text-blue-900 ">INTERVIEWS .</Link>{" "}
              <span className="font-normal">13 min read</span>
            </p>
          </div>
          <div className="">
            <h3 className="my-2 text-xl font-bold text-blue-900 cursor-pointer">
              Answers: What Does Goods Customer Service..
            </h3>
            <p>
              If you are applying for a customer service position, you will
              likely be..
            </p>
            <p className="font-bold my-2">
              <Link className="text-blue-900 ">INTERVIEWS .</Link>{" "}
              <span className="font-normal">8 min read</span>
            </p>
          </div>
        </div>

        <div>
          <div className="">
            <h3 className="my-2 text-xl font-bold text-blue-900 cursor-pointer">
              How Would You Describe Yourself as a Team..
            </h3>
            <p>
              Questions like ‘How would you describe yourself in terms of your..
            </p>
            <p className="font-bold my-2">
              <Link className="text-blue-900 ">INTERVIEWS .</Link>{" "}
              <span className="font-normal">7 min read</span>
            </p>
          </div>
          <div className="my-8">
            <h3 className="my-2 text-xl font-bold text-blue-900 cursor-pointer">
              Interview Question: Why Do You Think You Are..
            </h3>
            <p>
              “Why do you think you are qualified for this position,” is a
              common..
            </p>
            <p className="font-bold my-2">
              <Link className="text-blue-900 ">INTERVIEWS .</Link>{" "}
              <span className="font-normal">8 min read</span>
            </p>
          </div>
          <div className="">
            <h3 className="my-2 text-xl font-bold text-blue-900 cursor-pointer">
              Example Answers: "What is Your Educational..
            </h3>
            <p>
              Interviews often give skilled recruiters the opportunity to hint
              at the answer..
            </p>
            <p className="font-bold my-2">
              <Link className="text-blue-900 ">INTERVIEWS .</Link>{" "}
              <span className="font-normal">4 min read</span>
            </p>
          </div>
        </div>
        <div className="bg-secondary p-8 text-center rounded-tl-[60px] rounded-br-[60px]">
          <img src={interviewImg} alt="" />
          <h3 className="text-3xl font-bold text-white mt-2">
            Build the perfect resume for the job you want.
          </h3>
          <p className="text-white my-2">
            Our free-to-use resume builder will help you easily create the
            perfect resume. We provide step-by-step writing advice and a resume
            check to fix common grammar and spelling mistakes.
          </p>
          <button className="py-2 px-4 rounded-full bg-primary text-white w-full">
            Resume Builder
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewsResources;
