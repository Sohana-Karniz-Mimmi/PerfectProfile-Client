import { useQuery } from "@tanstack/react-query";
import Container from "../../../Shared/Container";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import UserDataRow from "../../AdminDashboard/UserDataRow";
import { useEffect, useState } from "react";

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
//     const [count, setCount] = useState([]);

// useEffect(() => {
//     const getCount = async () => {
//       const { data } = await axiosPublic(`/user`
//       );

//       setCount(data.count);
//     };
//     getCount();
//   }, []);



    return (
        <Container>
            <h1>Pending Requests</h1>

            {/* table */}

            <div className="flex flex-col mt-6  ">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Name</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Email</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Number</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Specialization</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Experience</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Resume</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Action</span>
                      </div>
                    </th>





                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  { data
                  .filter( emp =>emp.request === "pending")
                  .map((emp) => (
                    <tr key={emp._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {emp.name}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {emp.email}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {emp.number}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {emp.expertise}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {emp.experience}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                       <a href= {emp.resume}>resume</a>
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