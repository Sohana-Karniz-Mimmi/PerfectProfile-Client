import { useState } from "react";
import BookingForm from "./BookingForm";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import useAuth from "../../Hook/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import TeamProfile from "./TeamProfile";
import { useQuery } from "@tanstack/react-query";

const Team = ({ handleShowLogin }) => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  let [isOpen, setIsOpen] = useState(false);

  const { data = [], refetch } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await axiosPublic(`/user`);
      return res.data;
    },
  });

  const consultants = data.filter((user) => user?.role === "consultant");
  console.log(consultants);
  const handleSubmit = async (e) => {
    console.log("h");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const currentJob = form.currentJob.value;
    const currentIndustry = form.currentIndustry.value;
    const desiredJob = form.desiredJob.value;
    const desiredIndustry = form.desiredIndustry.value;
    const consultant = form.consultant.value;
    const resume = form.resume.value;
    console.log({
      name,
      email,
      number,
      currentJob,
      currentIndustry,
      desiredJob,
      desiredIndustry,
      consultant,
      resume,
    });

    const bookingData = {
      name,
      email,
      number,
      currentJob,
      currentIndustry,
      desiredJob,
      desiredIndustry,
      consultant,
      resume,
      bookingRequestedAt: new Date().toISOString().split("T")[0],
      // bookingRequest : "pending"
    };

    axiosPublic
      .put(`/consultant-info/user/${user?.email}`, consultantData)
      .then((res) => {
        console.log(res.data);
        document.getElementById("consultant_modal").close();
        toast.success(
          "Your consultant application has been submitted! We’ll be in touch soon!"
        );
      });
  };

  return (
    <div id="session">
      <h1 className="font-bold font-lora lg:text-4xl mt-10 md:mt-24 md:text-3xl text-2xl text-center ">
        Meet Our Consultant To Review Resume
      </h1>

      <TeamProfile
        consultants={consultants}
        handleShowLogin={handleShowLogin}
      ></TeamProfile>

      <div className="flex flex-col  items-start  text-base  font-bold lg:font-semibold"></div>
    </div>
  );
};

export default Team;
