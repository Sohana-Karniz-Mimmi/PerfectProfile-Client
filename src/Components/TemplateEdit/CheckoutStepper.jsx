import React, { useState } from "react";

const CheckoutStepper = ({ stepConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };
  const ActiveComponent = stepConfig[currentStep - 1]?.Component;

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepConfig.length - 1)) * 100;
  };

  return (
    <>
      <div className="relative flex justify-between items-center mb-24 font-montserrat font-bold ">
        {stepConfig.map((step, index) => (
          <div key={index} className={`flex flex-col items-center relative `}>
            <div
              className={`w-8 h-8 rounded-full bg-gray-300 flex justify-center items-center mb-1 z-10 ${
                currentStep > index + 1 || isComplete
                  ? "bg-secondary text-white"
                  : ""
              } ${currentStep === index + 1 ? "bg-blue-700 text-white" : ""}`}
            >
              {currentStep > index + 1 || isComplete ? (
                <span>&#10003;</span>
              ) : (
                index + 1
              )}
            </div>
            <div>{step.name}</div>
          </div>
        ))}
        <div className="absolute top-[25%] left-0 h-1 bg-[#ccc] w-full border-none">
          <div
            className="h-full bg-secondary transition-all ease-linear duration-200"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      <div>
        <ActiveComponent />
        <div className="flex justify-end">
          {!isComplete && (
            <button
              className="btn mt-10 px-8 py-2 bg-secondary text-white font-bold text-lg hover:bg-secondary/80"
              onClick={handleNext}
            >
              {currentStep === stepConfig.length ? "Finish" : "Next"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckoutStepper;
