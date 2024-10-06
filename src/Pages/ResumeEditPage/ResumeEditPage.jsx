import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import Template1 from "../../Components/TemplateSection/Template1";
import Template2 from "../../Components/TemplateSection/Template2";
import Template3 from "../../Components/TemplateSection/Template3";
import {
  FaBackward,
  FaDeleteLeft,
  FaForward,
  FaPlus,
  FaTrash,
} from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { MdDoneOutline } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const ResumeEditPage = () => {
  const axiosPublic = useAxiosPublic();
  
  const steps = [
    { id: 1, name: "Heading" },
    { id: 2, name: "Work History" },
    { id: 3, name: "Education" },
    { id: 4, name: "Skills" },
    { id: 5, name: "Language" },
    { id: 6, name: "Certifications" },
    // { id: 7, name: "Finalize" },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const predefinedSkills = ["React.js", "Node.js", "CSS", "HTML", "JavaScript"];

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
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
    const isValid = await trigger(); // Validate the current step
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
        text: 'You have reached the final step.',
        icon: 'success',
        confirmButtonText: 'OK',
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

  const onSubmit = (data) => {
    console.log(`Form Step ${currentStep} Data:`, data);
    console.log(data.isCurrentJob);
    handleNextStep();
  };

  // Find common objects with the same _id in both arrays
  const [data, setData] = useState([]);
  const { id } = useParams();

  // <<=================================Real time data change for template start here =========================================>>





  // <<===========Real time data change for template end here ============>>

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

  // Specific functions for updating nested fields
  const updateEducation = (index, field, value) => {
    setUserData((prevData) => {
      const updatedEducation = [...prevData.education];
      updatedEducation[index] = { ...updatedEducation[index], [field]: value };
      return { ...prevData, education: updatedEducation };
    });
  };

  //Skills area start
  const [showInput, setShowInput] = useState(false); // State to toggle input visibility
  const [newSkill, setNewSkill] = useState(""); // State to store the new skill input
  // const [skills, setSkills] = useState([]);

  const handleAddSkill = () => {
    if (newSkill) {
      setUserData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, newSkill], // Add new skill to userData.skills array
      }));
      setNewSkill(""); // Clear the input field
      setShowInput(false); // Hide the input field after adding the skill
    }
  };

  const handleDeleteSkill = (skillToDelete) => {
    setUserData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((skill) => skill !== skillToDelete), // Remove skill from userData.skills
    }));
  };
  //Skills area end

  //Start language area

  // const [showInput, setShowInput] = useState(false); // State to toggle input visibility
  const [newLanguage, setNewLanguage] = useState(""); // State to store the new Language input

  const handleAddLanguage = () => {
    if (newLanguage) {
      setUserData((prevData) => ({
        ...prevData,
        languages: [...prevData.languages, newLanguage], // Add new language to userData.languages array
      }));
      setNewLanguage(""); // Clear the input field
      setShowInput(false); // Hide the input field after adding the language
    }
  };

  const handleDeleteLanguage = (languageToDelete) => {
    setUserData((prevData) => ({
      ...prevData,
      languages: prevData.languages.filter(
        (language) => language !== languageToDelete
      ), // Remove language from userData.languages
    }));
  };

  //End language area

  const updateWorkExperience = (index, field, value) => {
    setUserData((prevData) => {
      const updatedExperience = [...prevData.workExperience];
      updatedExperience[index] = {
        ...updatedExperience[index],
        [field]: value,
      };
      return { ...prevData, workExperience: updatedExperience };
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

  // Real time data change for template start here

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get("/predefined-templates");
        setData(response.data); // Set the data from the response
      } catch (error) {
        console.error("Error fetching predefined templates:", error);
      }
    };

    fetchData();
  }, []);
  


  const template = data.find((item1) => item1.templateItem === id);

  const [userData, setUserData] = useState({
    name: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    careerObjective: "",
    skills: [], // Start with an empty skill
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
        company: "",
        jobTitle: "",
      },
    ],
    languages: [],
    extraCurricularActivities: [
      {
        activity: "",
        description: "",
      },
    ],
  });

  console.log("User data:", userData);


  const renderTemplate = (id) => {
    if (id === "template1") {
      return <Template1 data={template} userData={userData} />;
    }
    if (id === "template2") {
      return <Template2 data={template} />;
    }
  };


  /*****URL Generate *******/
  const [shareLink, setShareLink] = useState(""); // Shareable URL
  const [copied, setCopied] = useState(false); // Copy success state
  // Function to generate a shareable link
  const handleShare = async () => {
    try {
      const response = await axiosPublic.post("/share-resume", userData,
        { withCredentials: true }
      );
      if (response.data.success) {
        setShareLink(response.data.shareLink);
      }
    } catch (error) {
      console.error("Error generating share link:", error);
    }
  };

  // Function to copy the shareable link
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      setCopied(true); // Set the copied state
      setTimeout(() => setCopied(false), 2000); // Remove copied state after 2 seconds
    });
  };



  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/6 bg-gray-900 text-white p-8">
        <Link to="/">
          <h1 className="text-white text-xl font-bold mb-4">Perfect Profile</h1>
        </Link>
        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex items-center space-x-2 cursor-pointer ${currentStep === step.id
                ? "text-white font-montserrat"
                : isStepCompleted(step.id)
                  ? "text-white font-bold font-montserrat"
                  : "text-gray-500"
                }`}
              onClick={() => handleStepClick(step.id)}
            >
              <span
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep === step.id
                  ? "border-white bg-white text-black"
                  : isStepCompleted(step.id)
                    ? "border-green-400 bg-green-400 text-white"
                    : "border-gray-500"
                  }`}
              >
                {isStepCompleted(step.id) ? "✓" : step.id}
              </span>
              <span>{step.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 ">
          <h3 className="text-sm lg:text-lg font-montserrat  mb-2">
            Completion status:{" "}
          </h3>
          <div className="flex items-center gap-2">
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-gradient-to-r to-primary from-secondary rounded-r-full h-full"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <div className="font-lora font-bold">{completionPercentage}%</div>
          </div>
        </div>
      </div>
      {/* Content Area */}
      <div className="w-3/6 p-8 font-montserrat bg-gray-50">
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold mb-8">Personal Informaion</h2>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="font-bold">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                    {...register("name", {
                      // required: "Job title is required",
                    })}
                    value={userData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-bold">Job Title</label>
                  <input
                    type="text"
                    placeholder="Frontend Developer"
                    className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                    {...register("jobTitle", {
                      // required: "Job title is required",
                    })}
                    value={userData.jobTitle}
                    onChange={(e) =>
                      handleInputChange("jobTitle", e.target.value)
                    }
                  />
                  {errors.jobTitle && (
                    <p className="text-red-500 font-lora text-sm">
                      {errors.jobTitle.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="font-bold">Email*</label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                    {...register("email", {
                      // required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format",
                      },
                    })}
                    value={userData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 font-lora text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="font-bold">Phone*</label>
                  <input
                    type="tel"
                    placeholder="+1-212-456-7890"
                    className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                    {...register("phone", {
                      // required: "Phone is required",
                      pattern: {
                        value: /^[0-9\s()+-]*$/,
                        message: "Phone number must be number",
                      },
                    })}
                    value={userData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                  {errors.phone && (
                    <p className="text-red-500 font-lora text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="font-bold">Street Address</label>
                  <input
                    type="text"
                    placeholder="123 Main Street, Anytown, USA, 12345"
                    className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                    {...register("address", {
                      // required: "Job title is required",
                    })}
                    value={userData.address}
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
                <div>
                  <label className="font-bold">Career Objective</label>
                  <textarea
                    type="text-area"
                    placeholder="Write about your career goal"
                    className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                    // name="careerObjective"
                    {...register("careerObjective", {
                      // required: "Job title is required",
                    })}
                    value={userData.careerObjective}
                    onChange={(e) =>
                      handleInputChange("careerObjective", e.target.value)
                    }
                    rows={6}
                  />

                  {/* <input
                    type="text-area"
                    className="border py-3 px-2 w-full rounded"
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
                <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
              </div>
              {userData.workExperience.map((entry, index) => (
                <div
                  key={index}
                  className="grid relative border-2 p-8 rounded rounded-tr-3xl border-gray-200 border-dashed grid-cols-2 gap-4 mb-4"
                >
                  <div>
                    <label className="font-bold">Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Microsoft"
                      className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                      value={entry.company}
                      onChange={(e) =>
                        updateWorkExperience(index, "company", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="font-bold">Job Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Software Engineer"
                      className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                      value={entry.jobTitle}
                      onChange={(e) =>
                        updateWorkExperience(index, "jobTitle", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="font-bold">Years</label>
                    <input
                      type="text"
                      placeholder="2016"
                      className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                      value={entry.years}
                      onChange={(e) =>
                        updateWorkExperience(index, "years", e.target.value)
                      }
                    />
                  </div>
                  <div />
                  <div>
                    <label className="font-bold">Job Role</label>
                    <textarea
                      rows={6}
                      type="text"
                      placeholder="Write your previous job duties"
                      className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
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
                  <div></div>
                  {index > 0 && ( // Only show delete button if it's not the first entry
                    <div
                      className={`flex absolute right-0 items-center justify-end bg-white p-4 rounded-full`}
                    >
                      <button
                        type="button"
                        onClick={() => deleteWorkExperience(index)} // Call delete function
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
                  addArrayEntry("workExperience", {
                    description: "",
                    years: "",
                    company: "",
                    jobTitle: "",
                  })
                }
                className="flex items-center gap-2 mt-4 font-bold bg-gray-200 text-black p-4 rounded-full border-2 border-dashed border-secondary"
              >
                Add Another Work History <FaPlus className="font-bold " />
              </button>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold mb-8">Education</h2>
              </div>
              {userData.education.map((entry, index) => (
                <div
                  key={index}
                  className="grid relative grid-cols-2 border-2 border-dashed p-8 rounded-tr-3xl border-gray-200 gap-4 mb-4"
                >
                  <div>
                    <label className="font-bold">Degree</label>
                    <input
                      type="text"
                      placeholder="e.g. Bechelor of science"
                      className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                      value={entry.degree}
                      onChange={(e) =>
                        updateEducation(index, "degree", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="font-bold">Institute Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Oxford University"
                      className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                      value={entry.institution}
                      onChange={(e) =>
                        updateEducation(index, "institution", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="font-bold">Passing Year</label>
                    <input
                      type="text"
                      placeholder="2020"
                      className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                      value={entry.year}
                      onChange={(e) =>
                        updateEducation(index, "year", e.target.value)
                      }
                    />
                  </div>
                  {index > 0 && (
                    <div
                      className={`flex absolute right-0 items-center justify-end bg-white p-4 rounded-full`}
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
                className="flex items-center gap-2 mt-4 font-bold bg-gray-200 text-black p-4 rounded-full border-2 border-dashed border-secondary"
              >
                Add Another Education Entry <FaPlus className="font-bold" />
              </button>
            </div>
          )}

          {currentStep === 4 && (
            // <div>
            //   <h2 className="text-xl font-bold mb-4">Skills</h2>
            //   {userData.skills.map((skill, index) => (
            //     <div key={index}>
            //       <div className="mb-4">
            //         <label>Skill {index + 1}</label>
            //         <input
            //           type="text"
            //           className="border p-2 w-full rounded"
            //           value={skill}
            //           onChange={(e) =>
            //             handleArrayChange("skills", index, e.target.value)
            //           }
            //         />
            //       </div>
            //     </div>
            //   ))}

            //     <button
            //       type="button"
            //       className="mt-4 flex items-center gap-2 bg-blue-500 text-white p-2 rounded"
            //     >
            //       Add new skills <FaPlus />
            //     </button>

            //   {/* <button
            //     type="button"
            //     onClick={() => addArrayEntry("skills", "")}
            //     className="mt-4 bg-blue-500 text-white p-2 rounded"
            //   >
            //     Add Another Skill
            //   </button> */}
            // </div>

            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold mb-8">Skills</h2>
              </div>
              <div className="flex gap-3 flex-wrap">
                {userData.skills.map((skill, index) => (
                  <div key={index} className="flex justify-between gap-2 mb-2">
                    <div className="border relative rounded  gap-4 py-1 px-4">
                      <span>{skill}</span>
                      <button
                        type="button"
                        className="text-red-500 absolute p-0 m-0 -top-2 -right-2"
                        onClick={() => handleDeleteSkill(skill)}
                      >
                        <TiDelete className="p-0 m-0 text-xl" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {showInput && (
                <div className=" relative flex items-center">
                  <input
                    type="text"
                    className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)} // Update input value
                    placeholder="Enter new skill"
                  />

                  <button
                    type="button"
                    className="absolute right-0 bg-secondary font-bold text-white py-3 px-2 rounded"
                    onClick={() => handleAddSkill()}
                  >
                    Add Skill
                  </button>
                </div>
              )}
              <button
                type="button"
                className="flex items-center gap-2 mt-4 font-bold bg-gray-200 text-black p-4 rounded-full border-2 border-dashed border-secondary"
                onClick={() => setShowInput(true)} // Show input on button click
              >
                Add new skill <FaPlus className="font-bold" />
              </button>
            </div>
          )}

          {currentStep === 5 && (
            // <div>
            //   <h2 className="text-xl font-bold mb-4">Languages</h2>
            //   {userData.languages.map((language, index) => (
            //     <div key={index} className="mb-4">
            //       <label>Language {index + 1}</label>
            //       <input
            //         type="text"
            //         className="border p-2 w-full rounded"
            //         value={language}
            //         onChange={(e) =>
            //           handleArrayChange("languages", index, e.target.value)
            //         }
            //       />
            //     </div>
            //   ))}
            //   <button
            //     type="button"
            //     onClick={() => addArrayEntry("languages", "")}
            //     className="mt-4 bg-blue-500 text-white p-2 rounded"
            //   >
            //     Add Another Language
            //   </button>
            // </div>
            <div className="space-y-4">
              <div></div>
              <h2 className="text-3xl font-bold mb-8">Languages</h2>
              <div className="flex gap-3 flex-wrap">
                {userData.languages.map((language, index) => (
                  <div key={index} className="flex justify-between gap-2 mb-2">
                    <div className="border relative rounded  gap-4 py-1 px-4">
                      <span>{language}</span>
                      <button
                        type="button"
                        className="text-red-500 absolute p-0 m-0 -top-2 -right-2"
                        onClick={() => handleDeleteLanguage(language)}
                      >
                        <TiDelete className="p-0 m-0 text-xl" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {showInput && (
                <div className="mt-4 relative flex items-center">
                  <input
                    type="text"
                    className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                    value={newLanguage}
                    onChange={(e) => setNewLanguage(e.target.value)} // Update input value
                    placeholder="Enter new language"
                  />

                  <button
                    type="button"
                    className="absolute right-0 bg-secondary font-bold text-white py-3 px-2 rounded"
                    onClick={() => handleAddLanguage()}
                  >
                    Add Language
                  </button>
                </div>
              )}
              <button
                type="button"
                className="flex items-center gap-2 mt-4 font-bold bg-gray-200 text-black p-4 rounded-full border-2 border-dashed border-secondary"
                onClick={() => setShowInput(true)} // Show input on button click
              >
                Add new language <FaPlus className="font-bold" />
              </button>
            </div>
          )}

          {currentStep === 6 && (
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold mb-8">Certifications</h2>
              </div>
              {userData.certifications.map((entry, index) => (
                <div
                  key={index}
                  className="grid relative grid-cols-2 border-2 border-dashed p-8 rounded-tr-3xl border-gray-200 gap-4 mb-4"
                >
                  <div>
                    <label className="font-bold">Certificate Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Full stack development"
                      className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                      value={entry.title}
                      onChange={(e) =>
                        updateCertificate(index, "title", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="font-bold">Institution Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Udemy"
                      className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                      value={entry.institution}
                      onChange={(e) =>
                        updateCertificate(index, "institution", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="font-bold">Duration</label>
                    <input
                      type="text"
                      placeholder="e.g. 6 months"
                      className="border py-3 px-2 w-full rounded outline-none focus:border-gray-300"
                      value={entry.year}
                      onChange={(e) =>
                        updateCertificate(index, "year", e.target.value)
                      }
                    />
                  </div>
                  {index > 0 && (
                    <div
                      className={`flex absolute right-0 items-center justify-end bg-white p-4 rounded-full`}
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
                className="flex items-center gap-2 mt-4 font-bold bg-gray-200 text-black p-4 rounded-full border-2 border-dashed border-secondary"
              >
                Add Another Certification <FaPlus className="font-bold" />
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

          <div className="flex justify-end gap-16 mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePreviousStep}
                className="border border-black flex items-center gap-2 font-bold text-black py-3 px-5 rounded"
              >
                <FaBackward /> Previous
              </button>
            )}
            {currentStep < 6 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="bg-primary font-bold flex items-center gap-2 text-white py-3 px-5 rounded"
              >
                Next <FaForward />
              </button>
            ) : (
              <div>
                <Link
                  to={`/resume/final-resume/${id}`}
                  onClick={handleShare}
                >
                  <button

                    type="submit"
                    className="bg-primary font-bold flex items-center gap-2 text-white py-3 px-5 rounded"
                  >
                    Save & Finalize
                  </button>
                </Link>
              </div>
            )}
          </div>
        </form>
      </div>
      {/* Template preview area */}
      <div className="w-2/6 p-8 flex items-center bg-gray-50">
        {renderTemplate(id)}
      </div>
    </div>
  );
};

export default ResumeEditPage;
