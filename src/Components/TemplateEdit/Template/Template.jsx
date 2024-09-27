const Template = ({ data }) => {
 
  return (
    <div className="lg:w-[31rem] h-[55rem]  md:h-[41rem] mx-auto  bg-slate-50 shadow-2xl rounded-lg  ">
      <div className="">
        {/* Header - Personal Info */}
        <header className="text-center  bg-blue-200  py-4">
          <h1 className="text-2xl font-bold text-blue-900 uppercase">
            {data?.name}
          </h1>
          <p className="font-semibold uppercase">{data?.jobTitle}</p>
          <p className="font-medium text-sm ">
            {data?.email} | {data?.phone} | {data?.address}
          </p>
        </header>
        <div className="px-7 py-3 ">
          {/* Career Objective */}
          {data?.careerObjective && (
            <section className="mb-1">
              <h2 className=" uppercase text-sm  font-bold text-blue-900 border-b border-blue-950 ">
                Career Objective
              </h2>
              <p className="mt-1 text-sm">{data?.careerObjective}</p>
            </section>
          )}

          {/* skills */}
          {data?.skills && data?.skills.length > 0 && (
            <section className="mb-1">
              <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
                skills
              </h2>
              <ul className="mt-1 text-sm  grid grid-cols-2 justify-between list-disc list-inside">
                {data?.skills.map((skill, index) => (
                  <li key={index} className="pl-2">
                    <h3 className=" font-semibold inline-block">{skill}</h3>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {/* Education */}
          {data?.education && data?.education.length > 0 && (
            <section className="mb-1">
              <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
                Education
              </h2>
              <ul className=" text-sm ">
                {data?.education.map((edu, index) => (
                  <li key={index}>
                    <h3 className=" font-semibold">
                      {edu.degree} - {edu.institution}{" "}
                      <span className="text-gray-500">({edu.year})</span>
                    </h3>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Certifications */}
          {data?.certifications && data?.certifications.length > 0 && (
            <section className="mb-1">
              <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
                Certifications
              </h2>
              <ul className="mt-1 text-sm space-y-1">
                {data?.certifications.map((cert, index) => (
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
          {data?.workExperience && data?.workExperience.length > 0 && (
            <section className="mb-1">
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
                    <p className="text-gray-600  text-sm">{exp.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Extra Curricular Activities */}
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
            )}

          {/* languages */}
          {data?.languages && data?.languages.length > 0 && (
            <section className="mb-1">
              <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">
                language
              </h2>
              <ul className="mt-1 text-sm  grid grid-cols-2 justify-between list-disc list-inside">
                {data?.languages.map((language, index) => (
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

export default Template;
