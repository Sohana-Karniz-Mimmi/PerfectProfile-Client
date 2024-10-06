import React, { createContext, useState } from "react";

// Context তৈরি করা
export const ResumeContext = createContext();

// Provider Component তৈরি করা
export const ResumeProvider = ({ children }) => {
  const [savedResume, setSavedResume] = useState(null); // গ্লোবাল স্টেট তৈরি করা

  return (
    <ResumeContext.Provider value={{ savedResume, setSavedResume }}>
      {children}
    </ResumeContext.Provider>
  );
};
