import svg1 from "../../assets/StepsOfResume/1.svg";
import svg2 from "../../assets/StepsOfResume/3.svg";
import svg3 from "../../assets/StepsOfResume/4.svg";
import svg4 from "../../assets/StepsOfResume/5.svg";
import Container from "../../Shared/Container";
import Marquee from "react-fast-marquee";
import Headline from "./Headline";

const StepsOfResume = () => {
  return (
    <div className="px-4 py-8 sm:px-6 md:px-12 lg:px-16 xl:px-24">
      {/* Header Section */}
      <div className="text-center mt-12">
        <p className="text-primary my-4 text-sm sm:text-base md:text-lg btn">
          How it Works
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-montserrat text-black font-bold">
          Easy Steps To Build Your Resume
        </h1>
      </div>

      {/* Marquee Section */}

      {/* Card Section */}
      <Container>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center">
          {/* Step 1 */}
          <div className="text-center hover:scale-105 transition-transform duration-300 bg-white p-5 hover:shadow-xl">
            <div className="flex justify-center ">
              <img
                className="border bg-white rounded-lg p-4 shadow-lg mb-4"
                src={svg1}
                alt="Step 1"
              />
              {/* <Marquee direction="right" className="mt-8">
                <Headline />
              </Marquee> */}
            </div>
            <p className="text-base md:text-lg">
              Step Num <span className="text-primary">#1</span>
            </p>
            <h3 className="mt-2 text-lg md:text-2xl text-primary">
              Create Your Account
            </h3>
          </div>

          {/* Step 2 */}
          <div className="text-center hover:scale-105 transition-transform duration-300 bg-white p-5 hover:shadow-xl">
            <div className="flex justify-center">
              <img
                className="border bg-white rounded-lg p-4 shadow-lg mb-4"
                src={svg2}
                alt="Step 2"
              />
              {/* <Marquee direction="right" className="mt-8">
                <Headline />
              </Marquee> */}
            </div>
            <p className="text-base md:text-lg">
              Step Num <span className="text-primary">#2</span>
            </p>
            <h3 className="mt-2 text-lg md:text-2xl text-primary">
              Choose Your Resume
            </h3>
          </div>

          {/* Step 3 */}
          <div className="text-center hover:scale-105 transition-transform duration-300 bg-white p-5 hover:shadow-xl">
            <div className="flex justify-center ">
              <img
                className="border bg-white rounded-lg p-4 shadow-lg mb-4"
                src={svg3}
                alt="Step 3"
              />
              {/* <Marquee direction="right" className="mt-8">
                <Headline />
              </Marquee> */}
            </div>
            <p className="text-base md:text-lg">
              Step Num <span className="text-primary">#3</span>
            </p>
            <h3 className="mt-2 text-lg md:text-2xl text-primary">
              Add Your Information
            </h3>
          </div>

          {/* Step 4 */}
          <div className="text-center hover:scale-105 transition-transform duration-300 bg-white p-5 hover:shadow-xl">
            <div className="flex justify-center ">
              <img
                className="border bg-white rounded-lg p-4 shadow-lg mb-4"
                src={svg4}
                alt="Step 4"
              />
            </div>
            <p className="text-base md:text-lg">
              Step Num <span className="text-primary">#4</span>
            </p>
            <h3 className="mt-2 text-lg md:text-2xl text-primary">
              Download Your Resume
            </h3>
          </div>
        </div>
      </Container>

      {/* Marquee Section at the Bottom */}
    </div>
  );
};

export default StepsOfResume;
