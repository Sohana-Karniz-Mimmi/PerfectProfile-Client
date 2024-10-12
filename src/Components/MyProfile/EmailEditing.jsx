import React, { useState } from "react";

const EmailEditing = () => {
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [tempEmail, setTempEmail] = useState(email); // initial email

  const handleEditEmail = () => setIsEditingEmail(true);

  const handleSaveEmail = () => {
    setIsEditingEmail(false);
    // Logic to save email goes here (e.g., API call)
  };

  const handleCancelEmailEdit = () => {
    setIsEditingEmail(false);
    setTempEmail(email); // Reset to the original email if canceled
  };

  return (
    <div>
      {/* Email Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <h1 className="mb-4 text-2xl text-center md:text-left font-montserrat">
          Email
        </h1>
        {isEditingEmail ? (
          <div className="flex flex-col sm:flex-row sm:space-x-2 sm:items-center space-y-2 sm:space-y-0 w-full">
            <input
              type="email"
              name="email"
              value={tempEmail}
              onChange={(e) => setTempEmail(e.target.value)}
              className="border py-2 px-4 w-full sm:w-auto sm:flex-1 rounded-lg focus:outline-primary"
            />
            <div className="flex justify-end sm:justify-start space-x-2">
              <button
                type="button"
                className="py-2 px-4 bg-primary hover:bg-secondary text-white rounded-lg font-montserrat"
                onClick={handleSaveEmail}
              >
                Save
              </button>
              <button
                type="button"
                className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg font-montserrat"
                onClick={handleCancelEmailEdit}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <h1 className="text-xl text-center md:text-left">{email}</h1>
        )}
      </div>

      {!isEditingEmail && (
        <div className="mt-4 md:mt-16">
          <button
            type="button"
            className="border py-2 px-4 bg-primary hover:bg-secondary text-white rounded-lg font-montserrat"
            onClick={handleEditEmail}
          >
            Edit Email
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailEditing;
