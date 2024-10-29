import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import useAuth from "../Hook/useAuth";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../Hook/useAxiosPublic";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const axiosPublic = useAxiosPublic();
  const {
    createUser,
    googleSignIn,
    updateUserProfile,
    facebookSignIn,
    twitterSignIn,
    githubSignIn,
  } = useAuth();
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
    console.log(name);
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
    console.log(e.target.name.value);
    const userInfo = {
      name,
      email,
      productName: "free",
      role: "user",
    };

    const fetchUserCounts = async () => {
      try {
        const response = await axiosPublic.get("/users");
        const users = response.data;
        const activeUsersCount = users.filter((user) => user.isActive).length;
        return {
          new_users: 1,
          active_users: activeUsersCount,
        };
      } catch (error) {
        console.error("Error fetching user counts:", error);
        return {
          new_users: 1,
          active_users: 0,
        };
      }
    };
    try {
      const result = await createUser(email, password);
      const user = result.user;
      // console.log(user, "this is usr 1");
      updateUserProfile(name);
      await axiosPublic.post("/users", userInfo);

      const userTrendsInfo = await fetchUserCounts();
      const date = new Date();
      await axiosPublic.post("/user-trends", { ...userTrendsInfo, date });

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
          <div className="bg-white sm:h-[720px] md:h-[685px] xl:h-[680px]  p-6 !overflow-hidden">
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
                {/* <div className="bg-opacity-75 shadow-[0_0_10px_4px_rgba(255,255,255,0.7)] rounded-full">
                  <button
                    onClick={() => handleSocialSignIn(googleSignIn)}
                    className="p-3 rounded-full bg-transparent hover:bg-transparent shadow-2xl focus:outline-none"
                  >
                    <FaGoogle className="text-white" />
                  </button>
                </div> */}

                {/* Facebook Sign In */}
                {/* <div className="bg-opacity-75 shadow-[0_0_10px_4px_rgba(255,255,255,0.7)] rounded-full">
                  <button
                    onClick={() => handleSocialSignIn(facebookSignIn)}
                    className="p-3 rounded-full bg-transparent hover:bg-transparent shadow-2xl focus:outline-none"
                  >
                    <FaFacebook className="text-white" />
                  </button>
                </div> */}

                {/* Twitter Sign In */}
                {/* <div className="bg-opacity-75 shadow-[0_0_10px_4px_rgba(255,255,255,0.7)] rounded-full">
                  <button
                    onClick={() => handleSocialSignIn(twitterSignIn)}
                    className="p-3 rounded-full bg-transparent hover:bg-transparent shadow-2xl focus:outline-none"
                  >
                    <FaTwitter className="text-white" />
                  </button>
                </div> */}

                {/* github Sign In */}
                {/* <div className="bg-opacity-75 shadow-[0_0_10px_4px_rgba(255,255,255,0.7)] rounded-full">
                  <button
                    onClick={() => handleSocialSignIn(githubSignIn)}
                    className="p-3 rounded-full bg-transparent hover:bg-transparent shadow-2xl focus:outline-none"
                  >
                    <FaGithub className="text-white" />
                  </button>
                </div> */}
                {/* <div>
                  <Link onClick={() => handleSocialSignIn(googleSignIn)}>
                    <button className="flex items-center text-white border p-2 rounded bg-opacity-75 shadow-[0_0_10px_4px_rgba(255,255,255,0.7)]">
                      <FaGoogle className="mr-2 " /> <span>SignUp</span>
                    </button>
                  </Link>
                </div> */}
                <div
                  className="border flex gap-2 py-2 px-2 bg-white rounded-md cursor-pointer"
                  onClick={() => handleSocialSignIn(googleSignIn)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  <p className="font-lora">Sign up with Google</p>
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
