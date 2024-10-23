import { useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hook/useAxiosPublic";

const AddConsultant = () => {


//   const [photoName, setPhotoName] = useState(null);
//   const [photoPreview, setPhotoPreview] = useState(null);

//   const handlePhotoChange = (event) => {
//     const file = event.target.files[0];
//     setPhotoName(file.name);

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       setPhotoPreview(e.target.result);
//     };
//     reader.readAsDataURL(file);
//   };
const axiosPublic = useAxiosPublic()
const handleSubmit = async(e)=>{
    e.preventDefault()
    const form = e.target
    const name = form.consultantName.value
    const email = form.consultantEmail.value
    const number = form.consultantNumber.value
    const address = form.consultantAddress.value
    const expertise = form.expertise.value;
    const employmentType = form.employmentType.value

    const consultantData = {name, email, number, address, expertise, employmentType,
        addedAt : new Date().toISOString().split("T")[0],
        role : "consultant"
    }

    axiosPublic.post(`/consultant-info`, consultantData)
    .then(res =>{
        console.log(res.data)
        toast.success("Consultant information added successfully")
    })
}

// get all the consultant data

const {data =[], refetch} = useQuery({
    queryKey: ["data"],
    queryFn : async()=>{
        const res = await axiosPublic.get(`/consultant-info`)
        return res.data
    }

})
console.log(data)

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-16 mb-16">Add Consultant</h1>

      <form onSubmit={handleSubmit}
      class="max-w-md mx-auto">
       

       <div>
        <div>
            <h1 className="font-semibold mb-5">Basic Information</h1>
        </div>
       <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="consultantName"
           
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
           
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="consultantEmail"
           
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
           
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="consultantNumber"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone Number
          </label>
        </div>

        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="consultantAddress"
            id="floating_repeat_password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            
          />
          <label
            for="floating_repeat_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
             Address
          </label>
        </div>
       </div>
       


<div>
 <div>
    <h1 className="font-semibold mt-9 mb-5">Professional Details</h1>
 </div>

 <div>
 <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="expertise"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
            />
            <label

              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Expertise
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
    <select
      name="employmentType"
      class="block appearance-none py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-primary peer"
      required
    >
        <option value="full-time">Full-time</option>
        <option value="part-time">Part-time</option>
    </select>
    <label
      for="employment_type"
      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Employment Type
    </label>
    {/*  Dropdown Icon  */}
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    </div>
</div>

        </div>




 </div>




</div>


        
        <button
          type="submit"
          class="text-white bg-primary hover:bg-cyan-400 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-medium rounded-lg  w-full text-base  py-2.5 text-center "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddConsultant;
