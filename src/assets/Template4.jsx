import { IoMail } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
const Template4 = ({ data, userData }) => {
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
    <div className="lg:w-[31rem] h-[45rem]  lg:h-[41rem] mx-auto  bg-slate-50 shadow-2xl rounded-lg  ">
      <div className="">
        {/* Header - Personal Info */}
        <header className="text-center  bg-gray-200 py-3 flex justify-between items-center px-2 lg:px-5">
          <div>
            <h1 className="text-2xl font-bold  uppercase">
              {userData?.name || "Your Name"}
            </h1>
            <p className="font-semibold uppercase">
              {userData?.jobTitle || "Profession"}
            </p>
          </div>
          <div className="flex flex-col items-start mt-4 lg:mt-3 text-[11px] font-semibold lg:font-normal lg:text-base">
            <div className="flex items-center justify-center gap-2 ">
              <p>
                <IoMail />
              </p>
              <p>{userData?.email || "yourmail@gmail.com"}</p>
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <p>
                <FaPhoneFlip />
              </p>
              <p>{userData?.phone || "+88012345678899"}</p>
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <FaMapMarkerAlt className="inline" />
              <p className="inline">{userData?.address || "Your address"}</p>
            </div>
          </div>
        </header>
        <div className="lg:px-7 px-4 py-3 ">
          {/* Career Objective */}
          {userData?.careerObjective === "" && (
            <section className="mb-1">
              <h2 className=" uppercase text-sm  font-semibold  text-center  bg-gray-400">
                Career Objective
              </h2>
              <p className="mt-1 text-sm">
                {userData?.careerObjective ||
                  "Use this section to give recruiters a quick glimpse of your professional profile. In just 3-4 lines, highlight your background, education and main skills."}
              </p>
            </section>
          )}

          {/* skills */}
          {userData?.skills && userData?.skills.length > 0 && (
            <section className="mb-1">
              <h2 className=" uppercase text-sm font-semibold  text-center  bg-gray-400 ">
                skills
              </h2>
              <ul className="mt-1 text-sm  grid grid-cols-2 justify-between list-disc list-inside">
                {userData?.skills.map((skill, index) => (
                  <li key={index} className="pl-2">
                    <h3 className=" font-semibold inline-block">{skill}</h3>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {/* Education */}
          {userData?.education && userData?.education.length > 0 && (
            <section className="mb-1">
              <h2 className=" uppercase text-sm font-semibold  text-center  bg-gray-400 ">
                Education
              </h2>
              <ul className=" text-sm ">
                {userData?.education.map((edu, index) => (
                  <li key={index}>
                    <h3 className=" font-semibold">
                      {edu.degree || "Degree Name"} -{" "}
                      {edu.institution || "Institure Name"}{" "}
                      <span className="text-gray-500">
                        ({edu.year || "Graduation Year"})
                      </span>
                    </h3>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Certifications */}
          {userData?.certifications && userData?.certifications.length > 0 && (
            <section className="mb-1">
              <h2 className=" uppercase text-sm font-semibold  text-center  bg-gray-400 ">
                Certifications
              </h2>
              <ul className="mt-1 text-sm space-y-1">
                {userData?.certifications.map((cert, index) => (
                  <li key={index}>
                    <h3 className=" font-semibold">
                      {cert.title || "Certificate Name"} -{" "}
                      {cert.institution || "Institute"}{" "}
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
            <section className="mb-1">
              <h2 className="  text-sm uppercase font-semibold  text-center  bg-gray-400 ">
                Work Experience
              </h2>
              <ul className="mt-1 text-sm ">
                {userData?.workExperience.map((exp, index) => (
                  <li key={index}>
                    <h3 className=" font-semibold">
                      {exp.jobTitle || "Position"} - {exp.company}{" "}
                      <span className="text-gray-500">
                        ({exp.years || "Year of Experience"})
                      </span>{" "}
                    </h3>
                    <p className="text-gray-600  text-sm">
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
              <section className="mb-1">
                <h2 className="  text-sm uppercase font-semibold  text-center  bg-gray-400">
                  Extra Curricular Activities
                </h2>
                <ul className="mt-1 text-sm space-y-1">
                  {userData?.extraCurricularActivities.map(
                    (activityItem, index) => (
                      <li key={index} className="text-gray-600">
                        <strong>{activityItem.activity || "Work Title"}</strong>{" "}
                        - {activityItem.description || "About your activities"}
                      </li>
                    )
                  )}
                </ul>
              </section>
            )}

          {/* languages */}
          {userData?.languages && userData?.languages.length > 0 && (
            <section className="mb-1">
              <h2 className=" uppercase text-sm font-semibold  text-center  bg-gray-400 ">
                language
              </h2>
              <ul className="mt-1 text-sm  grid grid-cols-2 justify-between list-disc list-inside">
                {userData?.languages.map((language, index) => (
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

export default Template4;
