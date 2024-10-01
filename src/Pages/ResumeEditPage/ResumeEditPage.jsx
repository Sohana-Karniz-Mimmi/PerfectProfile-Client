import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import Template1 from "../../Components/TemplateSection/Template1";
import Template2 from "../../Components/TemplateSection/Template2";
import Template3 from "../../Components/TemplateSection/Template3";

const ResumeEditPage = () => {
  const steps = [
    { id: 1, name: "Heading" },
    { id: 2, name: "Work History" },
    { id: 3, name: "Education" },
    { id: 4, name: "Skills" },
    { id: 5, name: "Summary" },
    { id: 6, name: "Finalize" },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
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
    handleNextStep();
  };

  // Find common objects with the same _id in both arrays
  const [data, setData] = useState([]);
  const { id } = useParams();

  // <<=================================Real time data change for template start here =========================================>>

  const [userData, setUserData] = useState({
    name: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    careerObjective: "",
    skills: [""], // Start with an empty skill
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

  // <<====================================Real time data change for template end here ========================================>>

  // Handle changes for general fields
  const handleInputChange = (field, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Handle changes for array fields like skills, languages, etc.
  const handleArrayChange = (arrayName, index, value) => {
    setUserData((prevData) => {
      const updatedArray = [...prevData[arrayName]];
      updatedArray[index] = value; // Update the value at the specified index
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
  // Real time data change for template start here

  useEffect(() => {
    fetch("../../../public/predefinedTemplates.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const template = data.find((item1) => item1.templateItem === id);

  const renderTemplate = (id) => {
    if (id === "template1") {
      return <Template1 data={template} userData={userData} />;
    }
    if (id === "template2") {
      return <Template2 data={template} />;
    }
  };

  console.log(id);
  console.log(template);
  console.log("Education is here ", userData.education);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/6 bg-gray-900 text-white p-8">
        <h1 className="text-white text-xl font-bold mb-4">Resume Builder</h1>
        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex items-center space-x-2 cursor-pointer ${
                currentStep === step.id
                  ? "text-white font-bold"
                  : isStepCompleted(step.id)
                  ? "text-white"
                  : "text-gray-500"
              }`}
              onClick={() => handleStepClick(step.id)}
            >
              <span
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                  currentStep === step.id
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
        <div className="mt-6">
          <h3 className="text-sm mb-2">Completion: {completionPercentage}%</h3>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div
              className="bg-green-500 h-full"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </div>
      <div className="w-3/6 p-8 font-montserrat">
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold mb-4">Heading</h2>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    name="name"
                    value={userData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>
                <div>
                  <label>Job Title</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    name="jobTitle"
                    value={userData.jobTitle}
                    onChange={(e) =>
                      handleInputChange("jobTitle", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    className="border p-2 w-full rounded"
                    name="email"
                    value={userData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div>
                  <label>Phone</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    name="phone"
                    value={userData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label>Street Address</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    name="address"
                    value={userData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label>Carrear Objective</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    name="careerObjective"
                    value={userData.addcareerObjectiveress}
                    onChange={(e) =>
                      handleInputChange("careerObjective", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Work Experience</h2>
              {userData.workExperience.map((entry, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label>Company Name</label>
                    <input
                      type="text"
                      className="border p-2 w-full rounded"
                      value={entry.company}
                      onChange={(e) =>
                        updateWorkExperience(index, "company", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label>Job Title</label>
                    <input
                      type="text"
                      className="border p-2 w-full rounded"
                      value={entry.jobTitle}
                      onChange={(e) =>
                        updateWorkExperience(index, "jobTitle", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label>Years</label>
                    <input
                      type="text"
                      className="border p-2 w-full rounded"
                      value={entry.years}
                      onChange={(e) =>
                        updateWorkExperience(index, "years", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label>Description</label>
                    <input
                      type="text"
                      className="border p-2 w-full rounded"
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
                className="mt-4 bg-blue-500 text-white p-2 rounded"
              >
                Add Another Work Entry
              </button>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Education</h2>
              {userData.education.map((entry, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label>Degree</label>
                    <input
                      type="text"
                      className="border p-2 w-full rounded"
                      value={entry.degree}
                      onChange={(e) =>
                        updateEducation(index, "degree", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label>Institution</label>
                    <input
                      type="text"
                      className="border p-2 w-full rounded"
                      value={entry.institution}
                      onChange={(e) =>
                        updateEducation(index, "institution", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label>Year</label>
                    <input
                      type="text"
                      className="border p-2 w-full rounded"
                      value={entry.year}
                      onChange={(e) =>
                        updateEducation(index, "year", e.target.value)
                      }
                    />
                  </div>
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
                className="mt-4 bg-blue-500 text-white p-2 rounded"
              >
                Add Another Education Entry
              </button>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Skills</h2>
              {userData.skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <label>Skill {index + 1}</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    value={skill}
                    onChange={(e) =>
                      handleArrayChange("skills", index, e.target.value)
                    }
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayEntry("skills", "")}
                className="mt-4 bg-blue-500 text-white p-2 rounded"
              >
                Add Another Skill
              </button>
            </div>
          )}

          {currentStep === 5 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Languages</h2>
              {userData.languages.map((language, index) => (
                <div key={index} className="mb-4">
                  <label>Language {index + 1}</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    value={language}
                    onChange={(e) =>
                      handleArrayChange("languages", index, e.target.value)
                    }
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayEntry("languages", "")}
                className="mt-4 bg-blue-500 text-white p-2 rounded"
              >
                Add Another Language
              </button>
            </div>
          )}

          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePreviousStep}
                className="bg-gray-300 p-2 rounded mr-4"
              >
                Previous
              </button>
            )}
            {currentStep < 5 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
      {/* Template preview area */}
      // <div className="w-2/6 p-8 flex items-center">{renderTemplate(id)}</div>
    </div>
  );
};

export default ResumeEditPage;
