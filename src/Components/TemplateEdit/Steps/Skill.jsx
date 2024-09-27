import React, { useState } from "react";

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const availableSkills = [
    { id: 1, name: "Social Perceptiveness" },
    { id: 2, name: "Quality Assurance" },
    { id: 3, name: "Good Telephone Etiquette" },
    { id: 4, name: "First Aid/CPR" },
  ];

  const addSkill = (skill) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Left Section - Search and Job Titles */}
      <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-md">
        <input
          type="text"
          placeholder="Search by job title"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <div className="space-y-2">
          {availableSkills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center justify-between p-2 border border-gray-200 rounded-md"
            >
              <span>{skill.name}</span>
              <button
                onClick={() => addSkill(skill.name)}
                className="bg-blue-500 text-white p-1 rounded-md"
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Text Editor */}
      <div className="w-full md:w-2/3">
        <div className="bg-white p-4 border border-gray-300 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Skills:</h3>
          <div className="border border-gray-300 p-2 h-40 overflow-y-auto">
            {skills.length === 0 ? (
              <p className="text-gray-500">Add your skills here.</p>
            ) : (
              <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">Skills: {skills.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
