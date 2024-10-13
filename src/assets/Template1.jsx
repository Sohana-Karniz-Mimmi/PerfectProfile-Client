const Template1 = ({ data, userData }) => {
  return (
    <div
      className="lg:w-[31rem] w-full max-h-[2400px]  mx-auto  bg-slate-50 shadow-2xl rounded-lg "
      id="resume-content"
    >
      <div className="">
        {/* Header - Personal Info */}
        <header className="text-center  bg-blue-200  py-4">
          <h1 className="text-2xl font-bold text-blue-900 uppercase ">
            {userData?.name === "" || userData?.name === undefined
              ? "Your Name"
              : userData?.name}
          </h1>
          <p>{data?.package}</p>
          <p className="font-semibold uppercase ">
            {userData?.jobTitle === "" || userData?.jobTitle === undefined
              ? "Profession"
              : userData?.jobTitle}
          </p>
          <p className="font-medium text-sm break-words max-w-[420px] mx-auto">
            {userData?.email === "" || userData?.email === undefined
              ? "yourmail@gmail.com"
              : userData?.email}{" "}
            |{" "}
            {userData?.phone === "" || userData?.phone === undefined
              ? "+88012345678"
              : userData?.phone}{" "}
            |{" "}
            {userData?.address === "" || userData?.address === undefined
              ? data?.address
              : userData?.address}
          </p>
        </header>
        <div className="px-7 py-3 space-y-3">
          {/* Career Objective */}
          {userData?.careerObjective === "" ||
          userData?.careerObjective === undefined ? (
            <section className="mb-1">
              <>
                <h2 className=" uppercase text-sm  font-bold text-blue-900 border-b border-blue-950 ">
                  Career Objective
                </h2>
                <p className="mt-1 text-sm break-words max-w-[450px]">
                  Use this section to give recruiters a quick glimpse of your
                  professional profile. In just 3-4 lines, highlight your
                  background, education and main skills.
                </p>
              </>
            </section>
          ) : (
            userData?.careerObjective !== "" && (
              <section className="mb-1">
                <h2 className=" uppercase text-sm  font-bold text-blue-900 border-b border-blue-950 ">
                  Career Objective
                </h2>
                <p className="mt-1 text-sm break-words max-w-[450px]">
                  {userData?.careerObjective}
                </p>
              </section>
            )
          )}

          {/* skills */}
          {userData?.skills?.length >= 1 && (
            // If userData.skills exist and the length is greater than 0, show userData.skills
            <section className="mb-1 space-y-3">
              <h2 className="uppercase text-sm font-bold text-blue-900 border-b border-blue-950">
                Skills
              </h2>
              <ul className="mt-1 text-sm grid grid-cols-2 justify-between list-disc list-inside">
                {userData?.skills.map((skill, index) => (
                  <li key={index} className="pl-2">
                    <h3 className="font-semibold inline-block">{skill}</h3>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {/* Education */}
          {userData?.education?.length >= 1 && (
            <section className="mb-1 space-y-3">
              <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
                Education
              </h2>
              <ul className=" text-sm ">
                {userData?.education.map((edu, index) => (
                  <li key={index}>
                    <h3 className=" font-semibold break-words max-w-[420px]">
                      {edu.degree || "Your Degree"} -{" "}
                      {edu.institution || "Institute"}{" "}
                      <span className="text-gray-500">
                        ({edu.year || "2024"})
                      </span>
                    </h3>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Certifications */}
          {userData?.certifications && userData?.certifications.length >= 1 && (
            <section className="mb-1 space-y-3">
              <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
                Certifications
              </h2>
              <ul className="mt-1 text-sm space-y-1 break-words max-w-[420px]">
                {userData?.certifications.map((cert, index) => (
                  <li key={index}>
                    <h3 className=" font-semibold break-words max-w-[420px]">
                      {cert.title || "Coure Name"} -{" "}
                      {cert.institution || "Institute"}{" "}
                      <span className="text-gray-500">
                        ({cert.year || "Finishing Date (e.g 2019)"})
                      </span>
                    </h3>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Work Experience */}
          {userData?.workExperience && userData?.workExperience.length >= 1 && (
            <section className="mb-1 space-y-3">
              <h2 className=" font-bold text-sm uppercase text-blue-900 border-b border-blue-950 ">
                Work Experience
              </h2>
              <ul className="mt-1 text-sm ">
                {userData?.workExperience.map((exp, index) => (
                  <li key={index}>
                    <h3 className=" font-semibold">
                      {exp.jobTitle || "Postion"} -{" "}
                      {exp.company || "Company Name"}{" "}
                      <span className="text-gray-500">
                        ({exp.years || "Year of Experience"})
                      </span>{" "}
                    </h3>
                    <p className="text-gray-600  text-sm max-w-[450px] break-words">
                      {exp.description ||
                        "Include your degree, school name and the year you graduated. If you don’t have a degree, list coursework or training that’s relevant to the job you’re applying for."}
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
              <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
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

export default Template1;
