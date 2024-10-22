import img from "../../assets/resume3.jpg";
import { IoMail } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import axios from "axios";
const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;


const Template6 = ({ data, userData, setUserData }) => {
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("image", file);

            // API call to ImgBB
            axios
                .post(img_hosting_api, formData)
                .then((response) => {
                    // Get the URL of the uploaded image
                    const imageUrl = response.data.data.url;

                    // Update the userData state with the new profile image URL
                    setUserData((prevUserData) => ({
                        ...prevUserData,
                        profile: imageUrl,
                    }));
                })
                .catch((error) => {
                    console.error("Error uploading image to ImgBB:", error);
                });
        }
    };


    return (
        <div className="relative">
            <div className="w-[790px] min-h-[1000px] mx-auto flex bg-white">
                {/* 1st */}
                <div className="bg-[#fefbf9] w-[16rem]">
                    <div className=" h-[11rem] bg-[#fbe1d1] mx-auto py-3 mb-7 flex justify-center">
                        <img
                            className="rounded-full lg:w-[9rem] h-36 w-36 object-cover cursor-pointer"
                            src={userData?.profile || img}
                            alt=""
                            id="profile-pic"
                            onClick={() => document.getElementById("imageUpload").click()}
                        />
                        <input
                            type="file"
                            id="imageUpload"
                            style={{ display: "none" }}
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </div>
                    <div className="px-4">
                        {/* about me */}
                        {userData?.careerObjective === "" ||
                            userData?.careerObjective === undefined ? (
                            <>
                                <section className="mb-2">
                                    <h2 className=" uppercase font-bold  border-b border-black ">
                                        about me
                                    </h2>
                                    <p className="mt-1 text-sm">Use this section to give recruiters a quick glimpse of your
                                        professional profile. In just 3-4 lines, highlight your
                                        background, education and main skills.</p>
                                </section>
                            </>
                        ) : (
                            userData?.careerObjective !== "" && (
                                <section className="mb-2">
                                    <h2 className=" uppercase font-bold  border-b border-black ">
                                        about me
                                    </h2>
                                    <p className="mt-1 text-sm">
                                        {userData?.careerObjective}
                                    </p>
                                </section>
                            )
                        )}

                        <div className="flex flex-col items-start mt-6">
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
                        <section className="mb-2 mt-6 px-4">
                            <h2 className=" uppercase font-bold border-b border-black ">
                                Education
                            </h2>
                            <ul className="mt-1 text-sm space-y-2">
                                {userData?.education.map((edu, index) => (
                                    <li key={index}>
                                        <h3 className=" font-semibold">
                                            {edu.degree || "Your Degree"} -{" "}
                                            {edu.institution || "Institute Name"} -{" "}
                                            <span className="text-gray-600">({edu.year || "Passing Year"})</span>
                                        </h3>
                                        <p className="text-gray-600 mt-1 text-sm">{edu.details}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                    {/* languages */}
                    {userData?.languages && userData?.languages.length >= 1 && (
                        <section className="mb-2 px-4">
                            <h2 className=" uppercase font-bold  border-b border-black">
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
                {/* 2nd */}
                <div className="">
                    {/* Header - Personal Info */}
                    <header className="text-center mb-7 pt-4 bg-[#fbe1d1]  h-[11rem] flex flex-col items-end px-4">
                        <h1 className="text-3xl font-bold text-black uppercase">{" "}
                            {userData?.name === "" || userData?.name === undefined
                                ? "Your Name"
                                : userData?.name}</h1>
                        <p className="font-semibold uppercase mt-1">
                            {" "}
                            {userData?.jobTitle === "" || userData?.jobTitle === undefined
                                ? "Profession"
                                : userData?.jobTitle}
                        </p>
                        <div className="flex flex-col items-end mt-2">
                            <div className="flex items-center justify-center gap-2 ">
                                <p>{userData?.email === "" || userData?.email === undefined
                                    ? "yourmail@gmail.com"
                                    : userData?.email}</p>
                                <p>
                                    <IoMail />
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-2 ">
                                <p> {" "}
                                    {userData?.phone === "" || userData?.phone === undefined
                                        ? "+88012345678"
                                        : userData?.phone}</p>
                                <p>
                                    <FaPhoneFlip />
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-2 ">
                                <p className="inline"> {" "}
                                    {userData?.address === "" || userData?.address === undefined
                                        ? data?.address
                                        : userData?.address}</p>
                                <FaMapMarkerAlt className="inline" />
                            </div>
                        </div>
                    </header>
                    <div className="px-4">
                        {/* skills */}
                        {userData?.skills?.length >= 1 && (
                            <section className="mb-2">
                                <h2 className=" uppercase font-bold  border-b border-black ">
                                    skills
                                </h2>
                                <ul className="mt-1 text-sm  grid grid-cols-2  justify-between list-disc list-inside">
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
                                <h2 className=" uppercase font-bold  border-b border-black ">
                                    Certifications
                                </h2>
                                <ul className="mt-1 text-sm space-y-1">
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
                                <h2 className=" font-bold uppercase  border-b border-black ">
                                    Work Experience
                                </h2>
                                <ul className="mt-1 text-sm space-y-1">
                                    {userData?.workExperience.map((exp, index) => (
                                        <li key={index}>
                                            <h3 className=" font-semibold">
                                                {exp.jobTitle || "Your Position"} -{" "}
                                                {exp.company || "Company Name"} -{" "}
                                                <span className="text-gray-500">
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
                                                            ? new Date(exp.endDate).toLocaleDateString(
                                                                "en-US",
                                                                {
                                                                    year: "numeric",
                                                                    month: "short",
                                                                }
                                                            )
                                                            : "End Date"}
                                                    )
                                                </span>
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
                                <h2 className=" font-bold uppercase  border-b border-black">
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
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Template6;
