import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import useAuth from "../Hook/useAuth";
import { Toaster } from "react-hot-toast";

// const key = import.meta.env.VITE_IMAGE_HOISTING_API_KEY;
// const apiUrl = `https://api.imgbb.com/1/upload?key=${key}`;

const Register = () => {
  const { createUser, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");
  const [passInt, setPassInt] = useState("");
  const [eye, setEye] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleModal = () => {
    document.getElementById("my_modal_4").close();
    document.getElementById("my_modal_3").showModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    // const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Password validation system
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long.");
      return;
    } else if (!/(?=.*[a-z])(?=.*[A-Z]).{6}/.test(password)) {
      toast.error(
        "Password must contain at least one uppercase and one lowercase letter."
      );
      return;
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // Create user with email and password
    createUser(email, password)
      .then((result) => {
        // Update user profile with name and photo URL
        // updateUserProfile(name, photo)
        //   .then(() => {
        //     toast.success("Successfully signed up!");
        //     navigate(from, { replace: true });
        //   })
        //   .catch((error) => {
        //     console.error("Error updating profile:", error);
        //     toast.error("Profile update failed.");
        //   });
      })
      .catch((error) => {
        console.error("Error signing up user:", error);
        toast.error("Sign up failed.");
      });
  };
  const handleSocialSignIn = (socialProvider) => {
    socialProvider()
      .then(async (result) => {
        console.log(result);
        toast.success("Login SuccessFull !");
        document.getElementById("my_modal_4").close();

        setTimeout(() => {
          if (location.state) {
            document.getElementById("my_modal_4").close();
            navigate(location.state);
          } else {
            document.getElementById("my_modal_4").close();
            navigate("/");
          }
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Toaster />
      <Helmet>
        <title>Register | Perfect Profile</title>
      </Helmet>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box text-black bg-transparent !shadow-none relative h-full w-full">
          <div className="bg-white h-[695px] md:h-[680px] rounded-lg p-5">
            <div className="">
              <h1 className="text-2xl font-semibold">Register Form</h1>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full mt-6 flex flex-col gap-3"
            >
              <div className="relative">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type={eye ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {eye ? (
                  <IoMdEyeOff
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-2xl absolute z-10 top-[30px] right-3"
                  />
                ) : (
                  <IoMdEye
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-2xl absolute z-10 top-[30px] right-3"
                  />
                )}
              </div>
              <div className="relative">
                {eye ? (
                  <IoMdEyeOff
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-2xl absolute z-10 top-[36px]  right-2"
                  />
                ) : (
                  <IoMdEye
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-2xl absolute z-10 top-[36px] right-2"
                  />
                )}
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={(e) => setPassInt(e.target.value)}
                  />
                </div>
              </div>

              {/* <div className="border bg-transparent border-[#B0BEC5] h-[45px] rounded-md">
                <input
                  className="file-input bg-transparent cursor-pointer w-full h-[43px]"
                  type="file"
                  name="image"
                />
              </div> */}

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="mr-2"
                  onClick={() => setRemember(!remember)}
                />
                <label htmlFor="terms">Terms & Condition</label>
              </div>

              <div>
                {remember ? (
                  <></>
                ) : (
                  <p className="text-red-800 font-semibold">{errorText}</p>
                )}
              </div>
              <div className="-mt-2 md:-mt-2">
                <input
                  type="submit"
                  value="Register"
                  className="btn w-1/3 bg-secondary text-white hover:bg-transparent border  hover:text-primary font-montserrat"
                />
              </div>
              <span>
                Already have an account?
                <Link
                  onClick={() => handleModal()}
                  className="text-blue-500 cursor-pointer"
                >
                  Login
                </Link>
              </span>
            </form>

            <div className="bg-gradient-to-r from-[#64c3ab] to-[#3da2be]  py-8 w-full mt-4">
              <p className="text-center text-white mb-6">
                SignUp with other account
              </p>
              <div className="flex justify-center space-x-4">
                <div className="bg-opacity-75  shadow-[0_0_10px_4px_rgba(255,255,255,0.7)] rounded-full">
                  <button
                    onClick={() => handleSocialSignIn(googleSignIn)}
                    className="btn border-none btn-circle hover:bg-transparent bg-transparent shadow-2xl"
                  >
                    <FaGoogle className="text-white" />
                  </button>
                </div>

                <button className="btn btn-circle">
                  <FaFacebook className=" text-blue-600 rounded-full bg-white bg-opacity-20 backdrop-blur-lg shadow-[0_0_10px_4px_rgba(0,0,0,0.1)]" />
                </button>
                <button className="btn btn-circle">
                  <FaTwitter className="text-blue-600 bg-white bg-opacity-20 backdrop-blur-lg shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] rounded-full" />
                </button>
                <button className="btn btn-circle ">
                  <FaLinkedin className="text-blue-600 bg-white bg-opacity-20 backdrop-blur-lg shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] rounded-full" />
                </button>
              </div>
            </div>
          </div>

          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_4").close()}
          >
            ✕
          </button>
        </div>
      </dialog>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Register;
