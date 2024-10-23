const Template1 = ({ data, userData }) => {
  console.log(userData);
  return (
    <div
      className="w-[790px] min-h-[1000px] mx-auto bg-white pb-8"
      id="resume-content"
    >
      <div className="">
        {/* Header - Personal Info */}
        <header className="text-center font-roboto  bg-blue-200  py-4 px-12">
          <h1 className="text-2xl font-bold text-blue-900 uppercase ">
            {userData?.name === "" || userData?.name === undefined
              ? "Your Name"
              : userData?.name}
          </h1>
          {/* <p className="text-red-500">{data?.package}</p> */}
          <p className="font-semibold uppercase ">
            {userData?.jobTitle === "" || userData?.jobTitle === undefined
              ? "Profession"
              : userData?.jobTitle}
          </p>
          <p className="font-medium text-sm break-words mx-auto">
            {userData?.email === "" || userData?.email === undefined
              ? "yourmail@gmail.com"
              : userData?.email}{" "}
            |{" "}
            {userData?.phone === "" || userData?.phone === undefined
              ? "+88012345678"
              : userData?.phone}{" "}
            |{" "}
            {userData?.address === "" || userData?.address === undefined
              ? "45 Greenway, Dhaka"
              : userData?.address}
          </p>
        </header>
        <div className="px-12 py-3 space-y-4">
          {/* Career Objective */}
          {userData?.careerObjective === "" ||
          userData?.careerObjective === undefined ? (
            <section className="mb-1">
              <>
                <h2 className=" uppercase text-sm font-roboto  font-bold text-blue-900 border-b border-blue-950 ">
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
                <h2 className=" uppercase text-sm font-roboto font-bold text-blue-900 border-b border-blue-950 ">
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
              <h2 className="uppercase text-sm font-roboto font-bold text-blue-900 border-b border-blue-950">
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
              <h2 className=" uppercase text-sm font-roboto font-bold text-blue-900 border-b border-blue-950 ">
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
              <h2 className=" uppercase font-roboto text-sm font-bold text-blue-900 border-b border-blue-950 ">
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
              <h2 className=" font-bold font-roboto text-sm uppercase text-blue-900 border-b border-blue-950 ">
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

          {/* Extra Curricular Activities
          {data?.extraCurricularActivities &&
            data?.extraCurricularActivities.length > 0 && (
              <section className="mb-1">
                <h2 className=" font-bold text-sm uppercase text-blue-900 border-b border-blue-950 ">
                  Extra Curricular Activities
                </h2>
                <ul className="mt-1 text-sm space-y-1">
                  {data?.extraCurricularActivities.map(
                    (activityItem, index) => (
                      <li key={index} className="text-gray-600">
                        <strong>{activityItem.activity}</strong> -{" "}
                        {activityItem.description}
                      </li>
                    )
                  )}
                </ul>
              </section>
            )} */}

          {/* languages */}
          {userData?.languages && userData?.languages.length >= 1 && (
            <section className="mb-1 space-y-3">
              <h2 className=" uppercase text-sm font-roboto font-bold text-blue-900 border-b border-blue-950 ">
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

export default Template1;
