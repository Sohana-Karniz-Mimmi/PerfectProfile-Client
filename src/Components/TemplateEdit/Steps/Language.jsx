import React, { useState } from "react";

const Language = () => {
  const [nativeLanguages, setNativeLanguages] = useState([[]]);
  const [languages, setLanguages] = useState([[]]);

  const languageOptions = ["English", "Spanish", "French"]; // Add more options as needed

  const addNativeLanguage = () => {
    setNativeLanguages([...nativeLanguages, []]);
  };

  const removeNativeLanguage = (index) => {
    setNativeLanguages(nativeLanguages.filter((_, i) => i !== index));
  };

  const handleNativeChange = (selectedLanguage, index) => {
    const updatedNativeLanguages = [...nativeLanguages];
    if (updatedNativeLanguages[index].includes(selectedLanguage)) {
      updatedNativeLanguages[index] = updatedNativeLanguages[index].filter(
        (lang) => lang !== selectedLanguage
      );
    } else {
      updatedNativeLanguages[index].push(selectedLanguage);
    }
    setNativeLanguages(updatedNativeLanguages);
  };

  const addLanguage = () => {
    setLanguages([...languages, []]);
  };

  const removeLanguage = (index) => {
    setLanguages(languages.filter((_, i) => i !== index));
  };

  const handleLanguageChange = (selectedLanguage, index) => {
    const updatedLanguages = [...languages];
    if (updatedLanguages[index].includes(selectedLanguage)) {
      updatedLanguages[index] = updatedLanguages[index].filter(
        (lang) => lang !== selectedLanguage
      );
    } else {
      updatedLanguages[index].push(selectedLanguage);
    }
    setLanguages(updatedLanguages);
  };

  const languagesList = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Korean",
    "Italian",
    "Portuguese",
    "Russian",
    "Hindi",
    "Bengali",
  ];
  return (
    <div className="p-4 space-y-8">
      <div>
        <label className="block font-bold mb-2">NATIVE LANGUAGE</label>
        {nativeLanguages.map((selected, index) => (
          <div key={index} className="mb-4">
            <div className="relative">
              <button className="w-full p-2 border border-gray-300 rounded text-left">
                {selected.length === 0 ? "Select" : selected.join(", ")}
              </button>
              <div className="absolute left-0 right-0 bg-white border border-gray-300 rounded mt-1 z-10">
                {languageOptions.map((option) => (
                  <div key={option} className="flex items-center p-2">
                    <input
                      type="checkbox"
                      checked={selected.includes(option)}
                      onChange={() => handleNativeChange(option, index)}
                      className="mr-2"
                    />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => removeNativeLanguage(index)}
              className="mt-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button onClick={addNativeLanguage} className="text-blue-500">
          + Add another
        </button>
      </div>

      <div>
        <label className="block font-bold mb-2">LANGUAGE</label>
        {languages.map((selected, index) => (
          <div key={index} className="mb-4">
            <div className="relative">
              <button className="w-full p-2 border border-gray-300 rounded text-left">
                {selected.length === 0 ? "Select" : selected.join(", ")}
              </button>
              <div className="absolute left-0 right-0 bg-white border border-gray-300 rounded mt-1 z-10">
                {languageOptions.map((option) => (
                  <div key={option} className="flex items-center p-2">
                    <input
                      type="checkbox"
                      checked={selected.includes(option)}
                      onChange={() => handleLanguageChange(option, index)}
                      className="mr-2"
                    />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => removeLanguage(index)}
              className="mt-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button onClick={addLanguage} className="text-blue-500">
          + Add another
        </button>
      </div>
    </div>
  );
};

export default Language;
