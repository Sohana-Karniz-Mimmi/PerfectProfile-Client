import Container from "../../Shared/Container";

const ResumeTemplate = ({ template }) => {
  console.log(template);
  const {
    _id,
    name,
    careerObjective,
    email,
    phone,
    address,
    education,
    certifications,
    workExperience,
    extraCurricularActivities,
  } = template;
  return (
    <Container className="max-w-4xl mx-auto  bg-slate-500 shadow-lg rounded-lg p-10">
      <div className="border-4 border-cyan-500">
        {/* Header - Personal Info */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600 mt-2">
            {email} | {phone} | {address}
          </p>
        </header>

        {/* Career Objective */}
        {careerObjective && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
              Career Objective
            </h2>
            <p className="mt-4 text-gray-600">{careerObjective}</p>
          </section>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
              Education
            </h2>
            <ul className="mt-4 space-y-4">
              {education.map((edu, index) => (
                <li key={index}>
                  <h3 className="text-lg font-semibold">
                    {edu.degree} - {edu.institution}
                  </h3>
                  <p className="text-gray-500">{edu.year}</p>
                  <p className="text-gray-600 mt-2">{edu.details}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
              Certifications
            </h2>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <h3 className="text-lg font-semibold">
                    {cert.title} - {cert.institution}
                  </h3>
                  <p className="text-gray-500">{cert.year}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Work Experience */}
        {workExperience && workExperience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
              Work Experience
            </h2>
            <ul className="mt-4 space-y-4">
              {workExperience.map((exp, index) => (
                <li key={index}>
                  <h3 className="text-lg font-semibold">
                    {exp.jobTitle} - {exp.company}
                  </h3>
                  <p className="text-gray-500">{exp.years}</p>
                  <p className="text-gray-600 mt-2">{exp.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Extra Curricular Activities */}
        {extraCurricularActivities && extraCurricularActivities.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
              Extra Curricular Activities
            </h2>
            <ul className="mt-4 space-y-2">
              {extraCurricularActivities.map((activityItem, index) => (
                <li key={index} className="text-gray-600">
                  <strong>{activityItem.activity}</strong> -{" "}
                  {activityItem.description}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </Container>
  );
};

export default ResumeTemplate;
