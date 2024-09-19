import { Helmet } from "react-helmet-async";
import Container from "../Shared/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import bg from "../assets/templateBg.webp";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Password validation
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
      className="flex items-center min-h-screen"
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Helmet>
        <title>Register | Perfect Profile</title>
      </Helmet>
      <Container>
        <div className="md:flex w-full p-5 gap-5 items-center">
          <div className="md:w-1/2 text-white">
            <h1 className="text-5xl font-bold text-center my-5">
              My Cv/Resume Creator
            </h1>
            <p>
              Make a Cv/Resume to define yourself right away. Meet thousands of
              job announcements and employers by the help of your profile with a
              private extension, which you can share on all social media
              platforms.
            </p>
            {/* <div className="text-center">
              <Link to="/signIn">
                <button className="btn bg-blue-400 hover:bg-blue-500 my-4 text-white">
                  Login
                </button>
              </Link>
            </div> */}
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSignUp} className="card-body shadow-xl">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo URL"
                  className="input input-bordered"
                  name="photo"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  name="confirmPassword"
                  required
                />
              </div>
              <div className="flex gap-2 mt-4">
                <input type="checkbox" />
                <p className="text-white">Terms & Condition</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-400 hover:bg-blue-500 text-white">
                  Register
                </button>
              </div>
              <div>
                <h1 className="text-white">
                  Already have an account?{" "}
                  <Link
                    className="text-teal-100 text-center font-bold"
                    to="/signIn"
                  >
                    Login
                  </Link>{" "}
                </h1>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Toaster />
    </div>
  );
};

export default SignUp;
