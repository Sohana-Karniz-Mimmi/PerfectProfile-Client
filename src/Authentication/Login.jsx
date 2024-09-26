import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../Hook/useAuth";

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
        <div className="modal-box text-black bg-transparent relative h-[700px] w-[600px]">
          <div className="bg-white h-[620px] rounded-lg p-10">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-semibold mb-2">
                Great to have you back!
              </h1>
              <p className="text-lg font-medium text-center w-[300px]">
                Great to have you back!{" "}
                <span
                  onClick={handleModal}
                  className="text-blue-500 cursor-pointer"
                >
                  Sign Up
                </span>
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full mt-10 flex flex-col gap-5"
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
                <p></p>
              ) : (
                <p className="text-red-800 font-semibold">{errorText}</p>
              )}

              <button
                type="submit"
                className="btn bg-secondary text-white hover:bg-transparent hover:text-primary hover:border-secondary py-2 px-4 rounded"
              >
                Sign In
              </button>
            </form>

            <div className="divider text-base mt-7">Or Sign In With</div>

            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={() => handleSocialSignIn(googleSignIn)}
                className="w-full capitalize text-base bg-gray-100 border text-black shadow-none flex gap-3 items-center justify-center py-2 px-4 rounded"
              >
                <FcGoogle className="text-xl" /> Google
              </button>
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
