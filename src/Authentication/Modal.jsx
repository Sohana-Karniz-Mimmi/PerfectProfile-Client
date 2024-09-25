import React, { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Modal.css"; // Import custom CSS if needed for keyframes
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Modal = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!isActive);
  const { signIn, googleSignIn, createUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((result) => {
        toast.success("Successfully Signed In");
        if (result.user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.error("SignIn Error:", error);
        toast.error("Failed to SignIn. Please Check your Credentials.");
      });
  };

  const handleSocialSignIn = (socialProvider) => {
    socialProvider().then((result) => {
      toast.success("Successfully Signed In with Social Account");
      if (result.user) {
        navigate(from, { replace: true });
      }
    });
  };
  //   signUp function
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    // const photo = e.target.photo.value;
    const password = e.target.password.value;
    // const confirmPassword = e.target.confirmPassword.value;

    // Password validation system
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long.");
      return;
    } else if (!/(?=.*[a-z])(?=.*[A-Z]).{6}/.test(password)) {
      toast.error(
        "Password must contain at least one uppercase and one lowercase letter."
      );
      return;
    }
    // else if (password !== confirmPassword) {
    //   toast.error("Passwords do not match.");
    //   return;
    // }

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
  return (
    <div
      className="flex items-center justify-center flex-col h-screen"
      // bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff]
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div
        className={`container ${
          isActive ? "active" : ""
        } bg-white rounded-[30px] shadow-2xl relative overflow-hidden w-[768px] max-w-full min-h-[480px]`}
      >
        {/* Sign-Up Form */}
        <div
          className={`form-container sign-up absolute top-0 h-full transition-all duration-[600ms] ease-in-out ${
            isActive ? "translate-x-full opacity-100 z-10" : "opacity-0 z-1"
          } left-0 w-1/2`}
        >
          <div className="bg-white flex items-center justify-center flex-col px-[40px] h-full">
            <h1 className="text-2xl font-bold mb-4">Create Account</h1>
            <div className="social-icons flex justify-center my-[20px]">
              <Link
                onClick={() => handleSocialSignIn(googleSignIn)}
                className="border border-[#ccc] rounded-full inline-flex items-center justify-center m-1 w-10 h-10"
              >
                <FaGoogle />
              </Link>
              <Link className="border border-[#ccc] rounded-full inline-flex items-center justify-center m-1 w-10 h-10">
                <FaFacebook />
              </Link>
              <Link className="border border-[#ccc] rounded-full inline-flex items-center justify-center m-1 w-10 h-10">
                <FaLinkedin />
              </Link>
              <Link className="border border-[#ccc] rounded-full inline-flex items-center justify-center m-1 w-10 h-10">
                <FaGithub />
              </Link>
            </div>
            <span className="text-[#333] text-[13px] no-underline mt-[15px] mb-[10px]">
              or use your email for registration
            </span>
            <form onSubmit={handleSignUp}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="bg-[#eee] border-0 my-[8px] py-[10px] px-[15px] text-[13px] rounded-[8px] w-full outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-[#eee] border-0 my-[8px] py-[10px] px-[15px] text-[13px] rounded-[8px] w-full outline-none"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-[#eee] border-0 my-[8px] py-[10px] px-[15px] text-[13px] rounded-[8px] w-full outline-none"
              />
              <button
                className="bg-[#512da8] text-white text-[12px] py-[10px] px-[45px] border border-transparent rounded-[8px] font-semibold tracking-[0.5px] uppercase mt-[10px] cursor-pointer"
                //   onClick={toggleActive}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Sign-In Form */}
        <div
          className={`form-container sign-in absolute top-0 h-full transition-all duration-[600ms] ease-in-out ${
            isActive ? "translate-x-full opacity-0 z-1" : "translate-x-0 z-2"
          } left-0 w-1/2`}
        >
          <div className="bg-white flex items-center justify-center flex-col px-[40px] h-full">
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            <div className="social-icons flex justify-center my-[20px]">
              <Link
                onClick={() => handleSocialSignIn(googleSignIn)}
                className="border border-[#ccc] rounded-full inline-flex items-center justify-center m-1 w-10 h-10"
              >
                <FaGoogle />
              </Link>
              <Link className="border border-[#ccc] rounded-full inline-flex items-center justify-center m-1 w-10 h-10">
                <FaFacebook />
              </Link>
              <Link className="border border-[#ccc] rounded-full inline-flex items-center justify-center m-1 w-10 h-10">
                <FaLinkedin />
              </Link>
              <Link className="border border-[#ccc] rounded-full inline-flex items-center justify-center m-1 w-10 h-10">
                <FaGithub />
              </Link>
            </div>
            <span className="text-[#333] text-[13px] no-underline mt-[15px] mb-[10px]">
              or use your email and password
            </span>
            <form onSubmit={handleSignIn}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-[#eee] border-0 my-[8px] py-[10px] px-[15px] text-[13px] rounded-[8px] w-full outline-none"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-[#eee] border-0 my-[8px] py-[10px] px-[15px] text-[13px] rounded-[8px] w-full outline-none"
              />
              <button
                className="bg-[#512da8] text-white text-[12px] py-[10px] px-[45px] border border-transparent rounded-[8px] font-semibold tracking-[0.5px] uppercase mt-[10px] cursor-pointer"
                //   onClick={toggleActive}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>

        {/* Toggle Panels */}
        <div
          className={`toggle-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-[600ms] ease-in-out z-[1000] ${
            isActive
              ? "-translate-x-full rounded-tr-[150px] rounded-br-[100px]"
              : "rounded-tl-[150px] rounded-bl-[100px]"
          }`}
        >
          <div
            className={`toggle bg-gradient-to-r from-[#5c6bc0] to-[#512da8] text-white relative left-[-100%] w-[200%] h-full transform transition-all duration-[600ms] ease-in-out ${
              isActive ? "translate-x-1/2" : "translate-x-0"
            }`}
          >
            <div
              className={`toggle-panel absolute w-1/2 h-full flex items-center justify-center flex-col px-[30px] text-center top-0 transition-all duration-[600ms] ease-in-out ${
                isActive
                  ? "transform translate-x-0"
                  : "transform -translate-x-[200%]"
              }`}
            >
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="text-[14px] leading-[20px] tracking-[0.3px] my-[20px]">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="bg-transparent border border-white text-white text-[12px] py-2 px-10 rounded-[8px] uppercase font-semibold tracking-wider mt-2 cursor-pointer"
                onClick={toggleActive}
              >
                Sign In
              </button>
            </div>
            <div
              className={`toggle-panel  absolute w-1/2 h-full flex items-center justify-center flex-col px-[30px] text-center top-0 right-0 transition-all duration-[600ms] ease-in-out ${
                isActive
                  ? "transform translate-x-[200%]"
                  : "transform translate-x-0"
              }`}
            >
              <h1 className="text-2xl font-bold">Hello, Friend!</h1>
              <p className="text-[14px] leading-[20px] tracking-[0.3px] my-[20px]">
                Enter your personal details and start your journey with us
              </p>
              <button
                className="bg-transparent border border-white text-white text-[12px] py-2 px-10 rounded-[8px] uppercase font-semibold tracking-wider mt-2 cursor-pointer"
                onClick={toggleActive}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Modal;
