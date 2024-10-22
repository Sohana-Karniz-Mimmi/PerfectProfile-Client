import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { LiaTimesSolid } from "react-icons/lia";
import { FiEdit } from "react-icons/fi";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "./../../Hook/useAxiosSecure";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

/******** Templates **********/
import Template1 from "../../Components/AllTemplates/Template1";
// import Template2 from "../../Components/AllTemplates/Template2";
// import Template3 from "../../Components/AllTemplates/Template3";
// import Template4 from "../../Components/AllTemplates/Template4";
// import Template5 from "../../Components/AllTemplates/Template5";
// import Template6 from "../../Components/AllTemplates/Template6";
// import Template2, {ImageContext,} from "../../Components/AllTemplates/Template2";


const ManageResume = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user, loading } = useAuth();
  const queryClient = useQueryClient();
  // const [myResumeTemplates, setMyResumeTemplates] = useState([]);
  const [myResumeTemplate, setMyResumeTemplate] = useState(null);

  // useEffect(() => {
  //     const getData = async () => {
  //         const { data } = await axiosSecure(`/my-resume/${user?.email}`);
  //         setMyResumeTemplates(data);
  //     };
  //     getData();
  // }, [user?.email]);

  const { data: myResumeTemplates, isLoading, error } = useQuery({
    queryKey: ["myResume", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/my-resume/${user?.email}`);
      return data;
    },
    enabled: !!user?.email,
  });

  const deleteResumeMutation = useMutation({
    mutationFn: async (id) => {
      const response = await axiosPublic.delete(`/my-resume/${id}`);
      return response.data;
    },
    onSuccess: (data, variables) => {
      if (data.deletedCount > 0) {
        closeModal();
        queryClient.invalidateQueries(["myResume", user?.email]);
      }
    },
    onError: (error) => {
      console.error("There was an error deleting the resume", error);
      Swal.fire({
        title: "Error!",
        text: "There was an error deleting the resume.",
        icon: "error",
      });
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteResumeMutation.mutate(id); // Call mutate with the ID to delete
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleCheckboxChange = (e, templateId) => {
    if (e.target.checked) {
      setMyResumeTemplate(templateId);
    } else {
      setMyResumeTemplate(null);
    }
  };

  const closeModal = () => {
    setMyResumeTemplate(null);
  };

  // const handleDelete = (id) => {
  //     Swal.fire({
  //         title: "Are you sure?",
  //         text: "You won't be able to revert this!",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "Yes, delete it!"
  //     })
  //         .then((result) => {
  //             if (result.isConfirmed) {
  //                 axiosPublic.delete(`/my-resume/${id}`)
  //                     .then((response) => {
  //                         if (response.data.deletedCount > 0) {
  //                             closeModal();
  //                             Swal.fire({
  //                                 title: "Deleted!",
  //                                 text: "Your file has been deleted.",
  //                                 icon: "success"
  //                             });
  //                             setMyResumeTemplates(prevTemplates => prevTemplates.filter(template => template._id !== id));
  //                         }
  //                     })
  //                     .catch((error) => {
  //                         console.error("There was an error deleting the resume", error);
  //                         Swal.fire({
  //                             title: "Error!",
  //                             text: "There was an error deleting the resume.",
  //                             icon: "error"
  //                         });
  //                     });
  //             }
  //         });
  // };

  const handleFavorite = () => {
    toast.success("Added to the favorite");
  };

  if (isLoading) {
    <LoadingSpinner />;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8">Recent Designs</h1>

      {myResumeTemplates?.length === 0 && (
        <>
          <p className="mt-20 text-center font-bold text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            No Save Resume Template
          </p>
          <div className="  text-center mt-5 ">
            <Link
              to={`/predefined-templates`}
              class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span class="w-full h-full bg-gradient-to-br from-primary  to-secondary group-hover:from-secondary   group-hover:to-primary absolute"></span>
              <span class="relative px-5 py-2 transition-all ease-out bg-white rounded-md group-hover:bg-opacity-0 duration-400">
                <span class="relative text-black uppercase group-hover:text-white">
                  Browse templates
                </span>
              </span>
            </Link>
          </div>
        </>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {myResumeTemplates?.map((template) => (
          <div
            key={template._id}
            className={`relative bg-white rounded-lg p-4 flex flex-col items-center transition-transform transform overflow-hidden ${
              myResumeTemplate === template._id
                ? "border-2 border-blue-500"
                : ""
            }`}
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          >
            <div className="w-[275px] h-[330px] overflow-hidden">
              <div
                className="w-full h-full"
                style={{
                  transform: "scale(0.35)",
                  // transform: `scale(${scale})`,
                  transformOrigin: "top left",
                  height: "400px",
                }}
              >
                {template?.templateItem === "template1" && <Template1 userData={template} />}
                {template?.templateItem === "template2" && <Template2 userData={template} />}
                {template?.templateItem === "template3" && <Template3 userData={template} />}
                {template?.templateItem === "template4" && <Template4 userData={template} />}
                {template?.templateItem === "template5" && <Template5 userData={template} />}
                {template?.templateItem === "template6" && <Template6 userData={template} />}
              </div>
            </div>

            <div className="absolute inset-0 flex justify-between items-start opacity-0 hover:opacity-100 transition-opacity p-5">
              <input
                type="checkbox"
                className="form-checkbox text-black bg-white border-gray-300 focus:ring-offset-2 w-6 h-6"
                onChange={(e) => handleCheckboxChange(e, template._id)}
                checked={myResumeTemplate === template._id}
              />
              <div className="flex space-x-2">
                <button
                  onClick={handleFavorite}
                  className="text-black hover:text-yellow-500 bg-white p-2 rounded-xl"
                >
                  <FaStar size={20} />
                </button>
                <Link
                  to={`/resume/edit/${template.templateItem}?resumeId=${template._id}`}
                >
                  <button className="text-black hover:text-primary bg-white p-2 rounded-xl">
                    <FiEdit size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {myResumeTemplate && (
        <div className="fixed inset-0 flex items-end mb-10 justify-center z-50">
          <div
            className="bg-white p-5 rounded-2xl shadow-lg w-[650px]"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">1 Selected</h2>
              <button
                className="flex items-center space-x-1"
                onClick={() => handleDelete(myResumeTemplate)}
              >
                <RiDeleteBinLine className="hover:text-red-500" size={25} />
              </button>
              <button onClick={closeModal} className="">
                <LiaTimesSolid className="hover:text-red-500" size={25} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageResume;
