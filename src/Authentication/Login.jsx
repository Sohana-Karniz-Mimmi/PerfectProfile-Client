import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import useAuth from "../Hook/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../Hook/useAxiosPublic";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { signIn, googleSignIn, facebookSignIn, twitterSignIn } = useAuth();
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
        const result = await signIn(email.value, password.value);
        const loggedInUser = result.user;

        const user = { email: loggedInUser.email };
        await axiosPublic.post("/login", user, { withCredentials: true });

        toast.success("Login Successfully!");
        setTimeout(() => {
          document.getElementById("my_modal_3").close();
          navigate(from);
        }, 1000);
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
    <div>
      <Helmet>
        <title>Login - PerfectProfile</title>
      </Helmet>
      <Toaster />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box text-black bg-transparent shadow-none relative h-full w-full font-montserrat">
          <div className="bg-white h-[552px] md:h-[538px] p-6">
            <h1 className="text-2xl font-semibold mb-2">Login Form</h1>
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
                  className="mt-1 block w-[424px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                  className="mt-1 block w-[424px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                  className="py-2 rounded-md w-1/3 bg-secondary text-white hover:bg-transparent border hover:text-primary font-montserrat cursor-pointer"
                />
              </div>
              <span>
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
                <div className="bg-opacity-75 shadow-[0_0_10px_4px_rgba(255,255,255,0.7)] rounded-full">
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
                    onClick={() => handleSocialSignIn(linkedinSignIn)}
                    className="p-2 rounded-full bg-transparent hover:bg-transparent focus:outline-none"
                  >
                    <FaLinkedin className="text-white" />
                  </button>
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

export default Login;
