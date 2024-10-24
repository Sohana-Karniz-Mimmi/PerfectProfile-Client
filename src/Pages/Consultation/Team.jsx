import { useState } from "react";
import BookingForm from "./BookingForm";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import useAuth from "../../Hook/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import TeamProfile from "./TeamProfile";
import { useQuery } from "@tanstack/react-query";


const Team = () => {
    const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  let [isOpen, setIsOpen] = useState(false)

  const {data =[], refetch} = useQuery({
    queryKey : ["data"],
    queryFn : async()=>{
      const res = await axiosPublic(`/user`)
      return res.data
    }
  })

  const consultants = data.filter(user => user?.role === "consultant")
console.log(consultants);
  const handleSubmit = async (e) => {
    console.log("h")
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
    console.log({ name, email, number, currentJob, currentIndustry,desiredJob, desiredIndustry, consultant, resume }); 
  

    const bookingData = {
        name, email, number, currentJob, currentIndustry,desiredJob, desiredIndustry, consultant, resume,  
        bookingRequestedAt: new Date().toISOString().split("T")[0],
        // bookingRequest : "pending"
        
      };

 
        //  axiosPublic.put(`/consultant-info/user/${user?.email}`, consultantData)
        // .then(res => {
        //     console.log(res.data);
        //   document.getElementById("consultant_modal").close();
        //     toast.success("Your consultant application has been submitted! We’ll be in touch soon!");
        //   });
     
 
  };

    return (
        <div id="session-booking">
             <h1 className="font-bold lg:text-4xl mt-28 text-3xl text-center ">Meet Our Consultant To Review Resume</h1>


             <TeamProfile consultants={consultants}></TeamProfile>
       


             <div className="flex flex-col  items-start  text-base  font-bold lg:font-semibold">
            
            <button
               onClick={() => setIsOpen(true)} 
              className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-2 px-4  uppercase lg:text-base font-semibold shadow-lg transform transition duration-500 hover:scale-105 mt-5  mb-10 lg:mb-0 "
            >
              Book A session
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 ">
              <div className=" fixed inset-0 w-screen overflow-y-auto p-4">
               <div className="flex min-h-full items-center justify-center">
               <DialogPanel className=" max-w-lg space-y-4 border bg-white p-12">
               <DialogTitle className="font-bold text-2xl text-center">Session Booking Form</DialogTitle>
               <BookingForm handleSubmit={handleSubmit} user={user}></BookingForm>
                
                </DialogPanel>
               </div>
              </div>
            </Dialog>


         
         
        </div>


        </div>
    );
};

export default Team;