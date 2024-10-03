import React, { useState } from "react";
const ShareResume = () => {

  const [shareLink, setShareLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  // Function to request the share link from the backend
  const generateShareLink = async () => {
    try {
      const response = await fetch("http://localhost:5000/share-resume", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        setShareLink(data.shareLink);
        setIsCopied(false); // Reset copy state
      }
    } catch (error) {
      console.error("Error generating share link:", error);
    }
  };

  // Function to copy the link to clipboard
  const copyToClipboard = () => {
    if (shareLink) {
      navigator.clipboard.writeText(shareLink).then(() => {
        setIsCopied(true); // Set copied state to true
      });
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <button
        onClick={generateShareLink}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Share Resume
      </button>

      {shareLink && (
        <div className="mt-4">
          <p className="text-gray-700">Here is your shareable link:</p>
          <div className="flex items-center mt-2">
            <input
              type="text"
              value={shareLink}
              readOnly
              className="flex-grow p-2 border border-gray-300 rounded-l-md text-gray-600"
            />
            <button
              onClick={copyToClipboard}
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r-md ${
                isCopied ? "bg-green-700" : ""
              }`}
            >
              { isCopied ? "Copied!" : "Copy Link" }
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareResume;