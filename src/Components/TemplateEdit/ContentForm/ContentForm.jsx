import { useState } from "react";

const ContentForm = () => {
  const [formStep, setFormStep] = useState(1);

  // Function to handle next button
  const nextStep = () => {
    setFormStep(formStep + 1);
  };

  // Function to handle back button (if needed)
  const prevStep = () => {
    setFormStep(formStep - 1);
  };
  return (
    <div>
      {formStep === 1 && (
        <div className="space-y-6">
          <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl mb-16 text-blue-500">Personal Information!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. Afreeda"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Profession
              </label>
              <input
                type="text"
                placeholder="e.g. Sr. Accountant"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                placeholder="e.g. +880 1234 567890"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="e.g. f.khan@sample.bd"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Rajsahi"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Career Objective <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. To pursue a challenging career in..."
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-5 justify-between mt-6">
            <button
              onClick={prevStep}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 font-bold font-lato"
            >
              Previus Step
            </button>
            <button
              onClick={nextStep}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-all duration-300 font-bold font-lato"
            >
              Next Step
            </button>
          </div>
        </div>
      )}
      {formStep === 2 && (
        <form className="space-y-6">
            <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl mb-16 text-blue-500">Write Your Skills!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Skills 1
              </label>
              <input
                type="text"
                placeholder="e.g. Html"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Skills 2
              </label>
              <input
                type="text"
                placeholder="e.g. Css"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Skills 3
              </label>
              <input
                type="text"
                placeholder="e.g. Javascript"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Skills 4
              </label>
              <input
                type="text"
                placeholder="e.g. React Js"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Skills 5
              </label>
              <input
                type="text"
                placeholder="e.g. Node Js"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Skills 6
              </label>
              <input
                type="text"
                placeholder="e.g. MongoDB"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevStep}
              type="button"
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 font-bold font-lato"
            >
              Previus Step
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-all duration-300 font-bold font-lato"
            >
              Next Step
            </button>
          </div>
        </form>
      )}
      {formStep === 3 && (
        <form className="space-y-6">
            <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl mb-16 text-blue-500">Education And Certification!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
               University
              </label>
              <input
                type="text"
                placeholder="e.g. Dhaka University"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="e.g. Computer Science and Technology"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Graduation Year
              </label>
              <input
                type="date"
              
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Certificate
              </label>
              <input
                type="text"
                placeholder="e.g. Flutter Developer"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Academy Name Or Organization
              </label>
              <input
                type="text"
                placeholder="e.g. Udemy"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Certificate Issue Date
              </label>
              <input
                type="date"
                
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevStep}
              type="button"
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 font-bold font-lato"
            >
              Previus Step
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-all duration-300 font-bold font-lato"
            >
              Next Step
            </button>
          </div>
        </form>
      )}
      {formStep === 4 && (
        <form className="space-y-6">
            <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl mb-16 text-blue-500">Professional Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
               Job Title
              </label>
              <input
                type="text"
                placeholder="e.g. Data Analysis"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                placeholder="e.g. Google"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Write About Your Work
              </label>
              <input
                type="text"
                placeholder="e.g. Performed data analysis using Python..."
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Years Of Experince
              </label>
              <input
                type="text"
                placeholder="e.g. 4 Years"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-secondary"
              />
            </div>
          </div>

         

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevStep}
              type="button"
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 font-bold font-lato"
            >
              Previus Step
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-all duration-300 font-bold font-lato"
            >
              Next Step
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContentForm;
