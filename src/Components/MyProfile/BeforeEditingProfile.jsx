import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import image from "../../assets/profile image/FjU2lkcWYAgNG6d.jpg";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import ProfileInfo from "./ProfileInfo";
import "./Profile.css";

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
    <>
      <div className="md:mt-6 mt-28 lg:px-8 md:px-4 px-2">
        <h1 className="text-3xl font-bold font-lora">Your Account</h1>
        <div className="lg:w-full xl:w-2/3 2xl:w-1/2 w-full " id="general">
          <form onSubmit={handleSaveChanges} className="w-full py-8">
            {/* Profile Photo Section */}
            <div className="flex flex-col justify-between ">
              <h2 className="md:text-lg text-base font-bold mb-4 font-montserrat">
                Profile Photo
              </h2>
              <div className="flex justify-between items-center ">
                <div className="">
                  <div className="rounded-full border-8 p-1  border-secondary md:w-32 md:h-32 w-20 h-20 overflow-hidden relative">
                    <img
                      src={profilePhoto}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="">
                  <input
                    type="file"
                    name="photo"
                    id="profilePhotoInput"
                    style={{ display: "none" }}
                    onChange={handleChangePhoto}
                  />
                  <label htmlFor="profilePhotoInput">
                    <span className="py-2 px-4 hover:bg-secondary font-montserrat cursor-pointer border border-slate-300">
                      Change Photo
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <hr className="border-dashed mt-6 border-slate-500" />

            {/* Name Section */}
            <div className="flex flex-col justify-between mt-4">
              <h1 className="md:text-lg text-base font-bold mb-4 font-montserrat">
                Name
              </h1>
              <div className="flex justify-between items-center">
                <div className="w-full md:w-1/2">
                  {isEditingName ? (
                    <div className="flex flex-col sm:flex-row text-sm sm:space-x-2 sm:items-center space-y-2 sm:space-y-0 w-full">
                      <input
                        type="text"
                        name="name"
                        value={tempUsername}
                        onChange={(e) => setTempUsername(e.target.value)}
                        className="border text-sm  py-2 px-4 w-full sm:w-auto sm:flex-1 focus:outline-primary"
                      />
                      <div className="flex justify-end sm:justify-start space-x-2">
                        <button
                          type="button"
                          className="border border-slate-300 py-2 px-4 hover:bg-secondary font-montserrat"
                          onClick={handleSaveName}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="border border-slate-300 py-2 px-4 hover:bg-red-600 font-montserrat"
                          onClick={handleCancelNameEdit}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <h1 className="text-base font-montserrat">{username}</h1>
                  )}
                </div>
                <div className="border">
                  {!isEditingName && (
                    <div className="w-full md:w-1/2">
                      <button
                        type="button"
                        className="border border-slate-300 py-2 px-4 hover:bg-secondary font-montserrat"
                        onClick={handleEditName}
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <hr className="border-dashed border-slate-500 mt-6" />

            {/* Email Section */}
            <div className="flex flex-col justify-between mt-4">
              <h1 className="md:text-lg text-base font-bold mb-4 font-montserrat">
                Email
              </h1>
              <div className="flex justify-between items-center">
                <div className="w-full md:w-1/2">
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
                          className="border border-slate-300 py-2 px-4 hover:bg-secondary font-montserrat"
                          onClick={() => {
                            setEmail(tempEmail); // Update email in state
                            handleCancelEmailEdit();
                          }}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="border border-slate-300 py-2 px-4 hover:bg-red-600 font-montserrat"
                          onClick={handleCancelEmailEdit}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <h1 className="md:text-base text-xs font-montserrat">
                      {email}
                    </h1>
                  )}
                </div>
                <div>
                  {!isEditingEmail && (
                    <div className="">
                      <button
                        type="button"
                        className="border border-slate-300 py-2 px-4 hover:bg-secondary font-montserrat"
                        onClick={handleEditEmail}
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <hr className="border-dashed border-slate-500 mt-6" />

            {/* Save Changes Button */}
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="border border-slate-300 py-2 px-4 hover:bg-secondary font-montserrat"
                disabled={isUploading}
              >
                {isUploading ? "Uploading..." : "Save Changes"}
              </button>
            </div>
          </form>

          <div className="w-[30%]"></div>
        </div>
      </div>
    </>
  );
};

export default BeforeEditingProfile;
