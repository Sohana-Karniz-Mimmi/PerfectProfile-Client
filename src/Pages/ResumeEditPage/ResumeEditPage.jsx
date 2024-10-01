// import { useState, useEffect } from "react";

// const ResumeEditPage = () => {
//   // Retrieve current step and highest completed step from localStorage or default to 1
//   const [currentStep, setCurrentStep] = useState(
//     () => parseInt(localStorage.getItem("currentStep")) || 1
//   );
//   const [completedSteps, setCompletedSteps] = useState(
//     () => JSON.parse(localStorage.getItem("completedSteps")) || []
//   );

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

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar with Stepper */}
//       <div className="w-1/6 bg-primary text-white p-8">
//         <div className="text-white text-xl font-bold mb-4">Logo</div>
//         <div className="space-y-6">
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               className={`flex items-center space-x-2 cursor-pointer ${
//                 currentStep === step.id
//                   ? "text-white font-montserrat"
//                   : isStepCompleted(step.id)
//                   ? "text-white font-bold font-montserrat"
//                   : "text-white"
//               }`}
//               onClick={() => handleStepClick(step.id)} // Make steps clickable
//             >
//               <span
//                 className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
//                   currentStep === step.id
//                     ? "border-white bg-white text-black font-bold font-montserrat"
//                     : isStepCompleted(step.id)
//                     ? "border-green-400 bg-green-400 text-white"
//                     : "border-white"
//                 }`}
//               >
//                 {isStepCompleted(step.id) ? "✓" : step.id}
//               </span>
//               <span>{step.name}</span>
//             </div>
//           ))}
//         </div>
//         {/* Progress Bar */}
//         <div className="mt-6">
//           <div className="text-sm mb-2">Resume Completeness:</div>
//           {/* Percentage Label */}
//           <div className="text-xl font-bold mb-2">{completionPercentage}%</div>
//           <div className="w-full bg-gray-200 h-2 rounded">
//             <div
//               className="bg-green-500 h-full"
//               style={{
//                 width: `${completionPercentage}%`,
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>

//       {/* Right Content Area */}
//       <div className="w-3/4 p-8">
//         <div>
//           {currentStep === 1 && (
//             <div>
//               <h2 className="text-xl font-bold mb-4">Heading</h2>
//               {/* Form for Heading */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label>Name</label>
//                   <input type="text" className="border p-2 w-full rounded" />
//                 </div>
//                 <div>
//                   <label>Job Title</label>
//                   <input type="text" className="border p-2 w-full rounded" />
//                 </div>
//               </div>
//             </div>
//           )}
//           {currentStep === 2 && (
//             <div>
//               <h2 className="text-xl font-bold mb-4">Work History</h2>
//               {/* Form for Work History */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label>Job Title</label>
//                   <input
//                     type="text"
//                     className="border p-2 w-full rounded"
//                     placeholder="e.g. Retail Sales Associate"
//                   />
//                 </div>
//                 <div>
//                   <label>Employer</label>
//                   <input
//                     type="text"
//                     className="border p-2 w-full rounded"
//                     placeholder="e.g. ZARA"
//                   />
//                 </div>
//                 <div>
//                   <label>Location</label>
//                   <input
//                     type="text"
//                     className="border p-2 w-full rounded"
//                     placeholder="e.g. Chittagong, Bangladesh"
//                   />
//                 </div>
//                 <div>
//                   <label>Start Date</label>
//                   <input type="month" className="border p-2 w-full rounded" />
//                 </div>
//                 <div>
//                   <label>End Date</label>
//                   <input type="month" className="border p-2 w-full rounded" />
//                 </div>
//                 <div>
//                   <label className="flex items-center space-x-2">
//                     <input type="checkbox" />
//                     <span>I currently work here</span>
//                   </label>
//                 </div>
//               </div>
//             </div>
//           )}
//           {/* Additional Forms for other steps */}
//         </div>

//         {/* Bottom Buttons */}
//         <div className="flex justify-between mt-8">
//           <button
//             className={`${
//               currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
//             } bg-gray-300 px-4 py-2 rounded`}
//             disabled={currentStep === 1}
//             onClick={() => {
//               setCurrentStep((prevStep) => prevStep - 1);
//               setCompletedSteps((prevCompleted) =>
//                 prevCompleted.filter((id) => id <= currentStep - 1)
//               ); // Reset future steps on Previous
//             }}
//           >
//             Previous
//           </button>
//           <button
//             className="bg-yellow-500 px-4 py-2 rounded"
//             onClick={handleNextStep}
//             disabled={currentStep === steps.length}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeEditPage;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Template1 from "../../Components/TemplateSection/Template1";
import Template2 from "../../Components/TemplateSection/Template2";
import Template3 from "../../Components/TemplateSection/Template3";

const ResumeEditPage = () => {
  // Initialize with blank storage on first load
  useEffect(() => {
    // Clear localStorage on initial load for a fresh session
    localStorage.removeItem("currentStep");
    localStorage.removeItem("completedSteps");
  }, []);

  // Retrieve current step and highest completed step from localStorage or default to 1
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

  // Total steps in the form process
  const steps = [
    { id: 1, name: "Heading" },
    { id: 2, name: "Work History" },
    { id: 3, name: "Education" },
    { id: 4, name: "Skills" },
    { id: 5, name: "Summary" },
    { id: 6, name: "Finalize" },
  ];

  // Update localStorage whenever currentStep or completedSteps changes
  useEffect(() => {
    localStorage.setItem("currentStep", currentStep);
    localStorage.setItem("completedSteps", JSON.stringify(completedSteps));
  }, [currentStep, completedSteps]);

  // Function to handle the "Next" button click
  const handleNextStep = () => {
    if (currentStep < steps.length) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      // Add current step to completed steps if moving forward
      setCompletedSteps((prevCompleted) =>
        [...prevCompleted, currentStep].filter(
          (step, index, self) => self.indexOf(step) === index
        )
      );
    }
  };

  // Helper to determine if a step is completed
  const isStepCompleted = (stepId) => {
    return completedSteps.includes(stepId);
  };

  // Handle clicking on a step directly
  const handleStepClick = (stepId) => {
    if (stepId < currentStep) {
      setCurrentStep(stepId);
      // Reset any steps beyond the clicked step to incomplete
      setCompletedSteps((prevCompleted) =>
        prevCompleted.filter((id) => id <= stepId)
      );
    } else if (stepId === currentStep) {
      setCurrentStep(stepId); // Stay on the same step if clicked
    }
  };

  // Calculate completion percentage (start from 0% until the first step is completed)
  const completionPercentage =
    completedSteps.length > 0
      ? Math.floor((completedSteps.length / steps.length) * 100)
      : 0;

  // Find common objects with the same _id in both arrays
  const [data, setData] = useState([]);
  const { id } = useParams();

  const [userData, setUserData] = useState({
    name: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    careerObjective: "",
    skills: [],
    education: [],
    certifications: [],
    workExperience: [],
    languages: [],
    extraCurricularActivities: [],
  });

  // Controlled input handler for simple text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
      return <Template2 data={template} userData={userData}/>;
    }
  };

  console.log(id);
  console.log(template);

  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar with Stepper */}
        <div className="w-1/6 bg-[#00000f] text-white p-8">
          <div className="text-white text-xl font-bold mb-4">Logo</div>
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center space-x-2 cursor-pointer ${
                  currentStep === step.id
                    ? "text-white font-montserrat"
                    : isStepCompleted(step.id)
                    ? "text-white font-bold font-montserrat"
                    : "text-gray-500 font-montserrat"
                }`}
                onClick={() => handleStepClick(step.id)} // Make steps clickable
              >
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                    currentStep === step.id
                      ? "border-white bg-white text-black font-bold font-montserrat"
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
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="text-xl mb-2 font-montserrat">
              Resume Completeness:
            </div>
            {/* Percentage Label */}
            <div className="flex flex-row-reverse items-center justify-center gap-2">
              <div className="text-lg font-bold font-montserrat">
                {completionPercentage}%
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-gradient-to-r from-secondary to-primary text-xl rounded-r h-full"
                  style={{
                    width: `${completionPercentage}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="w-3/4 p-8">
          <div>
            {currentStep === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Heading</h2>
                {/* Form for Heading */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label>Name</label>
                    <input
                      type="text"
                      className="border p-2 w-full rounded"
                      onChange={(e) => setUserData((prevData) => ({ ...prevData, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label>Job Title</label>
                    <input type="text" className="border p-2 w-full rounded"  onChange={handleInputChange}/>
                  </div>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Work History</h2>
                {/* Form for Work History */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label>Job Title</label>
                    <input
                      type="text"
                      className="border p-2 w-full rounded"
                      placeholder="e.g. Retail Sales Associate"
                    />
                  </div>
                  <div>
                    <label>Employer</label>
                    <input
                      type="text"
                      className="border p-2 w-full rounded"
                      placeholder="e.g. ZARA"
                    />
                  </div>
                  <div>
                    <label>Location</label>
                    <input
                      type="text"
                      className="border p-2 w-full rounded"
                      placeholder="e.g. Chittagong, Bangladesh"
                    />
                  </div>
                  <div>
                    <label>Start Date</label>
                    <input type="month" className="border p-2 w-full rounded" />
                  </div>
                  <div>
                    <label>End Date</label>
                    <input type="month" className="border p-2 w-full rounded" />
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>I currently work here</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
            {/* Additional Forms for other steps */}
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-between mt-8">
            <button
              className={`${
                currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
              } bg-gray-300 px-4 py-2 rounded`}
              disabled={currentStep === 1}
              onClick={() => {
                setCurrentStep((prevStep) => prevStep - 1);
                setCompletedSteps((prevCompleted) =>
                  prevCompleted.filter((id) => id <= currentStep - 1)
                ); // Reset future steps on Previous
              }}
            >
              Previous
            </button>
            <button
              className="bg-yellow-500 px-4 py-2 rounded"
              onClick={handleNextStep}
              disabled={currentStep === steps.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div>{renderTemplate(id)}</div>
      <div></div>
    </>
  );
};

export default ResumeEditPage;
