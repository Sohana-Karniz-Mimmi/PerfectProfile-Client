import { useState } from "react";
import image from "../../assets/profile image/FjU2lkcWYAgNG6d.jpg";

const BeforeEditingProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("user name");
  const [tempUsername, setTempUsername] = useState(username);
  const [profilePhoto, setProfilePhoto] = useState(image);
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUsername(tempUsername);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempUsername(username);
    setIsEditing(false);
  };
  const handleRemovePhoto = () => {
    setProfilePhoto(null);
  };

  const handleChangePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="p-4 md:p-8 min-h-screen">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-8">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-4xl mb-4 text-center md:text-left font-montserrat">
            Profile Photo
          </h2>
          <div className="rounded-full border-4 border-gray-300 p-2 avatar-group w-32 h-32 md:w-40 md:h-40 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-full"
              src={image || "https://via.placeholder.com/150"}
              alt="profile photo"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150";
              }}
            />
          </div>
        </div>
        <div className="flex gap-4 ">
          <div className="relative inline-block">
            {/* File input (hidden) */}
            <input
              type="file"
              id="profilePhotoInput"
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files[0];
                console.log("Selected file:", file); // Handle the file change here
              }}
            />

            {/* Button to trigger file input */}
            <label htmlFor="profilePhotoInput">
              <button
                onClick={handleChangePhoto}
                className="py-2 px-4 bg-primary hover:bg-secondary text-white rounded-lg font-montserrat cursor-pointer"
              >
                Change
              </button>
            </label>
          </div>

          <div>
            <button className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg font-montserrat cursor-pointer">
              Remove
            </button>
          </div>
        </div>
      </div>

      <hr className="border-dashed my-8 border-slate-500" />

      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        <div className="w-full md:w-1/2">
          <h1 className="mb-4 text-2xl md:text-4xl text-center md:text-left font-montserrat">
            Name
          </h1>
          {isEditing ? (
            <div className="flex flex-col sm:flex-row sm:space-x-2 sm:items-center space-y-2 sm:space-y-0 w-full">
              <input
                type="text"
                value={tempUsername}
                onChange={(e) => setTempUsername(e.target.value)}
                className="border py-2 px-4 w-full sm:w-auto sm:flex-1 rounded-lg focus:outline-primary"
              />

              <div className="flex justify-end sm:justify-start space-x-2">
                <button
                  className="py-2 px-4 bg-primary hover:bg-secondary text-white rounded-lg font-montserrat"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg font-montserrat"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <h1 className="text-xl md:text-3xl text-center md:text-left">
              {username}
            </h1>
          )}
        </div>
        <div className="mt-4 md:mt-0">
          {!isEditing && (
            <button
              className="border py-2 px-4 bg-primary hover:bg-secondary text-white rounded-lg font-montserrat"
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
