import Container from "../../Shared/Container";
import ConsultationBanner from "./ConsultationBanner";
import FAQ from "./FAQ";
import HowWorks from "./HowWorks";
import Team from "./Team";
import WhyNeedSection from "./WhyNeedSection";
import img from "../../assets/consultation/join-us.png";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Helmet } from "react-helmet-async";


const Consultation = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  let [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    console.log("h");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const expertise = form.expertise.value;
    const experience = form.experience.value;
    const resume = form.resume.value;
    console.log({ name, email, number, expertise, experience, resume });
    console.log("h");

    const consultantData = {
      name,
      email,
      number,
      experience,
      resume,
      expertise,
      requestedAt: new Date().toISOString().split("T")[0],
      request: "pending",
    };

    axiosPublic
      .put(`/consultant-info/user/${user?.email}`, consultantData)
      .then((res) => {
        console.log(res.data);
        toast.success(
          "Your consultant application has been submitted! We’ll be in touch soon!"
        );
      });
  };

  const handleShowLogin = () => {
    toast.error("You have to login first");
    document.getElementById("my_modal_3").showModal();
  };

  return (
   <div>
    <Helmet>
        <title>Consultation - PerfectProfile</title>
      </Helmet>
     <Container>
      {/* banner */}
      <ConsultationBanner></ConsultationBanner>
      <WhyNeedSection></WhyNeedSection>
      </Container>
      <Team handleShowLogin={handleShowLogin}></Team>
      <Container>
        <HowWorks></HowWorks>
        <FAQ></FAQ>

        {/* join as consultant */}
        
        <div className="flex flex-col gap-3 md:gap-16 lg:flex-row justify-between items-center px-2 lg:px-9 py-8 mb-0 lg:mb-9 h-[35rem] md:h-[46rem] lg:h-[23rem] mt-6 rounded-lg bg-cyan-50">
          <div className="px-2 ">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl font-lora">
              Join Us as a Consultant – Empowering Growth Together
            </h1>
            <p className="            text-gray-500 text-sm md:text-[15px] lg:text-base xl:w-[44rem] lg:w-[35rem] md:w-[37rem] font-montserrat mt-4
">
              Are you ready to make a meaningful impact and elevate your
              expertise? As a Resume Consultant at PerfectProfile, you’ll
              transform how individuals present themselves to employers by
              high-quality resumes. Your guidance will empower job seekers to
              highlight their strengths, navigate career transitions in
              competitive markets. Join us in helping people achieve their
              career goals. Together, we’ll create lasting impact and open doors
              to new opportunities.
            </p>

            <div className="flex flex-col items-center mt-2  md:items-start  text-base  font-bold lg:font-semibold font-montserrat ">
              {user ? (
                <>
                  {" "}
                  <button
                    onClick={() => setIsOpen(true)}
                    className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-2 px-4 capitalize  lg:text-base font-semibold shadow-lg transform transition duration-500 font-montserrat hover:scale-105 mt-5  mb-10 lg:mb-0 "
                  >
                    become a consultant
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleShowLogin}
                    className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-2 px-4  uppercase lg:text-base font-semibold shadow-lg transform transition duration-500 hover:scale-105 mt-5 font-montserrat  mb-10 lg:mb-0 "
                  >
                    Become a Consultant
                  </button>
                </>
              )}

              <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50 w-[30rem] "
              >
                <div className="fixed inset-0 w-screen overflow-y-auto p-4">
                  <div className="flex min-h-full items-center justify-center">
                    <DialogPanel className="max-w-3xl w-full space-y-4 border bg-white p-5 md:p-12">
                      {/* Close Icon */}
                      <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-24 right-[394px] bg-gray-100  text-gray-500 hover:text-white hover:bg-black hover:bg-opacity-50 p-1 rounded-full transition duration-300 "
                      >
                        <IoMdClose className="text-2xl " />
                      </button>
                      <DialogTitle className="font-bold text-3xl text-center ">
                        Application Form
                      </DialogTitle>
                      <form
                        onSubmit={handleSubmit}
                        className="w-full mt-6 flex flex-col gap-3"
                      >
                        <div className=" flex items-center justify-between">
                          {/* 1st row */}
                          <div className="flex flex-col items-start justify-start gap-4">
                            {/* basic info */}
                            <h1 className="mt-5 mb-1 font-semibold text-xl">
                              Personal Information :
                            </h1>

                            <div className="space-y-4">
                              <div className="relative">
                                <label
                                  htmlFor="text"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Name
                                </label>
                                <input
                                  type="text"
                                  name="name"
                                  value={user?.displayName}
                                  placeholder="Enter your name"
                                  required
                                  className="mt-1 block w-full md:w-[320px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                />
                              </div>
                              <div className="relative">
                                <label
                                  htmlFor="email"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  value={user?.email}
                                  id="email"
                                  placeholder="Enter your email"
                                  required
                                  className="mt-1 block w-full md:w-[320px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                />
                              </div>
                              {/* phone */}
                              <div className="relative">
                                <label
                                  htmlFor="number"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Phone Number
                                </label>
                                <input
                                  type="number"
                                  name="number"
                                  id="number"
                                  placeholder="Enter your Phone Number"
                                  required
                                  className="mt-1 block w-full md:w-[320px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                />
                              </div>
                            </div>
                          </div>

                          {/* qualification and experience */}
                          <div>
                            <h1 className="mb-5 mt-5 text-xl font-semibold">
                              Qualifications & Experience:
                            </h1>
                            <div className="space-y-4">
                              {/* 1st row */}
                              <div className="flex flex-col justify-start items-start gap-4">
                                {/* 1 */}
                                <div className="relative">
                                  <label
                                    htmlFor="expertise"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Area of Expertise
                                  </label>
                                  <select
                                    name="expertise"
                                    id="expertise"
                                    required
                                    className="mt-1 block w-full md:w-[320px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm "
                                  >
                                    <option value="">Select Area</option>
                                    <option value="Technical">Technical</option>
                                    <option value="Non-Technical">
                                      Non-Technical
                                    </option>
                                  </select>
                                </div>

                                {/* 2 */}
                                <div className="relative">
                                  <label
                                    htmlFor="experience"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Years of Experience
                                  </label>
                                  <select
                                    name="experience"
                                    id="experience"
                                    required
                                    className="mt-1 block w-full md:w-[320px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm "
                                  >
                                    <option value="">Select Experience</option>
                                    <option value="0-1">0 - 1 year</option>
                                    <option value="1-2">1 - 2 years</option>
                                    <option value="2-3">2 - 3 years</option>
                                    <option value="3-4">3 - 4 years</option>
                                    <option value="4-5">4 - 5 years</option>
                                    <option value="5+">5+ years</option>
                                  </select>
                                </div>

                                {/* 3 */}
                                <div className="relative">
                                  <label
                                    htmlFor="resume"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Resume
                                  </label>
                                  <input
                                    type="url"
                                    name="resume"
                                    placeholder="Please Provide Resume Link"
                                    required
                                    className="mt-1 block w-full md:w-[320px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex items-center justify-center">
                          <button
                            type="submit"
                            className="py-2 font-bold rounded-md w-80 bg-secondary text-white hover:bg-transparent border hover:text-primary hover:border hover:border-primary"
                          >
                            Submit Application
                          </button>
                        </div>
                      </form>
                    </DialogPanel>
                  </div>
                </div>
              </Dialog>
            </div>
          </div>

          <div className="flex relative item-center justify-center">
            <img
              className="lg:h-[19rem] h-56 w-72 hidden md:block  lg:w-[24rem] rounded-lg"
              src={img}
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Consultation;
