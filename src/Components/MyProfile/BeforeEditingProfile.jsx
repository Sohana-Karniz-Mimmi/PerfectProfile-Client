import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import image from "../../assets/profile image/FjU2lkcWYAgNG6d.jpg";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic, { axiosPublic } from "../../Hook/useAxiosPublic";
import ProfileInfo from "./ProfileInfo";
import { LuUser2 } from "react-icons/lu";
import "./Profile.css";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOISTING_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BeforeEditingProfile = () => {
  const { user, updateUserProfile, loading } = useAuth();
  const [preview, setPreview] = useState(null); // State for preview URL

  // Function to handle file upload and return the image URL
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file); // Create a temporary URL
      setPreview(previewURL); // Set preview URL in state
    }
    if (!file) return null;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.data.url; // Returning the URL of the uploaded image
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  const triggerFileInput = () => {
    document.getElementById("profilePhotoInput").click();
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    try {
      // Trigger file upload and wait for the result
      const fileInput = document.getElementById("profilePhotoInput");
      const image = await handleFileChange({
        target: fileInput,
      });

      // Update Firebase profile
      await updateUserProfile(name, image);
      // Assuming updateUserProfile accepts name and image

      // Update backend profile
      const response = await axiosPublic.patch(
        `/updateProfile/${user?.email}`,
        {
          name,
          image, // Add photo URL for backend update
        }
      );
      toast.success("User Updated Successfully");
      console.log("Backend updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }

    // Log the name and photo URL for confirmation
    console.log("Updated name:", name, "Photo URL:", image);
    // Reload the page after 0.5 seconds
    setTimeout(() => {
      window.location.reload();
    }, 700);
  };

  return (
    <>
      <div className="md:mt-6 mt-28 lg:px-8 md:px-4 px-2">
        <h1 className="text-3xl font-bold font-lora">Your Account</h1>
        <div className="lg:w-full xl:w-2/3 2xl:w-1/2 w-full " id="general">
          <form onSubmit={handleSubmit} className="w-full py-8">
            {/* Profile Photo Section */}
            <div className="flex flex-col justify-between ">
              <h2 className="md:text-lg text-base font-bold mb-4 font-montserrat">
                Profile Photo
              </h2>
              <div className="flex justify-between items-center ">
                {/* <div className="">
                  <div className="rounded-full bg-gray-100 md:w-32 md:h-32 w-20 h-20 overflow-hidden relative">
                    {user?.photoURL ? (
                      <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <LuUser2 className="w-full h-full rounded-full text-gray-700 object-cover" />
                    )}
                  </div>
                </div> */}
                <div className="rounded-full bg-gray-100 md:w-32 md:h-32 w-20 h-20 overflow-hidden relative">
                  {preview ? (
                    <img
                      src={preview} // Display the selected image's preview URL
                      alt="Profile Preview"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="">
                      <div className="rounded-full bg-gray-100 md:w-32 md:h-32 w-20 h-20 overflow-hidden relative">
                        {user?.photoURL ? (
                          <img
                            src={user?.photoURL}
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <LuUser2 className="w-full h-full rounded-full text-gray-700 object-cover" />
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="font-montserrat">
                  <input
                    type="file"
                    name="photo"
                    id="profilePhotoInput"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    onClick={triggerFileInput}
                    className="px-4 py-2 bg-primary text-white rounded"
                  >
                    Change Photo
                  </button>
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
                <div className="w-full">
                  <div className="flex flex-col sm:flex-row text-sm sm:space-x-2 sm:items-center space-y-2 sm:space-y-0 w-full">
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.displayName}
                      onChange={(e) => {
                        e.target.value;
                      }}
                      className="border text-sm  py-3 px-4 w-full sm:w-auto sm:flex-1 focus:outline-none focus:border-gray-300"
                    />
                  </div>
                </div>
                {/* <div className="border">
                  <div className="w-full md:w-1/2">
                    <button
                      type="button"
                      className="border border-slate-300 py-2 px-4 hover:bg-secondary font-montserrat"
                    >
                      Edit
                    </button>
                  </div>
                </div> */}
              </div>
            </div>

            <hr className="border-dashed border-slate-500 mt-6" />

            {/* Email Section */}
            <div className="flex flex-col justify-between mt-4">
              <h1 className="md:text-lg text-base font-bold mb-4 font-montserrat">
                Email
              </h1>
              <div className="flex justify-between items-center">
                <div className="w-full">
                  <div className="flex flex-col sm:flex-row sm:space-x-2 sm:items-center space-y-2 sm:space-y-0 w-full">
                    <input
                      type="email"
                      name="email"
                      value={user?.email}
                      readOnly
                      className=" bg-transparent w-full sm:w-auto sm:flex-1 focus-within:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
                {/* <div>
                  <div className="">
                    <button
                      type="button"
                      className="border border-slate-300 py-2 px-4 hover:bg-secondary font-montserrat"
                    >
                      Edit
                    </button>
                  </div>
                </div> */}
              </div>
            </div>

            <hr className="border-dashed border-slate-500 mt-6" />

            {/* Save Changes Button */}
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="border border-slate-300 py-2 px-4 hover:bg-secondary font-montserrat"
              >
                Save Changes
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
