import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  FaBackward,
  FaCertificate,
  FaDeleteLeft,
  FaForward,
  FaGraduationCap,
  FaPlus,
  FaRegCircleUser,
  FaTrash,
} from "react-icons/fa6";
import {
  FaUser,
  FaInfoCircle,
  FaPhone,
  FaCog,
  FaCheckCircle,
  FaClipboard,
  FaTools,
} from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { MdDoneOutline, MdOutlineWorkHistory } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import axios from "axios";
import { ResumeContext } from "../../Context/CustomizeResumeContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PiTranslateBold } from "react-icons/pi";
import { GrCertificate } from "react-icons/gr";
import useAuth from "../../Hook/useAuth";

/******** Templates **********/
import Template1 from "../../Components/AllTemplates/Template1";
import Template2 from "../../Components/AllTemplates/Template2";
import Template3 from "../../Components/AllTemplates/Template3";
import Template4 from "../../Components/AllTemplates/Template4";
// import Template5 from "../../Components/AllTemplates/Template5";
// import Template6 from "../../Components/AllTemplates/Template6";
// import Template2, {ImageContext,} from "../../Components/AllTemplates/Template2";
// import Template2nd, {
//   ImageContext,
// } from "../../Components/TemplateSection/Template2nd";

const ResumeEditPage = () => {
  const { user } = useAuth();

  const [userData, setUserData] = useState({
    name: "",
    profile: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    careerObjective: "",
    skills: ["skill 1", "skill 2", "skill 2", "skill 2", "skill 2"],
    education: [
      {
        degree: "",
        institution: "",
        year: "",
      },
    ], // Start with an empty education entry
    certifications: [
      {
        year: "",
        institution: "",
        title: "",
      },
    ],
    workExperience: [
      {
        description: "",
        years: "",
        startDate: "",
        endDate: "",
        company: "",
        jobTitle: "",
        isCurrent: false,
      },
    ],
    languages: ["English", "Bangla"],
    extraCurricularActivities: [
      {
        activity: "",
        description: "",
      },
    ],
  });

  console.log(userData);
  // Define icons for each step
  const stepIcons = {
    1: <FaRegCircleUser />,
    2: <MdOutlineWorkHistory />,
    3: <FaGraduationCap />,
    4: <FaTools />,
    5: <PiTranslateBold />,
    6: <GrCertificate />,
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date); // Set the selected date
  };

  const axiosPublic = useAxiosPublic();
  const [savedDataId, setSaveDataId] = useState("");

  const steps = [
    { id: 1, name: "Heading" },
    { id: 2, name: "Work History" },
    { id: 3, name: "Education" },
    { id: 4, name: "Skills" },
    { id: 5, name: "Language" },
    { id: 6, name: "Certifications" },
    // { id: 7, name: "Finalize" },
  ];
  const { setSavedResume, setShareLink } = useContext(ResumeContext);
  // const { image } = useContext(ImageContext); // Use useContext to access setImage

  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const predefinedSkills = ["React.js", "Node.js", "CSS", "HTML", "JavaScript"];

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
    watch,
  } = useForm();

  useEffect(() => {
    const storedCurrentStep = localStorage.getItem("currentStep");
    const storedCompletedSteps = JSON.parse(
      localStorage.getItem("completedSteps")
    );

    if (storedCurrentStep) setCurrentStep(parseInt(storedCurrentStep));
    if (storedCompletedSteps) setCompletedSteps(storedCompletedSteps);
  }, []);

  useEffect(() => {
    localStorage.setItem("currentStep", currentStep);
    localStorage.setItem("completedSteps", JSON.stringify(completedSteps));
  }, [currentStep, completedSteps]);

  const isStepCompleted = (stepId) => completedSteps.includes(stepId);

  const handleNextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      if (currentStep < steps.length) {
        const newStep = currentStep + 1;
        setCurrentStep(newStep);
        if (!isStepCompleted(currentStep)) {
          setCompletedSteps([...completedSteps, currentStep]);
        }
      }
    }
    if (currentStep === 6) {
      setCurrentStep(6);
      // Trigger SweetAlert when moving to step 7
      Swal.fire({
        title: `You're all done!`,
        text: "You have reached the final step.",
        icon: "success",
        confirmButtonText: "OK",
        timer: 1500,
      });
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setCompletedSteps(
        completedSteps.filter((step) => step < currentStep - 1)
      );
    }
  };

  const handleStepClick = (stepId) => {
    if (stepId <= currentStep) {
      setCurrentStep(stepId);
      setCompletedSteps((prev) => prev.filter((id) => id <= stepId));
    }
  };

  const completionPercentage =
    completedSteps.length > 0
      ? Math.floor((completedSteps.length / steps.length) * 100)
      : 0;

  const onSubmit = (event, data) => {
    console.log(`Form Step ${currentStep} Data:`, data);
    console.log(data.isCurrentJob);
    handleNextStep();
  };

  // Find common objects with the same _id in both arrays
  const [data, setData] = useState([]);
  const { id } = useParams();

  // Handle changes for general fields
  const handleInputChange = (field, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleArrayChange = (arrayName, index, value) => {
    setUserData((prevData) => {
      const updatedArray = [...prevData[arrayName]];

      if (index >= updatedArray.length) {
        updatedArray.push(value);
      } else {
        updatedArray[index] = value;
      }

      return { ...prevData, [arrayName]: updatedArray };
    });
  };

  // Add a new entry for array fields
  const addArrayEntry = (arrayName, newValue) => {
    setUserData((prevData) => ({
      ...prevData,
      [arrayName]: [...prevData[arrayName], newValue],
    }));
  };

  // Handle checkbox click: If checked, set endDate to "present"; if unchecked, enable endDate field again
  const handleCurrentCheckboxChange = (index, isChecked) => {
    const updatedWorkExperience = [...userData.workExperience];
    updatedWorkExperience[index] = {
      ...updatedWorkExperience[index],
      isCurrent: isChecked,
      endDate: isChecked ? "present" : "",
    };
    setUserData({ ...userData, workExperience: updatedWorkExperience });
  };

  // Function to add a new entry to workExperience array
  const addWorkExperienceArrayEntry = () => {
    const newEntry = {
      description: "",
      years: "",
      startDate: "",
      endDate: "",
      company: "",
      jobTitle: "",
      isCurrent: false,
    };
    setUserData((prevData) => ({
      ...prevData,
      workExperience: [...prevData.workExperience, newEntry],
    }));
  };

  // Specific functions for updating nested fields
  const updateEducation = (index, field, value) => {
    setUserData((prevData) => {
      const updatedEducation = [...prevData.education];
      updatedEducation[index] = { ...updatedEducation[index], [field]: value };
      return { ...prevData, education: updatedEducation };
    });
  };

  //Skills area start
  const [showInput, setShowInput] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  // const [skills, setSkills] = useState([]);

  const handleAddSkill = () => {
    if (newSkill) {
      setUserData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, newSkill],
      }));
      setNewSkill("");
      setShowInput(false);
    }
  };

  const handleDeleteSkill = (skillToDelete) => {
    setUserData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((skill) => skill !== skillToDelete),
    }));
  };
  //Skills area end

  //Start language area

  // const [showInput, setShowInput] = useState(false); // State to toggle input visibility
  const [newLanguage, setNewLanguage] = useState("");

  const handleAddLanguage = () => {
    if (newLanguage) {
      setUserData((prevData) => ({
        ...prevData,
        languages: [...prevData.languages, newLanguage],
      }));
      setNewLanguage("");
      setShowInput(false);
    }
  };

  const handleDeleteLanguage = (languageToDelete) => {
    setUserData((prevData) => ({
      ...prevData,
      languages: prevData.languages.filter(
        (language) => language !== languageToDelete
      ),
    }));
  };

  // Function to update the work experience entries
  const updateWorkExperience = (index, field, value) => {
    const updatedWorkExperience = [...userData.workExperience];
    updatedWorkExperience[index] = {
      ...updatedWorkExperience[index],
      [field]: value,
    };
    setUserData({
      ...userData,
      workExperience: updatedWorkExperience,
    });
  };

  const updateCertificate = (index, field, value) => {
    setUserData((prevData) => {
      const updatedCertificate = [...prevData.certifications];
      updatedCertificate[index] = {
        ...updatedCertificate[index],
        [field]: value,
      };
      return { ...prevData, certifications: updatedCertificate };
    });
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

  // Delete Education section
  const deleteEducationEntry = (index) => {
    const updatedEducation = userData.education.filter((_, i) => i !== index);
    setUserData((prevData) => ({
      ...prevData,
      education: updatedEducation,
    }));
  };

  // Delete Education section
  const deleteCertifications = (index) => {
    const updatedCertificate = userData.certifications.filter(
      (_, i) => i !== index
    );
    setUserData((prevData) => ({
      ...prevData,
      certifications: updatedCertificate,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get("/predefined-templates");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching predefined templates:", error);
      }
    };

    fetchData();
  }, []);

  const template = data.find((item1) => item1.templateItem === id);
  const [myResumeTemplates, setMyResumeTemplates] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const resumeId = queryParams.get("resumeId");

  console.log("line no 50", myResumeTemplates);
  useEffect(() => {
    if (resumeId) {
      const getData = async () => {
        try {
          const { data } = await axiosPublic(`/my-resume/edit/${resumeId}`);
          console.log("fetch data ", data);

          setMyResumeTemplates(data);
          setUserData(data);
        } catch (error) {
          console.error("Error fetching resume data", error);
        }
      };
      getData();
    }
  }, [resumeId]);

  // console.log('resume data', myResumeTemplates);
  // console.log('template data', template);
  // console.log('user data', userData);

  const renderTemplate = (id) => {
    if (id === "template1") {
      return <Template1 data={template} userData={userData} />;
    }
    if (id === "template2") {
      return (
        <Template2
          data={template}
          userData={userData}
          setUserData={setUserData}
        />
      );
    }
    if (id === "template3") {
      return <Template3 
      data={template} 
      userData={userData} 
      setUserData={setUserData} />;
    }
    if (id === "template4") {
      return <Template4 data={template} userData={userData} />;
    }
    if (id === "template5") {
      return <Template5 data={template} userData={userData} />;
    }
    if (id === "template6") {
      return <Template6 data={template} userData={userData} />;
    }
  };
  const navigate = useNavigate();

  console.log(resumeId);
  console.log('templateItem', id,);
  // Function to generate a shareable link
  const handleShare = async () => {
    console.log(resumeId);
    const resumeData = {
      ...userData,
      templateItem: id,
      user_email: user?.email,
      resumeId: resumeId,
    };
    console.log(resumeData);

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_LOCALHOST_API_URL}/customize-resume`,
        resumeData,
        { withCredentials: true }
      );
      console.log("Response data:", response.data);

      if (response.data.success) {
        setShareLink(response.data.shareLink);
        localStorage.removeItem("currentStep");
        localStorage.removeItem("completedSteps");
        navigate(`/resume/final-resume/${response.data.sendInfo.templateID}`);
      }
    } catch (error) {
      console.error("Error generating share link:", error);
    }
  };



  return (
    <div className="flex xl:flex-row flex-col min-h-screen">
      {/* Sidebar */}
      <div className="xl:w-[20%] w-[100%] lg:block bg-[#00000f] text-white p-6">
        <Link to="/">
          <h1 className="text-white lg:text-2xl md:text-lg text-xl pb-6 font-extrabold font-lora mb-4 uppercase">
            Perfect<span className="text-primary">Profile</span>
          </h1>
        </Link>
        <div className="space-y-6 lg:pb-6 pb-0 flex lg:flex-col flex-row hidden lg:block overscroll-x-none overflow-x-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex items-center space-x-2 cursor-pointer ${
                currentStep === step.id
                  ? "text-white font-montserrat font-medium"
                  : isStepCompleted(step.id)
                  ? "text-white font-bold font-montserrat"
                  : "text-gray-500 font-montserrat font-medium"
              }`}
              onClick={() => handleStepClick(step.id)}
            >
              <span
                className={`w-8 h-8 flex items-center justify-center ${
                  currentStep === step.id
                    ? "  text-black"
                    : isStepCompleted(step.id)
                    ? " rounded-full text-rose-700"
                    : ""
                }`}
              >
                {isStepCompleted(step.id) ? (
                  <span className="text-2xl text-secondary">
                    {stepIcons[step.id]}
                  </span>
                ) : (
                  <span className="text-lg text-gray-500">
                    {stepIcons[step.id]}
                  </span>
                )}
              </span>
              <span>{step.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 ">
          <h3 className="text-base lg:text-lg font-montserrat font-bold mb-2">
            Completion status:{" "}
          </h3>
          <div className="flex items-center gap-2">
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-gradient-to-r from-secondary to-primary rounded-r-full h-full"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <div className="font-lora font-bold">{completionPercentage}%</div>
          </div>
        </div>
      </div>
      {/* Content Area */}
      <div className="xl:w-[48%] 2xl:w-[53%] w-[100%] lg:px-12 lg:py-6 px-2 font-roboto  bg-gray-50">
        <form className="text-sm" onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <h2 className="lg:text-4xl text-3xl font-lora font-extrabold mb-12">
                  How do you want recruiters to <br />
                  contact you?
                </h2>
              </div>
              <div className="flex lg:flex-row justify-between flex-col gap-6">
                <div className="w-full space-y-1">
                  <label className="font-bold">Full Name*</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className={`border py-2 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent ${
                      errors.name ? "border-red-500" : "border-gray-400"
                    } focus:border-gray-400`}
                    {...register("name", {
                      // required: "Full name is required",
                      onChange: (e) =>
                        handleInputChange("name", e.target.value),
                    })}
                  />
                  {/* Display error message if name has a validation error */}
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="w-full space-y-1">
                  <label className="font-bold">Job Title</label>
                  <input
                    type="text"
                    placeholder="Frontend Developer"
                    className={`border py-2 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent border-gray-400 focus:border-gray-400`}
                    {...register("jobTitle", {
                      // required: "Job title is required",
                    })}
                    // value={userData.jobTitle}
                    onChange={(e) =>
                      handleInputChange("jobTitle", e.target.value)
                    }
                  />
                  {errors.jobTitle && (
                    <p className="text-red-500 text-sm">
                      {errors.jobTitle.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex lg:flex-row justify-between flex-col gap-6">
                <div className="w-full space-y-1">
                  <label className="font-bold">Email*</label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className={`border py-2 px-2 w-full placeholder:text-gray-600  outline-none bg-transparent ${
                      errors.email ? "border-red-500" : "border-gray-400"
                    } focus:border-gray-400`}
                    {...register("email", {
                      // required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format",
                      },
                    })}
                    value={userData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="w-full space-y-1">
                  <label className="font-bold">Phone*</label>
                  <input
                    type="tel"
                    placeholder="+1-212-456-7890"
                    className={`border py-2 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent ${
                      errors.phone ? "border-red-500" : "border-gray-400"
                    } focus:border-gray-400`}
                    {...register("phone", {
                      // required: "Phone is required",
                      pattern: {
                        value: /^[0-9\s()+-]*$/,
                        message: "Phone number must be number",
                      },
                    })}
                    // value={userData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div className="space-y-1">
                  <label className="font-bold">Street Address</label>
                  <input
                    type="text"
                    placeholder="123 Main Street, Anytown, USA, 12345"
                    className={`border py-2 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent border-gray-400 focus:border-gray-400`}
                    {...register("address", {
                      // required: "Job title is required",
                    })}
                    // value={userData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                  />
                  {errors.address && (
                    <p className="text-red-500 font-lora text-sm">
                      {errors.address.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="">
                <div className="space-y-1">
                  <label className="font-bold">Career Objective</label>
                  <textarea
                    type="text-area"
                    placeholder="Write about your career goal"
                    className={`border py-2 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent border-gray-400 focus:border-gray-400`}
                    // name="careerObjective"
                    {...register("careerObjective", {
                      // required: "Job title is required",
                    })}
                    // value={userData.careerObjective}
                    onChange={(e) =>
                      handleInputChange("careerObjective", e.target.value)
                    }
                    rows={6}
                  />

                  {/* <input
                    type="text-area"
                    className="border py-2 px-2 w-full rounded"
                    name="careerObjective"
                    value={userData.careerObjective}
                    onChange={(e) =>
                      handleInputChange("careerObjective", e.target.value)
                    }
                  /> */}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <h2 className="lg:text-4xl text-3xl font-lora  font-extrabold mb-12">
                  Tell us about your work <br />
                  experience to showcase your professional journey.
                </h2>
              </div>
              {userData.workExperience.map((entry, index) => (
                <div
                  key={index}
                  className="relative lg:p-4 p-2 rounded rounded-tr-3xl bg-white border-gray-400 border-dashed gap-6 flex flex-col mb-4"
                >
                  <div className="flex lg:flex-row flex-col justify-between gap-6">
                    {/* Company Name Input */}
                    <div className="w-full space-y-1">
                      <label className="font-bold">Company Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Microsoft"
                        className="border py-2 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent border-gray-400 focus:border-gray-400"
                        value={entry.company}
                        onChange={(e) =>
                          updateWorkExperience(index, "company", e.target.value)
                        }
                      />
                    </div>

                    {/* Job Title Input */}
                    <div className="w-full space-y-1">
                      <label className="font-bold">Job Title</label>
                      <input
                        type="text"
                        placeholder="e.g. Software Engineer"
                        className="border py-2 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent border-gray-400 focus:border-gray-400"
                        value={entry.jobTitle}
                        onChange={(e) =>
                          updateWorkExperience(
                            index,
                            "jobTitle",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="">
                    {/* Job Role Input */}
                    <div className="w-full space-y-1">
                      <label className="font-bold">Job Role</label>
                      <input
                        type="text"
                        placeholder="e.g. Frontend Development"
                        className="border py-2 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent border-gray-400 focus:border-gray-400"
                        value={entry.description}
                        onChange={(e) =>
                          updateWorkExperience(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col items-center justify-between gap-6">
                    {/* Start Date Input */}
                    <div className="w-full space-y-1">
                      <label className="font-bold">Start Date</label>
                      <DatePicker
                        selected={
                          entry.startDate ? new Date(entry.startDate) : null
                        } // Bind to individual entry's startDate
                        onChange={(date) =>
                          updateWorkExperience(index, "startDate", date)
                        }
                        // dateFormat="dd/MM/yyyy"
                        dateFormat="MMMM yyyy"
                        showMonthYearPicker
                        placeholderText="Select Start Date"
                        className="border py-2 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent border-gray-400 focus:border-gray-400"
                        wrapperClassName="w-full"
                      />
                    </div>

                    {/* End Date Input */}
                    {/* <div className="space-y-1">
                      <label className="font-bold">End Date</label>
                      <DatePicker
                        selected={
                          entry.endDate ? new Date(entry.endDate) : null
                        } // Bind to individual entry's endDate
                        onChange={(date) =>
                          updateWorkExperience(index, "endDate", date)
                        }
                        // dateFormat="dd/MM/yyyy"
                        dateFormat="MMMM yyyy"
                        showMonthYearPicker
                        placeholderText="Select End Date"
                        className="border py-2 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent border-gray-400 focus:border-gray-400"
                        wrapperClassName="w-full"
                      />
                    </div> */}

                    {/* End Date Input (set to "present" if "Currently working here" is checked) */}
                    <div className="w-full space-y-1">
                      <label className="font-bold">End Date</label>
                      <DatePicker
                        selected={
                          entry.endDate && entry.endDate !== "present"
                            ? new Date(entry.endDate)
                            : null
                        }
                        onChange={(date) =>
                          updateWorkExperience(index, "endDate", date)
                        }
                        dateFormat="MMMM yyyy"
                        showMonthYearPicker
                        placeholderText="Select End Date"
                        className={`border py-2 px-2 w-full placeholder:text-gray-600 outline-none  border-gray-400 focus:border-gray-400 ${
                          entry.isCurrent ? "opacity-35" : "bg-transparent"
                        }`}
                        wrapperClassName="w-full"
                        disabled={entry.isCurrent} // Disable if "Currently working here" is checked
                      />
                    </div>

                    {/* "Currently Working Here" Checkbox */}
                    <div className="flex items-center gap-2 w-full lg:mt-5 mt-0">
                      <input
                        type="checkbox"
                        id={`current-${index}`}
                        checked={entry.isCurrent}
                        onChange={(e) =>
                          handleCurrentCheckboxChange(index, e.target.checked)
                        }
                      />
                      <label htmlFor={`current-${index}`} className="font-bold">
                        Currently, I'm working here
                      </label>
                    </div>

                    {/* Duration Input */}
                    {/* <div className="space-y-1">
                      <label className="font-bold">Duration</label>
                      <input
                        type="text"
                        placeholder="e.g. 2 years"
                        className="border py-2 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent border-gray-400 focus:border-gray-400"
                        value={entry.years}
                        onChange={(e) =>
                          updateWorkExperience(index, "years", e.target.value)
                        }
                      />
                    </div> */}
                  </div>

                  {/* Delete Button (only show for entries other than the first one) */}
                  {index > 0 && (
                    <div className="flex absolute top-0 right-0 items-center justify-end bg-white p-4 rounded-full">
                      <button
                        type="button"
                        onClick={() => deleteWorkExperience(index)}
                        className="text-red-500 hover:text-red-700 bg-white"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  )}
                </div>
              ))}

              {/* Button to add a new work experience section */}
              <button
                type="button"
                onClick={addWorkExperienceArrayEntry}
                className="flex items-center justify-center gap-2 mt-4 font-bold bg-gray-200 text-black lg:text-2xl text-base p-4 w-full border border-dashed border-secondary"
              >
                Add Another Work Experience
                <FaPlus className="font-extrabold text-2xl" />
              </button>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <h2 className="lg:text-4xl text-3xl font-lora font-extrabold mb-12">
                  Share your educational background and achievements.
                </h2>
              </div>
              {userData.education.map((entry, index) => (
                <div
                  key={index}
                  className="relative bg-white lg:p-4 p-2 rounded-tr-3xl mb-4 space-y-6"
                >
                  <div className="flex lg:flex-row flex-col justify-between gap-6">
                    <div className="w-full space-y-1">
                      <label className="font-bold">Degree</label>
                      <input
                        type="text"
                        placeholder="e.g. Bechelor of science"
                        className={`border py-2 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent border-gray-400 focus:border-gray-400`}
                        value={entry.degree}
                        onChange={(e) =>
                          updateEducation(index, "degree", e.target.value)
                        }
                      />
                    </div>
                    <div className="w-full space-y-1">
                      <label className="font-bold">Institute Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Oxford University"
                        className={`border py-2 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent border-gray-400 focus:border-gray-400`}
                        value={entry.institution}
                        onChange={(e) =>
                          updateEducation(index, "institution", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="space-y-1">
                      <label className="font-bold">Passing Year</label>
                      <input
                        type="text"
                        placeholder="2020"
                        className={`border py-2 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent border-gray-400 focus:border-gray-400`}
                        value={entry.year}
                        onChange={(e) =>
                          updateEducation(index, "year", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  {index > 0 && (
                    <div
                      className={`flex absolute top-0 right-0 items-center justify-end bg-white p-4 rounded-full`}
                    >
                      <button
                        type="button"
                        onClick={() => deleteEducationEntry(index)} // Call delete function
                        className="text-red-500 hover:text-red-700 bg-white"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addArrayEntry("education", {
                    degree: "",
                    institution: "",
                    year: "",
                  })
                }
                className="flex items-center justify-center gap-2 mt-4 font-bold bg-gray-200 text-black p-4 w-full lg:text-2xl text-base border border-dashed border-secondary"
              >
                Add Another Education{" "}
                <FaPlus className="font-extrabold text-2xl" />
              </button>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <div>
                <h2 className="lg:text-4xl text-3xl font-extrabold font-lora mb-12">
                  Showcase your key skills and expertise.
                </h2>
              </div>
              <div className="flex gap-6 flex-wrap">
                {userData.skills.map((skill, index) => (
                  <div key={index} className="flex justify-between gap-2 mb-2">
                    <div className="border border-gray-400 relative rounded  gap-6 py-1 px-4">
                      <span>{skill}</span>
                      <button
                        type="button"
                        className="text-red-500 absolute p-0 m-0 -top-3 -right-3 "
                        onClick={() => handleDeleteSkill(skill)}
                      >
                        <TiDelete className="p-0 m-0 text-xl" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* {showInput && ( */}
              <div className="flex relative items-center">
                <input
                  type="text"
                  className={`border py-3 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent border-gray-400 focus:border-gray-400`}
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)} // Update input value
                  placeholder="Enter new skill"
                />

                <button
                  type="button"
                  className="absolute border border-secondary bg-secondary right-0 flex  font-bold text-white py-3 px-5"
                  onClick={() => handleAddSkill()}
                >
                  Add Skill
                </button>
              </div>
              {/* // )} */}
              {/* <button
                type="button"
                className="flex lg:w-1/4 w-full items-center justify-center gap-2 mt-4 font-bold bg-gray-200 text-black text-lg p-4 border border-dashed border-gray-400"
                // onClick={() => setShowInput(true)} // Show input on button click
              >
                Add New Skill <FaPlus className="font-bold text-lg" />
              </button> */}
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-4">
              <div>
                <h2 className="lg:text-4xl text-3xl font-lora font-extrabold mb-12">
                  List the languages you speak fluently.
                </h2>
              </div>
              <div className="flex gap-3 flex-wrap">
                {userData.languages.map((language, index) => (
                  <div key={index} className="flex justify-between gap-2 mb-2">
                    <div className="border border-gray-400 relative rounded  gap-6 py-1 px-4">
                      <span>{language}</span>
                      <button
                        type="button"
                        className="text-red-500 absolute p-0 m-0 -top-3 -right-3 "
                        onClick={() => handleDeleteLanguage(language)}
                      >
                        <TiDelete className="p-0 m-0 text-xl " />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* {showInput && ( */}
              <div className="mt-4 relative flex items-center">
                <input
                  type="text"
                  className={`border py-3 px-2 w-full placeholder:text-gray-600 outline-none bg-transparent border-gray-400 focus:border-gray-400`}
                  value={newLanguage}
                  onChange={(e) => setNewLanguage(e.target.value)} // Update input value
                  placeholder="Enter new language"
                />

                <button
                  type="button"
                  className="absolute border border-secondary bg-secondary right-0 flex  font-bold text-white py-3 px-6"
                  onClick={() => handleAddLanguage()}
                >
                  Add Language
                </button>
              </div>
              {/* )} */}
              {/* <button
                type="button"
                className="flex lg:w-1/4 w-full items-center justify-center gap-2 mt-4 font-bold bg-gray-200 text-black text-lg p-4 border border-dashed border-gray-400"
                // onClick={() => setShowInput(true)} // Show input on button click
              >
                Add new language <FaPlus className="font-bold" />
              </button> */}
            </div>
          )}
          {currentStep === 6 && (
            <div className="space-y-4">
              <div>
                <h2 className="lg:text-4xl text-3xl font-lora font-extrabold mb-12">
                  What certifications have you earned to strengthen your
                  profile?
                </h2>
              </div>
              {userData.certifications.map((entry, index) => (
                <div
                  key={index}
                  className="relative bg-white p-8 rounded-tr-3xl gap-4 mb-4"
                >
                  <div className="flex lg:flex-row flex-col justify-between gap-6">
                    <div className="space-y-1">
                      <label className="font-bold">Certificate Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Full stack development"
                        className="border py-2 px-2 w-full rounded outline-none focus:border-gray-300"
                        value={entry.title}
                        onChange={(e) =>
                          updateCertificate(index, "title", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold">Institution Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Udemy"
                        className="border py-2 px-2 w-full rounded outline-none focus:border-gray-300"
                        value={entry.institution}
                        onChange={(e) =>
                          updateCertificate(
                            index,
                            "institution",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold">Duration</label>
                      <input
                        type="text"
                        placeholder="e.g. 6 months"
                        className="border py-2 px-2 w-full rounded outline-none focus:border-gray-300"
                        value={entry.year}
                        onChange={(e) =>
                          updateCertificate(index, "year", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  {index > 0 && (
                    <div
                      className={`flex absolute top-0 right-0 items-center justify-end bg-white p-4 rounded-full`}
                    >
                      <button
                        type="button"
                        onClick={() => deleteCertifications(index)} // Call delete function
                        className="text-red-500 hover:text-red-700 bg-white"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addArrayEntry("certifications", {
                    title: "",
                    institution: "",
                    year: "",
                  })
                }
                className="flex items-center justify-center w-full gap-2 mt-4 font-bold bg-gray-200 text-black p-4 border lg:text-2xl text-lg  border-dashed border-secondary"
              >
                Add Another Certification
                <FaPlus className="font-bold text-lg" />
              </button>
            </div>
          )}
          {/* {currentStep === 7 && (
            <div className="space-y-4">
              <div className="mx-auto shadow-lg p-8">
              <MdDoneOutline className="text-secondary" />
                <h2 className="text-3xl font-bold mb-8">Finalize</h2>
              </div>
            </div>
          )} */}

          <div className="flex justify-between mt-12">
            {currentStep >= 1 && (
              <button
                type="button"
                onClick={handlePreviousStep}
                className={`border border-black uppercase flex text-lg items-center gap-2 font-bold text-black py-3 px-5 ${currentStep ==
                  1 && "opacity-0"}`}
              >
                <FaBackward /> Previous
              </button>
            )}
            {currentStep < 6 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="bg-primary uppercase font-bold text-lg flex items-center gap-2 text-white py-3 px-5"
              >
                Next <FaForward />
              </button>
            ) : (
              <div>
                <button
                  onClick={handleShare}
                  type="submit"
                  className="bg-primary uppercase font-bold text-lg flex items-center gap-2 text-white py-3 px-5"
                >
                  Save & Finalize
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
      {/* Template preview area */}
      <div className="xl:w-[33%] 2xl:w-[27%] w-[100%] lg:p-8 px-2 flex flex-col lg:block justify-center items-center bg-gray-100 overflow-x-auto">
        <div
          className="w-full h-full"
          style={{
            transform: "scale(0.50)",
            transformOrigin: "top left",
            height: "400px",
          }}
        >
          {renderTemplate(id)}
        </div>
        <div className="flex flex-col justify-center items-center mt-28 ">
          <Link to={`/predefined-templates`}>
            <button className="font-roboto font-medium text-primary mb-2">
              Change Template
            </button>
          </Link>
          <p className="text-xs font-roboto text-gray-500 text-center w-3/4 mx-auto">
            You can edit the content, use other fonts, adjust format, add
            sections, and change placement of the sections later on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditPage;
