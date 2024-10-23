import { IoMail } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
const Template4 = ({ data, userData }) => {
  return (
    <div className="w-[790px] min-h-[1000px] mx-auto bg-slate-50 shadow-2xl rounded-lg border-2 border-secondary">
      <div className="">
        {/* Header - Personal Info */}
        <header className=" bg-gray-200 py-3 flex justify-between items-center px-2 lg:px-5">
          <div>
            <h1 className="text-2xl font-bold  uppercase">
              {userData?.name === "" || userData?.name === undefined
                ? "Your Name"
                : userData?.name}
            </h1>
            <p className="font-semibold uppercase">
              {userData?.jobTitle === "" || userData?.jobTitle === undefined
                ? "Profession"
                : userData?.jobTitle}
            </p>
          </div>
          <div className="flex flex-col items-start mt-4 lg:mt-3 text-[11px] font-semibold lg:font-normal lg:text-base">
            <div className="flex items-center justify-center gap-2 ">
              <p>
                <IoMail />
              </p>
              <p>
                {" "}
                {userData?.email === "" || userData?.email === undefined
                  ? "yourmail@gmail.com"
                  : userData?.email}{" "}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <p>
                <FaPhoneFlip />
              </p>
              <p>
                {" "}
                {userData?.phone === "" || userData?.phone === undefined
                  ? "+88012345678"
                  : userData?.phone}{" "}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <FaMapMarkerAlt className="inline" />
              <p className="inline">
                {" "}
                {userData?.address === "" || userData?.address === undefined
                  ? "Your address"
                  : userData?.address}
              </p>
            </div>
          </div>
        </header>
        <div className="lg:px-7 px-4 py-3 ">
          {/* Career Objective */}
          {userData?.careerObjective === "" ||
          userData?.careerObjective === undefined ? (
            <section className="mb-1">
              <>
                <h2 className=" uppercase text-sm  font-semibold  text-center  bg-gray-400">
                  Career Objective
                </h2>
                <p className="mt-1 text-sm font-roboto break-words text-justify ">
                  Use this section to give recruiters a quick glimpse of your
                  professional profile. In just 3-4 lines, highlight your
                  background, education and main skills. Use this section to
                  give recruiters a quick glimpse of your professional profile.
                  In just 3-4 lines, highlight your background, education and
                  main skills.
                </p>
              </>
            </section>
          ) : (
            userData?.careerObjective !== "" && (
              <section className="mb-1">
                <h2 className=" uppercase text-sm  font-semibold  text-center  bg-gray-400">
                  Career Objective
                </h2>
                <p className="mt-1 text-sm font-roboto break-words text-justify ">
                  {userData?.careerObjective}
                </p>
              </section>
            )
          )}

          {/* skills */}
          {userData?.skills?.length >= 1 && (
            // If userData.skills exist and the length is greater than 0, show userData.skills
            <section className="mb-1 space-y-3">
              <h2 className="uppercase text-sm font-semibold  text-center  bg-gray-400 ">
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

          {/* Education */}
          {userData?.education?.length >= 1 && (
            <section className="mb-1 space-y-3">
              <h2 className=" uppercase text-sm font-semibold  text-center  bg-gray-400">
                Education
              </h2>
              <ul className="text-sm ">
                {userData?.education.map((edu, index) => (
                  <li key={index}>
                    <h3 className=" font-medium text-sm font-roboto break-words ">
                      {edu.degree || "Your Degree"} -{" "}
                      {edu.institution || "Institute Name"} -{" "}
                      <span className="">({edu.year || "Passing Year"})</span>
                    </h3>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Certifications */}
          {userData?.certifications && userData?.certifications.length >= 1 && (
            <section className="mb-1 space-y-3">
              <h2 className=" uppercase text-sm font-semibold  text-center  bg-gray-400 ">
                Certifications
              </h2>
              <ul className="mt-1 text-sm space-y-1 break-words ">
                {userData?.certifications.map((cert, index) => (
                  <li key={index}>
                    <h3 className=" font-medium font-roboto break-words ">
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
              <h2 className=" text-sm uppercase font-semibold  text-center  bg-gray-400 ">
                Work Experience
              </h2>
              <ul className="mt-1 text-sm font-roboto">
                {userData?.workExperience.map((exp, index) => (
                  <li key={index} className="mb-2">
                    <h3 className="font-medium">
                      {exp.jobTitle || "Your Position"} -{" "}
                      {exp.company || "Company Name"} -{" "}
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
                          ? new Date(exp.endDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                            })
                          : "End Date"}
                        )
                      </span>
                    </h3>
                    <p className="font-roboto text-justify  text-sm break-words">
                      {exp.description ||
                        "Include your degree, school name and the year you graduated. If you don’t have a degree, list coursework or training that’s relevant to the job you’re applying for. Include your degree, school name and the year you graduated. If you don’t have a degree, list coursework or training that’s relevant to the job you’re applying for."}
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
          {userData?.languages && userData?.languages.length >= 1 && (
            <section className="mb-1 space-y-3">
              <h2 className=" text-sm uppercase font-semibold  text-center  bg-gray-400 ">
                language
              </h2>
              <ul className="mt-1 text-sm font-roboto  grid grid-cols-2 justify-between list-disc list-inside">
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
