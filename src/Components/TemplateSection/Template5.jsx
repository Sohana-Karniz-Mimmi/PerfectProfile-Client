import { IoMail } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
const Template5 = ({ data, userData }) => {
  console.log(data);

  return (
    <div className="w-[35rem] h-[41rem] mx-auto    shadow-2xl rounded-lg  ">
      {/* Header - Personal Info */}
      <header className="text-center mb-3 bg-[#DDD0D1]  py-6 px-10">
        <h1 className="text-3xl font-bold text-black uppercase">
          {userData?.name || "Your Name"}
        </h1>
        <p className="font-semibold uppercase mt-1">
          {userData?.jobTitle || "Profession"}
        </p>
        <div className="flex items-start mt-2 gap-3 mx-auto text-sm">
          <div className="flex items-center justify-center gap-2 ">
            <p>
              <IoMail />
            </p>
            <p>{userData?.email || " resumemail@gmail.com"}</p>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <p>
              <FaPhoneFlip />
            </p>
            <p>{userData?.phone || "+88012345687"}</p>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <FaMapMarkerAlt className="inline" />
            <p className="inline">{userData?.address || "Your address"}</p>
          </div>
        </div>
      </header>
      {/* career objective */}
      {userData?.careerObjective && (
        <>
          <section className="mb-4 px-3">
            <h2 className=" uppercase text-center font-bold  border-b border-black ">
              career objective
            </h2>
            <p className="mt-1 text-sm">
              {userData?.careerObjective ||
                "Use this section to give recruiters a quick glimpse of your professional profile. In just 3-4 lines, highlight your background, education and main skills."}
            </p>
          </section>
        </>
      )}

      <div className="flex justify-center ">
        {/* 1st */}
        <div className=" w-[16rem]">
          {/* Education */}
          {userData?.education && userData?.education.length > 0 && (
            <section className="mb-2 mt-6 px-4">
              <h2 className=" uppercase font-bold border-b border-black ">
                Education
              </h2>
              <ul className="mt-2 text-sm space-y-2">
                {userData?.education?.map((edu, index) => (
                  <li key={index}>
                    <h3 className=" font-semibold">
                      {edu.degree || "Degree Name"} -{""}{" "}
                      {edu.institution || "Institute Name"}{" "}
                      <span className="text-gray-600">
                        ({edu.year || "Graduation Year"})
                      </span>
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm">{edu.details}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* languages */}
          {userData?.languages && userData?.languages.length > 0 && (
            <section className="mb-2 mt-5 px-4">
              <h2 className=" uppercase font-bold  border-b border-black">
                language
              </h2>
              <ul className="mt-1 text-sm   justify-between list-disc list-inside">
                {userData?.languages?.map((language, index) => (
                  <li key={index} className="pl-2">
                    <h3 className=" font-semibold inline-block">{language}</h3>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
        {/* 2nd */}
        <div className="">
          <div className="px-4">
            {/* skills */}
            {userData?.skills && userData?.skills.length > 0 && (
              <section className="mb-2">
                <h2 className=" uppercase font-bold  border-b border-black ">
                  skills
                </h2>
                <ul className="mt-1 text-sm  grid grid-cols-2  justify-between list-disc list-inside">
                  {userData?.skills?.map((skill, index) => (
                    <li key={index} className="">
                      <h3 className=" font-semibold inline-block">{skill}</h3>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Certifications */}
            {userData?.certifications && userData?.certifications.length > 0 && (
              <section className="mb-2">
                <h2 className=" uppercase font-bold  border-b border-black ">
                  Certifications
                </h2>
                <ul className="mt-1 text-sm space-y-1">
                  {userData?.certifications?.map((cert, index) => (
                    <li key={index}>
                      <h3 className=" font-semibold">
                        {cert.title || "Certificate Name"} -{""}{" "}
                        {cert.institution || "Institution"}{" "}
                        <span className="text-gray-500">
                          ({cert.year || "Issue Date"})
                        </span>
                      </h3>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Work Experience */}
            {userData?.workExperience && userData?.workExperience.length > 0 && (
              <section className="mb-2">
                <h2 className=" font-bold uppercase  border-b border-black ">
                  Work Experience
                </h2>
                <ul className="mt-1 text-sm space-y-1">
                  {userData?.workExperience?.map((exp, index) => (
                    <li key={index}>
                      <h3 className=" font-semibold">
                        {exp.jobTitle || "Position"} -{""} {exp.company}{" "}
                        <span className="text-gray-500">
                          ({exp.years || "Year of Experience"})
                        </span>{" "}
                      </h3>
                      <p className="text-gray-600 mt-1 text-sm">
                        {exp.description ||
                          "Include your degree, school name and the year you graduated. If you don’t have a degree, list coursework or training that’s relevant to the job you’re applying for."}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Extra Curricular Activities */}
            {userData?.extraCurricularActivities &&
              userData?.extraCurricularActivities.length > 0 && (
                <section className="mb-2">
                  <h2 className=" font-bold uppercase  border-b border-black">
                    Extra Curricular Activities
                  </h2>
                  <ul className="mt-1 text-sm space-y-1">
                    {userData?.extraCurricularActivities?.map(
                      (activityItem, index) => (
                        <li key={index} className="text-gray-600">
                          <strong>
                            {activityItem.activity || "Work Title"}
                          </strong>{" "}
                          -{activityItem.description || "About your activities"}
                        </li>
                      )
                    )}
                  </ul>
                </section>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template5;
