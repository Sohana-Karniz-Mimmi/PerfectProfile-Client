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
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from "react";


const Consultation = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  console.log("h")
  let [isOpen, setIsOpen] = useState(false)


//   const handleConsultant = () => {
//     if (user) {
//       document.getElementById("consultant_modal").showModal();
//     } else {
//       toast.error("You have to login first");
//       document.getElementById("my_modal_3").showModal();
//     }
//   };

  const handleSubmit = async (e) => {
    console.log("h")
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const expertise = form.expertise.value;
    const experience = form.experience.value;
    const resume = form.resume.value;
    console.log({ name, email, number, expertise, experience, resume }); 
    console.log("h")

    const consultantData = {
        name,
        email,
        number,
        experience,
        resume,
        expertise,      
        requestedAt: new Date().toISOString().split("T")[0],
        
      };

 
         axiosPublic.put(`/consultant-info/user/${user?.email}`, consultantData)
        .then(res => {
            console.log(res.data);
          document.getElementById("consultant_modal").close();
            toast.success("Your consultant application has been submitted! We’ll be in touch soon!");
          });
     
 
  };

  const {data =[], refetch} = useQuery({
    queryKey: ["data"],
    queryFn : async()=>{
        const res = await axiosPublic.get(`/user/${user?.email}`)
        return res.data
    }

})
console.log(data)

  return (
    <Container>
      {/* banner */}
      <ConsultationBanner></ConsultationBanner>
      <WhyNeedSection></WhyNeedSection>
      <Team></Team>
      <HowWorks></HowWorks>
      <FAQ></FAQ>

      {/* join as consultant */}

      <div className="flex flex-col  lg:flex-row justify-between items-center px-2 lg:px-9 py-8 mb-9 lg:mb-7 h-[34rem] lg:h-[19rem] mt-6 rounded-lg bg-cyan-50">
        <div>
          <h1 className="font-bold text-4xl">
            Join Us as a Consultant – Empowering Growth Together
          </h1>
          <p className="text-gray-500 lg:w-[43rem] w-80 mt-5">
            Are you ready to make a meaningful impact and elevate your
            expertise? As a Resume Consultant at PerfectProfile, you’ll
            transform how individuals present themselves to employers by
            high-quality resumes. Your guidance will empower job seekers to
            highlight their strengths, navigate career transitions in
            competitive markets. Join us in helping people achieve their career
            goals. Together, we’ll create lasting impact and open doors to new
            opportunities.
          </p>

          <div className="flex flex-col  items-start  text-base  font-bold lg:font-semibold">
            
              <button
                 onClick={() => setIsOpen(true)} 
                className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-2 px-4  uppercase lg:text-base font-semibold shadow-lg transform transition duration-500 hover:scale-105 mt-5  mb-10 lg:mb-0 "
              >
                Become a Consultant
              </button>

              <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                  <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                  <form
                      onSubmit={handleSubmit}
                      className="w-full mt-6 flex flex-col gap-3"
                    >
                      {/* basic info */}
                      <h1 className="mt-2">Basic Information :</h1>
                      <div className="space-y-3">
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
                            defaultValue={user?.displayName}
                            placeholder="Enter your name"
                            required
                            className="mt-1 block w-[424px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
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
                            defaultValue={user?.email}
                            id="email"
                            placeholder="Enter your email"
                            required
                            className="mt-1 block w-[424px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                          />
                        </div>
                        {/* phone */}
                        <div className="relative">
                          <label
                            htmlFor="number"
                            className="block  text-sm font-medium text-gray-700"
                          >
                            Phone Number
                          </label>
                          <input
                            type="number"
                            name="number"
                            id="number"
                            placeholder="Enter your Phone Number"
                            required
                            className="mt-1 block w-[424px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                          />
                        </div>
                      </div>

                      {/* qualification and experience */}
                      <div>
                        <h1 className="mb-4 mt-4">
                          Qualifications & Experience:
                        </h1>
                        <div className="space-y-3">
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
                              className="mt-1 block w-[424px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm "
                            >
                              <option value="">Select Area</option>
                              <option value="technical">Technical</option>
                              <option value="nonTechnical">
                                Non-Technical
                              </option>
                            </select>
                          </div>

                          {/* 2 */}

                          <div className="relative">
                            <label
                              htmlFor="text"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Years of Experience
                            </label>
                            <select
                              name="experience"
                              id="experience"
                              className="mt-1 block w-[424px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm "
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
                              htmlFor="text"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Resume
                            </label>
                            <input
                              type="url"
                              name="resume"
                              placeholder="Please Provide Resume Link"
                              required
                              className="mt-1 block w-[424px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <button  type="submit"
                          
                          className="py-2 rounded-md w-full bg-secondary text-white hover:bg-transparent border hover:text-primary hover:border hover:border-primary ">
                            Submit

                        </button>
                      </div>
                    </form>
                  </DialogPanel>
                </div>
              </Dialog>


              {/* <dialog id="consultant_modal" className="modal">
                <div className="modal-box text-black bg-transparent !shadow-none relative h-full w-full font-montserrat">
                  <div className="bg-white h-[667px] md:h-[680px]  p-6 !overflow-hidden">
                    <div>
                      <h1 className="text-2xl text-center font-semibold">
                        Application Form
                      </h1>
                    </div>

                    
                  </div>
                  <button
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                    onClick={() =>
                      document.getElementById("consultant_modal").close()
                    }
                  >
                    ✕
                  </button>
                </div>
              </dialog> */}
           
          </div>
        </div>

        <div className="flex relative item-center justify-center">
          <img
            className="lg:h-[19rem] h-44 w-44 lg:w-[24rem] rounded-lg"
            src={img}
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Consultation;
