import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Container from "../../Shared/Container";
import useAxiosPublic from "../../Hook/useAxiosPublic";
const SessionRequest = () => {
  const axiosPublic = useAxiosPublic();

  const { data = [], refetch } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user`);
      return res.data;
    },
  });
  console.log(data);

  // Function to validate if the input is a URL
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  };

  // to see if the input is url
  const validateUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  };

  // make consultant
  const handleAccept = async (user) => {
    try {
      await axiosPublic
        .patch(`/accept-session/user/${user?._id}`, user)
        .then((res) => {
          if (res.status === 200) {
            toast.success(`Session is booked for ${user.name}`);
            refetch();
          }
        });
    } catch (error) {
      console.error("Error updating booking request:", error);
      toast.error("Failed to update user booking request");
    }
  };

  const handleRemove = (user) => {
    console.log(user);
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
          const res = await axiosPublic.patch(
            `/user/declined-session/${user?._id}`,
            user
          );
          if (res.status === 200) {
            Swal.fire({
              title: "Success!",
              text: "Session Requested Declined.",
              icon: "success",
            });
          }
          refetch();
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Failed to remove session request .",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-center mb-16 font-lora text-4xl text-primary font-bold">
        Session Requests
      </h1>

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
                      className="py-3.5 px-3 text-xl font-lora font-bold text-left rtl:text-right "
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Name</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 px-3 text-xl font-bold font-lora text-left rtl:text-right "
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Email</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-xl font-bold font-lora text-left rtl:text-right "
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Number</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-xl font-lora font-bold text-left rtl:text-right "
                    >
                      <div className="flex items-center font-lora gap-x-3">
                        <span>Resume Type</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-xl font-lora font-bold text-left rtl:text-right "
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Resume</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-xl font-lora font-bold text-left rtl:text-right "
                    >
                      <div className="flex items-center  font-lora gap-x-3">
                        <span>Requested At</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-xl font-lora font-bold text-left rtl:text-right "
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Status</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-5 font-lora  text-left rtl:text-right"
                    >
                      <div className="flex text-xl font-bold items-center gap-x-3">
                        <span>Action</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white font-montserrat divide-y divide-gray-200 ">
                  {data
                    .filter(
                      (user) =>
                        user.bookingRequest === "pending" ||
                        user.bookingRequest === "accepted" ||
                        user.bookingRequest === "rejected"
                    )
                    .map((user) => (
                      <tr key={user._id}>
                        <td className="px-3 py-4 text-sm text-gray-800  whitespace-nowrap capitalize">
                          {user.name}
                        </td>

                        <td className="px-3 py-4 text-sm text-gray-800  whitespace-nowrap">
                          {user.email}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-800  whitespace-nowrap">
                          {user.number}
                        </td>
                        <td className="px-3 py-3 text-sm text-gray-800  whitespace-nowrap">
                          {user.resumeType}
                        </td>
                        <td className="px-5 py-3 text-sm text-gray-800  whitespace-nowrap">
                          {user.resume && isValidUrl(user.resume) ? (
                            <a
                              href={user.resume}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-800 underline"
                            >
                              resume
                            </a>
                          ) : (
                            <p className="text-gray-800">Not provided</p>
                          )}
                        </td>
                        <td className="px-5 py-4 text-sm text-gray-800  whitespace-nowrap">
                          {user.bookingRequestedAt}
                        </td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <p
                              className={`px-3 py-1  ${user.bookingRequest ===
                                "pending" &&
                                "text-amber-500 bg-amber-100/60"} ${user.bookingRequest ===
                                "accepted" &&
                                "text-emerald-500 bg-emerald-100/60"} ${user.bookingRequest ===
                                "rejected" &&
                                "text-red-500 bg-red-100/60"}  text-xs  rounded-full`}
                            >
                              {user.bookingRequest}
                            </p>
                          </div>
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-800  whitespace-nowrap">
                          <div className="flex item-center justify-between  gap-5 pr-2">
                            <button onClick={() => handleAccept(user)}>
                              <IoPersonAddOutline className="text-primary text-2xl font-extrabold" />
                            </button>
                            <button onClick={() => handleRemove(user)}>
                              <RiDeleteBin6Line className="text-red-500 text-2xl font-bold" />
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
    </div>
  );
};

export default SessionRequest;
