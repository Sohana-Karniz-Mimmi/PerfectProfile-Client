import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../Hook/useAuth";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";

const Login = () => {
  const { signIn, googleSignIn } = useAuth();
  const [eye, setEye] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleModal = () => {
    document.getElementById("my_modal_3").close();
    document.getElementById("my_modal_4").showModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    if (remember) {
      signIn(email, pass)
        .then((result) => {
          console.log(result);
          form.reset();
          toast.success("Login Successfully!");

          setTimeout(() => {
            if (location.state) {
              document.getElementById("my_modal_3").close();
              navigate(location.state);
            } else {
              document.getElementById("my_modal_3").close();
              navigate("/");
            }
          }, 1000);
        })
        .catch((error) => {
          console.log(error.message);
          if (
            error.message.includes("Firebase: Error (auth/invalid-credential).")
          ) {
            toast.error("Password doesn't match");
          } else if (error.message.includes("auth/too-many-requests")) {
            toast.error("This account has been temporarily disabled!");
          }
        });
    } else {
      setErrorText("Please accept our Terms & Conditions!");
    }
  };

  const handleSocialSignIn = (socialProvider) => {
    socialProvider()
      .then(async (result) => {
        console.log(result);
        toast.success("Login Successfully!");

        setTimeout(() => {
          if (location.state) {
            document.getElementById("my_modal_3").close();
            navigate(location.state);
          } else {
            document.getElementById("my_modal_3").close();
            // navigate("/");
          }
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box text-black bg-transparent shadow-none relative h-full w-full">
          <div className="bg-white h-[580px] md:h-[575px] rounded-lg p-10">
            <div>
              <h1 className="text-2xl font-semibold mb-2">Login</h1>
              {/* <p className="text-lg font-medium text-center w-[300px]">
                Great to have you back!{" "}
                <span
                  onClick={handleModal}
                  className="text-blue-500 cursor-pointer"
                >
                  Sign Up
                </span>
              </p> */}
            </div>

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

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  onClick={() => setRemember(!remember)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Terms & Conditions
                </label>
              </div>

              {remember ? (
                <></>
              ) : (
                <p className="text-red-800 font-semibold">{errorText}</p>
              )}
              <div className="-mt-5 md:-mt-3">
                <input
                  type="submit"
                  value="Login"
                  className="btn w-1/3 bg-secondary text-white hover:bg-transparent border  hover:text-primary"
                />
              </div>
              <span>
                Don't have an account?
                <Link
                  onClick={() => handleModal()}
                  className="text-blue-500 cursor-pointer"
                >
                  Register
                </Link>
              </span>
            </form>

            <div className="bg-gradient-to-r from-[#77E4C8] from-10% via-[#36C2CE] via-50% via-[#478CCF] to-[#6439FF] to-96%  py-8 w-full mt-5">
              <p className="text-center text-white mb-6">
                SignIn with other account
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => handleSocialSignIn(googleSignIn)}
                  className="btn btn-circle "
                >
                  <FaGoogle className="text-blue-600 bg-white rounded-full" />
                </button>
                <button className="btn btn-circle">
                  <FaFacebook className=" text-blue-600 rounded-full bg-white" />
                </button>
                <button className="btn btn-circle">
                  <FaTwitter className="text-blue-600 bg-white rounded-full" />
                </button>
                <button className="btn btn-circle ">
                  <FaLinkedin className="text-blue-600 bg-white rounded-full" />
                </button>
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
