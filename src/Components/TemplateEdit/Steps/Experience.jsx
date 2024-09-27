import React, { useState } from "react";

const Experience = () => {
  const [isRemote, setIsRemote] = useState(false);
  const [currentWork, setCurrentWork] = useState(false);
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-gray-600 mb-2">
            What Was Your Title? <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            placeholder="Similar to a job title that best describes the work you did."
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="organization" className="text-gray-600 mb-2">
            Who Did You Do This For?
          </label>
          <input
            type="text"
            id="organization"
            placeholder="Person, organization, company, or family business you worked for."
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label htmlFor="location" className="text-gray-600 mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="e.g. Chittagong, Bangladesh"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mt-2 flex items-center">
            <input
              type="checkbox"
              id="remote"
              checked={isRemote}
              onChange={() => setIsRemote(!isRemote)}
              className="mr-2"
            />
            <label htmlFor="remote" className="text-gray-600">
              Remote
            </label>
            <span className="ml-1 text-gray-400 text-sm">(info icon)</span>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="startDate" className="text-gray-600 mb-2">
            Start Date
          </label>
          <div className="grid grid-cols-2 gap-2">
            <select className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Month</option>
              {/* Add month options */}
            </select>
            <select className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Year</option>
              {/* Add year options */}
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="endDate" className="text-gray-600 mb-2">
            End Date
          </label>
          <div className="grid grid-cols-2 gap-2">
            <select
              disabled={currentWork}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Month</option>
              {/* Add month options */}
            </select>
            <select
              disabled={currentWork}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Year</option>
              {/* Add year options */}
            </select>
          </div>
          <div className="mt-2 flex items-center">
            <input
              type="checkbox"
              id="currentWork"
              checked={currentWork}
              onChange={() => setCurrentWork(!currentWork)}
              className="mr-2"
            />
            <label htmlFor="currentWork" className="text-gray-600">
              I currently work here
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Experience;
