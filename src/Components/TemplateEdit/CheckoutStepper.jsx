// import React, { useEffect, useRef, useState } from "react";

// const CheckoutStepper = ({ stepConfig = [] }) => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isComplete, setIsComplete] = useState(false);
//   const [margins, setMargins] = useState({
//     marginLeft: 0,
//     marginRight: 0,
//   });
//   const stepRef = useRef([]);

//   useEffect(() => {
//     setMargins({
//       marginLeft: stepRef.current[0].offsetWidth / 2,
//       marginRight: stepRef.current[stepConfig.length - 1].offsetWidth / 2,
//     });
//     console.log(stepRef.current[stepConfig.length - 1].offsetWidth);
//   }, [stepRef]);

//   const handleNext = () => {
//     setCurrentStep((prevStep) => {
//       if (prevStep === stepConfig.length) {
//         setIsComplete(true);
//         return prevStep;
//       } else {
//         return prevStep + 1;
//       }
//     });
//   };
//   const handlePrev = () => {
//     setCurrentStep(currentStep - 1);
//   };
//   const ActiveComponent = stepConfig[currentStep - 1]?.Component;

//   const calculateProgressBarWidth = () => {
//     return ((currentStep - 1) / (stepConfig.length - 1)) * 100;
//   };

//   return (
//     <>
//       <div className="relative flex justify-between items-center mb-24 font-montserrat font-bold ">
//         {stepConfig.map((step, index) => (
//           <div
//             ref={(el) => (stepRef.current[index] = el)}
//             key={index}
//             className={`flex flex-col items-center relative `}
//           >
//             <div
//               className={`w-8 h-8 rounded-full bg-gray-300 flex justify-center items-center mb-1 z-10 ${
//                 currentStep > index + 1 || isComplete
//                   ? "bg-secondary text-white"
//                   : ""
//               } ${currentStep === index + 1 ? "bg-blue-700 text-white" : ""}`}
//             >
//               {currentStep > index + 1 || isComplete ? (
//                 <span>&#10003;</span>
//               ) : (
//                 index + 1
//               )}
//             </div>
//             <div>{step.name}</div>
//           </div>
//         ))}
//         <div
//           style={{
//             width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
//             marginLeft: margins.marginLeft,
//             marginRight: margins.marginRight,
//           }}
//           className="absolute top-[25%] left-0 h-1 bg-[#ccc]  border-none"
//         >
//           <div
//             className="h-full bg-secondary transition-all ease-linear duration-500"
//             style={{ width: `${calculateProgressBarWidth()}%` }}
//           ></div>
//         </div>
//       </div>

//       <div>
//         <ActiveComponent />
//         <div className="flex justify-between">
//           {currentStep <= 1 ? (
//             <button className="btn disabled mt-10 px-8 py-2 bg-primary/70 text-white font-bold text-lg hover:bg-secondary/80">
//               Go Back
//             </button>
//           ) : (
//             <button
//               onClick={handlePrev}
//               className="btn mt-10 px-8 py-2 bg-primary/70 text-white font-bold text-lg hover:bg-secondary/80"
//             >
//               Go Back
//             </button>
//           )}
//           {!isComplete && (
//             <button
//               className="btn mt-10 px-8 py-2 bg-secondary text-white font-bold text-lg hover:bg-secondary/80"
//               onClick={handleNext}
//             >
//               {currentStep === stepConfig.length ? "Finish" : "Next"}
//             </button>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CheckoutStepper;


import React from "react";

const CheckoutStepper = ({ stepConfig, currentStep, onStepChange }) => {
  return (
    <div className="w-full">
      {/* Vertical Stepper */}
      <div className="flex flex-col items-start mb-8 space-y-4">
        {stepConfig.map((step, index) => (
          <div
            key={index}
            className="flex items-start cursor-pointer"
            onClick={() => onStepChange(index)}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                currentStep === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              {index + 1}
            </div>
            <div className="ml-4">
              <span
                className={`text-lg ${
                  currentStep === index
                    ? "text-blue-500 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {step.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutStepper;


