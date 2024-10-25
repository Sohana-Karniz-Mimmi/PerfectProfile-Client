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
import { useQuery } from "@tanstack/react-query";


/******** Templates **********/
import Template1 from "../../Components/AllTemplates/Template1";;
import Template2 from "../../Components/AllTemplates/Template2";
import Template3 from "../../Components/AllTemplates/Template3";
import Template4 from "../../Components/AllTemplates/Template4";
import Template5 from "../../Components/AllTemplates/Template5";
import Template6 from "../../Components/AllTemplates/Template6";


const ManageResume = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [myResumeTemplate, setMyResumeTemplate] = useState(null);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [myResumeTemplates, setMyResumeTemplates] = useState([]);


  // const { data: myResumeTemplates = [], refetch, isLoading } = useQuery({
  //   queryKey: ["myResumeTemplates"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/my-resume/${user?.email}`);
  //     return res.data;
  //   },
  // });

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(`/my-resume/${user?.email}`);
      setMyResumeTemplates(data);
    };
    getData();
  }, [user?.email]);


  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      html: `<div class="text-start text-gray-600 text-base">You won't be able to revert this!</div>`,
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Delete",
      backdrop: `
          rgba(0, 0, 0, 0.5) 
          url('path/to/your/background-image.jpg') 
          left top 
          no-repeat
      `,
      customClass: {
        title: 'text-2xl pt-9 text-start font-semibold text-black',
        confirmButton: 'hover:bg-[#fd4958] bg-[#DB142C] text-white font-medium py-2 px-4 rounded-md ml-2',
        cancelButton: 'text-[#0d1216] bg-[#E5E5E5] font-medium py-2 px-4 rounded-md mr-4',
        popup: 'w-[420px] rounded-2xl shadow-lg border flex flex-col items-start px-1',
        actions: 'flex justify-end w-full mt-4'
      }
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosPublic.delete(`/my-resume/${id}`)
            .then((response) => {
              if (response.data.deletedCount > 0) {
                closeModal();
                Swal.fire({
                  title: "Deleting...",
                  html: `
                      <div class="relative mb-6 w-full h-3 bg-gray-200 rounded">
                          <div id="progress-bar" class="absolute h-full rounded-full" style="width: 0; background: linear-gradient(90deg, #2CACD5, #00C8AA); transition: width 1s ease;"></div>
                      </div>
                  `,
                  showConfirmButton: false,
                  willOpen: () => {
                    const progressBar = document.getElementById('progress-bar');
                    setTimeout(() => {
                      progressBar.style.width = '87%';

                      setTimeout(() => {
                        progressBar.style.width = '100%';
                      }, 500);
                      setTimeout(() => {
                        Swal.close();
                      }, 1700);
                    }, 100);
                  }
                });

                const updatedTemplates = myResumeTemplates.filter(template => template._id !== id);
                setMyResumeTemplates(updatedTemplates); 

              }
            })
            .catch((error) => {
              console.error("There was an error deleting the resume", error);
              Swal.fire({
                title: "Error!",
                text: "There was an error deleting the resume.",
                icon: "error"
              });
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
    setPreviewTemplate(null);
  };

  const handlePreview = (template) => {
    setPreviewTemplate(template);
  };


  // if (isLoading) {
  //   <LoadingSpinner />;
  // }

  console.log('myResumeTemplate', myResumeTemplate);
  console.log(previewTemplate);
  console.log('myResumeTemplates', myResumeTemplates);

  return (
    <div className="p-4 max-w-7xl mx-auto">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

        {myResumeTemplates?.map((template) => (
          <div
            key={template._id}
            className={`relative bg-white rounded-lg p-4 flex flex-col items-center transition-transform transform overflow-hidden ${myResumeTemplate === template._id ? "border-2 border-blue-500" : ""
              }`}
            style={{
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 3px 6px, ' +
                'rgba(0, 0, 0, 0.23) 0px 3px 6px'
            }}
          >
            <div className="w-[275px] h-[330px] border-2 overflow-hidden">
              <div
                className="w-full h-full"
                style={{
                  transform: "scale(0.35)",
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

            <div className="absolute inset-0 flex flex-col justify-between opacity-0 hover:opacity-100 transition-opacity group p-5">
              <div className="flex justify-between items-start">
                <input
                  type="checkbox"
                  className="form-checkbox text-black bg-white border-gray-300 focus:ring-offset-2 w-6 h-6"
                  onChange={(e) => handleCheckboxChange(e, template._id)}
                  checked={myResumeTemplate === template._id}
                />
                <div className="flex space-x-2">

                  <Link to={`/resume/edit/${template.templateItem}?resumeId=${template._id}`}>
                    <button className="text-black hover:text-primary bg-white p-2 rounded-xl">
                      <FiEdit size={20} />
                    </button>
                  </Link>
                </div>

              </div>
              <button
                onClick={() => handlePreview(template)}
                className="text-white border border-primary bg-primary mb-3 p-2 rounded-xl uppercase font-bold"
              >
                See Template
              </button>
            </div>
          </div>
        ))}

      </div>

      {/*Delete Modal */}
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

      {/*  Modal Preview Implementation */}
      {previewTemplate && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-2xl shadow-lg max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Preview</h2>
              <button onClick={closeModal}>
                <LiaTimesSolid className="hover:text-red-500" size={25} />
              </button>
            </div>
            {/* Scrollable area for template preview */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Render preview based on template type */}
              {previewTemplate.templateItem === "template1" && <Template1 userData={previewTemplate} />}
              {previewTemplate.templateItem === "template2" && <Template2 userData={previewTemplate} />}
              {previewTemplate.templateItem === "template3" && <Template3 userData={previewTemplate} />}
              {previewTemplate.templateItem === "template4" && <Template4 userData={previewTemplate} />}
              {previewTemplate.templateItem === "template5" && <Template5 userData={previewTemplate} />}
              {previewTemplate.templateItem === "template6" && <Template6 userData={previewTemplate} />}
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default ManageResume;
