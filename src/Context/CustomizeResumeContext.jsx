import React, { createContext, useState } from "react";

// Context তৈরি করা
export const ResumeContext = createContext();

// Provider Component তৈরি করা
export const ResumeProvider = ({ children }) => {
  const [savedResume, setSavedResume] = useState(null); 
  const [shareLink, setShareLink] = useState("");

  return (
    <ResumeContext.Provider value={{ savedResume, setSavedResume, shareLink, setShareLink }}>
      {children}
    </ResumeContext.Provider>
  );
};
