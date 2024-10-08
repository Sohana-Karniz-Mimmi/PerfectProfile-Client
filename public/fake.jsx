import React, { useState } from "react";
import useAxiosPublic from "../src/Hook/useAxiosPublic";

const ResumeCustomizer = () => {
  const [resumeData, setResumeData] = useState({}); // Resume customization data
  const [shareLink, setShareLink] = useState(""); // Shareable URL
  const [copied, setCopied] = useState(false); // Copy success state
  const axiosPublic = useAxiosPublic();

  // Function to handle customization changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to generate a shareable link
  const handleShare = async () => {
    try {
      const response = await axiosPublic.post("/share-resume", 
        resumeData,
        { withCredentials: true }
      );
      if (response.data.success) {
        setShareLink(response.data.shareLink); // Set the generated shareable URL
      }
    } catch (error) {
      console.error("Error generating share link:", error);
    }
  };

  // Function to copy the shareable link
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      setCopied(true); // Set the copied state
      setTimeout(() => setCopied(false), 2000); // Remove copied state after 2 seconds
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customize Your Resume</h1>

      {/* Example resume customization form */}
      <div className="mb-4">
        <label className="block text-lg font-semibold">Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={resumeData.fullName || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          placeholder="Enter your full name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold">Job Title:</label>
        <input
          type="text"
          name="jobTitle"
          value={resumeData.jobTitle || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          placeholder="Enter your job title"
        />
      </div>

      {/* Add more customization fields as needed */}

      {/* Share Button */}
      <button
        onClick={handleShare}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Generate Shareable Link
      </button>

      {/* Display Shareable Link and Copy Button */}
      {shareLink && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <p className="font-semibold">Shareable Link:</p>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={shareLink}
              readOnly
              className="w-full p-2 border rounded-md bg-gray-50"
            />
            <button
              onClick={copyToClipboard}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeCustomizer;
