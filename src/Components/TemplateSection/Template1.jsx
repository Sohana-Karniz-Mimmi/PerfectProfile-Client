const Template1 = ({ data, userData }) => {
  console.log(userData)
  return (
    <div className="lg:w-[790px] w-full  min-h-[1000px] h-full mx-auto bg-white shadow-lg rounded-lg">
      <div className="">
        {/* Header - Personal Info */}
        <header className="text-center bg-blue-200 py-8">
          <h1 className="lg:text-4xl text-2xl font-bold text-blue-900 uppercase">
            {userData?.name || data?.name}
          </h1>
          <h2 className="font-semibold mt-1.5 mb-1.5 text-xl uppercase">
            {userData?.jobTitle || data?.jobTitle}
          </h2>
          <p className="font-medium  mx-auto">
            {userData?.email || data?.email} | {userData?.phone || data?.phone} |{" "}
            {userData?.address || data?.address}
          </p>
        </header>

        <div className="px-7 py-6 space-y-5">
          {/* Career Objective */}
          {(userData?.careerObjective || data?.careerObjective) && (
            <section className="mb-2">
              <h3 className="uppercase text-xl font-bold text-blue-900 border-b border-blue-950">
                Career Objective
              </h3>
              <p className="mt-2  font-semibold">
                {userData?.careerObjective || data?.careerObjective}
              </p>
            </section>
          )}

          {/* Skills */}
          {(userData?.skills?.length || data?.skills?.length) && (
            <section className="mb-1 space-y-3">
              <h3 className="uppercase text-xl font-bold text-blue-900 border-b border-blue-950">
                Skills
              </h3>
              <ul className="mt-1 pl-2 grid grid-cols-2 list-disc list-inside">
                {(userData?.skills || data?.skills).map((skill, index) => (
                  <li key={index} className="pl-1">
                    <span className="font-semibold inline-block">{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Education */}
          {(userData?.education?.length || data?.education?.length) && (
            <section className="mb-2 space-y-3">
              <h3 className="uppercase text-xl font-bold text-blue-900 border-b border-blue-950">
                Education
              </h3>
              <ul className="mt-2 space-y-1">
                {(userData?.education || data?.education).map((edu, index) => (
                  <li key={index}>
                    <span className="font-semibold break-words ">
                      {edu.degree} - {edu.institution}{" "}
                      <span className="text-gray-500">({edu.year})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Certifications */}
          {(userData?.certifications?.length || data?.certifications?.length) && (
            <section className="mb-2 space-y-3">
              <h3 className="uppercase text-xl font-bold text-blue-900 border-b border-blue-950">
                Certifications
              </h3>
              <ul className="mt-2  space-y-1  ">
                {(userData?.certifications || data?.certifications).map(
                  (cert, index) => (
                    <li key={index}>
                      <span className="font-semibold">
                        {cert.title} - {cert.institution}{" "}
                        <span className="text-gray-500">({cert.year})</span>
                      </span>
                    </li>
                  )
                )}
              </ul>
            </section>
          )}

          {/* Work Experience */}
          {(userData?.workExperience?.length || data?.workExperience?.length) && (
            <section className="mb-2 space-y-3">
              <h3 className="font-bold text-xl uppercase text-blue-900 border-b border-blue-950">
                Work Experience
              </h3>
              <ul className="mt-2 space-y-2 ">
                {(userData?.workExperience || data?.workExperience).map(
                  (exp, index) => (
                    <li key={index}>
                      <span className="font-semibold">
                        {exp.jobTitle} - {exp.company}{" "}
                        <span className="text-gray-500">({exp.years})</span>
                      </span>
                      <p className="text-gray-600  break-words ">
                        {exp.description}
                      </p>
                    </li>
                  )
                )}
              </ul>
            </section>
          )}

          {/* Languages */}
          {(userData?.languages?.length || data?.languages?.length) && (
            <section className="mb-2 space-y-4">
              <h3 className="uppercase text-xl font-bold text-blue-900 border-b border-blue-950">
                Languages
              </h3>
              <ul className="mt-2 pl-2 grid grid-cols-2 list-disc list-inside">
                {(userData?.languages || data?.languages).map((language, index) => (
                  <li key={index} className="pl-1">
                    <h3 className="font-semibold inline-block">{language}</h3>
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
