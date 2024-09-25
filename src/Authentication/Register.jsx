import { Button, Checkbox, Input } from "@material-tailwind/react";
// import duckImg from "../../../public/NavImages/blackTextLogo.png";
// import facebook from "../../../public/Icons/facebook.png";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../Hook/useAuth";

const key = import.meta.env.VITE_IMAGE_HOISTING_API_KEY;
const apiUrl = `https://api.imgbb.com/1/upload?key=${key}`;

const Register = () => {
  const { createUser, setProfile, googleSignIn } = useAuth();
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

    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const email = form.email.value;
    const pass = form.password.value;

    const formData = new FormData();
    formData.append("image", image);

    const { data: imageUrl } = await axios.post(apiUrl, formData, {
      headers: { "content-type": "multipart/form-data" },
    });

    if (remember && imageUrl?.success) {
      if (passInt.length >= 6) {
        if (/[!@#$%^&*(),.?":{}|<>]/.test(passInt)) {
          if (/[a-z]/.test(passInt) && /[A-Z]/.test(passInt)) {
            createUser(email, pass)
              .then((result) => {
                console.log(result.user);
                toast.success("Register Success Fully !");
                form.reset();

                setTimeout(() => {
                  document.getElementById("my_modal_4").close();
                  navigate("/");
                }, 1000);

                setProfile(name, imageUrl?.data?.display_url);
              })
              .catch((error) => {
                console.log(error.message);
                if (
                  error.message.includes(
                    "Firebase: Error (auth/email-already-in-use)."
                  )
                ) {
                  toast.error("This Email Already in Use !");
                }
              });
          } else {
            toast.warning(
              "Your Password Have UpperCase or LowerCase Charecter's !"
            );
          }
        } else {
          toast.warning("Your password must have a special character !");
        }
      } else {
        toast.warning("Your Password must have 6 Characters !");
      }
    } else {
      setErrorText("Please Accept Our Terms & Condition !");
    }
  };

  const handleSocialSignIn = (socialProvider) => {
    socialProvider()
      .then(async (result) => {
        console.log(result);
        toast.success("Login Success Fully !");
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
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box text-black bg-transparent relative h-[820px] w-[600px]">
          <div className="bg-white h-[750px] rounded-lg p-8">
            <div className="flex flex-col items-center justify-center">
              {/* <img src={duckImg} className="mb-7" alt="" /> */}
              <h1 className="gro text-2xl font-semibold mb-2">
                Great to see you here !
              </h1>
              <p className="gro text-lg font-medium text-center w-[300px] ">
                It’s free to create an account a Already have an account ?
                <span
                  onClick={() => handleModal()}
                  className="text-blue-500 cursor-pointer"
                >
                  Log in
                </span>
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full mt-10 flex flex-col gap-3"
            >
              <Input name="name" label="Full Name" required />
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
                  onChange={(e) => setPassInt(e.target.value)}
                  required
                />
              </div>

              <div className="border bg-transparent border-[#B0BEC5] h-[45px] rounded-md">
                <input
                  className="file-input bg-transparent cursor-pointer w-full h-[43px]"
                  type="file"
                  name="image"
                />
              </div>

              <div className="">
                <Checkbox
                  onClick={() => setRemember(!remember)}
                  label="Terms & Condition"
                />
              </div>

              <div>
                {remember ? (
                  <></>
                ) : (
                  <p className="text-red-800 font-semibold">{errorText}</p>
                )}
              </div>

              <input
                type="submit"
                value={"Sign Up"}
                className="btn bg-secondary text-white hover:bg-transparent border border-[#FF689A] hover:text-primary"
              />
            </form>

            <div className="divider text-base gro mt-7">Or Sign Up With</div>

            <div className="flex items-center justify-between gap-3 mt-6">
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
    </div>
  );
};

export default Register;
