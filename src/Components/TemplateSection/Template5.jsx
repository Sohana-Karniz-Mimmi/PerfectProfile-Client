import { IoMail } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
const Template5 = ({ data }) => {
  console.log(data);
  // const {
  //   _id,
  //   name,
  //   jobTitle,
  //   careerObjective,
  //   email,
  //   phone,
  //   address,
  //   education,
  //   certifications,
  //   workExperience,
  //   skills,
  //   languages,
  //   extraCurricularActivities,
  // } = data;
  return (
    <div className="w-[35rem] h-[41rem] mx-auto    shadow-2xl rounded-lg  ">
      {/* Header - Personal Info */}
      <header className="text-center mb-3 bg-[#DDD0D1]  py-6 px-10">
        <h1 className="text-3xl font-bold text-black uppercase">{data?.name}</h1>
        <p className="font-semibold uppercase mt-1">{data?.jobTitle}</p>
        <div className="flex items-start mt-2 gap-3 mx-auto text-sm">
          <div className="flex items-center justify-center gap-2 ">
            <p>
              <IoMail />
            </p>
            <p>{data?.email}</p>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <p>
              <FaPhoneFlip />
            </p>
            <p>{data?.phone}</p>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <FaMapMarkerAlt className="inline" />
            <p className="inline">{data?.address}</p>
          </div>
        </div>
      </header>
      {/* about me */}
      {data?.careerObjective && (
        <>
          <section className="mb-4 px-3">
            <h2 className=" uppercase text-center font-bold  border-b border-black ">
              career objective
            </h2>
            <p className="mt-1 text-sm">{data?.careerObjective}</p>
          </section>
        </>
      )}

      <div className="flex justify-center ">
        {/* 1st */}
        <div className=" w-[16rem]">
          {/* Education */}
          {data?.education && data?.education.length > 0 && (
            <section className="mb-2 mt-6 px-4">
              <h2 className=" uppercase font-bold border-b border-black ">
                Education
              </h2>
              <ul className="mt-2 text-sm space-y-2">
                {data?.education.map((edu, index) => (
                  <li key={index}>
                    <h3 className=" font-semibold">
                      {edu.degree} - {edu.institution}{" "}
                      <span className="text-gray-600">({edu.year})</span>
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm">{edu.details}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* languages */}
          {data?.languages && data?.languages.length > 0 && (
            <section className="mb-2 mt-5 px-4">
              <h2 className=" uppercase font-bold  border-b border-black">
                language
              </h2>
              <ul className="mt-1 text-sm   justify-between list-disc list-inside">
                {data?.languages.map((language, index) => (
                  <li key={index} className="pl-2">
                    <h3 className=" font-semibold inline-block">{language}</h3>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
        {/* 2nd */}
        <div className="">
          <div className="px-4">
            {/* skills */}
            {data?.skills && data?.skills.length > 0 && (
              <section className="mb-2">
                <h2 className=" uppercase font-bold  border-b border-black ">
                  skills
                </h2>
                <ul className="mt-1 text-sm  grid grid-cols-2  justify-between list-disc list-inside">
                  {data?.kills?.map((skill, index) => (
                    <li key={index} className="">
                      <h3 className=" font-semibold inline-block">{skill}</h3>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Certifications */}
            {data?.certifications && data?.certifications.length > 0 && (
              <section className="mb-2">
                <h2 className=" uppercase font-bold  border-b border-black ">
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
              <section className="mb-2">
                <h2 className=" font-bold uppercase  border-b border-black ">
                  Work Experience
                </h2>
                <ul className="mt-1 text-sm space-y-1">
                  {data?.workExperience.map((exp, index) => (
                    <li key={index}>
                      <h3 className=" font-semibold">
                        {exp.jobTitle} - {exp.company}{" "}
                        <span className="text-gray-500">({exp.years})</span>{" "}
                      </h3>
                      <p className="text-gray-600 mt-1 text-sm">
                        {exp.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Extra Curricular Activities */}
            {data?.extraCurricularActivities && data.extraCurricularActivities.length > 0 && (
              <section className="mb-2">
                <h2 className=" font-bold uppercase  border-b border-black">
                  Extra Curricular Activities
                </h2>
                <ul className="mt-1 text-sm space-y-1">
                  {data?.extraCurricularActivities.map((activityItem, index) => (
                    <li key={index} className="text-gray-600">
                      <strong>{activityItem.activity}</strong> -{" "}
                      {activityItem.description}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template5;
