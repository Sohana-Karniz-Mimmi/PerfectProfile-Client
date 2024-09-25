import { IoMail } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
const Template4 = ({ data }) => {
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
            <h1 className="text-2xl font-bold  uppercase">{name}</h1>
            <p className="font-semibold uppercase">{jobTitle}</p>
          </div>
          <div className="flex flex-col items-start mt-4 lg:mt-3 text-[11px] font-semibold lg:font-normal lg:text-base">
            <div className="flex items-center justify-center gap-2 ">
              <p>
                <IoMail />
              </p>
              <p>{email}</p>
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <p>
                <FaPhoneFlip />
              </p>
              <p>{phone}</p>
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <FaMapMarkerAlt className="inline" />
              <p className="inline">{address}</p>
            </div>
          </div>
        </header>
        <div className="lg:px-7 px-4 py-3 ">
          {/* Career Objective */}
          {careerObjective && (
            <section className="mb-1">
              <h2 className=" uppercase text-sm  font-semibold  text-center  bg-gray-400">
                Career Objective
              </h2>
              <p className="mt-1 text-sm">{careerObjective}</p>
            </section>
          )}

          {/* skills */}
          {skills && skills.length > 0 && (
            <section className="mb-1">
              <h2 className=" uppercase text-sm font-semibold  text-center  bg-gray-400 ">
                skills
              </h2>
              <ul className="mt-1 text-sm  grid grid-cols-2 justify-between list-disc list-inside">
                {skills.map((skill, index) => (
                  <li key={index} className="pl-2">
                    <h3 className=" font-semibold inline-block">{skill}</h3>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {/* Education */}
          {education && education.length > 0 && (
            <section className="mb-1">
              <h2 className=" uppercase text-sm font-semibold  text-center  bg-gray-400 ">
                Education
              </h2>
              <ul className=" text-sm ">
                {education.map((edu, index) => (
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
          {certifications && certifications.length > 0 && (
            <section className="mb-1">
              <h2 className=" uppercase text-sm font-semibold  text-center  bg-gray-400 ">
                Certifications
              </h2>
              <ul className="mt-1 text-sm space-y-1">
                {certifications.map((cert, index) => (
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
          {workExperience && workExperience.length > 0 && (
            <section className="mb-1">
              <h2 className="  text-sm uppercase font-semibold  text-center  bg-gray-400 ">
                Work Experience
              </h2>
              <ul className="mt-1 text-sm ">
                {workExperience.map((exp, index) => (
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
          {extraCurricularActivities &&
            extraCurricularActivities.length > 0 && (
              <section className="mb-1">
                <h2 className="  text-sm uppercase font-semibold  text-center  bg-gray-400">
                  Extra Curricular Activities
                </h2>
                <ul className="mt-1 text-sm space-y-1">
                  {extraCurricularActivities.map((activityItem, index) => (
                    <li key={index} className="text-gray-600">
                      <strong>{activityItem.activity}</strong> -{" "}
                      {activityItem.description}
                    </li>
                  ))}
                </ul>
              </section>
            )}

          {/* languages */}
          {languages && languages.length > 0 && (
            <section className="mb-1">
              <h2 className=" uppercase text-sm font-semibold  text-center  bg-gray-400 ">
                language
              </h2>
              <ul className="mt-1 text-sm  grid grid-cols-2 justify-between list-disc list-inside">
                {languages.map((language, index) => (
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
