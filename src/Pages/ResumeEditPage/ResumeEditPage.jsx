// // import { useState, useEffect } from "react";

// // const ResumeEditPage = () => {
// //   // Retrieve current step and highest completed step from localStorage or default to 1
// //   const [currentStep, setCurrentStep] = useState(
// //     () => parseInt(localStorage.getItem("currentStep")) || 1
// //   );
// //   const [completedSteps, setCompletedSteps] = useState(
// //     () => JSON.parse(localStorage.getItem("completedSteps")) || []
// //   );

// //   // Total steps in the form process
// //   const steps = [
// //     { id: 1, name: "Heading" },
// //     { id: 2, name: "Work History" },
// //     { id: 3, name: "Education" },
// //     { id: 4, name: "Skills" },
// //     { id: 5, name: "Summary" },
// //     { id: 6, name: "Finalize" },
// //   ];

// //   // Update localStorage whenever currentStep or completedSteps changes
// //   useEffect(() => {
// //     localStorage.setItem("currentStep", currentStep);
// //     localStorage.setItem("completedSteps", JSON.stringify(completedSteps));
// //   }, [currentStep, completedSteps]);

// //   // Function to handle the "Next" button click
// //   const handleNextStep = () => {
// //     if (currentStep < steps.length) {
// //       const newStep = currentStep + 1;
// //       setCurrentStep(newStep);
// //       // Add current step to completed steps if moving forward
// //       setCompletedSteps((prevCompleted) =>
// //         [...prevCompleted, currentStep].filter(
// //           (step, index, self) => self.indexOf(step) === index
// //         )
// //       );
// //     }
// //   };

// //   // Helper to determine if a step is completed
// //   const isStepCompleted = (stepId) => {
// //     return completedSteps.includes(stepId);
// //   };

// //   // Handle clicking on a step directly
// //   const handleStepClick = (stepId) => {
// //     if (stepId < currentStep) {
// //       setCurrentStep(stepId);
// //       // Reset any steps beyond the clicked step to incomplete
// //       setCompletedSteps((prevCompleted) =>
// //         prevCompleted.filter((id) => id <= stepId)
// //       );
// //     } else if (stepId === currentStep) {
// //       setCurrentStep(stepId); // Stay on the same step if clicked
// //     }
// //   };

// //   // Calculate completion percentage (start from 0% until the first step is completed)
// //   const completionPercentage =
// //     completedSteps.length > 0
// //       ? Math.floor((completedSteps.length / steps.length) * 100)
// //       : 0;

// //   return (
// //     <div className="flex min-h-screen">
// //       {/* Sidebar with Stepper */}
// //       <div className="w-1/6 bg-primary text-white p-8">
// //         <div className="text-white text-xl font-bold mb-4">Logo</div>
// //         <div className="space-y-6">
// //           {steps.map((step) => (
// //             <div
// //               key={step.id}
// //               className={`flex items-center space-x-2 cursor-pointer ${
// //                 currentStep === step.id
// //                   ? "text-white font-montserrat"
// //                   : isStepCompleted(step.id)
// //                   ? "text-white font-bold font-montserrat"
// //                   : "text-white"
// //               }`}
// //               onClick={() => handleStepClick(step.id)} // Make steps clickable
// //             >
// //               <span
// //                 className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
// //                   currentStep === step.id
// //                     ? "border-white bg-white text-black font-bold font-montserrat"
// //                     : isStepCompleted(step.id)
// //                     ? "border-green-400 bg-green-400 text-white"
// //                     : "border-white"
// //                 }`}
// //               >
// //                 {isStepCompleted(step.id) ? "✓" : step.id}
// //               </span>
// //               <span>{step.name}</span>
// //             </div>
// //           ))}
// //         </div>
// //         {/* Progress Bar */}
// //         <div className="mt-6">
// //           <div className="text-sm mb-2">Resume Completeness:</div>
// //           {/* Percentage Label */}
// //           <div className="text-xl font-bold mb-2">{completionPercentage}%</div>
// //           <div className="w-full bg-gray-200 h-2 rounded">
// //             <div
// //               className="bg-green-500 h-full"
// //               style={{
// //                 width: `${completionPercentage}%`,
// //               }}
// //             ></div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Right Content Area */}
// //       <div className="w-3/4 p-8">
// //         <div>
// //           {currentStep === 1 && (
// //             <div>
// //               <h2 className="text-xl font-bold mb-4">Heading</h2>
// //               {/* Form for Heading */}
// //               <div className="grid grid-cols-2 gap-4">
// //                 <div>
// //                   <label>Name</label>
// //                   <input type="text" className="border p-2 w-full rounded" />
// //                 </div>
// //                 <div>
// //                   <label>Job Title</label>
// //                   <input type="text" className="border p-2 w-full rounded" />
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //           {currentStep === 2 && (
// //             <div>
// //               <h2 className="text-xl font-bold mb-4">Work History</h2>
// //               {/* Form for Work History */}
// //               <div className="grid grid-cols-2 gap-4">
// //                 <div>
// //                   <label>Job Title</label>
// //                   <input
// //                     type="text"
// //                     className="border p-2 w-full rounded"
// //                     placeholder="e.g. Retail Sales Associate"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label>Employer</label>
// //                   <input
// //                     type="text"
// //                     className="border p-2 w-full rounded"
// //                     placeholder="e.g. ZARA"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label>Location</label>
// //                   <input
// //                     type="text"
// //                     className="border p-2 w-full rounded"
// //                     placeholder="e.g. Chittagong, Bangladesh"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label>Start Date</label>
// //                   <input type="month" className="border p-2 w-full rounded" />
// //                 </div>
// //                 <div>
// //                   <label>End Date</label>
// //                   <input type="month" className="border p-2 w-full rounded" />
// //                 </div>
// //                 <div>
// //                   <label className="flex items-center space-x-2">
// //                     <input type="checkbox" />
// //                     <span>I currently work here</span>
// //                   </label>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //           {/* Additional Forms for other steps */}
// //         </div>

// //         {/* Bottom Buttons */}
// //         <div className="flex justify-between mt-8">
// //           <button
// //             className={`${
// //               currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
// //             } bg-gray-300 px-4 py-2 rounded`}
// //             disabled={currentStep === 1}
// //             onClick={() => {
// //               setCurrentStep((prevStep) => prevStep - 1);
// //               setCompletedSteps((prevCompleted) =>
// //                 prevCompleted.filter((id) => id <= currentStep - 1)
// //               ); // Reset future steps on Previous
// //             }}
// //           >
// //             Previous
// //           </button>
// //           <button
// //             className="bg-yellow-500 px-4 py-2 rounded"
// //             onClick={handleNextStep}
// //             disabled={currentStep === steps.length}
// //           >
// //             Next
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ResumeEditPage;

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Template1 from "../../Components/TemplateSection/Template1";
// import Template2 from "../../Components/TemplateSection/Template2";
// import Template3 from "../../Components/TemplateSection/Template3";
// import { useForm } from "react-hook-form";

// const ResumeEditPage = () => {
//   // Initialize with blank storage on first load
//   useEffect(() => {
//     // Clear localStorage on initial load for a fresh session
//     localStorage.removeItem("currentStep");
//     localStorage.removeItem("completedSteps");
//   }, []);

//   // Retrieve current step and highest completed step from localStorage or default to 1
//   const [currentStep, setCurrentStep] = useState(1);
//   const [completedSteps, setCompletedSteps] = useState([]);

//   // Total steps in the form process
//   const steps = [
//     { id: 1, name: "Heading" },
//     { id: 2, name: "Work History" },
//     { id: 3, name: "Education" },
//     { id: 4, name: "Skills" },
//     { id: 5, name: "Summary" },
//     { id: 6, name: "Finalize" },
//   ];

//   // Update localStorage whenever currentStep or completedSteps changes
//   useEffect(() => {
//     localStorage.setItem("currentStep", currentStep);
//     localStorage.setItem("completedSteps", JSON.stringify(completedSteps));
//   }, [currentStep, completedSteps]);

//   // Function to handle the "Next" button click
//   const handleNextStep = () => {
//     if (currentStep < steps.length) {
//       const newStep = currentStep + 1;
//       setCurrentStep(newStep);
//       // Add current step to completed steps if moving forward
//       setCompletedSteps((prevCompleted) =>
//         [...prevCompleted, currentStep].filter(
//           (step, index, self) => self.indexOf(step) === index
//         )
//       );
//     }
//   };

//   // Helper to determine if a step is completed
//   const isStepCompleted = (stepId) => {
//     return completedSteps.includes(stepId);
//   };

//   // Handle clicking on a step directly
//   const handleStepClick = (stepId) => {
//     if (stepId < currentStep) {
//       setCurrentStep(stepId);
//       // Reset any steps beyond the clicked step to incomplete
//       setCompletedSteps((prevCompleted) =>
//         prevCompleted.filter((id) => id <= stepId)
//       );
//     } else if (stepId === currentStep) {
//       setCurrentStep(stepId); // Stay on the same step if clicked
//     }
//   };

//   // Calculate completion percentage (start from 0% until the first step is completed)
//   const completionPercentage =
//     completedSteps.length > 0
//       ? Math.floor((completedSteps.length / steps.length) * 100)
//       : 0;

//   // Find common objects with the same _id in both arrays
//   const [data, setData] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     fetch("../../../public/predefinedTemplates.json")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   const template = data.find((item1) => item1.templateItem === id);

//   const renderTemplate = (id) => {
//     if (id === "template1") {
//       return <Template1 data={template} />;
//     }
//     if (id === "template2") {
//       return <Template2 data={template} />;
//     }
//   };

//   console.log(id);
//   console.log(template);

//   const {
//     register: registerForm1,
//     formState: { errors: errorsForm1 },
//     // watch: watchForm1, // To watch the form values in real-time
//   } = useForm();

//   // Form 2
//   const {
//     register: registerForm2,
//     handleSubmit: handleSubmitForm2,
//     formState: { errors: errorsForm2 },
//   } = useForm();

//   // Form 3
//   const {
//     register: registerForm3,
//     handleSubmit: handleSubmitForm3,
//     formState: { errors: errorsForm3 },
//   } = useForm();

//   // Form 4
//   const {
//     register: registerForm4,
//     handleSubmit: handleSubmitForm4,
//     formState: { errors: errorsForm4 },
//   } = useForm();

//   // Form 5
//   const {
//     register: registerForm5,
//     handleSubmit: handleSubmitForm5,
//     formState: { errors: errorsForm5 },
//   } = useForm();

//   const onSubmitForm1 = (data) => console.log("Form 1 Data:", data);
//   const onSubmitForm2 = (data) => console.log("Form 2 Data:", data);
//   const onSubmitForm3 = (data) => console.log("Form 3 Data:", data);
//   const onSubmitForm4 = (data) => console.log("Form 4 Data:", data);
//   const onSubmitForm5 = (data) => console.log("Form 5 Data:", data);

//   return (
//     <>
//       <div className="flex min-h-screen">
//         {/* Sidebar with Stepper */}
//         <div className="w-1/6 bg-[#00000f] text-white p-8">
//           <div className="text-white text-xl font-bold mb-4">Logo</div>
//           <div className="space-y-6">
//             {steps.map((step) => (
//               <div
//                 key={step.id}
//                 className={`flex items-center space-x-2 cursor-pointer ${
//                   currentStep === step.id
//                     ? "text-white font-montserrat"
//                     : isStepCompleted(step.id)
//                     ? "text-white font-bold font-montserrat"
//                     : "text-gray-500 font-montserrat"
//                 }`}
//                 onClick={() => handleStepClick(step.id)} // Make steps clickable
//               >
//                 <span
//                   className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
//                     currentStep === step.id
//                       ? "border-white bg-white text-black font-bold font-montserrat"
//                       : isStepCompleted(step.id)
//                       ? "border-green-400 bg-green-400 text-white"
//                       : "border-gray-500"
//                   }`}
//                 >
//                   {isStepCompleted(step.id) ? "✓" : step.id}
//                 </span>
//                 <span>{step.name}</span>
//               </div>
//             ))}
//           </div>
//           {/* Progress Bar */}
//           <div className="mt-6">
//             <div className="text-xl mb-2 font-montserrat">
//               Resume Completeness:
//             </div>
//             {/* Percentage Label */}
//             <div className="flex flex-row-reverse items-center justify-center gap-2">
//               <div className="text-lg font-bold font-montserrat">
//                 {completionPercentage}%
//               </div>
//               <div className="w-full bg-gray-200 h-2 rounded">
//                 <div
//                   className="bg-gradient-to-r from-secondary to-primary text-xl rounded-r h-full"
//                   style={{
//                     width: `${completionPercentage}%`,
//                   }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form Content Area */}
//         <div className="w-3/6 p-8">
//           <div>
//             {currentStep === 1 && (
//               <div>
//                 <div>
//                   <h2 className="text-xl font-bold mb-4">Heading</h2>
//                 </div>
//                 {/* Form for Heading */}
//                 <div className="border">
//                   {/* Form 1 */}
//                   <form onSubmit={(e) => e.preventDefault()}>
//                     <h2 className="text-xl font-bold mb-4">Heading</h2>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label>Name</label>
//                         <input
//                           type="text"
//                           className={`border p-2 w-full rounded ${
//                             errorsForm1.name ? "border-red-500" : ""
//                           }`}
//                           {...registerForm1("name", {
//                             required: "Name is required",
//                           })}
//                         />
//                         {errorsForm1.name && (
//                           <p className="text-red-500 text-sm">
//                             {errorsForm1.name.message}
//                           </p>
//                         )}
//                       </div>
//                       <div>
//                         <label>Job Title</label>
//                         <input
//                           type="text"
//                           className={`border p-2 w-full rounded ${
//                             errorsForm1.jobTitle ? "border-red-500" : ""
//                           }`}
//                           {...registerForm1("jobTitle", {
//                             required: "Job Title is required",
//                           })}
//                         />
//                         {errorsForm1.jobTitle && (
//                           <p className="text-red-500 text-sm">
//                             {errorsForm1.jobTitle.message}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             )}
//             {currentStep === 2 && (
//               <div>
//                 <h2 className="text-xl font-bold mb-4">Work History</h2>
//                 {/* Form for Work History */}
//                 <div className="grid grid-cols-2 gap-4">
//                   {/* <div>
//                     <label>Job Title</label>
//                     <input
//                       type="text"
//                       className="border p-2 w-full rounded"
//                       placeholder="e.g. Retail Sales Associate"
//                     />
//                   </div>
//                   <div>
//                     <label>Employer</label>
//                     <input
//                       type="text"
//                       className="border p-2 w-full rounded"
//                       placeholder="e.g. ZARA"
//                     />
//                   </div>
//                   <div>
//                     <label>Location</label>
//                     <input
//                       type="text"
//                       className="border p-2 w-full rounded"
//                       placeholder="e.g. Chittagong, Bangladesh"
//                     />
//                   </div>
//                   <div>
//                     <label>Start Date</label>
//                     <input type="month" className="border p-2 w-full rounded" />
//                   </div>
//                   <div>
//                     <label>End Date</label>
//                     <input type="month" className="border p-2 w-full rounded" />
//                   </div>
//                   <div>
//                     <label className="flex items-center space-x-2">
//                       <input type="checkbox" />
//                       <span>I currently work here</span>
//                     </label>
//                   </div> */}
//                 </div>
//               </div>
//             )}
//             {/* Additional Forms for other steps */}
//           </div>

//           {/* Bottom Buttons */}
//           <div className="flex justify-between mt-8">
//             <button
//               className={`${
//                 currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
//               } bg-gray-300 px-4 py-2 rounded`}
//               disabled={currentStep === 1}
//               onClick={() => {
//                 setCurrentStep((prevStep) => prevStep - 1);
//                 setCompletedSteps((prevCompleted) =>
//                   prevCompleted.filter((id) => id <= currentStep - 1)
//                 ); // Reset future steps on Previous
//               }}
//             >
//               Previous
//             </button>
//             {/* <button
//               className="bg-yellow-500 px-4 py-2 rounded"
//               onClick={handleNextStep}
//               disabled={currentStep === steps.length}
//             >
//               Next
//             </button> */}
//             <button
//               className="bg-yellow-500 px-4 py-2 rounded"
//               onClick={() => {
//                 const formIsValid = Object.keys(errorsForm1).length === 0; // Check if there are no validation errors
//                 if (formIsValid) {
//                   handleNextStep(); // Proceed to the next step if valid
//                 }
//               }}
//               disabled={currentStep === steps.length}
//             >
//               Next
//             </button>
//           </div>
//         </div>

//         {/* Template preview area */}
//         <div className="w-2/6 p-8 flex items-center">{renderTemplate(id)}</div>
//       </div>
//     </>
//   );
// };

// export default ResumeEditPage;

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
    setValue
  } = useForm();

  const handleInputChange = (e) => {
    setValue(e.target.name, e.target.value, {
      shouldValidate: true, // triggers validation
      shouldDirty: true, // marks field as dirty
    });
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
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label>Skill 1</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    {...register("skill1", { required: "Skill 1 is required" })}
                    onChange={handleInputChange}
                  />
                  {errors.skill1 && (
                    <p className="text-red-500">{errors.skill1.message}</p>
                  )}
                </div>
                <div>
                  <label>Skill 2</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    {...register("skill2", { required: "Skill 2 is required" })}
                    onChange={handleInputChange}
                  />
                  {errors.skill2 && (
                    <p className="text-red-500">{errors.skill2.message}</p>
                  )}
                </div>
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
