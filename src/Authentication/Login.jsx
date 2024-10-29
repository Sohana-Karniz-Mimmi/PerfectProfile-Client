import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import useAuth from "../Hook/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../Hook/useAxiosPublic";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const {
    signIn,
    googleSignIn,
    facebookSignIn,
    twitterSignIn,
    setLoading,
    githubSignIn,
  } = useAuth();
  const [eye, setEye] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleModal = () => {
    document.getElementById("my_modal_3").close();
    document.getElementById("my_modal_4").showModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    if (remember) {
      try {
        setLoading(true);
        await signIn(email.value, password.value);
        toast.success("Login Successfully!");
        document.getElementById("my_modal_3").close();
        navigate(from);
      } catch (error) {
        handleError(error);
      }
    } else {
      setErrorText("Please accept our Terms & Conditions!");
    }
  };

  const handleError = (error) => {
    console.error(error.message);
    if (error.message.includes("Firebase: Error (auth/invalid-credential).")) {
      toast.error("Password doesn't match");
    } else if (error.message.includes("auth/too-many-requests")) {
      toast.error("This account has been temporarily disabled!");
    } else {
      toast.error("Login failed. Please try again.");
    }
  };

  const handleSocialSignIn = async (socialProvider) => {
    try {
      const result = await socialProvider();
      const user = result.user;
      const userInfo = {
        name: user.displayName,
        email: user.email,
        productName: "free",
        role: "user",
      };

      await axiosPublic.post("/users", userInfo);
      toast.success("Login Successful!");
      document.getElementById("my_modal_3").close();

      setTimeout(() => {
        navigate(from);
      }, 1000);
    } catch (error) {
      console.error("Social login error:", error);
      toast.error("Social login failed.");
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Login - PerfectProfile</title>
      </Helmet>
      <Toaster />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box text-black bg-transparent shadow-none relative h-full w-full font-montserrat">
          <div className="bg-white p-6 rounded-md max-w-[500px] mx-auto h-full md:h-auto">
            <h1 className="text-2xl font-semibold mb-2 text-center">
              Login Form
            </h1>
            <form
              onSubmit={handleSubmit}
              className="w-full mt-4 flex flex-col gap-5"
            >
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
                  className="mt-1 block w-full md:w-[424px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                  placeholder="Enter your password"
                  required
                  className="mt-1 block w-full md:w-[424px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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

              {errorText && (
                <p className="text-red-800 font-semibold">{errorText}</p>
              )}
              <div className="-mt-5 md:-mt-3">
                <input
                  type="submit"
                  value="Login"
                  className="py-2 rounded-md w-full md:w-1/3 bg-secondary text-white hover:bg-transparent border hover:text-primary font-montserrat cursor-pointer"
                />
              </div>
              <span className="block text-center">
                Don't have an account?{" "}
                <Link
                  onClick={handleModal}
                  className="text-blue-500 cursor-pointer"
                >
                  Register
                </Link>
              </span>
            </form>

            <div className="bg-gradient-to-r from-[#64c3ab] to-[#3da2be] py-8 w-full mt-5">
              <p className="text-center text-white mb-6">
                Sign In with other accounts
              </p>
              <div className="flex justify-center space-x-4">
                {/* <div className="bg-opacity-75 shadow-[0_0_10px_4px_rgba(255,255,255,0.7)] rounded-full">
                  <button
                    onClick={() => handleSocialSignIn(googleSignIn)}
                    className="p-2 rounded-full bg-transparent hover:bg-transparent focus:outline-none"
                  >
                    <FaGoogle className="text-white" />
                  </button>
                </div>
                <div className="bg-opacity-75 shadow-[0_0_10px_4px_rgba(255,255,255,0.7)] rounded-full">
                  <button
                    onClick={() => handleSocialSignIn(facebookSignIn)}
                    className="p-2 rounded-full bg-transparent hover:bg-transparent focus:outline-none"
                  >
                    <FaFacebook className="text-white" />
                  </button>
                </div>
                <div className="bg-opacity-75 shadow-[0_0_10px_4px_rgba(255,255,255,0.7)] rounded-full">
                  <button
                    onClick={() => handleSocialSignIn(twitterSignIn)}
                    className="p-2 rounded-full bg-transparent hover:bg-transparent focus:outline-none"
                  >
                    <FaTwitter className="text-white" />
                  </button>
                </div>
                <div className="bg-opacity-75 shadow-[0_0_10px_4px_rgba(255,255,255,0.7)] rounded-full">
                  <button
                    onClick={() => handleSocialSignIn(githubSignIn)}
                    className="p-2 rounded-full bg-transparent hover:bg-transparent focus:outline-none"
                  >
                    <FaGithub className="text-white" />
                  </button>
                </div> */}
                {/* <div>
                  <Link onClick={() => handleSocialSignIn(googleSignIn)}>
                    <button className="flex items-center text-white border p-2 rounded bg-opacity-75 shadow-[0_0_10px_4px_rgba(255,255,255,0.7)]">
                      <FaGoogle className="mr-2 " /> <span>SignIn</span>
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
                  <p className="font-lora">Sign In with Google</p>
                </div>
              </div>
            </div>
          </div>

          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
