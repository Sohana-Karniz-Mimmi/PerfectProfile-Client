import React from "react";

const Heading = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg w-full">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="text-gray-600 mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="e.g. Fatema"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="surname" className="text-gray-600 mb-2">
            Surname
          </label>
          <input
            type="text"
            id="surname"
            placeholder="e.g. Khan"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="profession" className="text-gray-600 mb-2">
            Profession
          </label>
          <input
            type="text"
            id="profession"
            placeholder="e.g. Sr. Accountant"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="city" className="text-gray-600 mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            placeholder="e.g. Chittagong"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="postalCode" className="text-gray-600 mb-2">
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            placeholder="e.g. 4000"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="country" className="text-gray-600 mb-2">
            Country
          </label>
          <input
            type="text"
            id="country"
            placeholder="e.g. Bangladesh"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-gray-600 mb-2">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            placeholder="e.g. +880 1234 567890"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-600 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="alomgirhasanshakib@gmail.com"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Heading;
