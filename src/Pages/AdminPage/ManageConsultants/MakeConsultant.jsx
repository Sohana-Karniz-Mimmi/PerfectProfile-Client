import { useQuery } from "@tanstack/react-query";
import Container from "../../../Shared/Container";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import UserDataRow from "../../AdminDashboard/UserDataRow";
import { useEffect, useState } from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";

const MakeConsultant = () => {
    const axiosPublic = useAxiosPublic()
 

    const {data =[], refetch} = useQuery({
        queryKey: ["data"],
        queryFn : async()=>{
            const res = await axiosPublic.get(`/user`)
            return res.data
        }
    
    })
    console.log(data)

    // make consultant
    const handleRoleChange = async (user) => {
     
         await axiosPublic.patch(`/user/make-consultant/${user?._id}`, user)
         .then(res =>{
          toast.success("User is a consultant now")
          refetch()

         })
         
    };

    const handleDelete = (user) => {
      console.log(user)
      Swal.fire({
        title: "Are you sure?",
        text: `You won't be able to revert this!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Remove`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await axiosPublic.patch(`/user/${user?._id}`, user);
            if (res.status === 200) {
              Swal.fire({
                title: "Success!",
                text: "Request field removed successfully.",
                icon: "success",
              });
            }
            refetch()
          } catch (error) {
            Swal.fire({
              title: "Error!",
              text: "Failed to remove request field.",
              icon: "error",
            });
          }
        }
      });
    };
    



    return (
        <Container>
            <h1 className="text-center mb-16 font-lora text-4xl text-primary font-bold">Pending Requests</h1>

            {/* table */}

            <div className="flex flex-col mt-8 ">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-xl font-bold text-left rtl:text-right "
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Name</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 px-3 text-xl font-bold text-left rtl:text-right "
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Email</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-xl font-bold text-left rtl:text-right "
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Number</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-xl font-bold text-left rtl:text-right "
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Specialization</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-xl font-bold text-left rtl:text-right "
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Experience</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-xl font-bold text-left rtl:text-right "
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Resume</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-5  text-left rtl:text-right"
                    >
                      <div className="flex text-xl font-bold items-center gap-x-3">
                        <span>Action</span>
                      </div>
                    </th>





                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  { data
                  .filter( user =>user.role === "consultant")
                  .map((user) => (
                    <tr key={user._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {user.name}
                      </td>

                      <td className="px-3 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {user.email}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {user.number}
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {user.expertise}
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {user.experience}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                       <a className="underline text-blue-950" href= {user.resume}>View Resume</a>
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500  whitespace-nowrap">
                       <div className="flex item-center justify-between pr-6 gap-2">
                        <button onClick={() => handleRoleChange(user)}>
                        <IoPersonAddOutline className="text-primary text-2xl font-extrabold"/>
                        </button>
                        <button onClick={() => handleDelete(user)}>
                        <RiDeleteBin6Line className="text-red-500 text-2xl font-bold"/>
                        </button>
                       </div>
                      </td>
                      
                    </tr>
                  ))}
                 
                </tbody> 
              </table>
            </div>
          </div>
        </div>
      </div>






       
        </Container>
    );
};

export default MakeConsultant;