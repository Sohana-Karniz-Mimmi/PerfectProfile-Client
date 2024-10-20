import img from "../assets/resumeimage.jpg";
import { IoMail } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hook/useAxiosPublic";
const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
const MyTemplate2 = ({ data, userData }) => {
  const axiosPublic = useAxiosPublic()
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async(data) => {
    console.log(data);
    // img bb te data upload kore url niye db te save korbo
    const imgFile = {image : data.image[0]}
    const res = await axiosPublic.post(img_hosting_api, imgFile, {
      headers: {
        'content-Type' : 'multipart/form-data'
      }
    })
    console.log(res.data);
  

  if(res.data.success){
    // now save data on db
    const profile = {
      image : res.data.data.display_url
    }
    const profileRes = axiosPublic.patch(`/predefined-templates/${data?._id}`, profile)
    console.log(profileRes.data);
   
  }
  }

  return (
    <div className="relative">
      <div className="w-[790px] min-h-[1000px] mx-auto flex justify-center  shadow-2xl rounded-lg   ">
        {/* 1st */}
        <div className="bg-[#353535] text-white lg:px-3 px-2 lg:w-[12rem] w-[11rem] ">
          
          <div className="mt-36">
            {/* about me */}
            {userData?.careerObjective === "" ||
            userData?.careerObjective === undefined ? (
              <section className="mb-1 mt-16">
                <>
                  <h2 className=" uppercase text-sm font-roboto  font-bold text-white border-b border-white ">
                    Career Objective
                  </h2>
                  <p className="mt-1 text-sm font-roboto break-words text-justify max-w-[450px]">
                    Use this section to give recruiters a quick glimpse of your
                    professional profile. In just 3-4 lines, highlight your
                    background, education and main skills.
                  </p>
                </>
              </section>
            ) : (
              userData?.careerObjective !== "" && (
                <section className="mb-1">
                  <h2 className=" uppercase text-sm font-roboto font-bold text-white border-b border-white ">
                    Career Objective
                  </h2>
                  <p className="mt-1 text-sm font-roboto break-words text-justify max-w-[450px]">
                    {userData?.careerObjective}
                  </p>
                </section>
              )
            )}
            <div className="flex flex-col items-start mt-3 space-y-1 text-xs lg:text-sm">
              <div className="flex items-center justify-center gap-2 text-white">
                <p>
                  <IoMail />
                </p>
                <p>
                  {userData?.email === "" || userData?.email === undefined
                    ? "yourmail@gmail.com"
                    : userData?.email}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 text-white">
                <p>
                  <FaPhoneFlip />
                </p>
                <p>
                  {" "}
                  {userData?.phone === "" || userData?.phone === undefined
                    ? "+88012345678"
                    : userData?.phone}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 text-white">
                <FaMapMarkerAlt className="inline" />
                <p className="inline">
                  {" "}
                  {userData?.address === "" || userData?.address === undefined
                    ? data?.address
                    : userData?.address}
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          {userData?.education?.length >= 1 && (
            <section className="mb-1 mt-3 space-y-2">
              <h2 className=" uppercase text-sm font-roboto font-bold text-white border-b border-white ">
                Education
              </h2>
              <ul className="text-sm ">
                {userData?.education.map((edu, index) => (
                  <li key={index}>
                    <h3 className=" font-medium text-sm font-roboto break-words max-w-[420px]">
                      {edu.degree || "Your Degree"} -{" "}
                      {edu.institution || "Institute Name"} -{" "}
                      <span className="">({edu.year || "Passing Year"})</span>
                    </h3>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
        {/* 2nd */}
        <div className="">
          {/* Header - Personal Info */}
          <header className="text-center mb-3  bg-[#F0F0F0] py-4 lg:py-9">
            <h1 className="text-3xl font-bold text-black uppercase">
              {" "}
              {userData?.name === "" || userData?.name === undefined
                ? "Your Name"
                : userData?.name}
            </h1>
            <p className="font-bold uppercase mt-1">
              {" "}
              {userData?.jobTitle === "" || userData?.jobTitle === undefined
                ? "Profession"
                : userData?.jobTitle}
            </p>
          </header>
          <div className="lg:px-3 px-2">
            {/* skills */}
            {userData?.skills?.length >= 1 && (
              <section className="mb-1 space-y-3">
                <h2 className="uppercase text-sm font-roboto font-bold  border-b border-black">
                  Skills
                </h2>
                <ul className="mt-1 text-sm grid grid-cols-2 justify-between list-disc list-inside">
                  {userData?.skills.map((skill, index) => (
                    <li key={index} className="pl-2 font-roboto text-sm">
                      <h3 className="font-medium inline-block">{skill}</h3>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Certifications */}
            {userData?.certifications && userData?.certifications.length >= 1 && (
              <section className="mb-1 space-y-3">
                <h2 className=" uppercase font-roboto text-sm font-bold  border-b border-black ">
                  Certifications
                </h2>
                <ul className="mt-1 text-sm space-y-1 break-words max-w-[420px]">
                  {userData?.certifications.map((cert, index) => (
                    <li key={index}>
                      <h3 className=" font-medium font-roboto break-words max-w-[420px]">
                        {cert.title || "Course Name"} -{" "}
                        {cert.institution || "Institute Name"} -{" "}
                        <span className="">({cert.year || "Duration"})</span>
                      </h3>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Work Experience */}
            {userData?.workExperience && userData?.workExperience.length >= 1 && (
              <section className="mb-1 space-y-3">
                <h2 className=" font-bold font-roboto text-sm uppercase  border-b border-black ">
                  Work Experience
                </h2>
                <ul className="mt-1 text-sm font-roboto">
                  {userData?.workExperience.map((exp, index) => (
                    <li key={index} className="mb-2">
                      <h3 className="font-medium">
                        {exp.jobTitle || "Your Position"} -{" "}
                        {exp.company || "Company Name"} -{" "}
                        {/* <span className="text-gray-500">
                        ({exp.years || "Year of Experience"})
                      </span> */}
                        {/* <span className="text-gray-500">
                        (
                        {exp.startDate
                          ? new Date(exp.startDate).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                              }
                            )
                          : "Mar 2020"}{" "}
                        -{" "}
                        {exp.endDate
                          ? new Date(exp.endDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                            })
                          : "Present"}
                        )
                      </span> */}
                        <span className="">
                          (
                          {exp.startDate
                            ? new Date(exp.startDate).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                }
                              )
                            : "Start Date"}{" "}
                          -{" "}
                          {exp.isCurrent
                            ? "Present" // If isCurrent is true, show 'Present'
                            : exp.endDate
                            ? new Date(exp.endDate).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                }
                              )
                            : "End Date"}
                          )
                        </span>
                      </h3>
                      <p className="font-roboto text-justify  text-sm max-w-[450px] break-words">
                        {exp.description ||
                          "Include your degree, school name and the year you graduated. If you don’t have a degree, list coursework or training that’s relevant to the job you’re applying for."}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Extra Curricular Activities */}
            {/* {extraCurricularActivities && extraCurricularActivities.length > 0 && (
              <section className="mb-2">
                <h2 className=" font-bold uppercase lg:text-base text-sm  border-b border-black">
                  Extra Curricular Activities
                </h2>
                <ul className="mt-1 text-[13px] lg:text-sm space-y-1">
                  {extraCurricularActivities.map((activityItem, index) => (
                    <li key={index} className="text-gray-600">
                      <strong>{activityItem.activity}</strong> -{" "}
                      {activityItem.description}
                    </li>
                  ))}
                </ul>
              </section>
            )} */}

            {/* languages */}
            {userData?.languages && userData?.languages.length >= 1 && (
              <section className="mb-1 space-y-3">
                <h2 className=" uppercase text-sm font-roboto font-bold  border-b border-black ">
                  language
                </h2>
                <ul className="mt-1 text-sm font-roboto  grid grid-cols-2 justify-between list-disc list-inside">
                  {userData?.languages.map((language, index) => (
                    <li key={index} className="pl-2">
                      <h3 className=" font-semibold inline-block">
                        {language}
                      </h3>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTemplate2;