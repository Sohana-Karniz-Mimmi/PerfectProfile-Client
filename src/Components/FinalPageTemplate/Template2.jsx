import img from "../../assets/resumeimage.jpg";
import { IoMail } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Template2 = ({ data, userData }) => {
  
  
  return (
    <div className="relative">
     
      <div className="lg:w-[794px] w-full  min-h-[1115px] mx-auto  flex justify-center  shadow-2xl rounded-lg   ">
        {/* 1st */}
        <div className="bg-[#353535] text-white lg:px-2 lg:w-[291px] w-[11rem] ">
          <div className="lg:w-48 w-32 mx-auto py-7 mb-4">
            <img className="rounded-full" src={userData?.profile} alt="" />
          </div>
          <div>
            {/* about me */}
            {(userData?.careerObjective || data?.careerObjective) && (
              <>
                <section className="mb-2">
                  <h2 className=" uppercase font-bold text-xl  border-b border-white ">
                    about me
                  </h2>
                  <p className="mt-2 ">
                    {userData?.careerObjective || data?.careerObjective}
                  </p>
                </section>
                {/*    

*/}
              </>
            )}
            <div className="flex flex-col items-start mt-6  lg:text-base text-sm">
              <div className="flex items-center justify-center gap-2 text-white">
                <p>
                  <IoMail />
                </p>
                <p>{userData?.email || data?.email}</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-white">
                <p>
                  <FaPhoneFlip />
                </p>
                <p>{userData?.phone || data?.phone}</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-white">
                <FaMapMarkerAlt className="inline" />
                <p className="inline">{userData?.address || data?.address}</p>
              </div>
            </div>
          </div>

          {/* Education */}
          {(userData?.education?.length || data?.education?.length) && (
            <section className="mb-2 mt-7">
              <h2 className=" uppercase text-base lg:text-xl font-bold border-b border-white ">
                Education
              </h2>
              <ul className="mt-2  space-y-4">
                {(userData?.education || data?.education).map((edu, index) => (
                  <li key={index}>
                    <h3 className=" font-semibold">
                      {edu.degree} - {edu.institution}{" "}
                      <span className="text-gray-400">({edu.year})</span>
                    </h3>
                    <p className="text-gray-400 mt-1 text-sm">{edu.details}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
        {/* 2nd */}
        <div className="lg:w-[521px]">
          {/* Header - Personal Info */}
          <header className="text-center mb-3  bg-[#F0F0F0] py-4 lg:py-16">
            <h1 className="text-4xl font-bold text-black uppercase">  {userData?.name === "" || userData?.name === undefined
                ? "Your Name"
                : userData?.name}</h1>
            <p className="font-bold uppercase mt-2">{userData?.jobTitle || data?.jobTitle}</p>
          </header>
          <div className="lg:px-6 px-2">
            {/* skills */}
            {(userData?.skills?.length || data?.skills?.length)&& (
              <section className="mb-2 mt-6">
                <h2 className=" uppercase text-base lg:text-xl font-bold  border-b border-black ">
                  skills
                </h2>
                <ul className="mt-2  grid grid-cols-2 justify-between list-disc list-inside">
                  {(userData?.skills || data?.skills).map((skill, index) => (
                    <li key={index} className="pl-2">
                      <h3 className=" font-semibold inline-block">{skill}</h3>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Certifications */}
            {(userData?.certifications?.length || data?.certifications?.length) && (
              <section className="mb-2 mt-5">
                <h2 className=" uppercase text-base lg:text-xl font-bold  border-b border-black ">
                  Certifications
                </h2>
                <ul className="mt-2  space-y-2">
                  {(userData?.certifications || data?.certifications).map((cert, index) => (
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
            {(userData?.workExperience?.length || data?.workExperience?.length) && (
              <section className="mb-2 mt-5">
                <h2 className=" font-bold uppercase text-base lg:text-xl  border-b border-black ">
                  Work Experience
                </h2>
                <ul className="mt-2  space-y-2">
                  {(userData?.workExperience || data?.workExperience).map((exp, index) => (
                    <li key={index}>
                      <h3 className=" font-semibold">
                        {exp.jobTitle} - {exp.company}{" "}
                        <span className="text-gray-500">({exp.years})</span>{" "}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {exp.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Extra Curricular Activities */}
            {/* {extraCurricularActivities && extraCurricularActivities.length > 0 && (
              <section className="mb-2 mt-5">
                <h2 className=" font-bold uppercase text-base lg:text-xl  border-b border-black">
                  Extra Curricular Activities
                </h2>
                <ul className="mt-2  space-y-2">
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
            {(userData?.languages?.length || data?.languages?.length) && (
              <section className="mb-2 mt-5">
                <h2 className=" uppercase font-bold  text-base lg:text-xl border-b border-black">
                  language
                </h2>
                <ul className="mt-2   grid grid-cols-2 justify-between list-disc list-inside">
                  {(userData?.languages || data?.languages).map((language, index) => (
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

export default Template2;
