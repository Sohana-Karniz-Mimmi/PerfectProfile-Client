import React from "react";

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Institution Name */}
        <div className="flex flex-col">
          <label htmlFor="institutionName" className="text-gray-600 mb-2">
            Institution Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="institutionName"
            placeholder="e.g. University of Chittagong"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* School Location */}
        <div className="flex flex-col">
          <label htmlFor="schoolLocation" className="text-gray-600 mb-2">
            School Location
          </label>
          <input
            type="text"
            id="schoolLocation"
            placeholder="e.g. Chittagong, Bangladesh"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Degree */}
        <div className="flex flex-col">
          <label htmlFor="degree" className="text-gray-600 mb-2">
            Degree
          </label>
          <select
            id="degree"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Select</option>
            <option>Bachelor's</option>
            <option>Master's</option>
            <option>Doctorate</option>
            <option>Diploma</option>
            <option>Other</option>
          </select>
        </div>

        {/* Field of Study */}
        <div className="flex flex-col">
          <label htmlFor="fieldOfStudy" className="text-gray-600 mb-2">
            Field Of Study
          </label>
          <input
            type="text"
            id="fieldOfStudy"
            placeholder="e.g. Finance"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Graduation Date */}
        <div className="flex flex-col">
          <label htmlFor="graduationDate" className="text-gray-600 mb-2">
            Graduation Date (Or Expected Graduation Date)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <select
              id="graduationMonth"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Month</option>
              {/* Add month options */}
            </select>
            <select
              id="graduationYear"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Year</option>
              {/* Add year options */}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Education;
