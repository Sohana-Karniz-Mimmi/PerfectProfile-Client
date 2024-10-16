import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import image from "../../assets/profile image/FjU2lkcWYAgNG6d.jpg";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOISTING_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BeforeEditingProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [isEditingName, setIsEditingName] = useState(false);
  const [username, setUsername] = useState("User not found");
  const [tempUsername, setTempUsername] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(image);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [tempEmail, setTempEmail] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.displayName || "User not found");
      setTempUsername(user.displayName || "User not found");
      setEmail(user.email || "");
      setTempEmail(user.email || "");
      setProfilePhoto(user.photoURL || image);
    }
  }, [user]);

  const handleEditName = () => setIsEditingName(true);
  const handleSaveName = () => {
    setUsername(tempUsername);
    setIsEditingName(false);
  };

  const handleCancelNameEdit = () => {
    setTempUsername(username);
    setIsEditingName(false);
  };

  const handleEditEmail = () => setIsEditingEmail(true);
  const handleCancelEmailEdit = () => {
    setTempEmail(email);
    setIsEditingEmail(false);
  };

  const handleChangePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => setProfilePhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = async () => {
    let uploadedImageUrl = profilePhoto;

    if (selectedFile) {
      uploadedImageUrl = await uploadImageToImgbb(selectedFile);
      if (!uploadedImageUrl) {
        return;
      }
    }

    const updatedProfile = {
      name: tempUsername,
      email: tempEmail,
      photoURL: uploadedImageUrl,
    };

    try {
      const response = await axiosPublic.patch(
        `/updateProfile/${user?.email}`,
        updatedProfile
      );
      if (response.status === 200) {
        setUsername(tempUsername);
        setProfilePhoto(uploadedImageUrl);
        setEmail(tempEmail);
        setTempUsername(tempUsername);
        setTempEmail(tempEmail);
        Swal.fire("Success", "Profile updated successfully!", "success");
      } else {
        Swal.fire("Error", "Failed to update profile.", "error");
      }
    } catch (error) {
      console.error(error.message);
      Swal.fire("Error", "Failed to update profile.", "error");
    }
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    await handleUpdateProfile();
  };

  const uploadImageToImgbb = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      setIsUploading(true);
      const response = await fetch(image_hosting_api, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setIsUploading(false);

      if (data.success) {
        return data.data.url;
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      setIsUploading(false);
      toast.error("Failed to upload image.");
      return null;
    }
  };

  return (
    <form onSubmit={handleSaveChanges} className="p-4 md:p-8 min-h-screen">
      {/* Profile Photo Section */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="md:text-2xl mb-4 text-center md:text-left font-montserrat">
            Profile Photo
          </h2>
          <div className="flex justify-center items-center">
            <div className="rounded-full border-4 border-gray-300 w-32 h-32 md:w-40 md:h-40 overflow-hidden relative">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative inline-block mt-16">
          <input
            type="file"
            name="photo"
            id="profilePhotoInput"
            style={{ display: "none" }}
            onChange={handleChangePhoto}
          />
          <label htmlFor="profilePhotoInput">
            <span className="py-2 px-4 hover:bg-secondary font-montserrat cursor-pointer border">
              Change Photo
            </span>
          </label>
        </div>
      </div>

      <hr className="border-dashed mt-6 border-slate-500" />

      {/* Name Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="w-full md:w-1/2">
          <h1 className="mb-4 text-2xl text-center md:text-left font-montserrat">
            Name
          </h1>
          {isEditingName ? (
            <div className="flex flex-col sm:flex-row sm:space-x-2 sm:items-center space-y-2 sm:space-y-0 w-full">
              <input
                type="text"
                name="name"
                value={tempUsername}
                onChange={(e) => setTempUsername(e.target.value)}
                className="border py-2 px-4 w-full sm:w-auto sm:flex-1 focus:outline-primary"
              />
              <div className="flex justify-end sm:justify-start space-x-2">
                <button
                  type="button"
                  className="border py-2 px-4 hover:bg-secondary font-montserrat"
                  onClick={handleSaveName}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="border py-2 px-4 hover:bg-red-600 font-montserrat"
                  onClick={handleCancelNameEdit}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <h1 className="text-xl text-center md:text-left">{username}</h1>
          )}
        </div>

        {!isEditingName && (
          <div className="mt-4 md:mt-16">
            <button
              type="button"
              className="border py-2 px-4 hover:bg-secondary font-montserrat"
              onClick={handleEditName}
            >
              Edit
            </button>
          </div>
        )}
      </div>

      <hr className="border-dashed border-slate-500 mt-6" />

      {/* Email Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="w-full md:w-1/2">
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
                className="border py-2 px-4 w-full sm:w-auto sm:flex-1 focus:outline-primary"
              />
              <div className="flex justify-end sm:justify-start space-x-2">
                <button
                  type="button"
                  className="border py-2 px-4 hover:bg-secondary font-montserrat"
                  onClick={() => {
                    setEmail(tempEmail); // Update email in state
                    handleCancelEmailEdit();
                  }}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="border py-2 px-4 hover:bg-red-600 font-montserrat"
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
              className="border py-2 px-4 hover:bg-secondary font-montserrat"
              onClick={handleEditEmail}
            >
              Edit
            </button>
          </div>
        )}
      </div>

      <hr className="border-dashed border-slate-500 mt-6" />

      {/* Save Changes Button */}
      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="border py-2 px-4 hover:bg-secondary font-montserrat"
          disabled={isUploading}
        >
          {isUploading ? "Uploading..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default BeforeEditingProfile;
