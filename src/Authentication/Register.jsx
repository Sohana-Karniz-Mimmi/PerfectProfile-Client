import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import useAuth from "../Hook/useAuth";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../Hook/useAxiosPublic";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const axiosPublic = useAxiosPublic();
  const { createUser, googleSignIn, facebookSignIn, twitterSignIn } = useAuth();
  const [errorText, setErrorText] = useState("");
  const [eyePassword, setEyePassword] = useState(false);
  const [eyeConfirmPassword, setEyeConfirmPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleModal = () => {
    document.getElementById("my_modal_4").close();
    document.getElementById("my_modal_3").showModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long.");
      return;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      toast.error(
        "Password must contain at least one uppercase and one lowercase letter."
      );
      return;
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const userInfo = {
      name,
      email,
      productName: "free",
      role: "user",
    };

    try {
      const result = await createUser(email, password);
      await axiosPublic.post("/users", userInfo);
      toast.success("Successfully signed up!");
      document.getElementById("my_modal_4").close();
      navigate(from);
    } catch (error) {
      console.error("Error signing up user:", error);
      toast.error("Sign up failed.");
    }
  };

  const handleSocialSignIn = async (socialProvider) => {
    try {
      const result = await socialProvider();
      const user = result.user;
      const userInfo = {
        name: user?.displayName,
        email: user?.email,
        productName: "free",
        role: "user",
      };
      await axiosPublic.post("/users", userInfo);
      toast.success("Login Successful!");
      document.getElementById("my_modal_4").close();
      navigate(from);
    } catch (error) {
      console.error("Social login error:", error);
      toast.error("Social login failed.");
    }
  };

  return (
    <div>
      <Toaster />
      <Helmet>
        <title>Register | Perfect Profile</title>
      </Helmet>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box text-black bg-transparent !shadow-none relative h-full w-full font-montserrat">
          <div className="bg-white h-[667px] md:h-[680px]  p-6 !overflow-hidden">
            <div>
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
                  placeholder="Enter your name"
                  required
                  className="mt-1 block w-[424px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                  placeholder="Enter your email"
                  required
                  className="mt-1 block w-[424px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              {/* Password Field */}
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type={eyePassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  className="mt-1 block w-[424px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {eyePassword ? (
                  <IoMdEyeOff
                    onClick={() => setEyePassword(!eyePassword)}
                    className="cursor-pointer text-2xl absolute z-10 top-[30px] right-3"
                  />
                ) : (
                  <IoMdEye
                    onClick={() => setEyePassword(!eyePassword)}
                    className="cursor-pointer text-2xl absolute z-10 top-[30px] right-3"
                  />
                )}
              </div>
              {/* Confirm Password Field */}
              <div className="relative">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type={eyeConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Enter your confirm password"
                  required
                  className="mt-1 block w-[424px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {eyeConfirmPassword ? (
                  <IoMdEyeOff
                    onClick={() => setEyeConfirmPassword(!eyeConfirmPassword)}
                    className="cursor-pointer text-2xl absolute z-10 top-[30px] right-3"
                  />
                ) : (
                  <IoMdEye
                    onClick={() => setEyeConfirmPassword(!eyeConfirmPassword)}
                    className="cursor-pointer text-2xl absolute z-10 top-[30px] right-3"
                  />
                )}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  onClick={() => setRemember(!remember)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900 cursor-pointer"
                >
                  Accept Terms & Conditions
                </label>
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
                  className="py-2 rounded-md w-1/3 bg-secondary text-white hover:bg-transparent border hover:text-primary font-montserrat"
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

            <div className="bg-gradient-to-r from-[#64c3ab] to-[#3da2be] py-8 w-full mt-4">
              <p className="text-center text-white mb-6">
                SignUp with other account
              </p>
              <div className="flex justify-center space-x-4">
                {/* Google Sign In */}
                <div className="bg-opacity-75 shadow-[0_0_10px_4px_rgba(255,255,255,0.7)] rounded-full">
                  <button
                    onClick={() => handleSocialSignIn(googleSignIn)}
                    className="p-3 rounded-full bg-transparent hover:bg-transparent shadow-2xl focus:outline-none"
                  >
                    <FaGoogle className="text-white" />
                  </button>
                </div>

                {/* Facebook Sign In */}
                <div className="bg-opacity-75 shadow-[0_0_10px_4px_rgba(255,255,255,0.7)] rounded-full">
                  <button
                    onClick={() => handleSocialSignIn(facebookSignIn)}
                    className="p-3 rounded-full bg-transparent hover:bg-transparent shadow-2xl focus:outline-none"
                  >
                    <FaFacebook className="text-white" />
                  </button>
                </div>

                {/* Twitter Sign In */}
                <div className="bg-opacity-75 shadow-[0_0_10px_4px_rgba(255,255,255,0.7)] rounded-full">
                  <button
                    onClick={() => handleSocialSignIn(twitterSignIn)}
                    className="p-3 rounded-full bg-transparent hover:bg-transparent shadow-2xl focus:outline-none"
                  >
                    <FaTwitter className="text-white" />
                  </button>
                </div>

                {/* LinkedIn Sign In */}
                <div className="bg-opacity-75 shadow-[0_0_10px_4px_rgba(255,255,255,0.7)] rounded-full">
                  <button
                    onClick={() => handleSocialSignIn(linkedinSignIn)}
                    className="p-3 rounded-full bg-transparent hover:bg-transparent shadow-2xl focus:outline-none"
                  >
                    <FaLinkedin className="text-white" />
                  </button>
                </div>
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
