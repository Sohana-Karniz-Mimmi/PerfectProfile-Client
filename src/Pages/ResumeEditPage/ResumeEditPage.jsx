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
    setValue,
  } = useForm();

  const handleInputChange = (e) => {
    setValue(e.target.name, e.target.value, {
      shouldValidate: true, // triggers validation
      shouldDirty: true, // marks field as dirty
    });
  };

  // Skills
  const [skills, setSkills] = useState([]); // State to manage the list of custom skills
  const [customSkill, setCustomSkill] = useState(""); // State to manage the input for a new skill
  const [isCurrentJob, setIsCurrentJob] = useState(false);

  const handleCurrentJobChange = () => {
    setIsCurrentJob(!isCurrentJob);
    if (!isCurrentJob) {
      // Set the "endDate" value to "Present" when checkbox is selected
      setValue("endDate", "present");
    } else {
      // Clear "endDate" value when checkbox is deselected
      setValue("endDate", "");
    }
  };

  // Add a custom skill to the list
  const addSkill = () => {
    if (customSkill.trim()) {
      setSkills([...skills, customSkill.trim()]);
      setCustomSkill(""); // Clear the input field after adding
    }
  };

  // Remove a skill from the list
  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

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
    console.log(data.isCurrentJob);
    handleNextStep();
  };

  // Find common objects with the same _id in both arrays
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("../../../public/predefinedTemplates.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const template = data.find((item1) => item1.templateItem === id);

  const renderTemplate = (id) => {
    if (id === "template1") {
      return <Template1 data={template} />;
    }
    if (id === "template2") {
      return <Template2 data={template} />;
    }
  };

  console.log(id);
  console.log(template);

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
      {/* Content Area */}
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
                    {...register("name", { required: "Name is required" })}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 font-lora text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label>Job Title</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    {...register("jobTitle", {
                      required: "Job title is required",
                    })}
                    onChange={handleInputChange}
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
                  <label>Email</label>
                  <input
                    type="email"
                    className="border p-2 w-full rounded"
                    {...register("email", { required: "Email is required" })}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 font-lora text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label>Phone</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    {...register("phone", { required: "Phone is required" })}
                    onChange={handleInputChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 font-lora text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid">
                <div>
                  <label>Street Address</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    {...register("address", { required: "Phone is required" })}
                    onChange={handleInputChange}
                  />
                  {errors.address && (
                    <p className="text-red-500 font-lora text-sm">
                      {errors.address.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Work History</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label>Company Name</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    {...register("companyName", {
                      required: "Company name is required",
                    })}
                    onChange={handleInputChange}
                  />
                  {errors.companyName && (
                    <p className="text-red-500 font-lora text-sm">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label>Job Role</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    {...register("jobRole", {
                      required: "Job role is required",
                    })}
                    onChange={handleInputChange}
                  />
                  {errors.jobRole && (
                    <p className="text-red-500 font-lora text-sm">
                      {errors.jobRole.message}
                    </p>
                  )}
                </div>

                <div>
                  <label>Start Date</label>
                  <input
                    type="date"
                    className="border p-2 w-full rounded"
                    {...register("startDate", {
                      required: "Start date is required",
                    })}
                    onChange={handleInputChange}
                  />
                  {errors.startDate && (
                    <p className="text-red-500 font-lora text-sm">
                      {errors.startDate.message}
                    </p>
                  )}
                </div>

                <div>
                  <label>End Date</label>
                  {!isCurrentJob ? (
                    <input
                      type="date"
                      className="border p-2 w-full rounded"
                      {...register("endDate")}
                    />
                  ) : (
                    <p className="text-gray-500 font-lora text-sm">Present</p>
                  )}
                  {errors.endDate && (
                    <p className="text-red-500 font-lora text-sm">
                      {errors.endDate.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="currentJob"
                    {...register("isCurrentJob")}
                    onChange={handleCurrentJobChange}
                  />
                  <label htmlFor="currentJob" className="ml-2">
                    I'm currently working here
                  </label>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Education</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label>Degree</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    {...register("degree", { required: "Degree is required" })}
                    onChange={handleInputChange}
                  />
                  {errors.degree && (
                    <p className="text-red-500">{errors.degree.message}</p>
                  )}
                </div>
                <div>
                  <label>Institution</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    {...register("institution", {
                      required: "Institution is required",
                    })}
                    onChange={handleInputChange}
                  />
                  {errors.institution && (
                    <p className="text-red-500">{errors.institution.message}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Skills</h2>
              <div className="flex gap-4">
                {/* Custom skill input */}
                <div className="mt-4">
                  <label>Add Custom Skill</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="border p-2 w-full rounded"
                      value={customSkill}
                      onChange={(e) => setCustomSkill(e.target.value)}
                    />
                    <button
                      type="button"
                      className="bg-green-500 min-w-xl text-white py-2 px-5 rounded"
                      onClick={addSkill}
                    >
                      Add Skill
                    </button>
                  </div>
                </div>

                {/* Display added custom skills */}
                {skills.length > 0 && (
                  <div className="mt-4">
                    <h3 className="font-bold">Custom Skills</h3>
                    <ul>
                      {skills.map((skill, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center"
                        >
                          {skill}
                          <button
                            type="button"
                            className="text-red-500"
                            onClick={() => removeSkill(index)}
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Summary</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label>Professional Summary</label>
                  <textarea
                    className="border p-2 w-full rounded"
                    {...register("summary", {
                      required: "Summary is required",
                    })}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.summary && (
                    <p className="text-red-500">{errors.summary.message}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="mt-6">
            <button
              type="button"
              onClick={handlePreviousStep}
              className="bg-gray-300 p-2 rounded mr-4"
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Next
            </button>
          </div>
        </form>
      </div>
      {/* Template preview area */}
      // <div className="w-2/6 p-8 flex items-center">{renderTemplate(id)}</div>
    </div>
  );
};

export default ResumeEditPage;
