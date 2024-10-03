const Template1 = ({ data, userData }) => {
  return (
    <div className="lg:w-[31rem]  mx-auto  bg-slate-50 shadow-2xl rounded-lg ">
      <div className="">
        {/* Header - Personal Info */}
        <header className="text-center  bg-blue-200  py-4">
          <h1 className="text-2xl font-bold text-blue-900 uppercase ">
            {userData?.name === "" || userData?.name === undefined
              ? data?.name
              : userData?.name}
          </h1>
          <p className="font-semibold uppercase ">
            {userData?.jobTitle === "" || userData?.jobTitle === undefined
              ? data?.jobTitle
              : userData?.jobTitle}
          </p>
          <p className="font-medium text-sm break-words max-w-[420px] mx-auto">
            {userData?.email === "" || userData?.email === undefined
              ? data?.email
              : userData?.email}{" "}
            |{" "}
            {userData?.phone === "" || userData?.phone === undefined
              ? data?.phone
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
              {data?.careerObjective && (
                <>
                  <h2 className=" uppercase text-sm  font-bold text-blue-900 border-b border-blue-950 ">
                    Career Objective
                  </h2>
                  <p className="mt-1 text-sm break-words max-w-[450px]">
                    {data?.careerObjective}
                  </p>
                </>
              )}
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
          {userData?.skills?.length >= 1 ? (
            // If userData.skills exist and the length is greater than 0, show userData.skills
            <section className="mb-1 space-y-3">
              <h2 className="uppercase text-sm font-bold text-blue-900 border-b border-blue-950">
                Skills
              </h2>
              <ul className="mt-1 text-sm grid grid-cols-2 justify-between list-disc list-inside">
                {userData?.skills.map((skill, index) => (
                  <li key={index} className="pl-2">
                    <h3 className="font-semibold inline-block">
                      {skill || "Html"}
                    </h3>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            // If userData.skills is empty or doesn't exist, fallback to data.skills
            data?.skills &&
            data?.skills.length > 0 && (
              <section className="mb-1 space-y-3">
                <h2 className="uppercase text-sm font-bold text-blue-900 border-b border-blue-950">
                  Skills
                </h2>
                <ul className="mt-1 text-sm grid grid-cols-2 justify-between list-disc list-inside">
                  {data?.skills.map((skill, index) => (
                    <li key={index} className="pl-2">
                      <h3 className="font-semibold inline-block">{skill}</h3>
                    </li>
                  ))}
                </ul>
              </section>
            )
          )}
          {/* Education */}
          {userData?.education?.length >= 1 ? (
            <section className="mb-1 space-y-3">
              <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
                Education
              </h2>
              <ul className=" text-sm ">
                {userData?.education.map((edu, index) => (
                  <li key={index}>
                    <h3 className=" font-semibold break-words max-w-[420px]">
                      {edu.degree || "Cse"} -{" "}
                      {edu.institution || "Harbard University"}{" "}
                      <span className="text-gray-500">
                        ({edu.year || "2024"})
                      </span>
                    </h3>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            data?.education &&
            data?.education.length > 0 && (
              <section className="mb-1 space-y-3">
                <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
                  Education
                </h2>
                <ul className=" text-sm ">
                  {data?.education.map((edu, index) => (
                    <li key={index}>
                      <h3 className=" font-semibold break-words max-w-[420px]">
                        {edu.degree} - {edu.institution}{" "}
                        <span className="text-gray-500">({edu.year})</span>
                      </h3>
                    </li>
                  ))}
                </ul>
              </section>
            )
          )}

          {/* Certifications */}
          {userData?.certifications && userData?.certifications.length >= 1 ? (
            <section className="mb-1 space-y-3">
              <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
                Certifications
              </h2>
              <ul className="mt-1 text-sm space-y-1 break-words max-w-[420px]">
                {userData?.certifications.map((cert, index) => (
                  <li key={index}>
                    <h3 className=" font-semibold break-words max-w-[420px]">
                      {cert.title || "Data Science with Python"} -{" "}
                      {cert.institution || "Coursera "}{" "}
                      <span className="text-gray-500">
                        ({cert.year || "2018"})
                      </span>
                    </h3>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            data?.certifications &&
            data?.certifications.length > 0 && (
              <section className="mb-1 space-y-3">
                <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
                  Certifications
                </h2>
                <ul className="mt-1 text-sm space-y-1 break-words max-w-[420px]">
                  {data?.certifications.map((cert, index) => (
                    <li key={index}>
                      <h3 className=" font-semibold break-words max-w-[420px]">
                        {cert.title} - {cert.institution}{" "}
                        <span className="text-gray-500">({cert.year})</span>
                      </h3>
                    </li>
                  ))}
                </ul>
              </section>
            )
          )}

          {/* Work Experience */}
          {userData?.workExperience && userData?.workExperience.length >= 1 ? (
            <section className="mb-1 space-y-3">
              <h2 className=" font-bold text-sm uppercase text-blue-900 border-b border-blue-950 ">
                Work Experience
              </h2>
              <ul className="mt-1 text-sm ">
                {userData?.workExperience.map((exp, index) => (
                  <li key={index}>
                    <h3 className=" font-semibold">
                      {exp.jobTitle || "Junior Data Analyst"} -{" "}
                      {exp.company || "Data Solutions"}{" "}
                      <span className="text-gray-500">
                        ({exp.years || "1 Year"})
                      </span>{" "}
                    </h3>
                    <p className="text-gray-600  text-sm max-w-[450px] break-words">
                      {exp.description ||
                        "Assisted in data cleaning and visualization tasks."}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            data?.workExperience &&
            data?.workExperience.length > 0 && (
              <section className="mb-1 space-y-3">
                <h2 className=" font-bold text-sm uppercase text-blue-900 border-b border-blue-950 ">
                  Work Experience
                </h2>
                <ul className="mt-1 text-sm ">
                  {data?.workExperience.map((exp, index) => (
                    <li key={index}>
                      <h3 className=" font-semibold">
                        {exp.jobTitle} - {exp.company}{" "}
                        <span className="text-gray-500">({exp.years})</span>{" "}
                      </h3>
                      <p className="text-gray-600  text-sm ">
                        {exp.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )
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
          {userData?.languages && userData?.languages.length >= 1 ? (
            <section className="mb-1 space-y-3">
              <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
                language
              </h2>
              <ul className="mt-1 text-sm  grid grid-cols-2 justify-between list-disc list-inside">
                {userData?.languages.map((language, index) => (
                  <li key={index} className="pl-2">
                    <h3 className=" font-semibold inline-block">
                      {language || "English"}
                    </h3>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            data?.languages &&
            data?.languages.length > 0 && (
              <section className="mb-1 space-y-3">
                <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
                  language
                </h2>
                <ul className="mt-1 text-sm  grid grid-cols-2 justify-between list-disc list-inside">
                  {data?.languages.map((language, index) => (
                    <li key={index} className="pl-2">
                      <h3 className=" font-semibold inline-block">
                        {language}
                      </h3>
                    </li>
                  ))}
                </ul>
              </section>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Template1;
