import img from "../../assets/resumeimage.jpg";
import { IoMail } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
const Template2 = ({ data }) => {
  console.log(data);
  const {
    _id,
    name,
    jobTitle,
    careerObjective,
    email,
    phone,
    address,
    education,
    certifications,
    workExperience,
    skills,
    languages,
    extraCurricularActivities,
  } = data;
  return (
    <div className="w-[35rem] h-[48rem] mx-auto  flex justify-center gap-1 shadow-2xl rounded-lg  ml-10 ">
      {/* 1st */}
      <div className="bg-[#353535] text-white px-4 w-[15rem] ">
        <div className="w-40 mx-auto py-4 mb-2">
          <img className="rounded-full" src={img} alt="" />
        </div>
        <div>
          {/* about me */}
          {careerObjective && (
            <>
              <section className="mb-2">
                <h2 className=" uppercase font-bold  border-b border-white ">
                  about me
                </h2>
                <p className="mt-1 text-sm">{careerObjective}</p>
              </section>
              {/*    

*/}
            </>
          )}
         <div className="flex flex-col items-start mt-6">
         <div className="flex items-center justify-center gap-2 text-white">
            <p><IoMail /></p>
            <p>{email}</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-white">
            <p><FaPhoneFlip /></p>
            <p>{phone}</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-white">
            <FaMapMarkerAlt className="inline"/>
            <p className="inline">{address}</p>
          </div>
         </div>
        </div>

          {/* Education */}
          {education && education.length > 0 && (
             <section className="mb-2 mt-6">
               <h2 className=" uppercase font-bold border-b border-white ">Education</h2>
               <ul className="mt-1 text-sm space-y-2">
                 {education.map((edu, index) => (
                   <li key={index}>
                     <h3 className=" font-semibold">{edu.degree} - {edu.institution} <span className="text-gray-400">({edu.year})</span></h3>
                     <p className="text-gray-400 mt-1 text-sm">{edu.details}</p>
                   </li>
                 ))}
               </ul>
             </section>
           )}
      </div>
      {/* 2nd */}
      <div className="">
         {/* Header - Personal Info */}
         <header className="text-center mb-7 bg-[#F0F0F0]  py-10">
          <h1 className="text-3xl font-bold text-black uppercase">{name}</h1>
          <p className="font-semibold uppercase mt-1">{jobTitle}</p>        
        </header>
      <div className="px-4">
       

        {/* skills */}
        {skills && skills.length > 0 && (
          <section className="mb-2">
            <h2 className=" uppercase font-bold  border-b border-black ">
              skills
            </h2>
            <ul className="mt-1 text-sm  grid grid-cols-2 justify-between list-disc list-inside">
              {skills.map((skill, index) => (
                <li key={index} className="pl-2">
                  <h3 className=" font-semibold inline-block">{skill}</h3>
                </li>
              ))}
            </ul>
          </section>
        )}
       

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <section className="mb-2">
            <h2 className=" uppercase font-bold  border-b border-black ">
              Certifications
            </h2>
            <ul className="mt-1 text-sm space-y-1">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <h3 className=" font-semibold">
                    {cert.title} - {cert.institution}{" "}
                    <span className="text-gray-500">({cert.year})</span>
                  </h3>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Work Experience */}
        {workExperience && workExperience.length > 0 && (
          <section className="mb-2">
            <h2 className=" font-bold uppercase  border-b border-black ">
              Work Experience
            </h2>
            <ul className="mt-1 text-sm space-y-1">
              {workExperience.map((exp, index) => (
                <li key={index}>
                  <h3 className=" font-semibold">
                    {exp.jobTitle} - {exp.company}{" "}
                    <span className="text-gray-500">({exp.years})</span>{" "}
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    {exp.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Extra Curricular Activities */}
        {extraCurricularActivities && extraCurricularActivities.length > 0 && (
          <section className="mb-2">
            <h2 className=" font-bold uppercase  border-b border-black">
              Extra Curricular Activities
            </h2>
            <ul className="mt-1 text-sm space-y-1">
              {extraCurricularActivities.map((activityItem, index) => (
                <li key={index} className="text-gray-600">
                  <strong>{activityItem.activity}</strong> -{" "}
                  {activityItem.description}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* languages */}
        {languages && languages.length > 0 && (
          <section className="mb-2">
            <h2 className=" uppercase font-bold  border-b border-black">
              language
            </h2>
            <ul className="mt-1 text-sm  grid grid-cols-2 justify-between list-disc list-inside">
              {languages.map((language, index) => (
                <li key={index} className="pl-2">
                  <h3 className=" font-semibold inline-block">{language}</h3>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
      </div>
    </div>
  );
};

export default Template2;
