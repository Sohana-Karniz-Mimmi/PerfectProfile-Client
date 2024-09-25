import { Button, Checkbox, Input } from "@material-tailwind/react";
// import duckImg from "../../../public/NavImages/blackTextLogo.png";
import { FcGoogle } from "react-icons/fc";
// import facebook from "../../../public/Icons/facebook.png";
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
          toast.success("Login Success Fully !");

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
            toast.error("Password Isn't Match");
          } else if (
            error.message.includes(
              "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
            )
          ) {
            toast.error("This account has been temporarily disabled !");
          }
        });
    } else {
      setErrorText("Please Accept Our Turms & Condition !");
    }
  };

  const handleSocialSignIn = (socialProvider) => {
    socialProvider()
      .then(async (result) => {
        console.log(result);
        toast.success("Login Success Fully !");

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
              {/* <img src={duckImg} className="mb-7" alt="" /> */}
              <h1 className="gro text-2xl font-semibold mb-2">
                Great to have you back !
              </h1>
              <p className="gro text-lg font-medium text-center w-[300px] ">
                Great to have you back !{" "}
                <span
                  onClick={handleModal}
                  className="text-blue-500 cursor-pointer"
                >
                  Sign Up
                </span>{" "}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full mt-10 flex flex-col gap-5"
            >
              <Input name="email" label="Email Address" required />
              <div className="relative">
                {eye ? (
                  <IoMdEyeOff
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-2xl absolute z-10 top-[10px] right-2"
                  />
                ) : (
                  <IoMdEye
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-2xl absolute z-10 top-[10px] right-2"
                  />
                )}
                <Input
                  className="z-0"
                  type={eye ? "text" : "password"}
                  name="password"
                  label="Password"
                  size="lg"
                  required
                />
              </div>
              <div className="">
                <Checkbox
                  onClick={() => setRemember(!remember)}
                  label="Turms & Condition"
                />
              </div>
              <div>
                {remember ? (
                  <p></p>
                ) : (
                  <p className="text-red-800 font-semibold">{errorText}</p>
                )}
              </div>
              <input
                type="submit"
                value={"Sign Up"}
                className="btn bg-secondary text-white hover:bg-transparent  hover:text-primary hover:border-secondary gro"
              />
            </form>

            <div className="divider text-base gro mt-7">Or Sign In With</div>

            <div className="flex items-center justify-center gap-3 mt-6">
              <Button
                onClick={() => handleSocialSignIn(googleSignIn)}
                className="w-full gro capitalize text-base bg-[#FAFAFA] border text-black shadow-none flex gap-3 items-center justify-center"
              >
                <FcGoogle className="text-xl" /> Google
              </Button>
              {/* <Button className="w-full gro capitalize text-base bg-[#FAFAFA] border text-black shadow-none flex gap-3 items-center justify-center">
                <img src={facebook} className="w-[22px] h-[20px]" /> FaceBook
              </Button> */}
            </div>
          </div>

          <form method="dialog" className="absolute bottom-12 left-[55%]">
            <button className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </button>
          </form>
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
