const MyTemplate = ({ data, userData }) => {
    return (
      <div className="w-[790px] min-h-[1000px] mx-auto bg-white shadow-lg rounded-lg">
        <header className="text-center bg-blue-200 py-8">
          <h1 className="text-4xl font-bold text-blue-900 uppercase">
          {userData?.name === "" || userData?.name === undefined
              ? "Your Name"
              : userData?.name}
          </h1>
          <p className="font-semibold mt-1.5 mb-1.5 text-xl uppercase">
          {userData?.jobTitle === "" || userData?.jobTitle === undefined
              ? "Profession"
              : userData?.jobTitle}
          </p>
          <p className="font-medium">
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
  
        <div className="px-7 py-6 space-y-5">
          {/* Career Objective */}
          {userData?.careerObjective === "" ||
          userData?.careerObjective === undefined ? (
            <section className="mb-2">
              <h3 className="uppercase text-xl font-bold text-blue-900 border-b border-blue-950">
                Career Objective
              </h3>
              <p className="mt-2 font-semibold">
                {userData?.careerObjective || data?.careerObjective}
              </p>
            </section>
          ) : (
            userData?.careerObjective !== "" && (
              <section className="mb-1">
                <h2 className=" uppercase text-xl font-bold text-blue-900 border-b border-blue-950">
                  Career Objective
                </h2>
                <p className="mt-1 font-roboto ">
                  {userData?.careerObjective}
                </p>
              </section>
            )
          )}
  
          {/* Skills */}
          {userData?.skills?.length >= 1 && (
            <section className="mb-1">
              <h3 className="uppercase text-xl font-bold text-blue-900 border-b border-blue-950">
                Skills
              </h3>
              <ul className="mt-1 list-disc list-inside">
              {userData?.skills.map((skill, index) => (
                  <li key={index} className="pl-1">
                    <span className="font-semibold">{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
  
          {/* Education */}
          {userData?.education?.length >= 1 && (
            <section className="mb-2">
              <h3 className="uppercase text-xl font-bold text-blue-900 border-b border-blue-950">
                Education
              </h3>
              <ul className="mt-2 space-y-1">
              {userData?.education.map((edu, index) => (
                  <li key={index}>
                    <span className="font-semibold break-words">
                    {edu.degree || "Your Degree"} -{" "}
                      {edu.institution || "Institute Name"} -{" "}
                      <span className="">({edu.year || "Passing Year"})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}
  
          {/* Certifications */}
          {userData?.certifications && userData?.certifications.length >= 1 && (
            <section className="mb-2">
              <h3 className="uppercase text-xl font-bold text-blue-900 border-b border-blue-950">
                Certifications
              </h3>
              <ul className="mt-2 space-y-1">
              {userData?.certifications.map((cert, index) => (
                  <li key={index}>
                    <span className="font-semibold">
                    {cert.title || "Course Name"} -{" "}
                      {cert.institution || "Institute Name"} -{" "}
                      <span className="">
                        ({cert.year || "Duration"})
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}
  
          {/* Work Experience */}
          {userData?.workExperience && userData?.workExperience.length >= 1 && (
            <section className="mb-2">
              <h3 className="font-bold text-xl uppercase text-blue-900 border-b border-blue-950">
                Work Experience
              </h3>
              <ul className="mt-2 space-y-2">
              {userData?.workExperience.map((exp, index) => (
                  <li key={index}>
                    <span className="font-semibold">
                    {exp.jobTitle || "Your Postion"} -{" "}
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
                    </span>
                    <p className="text-gray-600 break-words">{exp.description ||
                        "Include your degree, school name and the year you graduated. If you don’t have a degree, list coursework or training that’s relevant to the job you’re applying for."}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
  
          {/* Languages */}
          {userData?.languages && userData?.languages.length >= 1 && (
            <section className="mb-2">
              <h3 className="uppercase text-xl font-bold text-blue-900 border-b border-blue-950">
                Languages
              </h3>
              <ul className="mt-2 list-disc list-inside">
              {userData?.languages.map((language, index) => (
                  <li key={index} className="pl-1">
                    <h3 className="font-semibold">{language}</h3>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    );
  };
  
  export default MyTemplate;
  