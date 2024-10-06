import { useState } from "react";
import image from "../../assets/profile image/FjU2lkcWYAgNG6d.jpg";

const BeforeEditingProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("user name");
  const [tempUsername, setTempUsername] = useState(username);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUsername(tempUsername);
    s;
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempUsername(username);
    setIsEditing(false);
  };

  return (
    <div className="p-4 md:p-8  min-h-screen">
      {/* Profile Photo Section */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-8">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white text-2xl md:text-4xl mb-4 text-center md:text-left">
            Profile Photo
          </h2>
          <div className="rounded-full border-4 border-gray-300 p-2 avatar-group w-32 h-32 md:w-40 md:h-40 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-full"
              src={image || "https://via.placeholder.com/150"} // Default fallback image
              alt="profile photo"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150"; // Fallback image in case of error
              }}
            />
          </div>
        </div>
        <div className="text-white mt-4 md:mt-0">
          <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
            Change
          </button>
          {/* Hidden file input */}
          <input
            type="file"
            id="profilePhotoInput"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files[0];
              console.log("Selected file:", file);
              // Handle file upload logic here
            }}
          />
        </div>
      </div>

      <hr className="border-dashed my-8 " />

      {/* Name Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        <div className="w-full md:w-1/2">
          <h1 className="mb-4 text-2xl md:text-4xl text-white text-center md:text-left">
            Name
          </h1>
          {isEditing ? (
            <input
              type="text"
              value={tempUsername}
              onChange={(e) => setTempUsername(e.target.value)}
              className="border py-2 px-4 w-full rounded-lg text-gray-900"
            />
          ) : (
            <h1 className="text-xl md:text-3xl text-center md:text-left text-white">
              {username}
            </h1>
          )}
        </div>
        <div className="mt-4 md:mt-0">
          {isEditing ? (
            <div className="flex space-x-2">
              <button
                className="border py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="border py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="border py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
              onClick={handleEdit}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeforeEditingProfile;
