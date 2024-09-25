import { Helmet } from "react-helmet-async";
import Container from "../Shared/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import bg from "../assets/templateBg.webp";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa6";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  // const handleModal = () => {
  //   document.getElementById("my_modal_4").close();
  //   document.getElementById("my_modal_3");
  // };
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
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
        updateUserProfile(name, photo)
          .then(() => {
            toast.success("Successfully signed up!");
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
            toast.error("Profile update failed.");
          });
      })
      .catch((error) => {
        console.error("Error signing up user:", error);
        toast.error("Sign up failed.");
      });
  };

  return (
    <div
      className=""
      // style={{
      //   background: `url(${bg})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
    >
      <Helmet>
        <title>Register | Perfect Profile</title>
      </Helmet>

      <div>
        <h1 className="font-bold text-3xl text-primary">SignUp From</h1>
      </div>
      <div className="w-full p-5 gap-5 items-center ">
        <div className="">
          <form onSubmit={handleSignUp}>
            <div className="border-b-4 my-8 bg-[#F2F5FA]">
              <label>Name</label>
              <input
                className="w-full input bg-[#f2f5fa]"
                type="text"
                name="name"
                id=""
              />
            </div>
            <div className="border-b-4 my-8 bg-[#f2f5fa]">
              <label>
                Email
                <input
                  className="w-full input bg-[#f2f5fa]"
                  type="text"
                  name="email"
                  id=""
                />
              </label>
            </div>
            {/* <div className="border-b-4 my-8 bg-[#f2f5fa]">
              <label>
                Photo
                <input
                  className="w-full input bg-[#f2f5fa]"
                  type="text"
                  name="photo"
                  id=""
                />
              </label>
            </div> */}

            <div className="border-b-4 my-8 bg-[#f2f5fa]">
              <label>
                Password
                <input
                  className="w-full input bg-[#f2f5fa]"
                  type="text"
                  name="password"
                  id=""
                />
              </label>
            </div>
            {/* <div className="border-b-4 my-8 bg-[#f2f5fa]">
              <label>
                Confirm Password
                <input
                  className="w-full bg-[#f2f5fa] input"
                  type="text"
                  name="confirmPassword"
                  id=""
                />
              </label>
            </div> */}
            <div className="flex items-center gap-4">
              <div
                className="btn w-1/3  bg-primary text-white hover:scale-110 hover:bg-secondary"
                onClick={() => handleModal()}
              >
                <input type="submit" value="Register" />
              </div>
              <p>
                All ready have an account?{" "}
                <Link to="/signIn" className="text-primary font-bold">
                  Login
                </Link>
              </p>
            </div>
          </form>
          <div className="bg-gradient-to-r from-[#77E4C8] from-10% via-[#36C2CE] via-50% via-[#478CCF] to-[#6439FF] to-96%  py-8 mt-12">
            <p className="text-center text-white mb-6">
              SignUp with other account
            </p>
            <div className="flex justify-center space-x-4">
              <button className="btn btn-circle">
                <FaFacebook className=" text-blue-600 rounded-full bg-white" />
              </button>
              <button className="btn btn-circle">
                <FaTwitter className="text-blue-600 bg-white rounded-full" />
              </button>
              <button className="btn btn-circle ">
                <FaGoogle className="text-blue-600 bg-white rounded-full" />
              </button>
              <button className="btn btn-circle ">
                <FaLinkedin className="text-blue-600 bg-white rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default SignUp;
