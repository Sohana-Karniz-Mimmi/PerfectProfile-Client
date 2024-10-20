import { Link } from "react-router-dom";
import interviewImg from "../../assets/Resource/interview/score.avif";

const InterviewsResources = () => {
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="text-center my-6">
        <h1 className="text-3xl md:text-4xl my-5 font-bold">Interviews</h1>
        <p className="font-montserrat md:text-[17px] text-sm text-gray-800 font-light ">
          Job interviews can be stressful, even for an experienced HR
          administrative assistant. How you tackle <br /> each answer shows an
          employer what type of candidate you are.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <div>
            <h3 className="my-2 text-xl font-bold text-secondary cursor-pointer">
              HR Administrative Assistant Interview..
            </h3>
            <p>
              Job interviews can be stressful, even for an experienced HR
              administrative..
            </p>
            <p className="font-bold my-2">
              <Link className="text-primary ">INTERVIEWS .</Link>{" "}
              <span className="font-normal">16 min read</span>
            </p>
          </div>

          <div className="my-8">
            <h3 className="my-2 text-xl font-bold text-secondary cursor-pointer">
              Frequently Asked Communications..
            </h3>
            <p>
              Preparing for a job interview for a corporate communication
              specialist..
            </p>
            <p className="font-bold my-2">
              <Link className="text-primary ">INTERVIEWS .</Link>{" "}
              <span className="font-normal">13 min read</span>
            </p>
          </div>

          <div>
            <h3 className="my-2 text-xl font-bold text-secondary cursor-pointer">
              Answers: What Does Goods Customer Service..
            </h3>
            <p>
              If you are applying for a customer service position, you will
              likely be..
            </p>
            <p className="font-bold my-2">
              <Link className="text-primary ">INTERVIEWS .</Link>{" "}
              <span className="font-normal">8 min read</span>
            </p>
          </div>
        </div>

        <div>
          <div>
            <h3 className="my-2 text-xl font-bold text-secondary cursor-pointer">
              How Would You Describe Yourself as a Team..
            </h3>
            <p>
              Questions like ‘How would you describe yourself in terms of your..
            </p>
            <p className="font-bold my-2">
              <Link className="text-primary ">INTERVIEWS .</Link>{" "}
              <span className="font-normal">7 min read</span>
            </p>
          </div>

          <div className="my-8">
            <h3 className="my-2 text-xl font-bold text-secondary cursor-pointer">
              Interview Question: Why Do You Think You Are..
            </h3>
            <p>
              “Why do you think you are qualified for this position,” is a
              common..
            </p>
            <p className="font-bold my-2">
              <Link className="text-primary">INTERVIEWS .</Link>{" "}
              <span className="font-normal">8 min read</span>
            </p>
          </div>

          <div>
            <h3 className="my-2 text-xl font-bold text-secondary cursor-pointer">
              Example Answers: "What is Your Educational..
            </h3>
            <p>
              Interviews often give skilled recruiters the opportunity to hint
              at the answer..
            </p>
            <p className="font-bold my-2">
              <Link className="text-primary ">INTERVIEWS .</Link>{" "}
              <span className="font-normal">4 min read</span>
            </p>
          </div>
        </div>

        <div className="bg-[#d1fae5] p-8 text-center rounded-tl-[60px] rounded-br-[60px]">
          <img src={interviewImg} alt="" className="mx-auto mb-4" />
          <h3 className="text-3xl font-bold  mt-2">
            Build the perfect resume for the job you want.
          </h3>
          <p className=" my-2">
            Our free-to-use resume builder will help you easily create the
            perfect resume.
          </p>
          <div className=" mt-20">
            <Link to={`/predefined-templates`}>
              <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-2 px-4 rounded-full text-lg lg:text-xl font-semibold shadow-lg transform transition duration-500 hover:scale-105">
                Resume Builder
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewsResources;
