// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import Template1 from "../../Components/TemplateSection/Template1";
// import Template2 from "../../Components/TemplateSection/Template2";
// import Template3 from "../../Components/TemplateSection/Template3";
// import { FaEnvelope } from "react-icons/fa";
// import { FaFileExport, FaShare } from "react-icons/fa6";
// import ShareResumeNavbar from "./ShareResumeNavbar";
// import useAxiosPublic from "../../Hook/useAxiosPublic";

// const ShareResume = () => {

//   const axiosPublic = useAxiosPublic();
  
//   // Find common objects with the same _id in both arrays
//   const [data, setData] = useState([]);
//   // const { id } = useParams();
//   console.log(data);

//   //   Real time data change for template start here
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axiosPublic.get("/predefined-templates");
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching predefined templates:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const template = data.find((item1) => item1.templateItem === "template1");
//   console.log(template);

//   // const renderTemplate = (id) => {
//   //   if (id === "template1") {
//   //     return <Template1 data={template} template={template} />;
//   //   }
//   //   if (id === "template2") {
//   //     return <Template2 data={template} />;
//   //   }
//   // };
//   return (
//     <div className="">

//       <ShareResumeNavbar/>
   
//       <section className="flex py-12 gap-8">
//         <div className="w-3/12">

//         </div>
//         <div className="w-6/12">
//           <div className="lg:w-[31rem]  mx-auto  bg-slate-50 shadow-2xl rounded-lg ">
//             <div className="">
//               {/* Header - Personal Info */}
//               <header className="text-center  bg-blue-200  py-4">
//                 <h1 className="text-2xl font-bold text-blue-900 uppercase ">
//                   {template?.name === "" || template?.name === undefined
//                     ? data?.name
//                     : template?.name}
//                 </h1>
//                 <p className="font-semibold uppercase ">
//                   {template?.jobTitle === "" || template?.jobTitle === undefined
//                     ? data?.jobTitle
//                     : template?.jobTitle}
//                 </p>
//                 <p className="font-medium text-sm break-words max-w-[420px] mx-auto">
//                   {template?.email === "" || template?.email === undefined
//                     ? data?.email
//                     : template?.email}{" "}
//                   |{" "}
//                   {template?.phone === "" || template?.phone === undefined
//                     ? data?.phone
//                     : template?.phone}{" "}
//                   |{" "}
//                   {template?.address === "" || template?.address === undefined
//                     ? data?.address
//                     : template?.address}
//                 </p>
//               </header>
//               <div className="px-7 py-3 space-y-3">
//                 {/* Career Objective */}
//                 {template?.careerObjective === "" ||
//                 template?.careerObjective === undefined ? (
//                   <section className="mb-1">
//                     {data?.careerObjective && (
//                       <>
//                         <h2 className=" uppercase text-sm  font-bold text-blue-900 border-b border-blue-950 ">
//                           Career Objective
//                         </h2>
//                         <p className="mt-1 text-sm break-words max-w-[450px]">
//                           {data?.careerObjective}
//                         </p>
//                       </>
//                     )}
//                   </section>
//                 ) : (
//                   template?.careerObjective !== "" && (
//                     <section className="mb-1">
//                       <h2 className=" uppercase text-sm  font-bold text-blue-900 border-b border-blue-950 ">
//                         Career Objective
//                       </h2>
//                       <p className="mt-1 text-sm break-words max-w-[450px]">
//                         {template?.careerObjective}
//                       </p>
//                     </section>
//                   )
//                 )}

//                 {/* skills */}
//                 {template?.skills.length >= 1 ? (
//                   // If template.skills exist and the length is greater than 0, show template.skills
//                   <section className="mb-1 space-y-3">
//                     <h2 className="uppercase text-sm font-bold text-blue-900 border-b border-blue-950">
//                       Skills
//                     </h2>
//                     <ul className="mt-1 text-sm grid grid-cols-2 justify-between list-disc list-inside">
//                       {template?.skills.map((skill, index) => (
//                         <li key={index} className="pl-2">
//                           <h3 className="font-semibold inline-block">
//                             {skill || "Html"}
//                           </h3>
//                         </li>
//                       ))}
//                     </ul>
//                   </section>
//                 ) : (
//                   // If template.skills is empty or doesn't exist, fallback to data.skills
//                   data?.skills &&
//                   data?.skills.length > 0 && (
//                     <section className="mb-1 space-y-3">
//                       <h2 className="uppercase text-sm font-bold text-blue-900 border-b border-blue-950">
//                         Skills
//                       </h2>
//                       <ul className="mt-1 text-sm grid grid-cols-2 justify-between list-disc list-inside">
//                         {data?.skills.map((skill, index) => (
//                           <li key={index} className="pl-2">
//                             <h3 className="font-semibold inline-block">
//                               {skill}
//                             </h3>
//                           </li>
//                         ))}
//                       </ul>
//                     </section>
//                   )
//                 )}
//                 {/* Education */}
//                 {template?.education.length >= 1 ? (
//                   <section className="mb-1 space-y-3">
//                     <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
//                       Education
//                     </h2>
//                     <ul className=" text-sm ">
//                       {template?.education.map((edu, index) => (
//                         <li key={index}>
//                           <h3 className=" font-semibold break-words max-w-[420px]">
//                             {edu.degree || "Cse"} -{" "}
//                             {edu.institution || "Harbard University"}{" "}
//                             <span className="text-gray-500">
//                               ({edu.year || "2024"})
//                             </span>
//                           </h3>
//                         </li>
//                       ))}
//                     </ul>
//                   </section>
//                 ) : (
//                   data?.education &&
//                   data?.education.length > 0 && (
//                     <section className="mb-1 space-y-3">
//                       <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
//                         Education
//                       </h2>
//                       <ul className=" text-sm ">
//                         {data?.education.map((edu, index) => (
//                           <li key={index}>
//                             <h3 className=" font-semibold break-words max-w-[420px]">
//                               {edu.degree} - {edu.institution}{" "}
//                               <span className="text-gray-500">
//                                 ({edu.year})
//                               </span>
//                             </h3>
//                           </li>
//                         ))}
//                       </ul>
//                     </section>
//                   )
//                 )}

//                 {/* Certifications */}
//                 {template?.certifications &&
//                 template?.certifications.length >= 1 ? (
//                   <section className="mb-1 space-y-3">
//                     <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
//                       Certifications
//                     </h2>
//                     <ul className="mt-1 text-sm space-y-1 break-words max-w-[420px]">
//                       {template?.certifications.map((cert, index) => (
//                         <li key={index}>
//                           <h3 className=" font-semibold break-words max-w-[420px]">
//                             {cert.title || "Data Science with Python"} -{" "}
//                             {cert.institution || "Coursera "}{" "}
//                             <span className="text-gray-500">
//                               ({cert.year || "2018"})
//                             </span>
//                           </h3>
//                         </li>
//                       ))}
//                     </ul>
//                   </section>
//                 ) : (
//                   data?.certifications &&
//                   data?.certifications.length > 0 && (
//                     <section className="mb-1 space-y-3">
//                       <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
//                         Certifications
//                       </h2>
//                       <ul className="mt-1 text-sm space-y-1 break-words max-w-[420px]">
//                         {data?.certifications.map((cert, index) => (
//                           <li key={index}>
//                             <h3 className=" font-semibold break-words max-w-[420px]">
//                               {cert.title} - {cert.institution}{" "}
//                               <span className="text-gray-500">
//                                 ({cert.year})
//                               </span>
//                             </h3>
//                           </li>
//                         ))}
//                       </ul>
//                     </section>
//                   )
//                 )}

//                 {/* Work Experience */}
//                 {template?.workExperience &&
//                 template?.workExperience.length >= 1 ? (
//                   <section className="mb-1 space-y-3">
//                     <h2 className=" font-bold text-sm uppercase text-blue-900 border-b border-blue-950 ">
//                       Work Experience
//                     </h2>
//                     <ul className="mt-1 text-sm ">
//                       {template?.workExperience.map((exp, index) => (
//                         <li key={index}>
//                           <h3 className=" font-semibold">
//                             {exp.jobTitle || "Junior Data Analyst"} -{" "}
//                             {exp.company || "Data Solutions"}{" "}
//                             <span className="text-gray-500">
//                               ({exp.years || "1 Year"})
//                             </span>{" "}
//                           </h3>
//                           <p className="text-gray-600  text-sm">
//                             {exp.description ||
//                               "Assisted in data cleaning and visualization tasks."}
//                           </p>
//                         </li>
//                       ))}
//                     </ul>
//                   </section>
//                 ) : (
//                   data?.workExperience &&
//                   data?.workExperience.length > 0 && (
//                     <section className="mb-1 space-y-3">
//                       <h2 className=" font-bold text-sm uppercase text-blue-900 border-b border-blue-950 ">
//                         Work Experience
//                       </h2>
//                       <ul className="mt-1 text-sm ">
//                         {data?.workExperience.map((exp, index) => (
//                           <li key={index}>
//                             <h3 className=" font-semibold">
//                               {exp.jobTitle} - {exp.company}{" "}
//                               <span className="text-gray-500">
//                                 ({exp.years})
//                               </span>{" "}
//                             </h3>
//                             <p className="text-gray-600  text-sm">
//                               {exp.description}
//                             </p>
//                           </li>
//                         ))}
//                       </ul>
//                     </section>
//                   )
//                 )}

//                 {/* Extra Curricular Activities
//           {data?.extraCurricularActivities &&
//             data?.extraCurricularActivities.length > 0 && (
//               <section className="mb-1">
//                 <h2 className=" font-bold text-sm uppercase text-blue-900 border-b border-blue-950 ">
//                   Extra Curricular Activities
//                 </h2>
//                 <ul className="mt-1 text-sm space-y-1">
//                   {data?.extraCurricularActivities.map(
//                     (activityItem, index) => (
//                       <li key={index} className="text-gray-600">
//                         <strong>{activityItem.activity}</strong> -{" "}
//                         {activityItem.description}
//                       </li>
//                     )
//                   )}
//                 </ul>
//               </section>
//             )} */}

//                 {/* languages */}
//                 {template?.languages && template?.languages.length >= 1 ? (
//                   <section className="mb-1 space-y-3">
//                     <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
//                       language
//                     </h2>
//                     <ul className="mt-1 text-sm  grid grid-cols-2 justify-between list-disc list-inside">
//                       {template?.languages.map((language, index) => (
//                         <li key={index} className="pl-2">
//                           <h3 className=" font-semibold inline-block">
//                             {language || "English"}
//                           </h3>
//                         </li>
//                       ))}
//                     </ul>
//                   </section>
//                 ) : (
//                   data?.languages &&
//                   data?.languages.length > 0 && (
//                     <section className="mb-1 space-y-3">
//                       <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
//                         language
//                       </h2>
//                       <ul className="mt-1 text-sm  grid grid-cols-2 justify-between list-disc list-inside">
//                         {data?.languages.map((language, index) => (
//                           <li key={index} className="pl-2">
//                             <h3 className=" font-semibold inline-block">
//                               {language}
//                             </h3>
//                           </li>
//                         ))}
//                       </ul>
//                     </section>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ShareResume;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShareResume = () => {
  const { customUrl } = useParams(); // URL থেকে customUrl প্যারামিটার ফেচ করা হচ্ছে
  const [resumeData, setResumeData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        // API থেকে রিজিউম ডেটা ফেচ করার জন্য ব্যাকএন্ড URL ব্যবহার করুন
        const response = await fetch(`http://localhost:5000/resume/${customUrl}`);
        
        if (!response.ok) {
          throw new Error("Resume not found");
        }

        const data = await response.json();
        setResumeData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchResumeData();
  }, [customUrl]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!resumeData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{resumeData.userData.name}</h1>
      <p>{resumeData.userData.jobTitle}</p>
      <p>{resumeData.userData.email}</p>
      <p>{resumeData.userData.phone}</p>
      <p>{resumeData.userData.address}</p>
      <h2>Career Objective</h2>
      <p>{resumeData.userData.careerObjective}</p>

      <h2>Skills</h2>
      <ul>
        {resumeData.userData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Education</h2>
      <ul>
        {resumeData.userData.education.map((edu, index) => (
          <li key={index}>
            {edu.degree} - {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>

      <h2>Certifications</h2>
      <ul>
        {resumeData.userData.certifications.map((cert, index) => (
          <li key={index}>
            {cert.title} - {cert.institution} ({cert.year})
          </li>
        ))}
      </ul>

      <h2>Work Experience</h2>
      <ul>
        {resumeData.userData.workExperience.map((work, index) => (
          <li key={index}>
            {work.jobTitle} at {work.company} ({work.years})
            <p>{work.description}</p>
          </li>
        ))}
      </ul>

      <h2>Languages</h2>
      <ul>
        {resumeData.userData.languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>

      <h2>Extra-Curricular Activities</h2>
      <ul>
        {resumeData.userData.extraCurricularActivities.map((activity, index) => (
          <li key={index}>
            {activity.activity} - {activity.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShareResume;

