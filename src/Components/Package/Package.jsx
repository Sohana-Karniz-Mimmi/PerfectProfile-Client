// import './package.css'
import priceImg from "../../assets/price.png";
import { SiTicktick } from "react-icons/si";
import Container from "../../Shared/Container";

const Package = () => {
  return (
    <Container className="">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:py-16 py-10 ">
        <div className="flex-grow space-y-7">
          <h1 className="text-5xl font-bold">OUR PRICING</h1>
          <p>
           In PerfectProfile,  users can choose from flexible plans that provide full access to
            professional templates, real-time editing, cover letter builders,
            and additional advanced features. Whether opting for the monthly
            plan for short-term needs or the yearly plan to save 20%, users can
            easily create, optimize, and track their resumes with premium tools
            designed for success.
          </p>

          <a href="#_" class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-blue-50 text-blue-600 inline-block">
<span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"></span>
<span class="relative group-hover:text-white font-semibold">SIGNUP NOW</span>
</a>
          
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* standard */}
          <div className="card bg-base-100 w-[21rem] lg:w-96 shadow-xl transition-transform duration-300 hover:scale-105">
            <div className="flex justify-end relative">
              <figure>
                <img src={priceImg} alt="price" />
              </figure>
            </div>

            <div className="absolute top-6 right-10 flex flex-col  items-end">
              <p className="font-bold text-white text-5xl">$9.99</p>
              <p className="bg-gradient-to-br from-cyan-300 to-cyan-300 text-transparent bg-clip-text font-bold text-xl">
                /month
              </p>
            </div>

            <div className="card-body">
              <h2 className="font-bold text-3xl text-blue-950 mb-2">
                Monthly Pack
              </h2>
              <div>
                <p className=" mb-3">
                  Unlock all premium features with our affordable monthly
                  package. Build, customize, and optimize your resume
                  effortlessly to stand out from the competition!
                </p>
                <ul>
                  <li className="font-medium text-blue-900 flex items-baseline gap-2">
                    <SiTicktick className="mt-1" />
                    <span>Unlimited access to professional templates</span>
                  </li>
                  <li className="font-medium text-blue-900 flex items-center gap-2">
                    <SiTicktick />
                    Real time editing
                  </li>
                  <li className="font-medium text-blue-900 flex items-center gap-2">
                    <SiTicktick />
                    Cover Letter builder
                  </li>
                  <li className="font-medium text-blue-900 flex items-center gap-2">
                    <SiTicktick />
                    Resume tracking and more
                  </li>
                </ul>
              </div>
              <div className="card-actions justify-center mt-4">
                <a href="#_" class="relative inline-block text-lg group">
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-blue-600 transition-colors duration-300 ease-out border-2 border-blue-500 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-500 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Get Started</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
          {/* premium */}
          <div className="card bg-base-100 w-[21rem] lg:w-96 shadow-xl transition-transform duration-300 hover:scale-105">
            <div className="flex justify-end relative">
              <figure>
                <img src={priceImg} alt="price" />
              </figure>
            </div>

            <div className="absolute top-6 right-10 flex flex-col  items-end">
              <p className="font-bold text-white text-5xl">$7.99</p>
              <p className="bg-gradient-to-br from-cyan-300 to-cyan-300 text-transparent bg-clip-text font-bold text-xl">
                /month
              </p>
            </div>

            <div className="card-body">
              <div className="flex justify-center items-center lg:gap-16 gap-5 ">
                <h2 className="font-bold text-3xl text-blue-950 mb-2">
                  Yearly Pack
                </h2>
                <p className=" px-3 py-1  text-blue-500 bg-blue-100 rounded-full  font-medium">
                  save 20%
                </p>
              </div>
              <div>
                <p className=" mb-3">
                  Enjoy all premium features while saving 20%! Get unlimited
                  access to professional templates, real-time editing, cloud
                  storage, cover letter builder, and more for a full year—at a
                  discounted price!
                </p>
                <ul>
                  <li className="font-medium text-blue-900 flex items-baseline gap-2">
                    <SiTicktick className="mt-1" />
                    <span>Integrate AI-driven recommendations</span>
                  </li>
                  <li className="font-medium text-blue-900 flex items-baseline gap-2">
                    <SiTicktick className="mt-1" />
                    <span>Add link portfolios directly in the resume</span>
                  </li>
                  <li className="font-medium text-blue-900 flex items-baseline gap-2">
                    <SiTicktick className="mt-1" />
                    <span>Get feedback from experts</span>
                  </li>
                  <li className="font-medium  text-blue-900 flex items-baseline gap-2">
                    <SiTicktick className=" mt-1" />
                    <span>Custom sections and many more</span>
                  </li>
                </ul>
              </div>
              <div className="card-actions justify-center mt-4">
                <a href="#_" class="relative inline-block text-lg group">
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-blue-600 transition-colors duration-300 ease-out border-2 border-blue-500 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-500 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Get Started</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Package;
