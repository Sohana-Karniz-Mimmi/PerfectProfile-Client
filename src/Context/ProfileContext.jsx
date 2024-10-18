import React, { createContext, useState, useContext } from "react";

// Create the context
const ProfileContext = createContext();

// Create a provider component
export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({ image: "" });

  // This function will update the profile globally
  const updateProfile = (newProfile) => {
    setProfile(newProfile);
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook to use the Profile context
export const useProfile = () => {
  return useContext(ProfileContext);
};
