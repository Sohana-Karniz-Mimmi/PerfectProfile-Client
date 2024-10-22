import img from "../../assets/resumeimg2.png";
import { IoMail } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Template3 = ({ data, userData, }) => {

    return (
        <div className="relative">

            {/* <div className="bg-slate-200 rounded-full px-2 py-0.5 flex gap-1 justify-between items-center absolute -top-3 left-[45%]">
        <div className=" bg-primary rounded-full  text-white p-1  ">
          <FaStar className="" />
          top-0 
        </div>
        <p className="font-semibold  ">{data.package}</p>
      </div> */}

            <div className="w-[790px] min-h-[1000px] mx-auto flex  ">
                {/* 1st */}
                <div className="bg-blue-50  lg:w-[13rem] w-[9rem]">

                    <div className=" h-[132px] lg:h-[9rem] bg-blue-100 mx-auto lg:py-3 py-2 mb-12 flex justify-center">
                        <img
                            className="rounded-full lg:h-36 lg:w-36 w-32 h-32 mt-3 "
                            src={img}
                            alt=""
                        />
                    </div>


                    <div className="lg:px-3 px-2">
                        {/* about me */}
                        {userData?.careerObjective === "" ||
                            userData?.careerObjective === undefined ? (
                            <section className="mb-2">
                                <h2 className=" uppercase g:text-base text-sm  font-bold  border-b border-black ">
                                    about me
                                </h2>
                                <p className="mt-1 text-[13px] lg:text-sm">
                                    Use this section to give recruiters a quick glimpse of your
                                    professional profile. In just 3-4 lines, highlight your
                                    background, education and main skills.
                                </p>
                            </section>
                        ) : (
                            userData?.careerObjective !== "" && (
                                <section className="mb-1">
                                    <h2 className=" uppercase g:text-base text-sm  font-bold  border-b border-black">
                                        About Me
                                    </h2>
                                    <p className="mt-1 text-sm font-roboto break-words text-justify max-w-[450px]">
                                        {userData?.careerObjective}
                                    </p>
                                </section>
                            )
                        )}

                        <div className="flex flex-col items-start mt-3 space-y-1 text-xs lg:text-sm">
                            <div className="flex items-center justify-center gap-2 ">
                                <p>
                                    <IoMail />
                                </p>
                                <p>
                                    {userData?.email === "" || userData?.email === undefined
                                        ? "yourmail@gmail.com"
                                        : userData?.email}
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
                                        : userData?.phone}
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-2 ">
                                <FaMapMarkerAlt className="inline" />
                                <p className="inline">
                                    {" "}
                                    {userData?.address === "" || userData?.address === undefined
                                        ? data?.address
                                        : userData?.address}
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Education */}
                    {userData?.education?.length >= 1 && (
                        <section className="mb-1 mt-3 space-y-2">
                            <h2 className=" uppercase text-sm font-roboto font-bold border-b border-white ">
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

                    {/* languages */}
                    {userData?.languages && userData?.languages.length >= 1 && (
                        <section className="mb-1 space-y-3">
                            <h2 className=" uppercase text-sm font-roboto font-bold  border-b border-black ">
                                language
                            </h2>
                            <ul className="mt-1 text-sm font-roboto  grid grid-cols-2 justify-between list-disc list-inside">
                                {userData?.languages.map((language, index) => (
                                    <li key={index} className="pl-2">
                                        <h3 className=" font-semibold inline-block">
                                            {language}
                                        </h3>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>



                {/* 2nd */}
                <div className="w-full">
                    {/* Header - Personal Info */}
                    <header className="text-center mb-3 bg-blue-100 py-[16px]  lg:py-10">
                        <h1 className="text-3xl font-bold text-black uppercase">{" "}
                            {userData?.name === "" || userData?.name === undefined
                                ? "Your Name"
                                : userData?.name}</h1>
                        <p className="font-semibold uppercase mt-1"> {" "}
                            {userData?.jobTitle === "" || userData?.jobTitle === undefined
                                ? "Profession"
                                : userData?.jobTitle}</p>
                    </header>
                    <div className=" px-2">
                        {/* skills */}
                        {userData?.skills?.length >= 1 && (
                            <section className="mb-2">
                                <h2 className=" uppercase g:text-base text-sm  font-bold  border-b border-black ">
                                    skills
                                </h2>
                                <ul className="mt-1 text-[11px] lg:text-sm  grid grid-cols-2  justify-between list-disc list-inside">
                                    {userData?.skills.map((skill, index) => (
                                        <li key={index} className="">
                                            <h3 className=" font-semibold inline-block">{skill}</h3>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Certifications */}
                        {userData?.certifications && userData?.certifications.length >= 1 && (
                            <section className="mb-2">
                                <h2 className=" uppercase g:text-base text-sm  font-bold  border-b border-black ">
                                    Certifications
                                </h2>
                                <ul className="mt-1 text-[13px] lg:text-sm space-y-1">
                                    {userData?.certifications.map((cert, index) => (
                                        <li key={index}>
                                            <h3 className=" font-semibold">
                                                {cert.title || "Course Name"} -{" "}
                                                {cert.institution || "Institute Name"} -{" "}
                                                <span className="text-gray-500">({cert.year || "Duration"})</span>
                                            </h3>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Work Experience */}
                        {userData?.workExperience && userData?.workExperience.length >= 1 && (
                            <section className="mb-2">
                                <h2 className=" font-bold g:text-base text-sm  uppercase  border-b border-black ">
                                    Work Experience
                                </h2>
                                <ul className="mt-1 text-[13px] lg:text-sm space-y-1">
                                    {userData?.workExperience.map((exp, index) => (
                                        <li key={index}>
                                            <h3 className=" font-semibold">
                                                {exp.jobTitle || "Your Position"} -{" "}
                                                {exp.company || "Company Name"} -{" "}
                                                <span className="text-gray-500"> (
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
                                                            ? new Date(exp.endDate).toLocaleDateString(
                                                                "en-US",
                                                                {
                                                                    year: "numeric",
                                                                    month: "short",
                                                                }
                                                            )
                                                            : "End Date"}
                                                    )</span>
                                            </h3>
                                            <p className="text-gray-600 mt-1 text-sm">
                                                {exp.description ||
                                                    "Include your degree, school name and the year you graduated. If you don’t have a degree, list coursework or training that’s relevant to the job you’re applying for."}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Extra Curricular Activities */}
                        {/* {extraCurricularActivities && extraCurricularActivities.length > 0 && (
                            <section className="mb-2">
                                <h2 className=" font-bold g:text-base text-sm  uppercase  border-b border-black">
                                    Extra Curricular Activities
                                </h2>
                                <ul className="mt-1 text-[13px] lg:text-sm space-y-1">
                                    {extraCurricularActivities.map((activityItem, index) => (
                                        <li key={index} className="text-gray-600">
                                            <strong>{activityItem.activity}</strong> -{" "}
                                            {activityItem.description}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )} */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Template3;
