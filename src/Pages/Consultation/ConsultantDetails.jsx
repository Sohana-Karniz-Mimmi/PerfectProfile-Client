import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import useAuth from "../../Hook/useAuth";
import img from "../../assets/consultation/profile.png";
import CheckoutForm from "../../Components/Payment/CheckoutForm";
import useRole from "../../Hook/useRole";

const ConsultantDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [role]= useRole()
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen2nd, set2ndIsOpen] = useState(false);

  const { id } = useParams();
  const [userData, setUserData] = useState();

  const { data: consultant = {}, refetch } = useQuery({
    queryKey: ["consultant", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/consultant/consultant-details/${id}`);
      return res.data;
    },
  });
  console.log(consultant);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axiosPublic(`/user/${user?.email}`);

      setUserData(data);
    };
    getUser();
  }, [user?.email]);

  console.log(userData);
  const {
    image,
    about,
    facebook,
    twitter,
    linkdin,
    name,
    email,
    experience,
    expertise,
    workExperience,
  } = consultant;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const resumeType = form.resumeType.value;
    const consultant = name;
    const consultantEmail = email;
    const resume = form.resume.value;
    console.log({ name, email, number, resumeType, consultant, resume });

    const bookingData = {
      name,
      email,
      number,
      resumeType,
      consultant,
      consultantEmail,
      resume,
      bookingRequestedAt: new Date().toISOString().split("T")[0],
      bookingRequest: "pending",
    };

    axiosPublic
      .put(`/booking-info/user/${user?.email}`, bookingData)
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
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-start gap-6   mt-8 ">
          <div className="w-80  h-[28rem] ">
            <div className=" p-[2px] bg-gradient-to-r from-[#00FFB2] via-[#00ffff] to-[#4b93f8] h-[28rem] rounded-xl shadow-lg ">
              <div className="flex bg-white h-[444px] rounded-lg flex-col items-center">
                <img
                  src={image || img}
                  alt="Profile"
                  className="w-48 mt-6 h-48 bg-gray-300 rounded-full mb-4 shrink-0"
                />
                <h1 className="text-xl font-lora font-bold">{name}</h1>
                <p className="text-gray-700 font-lora font-semibold mt-2">
                  Resume Consultant
                </p>

                {/* socials */}
                <div className="mb-2 mt-4 text-blueGray-600 flex item-center justify-center">
                  {/* social */}
                  <Link
                    to={facebook}
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-black hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3  dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      className="fill-current"
                    >
                      <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                    </svg>
                  </Link>
                  <Link
                    to={twitter}
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-black hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3  dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                    </svg>
                  </Link>
                  <Link
                    to={linkdin}
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-black hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3  dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="fill-current"
                    >
                      <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-2 flex flex-wrap gap-4 justify-center">
                  {role?.productName === "premium" ||
                  role?.productName === "standard" ? (
                    <>
                      <button
                        onClick={() => setIsOpen(true)}
                        className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-2 px-4 capitalize font-montserrat  lg:text-base font-semibold shadow-lg transform transition duration-500 hover:scale-105 mt-3 flex justify-center items-center mx-auto mb-10 lg:mb-7 "
                      >
                        Book A Session
                      </button>

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
                              <DialogTitle className="font-bold font-lora text-3xl text-center ">
                                Booking Form
                              </DialogTitle>
                              <form
                                onSubmit={handleSubmit}
                                className="w-full mt-6 flex flex-col gap-3"
                              >
                                <div className=" flex items-center justify-between">
                                  {/* 1st row */}
                                  <div className="flex flex-col items-start justify-start gap-4">
                                    {/* basic info */}
                                    <h1 className="mt-5 mb-1 font-lora font-semibold text-xl">
                                      Personal Information :
                                    </h1>

                                    <div className="space-y-4 font-montserrat">
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
                                          className="mt-1 capitalize block w-full md:w-[320px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
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
                                          type="text"
                                          name="number"
                                          id="number"
                                          placeholder="Enter your Phone Number"
                                          required
                                          className="mt-1 block w-full md:w-[320px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  {/* Career Information & Goal */}
                                  <div>
                                    <h1 className="mb-5 font-lora mt-5 text-xl font-semibold">
                                      Career Information & Goal:
                                    </h1>
                                    <div className="space-y-4 font-montserrat">
                                      {/* 1st row */}
                                      <div className="flex flex-col justify-start items-start gap-4">
                                        <div className="relative">
                                          <label
                                            htmlFor="text"
                                            className="block text-sm font-medium text-gray-700"
                                          >
                                            Resume Type
                                          </label>
                                          <input
                                            type="text"
                                            name="resumeType"
                                            placeholder="e.g., Web Developer, Graphic Designer, Software Engineer"
                                            required
                                            className="mt-1 capitalize block w-full md:w-[320px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                          />
                                        </div>
                                        {/* 2nd */}
                                        <div className="relative">
                                          <label
                                            htmlFor="text"
                                            className="block text-sm font-medium text-gray-700"
                                          >
                                            Current Resume Link (If Applicable)
                                          </label>
                                          <input
                                            type="url"
                                            name="resume"
                                            placeholder="Please Provide Resume Link"
                                            className="mt-1 block w-full md:w-[320px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                          />
                                        </div>

                                        <div className="font-lora text-xl flex justify-start items-center gap-2 font-medium mt-2">
                                          <h1>Consultant :</h1>
                                          <p className="font-medium text-xl">
                                            {name}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="mt-6 flex items-center justify-center">
                                  <button
                                    type="submit"
                                    onClick={() => setIsOpen(false)}
                                    className="py-2 font-bold rounded-md w-80 bg-secondary text-white hover:bg-transparent border hover:text-primary hover:border hover:border-primary font-montserrat"
                                  >
                                    Submit Application
                                  </button>
                                </div>
                              </form>
                            </DialogPanel>
                          </div>
                        </div>
                      </Dialog>
                    </>
                  ) : (
                    <>
                      {" "}
                      <button
                        onClick={() => set2ndIsOpen(true)}
                        className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-2 px-4 font-lora capitalize lg:text-base font-semibold shadow-lg transform transition duration-500 hover:scale-105 mt-4 flex justify-center items-center mx-auto mb-10 lg:mb-7 "
                      >
                        Book A session
                      </button>
                      <Dialog
                        open={isOpen2nd}
                        onClose={() => set2ndIsOpen(false)}
                        className="relative z-50"
                      >
                        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black bg-opacity-50 ">
                          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                            <CheckoutForm></CheckoutForm>
                          </DialogPanel>
                        </div>
                      </Dialog>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[55rem] min-h-[28rem] bg-gradient-to-r from-[#00FFB2] via-[#00ffff] to-[#4b93f8] p-[2px] rounded-lg shadow-lg ">
            <div className="bg-white shadow-lg rounded-lg  min-h-[444px] ">
             <div className="px-10 py-5">
             <h2 className="text-xl font-bold font-lora  mb-4 ">
                {about && " About Me"}
              </h2>
              <p className="text-gray-700  font-montserrat">{about}</p>
              <div className="flex items-center gap-3 mt-4 justify-start  mb-4  ">
                <p className="text-xl font-bold font-lora  ">Email :</p>
                <p className="text-gray-700 font-montserrat">{email}</p>
              </div>

              <h2 className="text-xl font-bold font-lora mt-5 mb-4 ">
                {workExperience && "Experience"}
              </h2>
              {workExperience?.map((exp, index) => (
                <div key={index} className="mb-6 mt-3 ">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-lora font-bold">
                      {exp.jobTitle}
                    </span>
                    <p className="font-montserrat">
                      at
                      <span className="text-gray-700 mr-2 font-montserrat ml-2">
                        {exp.company}
                      </span>
                    </p>
                  </div>
                  <p className="mt-2 font-montserrat">{exp.jobRole}</p>
                </div>
              ))}
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantDetails;
