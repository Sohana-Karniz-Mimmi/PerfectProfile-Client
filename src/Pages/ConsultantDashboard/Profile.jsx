import { useEffect, useRef, useState } from "react";
import useAuth from "../../Hook/useAuth";
import { FiEdit } from "react-icons/fi";
import img from "../../assets/consultation/profile.png";
import { TiCameraOutline } from "react-icons/ti";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { FaPlus, FaTrash, FaTrashAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet-async";
import useRole from "../../Hook/useRole";
const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
const Profile = () => {
  const { user } = useAuth();
  console.log(user);
  const [role] = useRole();
  const axiosPublic = useAxiosPublic();
  const [image, setImage] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(
    role.experience || ""
  );
  const [selectedExpertise, setSelectedExpertise] = useState(
    role.expertise || ""
  );

  const formRef = useRef(null);
  const inputRef = useRef(null);

  const handleReset = (e) => {
    e.preventDefault();
    formRef.current.reset();
  };

  const handleImageUpload = async (e) => {
    // live preview img
    inputRef.current.click();
    const imgFiles = e.target.files[0];
    setImage(imgFiles);
    const fileData = new FormData();
    fileData.append("image", imgFiles);

    const file = { image: e.target.files[0] };

    const res = await axiosPublic.post(img_hosting_api, file, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
    // console.log(data?.image);

    if (res.data.success) {
      const image = res.data.data.display_url;
      console.log("image", image);
      setImage(image);
    }
  };

  // add more experience
  const [userData, setUserData] = useState({
    workExperience:
      role.workExperience && role.workExperience.length > 0
        ? role.workExperience
        : [
            {
              jobRole: "",
              company: "",
              jobTitle: "",
              isCurrent: false,
            },
          ],
  });

  // update data in initial render
  useEffect(() => {
    if (role.workExperience && role.workExperience.length > 0) {
      setUserData({ workExperience: role.workExperience });
    }
  }, [role.workExperience]);
  console.log(role);

  const addWorkExperienceArrayEntry = () => {
    const newEntry = {
      jobRole: "",
      company: "",
      jobTitle: "",
      isCurrent: false,
    };
    setUserData((prevData) => ({
      ...prevData,
      workExperience: [...prevData.workExperience, newEntry],
    }));
  };

  // Update specific work experience entry
  const handleWorkExperienceChange = (index, field, value) => {
    const updatedWorkExperience = userData.workExperience.map((experience, i) =>
      i === index ? { ...experience, [field]: value } : experience
    );
    setUserData((prevData) => ({
      ...prevData,
      workExperience: updatedWorkExperience,
    }));
  };

  // Delete Work experience section
  const deleteWorkExperience = (index) => {
    const updatedWorkExperience = userData.workExperience.filter(
      (_, i) => i !== index
    );
    setUserData((prevData) => ({
      ...prevData,
      workExperience: updatedWorkExperience,
    }));
  };

  // update profile data in db
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const address = form.address.value;
    const expertise = form.expertise.value;
    const experience = form.experience.value;
    const facebook = form.facebook.value;
    const about = form.about.value;
    const twitter = form.twitter.value;
    const linkdin = form.linkdin.value;

    const consultantData = {
      name,
      email,
      number,
      experience,
      expertise,
      address,
      facebook,
      about,
      twitter,
      linkdin,
      image,
      workExperience: userData.workExperience,
    };

    console.log(consultantData);

    axiosPublic
      .patch(`/consultant-info-update/user/${user?.email}`, consultantData)
      .then((res) => {
        console.log(res.data);
        toast.success("Your information has been updated");
      });
  };

  // set default value as role.experience & role.expertise
  useEffect(() => {
    if (role.experience) {
      setSelectedExperience(role.experience);
    }
  }, [role.experience]);

  useEffect(() => {
    if (role.expertise) {
      setSelectedExpertise(role.expertise);
    }
  }, [role.expertise]);

  return (
    <div>
      <Helmet>
        <title>Profile - PerfectProfile</title>
      </Helmet>

      <div className="min-h-screen">
        <div className="mx-auto lg:px-5  xl:px-10">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full  mt-6   flex flex-col gap-3 "
          >
            <div className="flex justify-center  xl:flex-row lg:gap-80 md:gap-40 flex-col gap-3  xl:gap-[34rem] items-center ">
              <div>
                <h1 className="text-3xl font-bold text-secondary flex justify-center items-center  lg:gap-3 font-lora">
                  Edit Profile <FiEdit />
                </h1>
                <img src="" alt="" />
              </div>

              {/* img */}

              <div className="relative ">
                {typeof image === "string" ? (
                  <img
                    src={role.image || image}
                    alt="Uploaded"
                    className="rounded-full lg:w-[10rem] h-40 w-36 cursor-pointer"
                  />
                ) : (
                  <img
                    src={image ? URL.createObjectURL(image) : img}
                    alt="Profile"
                    className="rounded-full lg:w-[10rem] h-40 w-36 cursor-pointer"
                    onClick={() =>
                      document.getElementById("imageUpload").click()
                    }
                  />
                )}

                {/* {
  typeof image === "string"
    ? // Show preview if the user has selected a new image
      <img
        src={URL.createObjectURL(image)}
        alt="Profile Preview"
        className="rounded-full lg:w-[10rem] h-40 w-36 cursor-pointer"
        onClick={() => document.getElementById("imageUpload").click()}
      />
    : consultant?.image
    ? // If the consultant has an image, display it
      <img
        src={consultant.image}
        alt="Consultant Image"
        className="rounded-full lg:w-[10rem] h-40 w-36 cursor-pointer"
        onClick={() => document.getElementById("imageUpload").click()}
      />
    : // Default image if no consultant image or new image is selected
      <img
        src={img}
        alt="Default Image"
        className="rounded-full lg:w-[10rem] h-40 w-36 cursor-pointer"
        onClick={() => document.getElementById("imageUpload").click()}
      />
} */}

                <TiCameraOutline className="absolute text-gray-600 text-4xl top-24" />

                <input
                  type="file"
                  id="imageUpload"
                  ref={inputRef}
                  name="image"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            {/* basic info */}
            <div className="flex md:flex-col lg:flex-col xl:flex-row justify-center items-start gap-12">
              <div>
                <h1 className="mt-6 mb-4 font-lora font-semibold text-xl">
                  Personal Information :
                </h1>
                <div className="space-y-4">
                  {/* 1st row */}
                  <div className="flex flex-col font-montserrat items-start justify-start gap-5">
                    <div className="relative">
                      <label
                        htmlFor="text"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={role.name || user?.displayName}
                        placeholder="Enter your name"
                        required
                        className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      />
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={user?.email}
                        id="email"
                        placeholder="Enter your email"
                        required
                        className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      />
                    </div>
                    {/* phone */}
                    <div className="relative">
                      <label
                        htmlFor="number"
                        className="block  text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        defaultValue={role.number}
                        name="number"
                        id="number"
                        placeholder="Enter Your Phone Number"
                        className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      />
                    </div>
                    {/* address */}

                    <div className="relative">
                      <label
                        htmlFor="text"
                        className="block  text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        defaultValue={role.address}
                        name="address"
                        id="address"
                        placeholder="Please Provide Your Address"
                        className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      />
                    </div>

                    {/* bio */}

                    <div className="mb-4">
                      <label
                        htmlFor="about"
                        className="block  text-sm font-medium text-gray-700"
                      >
                        About Me:
                      </label>
                      <textarea
                        id="about"
                        defaultValue={role.about}
                        name="about"
                        className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        placeholder="Enter your message"
                        rows="7"
                      />
                    </div>

                    {/* socials */}
                    <div>
                      <h1 className="mb-5 mt-5 font-lora text-xl font-semibold">
                        Socials :
                      </h1>

                      <div className="flex flex-col justify-start items-start gap-4">
                        {/* facebook */}
                        <div className="relative">
                          <label
                            htmlFor="text"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Facebook
                          </label>
                          <input
                            type="url"
                            name="facebook"
                            defaultValue={role.facebook}
                            placeholder="Facebook Profile Link"
                            className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                          />
                        </div>
                        {/* twitter */}
                        <div className="relative">
                          <label
                            htmlFor="text"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Twitter
                          </label>
                          <input
                            type="url"
                            name="twitter"
                            defaultValue={role.twitter}
                            placeholder="Twitter Profile Link"
                            className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                          />
                        </div>
                        {/* linkdin */}
                        <div className="relative">
                          <label
                            htmlFor="text"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Linkdin
                          </label>
                          <input
                            type="url"
                            defaultValue={role.linkdin}
                            name="linkdin"
                            placeholder="Linkdin Profile Link"
                            className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Information: */}
              <div>
                <h1 className="mb-5 mt-5 text-xl font-lora font-semibold">
                  Career Information:
                </h1>
                <div className="space-y-4 font-montserrat">
                  <div className="flex flex-col justify-start items-start gap-5">
                    {/* 1 */}
                    <div className="relative">
                      <label
                        htmlFor="expertise"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Area of Expertise
                      </label>
                      <select
                        name="expertise"
                        id="expertise"
                        value={selectedExpertise}
                        onChange={(e) => setSelectedExpertise(e.target.value)}
                        className="mt-1 block w-full md:w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm "
                      >
                        <option value="">Select Area</option>
                        <option value="Technical">Technical</option>
                        <option value="Non-Technical">Non-Technical</option>
                      </select>
                    </div>

                    {/* 2 */}
                    <div className="relative">
                      <label
                        htmlFor="experience"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Years of Experience
                      </label>
                      <select
                        name="experience"
                        id="experience"
                        value={selectedExperience}
                        onChange={(e) => setSelectedExperience(e.target.value)}
                        className="mt-1 block w-full md:w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm "
                      >
                        <option value="">Select Experience</option>
                        <option value="0-1">0 - 1 year</option>
                        <option value="1-2">1 - 2 years</option>
                        <option value="2-3">2 - 3 years</option>
                        <option value="3-4">3 - 4 years</option>
                        <option value="4-5">4 - 5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                    </div>

                    {/* work experience */}
                    <h1 className="mb-5 mt-5 font-lora text-xl font-semibold">
                      Work Experience(If Applicable):
                    </h1>

                    <div className="space-y-4">
                      {userData.workExperience.map((experience, index) => (
                        <div
                          key={index}
                          className="space-y-4  pb-4 mb-4 relative"
                        >
                          {index > 0 && (
                            <div
                              className={`flex absolute -top-4 right-0 items-center justify-end  rounded-full`}
                            >
                              <button
                                type="button"
                                onClick={() => deleteWorkExperience(index)}
                                className="text-red-500 hover:text-red-600 bg-white"
                              >
                                <FaTrashAlt className="text-xl" />
                              </button>
                            </div>
                          )}
                          <div className="relative">
                            <label
                              htmlFor="jobTitle"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Job Title
                            </label>
                            <input
                              type="text"
                              name="jobTitle"
                              id="jobTitle"
                              placeholder="e.g. Career Coach"
                              value={experience.jobTitle}
                              onChange={(e) =>
                                handleWorkExperienceChange(
                                  index,
                                  "jobTitle",
                                  e.target.value
                                )
                              }
                              className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            />
                          </div>
                          <div className="relative">
                            <label
                              htmlFor="companyName"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Company Name
                            </label>
                            <input
                              type="text"
                              name="companyName"
                              id="companyName"
                              placeholder="e.g. Microsoft"
                              value={experience.company}
                              onChange={(e) =>
                                handleWorkExperienceChange(
                                  index,
                                  "company",
                                  e.target.value
                                )
                              }
                              className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            />
                          </div>
                          <div className="relative">
                            <label
                              htmlFor="jobRole"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Job Role
                            </label>
                            <textarea
                              name="jobRole"
                              id="jobRole"
                              defaultValue={role.jobRole}
                              rows={5}
                              placeholder="Enter your job role and key responsibilities"
                              value={experience.jobRole}
                              onChange={(e) =>
                                handleWorkExperienceChange(
                                  index,
                                  "jobRole",
                                  e.target.value
                                )
                              }
                              className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            />
                          </div>
                          {/* date */}
                        </div>
                      ))}

                      {/* Button to add a new work experience section */}
                      <button
                        type="button"
                        onClick={addWorkExperienceArrayEntry}
                        className="flex items-center justify-center gap-2 mt-4 font-bold bg-gray-200 text-black lg:text-2xl text-base p-4 w-[424px] font-lora border border-dashed border-secondary"
                      >
                        Add Another Work Experience
                        <FaPlus className="font-extrabold text-2xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* </div> */}

            <div className="mt-12 flex justify-end font-montserrat items-start ml-[20rem]  w-[27rem] gap-7 ">
              <button
                onClick={handleReset}
                className="py-2 font-bold rounded-md w-full border-secondary text-secondary hover:bg-secondary border hover:border hover:border-secondary hover:text-white "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 font-bold rounded-md w-full bg-secondary text-white hover:bg-transparent border hover:text-secondary hover:border hover:border-secondary "
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
